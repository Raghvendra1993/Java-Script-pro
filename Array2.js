// var stateName = ["Assam",
//                 "Arunachal",
//                 "Andhra Pradesh",
//                  23 ,
//                  "Meghala",
//                  "Mizoram",
//                  45 ,
//                  "manupr",
//                  "nagaland"]
// for(var i=0; i<stateName.length; i++)
// {
//     if(typeof stateName[i]!=="string") continue;
//     console.log(stateName[i]);
// }

// ************ for Each Loop

// stateName.forEach((s) => (console.log(s)));
// stateName.forEach((s) => console.log(s));

// *********** for of Loop

// for(const s of stateName){
//     console.log(s);
// }

//  ************for in loop

var stateName = ["Assam",
                "Arunachal",
                "Andhra Pradesh",
                 "Meghala",
                 "Mizoram",
                 "manupr",
                 "nagaland"]

// for(const s in stateName){
//     console.log(s);

var state = {
    as :" Assam ",
    ar : " Arunachal ",
    Ap : "Andhra Pradesh" ,
    mg : "Meghalaya" ,
    mz :  "Mizoram",
    mn :    "manupr",
    ng :    "nagaland"
}

for(const s in state){
   // console.log(state[s]);
   console.log(`Key is : ${s} and value is : ${state[s]}`);
   


}