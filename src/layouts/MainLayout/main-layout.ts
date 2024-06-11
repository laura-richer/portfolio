import detectTouchevents from '@/utils/detect-touchevents';
import animateSection from '@/utils/animate-section';

document.documentElement.classList.add(detectTouchevents() ? 'touchevents' : 'no-touchevents');

const blocksToAnimate: NodeListOf<HTMLElement> = document.querySelectorAll('.animate-section');

blocksToAnimate.forEach(section => {
  animateSection(section);
});
