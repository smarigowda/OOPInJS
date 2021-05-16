class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    draw() {
        console.log('drawing circle');
    }
}

console.log(typeof Circle);

const circle = new Circle(1);
console.log(circle);

