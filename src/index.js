// lesson
// prototypes and inheritance

function Circle() {
  console.log(this);
  // Instance members
  this.raduis = 1.0;
  this.draw = () => {
    console.log('complex code to draw a circle');
  }
}

const c1 = new Circle();
const c2 = new Circle();
