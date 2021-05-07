// var a = {};
// a["name"] = "zhangsan";
// console.log(a);
// delete a["name"];
// console.log(a);

    let msgCenter = (function(){
        const _msg = {}; //存储信息

        return {
          //订阅消息
          register: function(type, fn){
             if(_msg[type]) {
                 _msg[type].push(fn);
             } else {
                 _msg[type] = [fn];
             }
          },
          //发布消息
          fire: function(type, args){
             if(!_msg[type]) {
                 return;
             }
             const events = {
                 type: type,
                 args: args || {}
             }
              for (let i = 0; i < _msg[type].length ; i++) {
                 _msg[type][i](events);
              }
          },
          //取消订阅
          cancle: function(type, fn){
              for (let i = 0; i < _msg[type].length ; i++) {
                  if(_msg[type][i] === fn) {
                      _msg[type].splice(i, i);
                      break;
                  }
              }

          }
        };
    })();

    function Person(name){
        this.name = name;
        this.alreadyRegister = {};
    }

    Person.prototype.register = function(type, fn){
        if(this.alreadyRegister[type]) {
            console.log("请不重复添加" + type + "!")
            return;
        }
        msgCenter.register(type, fn);
        this.alreadyRegister[type] = fn;
    }

    Person.prototype.cancle = function(type){
        msgCenter.cancle(type, this.alreadyRegister[type]);
        delete this.alreadyRegister[type];
    }

    const person1 = new Person("1号");
    const person2 = new Person("2号");
    const person3 = new Person("3号");

    person1.register('newsInfo', function(e){
        console.log(person1.name + '订阅了' + e.type + ':' + e.args.info);
    });

    person1.register('newsInfo', function(e){
        console.log(person1.name + '订阅了' + e.type + ':' + e.args.info);
    });


    person1.register('carInfo', function(e){
            console.log(person1.name + '订阅了' + e.type + ':' + e.args.info);
        });

    person2.register('newsInfo', function(e){
        console.log(person2.name + '订阅了' + e.type + ':' + e.args.info);
    });

    person3.register('newsInfo', function(e){
        console.log(person3.name + '订阅了' + e.type + ':' + e.args.info);
    });

    msgCenter.fire('newsInfo', {info: '新衣服上市！'});
    msgCenter.fire('newsInfo', {info: '新衣服2上市！'});
    msgCenter.fire('carInfo', {info: '新汽车上市！'});