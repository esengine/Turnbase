import { StateComponent } from "../Components/StateComponent";

export class DeadState extends fsm.State<StateComponent> {
    update(deltaTime: number): void {
    }
}