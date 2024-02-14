const isValidTempo = (tempo) => {
  if (tempo <= 0 || tempo >= 300 || Number.isNaN(tempo)) {
    return false;
  }
  return true;
};

const isValidNum = (num) => {
  if (num <= 0 || num > 4 || Number.isNaN(num)) {
    return false;
  }
  return true;
};

export { isValidNum, isValidTempo };
