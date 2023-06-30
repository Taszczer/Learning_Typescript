// Type Aliases
type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type randomType = {
    name: string
    active?: boolean
    music: stringOrNumberArray
}

type UserId = stringOrNumber
//We can't change type to interface

// Literal types

let myName: "Dima"

let userName: "Dima" | "Donald" | "Random"

//functions
const add = (a: number, b: number): number => {
    return a + b
}

const logMsg = (message: any): void => {
    console.log(message)
}
//void is for functions that don't return anything
