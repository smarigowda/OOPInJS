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

// delete circle1.locationX;

for(let key in circle1) {
    console.log(key);
    if(typeof circle1[key] === 'function') {
        console.log(`-- ${key} is a function`);
    }
}

let allKeys = Object.keys(circle1);
console.log(allKeys);

if('radius' in circle1) {
    console.log('radius exists in circle1');
}