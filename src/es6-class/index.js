class Circle {
  constructor(radius) {
      this._radius = radius;
  }
  get radius() {
    return this._radius;
  }
  set radius(radius) {
    this._radius = radius;
  }
}

const circle = new Circle(1);

console.log(circle.radius);
circle.radius = 2;
console.log(circle.radius);


