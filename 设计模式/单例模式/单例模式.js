// let single = null;
// function createSingle() {
//     const _unique = {
//         a: 1
//     };
//
//     if(single === null) {
//         single = _unique;
//     }
//
//     return single;
// }
//
// const s1 = createSingle();
// noSingle = null;  //外部可以更改，不安全
// const s2 = createSingle();
//
// console.log(s1 === s2); //false

const createSinle = (function() {
    let single = null;
    function create() {
        return {
            a: 1
        }
    }
    return function () {
        if(single === null) {
            single = create()
        }
        return single;
    }
})();

const s1 = createSinle();

const s2 = createSinle();

console.log(s1 === s2);