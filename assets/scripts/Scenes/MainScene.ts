import { BattleComponent } from "../Components/BattleComponent";
import { NodeComponent } from "../Components/NodeComponent";
import { PropertyComponent } from "../Components/PropertyComponent";
import { SkillComponent } from "../Components/SkillComponent";
import { StateComponent } from "../Components/StateComponent";
import { EntityTag } from "../Data/EntityTag";
import { AttackSystem } from "../Systems/AttackSystem";
import { BattleSystem } from "../Systems/BattleSystem";
import { MoveSystem } from "../Systems/MoveSystem";

export class MainScene extends es.Scene {
    private enemyNode: cc.Node;
    private teamNode: cc.Node;

    initialize() {
        this.addEntityProcessor(new BattleSystem());
        this.addEntityProcessor(new AttackSystem());
        this.addEntityProcessor(new MoveSystem());
    }

    onStart() {
        this.enemyNode = cc.find('Canvas/EnemyNode');
        this.teamNode = cc.find('Canvas/TeamNode');

        this.createEnemyEntities();
        this.createTeamEntities();

        const c_battle = this.createEntity('battle').addComponent(new BattleComponent());
        c_battle.startBattle();
    }

    private createEnemyEntities() {
        for (let i = 0; i < this.enemyNode.childrenCount; i ++) {
            const node = this.enemyNode.children[i];
            const enemyEntity = this.createEntity('enemy_' + i);
            enemyEntity.tag = EntityTag.enemy;
            enemyEntity.addComponent(new NodeComponent(node));
            enemyEntity.addComponent(new PropertyComponent())
                .setIndex(node.name);
            enemyEntity.addComponent(new SkillComponent());
            enemyEntity.addComponent(new StateComponent());
        }
    }

    private createTeamEntities() {
        for (let i = 0; i < this.teamNode.childrenCount; i ++) {
            const node = this.teamNode.children[i];
            const teamEntity = this.createEntity('team_' + i);
            teamEntity.tag = EntityTag.team;
            teamEntity.addComponent(new NodeComponent(node));
            teamEntity.addComponent(new PropertyComponent())
                .setIndex(node.name);
            teamEntity.addComponent(new SkillComponent());
            teamEntity.addComponent(new StateComponent());
        }
    }
}