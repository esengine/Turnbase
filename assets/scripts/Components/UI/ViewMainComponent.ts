import { EntityTag } from "../../Data/EntityTag";
import MainBinder from "../../FGUI/Main/MainBinder";
import UI_View_Main from "../../FGUI/Main/UI_View_Main";
import { BattleComponent } from "../BattleComponent";
import { NodeComponent } from "../NodeComponent";
import { PropertyComponent } from "../PropertyComponent";
import { SkillComponent } from "../SkillComponent";
import { StateComponent } from "../StateComponent";

export class ViewMainComponent extends es.Component {
    private _viewMain: UI_View_Main;

    public get viewMain() {
        return this._viewMain;
    }

    onAddedToEntity() {
        fgui.UIPackage.loadPackage("Main", (err, pkg)=>{
            if (err == null) {
                MainBinder.bindAll();
                this._viewMain = UI_View_Main.createInstance();
                this._viewMain.makeFullScreen();
                fgui.GRoot.inst.addChild(this._viewMain);

                this.createEnemyEntities();
                this.createTeamEntities();

                es.Core.scene.createEntity('battle').addComponent(new BattleComponent());
            }
        });
    }

    private createEnemyEntities() {
        for (let i = 0; i < 3; i ++) {
            const node: fgui.GComponent = this._viewMain["m_enemy_" + i];
            const enemyEntity = es.Core.scene.createEntity('enemy_' + i);
            enemyEntity.tag = EntityTag.enemy;
            enemyEntity.addComponent(new NodeComponent(node));
            enemyEntity.addComponent(new PropertyComponent(i));
            enemyEntity.addComponent(new SkillComponent());
            enemyEntity.addComponent(new StateComponent());
        }
    }

    private createTeamEntities() {
        for (let i = 0; i < 3; i ++) {
            const node: fgui.GComponent = this._viewMain["m_team_" + i];
            const teamEntity = es.Core.scene.createEntity('team_' + i);
            teamEntity.tag = EntityTag.team;
            teamEntity.addComponent(new NodeComponent(node));
            teamEntity.addComponent(new PropertyComponent(i));
            teamEntity.addComponent(new SkillComponent());
            teamEntity.addComponent(new StateComponent());
        }
    }

    onRemovedFromEntity() {
        this._viewMain.removeFromParent();
        this._viewMain.dispose();

        es.Core.scene.destroyAllEntities();
    }
}