// Return an array without duplicates

const duplicate = (value, n) => {
  if (n <= 0) return [];
  return Array.from({ length: n }, () => value);
};

require("../Tests/duplicate.js")(duplicate);
