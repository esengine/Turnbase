import MainBinder from "../../FGUI/Main/MainBinder";
import UI_MainScene from "../../FGUI/Main/UI_MainScene";

export class ViewMainComponent extends es.Component {
    private _viewMain: UI_MainScene;

    public get viewMain() {
        return this._viewMain;
    }

    initialize() {
        fgui.UIPackage.addPackage("Main");
        MainBinder.bindAll();
    }

    onAddedToEntity() {
        this._viewMain = UI_MainScene.createInstance();
        this._viewMain.makeFullScreen();
        fgui.GRoot.inst.addChild(this._viewMain);
    }

    onRemovedFromEntity() {
        this._viewMain.removeFromParent();
        this._viewMain.dispose();
    }
}