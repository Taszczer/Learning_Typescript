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

interface BoolCheack<T> {
    value: T
    is: boolean
}

const checkBoolValue = <T>(arg: T): BoolCheack<T> => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false }
    }
    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return { value: arg, is: false }
    }
    return { value: arg, is: !!arg }
}

interface HasID {
    id: number
}

const processUser = <T extends HasID>(user: T): T => {
    return user
}

console.log(processUser({ id: 1, name: "Dima" }))

const getUsersProperty = <T extends HasID, K extends keyof T>(
    users: T[],
    key: K
): T[K][] => {
    return users.map((user) => user[key])
}
