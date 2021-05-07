function Person(name) {
    this.name = name;
}

const p = new Person("Ben");

console.log(Person.prototype);  //Person {}
console.log(Person.prototype.constructor.prototype);  //Person {}
console.log(p.__proto__);  //Person {}

console.log(Person.prototype.__proto__);  // {}
console.log(Person.prototype.__proto__.__proto__);  // null



// Person.prototype.say = function() {
//     console.log("Hello, " + this.name);
// }
Person.prototype.__proto__.say = function() {
    console.log("Hello, " + this.name);
}

p.say();

console.log(p.__proto__);
console.log(Person.prototype);
console.log(Person.prototype.__proto__.constructor.prototype);
console.log(Person.prototype.__proto__);

console.log(Person.prototype.__proto__.constructor.prototype === Person.prototype.__proto__);
console.log(Person.prototype === p.__proto__);


