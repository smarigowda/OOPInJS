// lesson
// prototypes and inheritance

function Circle() {
  console.log("this is a circle");
  console.log(this);
}

const circle = new Circle();
console.log('--- Circle ---');
console.log('circle.__proto__:', circle.__proto__);
console.log('Circle.prototype:', Circle.prototype);
console.log('3:', circle.__proto__ === Circle.prototype);

const square = function () {
  console.log('This is a square');
}

console.log('--- Anonymous Function ---');
console.log('Object.getPrototypeOf(square):', Object.getPrototypeOf(square));

let x = {}; //?
let y = {}; //?
let ofx = Object.getPrototypeOf(x);
let ofy = Object.getPrototypeOf(y);
ofx === ofy;
ofx.__proto__ === ofy.__proto__; //?
