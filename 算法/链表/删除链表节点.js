//   import NodeList from './NodeList';
var req = require("./NodeList.js");
var NodeList = req.NodeList;

//删除链表重复的节点
function deleteDuplicates(head) {
    let cur = head;
    while (cur !== null && cur.next !== null) {
        if (cur.val === cur.next.val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return head;
}

//测试删除
let l1 = new NodeList();
l1.add(1).add(1).add(2).add(2).add(3).add(4);
let result = deleteDuplicates(l1);
console.log(result.print());