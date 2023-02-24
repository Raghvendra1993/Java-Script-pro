var myMap = new Map()
myMap.set(1,'eng')
myMap.set(2,'hindi')
myMap.set(3,'Urdu')
myMap.set(4,'Spanish')
myMap.set(5,'bangali')
myMap.set(6,'marathi')

// for(let key of myMap.keys()){
    
// console.log(`key is ${key}`);
// }
// for(let value of myMap.values()){
    
//     console.log(`value is ${value}`);
//     }

    for(let [key ,value] of myMap){
    
        console.log(`key is : ${key} and value is ${value}`);
        }
    myMap.forEach((v , k) => console.log(`${v} and key is ${k}`))
    myMap.delete(2)
    console.log(myMap);