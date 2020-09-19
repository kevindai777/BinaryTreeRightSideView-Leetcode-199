//Java Solution

class Solution {
    public List<Integer> rightSideView(TreeNode root) {
        if (root == null) {
            return new ArrayList<>();
        }
        Deque<TreeNode> queue = new ArrayDeque<>();
        queue.add(root);
        List<Integer> result = new ArrayList<>();
        
        while (!queue.isEmpty()) {
            Deque<TreeNode> next = new ArrayDeque<>();
            result.add(queue.peekLast().val);
            
            while (!queue.isEmpty()) {
                TreeNode curr = queue.removeFirst();
                
                if (curr.left != null) {
                    next.add(curr.left);
                }
                
                if (curr.right != null) {
                    next.add(curr.right);
                }
            }
            
            queue = next;
        }
        
        return result;
    }
}