import { createCipheriv, randomBytes, createDecipheriv } from "crypto";

const message = 'Course demonstration'
const key = randomBytes(32)
const iv = randomBytes(16)

const cipher = createCipheriv('aes-256-cbc', key, iv)
const encryptedMessage = cipher.update(message, 'utf-8', 'hex') + cipher.final('hex')
console.log("🚀 ~ encryptedMessage:", encryptedMessage)

// Transmission ------------- key, iv, message

// Decrypt the message

const decipher = createDecipheriv('aes-256-cbc', key, iv)
const decryptedMessage = decipher.update(encryptedMessage, 'hex', 'utf-8') + decipher.final('utf-8')
console.log("🚀 ~ decryptedMessage:", decryptedMessage)