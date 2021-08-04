import { NodeComponent } from "./NodeComponent";
import MainBinder from "../FGUI/Main/MainBinder";
import UI_com_skill from "../FGUI/Main/UI_com_skill";

export class SkillEffectComponent extends es.Component implements es.IUpdatable {
    private _effect: UI_com_skill;
    private _type: number = 0;
    private _callback: Function;

    constructor(type: number, callback?: Function) {
        super();
        this._type = type;
        this._callback = callback;
    }

    onAddedToEntity() {
        fgui.UIPackage.loadPackage("Main", (err, pkg)=>{
            if (err == null) {
                MainBinder.bindAll();
                this._effect = UI_com_skill.createInstance();
                this._effect.makeFullScreen();
                fgui.GRoot.inst.addChild(this._effect);

                this.entity.addComponent(new NodeComponent(this._effect));

                this._effect.m_c1.setSelectedIndex(this._type);

                if (this._callback)
                    this._callback();
            }
        });
    }

    onRemovedFromEntity() {
        this._effect.removeFromParent();
        this._effect.dispose();
    }

    update() {
        if (!this._effect)
            return;

        if (this._type == 0 && this._effect.m_skill1.frame == 5) {
            this.entity.destroy();
        }

        if(this._type == 1 && this._effect.m_skill2.frame == 8) {
            this.entity.destroy();
        }

        if(this._type == 2 && this._effect.m_skill3.frame == 9) {
            this.entity.destroy();
        }
    }
}