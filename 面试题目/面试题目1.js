function output() {
    for (var i = 0; i < 10 ; i++) {
        setTimeout(function(){
            console.log(i)
        },0)
    }
}

output();

function output1() {
    for (let i = 0; i < 10 ; i++) {
        setTimeout(function(){
            console.log(i)
        },0)
    }
}

output1();

var scope = 'global scope'
function checkScope() {
    var scope = 'local scope'
    return function() {
        return scope
    }
}

var foo = checkScope()
console.log(foo());

var data = []
for(var i = 0; i < 3; i++) {
    data[i] = (function(i) {
        return function() {
            console.log(i)
        }
    }(i))
}
data[0]()
data[1]()
data[2]()