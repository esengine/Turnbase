import MainBinder from "../../FGUI/Main/MainBinder";
import UI_View_Main from "../../FGUI/Main/UI_View_Main";
import UI_View_Tips from "../../FGUI/Main/UI_View_Tips";
import { BattleComponent } from "../BattleComponent";
import { NodeComponent } from "../NodeComponent";

export class ViewTipComponent extends es.Component {
    private _tip: string = "";
    private _viewMain: UI_View_Tips;
    private _callback: Function;

    public get viewMain() {
        return this._viewMain;
    }

    constructor(tip: string, callback?: Function) {
        super();
        this._tip = tip;
        this._callback = callback;
    }

    onAddedToEntity() {
        fgui.UIPackage.loadPackage("Main", (err, pkg)=>{
            if (err == null) {
                MainBinder.bindAll();
                this._viewMain = UI_View_Tips.createInstance();
                this._viewMain.makeFullScreen();
                fgui.GRoot.inst.addChild(this._viewMain);

                this.entity.addComponent(new NodeComponent(this._viewMain));
                this._viewMain.m_tip.text = this._tip;

                if (this._callback)
                    this._callback();
            }
        });
    }

    onRemovedFromEntity() {
        this._viewMain.removeFromParent();
        this._viewMain.dispose();
    }
}