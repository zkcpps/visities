const EventEmmiter = require("events");

// 监听事件
const bus = new EventEmmiter();

function clickHanlde(args) {
  console.log("监听到click事件", args);
}

bus.on("click", clickHanlde);

setTimeout(() => {
  bus.emit("click", "coderwhy");
  bus.off("click", clickHanlde);
  bus.emit("click", "kobe");
}, 2000);

console.log(bus.eventNames());
console.log(bus.getMaxListeners());
console.log(bus.listenerCount("click"));
console.log(bus.listeners("click"));
