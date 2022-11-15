// This is an to practice traversing a linked list. Given a pointer to the head node of a linked list, print each node's data element, one per line. If the head pointer is null (indicating the list is empty), there is nothing to print.
class Node {
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    // insert node at first position
    insertFirst(data){
        this.head = new Node(data, this.head);
        this.size ++;
    }

    // insert at a specific index.
    insertAtIndex(data,index){
        // check for within range
        if(index>0 && index > this.size){
            return;
        }
        // insert at first index
        if(index === 0){
            this.insertFirst(data);
            return;
        }
        // create a new node
        const node = new Node(data);
        // declare previous and current position
        let current, previous;
        // set the head as current
        current = this.head;
        // loop through the elements
        let count = 0;
        while(count < index){
          previous = current; // Node before index
          count++;
          current = current.next; //Node after index
        }
        node.next = current;
        previous.next = node;
        this.size++;

    }

    // insert node at last position
    insertLast(data){
        // create node
        let node = new Node(data);
        let current;
        // if empty make it head
        if(!this.head){
            this.head = node;
        }else{
            // make current head
            current = this.head;
            // traverse through the list
            while(current.next){
                current = current.next;
            }
            // assign node to the end
            current.next = node;
        }
        // increase size
        this.size++;
    }

    // print the list
    printListData(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}
let list = new LinkedList();
list.insertFirst(100);
list.insertFirst(300);
list.insertLast(400);
list.insertLast(500);
list.insertAtIndex(200,0);
list.insertAtIndex(600,2);

list.printListData();

