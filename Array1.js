//var country = ["India" , "Nepal" ,"pakistan","Afghanistan","Japan" ,"Australia","USA"]
// console.log(country);
//country.pop()
//country.pop()
//console.log(country)
//country.push("United Kingdom")
//console.log(country)
//country.shift()
//console.log(country)
//country.unshift("NewZealand")
//console.log(country)
//console.log(country.indexOf("pakistan"))
//console.log(Array.from)

//****************another program

// var isEven = (element) => {
//     return element % 2 === 0
// }

// var results = [2,4,6,8,20,25].every(isEven);
// console.log(results)
// var arra2 = [2,3,4,67,89,10,5,80,12]
// console.log(arra2.fill("R" , 4 , 6))

// ****************delete number from any place on an array
const myNumb = [10,12,14,16,18,20,22,28,30,40,60]
// const myNewNumb = myNumb.filter((num) => num != 28)
const myNewNumb = myNumb.filter((num) => num < 28)
console.log(myNewNumb);

