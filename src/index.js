// constructor function
function Circle(radius) {
  // private
//   const defaultLocation = { x: 0, y: 0 };
  // private
  const computeOptimumLocation = radius => {
    console.log("-- logic to compute optimum location for radius", radius);
  };

  console.log(this);
  console.log(`radius: ${radius}`);
  this.radius = radius;
  this.draw = () => {
    // console.log(defaultLocation);
    computeOptimumLocation(this.radius);
    console.log(`Draw a circle with radius = ${radius}`);
  };
  Object.defineProperty(this, 'defaultLocation', {
      get: function() {
          return defaultLocation;
      },
      set: function(value) {
          if(!value.x || !value.y) {
              throw new Error('Invalid value...!');
          }
          defaultLocation = value;
      }
  })
}

const circle1 = new Circle(25);

circle1.locationX = { x: 10 };
circle1.locationY = { y: 20 };
const locationz = "locationZ";

circle1[locationz] = { z: 30 };

// delete circle1.locationX;

for (let key in circle1) {
  console.log(key);
  if (typeof circle1[key] === "function") {
    console.log(`-- ${key} is a function`);
  }
}

let allKeys = Object.keys(circle1);
console.log(allKeys);

if ("radius" in circle1) {
  console.log("radius exists in circle1");
}

circle1.draw();

// circle1.defaultLocation = 0; // Throws error.
circle1.defaultLocation = { x: 100, y: 100 };
