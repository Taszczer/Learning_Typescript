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
logMsg("hello?")
logMsg(add(5, 1))

let subtract = function (c: number, d: number): number {
    return c - d
}

//type mathFunction = (a: number, b: number) => number
type mathFunction = (a: number, b: number) => number

let multiply: mathFunction = function (c, d) {
    return c * d
}

//optional parameter
const addAll = (a: number, b: number, c?: number) => {
    if (typeof c !== "undefined") {
        return a + b + c
    } else {
        return a + b
    }
}

// default param value
const sumAll = (a: number = 10, b: number, c: number = 2) => {
    return a + b + c
}

logMsg(addAll(2, 3, 2))
logMsg(addAll(2, 3))
logMsg(sumAll(2, 3))
logMsg(sumAll(undefined, 3))

//Rest Parameters
const total = (a: number, ...nums: number[]): number => {
    return (
        a +
        nums.reduce((total, curr) => {
            return total + curr
        }, 0)
    )
}
logMsg(total(1, 2, 5)) //a it is 1, nums is 2, 5

const createError = (errMsg: string): never => {
    throw new Error(errMsg)
}

const infinite = () => {
    let i: number = 1
    while (true) {
        i++
        if (i > 100) break
    }
}

//custom type guard
const isNumber = (value: any): boolean => {
    return typeof value === "number" ? true : false
}

//use of the b=never type
const numberOrString = (value: number | string): string => {
    if (typeof value === "string") return "string"
    if (isNumber(value)) return "number"
    else return createError("STOP WHAT????")
}
