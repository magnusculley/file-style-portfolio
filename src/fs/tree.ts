export class TreeNode{
    name: string;
    children: TreeNode[];
    parent: TreeNode|null;

    constructor(name: string, parent: TreeNode|null) {
        this.name = name;
        this.children = [];
        this.parent = parent||null;
    }
    addChild(name: string): TreeNode{
        const child = new TreeNode(name, this);
        this.children.push(child);
        return child;
    }
}

export class Tree{
    root: TreeNode;

    constructor(rootName: string) {
        this.root = new TreeNode(rootName, null);
    }
}

export function htmlizeTree(node: TreeNode): string{
    return `
    <div>
        <span>${node.name}</span>
        <div style="margin-left: 20px;">
            ${node.children.map(htmlizeTree).join('')}
        </div>
    </div>
    `;
}