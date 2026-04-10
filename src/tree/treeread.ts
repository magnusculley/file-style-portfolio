import {Tree, TreeNode} from "./treeclass";
import treeData from "./tree.json";

export const myTree = new Tree("root");

let nodes: TreeNode[] = [myTree.root];
let nodeRecord: Record<string, number> = {
    "root": 1
};

for (const entry of treeData) {
    const [name, parent] = entry.split("/");
    const defixname = name.slice(1);
    nodeRecord[defixname] = TreeNode.nextId;
    let newnode: TreeNode;
    if (parent === ".") {
        newnode = new TreeNode(name, myTree.root);
        nodes.push(newnode);
    } else {
        const parentNode = TreeNode.findById(nodeRecord[parent]);
        newnode = new TreeNode(name, parentNode);
        nodes.push(newnode);
    }
    console.log("Tree loaded with nodes:", nodes);
}

