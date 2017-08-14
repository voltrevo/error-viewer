'use strict';

const scriptFn = () => {
  const originalConsoleError = console.error.bind(console);

  const flashRed = () => {
    const cover = document.createElement('div');
    cover.style.position = 'absolute';
    cover.style.left = '0px';
    cover.style.top = '0px';
    cover.style.width = `${document.body.clientWidth}px`;
    cover.style.height = `${document.body.clientHeight}px`;
    cover.style.zIndex = '2000';
    cover.style.backgroundColor = 'red';
    cover.style.pointerEvents = 'none';
    cover.style.opacity = 0;

    document.body.appendChild(cover);
    cover.style.transition = 'opacity 0.1s';

    setTimeout(() => { cover.style.opacity = 0.3; });
    setTimeout(() => { cover.style.opacity = 0; }, 100);
    setTimeout(() => { cover.remove(); }, 250);
  };

  console.error = (...args) => {
    flashRed();
    return originalConsoleError(...args);
  };
};

const scriptTag = document.createElement('script');
scriptTag.textContent = `(${scriptFn})()`;
document.head.appendChild(scriptTag);
