import { scryptSync, timingSafeEqual } from "crypto";
import generateHashImprovement from "./hash";

type UserParams = {
    name: string,
    password: string
}

export default class User {
    name: string;
    hash: string;
    salt: string;

    constructor({ name, password }: UserParams) {
        this.name = name,
        [this.salt, this.hash] = generateHashImprovement(password)
    }

    authenticate({ name, password }: UserParams) {
        if (name === this.name) {
            const hashTest = scryptSync(password, this.salt, 64)
            const userHash = Buffer.from(this.hash, 'hex')

            const hashsMatch = timingSafeEqual(userHash, hashTest)
            if (hashsMatch) {
                console.log("User successfully authenticated!")
                return true
            }

        }

        console.log("Incorrect username or password.")
        return false
    }
}