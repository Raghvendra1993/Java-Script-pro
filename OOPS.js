// let ContactDet =
// {
//     myName : "Suman" ,
//     age : 21 , 
//     address : "Delhi",
//     getData  () {
//       console.log(`My Name is ${ContactDet.myName} and my Age is ${ContactDet.age} and Address is ${ContactDet.address}`);  
//     }
// }
// ContactDet.getData();
//Object Destructuring
let friendsDet = {
    FName : 'Ravi' ,
    Lname : 'Chandra',
    Age : 26 ,
    Address : 'Delhi' ,
    degree : 'MCA' 
}
//let age = friendsDet.Age
let {FName,Lnaem,Age,Address,degree} = friendsDet;

console.log(FName)