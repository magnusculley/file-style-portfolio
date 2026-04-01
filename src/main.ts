import { TreeNode } from "./tree/treeclass";
import { myTree } from "./tree/treeread";

function renderTree(): void {
	document.body.innerHTML = myTree.root.htmlize();

	document.querySelectorAll<HTMLButtonElement>(".tree-node-button").forEach((button) => {
		button.addEventListener("dblclick", () => {
			const nodeId = Number(button.dataset.nodeId);
			const node = TreeNode.findById(nodeId);

			if (!node) {
				return;
			}

			node.toggleTop();
			renderTree();
		});
	});
}

renderTree();
