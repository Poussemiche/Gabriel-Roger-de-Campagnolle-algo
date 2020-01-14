// Write code to remove duplicates from an unsorted linked list.

// NOT WORKING

class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    removeDuplicate() {
 
    }

    countNodes() {
        let node = this.head
        let i = 0

        while(node) {
            i++
            node = node.next
        }
        console.log('Node nbr: ' + i)
        return i
    }

    findNode(index) {
        let cpt = 0
        let node = this.head
        
        while(node) {
            if(cpt === index) {
                console.log('[node found]-> '); 
                console.log(node);
                
                return node
            }
            cpt++
            node = node.next
        }
        console.log('[node not found]'); 
        return null;
    }
    
    appendToTail(v) {
        let node = new Node(v)

        if(!this.head) {
            this.head = node
            console.log('[Node added]-> ')
            console.log(this.head)
            return this.head
        }
        let tail = this.head
        while(tail.next) {
            tail = tail.next
        }
        tail.next = node
        console.log('[Node added]-> ')
        console.log(this.head)
        return this.head
    }

    deleteNode(index) {
        if(!this.head) {
            this.head = new Node(v)
            console.log('[List empty]')
            return
        }
        if(index === 0) {
            this.head = this.head.next
            return
        }
        const previousNode = this.findNode(index - 1)

        if(!previousNode || !previousNode.next)
            return
        previousNode.next = previousNode.next.next
        return this.head
    }
}

let list = new LinkedList()

list.appendToTail(99)
list.appendToTail(42)
list.appendToTail(42)
list.appendToTail(42)
list.appendToTail(42)
list.countNodes()
list.removeDuplicate()
console.log('Afficher liste complete: ')
console.log(list)


