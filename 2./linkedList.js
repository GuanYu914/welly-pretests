class ListNode {
  constructor(val) {
    this.val = val;
    this.nxt = null;
  }
}

class LinkedList {
  constructor(val = null) {
    if (val === null) {
      this.list = null;
      this.length = 0;
      return;
    }
    this.list = new ListNode(val);
    this.length = 1;
  }

  getLength() {
    return this.length;
  }

  getList() {
    let curNode = this.list;
    let list = [];
    while (curNode) {
      if (curNode.nxt === null) {
        list.push(curNode.val);
        break;
      }
      list.push(curNode.val);
      curNode = curNode.nxt;
    }
    return list;
  }

  append(val) {
    const newNode = new ListNode(val);
    if (this.list === null) {
      this.list = newNode;
      this.length++;
      return;
    }
    let curNode = this.list;
    while (curNode) {
      // 持續找到最後一個 Node
      if (curNode.nxt === null) {
        curNode.nxt = newNode;
        this.length++;
        break;
      }
      curNode = curNode.nxt;
    }
  }

  remove() {
    if (this.list === null) {
      throw new Error("can't remove anything on empty list");
    }
    if (this.length === 1) {
      const removeVal = this.list.val;
      this.list = null;
      this.length--;
      return removeVal;
    }
    let curNode = this.list;
    while (curNode) {
      // 確認目前 node 是倒數第二個，是的話就把目前 node 當作最後一個
      if (curNode.nxt.nxt === null) {
        const removeVal = curNode.nxt.val;
        curNode.nxt = null;
        this.length--;
        return removeVal;
      }
      curNode = curNode.nxt;
    }
  }
}

module.exports = LinkedList;
