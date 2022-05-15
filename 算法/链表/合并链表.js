//   import NodeList from './NodeList';
  var req = require("./NodeList.js");
  var NodeList = req.NodeList;
  
  //合并两个有序的链表
  function mergeTwoNodeList(l1, l2) {
    let head = new NodeList();
    let cur = head;
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            cur.next = l1;
            l1 = l1.next;
        } else {
            cur.next = l2;
            l2 = l2.next;
        }

        cur = cur.next;
    }

    cur.next = l1 !== null ? l1 : l2;

    return head.next;
}

//测试合并
let l1 = new NodeList();
l1.add(1).add(2).add(4);
let l2 = new NodeList();
l2.add(1).add(3).add(5).add(7).add(8);
let result = mergeTwoNodeList(l1, l2);
console.log(result.print());



