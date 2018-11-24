import { IPlayer } from "../interfaces/models/IPlayer";
import { IRecord } from "../interfaces/IRecord";

export class Player{
    record: IRecord<IPlayer>;

    
    GetName(): string {
        return this.record.get("Name");
    }

    Get
}