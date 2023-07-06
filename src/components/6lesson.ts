import { act } from "react-dom/test-utils"

class Coder {
    secondLang!: string //stay away from this XD

    constructor(
        public readonly name: string,
        public music: string,
        private age: number,
        protected lang: string = "Typescript"
    ) {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }

    public getAge() {
        return `I'm ${this.age}`
    }
}

const Dima = new Coder("Dima", "Phonk", 16)
console.log(Dima.getAge())
// console.log(Dima.age)
// console.log(Dima.lang) //I have error but it's work. Error because lang is protected

class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number
    ) {
        super(name, music, age)
        this.computer = computer
    }

    public getLang() {
        return `I write this website using ${this.lang}`
    }
}
const myLang = new WebDev("XX", "Dima", "Phonk", 16)
console.log(myLang.getLang())
// console.log(myLang.age)

interface Musician {
    name: string
    instrument: string
    play(action: string): string
}

class Guitarist implements Musician {
    name: string
    instrument: string

    constructor(name: string, instrument: string) {
        this.name = name
        this.instrument = instrument
    }

    play(action: string): string {
        return `${this.name} ${action} the ${this.instrument}`
    }
}
const Page = new Guitarist("Boby", "guitar")
console.log(Page.play("strums"))

///////////////////////////////////////////

class Peeps {
    static count: number = 0

    static getCount(): number {
        return Peeps.count
    }

    public id: number

    constructor(public name: string) {
        this.name = name
        this.id = ++Peeps.count
    }
}
