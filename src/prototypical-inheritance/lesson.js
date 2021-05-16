function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}
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

extend(Circle, Shape);

Circle.prototype.draw = function () {
  console.log("drawing a circle...");
};
const c = new Circle(1);

function Square(size, color) {
  Shape.call(this, color);
  this.size = size;
}

extend(Square, Shape);

const s = new Square(10, "blue");
