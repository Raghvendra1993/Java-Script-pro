const arr = [
    ['Zone' , 'Zone1'],
    ['Zone2' , 'Zone3'],
    ['Zone4' , 'Zone5'],
    ['Zone6' , ['Zone7' , 'Zone8']]

];
let flatArr=arr.reduce((accum,currVal) => {
    return accum.concat( currVal);
})
console.log(flatArr) ;
