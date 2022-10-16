class User {
    constructor(name, currency) {
        this.name = name
        this.currency = currency
    }
}

export let printName = (user => {
    console.log(`User's name is ${user.name}`)
})

printName('abc');