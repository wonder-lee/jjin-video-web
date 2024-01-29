const truncateString = (str: string, num: number) => {
  if (str.length > num) {
    return str.substring(0, num) + "...";
  } else {
    return str;
  }
};

export { truncateString };
