import {Content} from "./contentclass.ts";

export class TreeNode{
    static nodeIndex: Map<number, TreeNode> = new Map();
    static nextId = 1;

    id: number;
    name: string;
    children: TreeNode[];
    parent: TreeNode|null;
    top: boolean;
    content: Content;
    type: "file" | "folder" = "file";
    
    constructor(name: string, parent: TreeNode|null) {
        this.id = TreeNode.nextId++;
        if (this.id === 1) {
            this.name = name;
        } else {
        this.name = name.slice(1);
        }
        this.children = [];
        this.parent = parent||null;
        this.top = false;
        this.content = new Content(this.name, "This is a " + this.type + " named " + this.name);
        if (name.startsWith("D") || name==="root") {
            this.type = "folder";
        } else {
            this.type = "file";
        } 
        TreeNode.nodeIndex.set(this.id, this);
        if (parent) {
            this.attachToParent(parent);
        }
    }

    static findById(id: number): TreeNode{
        const node = TreeNode.nodeIndex.get(id);
        if (!node) {
            throw new Error(`Node with ID ${id} not found`);
        }
        return node;
    }

    addChild(name: string):  void{
        const child = new TreeNode(name, this);
    }

    attachToParent(parent: TreeNode): void {
        this.parent = parent;
        parent.children.push(this);
    }

    toggleTop(): void {
        this.top = !this.top;
    }

    htmlize(): string{
        if (this.top) {
            return `<div class="tree-node">
                <button class="tree-node-button" data-node-id="${this.id}">${this.name}</button>
                <div class="tree-children">
                    ${this.children.map(child => child.htmlize()).join("")}
                </div>
            </div>`;
        } else {
            return `<div class="tree-node">
                <button class="tree-node-button" data-node-id="${this.id}">${this.name}</button>
            </div>`;
        }
    }
}

export class Tree{
    root: TreeNode;

    constructor(rootName: string) {
        this.root = new TreeNode(rootName, null);
    }
}

