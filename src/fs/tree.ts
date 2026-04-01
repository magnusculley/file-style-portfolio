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
    htmlize(): string{
        return `
        <div>
            <button>${this.name}</button>
            <div style="margin-left: 20px;">
                ${this.children.map(child => child.htmlize()).join('')}
            </div>
        </div>
        `;
    }
}

export class Tree{
    root: TreeNode;

    constructor(rootName: string) {
        this.root = new TreeNode(rootName, null);
    }
}

