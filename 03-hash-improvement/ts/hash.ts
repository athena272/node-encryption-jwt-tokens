import { scryptSync, randomBytes } from 'crypto'

const SALT_LENGTH = 16
const KEY_LENGTH = 64

export default function generateHashImprovement(password: string): { salt: string; hash: string } {
    const salt = randomBytes(SALT_LENGTH).toString('hex')
    const passwordHash = scryptSync(password, salt, KEY_LENGTH).toString('hex')

    return { salt, hash: passwordHash }
}