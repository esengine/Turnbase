export class PropertyComponent extends es.Component {
    /** 位置索引 */
    public index: number = 0;
    public pos: es.Vector2 = es.Vector2.zero;
    public hp: number = 300;
    public damage_min: number = 10;
    public damage_max: number = 15;

    onAddedToEntity() {
        this.pos.setTo(this.transform.position.x, this.transform.position.y);
    }

    /**
     * 设置当前位置索引
     * @param index 自身目标索引
     * @returns 
     */
    public setIndex(index: string) {
        this.index = Number(index);
        return this;
    }

    public onDamage(hp: number) {
        this.hp -= hp;
    }
}