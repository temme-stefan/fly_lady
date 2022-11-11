import {User} from "../data/User";
import {TaskType} from "../data/Definitions";

const Greetings = [
    "Mit einem Wisch ist alles weg",
    "Der frühe Vogel wischt das Bad",
    "Aller Anfang ist schwer",
    "Kleine Schritte auf dem Weg zum Ziel",
    "Wischen und Wedeln",
    "Heute lebe ich, morgen putz ich",
    "Fensterputzen ist was für Leute mit hübschen Nachbarn",
    "Putzen mit Kindern ist wie Zähneputzen mit Nutella"
]

export function getTitle() {
    return Greetings[Math.floor(Math.random() * Greetings.length)]
}

export interface FilterState {
    users: User[],
    date: Date,
    types: TaskType[]
}