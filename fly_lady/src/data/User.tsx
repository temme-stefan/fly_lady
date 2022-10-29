
export enum User {
    Sysy = "Sysy",
    Nappo = "Nappo"
}

export const allUsers = Object.keys(User).filter(v => isNaN(Number(v)));
export const userCount = allUsers.length;