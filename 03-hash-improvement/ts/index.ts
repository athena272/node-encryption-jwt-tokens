import User from './User';

const user = new User({ name: 'John', password: 'myPassword' });
console.log("🚀 ~ User created:", user);

function testAuthentication(user: User, name: string, password: string) {
    console.log(`🔎 Testing authentication for user: "${name}"`);
    user.authenticate({ name, password });
    console.log("─────────────────────────────────────────────");
}

// Success test case
testAuthentication(user, 'John', 'myPassword');

// Failed test cases
testAuthentication(user, 'Jo', 'myPassword');
testAuthentication(user, 'John', 'mypassword');
