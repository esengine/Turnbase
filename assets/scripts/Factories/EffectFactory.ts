import { HitEffectComponent } from "../Components/HitEffectComponent";
import { PrefabComponent } from "../Components/PrefabComponent";
import { ViewTipComponent } from "../Components/UI/ViewTipComponent";
import { SkillEffectComponent } from "../SkillEffectComponent";

export class EffectFactory {
    public static createHurtEffect(text: string, pos: es.Vector2) {
        const hurtEntity = es.Core.scene.createEntity("effect_hurt");
        hurtEntity.addComponent(new ViewTipComponent(text, ()=>{
            hurtEntity.setPosition(pos.x, pos.y);
            hurtEntity.tweenPositionTo(pos.sub(new es.Vector2(0, 50)), 0.5).setCompletionHandler(() => {
                hurtEntity.destroy();
            }).start();
        }));
    }

    public static createHitEffect(type: number, pos: es.Vector2) {
        const hitEntity = es.Core.scene.createEntity("effect_hit");
        hitEntity.addComponent(new HitEffectComponent(type, ()=>{
            hitEntity.setPosition(pos.x, pos.y);
        }));
    }

    public static createSkillEffect(type: number, pos: es.Vector2) {
        const skillEntity = es.Core.scene.createEntity("effect_skill");
        skillEntity.addComponent(new SkillEffectComponent(type, ()=>{
            skillEntity.setPosition(pos.x, pos.y);
        }));
    }
}