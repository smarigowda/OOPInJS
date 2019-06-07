console.log("Hello, Welcome to OOP in JS");

// factory function
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

// constructor function
function CreateCircle(radius) {
    console.log(this);
    this.radius = radius;
    this.draw = () => {
        console.log(`Draw a circle with radius: ${radius}`);
    }
}

const circle3 = new CreateCircle(4);
circle3.draw();

const CreateCircleUsingFunction = new Function('radius', `
    console.log(this);
    this.radius = radius;
    this.draw = () => {
        console.log('Draw a circle...${this.radius}');
    }
`);

CreateCircleUsingFunction.prototype.name = 'CreateCircleUsingFunction'; // no effect, name is readonly

const circle4 = new CreateCircleUsingFunction(20);
