// Js code
// const year = document.getElementById("year")
// const thisYear = new Date().getFullYear() // new Date object that represents the current date and time. .getFullYear() is a method of the Date object that returns the year
// year.setAttribute("datetime", thisYear) //create new attribute to an HTML element
// year.textContent = thisYear

// 1st variation
// let year: HTMLElement | null
// year = document.getElementById("year")
// let thisYear: string
// thisYear = new Date().getFullYear().toString() // new Date object that represents the current date and time. .getFullYear() is a method of the Date object that returns the year
// if (year) {
//     year.setAttribute("datatime", thisYear) //create new attribute to an HTML element
//     year.textContent = thisYear
// }

//2nd variation(better variation)
const year = document.getElementById("year") as HTMLSpanElement
const thisYear: string = new Date().getFullYear().toString() // new Date object that represents the current date and time. .getFullYear() is a method of the Date object that returns the year
year.setAttribute("datatime", thisYear) //create new attribute to an HTML element
year.textContent = thisYear
