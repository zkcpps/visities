function unique(arr) {
     var res = [],
         obj = {},
         flag = false; // 表示res数组中没有-0  
     for (var i = 0; i < arr.length; i++) {    
         if (!Object.is(-0, arr[i])) {  
              // 第一步：将-0挑出来      
             if (typeof arr[i] == "object") { 
                 // 第二步：去重object类型        
                if (!obj[arr[i]]) {          
                    // 设定arr中每个元素为obj的key          
                    obj[arr[i]] = 1;          
                    res.push(arr[i]);        
                }      
               } else { 
                //  第三步：去重基本数据类型        
               if (!res.includes(arr[i])) {          
                    res.push(arr[i]);        
                }      
             }    
         } else if (!flag) { 
             //如果有-0的话就将flag置为true      
             flag = true;    
          }  
      }  
      return flag ? res.concat([-0]) : res;
}

const arr= [undefined, undefined, null, null, true, false, 'true', NaN, NaN, 'NaN', {}, {}, [], [], -0, 1, 0]

console.log(unique(arr));

const arr1 = [1,2,3];
const arr2 = [1,3,4,5];
const arr3= arr1.concat(arr2);
const arr4= [...arr1, ...arr2];
console.log(arr3);
console.log(arr4);
