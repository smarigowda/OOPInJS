console.log("Hello, Welcome to OOP in JS");

// factory
const createCircle = radius => {
  return {
    radius,
    x: 10,
    y: 20,
    draw: () => {
      console.log(`draw a circle with radius = ${radius}`);
    }
  };
};

const circle1 = createCircle(1);
const circle2 = createCircle(2);
circle1.draw();
circle2.draw();