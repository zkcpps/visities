async function test() {
    let a = 1;
    const result = await new Promise(function (resolve, reject) {
        a = 2;
        //resolve(a);
        reject(new Error("请求错误！！"));
    })
    return result;
}

test().then((res)=> {
    console.log(res);
}).catch((err)=>{
    console.log(err);
})