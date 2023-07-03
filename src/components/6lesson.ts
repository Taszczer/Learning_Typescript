class Coder {
    secondLang!: string //stay away from this XD

    constructor(
        public readonly name: string,
        public music: string,
        private age: number,
        protected lang: string = "Ukrainian"
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
