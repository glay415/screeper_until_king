import { BaseUnit } from "./unit";

export class Miner extends BaseUnit {
    protected static role = "miner";

    public Miner(name: string) {
        this.name = name;
    }

    protected defaultAction = (): void => {
        if ()
    };

    public run = (): void => {
        const action: (() => void) | undefined = this.queue.shift();        
        action ? action() : this.defaultAction();
    }
}

/*
    run: function(creep) {
        if(creep.store.getFreeCapacity() > 0) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        }
        else {
            if(creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.spawns['Spawn1']);
            }
        }
*/