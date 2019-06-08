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