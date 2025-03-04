import { createCipheriv, randomBytes, createDecipheriv } from "crypto";

const message = 'Course demonstration'
const key = randomBytes(32)
const iv = randomBytes(16)

const cipher = createCipheriv('aes-256-gcm', key, iv)
const encryptedMessage = cipher.update(message, 'utf-8', 'hex') + cipher.final('hex')
const authTag = cipher.getAuthTag().toString('hex') // Captures the Auth Tag for authentication

console.log("🚀 ~ encryptedMessage:", encryptedMessage)
console.log("🚀 ~ authTag:", authTag)

// Transmission ------------- key, iv, message

// 🔓 Decrypt the message
const decipher = createDecipheriv('aes-256-gcm', key, iv)
decipher.setAuthTag(Buffer.from(authTag, 'hex')) // 🔥 Important: set the Auth Tag before calling final()

const decryptedMessage = decipher.update(encryptedMessage, 'hex', 'utf-8') + decipher.final('utf-8')
console.log("🚀 ~ decryptedMessage:", decryptedMessage)