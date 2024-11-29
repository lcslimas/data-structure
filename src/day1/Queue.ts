
type Qnode<T> = {
    value: T
    next?: Qnode<T>
}
export default class Queue<T> {
    private head?: Qnode<T>;
    private tail?: Qnode<T>;
    public length: number;

    constructor() {
        this.tail = this.head = undefined
        this.length = 0;
    }

    enqueue(item: T): void {
        const qNode = { value: item } as Qnode<T>
        this.length++
        if(!this.tail) {
            this.head = this.tail = qNode
            return 
        }

        this.tail.next = qNode
        this.tail = qNode
    }
    deque(): T | undefined {
        if(!this.head) return undefined;
        const headValue = this.head;
        this.head = this.head.next;
        this.length--;  
        
        if (!this.head) {
            this.tail = undefined;
        }

        headValue.next = undefined;
        return headValue.value;
    }
    peek(): T | undefined {
        return this.head?.value
    }
}
