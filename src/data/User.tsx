import boy from "../img/boy.png"
import girl from "../img/girl.png"

export enum User {
    Sysy,
    Nappo
}

export const allUsers = [User.Sysy,User.Nappo];

export function homeUser() {
    return User.Nappo;
}

export const UserData = new Map([
    [User.Sysy, {displayName: "Sysy", picture: girl}],
    [User.Nappo, {displayName: "Nappo", picture: boy}],
])

export const userCount = UserData.size;