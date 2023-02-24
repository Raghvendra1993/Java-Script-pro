//let num1 = [12,23,34,45,56];
//let num2 = [21,32,43,54,65,76,87,98,09]
//let newnum3 = num1.concat(num2);
//console.log(newnum3);
//console.log(num1);
//console.log(num2);


// Short an array
let compare = ( a , b) =>
{
   // return a - b     // for Assending Order
   return b - a  // for decending order

}
let Anum=[12,13,23,24,3468,78,790008,89,80,99,35,45,46,56,57,67,68,78,79,89,80,99,791]
Anum.sort(compare);
console.log(Anum);
Anum.reverse();
console.log(Anum);


