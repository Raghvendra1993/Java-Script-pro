class Employee
{
    Login()
    {
        console.log(`Employee has logged in`)
    }
    Logout()
    {
        console.log(`Employee has Logged Out`)
    }
    RequestLeaves(leaves)
    {
        console.log(`Employee has requested ${leaves} leaves`)
    }

}
class Programmer extends Employee
{
    requestCoffee(x)
    {
        console.log(`Employee has requested ${x} coffee`)
    }
    RequestLeaves(leaves){
        console.log(`Employee has requested ${leaves+1} leaves (One Extra)`)
    }
    
}
let e = new Programmer() 
e.Login()
e.RequestLeaves(3)