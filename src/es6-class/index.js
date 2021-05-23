class Circle {
  constructor(radius) {
      this._radius = radius;
  }
  get radius() {
    return this._radius;
  }
  set radius(radius) {
      if(radius < 0) {
          throw new Error('value can not be -ve');
      }
    this._radius = radius;
  }
}

const circle = new Circle(1);

console.log(circle.radius);
circle.radius = 2;
console.log(circle.radius);
circle.radius = -2;


