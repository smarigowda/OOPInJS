// lesson
// prototypes and inheritance

function Circle(radius) {
  console.log(this);
  // Instance members
  this.radius = radius;
}

// Prototype members
Circle.prototype.draw = () => {
  console.log("complex code to draw a circle");
};

Circle.prototype.toString = function() {
  return "Circle with radius: " + this.radius;
};
const c1 = new Circle(1);
const c2 = new Circle(1);

c1.draw();
c2.draw();
console.log(c1.toString());
