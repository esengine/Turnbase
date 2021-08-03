import { PropertyComponent } from "../Components/PropertyComponent";
import { StateComponent } from "../Components/StateComponent";
import { StateType } from "../Data/StateType";

export class HurtState extends fsm.State<StateComponent> {
    private hurtTime = 0.5;

    begin() {
        this.hurtTime = 0.5;
    }

    update(deltaTime: number): void {
        this.hurtTime -= deltaTime;
        if (this.hurtTime < 0) {
            const c_property = this._context.entity.getComponent(PropertyComponent);
            const stateType = c_property.hp <= 0 ? StateType.dead : StateType.idle;
            this._context.changeStateType(stateType);
        }
    }
}