import { generateKeyPairSync, publicEncrypt, privateDecrypt } from "crypto";

// 🔑 Generating an RSA key pair
const { privateKey, publicKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
        type: 'spki',
        format: 'pem',
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
    },
})
console.log("🚀 ~ publicKey:", publicKey)
console.log("🚀 ~ privateKey:", privateKey)

// 🔒 Encryption
const encryptedData = publicEncrypt(
    publicKey,
    Buffer.from("Super secret message")
)

console.log("🚀 ~ Encrypted Data:", encryptedData.toString('hex'));

// 📡 Transmission

// 🔓 Decryption
const decryptedData = privateDecrypt(
    privateKey,
    encryptedData
);

console.log(`Decrypted Data: ${decryptedData.toString('utf-8')}`);