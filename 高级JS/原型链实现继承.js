// 1.原型链实现继承
function Person(name, age) {
  console.log("调用Person");
  this.name = name;
  this.age = age;
}

function Student(name, age, score) {
  Person.call(this, name, age);
  this.score = score;
}

// Student.prototype = Person.prototype;

var stu1 = new Student("kk", 18, 100);
var stu2 = new Student("cc", 28, 90);

console.log(stu1);
console.log(stu2.__proto__);

console.log(Function.prototype === Function.__proto__);
console.log(Student.__proto__);
console.log(Student.prototype);

// 2.组合寄生实现继承
// function createObject(o) {
//   function F() {}
//   F.prototype = o;
//   return new F();
// }

// function inheritPrototype(subType, superType) {
//   subType.prototype = createObject(superType);
//   subType.prototype.constructor = subType;
// }

// inheritPrototype(Student, Person);

// var stu1 = new Student("kk", 18, 100);
// var stu2 = new Student("cc", 28, 90);
