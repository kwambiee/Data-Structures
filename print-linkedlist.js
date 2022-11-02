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
list.insertFirst(200);
list.insertFirst(300);
list.insertLast(400);
list.insertLast(500);

list.printListData();