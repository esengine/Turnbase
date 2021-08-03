import { TurnType } from "../Data/TurnType";

export class BattleComponent extends es.Component {
    /** 轮数 */
    public round: number = 0;
    /** 战斗是否开始 */
    public battle_start: boolean = false;
    /** 回合类别 */
    public turn_type: TurnType = TurnType.team;
    /** 进攻位置 */
    public attack_index: number = 0;
    /** 是否发起攻击 */
    public isAttack: boolean = false;
    public readonly attack_index_max: number = 2;

    /** 战斗胜利回调 */
    public onBattleSuccess: Function;
    /** 战斗失败回调 */
    public onBattleFail: Function;

    constructor() {
        super();

        this.onBattleSuccess = ()=>{
            console.log("战斗胜利");
        };

        this.onBattleFail = () => {
            console.log("战斗失败");
        };
    }

    /**
     * 开始战斗
     */
    public startBattle() {
        this.battle_start = true;
        
        console.log('开始战斗');
    }
    
    public pauseBattle() {
        this.battle_start = false;
    }

    public stopBattle() {
        this.battle_start = false;
        this.reset();

        console.log('战斗停止');
    }

    public turnToTeam() {
        this.turn_type = TurnType.team;
        this.attack_index = 0;
        this.round ++;

        console.log("轮到我方回合");
    }

    public turnToEnemy() {
        this.turn_type = TurnType.enenmy;
        this.attack_index = 0;
        this.round ++;

        console.log("轮到敌方回合");
    }

    public setAttack(attack: boolean) {
        this.isAttack = attack;
    }

    public doSuccess() {
        if (this.onBattleSuccess) {
            this.onBattleSuccess();
        }
    }

    public doFail() {
        if (this.onBattleFail) {
            this.onBattleFail();
        }
    }

    public reset() {
        this.round = 0;
        this.battle_start = false;
        this.turn_type = TurnType.team;
        this.attack_index = 0;
        this.onBattleSuccess = null;
        this.onBattleFail = null;
    }
}