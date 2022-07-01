const data = require("./data");

const { PROMISE_PENDDING, PROMISE_FULFILLED, PROMISE_REJECTED } = data;

class MyPromise {
  constructor(executor) {
    this.status = PROMISE_PENDDING;
    this.result = undefined;
    this.err = undefined;
    const resolve = (value) => {
      if (this.status === PROMISE_PENDDING) {
        this.status = PROMISE_FULFILLED;
        this.result = value;
      }
    };

    const rejected = (err) => {
      if (this.status === PROMISE_PENDDING) {
        this.status = PROMISE_REJECTED;
        this.err = err;
      }
    };

    executor(resolve, rejected);
  }

  then = (onFulfilled, onRejected) => {
    if (onFulfilled && this.status === PROMISE_FULFILLED) {
      onFulfilled(this.result);
    }
    if (onRejected && this.status === PROMISE_REJECTED) {
      onRejected(this.err);
    }
  };
}
