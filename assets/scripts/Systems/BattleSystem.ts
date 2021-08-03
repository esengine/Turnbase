import { BattleComponent } from "../Components/BattleComponent";
import { PropertyComponent } from "../Components/PropertyComponent";
import { TargetComponent } from "../Components/TargetComponent";
import { EntityTag } from "../Data/EntityTag";
import { TurnType } from "../Data/TurnType";

export class BattleSystem extends es.EntityProcessingSystem {
    constructor() {
        super(es.Matcher.empty().all(BattleComponent))
    }

    processEntity(entity: es.Entity) {
        const c_battle = entity.getComponent(BattleComponent);
        // 如果组件未开启或战斗未开始
        if (!c_battle.enabled || !c_battle.battle_start)
            return;

        // 如果有怪物正在进行攻击
        if (c_battle.isAttack)
            return;

        let index = c_battle.attack_index;
        // 准备开始执行的实体
        let actionEntity: es.Entity = null;
        // 我方进攻
        if (c_battle.turn_type == TurnType.team) {
            const teamEntities = es.Core.scene.findEntitiesWithTag(EntityTag.team);
            actionEntity = this.getEntityByIndex(index, teamEntities);
            while (!actionEntity) {
                // 如果没有实体则寻找下一个位置
                index = ++ c_battle.attack_index;
                actionEntity = this.getEntityByIndex(index, teamEntities);
                if (index > c_battle.attack_index_max) {
                    // 轮次结束 到敌方回合
                    c_battle.turnToEnemy();
                    return;
                }
            }
        } else if(c_battle.turn_type == TurnType.enenmy) {
            const teamEntities = es.Core.scene.findEntitiesWithTag(EntityTag.enemy);
            actionEntity = this.getEntityByIndex(index, teamEntities);
            while (!actionEntity) {
                // 如果没有实体则寻找下一个位置
                index = ++ c_battle.attack_index;
                actionEntity = this.getEntityByIndex(index, teamEntities);
                if (index > c_battle.attack_index_max) {
                    // 轮次结束 到我方回合
                    c_battle.turnToTeam();
                    return;
                }
            }
        }

        // 如果有执行的实体则开始进行攻击
        if (c_battle.turn_type == TurnType.team) {
            const teamEntities = es.Core.scene.findEntitiesWithTag(EntityTag.enemy);
            // 寻找第一个实体
            if (teamEntities.length == 0) {
                // 如果敌方没有怪物则胜利
                // 战斗结束
                c_battle.doSuccess();
                c_battle.stopBattle();
                return;
            }

            actionEntity.addComponent(new TargetComponent(teamEntities[0]));
            c_battle.setAttack(true);
        } else if(c_battle.turn_type == TurnType.enenmy) {
            const teamEntities = es.Core.scene.findEntitiesWithTag(EntityTag.team);
            // 寻找第一个实体
            if (teamEntities.length == 0) {
                // 如果我方没有怪物则失败
                // 战斗结束
                c_battle.doFail();
                c_battle.stopBattle();
                return;
            }

            actionEntity.addComponent(new TargetComponent(teamEntities[0]));
            c_battle.setAttack(true);
        }
    }

    private getEntityByIndex(index: number, entities: es.Entity[]) {
        for (let i = 0; i < entities.length; i ++) {
            const entity = entities[i];
            const c_property = entity.getComponent(PropertyComponent);
            if (c_property.index == index) {
                return entity;
            }
        }

        return null;
    }
}