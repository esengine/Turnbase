export class MoveComponent extends es.Component {
    public moveTime: number = 1;
    public movePos: es.Vector2 = es.Vector2.zero;

    public setMoveTime(time: number) {
        this.moveTime = time;
        return this;
    }

    public setMovePos(x: number, y: number) {
        this.movePos.setTo(x, y);
    }
}