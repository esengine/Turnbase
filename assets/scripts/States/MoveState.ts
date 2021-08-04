import { NodeComponent } from "../Components/NodeComponent";
import { StateComponent } from "../Components/StateComponent";
import { EntityTag } from "../Data/EntityTag";
import { StateType } from "../Data/StateType";
import UI_com_team_001 from "../FGUI/Main/UI_com_team_001";

export class MoveState extends fsm.State<StateComponent> {
    begin() {
        if (this._context.entity.tag == EntityTag.team) {
            const c_node = this._context.entity.getComponent(NodeComponent);
            const animation = (c_node.node as UI_com_team_001)?.m_animation;
            if (!animation)
                return;
            animation.playing = true;
        }
    }

    end() {
        if (this._context.entity.tag == EntityTag.team) {
            const c_node = this._context.entity.getComponent(NodeComponent);
            const animation = (c_node.node as UI_com_team_001)?.m_animation;
            if (!animation)
                return;
            animation.playing = false;
            animation.frame = 0;
        }
    }

    update(deltaTime: number): void {
    }
}