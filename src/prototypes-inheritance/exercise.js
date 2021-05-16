// Stop watch exercise.
class StopWatch {
  #running = false;
  #startTime = 0;
  #endTime = 0;
  #duration = 0;

  start() {
    if (this.#running) {
      throw new Error("already running");
    }
    this.#running = true;
    this.#startTime = Date.now();
  }
  stop() {
    if (!this.#running) {
      throw new Error("not running");
    }
    this.#running = false;
    this.#endTime = Date.now();
    this.#duration = this.#duration + (this.#endTime - this.#startTime);
  }

  get duration() {
    if (this.#running) {
      return this.#duration + (Date.now() - this.#startTime);
    } else {
      return this.#duration;
    }
  }
  reset() {
    this.#duration = 0;
    this.#startTime = 0;
    this.#endTime = 0;
    this.#running = false;
  }
}

const st1 = new StopWatch();
