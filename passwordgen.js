class password{
    constructor()
    {
        console.log("Welcome to Password Generator")
        this.pass = ""
    }
    generatepassword(len){
        let char1 = "AZXCVBNMSDFGHJKLPOIUYTREWQ"
        let char = "asdfghjklmnbvcxzqwertyuiop"
        let num = "1234567890"
        let specchar = "@$%&*#{}()+!~/.,;"
        if(len<6){
        console.log("Password at least Six character")
            }
        else
        {
            let i = 0
            while(i<len)
            {
                this.pass+= char[Math.floor(Math.random()*char.length)]
                this.pass+= char1[Math.floor(Math.random()*char1.length)]
                this.pass+= num[Math.floor(Math.random()*num.length)]
                this.pass+= specchar[Math.floor(Math.random()*specchar.length)]
                i+=4
            }
            this.pass = this.pass.substr(0,len)
        return this.pass

        }
    }
}
let p = new password()
console.log(p.generatepassword(8))
