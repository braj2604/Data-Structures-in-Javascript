function Node (value) {
  this.value = value;
  this.nextNode = null;
}

function LinkedList() {
  this.head;
  this.tail;
  this.length = 0;
  
  this.push = function(value) {
    const node = new Node(value);

    if(!this.head) {
      this.head = node;
      this.tail = node;
      this.head.nextNode = this.tail;
    } else {
      this.tail.nextNode = node;
      this.tail = node;
      this.tail.nextNode = this.head;
    }
    this.length++;
  };

  this.display = function() {
    let current = this.head;
    while(current.value) {
      if(current.nextNode === this.head) {
        console.log('last value', current.value);
        break;
      } else {
        console.log('value', current.value);
        current = current.nextNode;
      }
    }
    return this.length;
  };

  this.deleteNode = function(position) {
    if(position >= this.length || !this.head) return null;

    if(position === 0) {
      this.head = this.head.nextNode;
      this.tail.nextNode = this.head;
      this.length--;
    } else {
      let current = this.head;
      for(i=0; i<position-1; i++) {
        current = current.nextNode; 
      }

      current.nextNode = current.nextNode.nextNode;
      this.length--
    }
  };
}


/**implementation of all the above methods */

const linkedList = new LinkedList();

// insertion in linked list
linkedList.push(10);
// linkedList.push(20);
// linkedList.push(30);
// linkedList.push(40);

// Get length of linked list
const length1 = linkedList.display();

console.log('linkedList', length1);

// Delete a node from linked list
linkedList.deleteNode(0)

// Get length of linked list after deletion
const length2 = linkedList.display();


console.log('linkedList', length2, linkedList.head);
