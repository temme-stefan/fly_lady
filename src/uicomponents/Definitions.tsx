import {User} from "../data/User";

export enum FilterScope{
    SingleDay = "Tag",
    Week = "Woche"
}
export const allFilterScopes = Object.keys(FilterScope).filter(v => isNaN(Number(v)));

export interface FilterState{
    user: User|null,
    scope:FilterScope,
    date: Date
}