// Otaku 御宅族
function Otaku(name, age) {
    this.name = name
    this.age = age

    this.habit = 'Games'
}


function objectFactory() {
  var obj = new Object();
  var Contrutor = [].shift.call(arguments);
  obj.__proto__ = Contrutor.prototype;

  Contrutor.apply(obj, [...arguments])

  return obj;
}

console.log(objectFactory(Otaku, 1,2))

function objectFactory1(Fn, ...args) {
    const obj = Object.create(Fn.prototype);
    const result = Fn.apply(obj, args);

    return result && typeof result === 'object' ?  result : obj;
}

console.log(objectFactory1(Otaku, 1,2))

