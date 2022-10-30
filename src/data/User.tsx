export enum User {
    Sysy,
    Nappo
}

export const UserData = new Map([
    [User.Nappo, {displayName: "Nappo"}],
    [User.Sysy, {displayName: "Sysy"}]
])

export const userCount = UserData.size;