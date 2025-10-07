import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello JavaScript!</h1>
`;
Array.prototype.myMap = function (cb) {
  const temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const array = [1, 2, 3, 4, 5];
const multiplyBy2 = array.myMap((x) => x * 2);

console.log("multiplyBy2", multiplyBy2);
