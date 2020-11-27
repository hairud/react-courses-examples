const padNumber = (num) => {
  const paddedNumber = num.toString().padStart(2, "0");

  return paddedNumber;
};

export { padNumber };
