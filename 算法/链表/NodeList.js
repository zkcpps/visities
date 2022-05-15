function NodeList(val) {
    this.val = val;
    this.next = null;
}

NodeList.prototype.add = function (val) {
    if (this.val == undefined) {
        this.val = val;
        return this;
    } else {
        this.next = new NodeList(val);
        return this.next;
    }
}

NodeList.prototype.print = function () {
    let result = [];
    let cur = this;
    console.log("cur", cur);
    while (cur) {
        result.push(cur.val);
        cur = cur.next;
    }
    return result;
}

module.exports.NodeList = NodeList;