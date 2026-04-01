import {Tree} from "./fs/tree";

export let myTree = new Tree("This Portfolio");
myTree.root.addChild("Contact").addChild("Social Media").addChild("LinkedIn");
myTree.root.children[0].addChild("Email");
