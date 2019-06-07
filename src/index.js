// constructor function
function Circle(radius) {
    console.log(this);
    this.radius = radius;
    this.draw = () => {
        console.log(`Draw a circle with radius: ${radius}`);
    }
}
Circle.call({}, 1);