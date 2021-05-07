//call实现示例
var foo = {
    value: 1,
}

function bar(a, aa) {
    console.log(this.value)
    console.log(a)
    console.log(aa)
}

bar.call(foo,1,2) // 1

// 向对象添加一个方法，执行完删除方法
Function.prototype.call1 = function(context) {
    const args = [...arguments].slice(1);
    context.fn = this;
    context.fn(...args);
    delete context.fn;
}

bar.call1(foo,1,2) // 1

Function.prototype.call2 = function(context = window) {
    const args = [...arguments].slice(1);
    context.fn = this;
    const result = context.fn(...args);
    delete context.fn;
    return result;
}

bar.call2(foo,1,2) // 1