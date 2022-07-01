const data = require("./data");

const { PROMISE_PENDDING, PROMISE_FULFILLED, PROMISE_REJECTED } = data;

class MyPromise {
  constructor(executor) {
    this.status = PROMISE_PENDDING;
    this.result = undefined;
    this.err = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];
    const resolve = (value) => {
      if (this.status === PROMISE_PENDDING) {
        this.status = PROMISE_FULFILLED;
        this.result = value;
        while (this.onFulfilledCallbacks.length) {
          this.onFulfilledCallbacks.shift()();
        }
      }
    };

    const rejected = (err) => {
      if (this.status === PROMISE_PENDDING) {
        this.status = PROMISE_REJECTED;
        this.err = err;
        while (this.onRejectedCallbacks.length) {
          this.onRejectedCallbacks.shift()();
        }
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
    // 当state状态为pending，则需要存储起来
    if (this.status === PROMISE_PENDDING) {
      this.onFulfilledCallbacks.push(() => {
        onFulfilled(this.result);
      });
      this.onRejectedCallbacks.push(() => {
        onRejected(this.err);
      });
    }
  };
}
