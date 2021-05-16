function Square() {}
function Shape(color) {
  this.color = color;
}
function Circle(radius) {
  Shape.call(this, "red");
  this.radius = radius;
}

Shape.prototype.duplicate = function () {
  console.log("duplicating...");
};

const s = new Shape();

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function () {
  console.log("drawing a circle...");
};
const c = new Circle(1);
