class Node{
    constructor(val){
        this.value = val,
        this.next = null;
    }
};

class LinkedList{
    constructor(value){ // Constructor takes in a value
        const newNode = new Node(value) // Create new node
        this.head = newNode // Set head to point to new node
        this.tail = this.head // Set tail to point to new node
        this.length = 1 // Set the length of the linked list
    }

    push(value){ // O(1)
        const newNode = new Node(value)

        if(!this.head) { // this = entire list
            this.head = newNode // If there's no nodes in list set this node to head
            this.tail = newNode // If there's no nodes in list set this node to tail
        }else{ // If the list is not empty
            this.tail.next = newNode // Set the next value of the current tail in list to the new node
            this.tail = newNode // Set new node to tail
        }

        this.length++ // Increase list length 
        return this // Return entire list
    }

    pop(){ // O(n)
        if(!this.head) return undefined // No nodes in list

        let temp = this.head // Need to iterate from start of list to find node with a next value = null
        let pre = this.head // Keep track of the node before the node that points to null
    
        while(temp.next){ // Runs while current nodes next points to another node, ends when current nodes next points to null
            pre = temp // Continue looping through the list
            temp = temp.next // Move up list
        }
        
        this.tail = pre // Change tail to penultimate node
        this.tail.next = null // Remove the last node
        this.length-- // Decrement the length

        if(this.length === 0){ // If there is only one node in list, while loop won't run and length will be set to 0
            this.head = null 
            this.tail = null
        }

        return temp // Return the removed node
    }
};