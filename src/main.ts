import { htmlizeTree, Tree, TreeNode } from "./fs/tree";
const myTree = new Tree("Root");
myTree.root.children.push(new TreeNode("Child 1", myTree.root));
myTree.root.children.push(new TreeNode("Child 2", myTree.root));
myTree.root.addChild("Child 3").addChild("Grandchild 1");

document.body.innerHTML = htmlizeTree(myTree.root);
