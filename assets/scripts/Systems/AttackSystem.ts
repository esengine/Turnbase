import { BattleComponent } from "../Components/BattleComponent";
import { MoveComponent } from "../Components/MoveComponent";
import { PropertyComponent } from "../Components/PropertyComponent";
import { SkillComponent } from "../Components/SkillComponent";
import { StateComponent } from "../Components/StateComponent";
import { TargetComponent } from "../Components/TargetComponent";
import { ConstData } from "../Data/ConstData";
import { EntityTag } from "../Data/EntityTag";
import { StateType } from "../Data/StateType";
import { AttackState } from "../States/AttackState";

export class AttackSystem extends es.EntityProcessingSystem {
    constructor() {
        super(es.Matcher.empty().all(TargetComponent, SkillComponent, PropertyComponent, StateComponent).exclude(MoveComponent));
    }

    processEntity(entity: es.Entity) {
        const c_target = entity.getComponent(TargetComponent);
        const c_state = entity.getComponent(StateComponent);
        if (c_state.stateType == StateType.idle) {
            if (!c_target.target.transform.position.equals(entity.transform.position, 10)) {
                const c_move = entity.addComponent(new MoveComponent());
                const attackPos = this.getAttackPos(c_target.target, c_target.target.transform.position);
                c_move.setMoveTime(ConstData.attack_move);
                c_move.setMovePos(attackPos.x, attackPos.y);
                c_state.changeStateType(StateType.move);
            }
        } else if(c_state.stateType == StateType.move) {
            c_state.changeStateType(StateType.attack);
        } else if(c_state.stateType == StateType.attack) {
            const attackState = c_state.stateMachine.currentState as AttackState;
            if (attackState.attackFinish) {
                const c_property = entity.getComponent(PropertyComponent);
                const c_move = entity.addComponent(new MoveComponent());
                c_move.setMoveTime(ConstData.attack_move_back);
                c_move.setMovePos(c_property.pos.x, c_property.pos.y);
                c_state.changeStateType(StateType.move_back);
            }
        } else if (c_state.stateType == StateType.move_back) {
            c_state.changeStateType(StateType.idle);
            // 结束目标
            entity.removeComponent(c_target);
            // 结束攻击频次
            const c_battle = es.Core.scene.findComponentOfType(BattleComponent);
            c_battle.setAttack(false);
            c_battle.attack_index ++;
        }
    }

    private getAttackPos(target: es.Entity, pos: es.Vector2): es.Vector2 {
        if (target.tag == EntityTag.enemy) {
            return pos.add(new es.Vector2(50, 0));
        } else if(target.tag == EntityTag.team) {
            return pos.sub(new es.Vector2(50, 0));
        }

        throw new Error('获取攻击位置失败');
    }
}