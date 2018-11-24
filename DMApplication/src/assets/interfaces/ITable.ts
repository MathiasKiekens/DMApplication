import { IView } from "./IView";

export interface ITable {
    find(): object;
    select(opt: ISelectOptions): IView;
    create(): void;
    update(): void;
    destroy(): void;
    replace(): void;
}

interface ISelectOptions {
    view: string
}