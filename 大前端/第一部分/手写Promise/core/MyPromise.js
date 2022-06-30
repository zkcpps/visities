const data = require("./data");

const { PROMISE_PENDDING, PROMISE_FULFILLED, PROMISE_REJECTED } = data;

/**
 *  手写promise相关api
 *
 */
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

const p1 = new MyPromise((resolve, rejected) => {
  resolve("成功");
  rejected("失败");
});

const p2 = new MyPromise((resolve, rejected) => {
  rejected("失败");
  resolve("成功");
});

p1.then(
  (res) => {
    console.log("res", res);
  },
  (err) => {
    console.log("err", err);
  }
);

p2.then(
  (res) => {
    console.log("res", res);
  },
  (err) => {
    console.log("err", err);
  }
);
