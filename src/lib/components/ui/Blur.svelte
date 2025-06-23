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
    height: 150px;
    z-index: 1;
    pointer-events: none;

    backdrop-filter: blur(1.5px) saturate(1.05) brightness(1.02);
    background: linear-gradient(
      to top,
      var(--color-cream),
      rgba(244, 244, 244, 0.5) 40%,
      transparent
    );
    mask: linear-gradient(to top, #000 20%, #0006 40%, #0004 70%, transparent);

    animation: breath 8s ease-in-out infinite;
  }

  @keyframes breath {
    50% {
      backdrop-filter: blur(1px) saturate(1.02) brightness(1.01);
    }
  }
</style>
