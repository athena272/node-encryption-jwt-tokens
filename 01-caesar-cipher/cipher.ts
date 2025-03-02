
function shiftCharacter(character: string, shifts: number) {
    const isUpperCase = character >= 'A' && character <= 'Z';
    const isLowerCase = character >= 'a' && character <= 'z';

    if (isUpperCase || isLowerCase) {
        const base = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0)
        const newCharCode = ((character.charCodeAt(0) - base + shifts) % 26 + 26) % 26 + base
        return String.fromCharCode(newCharCode)
    }

    return character
}

function encryptMessage(message: string, shifts: number) {
    return message
        .split('')
        .map(character => shiftCharacter(character, shifts))
        .join('')
}


function decryptMessage(message: string, shifts: number) {
    return message
        .split('')
        .map(character => shiftCharacter(character, -shifts))
        .join('')
}

// 🔹 Teste:
const secretMessage = 'Hello, World! Zz Aa'
const crypteMessage = encryptMessage(secretMessage, 3);
console.log("🚀 ~ Encrypted Message:", crypteMessage); // "Khoor, Zruog! Cc Dd"

const originalMessage = decryptMessage(crypteMessage, 3);
console.log("🚀 ~ Decrypted Message:", originalMessage); // "Hello, World! Zz Aa"

console.log(encryptMessage("alura", -4))

console.log("🚀 ~ encryptMessage('abcd', -4):", encryptMessage('abcd', -4))
