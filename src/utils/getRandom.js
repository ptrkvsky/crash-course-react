// https://www.w3schools.com/js/js_random.asp
const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export default getRndInteger;
