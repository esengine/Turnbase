import { StateComponent } from "../Components/StateComponent";
import { StateType } from "../Data/StateType";

export class AttackState extends fsm.State<StateComponent> {
    public attackTime: number = 1;
    public attackFinish: boolean = false;

    begin() {
        this.attackTime = 1;
    }

    update(deltaTime: number): void {
        if (this.attackFinish)
            return;

        this.attackTime -= deltaTime;
        if (this.attackTime < 0) {
            this.attackFinish = true;
        }
    }
}