class Stack {
  #stack;
  constructor() {
    this.#stack = [];
  }
  push(item) {
    this.#stack.push(item);
  }
  peek() {
    if (this.#stack.length === 0) {
      throw new Error("Stack is empty");
    }
    return this.#stack[this.#stack.length - 1];
  }
  pop() {
    if (this.#stack.length === 0) {
      throw new Error("Stack is empty");
    }
    let countOfItems = this.#stack.length;
    let lastItem = this.#stack[countOfItems - 1];
    this.#stack = this.#stack.slice(0, countOfItems - 1);
    return lastItem;
  }
  get count() {
    return this.#stack.length;
  }
}

const s = new Stack();
