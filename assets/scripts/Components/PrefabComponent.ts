import { MainScene } from "../Scenes/MainScene";
import { NodeComponent } from "./NodeComponent";

export class PrefabComponent extends es.Component {
    public prefab: cc.Prefab;
    public node: cc.Node;
    public resourceName: string;
    public onComplete: Function;

    constructor(resourceName: string, complete?: Function) {
        super();
        this.resourceName = resourceName;
        this.onComplete = complete;
    }

    onAddedToEntity() {
        cc.resources.load(this.resourceName, cc.Prefab, (err: Error, assets: cc.Prefab)=>{
            this.prefab = assets;
            this.node = cc.instantiate(this.prefab);
            this.entity.addComponent(new NodeComponent(this.node));
            (es.Core.scene as MainScene).canvas.addChild(this.node);

            if (this.onComplete)
                this.onComplete();
        });
    }

    onRemovedFromEntity() {
        this.node.removeFromParent();
        this.node.destroy();
    }
}