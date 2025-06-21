/**
 * Parse markdown frontmatter
 * @param {string} markdown - The markdown content including frontmatter
 * @returns {{ frontmatter: Record<string, any>, content: string }}
 */
export function matter(markdown) {
  // Regex to capture frontmatter (group 1) and content (group 2)
  const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)

  if (!match) {
    return { frontmatter: {}, content: markdown }
  }

  const [, frontmatterText, content] = match

  /** @type {Record<string, any>} */
  const frontmatter = {}

  // Process YAML-like frontmatter
  const lines = frontmatterText.split(/\r?\n/)
  let currentKey = null
  let isCollectingList = false
  let listItems = []

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()

    // Skip empty lines
    if (!line) continue

    // If line starts with a dash and we're collecting list items
    if (line.startsWith('-') && isCollectingList) {
      listItems.push(line.substring(1).trim())
      continue
    }

    // Check for new key-value pair
    const colonIndex = line.indexOf(':')

    if (colonIndex > 0) {
      // Store any list we were collecting before moving to a new key
      if (isCollectingList && currentKey) {
        frontmatter[currentKey] = listItems
        isCollectingList = false
        listItems = []
      }

      // Extract key and value
      const key = line.slice(0, colonIndex).trim()
      let value = line.slice(colonIndex + 1).trim()

      // If empty value, this might be the start of a list
      if (!value) {
        currentKey = key
        isCollectingList = true
        continue
      }

      // Process the value
      currentKey = key
      isCollectingList = false

      // Handle quoted strings
      if (
        (value.startsWith("'") && value.endsWith("'")) ||
        (value.startsWith('"') && value.endsWith('"'))
      ) {
        value = value.slice(1, -1)
      }

      // Handle inline arrays - ensure tags are always arrays
      if (key === 'tags') {
        if (value.startsWith('[') && value.endsWith(']')) {
          try {
            frontmatter[key] = JSON.parse(value)
          } catch {
            frontmatter[key] = value
              .slice(1, -1)
              .split(',')
              .map((item) => item.trim())
              .filter(Boolean)
          }
        } else {
          // Single tag as string, convert to array
          frontmatter[key] = [value]
        }
      } else if (value.startsWith('[') && value.endsWith(']')) {
        // Handle other arrays
        try {
          frontmatter[key] = JSON.parse(value)
        } catch {
          frontmatter[key] = value
            .slice(1, -1)
            .split(',')
            .map((item) => item.trim())
            .filter(Boolean)
        }
      } else {
        // Regular value
        frontmatter[key] = value
      }
    }
  }

  // Add any remaining list
  if (isCollectingList && currentKey) {
    frontmatter[currentKey] = listItems
  }

  return { frontmatter, content }
}
