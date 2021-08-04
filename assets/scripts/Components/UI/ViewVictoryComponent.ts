import MainBinder from "../../FGUI/Main/MainBinder";
import UI_View_Main from "../../FGUI/Main/UI_View_Main";
import UI_View_Victory from "../../FGUI/Main/UI_View_Victory";
import { MainScene } from "../../Scenes/MainScene";
import { BattleComponent } from "../BattleComponent";
import { ViewMainComponent } from "./ViewMainComponent";

export class ViewVictoryComponent extends es.Component {
    private _viewMain: UI_View_Victory;

    public get viewMain() {
        return this._viewMain;
    }

    onAddedToEntity() {
        fgui.UIPackage.loadPackage("Main", (err, pkg)=>{
            if (err == null) {
                MainBinder.bindAll();
                this._viewMain = UI_View_Victory.createInstance();
                this._viewMain.makeFullScreen();
                fgui.GRoot.inst.addChild(this._viewMain);

                this._viewMain.m_btn_next.onClick(this.onNext, this);
            }
        });
    }

    onNext() {
        (es.Core.scene as MainScene).restart();
    }

    onRemovedFromEntity() {
        this._viewMain.removeFromParent();
        this._viewMain.dispose();
    }
}