import User from './src/interfaces/User'

const a = {
    a: 1,
    b: 2
}

const a1 = JSON.stringify(a)
const b1: User = <User>JSON.parse(a1)

console.log(b1)
