class ConnectNode {
    val: number
    left: ConnectNode | null
    right: ConnectNode | null
    next: ConnectNode | null
    constructor(val?: number, left?: ConnectNode, right?: ConnectNode, next?: ConnectNode) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
        this.next = (next === undefined ? null : next)
    }
}


// function connect(root: ConnectNode | null): ConnectNode | null {
//     if (root == null)
//         return null;


//     if (root.right != null) {
//         root.right.next = next(root, root.right);
//         connect(root.right);
//     }

//     if (root.left != null) {
//         root.left.next = next(root, root.left);
//         connect(root.left);
//     }

//     return root;
// };

// function next(root: ConnectNode | null, current: ConnectNode): ConnectNode | null {
//     let result: ConnectNode | null = null;

//     while (result == null && root != null) {
//         result = (root.right != current && root.right != null) ? root.right : (root.next != null ? (root.next.left != null ? root.next.left : (root.next.right != null ? root.next.right : null)) : null);
//         if (current.val == -7)
//             console.log(root);
//         root = root.next;
//     }

//     return result;
// }

function connect(root: ConnectNode | null): ConnectNode | null {
    let storage: ConnectNode[] = [];
    let queue: ConnectNode[] = [];
    if (root == null)
        return null;

    storage.push(root);

    while (storage.length > 0) {
        let node: ConnectNode | undefined = storage.shift();

        if (node != undefined) {
            node.next = storage[0] != undefined ? storage[0] : null;

            if (node.left != null)
                queue.push(node.left);
            if (node.right != null)
                queue.push(node.right);

            if (storage.length == 0) {
                storage = queue;
                queue = [];
            }
        }
    }
    return root;
};