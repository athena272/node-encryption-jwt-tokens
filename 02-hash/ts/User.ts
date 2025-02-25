import generateHash from "./hash";

type UserParams = {
    name: string,
    password: string
}

export default class User {
    name: string;
    hash: string;

    constructor({ name, password }: UserParams) {
        this.name = name
        this.hash = generateHash(password)
    }

    authenticate({ name, password }: UserParams) {
        if (this.name === name && this.hash === generateHash(password)) {
            console.log("User successfully authenticated!")
            return true
        }

        console.log("Incorrect username or password.")
        return false
    }
}