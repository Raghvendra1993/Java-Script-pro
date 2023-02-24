class RailwayForm
{
    constructor(givenname , trainNo)
    {
        console.log("Constructor Called....")
        this.name = givenname
        this.trainNo = trainNo
    }
    submit()
    {
        alert(this.name +":This form is submitted with Your train No " + this.trainNo )
    }
    cancel()
    {
        alert(this.name + ": This Form is Cancelled with Your Train No " + this.trainNo )
    }
    
   
}
let sumanForm = new RailwayForm()
sumanForm.fill("suman" , 12345)
let RohanForm = new RailwayForm()
RohanForm.fill("Rohan" , 12420)
let suman = new RailwayForm()
let Rohan = new RailwayForm()
sumanForm.submit()
RohanForm.submit()
RohanForm.cancel()
