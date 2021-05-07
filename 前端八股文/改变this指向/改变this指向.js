var name = '张三', age = 18;
var obj = {
    name: '李四',
    fn: function(a,aa) {
        console.log("My name is " + this.name + ", i am " + this.age + ' years old !');
        console.log(a, + " " + aa);
    }
}

var obj2 = {
    name: '王五',
    age: 20
}

var b = obj.fn;
b.call(obj2, 1, 2);
b.apply(obj2, [1, 2]);
b.bind(obj2, 1)(2);
