import { StateType } from "../Data/StateType";
import { AttackState } from "../States/AttackState";
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
    }

    public changeStateType(type: StateType) {
        this._stateType = type;
        if (type == StateType.idle) {
            this._stateMachine.changeState(IdleState);
        } else if(type == StateType.move || type == StateType.move_back) {
            this._stateMachine.changeState(MoveState);
        } else {
            this._stateMachine.changeState(AttackState);
        }
    }

    update() {
        if (!this._stateMachine) return;
        this._stateMachine.update(es.Time.deltaTime);
    }
}