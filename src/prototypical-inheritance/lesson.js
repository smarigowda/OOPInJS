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

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function () {
  console.log("drawing a circle...");
};
const c = new Circle(1);

function Square(size, color) {
  Shape.call(this, color);
  this.size = size;
}

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

const s = new Square(10, "blue");
