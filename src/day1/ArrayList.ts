export default class ArrayList<T> {
    public length: number;
    private items: (T | undefined)[] ;
    private capacity: number;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.items = [];
        this.length = 0;
    }

    prepend(item: T): void {
        let idx = this.length;
        while(idx >= 0) {
            this.items[idx] = this.items[idx-1]
            idx--
        }
        this.length++;
        this.items[0] = item;
    }
    insertAt(item: T, idx: number): void {
        this.items[idx] = item;
    }
    append(item: T): void {
        this.items[this.length] = item;
        this.length++;
    }
    remove(item: T): T | undefined {
        let foundElement = undefined;
        for(let i = 0; i<this.length; i++) {
            const actualItem = this.items[i];
            if(actualItem === item) {
                foundElement = actualItem;
                this.items[i] = item;
                this.length--;
            }

            if(foundElement) {
                this.items[i] = this.items[i+1]
            }
        }
        return foundElement;
    }
    get(idx: number): T | undefined {
        if(idx >= this.length) throw new Error("Out Of Bounds")
        return this.items[idx]
    }
    removeAt(idx: number): T | undefined {
        if(idx >= this.length) throw new Error("Out Of Bounds")
        const foundElement = this.items[idx];
        if(foundElement) {
            do {
                this.items[idx] = this.items[idx+1]
            } while(this.items[idx++]) 
            this.items.pop()
            this.length--;
        };
        return foundElement;
    }
}
