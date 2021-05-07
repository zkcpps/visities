// bind 返回一个函数，可以传入参数
var foo = {
    value: 1,
}

function bar(a, aa) {
    console.log(this.value)
    console.log(a)
    console.log(aa)
}

bar.bind(foo,1,2)() // 1

Function.prototype.bind1 = function(context) {
    var self = this;
    return function() {
        self.apply(context)
    }
}

bar.bind1(foo,1,2)() // 1

Function.prototype.bind2 = function(context) {
    var self = this;
    var args = [...arguments].slice(1);
    return function() {
        self.apply(context,[...args, ...arguments])
    }
}

bar.bind2(foo,1)(2) // 1
