// creando nodos de la linked list
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// va la linked list
class LinkedList {
    constructor(head = null) {
        this.head = head;
    }
    
    addNode = (el) => {
        let node = new ListNode(el);
        let current;
        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }
}


const buildLinkedList = (arr) => {
    let linkedList = new LinkedList();
    for (let i = 0; i < arr.length; i ++) {
        linkedList.addNode(arr[i]);
    }
    // console.log(linkedList);
    return linkedList;
}


// Now lets create the function that removes the duplicate elements inside a linked list
const removeDuplicateNodes = (lL) => {
    if (lL.head == null) {
        return lL;
    } else {
        let current = lL.head;
        let map = new Map();

        while(current) {
            console.log(!map.get(current.data));
            if (!map.get(current.data)) {
                map.set(current.data, current);
                console.log(map);
            }
            current = current.next;
        }
        console.log([...map.keys()]);
        return [...map.keys()];
    }
}

const list1 = buildLinkedList([4, 5, 9, 0, 5, 1, 2]);
const list2 = buildLinkedList([1, 2, 3, 3, 2, 1])

removeDuplicateNodes(list1);
removeDuplicateNodes(list2);
