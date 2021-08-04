import { NodeComponent } from "../Components/NodeComponent";
import { StateComponent } from "../Components/StateComponent";
import { EntityTag } from "../Data/EntityTag";
import UI_com_team_001 from "../FGUI/Main/UI_com_team_001";

export class IdleState extends fsm.State<StateComponent> {

    update(deltaTime: number): void {
    }
}