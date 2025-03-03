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
        this.name = name;
        const { salt, hash } = generateHashImprovement(password)
        this.salt = salt
        this.hash = hash
    }

    private generateHashWithSalt(password: string, salt: string, keyLength: number): Buffer {
        return scryptSync(password, salt, keyLength);
    }

    authenticate({ name, password }: UserParams): boolean {
        if (!name || name !== this.name) {
            console.log("❌ Incorrect username or password. (first if)");
            return false;
        }

        const hashTest = this.generateHashWithSalt(password, this.salt, 64)
        const userHash = Buffer.from(this.hash, 'hex')

        if (hashTest.length !== userHash.length) {
            console.log("❌ Incorrect username or password. (second if)");
            return false;
        }

        const hashsMatch = timingSafeEqual(userHash, hashTest)
        if (hashsMatch) {
            console.log("✅ User successfully authenticated!");
            return true;
        }

        console.log("❌ Incorrect username or password. (last if)");
        return false;
    }
}