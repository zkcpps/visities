/**
 * 工厂模式
 * @param name
 * @returns {Object}
 */
function createFactory (name) {
     var obj = new Object();
     obj.name = name;
     obj.getName = function () {
         console.log(this.name);
     }
     return obj;
}


function Person(name) {
    this.name = name;
}

Person.prototype = {
    constructor: Person,
    getName: function() {
        console.log(this.name);
    }
}

const p1 = new Person("张三");
const p2 = new createFactory("张三");
console.log(p1);
console.log(p2);

p1.getName();
p2.getName();