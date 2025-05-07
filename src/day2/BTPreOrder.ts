function walkBy(curr: BinaryNode<number>, path: number[]): number[] {
    if (!curr) {
        return path;
    }
    path.push(curr.value)
    walkBy(curr.left as BinaryNode<number>, path);
    walkBy(curr.right as BinaryNode<number>, path);
    return path;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    return walkBy(head, []);
}