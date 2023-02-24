let Anum = [10,12,14,15,18,20,100]
//for (let i=0;i<Anum.length;i++)
//{
//    console.log(Anum[i]);
//}
// An Array multiplied by same Array
//Anum.forEach((element)=>{console.log(element*element)}) // All func(+,-,*,/)
//Use  Array from ( A string convert to Array)
//let name="Rajeev"
//let Narray=Array.from(name)
//console.log(Narray);

// for of loop
for(let item of Anum)
{
    console.log(item)
}
//for in loop
for (let item2 in Anum)
{
    console.log(item2)
}
for(let item2 in Anum)
{
    console.log(Anum[item2])
}