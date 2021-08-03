import { PrefabComponent } from "../Components/PrefabComponent";

export class EffectFactory {
    public static createHurtEffect(text: string, pos: es.Vector2) {
        const hurtEntity = es.Core.scene.createEntity("effect_hurt");
        const c_prefab = hurtEntity.addComponent(new PrefabComponent("prefabs/HurtLabel", () => {
            c_prefab.node.getComponent(cc.Label).string = text;

            hurtEntity.setPosition(pos.x, pos.y);
            hurtEntity.tweenPositionTo(pos.add(new es.Vector2(0, 50)), 0.5).setCompletionHandler(() => {
                hurtEntity.destroy();
            }).start();
        }));
    }
}