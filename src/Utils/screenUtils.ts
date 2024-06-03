const isSmallDevice = () => {
  const SMALL = 576;
  const width = window.innerWidth;

  return width <= SMALL;
};

export { isSmallDevice };
