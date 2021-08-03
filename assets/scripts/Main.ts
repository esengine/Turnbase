// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { MainScene } from "./Scenes/MainScene";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Main extends cc.Component {
    start () {
        es.Core.create(false);
        es.Core.scene = new MainScene();
    }

    update (dt) {
        es.Core.emitter.emit(es.CoreEvents.frameUpdated, dt);
    }
}
