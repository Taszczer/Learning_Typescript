let myTuple: [string, boolean, number] = ["mouse", true, 144] //It's tuple

let mixed = ["book", 14, false]

mixed = myTuple
// myTuple = mixed (dont work)

//Objects
const firstObject = {
    prop1: "Dima",
    prop2: true,
}

firstObject.prop1 = "Amogus"

type randomType = {
    name: string
    active?: boolean
    music: (string | number)[]
} //active teraz moe by jako boolean oraz undefind

let evh: randomType = {
    name: "TaszczerOK",
    active: false,
    music: [2000, "write"],
}

let xD: randomType = {
    name: "TaszczerOK",
    music: [130, "trigger", "light"],
}

// Enum

enum Grade {
    Up = 11,
    Down,
    Left,
    Right,
}
//mogę zmieniać wartość dla 0 objektu
console.log(Grade.Up)
