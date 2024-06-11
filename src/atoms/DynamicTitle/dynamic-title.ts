import debounce from 'debounce';
import detectBreakpoint from '@/utils/detect-breakpoint';
import addResizeListener from '@/utils/resize-handler';

const titleWrapperElement: HTMLElement = document.querySelector('.dynamic-title');
let titleElement: HTMLElement;

if (titleWrapperElement) titleElement = titleWrapperElement?.querySelector('.h1');

const detectScreenSize = 'mobile';
let mobileBreakpoint = detectBreakpoint(detectScreenSize);

const setTitle = () => {
  const { title, shortTitle } = titleWrapperElement.dataset;

  titleElement.innerHTML = mobileBreakpoint ? shortTitle : title;
};

const handleResize = debounce(() => {
  const resizedBreakpoint = detectBreakpoint(detectScreenSize);

  if (mobileBreakpoint === resizedBreakpoint) return;

  mobileBreakpoint = resizedBreakpoint;
  setTitle();
}, 100);

const init = () => {
  if (!titleWrapperElement) return;

  setTitle();
  addResizeListener(handleResize);
};

init();
