    /**
     *  深度拷贝
     * @param obj
     */
    function deepClone(obj = {}) {
        if(typeof obj !== 'object' || obj == null) {
            return obj;
        }

        let result;
       if(obj instanceof Array){
          result = []
       } else {
           result = {}
       }

       for(let key in obj) {
           if(obj.hasOwnProperty(key)) {
               result[key] = deepClone(obj[key]);
           }
       }

       return result;
    }

    const a = {
        a: 1,
        b: { b1: 1},
        c: [1, 2, 3]
    };

    //测试代码
    const a1 = a;
    const a2 = deepClone(a);
    a1.a = 2;
    a2.a = 3;
    console.log(a);
    console.log(a1);
    console.log(a2);

    console.log(a.d);
    console.log(a.d == null);
    console.log(a.d === undefined);
    console.log(a.d == undefined);