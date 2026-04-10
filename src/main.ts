import { TreeNode } from "./tree/treeclass";
import { myTree } from "./tree/treeread";
import { renderHeader } from "./page/Header";
import { renderBody } from "./page/body";
import { renderFooter } from "./page/footer";

function renderTree(): void {
	const app = document.querySelector<HTMLDivElement>("#app");

	if (!app) {
		return;
	}

	app.innerHTML = `
		${renderHeader()}
		${renderBody(myTree.root.htmlize())}
		${renderFooter()}
	`;

	document.querySelectorAll<HTMLButtonElement>(".tree-node-button").forEach((button) => {
		button.addEventListener("click", () => {
			const nodeId = Number(button.dataset.nodeId);
			const node = TreeNode.findById(nodeId);
			node.toggleTop();
			renderTree();
		});
		button.addEventListener("dblclick", () => {
			const nodeId = Number(button.dataset.nodeId);
			const node = TreeNode.findById(nodeId);
			void node.content.display(node.name);
		});
	});
}


renderTree();