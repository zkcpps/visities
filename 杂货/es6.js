/**
 * reduce
 */
const reduceTest = () => {
    const arr = [1,2,3,4,5,2,3];
    const arrObj = [
        {
            name: '张三',
            age: 12
        },
        {
            name: '李四',
            age: 12
        },
        {
            name: '王五',
            age: 12
        },
        {
            name: '张三',
            age: 15
        }
    ]
    const result = arr.reduce((total, num) => {
        return total + num;
    });
    console.log(result);

    const newArr = arr.map(item => { return item + 1 });
    const newArrObj = arrObj.map(item => {
        const age = item.age + 1 ;
        return {...item, age}
    });
    const newArrObjPush = arrObj.map(item => {
        return {...item, name1: 'zs'}
    });

    const arrSome = arr.some((item) => {return  item === 6})
    const arrObjSome = arrObj.some((item) => {return  item.name === '张三'});
    const arrObjEvery = arrObj.every((item) => {return  item.has});
    console.log("arrObjEvery----", arrObjEvery);


    console.log("arrObjSome----", arrObjSome);
    console.log("arrSome----", arrSome);
    console.log("newArrObj----", newArrObj);
    console.log("newArrObjPush----", newArrObjPush);
    console.log("arrObj----", arrObj);
    console.log("newArrObj----", newArrObj);
    console.log("arr----", arr);
    console.log("newArr----", newArr);
    console.log("arrObj.find----", arrObj.find((item)=>{return item.name == '张三'}));
    console.log("arr.find----", arr.find((item)=>{return item === 2}));
    console.log("arrObj.filter----", arrObj.filter((item)=>{return item.name == '张三'}));

    console.log("arr.includes----", arr.includes(6))
    console.log("arr.indexOf----", arr.indexOf(1))

    const unionArr = arr.filter((item,index)=> {
         if(arr.indexOf(item) == index) {
             return true;
         } else {
             return false;
         }
    })

    console.log("unionArr----", unionArr)
    console.log("arr----", arr)

    const arrFill = [1,1,1,1,1,1];
    arrFill.fill(2)
    console.log("arrFill-----", arrFill);
    console.log(Array.isArray([]));
    console.log(JSON.stringify({}) == '{}')

}

reduceTest();