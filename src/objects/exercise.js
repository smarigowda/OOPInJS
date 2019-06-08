// Stop watch exercise.
function StopWatch() {
  console.log(this);
  let duration = 0;
  let interval;
  let running = false;
  this.start = () => {
    if (running) {
      throw new Error("Watch is already running, stop it first.");
    }
    interval = setInterval(() => {
      duration++;
    }, 1000);
    running = true;
  };
  this.stop = () => {
    if (!running) {
      throw new Error(
        "Watch is not running. You can can not stop/ reset a watch which is not running!"
      );
    }
    clearInterval(interval);
    console.log("watch stopped.");
    running = false;
  };
  this.reset = () => {
    this.stop();
    duration = 0;
    console.log("duration is reset.");
  };
  Object.defineProperty(this, "duration", {
    get: () => {
      return duration;
    }
  });
}
const sw = new StopWatch();
sw.start();
console.log(`duration is ${sw.duration} sec`);

setTimeout(() => {
  console.log(`duration now is ${sw.duration} sec`);
}, 5000);
