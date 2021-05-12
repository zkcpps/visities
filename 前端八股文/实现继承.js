function Person(name,age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayName = function() {
    console.log("Hello, Person!");
}
 
function Man(gender) {
    Person.apply(this, [...arguments].slice(1));
    this.gender = gender;
}

function inheritPrototype(subClass, superClass) {
    function F() {};
    F.prototype = superClass.prototype;
    subClass.prototype = new F();
    subClass.prototype.constructor = subClass;
}

inheritPrototype(Man, Person)

const man = new Man("男", "1", "2");
console.log(man);
man.sayName();