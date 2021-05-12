function couter() {
    this.sum = 0 ;
    this.add = function (num){
        this.sum += num;
        return this;
    }
}

const couter1 = new couter();
couter1.add(1).add(1);
console.log(couter1.sum)

class person{
   constructor(name) {
       this.name = name;
   }
   sayHi() {
       console.log(this.name)
   }
}

class man extends person {
    constructor(name, age){
        super(name);
        this.age = age;
    }

    sayHi() {
        console.log(this.name + ' ' + this.age)
    }
}

const man1 = new man('张三1', 12);
man1.sayHi();