import { PropertyComponent } from "../Components/PropertyComponent";
import { StateComponent } from "../Components/StateComponent";
import { TargetComponent } from "../Components/TargetComponent";
import { EntityTag } from "../Data/EntityTag";
import { StateType } from "../Data/StateType";
import { EffectFactory } from "../Factories/EffectFactory";

export class AttackState extends fsm.State<StateComponent> {
    public attackTime: number = 1;
    // 伤害延迟
    public attackDelay: number = 0.5;
    public attackFinish: boolean = false;
    private onAttackWay: Function;

    begin() {
        this.attackTime = 1;
        this.attackFinish = false;
        this.onAttackWay = this.onAttack;
    }

    onAttack() {
        const c_attack_target = this._context.entity.getComponent(TargetComponent);
        const c_attack_property = this._context.entity.getComponent(PropertyComponent);
        const c_be_attack_property = c_attack_target.target.getComponent(PropertyComponent);
        const c_be_attack_state = c_attack_target.target.getComponent(StateComponent);
        const damage = es.RandomUtils.randint(c_attack_property.damage_min, c_attack_property.damage_max);
        c_be_attack_property.onDamage(damage);
        c_be_attack_state.changeStateType(StateType.hurt);
        EffectFactory.createHurtEffect("-" + damage, c_attack_target.target.transform.position);
        EffectFactory.createHitEffect(this._context.entity.tag == EntityTag.team ? 0 : 1, c_attack_target.target.transform.position);
        EffectFactory.createSkillEffect(c_attack_property.index, c_attack_target.target.transform.position);
    }

    update(deltaTime: number): void {
        this.attackTime -= deltaTime;
        if (this.attackTime < this.attackDelay && this.onAttackWay) {
            this.onAttackWay();
            this.onAttackWay = null;
        }

        if (this.attackTime < 0) {
            this.attackFinish = true;
        }
    }
}