//用class创建对象和function构造函数创建对象有什么不同？

function Person(name,age) {
    this.name = name;
    this.age = age;
}

//1.结论 构造函数的prototype指向原型对象,原型对象的constructor又指向构造函数
console.log(Person.prototype.constructor === Person);   //true


const zhangsan = new Person("张三", 18);

console.log(zhangsan)  // Person { name: '张三', age: 18 }
console.log(zhangsan.prototype)  // undefined
console.log(zhangsan.__proto__)  // Person {}
console.log(Person.prototype)  // Person {}
console.log(zhangsan.__proto__ === Person.prototype)  // true

//2.结论 对象zhangsan没有prototype属性,但是有个__proto__属性指向原型对象,和构造函数的prototype指向的原型对象是相同的.


Person.prototype.height = 180;
Person.prototype.name = "小明";
console.log(Person.prototype);  // Person { height: 180, name: '小明' }
console.log(zhangsan.__proto__);  // Person { height: 180, name: '小明' }

console.log(zhangsan.name);  // 张三
console.log(zhangsan.height);  // 180

Person.prototype.say = function () {
    console.log("这是实例方法，挂载到的是构造函数的原型对象身上，对象可以访问")
}
zhangsan.say()
//3.结论 原型对象添加的属性和方法,对象是可以访问的,前提是对象本身找不到,就会往原型中寻找

Person.home = "揭阳";
Person.paly = function () {
    console.log("Person的静态方法")
}

console.log(Person)  //[Function: Person] { home: '揭阳', paly: [Function] }
console.log(Person.home) //揭阳
Person.paly()//Person的静态方法

console.log(zhangsan.home) // undefined
//zhangsan.play() //  TypeError: zhangsan.play is not a function

//4.结论
// 原型对象的 constructor指向构造函数本身，这个play是构造函数身上的方法，
// 而通过new出来的实例对象 zhangsan.home 其实是通过原型链的形式访问原型对象身上的home属性，所以说访问的是 undefined.
// 这里的 constructor属性和 zhangsan 的 home属性都属于原型对象身上的属性，他俩是平级关系

class father extends Person{

    constructor(name,age) {
        super(name, age);
    }

    static info = "静态属性"

    static show = function () {
        console.log("静态方法")
    }

    say = function () {
        console.log("实例方法,new的对象可以访问,想当于在构造函数的原型对象上添加的方法")
    }

}

const baba = new father("爸爸", 50);

console.log(baba); // father { name: '爸爸', age: 50 }
console.log(baba.__proto__);   // father {}
console.log(father.prototype); // father {}
console.log(father.prototype === baba.__proto__); // true

console.log(baba.info) // undefined
//baba.show()  //TypeError: baba.show is not a function

console.log(father.info) //  静态属性
father.show()  //静态方法

//father.say()  //TypeError: father.say is not a function
baba.say() //实例方法,new的对象可以访问,想当于在构造函数的原型对象上添加的方法


//5.结论
// 在class内部通过static 修饰的属性叫做静态属性，只能被构造函数名或者类名读取，new出来的对象读不到, 相当于上面的Person.say()和 Person.home
// 在class内部通过直接定义的方法是实例方法,相当于上文中的Person.prototype.say(),new出来的对象是可以访问到的,想反,Class类是访问不到的,与结论 4相同


//总结
//用class创建对象和function构造函数创建对象有很多共同之处,可以说是基本一样,但是通过class创建对象看起来就比较简洁,不用通过原型去实现继承
//只要是通过new出来的实例能访问到的方法（属性），叫做实例方法，静态方法只存在构造函数本身

















