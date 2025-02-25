import generateHash from "./hash";

export default class User {
    name: string;
    hash: string;

    constructor({ name, password }: { name: string, password: string }) {
        this.name = name
        this.hash = generateHash(password)
    }

    authenticate({ name, password }) {
        if (this.name === name && this.hash === password) {
            console.log("User successfully authenticated!")
            return true
        }

        console.log("Incorrect username or password.")
        return false
    }
}