//   import NodeList from './NodeList';
var req = require("./NodeList.js");
var NodeList = req.NodeList;

//快慢指针 移除列表的倒数第n个元素
function removeNthFromEnd(head, n) {

    const dummy = new NodeList();
    dummy.next = head;

    let fast = dummy;
    let slow = dummy;

    while(n >= 1 && fast.next) {
      fast = fast.next;
      n--;
   }
   while(fast.next) {
       fast = fast.next;
       slow = slow.next;
   }

   slow.next = slow.next.next;
   return dummy.next;
}

//测试
let l1 = new NodeList();
l1.add(1).add(1).add(2).add(2).add(3).add(4);
let result = removeNthFromEnd(l1,2);
console.log(result.print()); 

//多指针 反转链表
function reverseNodeList(head) {
   let pre = null;
   let cur = head;

   while(cur !== null) {
       let next = cur.next;
       cur.next = pre;
       pre = cur;
       cur = next;
   }

   return pre;
}

//测试
let l2 = new NodeList();
l2.add(1).add(1).add(2).add(2).add(3).add(4);
let result1 = reverseNodeList(l2);
console.log(result1.print());


//部分反转 多指针
function partReverseNodeList(head, m, n) {
    
    let pre, cur, preNode;

    const dummy = new NodeList();  
    // dummy后继结点是头结点
    dummy.next = head;
    // p是一个游标，用于遍历，最初指向 dummy
    let p = dummy;
    
    for(let i = 0; i < m -1; i++) {
        p = p.next;
    }

    preNode = p;

    let start = preNode.next;

    pre = start;
    console.log(pre);
    cur = pre.next;

    for(let i=m; i<n; i++) {
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }

    preNode.next = pre;
    start.next = cur;

    return dummy.next;
}

let result2 = partReverseNodeList(result1, 2, 3);
console.log(result2.print());




