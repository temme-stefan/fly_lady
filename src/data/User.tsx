
export enum User {
    Sysy,
    Nappo
}

export const UserData = new Map([
    [User.Nappo, {displayName: "Nappo", picture: "img/boy.png"}],
    [User.Sysy, {displayName: "Sysy", picture: "img/girl.png"}]
])

export const userCount = UserData.size;