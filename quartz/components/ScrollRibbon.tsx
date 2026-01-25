import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const ScrollRibbon: QuartzComponent = ({}: QuartzComponentProps) => {
  return (
    <a href="#" class="scroll-ribbon" aria-label="Back to top" title="Back to top">
      <span class="ribbon-stitching"></span>
      <span class="ribbon-arrow">↑</span>
    </a>
  )
}

ScrollRibbon.css = `
.scroll-ribbon {
  position: fixed;
  top: 0;
  right: 2rem;
  width: 2.5rem;
  height: 5rem;
  background:
    /* Fabric weave texture */
    repeating-linear-gradient(
      90deg,
      transparent 0px,
      transparent 2px,
      rgba(0, 0, 0, 0.05) 2px,
      rgba(0, 0, 0, 0.05) 3px,
      transparent 3px,
      transparent 5px
    ),
    repeating-linear-gradient(
      0deg,
      transparent 0px,
      transparent 3px,
      rgba(255, 255, 255, 0.03) 3px,
      rgba(255, 255, 255, 0.03) 4px,
      transparent 4px,
      transparent 7px
    ),
    /* 3D rounded edge effect - mirrored shadows on both sides */
    linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.12) 5%,
      transparent 12%,
      transparent 88%,
      rgba(0, 0, 0, 0.12) 95%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    /* Main fabric color */
    linear-gradient(
      180deg,
      #C42836 0%,
      #B42230 25%,
      #A41E2A 50%,
      #941A24 75%,
      #84161E 100%
    );
  clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%);
  z-index: 100;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 1rem;
  text-decoration: none;
  opacity: 0;
  transform: translateY(-100%);
  transition: opacity 0.6s ease-out, transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
  cursor: pointer;
  filter: drop-shadow(2px 3px 4px rgba(0, 0, 0, 0.3));
  /* Rounded edge illusion via box-shadow - mirrored */
  box-shadow:
    inset 3px 0 4px -2px rgba(0, 0, 0, 0.3),
    inset -3px 0 4px -2px rgba(0, 0, 0, 0.3),
    inset 0 3px 4px -2px rgba(0, 0, 0, 0.2);
}

/* Stitching lines along edges */
.ribbon-stitching {
  position: absolute;
  top: 6px;
  left: 4px;
  right: 4px;
  bottom: 14px;
  pointer-events: none;
  z-index: 2;
  /* Stitching border - dashed with 3D effect */
  border-left: 1px dashed rgba(120, 80, 50, 0.7);
  border-right: 1px dashed rgba(120, 80, 50, 0.7);
  /* Shadow next to stitch - mirrored */
  box-shadow:
    inset 1px 0 0 rgba(0, 0, 0, 0.1),
    inset -1px 0 0 rgba(0, 0, 0, 0.1);
}

/* Stitch hole shadows */
.ribbon-stitching::before {
  content: '';
  position: absolute;
  top: 0;
  left: -2px;
  width: 2px;
  bottom: 0;
  background: repeating-linear-gradient(
    180deg,
    transparent 0px,
    transparent 5px,
    rgba(0, 0, 0, 0.2) 5px,
    rgba(0, 0, 0, 0.2) 7px,
    transparent 7px,
    transparent 12px
  );
}

.ribbon-stitching::after {
  content: '';
  position: absolute;
  top: 0;
  right: -2px;
  width: 2px;
  bottom: 0;
  background: repeating-linear-gradient(
    180deg,
    transparent 0px,
    transparent 5px,
    rgba(0, 0, 0, 0.2) 5px,
    rgba(0, 0, 0, 0.2) 7px,
    transparent 7px,
    transparent 12px
  );
}

.scroll-ribbon.visible {
  opacity: 1;
  transform: translateY(0);
}

.scroll-ribbon:hover {
  background:
    repeating-linear-gradient(
      90deg,
      transparent 0px,
      transparent 2px,
      rgba(0, 0, 0, 0.04) 2px,
      rgba(0, 0, 0, 0.04) 3px,
      transparent 3px,
      transparent 5px
    ),
    repeating-linear-gradient(
      0deg,
      transparent 0px,
      transparent 3px,
      rgba(255, 255, 255, 0.04) 3px,
      rgba(255, 255, 255, 0.04) 4px,
      transparent 4px,
      transparent 7px
    ),
    linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.18) 0%,
      rgba(0, 0, 0, 0.1) 5%,
      transparent 12%,
      transparent 88%,
      rgba(0, 0, 0, 0.1) 95%,
      rgba(0, 0, 0, 0.18) 100%
    ),
    linear-gradient(
      180deg,
      #D43040 0%,
      #C42836 25%,
      #B42230 50%,
      #A41E2A 75%,
      #941A24 100%
    );
  filter: drop-shadow(2px 3px 5px rgba(0, 0, 0, 0.35));
}

.ribbon-arrow {
  color: rgba(255, 250, 240, 0.95);
  font-size: 1.2rem;
  font-weight: bold;
  text-shadow:
    0 1px 2px rgba(0, 0, 0, 0.4),
    0 -1px 0 rgba(255, 255, 255, 0.1);
  z-index: 3;
  position: relative;
}

@media (max-width: 768px) {
  .scroll-ribbon {
    right: 1rem;
    width: 2rem;
    height: 4rem;
    padding-top: 0.8rem;
  }

  .ribbon-arrow {
    font-size: 1rem;
  }

  .ribbon-stitching {
    left: 3px;
    right: 3px;
    top: 5px;
    bottom: 12px;
  }
}
`

ScrollRibbon.afterDOMLoaded = `
const ribbon = document.querySelector('.scroll-ribbon');
if (ribbon) {
  // Show/hide based on scroll position
  const toggleRibbon = () => {
    if (window.scrollY > 300) {
      ribbon.classList.add('visible');
    } else {
      ribbon.classList.remove('visible');
    }
  };

  window.addEventListener('scroll', toggleRibbon, { passive: true });
  toggleRibbon();

  // Smooth scroll to top on click
  ribbon.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
`

export default (() => ScrollRibbon) satisfies QuartzComponentConstructor
