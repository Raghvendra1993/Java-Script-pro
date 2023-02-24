var User = function(firstName,LastName,courseCount)
{
    this.firstName = firstName;
    this.LastName = LastName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
    console.log(`course count is: ${this.courseCount}`)
}
}
User.prototype.getFirstName = function()
{
    console.log(`Your first Name is: ${this.firstName}`)
}

var Raghu = new User("Raghu" , 3)
Raghu.getCourseCount();
Raghu.getFirstName();

var suman = new User('Suman', 6)
suman.getCourseCount()
suman.getFirstName()

