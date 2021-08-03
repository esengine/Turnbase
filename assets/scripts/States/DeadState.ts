import { StateComponent } from "../Components/StateComponent";

export class DeadState extends fsm.State<StateComponent> {
    begin() {
        this._context.entity.destroy();
    }

    update(deltaTime: number): void {
    }
}