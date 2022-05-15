var getValue = function () {
    return 0;
};
var List;
(function (List) {
    List[List["A"] = getValue()] = "A";
    List[List["B"] = 2] = "B";
    List[List["C"] = 3] = "C";
})(List || (List = {}));
var List1;
(function (List1) {
    List1[List1["A"] = 1] = "A";
    List1[List1["B"] = 3] = "B";
    List1[List1["C"] = 4] = "C";
})(List1 || (List1 = {}));
;
console.log(List.A); // 0
console.log(List.B); // 2
console.log(List.C); // 3
console.log(List1.A); // 0
console.log(List1.B); // 2
console.log(List1.C); // 3
var options = { program: "111", comandline: '110' };
console.log(options);
