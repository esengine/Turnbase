import { BattleComponent } from "../Components/BattleComponent";
import { NodeComponent } from "../Components/NodeComponent";
import { PropertyComponent } from "../Components/PropertyComponent";
import { SkillComponent } from "../Components/SkillComponent";
import { StateComponent } from "../Components/StateComponent";
import { ViewMainComponent } from "../Components/UI/ViewMainComponent";
import { EntityTag } from "../Data/EntityTag";
import { AttackSystem } from "../Systems/AttackSystem";
import { BattleSystem } from "../Systems/BattleSystem";
import { MoveSystem } from "../Systems/MoveSystem";

export class MainScene extends es.Scene {
    initialize() {
        this.addEntityProcessor(new BattleSystem());
        this.addEntityProcessor(new AttackSystem());
        this.addEntityProcessor(new MoveSystem());
    }

    onStart() {
        this.createEntity('viewMain').addComponent(new ViewMainComponent());
    }

    restart() {
        es.Core.scene = new MainScene();
    }
}