import { StateType } from "../Data/StateType";
import { AttackState } from "../States/AttackState";
import { DeadState } from "../States/DeadState";
import { HurtState } from "../States/HurtState";
import { IdleState } from "../States/IdleState";
import { MoveState } from "../States/MoveState";

export class StateComponent extends es.Component implements es.IUpdatable {
    private _stateMachine: fsm.StateMachine<StateComponent>;
    private _stateType: StateType = StateType.idle;
    public get stateType() {
        return this._stateType;
    }

    public get stateMachine() {
        return this._stateMachine;
    }

    onAddedToEntity() {
        this._stateMachine = new fsm.StateMachine(this, new IdleState());
        this._stateMachine.addState(new MoveState());
        this._stateMachine.addState(new AttackState());
        this._stateMachine.addState(new HurtState());
        this._stateMachine.addState(new DeadState());
    }

    public changeStateType(type: StateType) {
        this._stateType = type;
        switch (type) {
            case StateType.idle:
                this._stateMachine.changeState(IdleState);
                break;
            case StateType.move:
            case StateType.move_back:
                this._stateMachine.changeState(MoveState);
                break;
            case StateType.attack:
                this._stateMachine.changeState(AttackState);
                break;
            case StateType.hurt:
                this._stateMachine.changeState(HurtState);
                break;
            case StateType.dead:
                this._stateMachine.changeState(DeadState);
                break;
        }
    }

    update() {
        if (!this._stateMachine) return;
        this._stateMachine.update(es.Time.deltaTime);
    }
}