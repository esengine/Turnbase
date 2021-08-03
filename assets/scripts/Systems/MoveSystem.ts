import { MoveComponent } from "../Components/MoveComponent";
import { TargetComponent } from "../Components/TargetComponent";
import { EntityTag } from "../Data/EntityTag";

export class MoveSystem extends es.EntityProcessingSystem {
    constructor() {
        super(es.Matcher.empty().all(MoveComponent, TargetComponent));
    }

    processEntity(entity: es.Entity) {
        const c_move = entity.getComponent(MoveComponent);

        if (!c_move.enabled)
            return;

        c_move.enabled = false;
        const c_target = entity.getComponent(TargetComponent);
        
        entity.tweenPositionTo(c_move.movePos, c_move.moveTime).setCompletionHandler(()=>{
            entity.removeComponent(c_move);
        }).start();
    }
}