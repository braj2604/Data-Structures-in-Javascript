function Node (value) {
  this.value = value;
  this.nextNode = null;
}

function LinkedList() {
  this.head;
  this.tail;
  this.count = 0;
  
  this.push = function(value) {
    const node = new Node(value);

    if(!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.nextNode = node;
      this.tail = node;
    }
    this.count++;
  };

  this.display = function() {
    let current = this.head;
    let count = 0;
    while(current && current.value) {
      console.log('value', current.value);
      current = current.nextNode;
      count++
    }
    return count;
  };

  this.deleteNode = function(position) {
    if(position >= this.count || !this.head) return null;

    let temp = this.head;

    if(position === 0) {
      this.head = temp.nextNode;
    } else {
      for(i=0; i<position-1; i++) {
        temp = temp.nextNode; 
      }
      temp.nextNode = temp.nextNode.nextNode;
    }
    this.count--
  };
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

// Delete a node from linked list
linkedList.deleteNode(3)

// Get length of linked list after deletion
const length2 = linkedList.get();
