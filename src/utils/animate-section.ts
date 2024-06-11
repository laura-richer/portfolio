const revealElement = (targetElementNode: HTMLElement) => {
  const element = targetElementNode;
  element.style.opacity = '1';
  element.style.transform = 'translateY(0)';
};

export default (targetElement: HTMLElement, callback?: CallableFunction) => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (callback) callback();
        revealElement(targetElement);

        observer.unobserve(targetElement);
      }
    });
  });

  observer.observe(targetElement);
};
