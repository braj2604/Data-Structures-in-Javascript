function Node(value) {
  this.value = value;
  this.nextNode = null;
  this.previousNode = null;
}

function LinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;

  this.push = function(value) {
    const node = new Node(value);
    if(!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      let temp = this.tail;
      this.tail.nextNode = node;
      this.tail = node;
      this.tail.previousNode = temp;
      console.log('inserted')
    }
    this.length++;
  }

  this.display = function() {
    let current = this.head;
    while(current && current.value) {
      console.log('value is', current.value);
      current = current.nextNode;
    }
    return this.length;
  }

  this.deleteNode = function(position) {
    if(position >= this.length) return null;

    if(position === 0) {
      this.head = this.head.nextNode;
      this.length--;
      return;
    } else {
      let current = this.head
      for(i=0; i<position-1; i++) {
        current = current.nextNode;
      }

      current.nextNode = current.nextNode.nextNode;
      this.length--;
      return
    }
  }
}

/**implementation of all the above methods */

const linkedList = new LinkedList();

// insertion in linked list
linkedList.push(10);
linkedList.push(20);
linkedList.push(30);
linkedList.push(40);

// Get length of linked list
const length1 = linkedList.display();

console.log('linkedList', length1);

// Delete a node from linked list
linkedList.deleteNode(2);

// Get length of linked list after deletion
const length2 = linkedList.display();

console.log('linkedList', length2)