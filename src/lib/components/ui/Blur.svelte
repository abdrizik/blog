<div
  class="blur"
  aria-hidden="true"
></div>

<style>
  .blur {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 200px;
    z-index: 1;
    pointer-events: none;

    backdrop-filter: blur(3px) saturate(1.2) brightness(1.05);
    background: linear-gradient(
      to top,
      var(--color-cream),
      rgba(244, 244, 244, 0.8) 40%,
      transparent
    );
    mask: linear-gradient(to top, #000 20%, #0008 40%, #0006 70%, transparent);

    animation: breath 8s ease-in-out infinite;
  }

  @keyframes breath {
    50% {
      backdrop-filter: blur(2px) saturate(1.1) brightness(1.02);
    }
  }
</style>
