//Generics
const echo = <T>(arg: T): T => arg //it's like any type

const isObj = <T>(arg: T): boolean => {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null
}

console.log(isObj({ name: "Dima" })) //this is object
console.log(isObj("Lol"))

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false }
    }
    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return { arg, is: false }
    }
    return { arg, is: !!arg }
} //!! convert a value to a boolean type
