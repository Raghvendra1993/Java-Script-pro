let gestuserRole =function (name,role)  {
    switch (role) {

        
        
       
        case "admin":
            return `${name} is admin with all Access`
           // break;
        case "Subadmin":
            return `${name} is subAdmin with Create and delete test`
           // break;
        case "User":
            return`${name} is take Only test `
           // break;
           
            default:
                return `${name} is trail User`   
            break;
    }

}
console.log(gestuserRole("raghu" ,"admin"));