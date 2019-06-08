// lesson
// iterating properties

function Circle(radius) {
  console.log(this);
  // Instance members
  this.radius = radius;
  this.move = function () {
    this.draw();
    console.log('A complex code to move a circle...!');
  }
}

// Prototype members
Circle.prototype.draw = function() {
  console.log("A complex code to draw a circle");
};

const c1 = new Circle(1);

console.log(Object.keys(c1));

for(key in c1) {
  console.log(key);
}

console.log(c1.hasOwnProperty('radius'));
console.log(c1.hasOwnProperty('draw'));
