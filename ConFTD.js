const calculateTemp = () => {
    const numberTemp =document.getElementById('temp').value;
//console.log(numberTemp)
 const tempSelected = document.getElementById('temp_deff')
 const valueTemp= valuetemp_diff.options[tempSelected.selectedIndex];
console.log(valueTemp)
const CelToFah = (cel) =>{
    let fahrenhiet= (cel*9/50 )+ 32
    return fahrenhiet;
}
const faeTocel = (far) =>{
    let celcius= (far-32)*5/9
    return celcius; 
}
    let result;
if(valueTemp='cel')
{
    result=CelToFah(numberTemp)
    document.getElementById('resultContainer').innerHTML = `=${result}fahrenhiet`;

}
else{
    result=farToCel(numberTemp)
    document.getElementById('resultContainer').innerHTML = `=${result}celcius`;

}

    
}