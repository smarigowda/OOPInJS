// constructor function
function Circle(radius, x, y) {
  console.log(this);
  console.log(`radius: ${radius}, x: ${x} and y: ${y}`);
  this.radius = radius;
  this.draw = () => {
    console.log(`Draw a circle with radius = ${radius}, x = ${x} and y = ${y}`);
  };
}
Circle.apply({}, [1, 2, 3]);
