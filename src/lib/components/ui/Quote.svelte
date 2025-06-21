<script lang="ts">
</script>

<div class="quote-container">
  <span class="relative">
    <span class="left-quote">&ldquo;</span>
    <p>
      In a world of scarcity, we treasure <em>tools</em>.
      <br />
      In a world of abundance, we treasure <em>taste</em>.
    </p>
    <span class="right-quote">&rdquo;</span>
  </span>
  <div class="attribution">
    <div class="separator-line"></div>
    <div class="attribution-text">
      <span class="author-info">
        Anu Atluru<span class="work-title"
          ><span class="comma">, </span> Taste is Eating Silicon Valley</span
        >
      </span>
    </div>
  </div>
</div>

<style>
  /* Container styles */
  .quote-container {
    position: relative;
    margin-top: 4rem;
    margin-bottom: 4rem;

    color: var(--color-neutral-950);
  }

  /* Quote text styles */
  .relative {
    display: block;
    position: relative;
    font-family: serif;
    font-size: 24px;
    line-height: 1.33;
  }

  /* Quote text paragraph styling */
  .relative > p {
    display: inline;
    font-family: serif;
    font-weight: 500;
    line-height: inherit;
    opacity: 0.9;
  }

  /* Left quote mark */
  .left-quote {
    position: absolute;
    left: -14px;
    font-family: Georgia;
    opacity: 0.9;
  }

  /* Right quote mark */
  .right-quote {
    position: absolute;
    transform: translateX(0.125rem);
    font-family: Georgia;
    opacity: 0.9;
  }

  /* Attribution container */
  .attribution {
    margin-left: auto;
    margin-top: 25px;
    display: flex;
    width: 100%;
    align-items: center;
    gap: 0.5rem;
  }

  /* Attribution line */
  .separator-line {
    display: none;
    height: 1px;
    flex-grow: 1;
    background-color: #9ca3af; /* gray-400 */
  }

  /* Attribution text container */
  .attribution-text {
    display: flex;
    flex-direction: column;
  }

  /* Attribution name and title */
  .author-info {
    font-size: 13px;
    font-weight: 500;
    line-height: none;
    text-decoration: none;
    opacity: 0.9;
  }

  /* Title part of attribution */
  .work-title {
    display: block;
    margin-top: 0.25rem;
    color: #1f2937; /* gray-1100 approximate */
  }

  /* Comma in attribution - hidden by default */
  .comma {
    display: none;
  }

  /* Line break in quote - hidden by default */
  p > br {
    display: none;
  }

  /* Media query for medium screens and up */
  @media (min-width: 768px) {
    .relative {
      font-size: 30px;
    }

    .attribution {
      width: 50%;
    }

    .separator-line {
      display: block;
    }

    .attribution-text {
      margin-left: auto;
      text-align: right;
    }

    .work-title {
      display: inline;
      margin-top: 0;
    }

    .comma {
      display: inline-block;
    }

    p > br {
      display: block;
    }
  }
</style>
