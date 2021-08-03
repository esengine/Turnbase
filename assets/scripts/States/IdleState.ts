import { StateComponent } from "../Components/StateComponent";

export class IdleState extends fsm.State<StateComponent> {
    update(deltaTime: number): void {
    }
}