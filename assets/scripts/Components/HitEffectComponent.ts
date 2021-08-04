import MainBinder from "../FGUI/Main/MainBinder";
import UI_com_effect_hit from "../FGUI/Main/UI_com_effect_hit";
import UI_View_Main from "../FGUI/Main/UI_View_Main";
import { BattleComponent } from "./BattleComponent";
import { NodeComponent } from "./NodeComponent";

export class HitEffectComponent extends es.Component implements es.IUpdatable {
    private _effect: UI_com_effect_hit;
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
                this._effect = UI_com_effect_hit.createInstance();
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

        if (this._type == 0 && this._effect.m_effect_0.frame == 4) {
            this.entity.destroy();
        }

        if(this._type == 1 && this._effect.m_effect_1.frame == 5) {
            this.entity.destroy();
        }
    }
}