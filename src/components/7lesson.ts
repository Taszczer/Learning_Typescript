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

console.log(todaysTr.Pizza)
console.log(todaysTr["Pizza"])
