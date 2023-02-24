// alert("Hello")
// setTimeout(function(){
// alert("I am in Time Out Session")
// }, 2000)
Document.write("Hello")
let a = setTimeout(function(){
    alert("I am in Time Out Session")
}, 50000)
clearTimeout(a)
console.log(a)