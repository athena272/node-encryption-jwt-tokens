import { scryptSync, randomBytes } from 'crypto'

export default function generateHashImprovement(password: string): [string, string] {
    const salt = randomBytes(16).toString('hex')
    const passwordHash = scryptSync(password, salt, 64).toString('hex')

    return [salt, passwordHash]
}