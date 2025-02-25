import User from './User'

const user = new User({ name: 'John', password: 'myPassword' })
console.log("🚀 ~ user:", user)


user.authenticate({ name: 'John', password: 'myPassword' })

user.authenticate({ name: 'Jo', password: 'myPassword' })
user.authenticate({ name: 'John', password: 'mypassword' })
