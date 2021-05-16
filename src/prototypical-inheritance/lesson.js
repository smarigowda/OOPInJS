function Circle(radius) {
  this.radius = radius;
}

function Square() {}
function Shape() {
  this.shapeType;
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
