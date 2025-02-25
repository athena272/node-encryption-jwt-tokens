import { createHash } from 'crypto'

export default function generateHash(password: string) {
    return createHash('sha256').update(password).digest('hex')
}