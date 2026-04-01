
export class TreeNode{
    static nodeIndex: Map<number, TreeNode> = new Map();
    static nextId = 1;

    id: number;
    name: string;
    children: TreeNode[];
    parent: TreeNode|null;
    top: boolean;
    type: "file" | "folder" = "file";
    
    constructor(name: string, parent: TreeNode|null) {
        this.id = TreeNode.nextId++;
        this.name = name.slice(1);
        this.children = [];
        this.parent = parent||null;
        this.top = false;
        if (name.startsWith("D")) {
            this.type = "folder";
        } else {
            this.type = "file";
        } 
        TreeNode.nodeIndex.set(this.id, this);
    }

    static findById(id: number): TreeNode | undefined {
        return TreeNode.nodeIndex.get(id);
    }

    addChild(name: string): TreeNode{
        const child = new TreeNode(name, this);
        this.children.push(child);
        return child;
    }

    toggleTop(): void {
        this.top = !this.top;
    }

    htmlize(): string{
        return `
        <div>
            <button class="tree-node-button" data-node-id="${this.id}">${this.name}</button>
            <div style="margin-left: 20px;">
                ${this.top ? this.children.map(child => child.htmlize()).join('') : ''}
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

