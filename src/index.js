// constructor function
function Circle(radius) {
  console.log(this);
  console.log(`radius: ${radius}`);
  this.radius = radius;
  this.draw = () => {
    console.log(`Draw a circle with radius = ${radius}`);
  };
}

const circle1 = new Circle(25);

circle1.locationX = { x: 10 };
circle1.locationY = { y: 20 };
const locationz='locationZ';

circle1[locationz] = { z: 30 }

delete circle1.locationX;


