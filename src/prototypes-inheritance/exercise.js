// Stop watch exercise.
function StopWatch() {
  console.log(this);
  let startTime;
  let endTime;
  let running = false;
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
  Object.defineProperty(this, 'running', {
      get: function() {
          return running;
      }
  })
}

StopWatch.prototype.start = function() {
    if (this.running) {
      throw new Error("Watch is already running, stop it first.");
    }
    running = true;
  };

const sw = new StopWatch();
sw.start();
console.log(`duration is ${sw.duration} sec`);

setTimeout(() => {
  console.log(`duration now is ${sw.duration} sec`);
}, 5000);
