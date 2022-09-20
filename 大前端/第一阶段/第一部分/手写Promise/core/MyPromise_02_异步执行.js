const data = require("./data");

const { PROMISE_PENDDING, PROMISE_FULFILLED, PROMISE_REJECTED } = data;

class MyPromise {
  constructor(executor) {
    this.status = PROMISE_PENDDING;
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];
    const resolve = (value) => {
      if (this.status === PROMISE_PENDDING) {
        this.status = PROMISE_FULFILLED;
        this.value = value;
        while (this.onFulfilledCallbacks.length) {
          this.onFulfilledCallbacks.shift()();
        }
      }
    };

    const rejected = (reason) => {
      if (this.status === PROMISE_PENDDING) {
        this.status = PROMISE_REJECTED;
        this.reason = reason;
        while (this.onRejectedCallbacks.length) {
          this.onRejectedCallbacks.shift()();
        }
      }
    };

    executor(resolve, rejected);
  }

  then = (onFulfilled, onRejected) => {
    if (onFulfilled && this.status === PROMISE_FULFILLED) {
      onFulfilled(this.value);
    }
    if (onRejected && this.status === PROMISE_REJECTED) {
      onRejected(this.reason);
    }
    // 当state状态为pending，则需要存储起来
    if (this.status === PROMISE_PENDDING) {
      this.onFulfilledCallbacks.push(() => {
        onFulfilled(this.value);
      });
      this.onRejectedCallbacks.push(() => {
        onRejected(this.reason);
      });
    }
  };
}
