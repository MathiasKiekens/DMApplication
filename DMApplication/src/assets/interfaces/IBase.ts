import { ITable } from "./ITable";
import { Tables } from "../enums/tables";

export interface IBase {
    table(tableName: Tables): ITable
}