// lesson
// prototypes and inheritance

function Circle() {
  console.log(this);
  // Instance members
  this.raduis = 1.0;
}

// Prototype members
Circle.prototype.draw = () => {
  console.log('complex code to draw a circle');
}
const c1 = new Circle();
const c2 = new Circle();

c1.draw();
c2.draw();
