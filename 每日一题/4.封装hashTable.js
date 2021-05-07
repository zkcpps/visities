/**
 *  封装HashTable
 *  主要方法
 *  put 插入
 *  get 获取
 *  remove 删除
 *  hashFunc 哈希函数
 *  resize 扩容或者缩容
 * @constructor
 */

function HashTable () {

    this.storage = [];  //仓库
    this.limit = 7;     //长度容量
    this.count = 0;     //现有长度

    //HashTable方法

    //插入
    HashTable.prototype.put = function (key, value) {

        var index = this.hashFunc(key, this.limit)

        var bucket = this.storage[index]

        if (bucket == null) {
            bucket = []
            this.storage[index] = bucket
        }

        var override = false

        for (var i = 0; i < bucket.length ; i++) {

            var tuple = bucket[i]

            if (tuple[0] === key) {
                tuple[1] = value
                override = true
            }
        }

        if (!override) {

            bucket.push([key, value])

            this.count ++
        }

        if (this.count > this.limit * .75) {

            this.resize(this.limit * 2)
        }
    }

    //获取
    HashTable.prototype.get = function (key) {

        var index = this.hashFunc(key, this.limit)

        var bucket = this.storage[index]

        if (bucket == null) {

            return null
        }

        for (var i = 0; i < bucket.length; i++) {

            var tuple = bucket[i]

            if (tuple[0] === key) {

                return tuple[1]
            }
        }

        return null
    }

    //删除
    HashTable.prototype.remove = function (key) {

        var index = this.hashFunc(key, this.limit)

        var bucket = this.storage[index]

        if (bucket == null) {

            return null
        }

        for (var i = 0; i < bucket.length; i++) {

            var tuple = bucket[i]

            if (tuple[0] === key) {

                bucket.splice(i, 1)

                this.count --

                if(this.limit > 7 && (this.count < this.limit * .25)) {

                    this.resize(Math.floor(this.limit / 2))
                }

                return tuple[1]

            }
        }
        return null

    }

    //哈希扩容
    HashTable.prototype.resize = function (newLimit) {

        var oldStorage = this.storage

        this.storage = []
        this.limit = newLimit
        this.count = 0

        for (var i = 0; i < oldStorage.length ; i++) {

            var bucket = oldStorage[i]

            if (bucket == null) {

                continue
            }

            for (var j = 0; j < bucket.length; j++) {

                var tuple = bucket[j]

                this.put(tuple[0], tuple[1])
            }

        }

    }


    //哈希函数
    HashTable.prototype.hashFunc = function (str, size) {

        var hashCode = 0

        for (var i = 0; i < str.length; i++) {

            hashCode = 37 * hashCode + str.charCodeAt(i)
        }

        var index = hashCode % size

        return index;
    }
}

var a = new HashTable();

a.put("cat", "猫");
a.put("dog", "狗");
a.put("egg", "蛋");

a.put("dogss", "狗sd");
a.put("eggss", "蛋s");
a.put("eggsssd", "蛋sds");

console.log(a);


a.remove("eggsssd");
a.remove("dogss");
a.remove("eggss");
a.remove("egg");
a.remove("dog");



console.log(a);






