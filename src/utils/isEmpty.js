//More info here https://ultimatecourses.com/blog/methods-to-determine-if-an-object-has-a-given-property
const isEmpty = obj => {
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) return false;
  }
  return true;
};

export default isEmpty;
