import debounce from 'debounce';
import detectBreakpoint from '@/utils/detect-breakpoint';
import addResizeListener from '@/utils/resize-handler';

const heroImageElement: HTMLImageElement = document.querySelector('.hero__image');

const detectScreenSize = 'mobile';
let mobileBreakpoint = detectBreakpoint(detectScreenSize);

const setImage = () => {
  const { image, mobileImage } = heroImageElement.dataset;
  heroImageElement.src = mobileBreakpoint ? mobileImage : image;
};

const handleResize = debounce(() => {
  const resizedBreakpoint = detectBreakpoint(detectScreenSize);

  if (mobileBreakpoint === resizedBreakpoint) return;

  mobileBreakpoint = resizedBreakpoint;
  setImage();
}, 100);

const init = () => {
  if (!heroImageElement) return;

  setImage();
  addResizeListener(handleResize);
};

init();
