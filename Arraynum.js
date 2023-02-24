// const numbers = [10,12,13,14,16,19,20,21,22,23,24,25]
// const evenarray = numbers.filter((num) => num%2===0)
// console.log(evenarray)


// let arra = [10,12,15,16,18,20,23,24,29]
// let evennum = arra.map((num) => num%2===0)
// console.log(evennum)
// 
var arrayNum = [10,12,13,13,12,14,15,13,10,17,18,20,10,10]
 var dupArra = arrayNum => arrayNum.filter((num, ind) => arrayNum.indexOf(num) === ind )
var fdupArra = arrayNum => arrayNum.filter((num, ind) => arrayNum.indexOf(num) !== ind )
var newArra = dupArra(arrayNum)
var dnewArra = fdupArra(arrayNum)
 console.log(newArra);
 console.log(dnewArra);
 