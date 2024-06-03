const isSmallDevice = () => {
  const SMALL = 576;
  const width = window.innerWidth;

  return width <= SMALL;
};

const isSmallAndLandscapeDevice = () => {
  const SMALL = 810;
  const width = document.documentElement.clientWidth;
  const height = document.documentElement.clientHeight;

  return width <= SMALL && width > height;
};

export { isSmallDevice, isSmallAndLandscapeDevice };
