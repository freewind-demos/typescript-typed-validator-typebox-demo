import { Type, type Static } from '@sinclair/typebox'
import { Value } from '@sinclair/typebox/value'

const user = Type.Object({
    username: Type.Union([Type.String(), Type.Number()])
})

console.log(user);

type User = Static<typeof user>

const user1: User = {
    username: 'Freewind'
}

const user2: User = {
    username: 123
}

console.log(Value.Decode(user, { username: 111 }));
console.log([...Value.Errors(user, { username: true })]);



