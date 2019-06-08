// lesson
// prototypes and inheritance

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

Circle.prototype.toString = function() {
  return "Circle with radius: " + this.radius;
};
const c1 = new Circle(1);
const c2 = new Circle(1);

c1.move();
console.log(c1.toString());
