const getValue = () => {
    return 0
}

enum List {
    A = getValue(),
    B = 2,  // 此处必须要初始化值，不然编译不通过
    C
}
enum List1 {A = 1,B = 3,C};
console.log(List.A) // 0
console.log(List.B) // 2
console.log(List.C) // 3

console.log(List1.A) // 0
console.log(List1.B) // 2
console.log(List1.C) // 3


interface runOptions {
    program: string;
    comandline: string[] | string | (()=> string);
}

const options: runOptions = { program: "111", comandline: '110'}

console.log(options);