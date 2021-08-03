export class PropertyComponent extends es.Component {
    /** 位置索引 */
    public index: number = 0;
    public pos: es.Vector2 = es.Vector2.zero;
    public hp: number = 20;
    public damage_min: number = 10;
    public damage_max: number = 15;

    constructor(index: number) {
        super();
        this.index = index;
    }

    onAddedToEntity() {
        this.pos.setTo(this.transform.position.x, this.transform.position.y);
    }

    public onDamage(hp: number) {
        this.hp -= hp;
    }
}