//Index Signatures

// interface TransactionObj {
//     readonly [index: string]: number
// }

interface TransactionObj {
    readonly [index: string]: number
    Pizza: number
    Books: number
    Job: number
}

const todaysTr: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50,
}

const todaysNet = (transactions: TransactionObj): number => {
    let total = 0
    for (const transaction in transactions) {
        total += transactions[transaction]
    }
    return total
}

console.log(todaysTr.Pizza)
console.log(todaysTr["Pizza"])

let prop: string = "Pizza"
console.log(todaysNet(todaysTr))

console.log(todaysTr["Dima"])

/////////////////////////////////

interface Student {
    //[key: string]: string | number | number[] | undefined
    name: string
    GPA: number
    classes?: number[]
}

const student: Student = {
    name: "Dima",
    GPA: 3.5,
    classes: [100, 200],
}

// console.log(student.test)

for (const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`)
}

////////////////////////////////////////////////
// interface Incomes {
//     [key: string]: number
// }

type Streams = "salary" | "bonus" | "sidehustle"

type Incomes = Record<Streams, number | string>

const monthlyIncomes: Incomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
}

for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue as keyof Incomes])
}
