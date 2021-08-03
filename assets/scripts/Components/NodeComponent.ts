export class NodeComponent extends es.Component implements es.IUpdatable {
    public node: cc.Node;

    constructor(node: cc.Node) {
        super();

        this.node = node;
    }

    onAddedToEntity() {
        this.syncTransform();
    }

    public onEntityTransformChanged(componentTransform: es.ComponentTransform) {
        // switch (componentTransform) {
        //     case es.ComponentTransform.position:
        //         this.node.setPosition(this.transform.position.x, this.transform.position.y);
        //         break;
        //     case es.ComponentTransform.rotation:
        //         this.node.angle = this.transform.rotation;
        //         break;
        //     case es.ComponentTransform.scale:
        //         this.node.setScale(this.transform.scale.x);
        //         break;
        // }
    }

    update() {
        this.node.setPosition(this.transform.position.x, this.transform.position.y);
    }

    private syncTransform() {
        this.transform.setPosition(this.node.position.x, this.node.position.y);
        this.transform.setRotation(this.node.angle);
        this.transform.setScale(new es.Vector2(this.node.scaleX, this.node.scaleX));
    }
}