//Index Signatures

interface TransactionObj {
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
