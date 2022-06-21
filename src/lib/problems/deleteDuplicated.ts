class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


export default function deleteDuplicates(head: ListNode | null): ListNode | null {
    var node: ListNode | null = head;
    var result: ListNode = new ListNode(0, null);
    var final: ListNode = result;

    while (node != null) {
        var current: ListNode = node;

        while (node.val == current.val) {
            node = node.next;
            if (node == null)
                break;
        }

        if (current.next == node) {

            result.next = new ListNode(current.val, null);
            result = result.next;

        }
    }

    return final.next;
};