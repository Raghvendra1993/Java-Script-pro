const add = (a,b) => {
    return a+b;
}
const sub = (a,b) =>{
    return a-b
}
const mul = (a,b) => {
    return a*b
}
const div = (a,b) =>{
    return a/b
}
const rem =(a,b) => {
    return a%b
}
const calculator = (num1,num2,operator) => {
    return operator(num1,num2)
}
calculator(10,3,rem)