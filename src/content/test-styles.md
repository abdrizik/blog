---
title: 'Complete Style Test - All Prose Elements'
description: 'A comprehensive test file to validate all prose styling including headings, paragraphs, lists, blockquotes, code blocks, tables, and more'
date: '2025-06-21'
category: 'testing'
tags:
  - 'prose'
  - 'styling'
  - 'markdown'
  - 'test'
  - 'sveltekit'
featured: false
---

# H1 Heading - Main Title

This is a paragraph right after an H1 heading to test the spacing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

## H2 Heading - Section Title

Here's another paragraph after an H2. This should have proper spacing from the heading above. **This text is bold** and _this text is italic_. Here's some `inline code` in a sentence to test the styling.

### H3 Heading - Subsection

This paragraph follows an H3 heading. We're testing the margin and spacing relationships between different heading levels and their following content.

#### H4 Heading - Sub-subsection

Even smaller headings need proper spacing. This H4 should have appropriate margins and the paragraph should be close but readable.

##### H5 Heading - Minor Section

H5 headings are less common but still need styling.

###### H6 Heading - Smallest

The smallest heading level, rarely used but should still look good.

## Paragraph Spacing Tests

This is the first paragraph in a series. It should have proper line height and spacing from surrounding elements.

This is the second paragraph. The spacing between paragraphs should be consistent and readable. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

This is the third paragraph with a **bold phrase** and an _italic phrase_ and some `inline code` mixed in. The spacing should remain consistent regardless of the inline formatting.

## Link Testing

Here are various types of links to test:

- [Basic link](https://example.com)
- [Link with `code` inside](https://example.com)
- **[Bold link](https://example.com)**
- _[Italic link](https://example.com)_

## Lists Testing

### Unordered Lists

- First item in an unordered list
- Second item with **bold text**
- Third item with _italic text_
- Fourth item with `inline code`
- Fifth item with a [link](https://example.com)
  - Nested item level 2
  - Another nested item
    - Deeply nested item level 3
    - Another deep item
- Back to level 1

### Ordered Lists

1. First numbered item
2. Second numbered item with **bold text**
3. Third numbered item with _italic text_
4. Fourth numbered item with `inline code`
5. Fifth numbered item with a [link](https://example.com)
   1. Nested numbered item
   2. Another nested numbered item
      1. Deeply nested numbered item
      2. Another deep numbered item
6. Back to level 1

### Mixed Lists

1. First numbered item
   - Nested unordered item
   - Another nested unordered item
2. Second numbered item
   - More nested unordered items
     1. Deep nested numbered item
     2. Another deep numbered item
3. Third numbered item

## Blockquotes

> This is a simple blockquote. It should have proper indentation, styling, and spacing from surrounding elements.

> This is a longer blockquote that spans multiple lines to test how the styling works with longer content. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
>
> This blockquote has multiple paragraphs to test paragraph spacing within blockquotes. The second paragraph should have proper spacing from the first.

> ### Blockquote with Heading
>
> Blockquotes can contain other elements like headings. This tests how headings look inside blockquotes.
>
> - They can also contain lists
> - Like this unordered list
> - With multiple items
>
> And of course **bold text**, _italic text_, and `inline code` should work too.

## Code Blocks

### JavaScript Code Block

```javascript
// Basic JavaScript function
function calculateSum(a, b) {
  return a + b
}

// Arrow function
const multiply = (x, y) => x * y

// Class definition
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  greet() {
    console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`)
  }
}

// Usage
const person = new Person('Alice', 30)
person.greet()

// Array methods
const numbers = [1, 2, 3, 4, 5]
const doubled = numbers.map((n) => n * 2)
const filtered = numbers.filter((n) => n > 2)
const sum = numbers.reduce((acc, n) => acc + n, 0)

console.log({ doubled, filtered, sum })
```

### TypeScript Code Block

```typescript
// TypeScript interface
interface User {
  id: number
  name: string
  email: string
  isActive: boolean
}

// Generic function
function processItems<T>(items: T[], processor: (item: T) => T): T[] {
  return items.map(processor)
}

// Type alias
type ApiResponse<T> = {
  data: T
  status: number
  message: string
}

// Class with generics
class Repository<T> {
  private items: T[] = []

  add(item: T): void {
    this.items.push(item)
  }

  findById(id: number): T | undefined {
    return this.items.find((item: any) => item.id === id)
  }

  getAll(): T[] {
    return [...this.items]
  }
}

// Usage
const userRepo = new Repository<User>()
userRepo.add({
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
  isActive: true
})
```

### Python Code Block

```python
# Python class with methods
class DataProcessor:
    def __init__(self, data):
        self.data = data
        self.processed = False

    def clean_data(self):
        """Clean and validate the data"""
        cleaned = [item for item in self.data if item is not None]
        return cleaned

    def process(self):
        """Main processing method"""
        if not self.processed:
            self.data = self.clean_data()
            self.data = [item * 2 for item in self.data if isinstance(item, (int, float))]
            self.processed = True
        return self.data

# List comprehensions and lambda functions
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
evens = [n for n in numbers if n % 2 == 0]
squares = list(map(lambda x: x**2, numbers))
filtered_squares = list(filter(lambda x: x > 10, squares))

# Dictionary comprehension
word_lengths = {word: len(word) for word in ["hello", "world", "python", "code"]}

# Function with decorators
def timing_decorator(func):
    def wrapper(*args, **kwargs):
        import time
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end - start:.4f} seconds")
        return result
    return wrapper

@timing_decorator
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)
```

### CSS Code Block

```css
/* CSS Grid Layout */
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
  padding: 2rem;
}

/* Flexbox component */
.card {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

/* CSS Variables and calculations */
:root {
  --primary-color: #3b82f6;
  --secondary-color: #10b981;
  --text-color: #1f2937;
  --spacing-unit: 0.5rem;
  --border-radius: 6px;
}

.button {
  background: linear-gradient(
    135deg,
    var(--primary-color),
    var(--secondary-color)
  );
  color: white;
  padding: calc(var(--spacing-unit) * 2) calc(var(--spacing-unit) * 4);
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Media queries */
@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
    padding: 1rem;
  }

  .card {
    padding: 1rem;
  }
}
```

### Bash/Shell Code Block

```bash
#!/bin/bash

# Variables
APP_NAME="my-app"
VERSION="1.0.0"
BUILD_DIR="./build"
DEPLOY_DIR="/var/www/html"

# Functions
function log() {
    echo "[$(date +'%Y-%m-%d %H:%M:%S')] $1"
}

function cleanup() {
    log "Cleaning up temporary files..."
    rm -rf $BUILD_DIR/temp
}

# Error handling
set -e
trap cleanup EXIT

# Main script
log "Starting build process for $APP_NAME v$VERSION"

# Create build directory
mkdir -p $BUILD_DIR
cd $BUILD_DIR

# Install dependencies
log "Installing dependencies..."
npm install

# Run tests
log "Running tests..."
npm test

# Build application
log "Building application..."
npm run build

# Deploy
log "Deploying to $DEPLOY_DIR..."
sudo cp -r ./dist/* $DEPLOY_DIR/

# Set permissions
sudo chown -R www-data:www-data $DEPLOY_DIR
sudo chmod -R 755 $DEPLOY_DIR

log "Deployment completed successfully!"
```

### JSON Code Block

```json
{
  "name": "my-blog",
  "version": "1.0.0",
  "description": "A modern blog built with SvelteKit",
  "scripts": {
    "dev": "vite dev",
    "build": "vite build",
    "preview": "vite preview",
    "check": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json",
    "check:watch": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json --watch"
  },
  "dependencies": {
    "@sveltejs/kit": "^2.0.0",
    "svelte": "^5.0.0",
    "typescript": "^5.0.0"
  },
  "devDependencies": {
    "@sveltejs/adapter-auto": "^3.0.0",
    "@sveltejs/vite-plugin-svelte": "^4.0.0",
    "svelte-check": "^4.0.0",
    "vite": "^5.0.0"
  },
  "type": "module",
  "engines": {
    "node": ">=18.0.0"
  },
  "keywords": ["svelte", "sveltekit", "blog", "typescript", "vite"]
}
```

## Tables

### Simple Table

| Name    | Age | City        |
| ------- | --- | ----------- |
| Alice   | 30  | New York    |
| Bob     | 25  | Los Angeles |
| Charlie | 35  | Chicago     |

### Complex Table

| Feature           | Basic Plan  | Pro Plan     | Enterprise |
| ----------------- | ----------- | ------------ | ---------- |
| **Storage**       | 10 GB       | 100 GB       | Unlimited  |
| **Users**         | 5           | 50           | Unlimited  |
| **API Calls**     | 1,000/month | 10,000/month | Unlimited  |
| **Support**       | Email       | Email + Chat | 24/7 Phone |
| **Price**         | $9/month    | $49/month    | Custom     |
| **Custom Domain** | ❌          | ✅           | ✅         |
| **Analytics**     | Basic       | Advanced     | Enterprise |

## Horizontal Rules

Here's some content before a horizontal rule.

---

And here's some content after the horizontal rule.

## Images

Here's how images should be styled:

![Sample Image](https://via.placeholder.com/800x400/3b82f6/white?text=Sample+Image)

_This is a caption for the image above_

## Mixed Content Test

This section tests how different elements work together:

### Code with Explanation

When working with arrays in JavaScript, you might use the `map()` method:

```javascript
const numbers = [1, 2, 3, 4, 5]
const doubled = numbers.map((x) => x * 2)
console.log(doubled) // [2, 4, 6, 8, 10]
```

The `map()` method creates a new array with the results of calling a provided function on every element in the calling array.

> **Note**: The `map()` method does not mutate the original array. It returns a new array with the transformed elements.

### List with Code Examples

Here are some common JavaScript array methods:

1. **`forEach()`** - Executes a function for each array element

   ```javascript
   array.forEach((element) => console.log(element))
   ```

2. **`filter()`** - Creates a new array with elements that pass a test

   ```javascript
   const filtered = array.filter((x) => x > 5)
   ```

3. **`reduce()`** - Reduces the array to a single value
   ```javascript
   const sum = array.reduce((acc, x) => acc + x, 0)
   ```

## Final Section

This is the final section to test how the prose styling handles the end of a document. The spacing should be consistent throughout, and all elements should have proper visual hierarchy.

Thank you for reading this comprehensive test document! 🎉
