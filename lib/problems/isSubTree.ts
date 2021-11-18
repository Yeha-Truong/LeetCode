
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (root == null && subRoot == null)
        return true;

    else if (root == null)
        return false;

    if (isSubtree(root.left, subRoot))
        return true;
        
    if (isSubtree(root.right, subRoot))
        return true;

    if (root.val == subRoot?.val)
        return isMatch(root, subRoot);

    return false;
};

function isMatch(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (root == null && subRoot == null)
        return true;
    else if (root == null || subRoot == null)
        return false;

    if (root.val != subRoot.val)
        return false;

    return isMatch(root.left, subRoot.left) &&
        isMatch(root.right, subRoot.right);

}