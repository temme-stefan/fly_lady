import boy from "../img/boy.png"
import girl from "../img/girl.png"

export enum User {
    Sysy,
    Nappo
}
console.log(boy,typeof boy);

export const UserData = new Map([
    [User.Nappo, {displayName: "Nappo", picture: boy}],
    [User.Sysy, {displayName: "Sysy", picture: girl}]
])

export const userCount = UserData.size;