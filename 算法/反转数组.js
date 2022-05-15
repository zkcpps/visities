function reverse(characte,keyword) {
    const result = characte.split("").reverse().join("");
    const resultKey = keyword.split("").reverse().join("");
    const regx = new RegExp(resultKey);  
    const res = result.replace(regx, keyword);
    return res;
}

console.log(reverse('R’s,keyword，keyword111','keyword'));