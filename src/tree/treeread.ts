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
    const parentPath = parent === "." ? "root" : parent.replace(/\\/g, "/");
    const nodePath = parent === "." ? defixname : `${parentPath}/${defixname}`;
    let newnode: TreeNode;
    if (parent === ".") {
        newnode = new TreeNode(name, myTree.root);
        newnode.toggleTop();
        nodes.push(newnode);
    } else {
        const parentId = nodeRecord[parentPath];
        if (parentId === undefined) {
            throw new Error(`Parent path "${parentPath}" not found for "${name}"`);
        }
        const parentNode = TreeNode.findById(parentId);
        newnode = new TreeNode(name, parentNode);
        nodes.push(newnode);
    }
    nodeRecord[nodePath] = newnode.id;
    console.log("Tree loaded with nodes:", nodes);
}
