type Node<T> = {
    value?: T;
    next?: Node<T>;
    prev?: Node<T>;
};

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    prepend(item: T): void {
        const newNode = {value: item}
        const headNode = this.head
        this.length++;
        if(!headNode) {
            this.head = this.tail = newNode
            return
        }
        this.head = { ...newNode, next: headNode }
        headNode.prev = this.head
    }
    insertAt(item: T, idx: number): void {
        if(idx > this.length) {
            throw new Error();
        }
        this.length++;
        if(idx === this.length) {
            this.append(item);
        } else if(idx === 0) {
            this.prepend(item)
        }
        const newNode = {value: item}
        let actualNode = this.head;
        let count = 0;
        while(actualNode && count < idx) {
            actualNode = actualNode.next
            count++;
        }
        const previousNext = actualNode?.next
        if(previousNext) {
            previousNext.next = actualNode
        }
        if(actualNode)
            actualNode.next = {...newNode, next: previousNext, prev: actualNode}
    }
    append(item: T): void {
        const newNode = {value: item}
        if(!this.length) {
            this.head = this.tail = newNode
        }
        this.length++;
        const previousTail = this.tail;
        this.tail = {...newNode, prev: previousTail}
        if(previousTail) {
            previousTail.next = this.tail
        }
    }
    remove(item: T): T | undefined {
        let actualItem = this.head
        while(actualItem) {
            if(actualItem === item) {
                const prevNode = actualItem.prev;
                if(prevNode) {
                    prevNode.next = actualItem.next
                } else {
                    this.head = undefined
                }
                this.length = Math.max(0, this.length--);
                return actualItem.value;
            }
            actualItem = actualItem.next
        }
        return undefined
    }
    get(idx: number): T | undefined { 
        let actualNode = this.head
        for(let i = 0; actualNode && i <= idx; i++) {
            actualNode = actualNode.next
        }
        return actualNode?.value;
    }
    removeAt(idx: number): T | undefined {
        let curr = this.head
        let iterator = 0
        if(idx === 0) {
            const headNode = this.head;
            const nextNode = headNode?.next;
            if(nextNode) nextNode.prev = this.head
            this.head = headNode?.next
            this.length = Math.max(0, this.length--);
            return headNode?.value
        }
        do {
            curr = curr?.next
            iterator++;
        } while (curr && iterator <= idx) 

        if(curr) {
            this.length--// = Math.max(0, this.length--);
        }

        const previousCurr = curr?.prev;
        const nextCur = curr?.next

        if(previousCurr) {
            previousCurr.next = nextCur
        } else {
            this.head = nextCur
        }

        if(nextCur) {
            nextCur.prev = previousCurr;
        }

        return curr?.value
    }
}
