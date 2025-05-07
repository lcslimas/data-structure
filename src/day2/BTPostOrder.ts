function walkBy(curr: BinaryNode<number>, path: number[]): number[] {
    if (!curr) {
        return path;
    }
    
    walkBy(curr.left as BinaryNode<number>, path);
    walkBy(curr.right as BinaryNode<number>, path);
    path.push(curr.value)
    return path;
}

export default function post_order_search(head: BinaryNode<number>): number[] {
    return walkBy(head, []);
}