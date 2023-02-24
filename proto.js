let a = {
    name2 : "Rajeev" ,
    language :"Java Script",
    run: () => {
        alert("self run")
    }
}
console.log(a)
let p = {
    run : () =>{
        alert("run")
    }
}
a.__proto__ =p
a.run()
