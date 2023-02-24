var student ={
    fName : "suman",
    lName : "Kumar",
    age : 23 ,
    branch : "Information Tchnology" ,
    iD : "0820CS181075" ,
    address : "Madhubani" ,
    role : "Student" ,
    gmailLogin : true ,
    courseList : [] ,
    byeCourse : function(courseName){
        this.courseList.push(courseName)
    },
    getcourseCount : function(){
        return `${this.fName} is Enrolled in total of ${this.courseList.length} courses`
    },

}

var courseList = true ;
console.log(student.fName );
console.log(student.getcourseCount());
student.byeCourse("HTML Course")
student.byeCourse("CSS Course")
student.byeCourse("JS Course")
student.byeCourse("BootStrape Course")
console.log(student.getcourseCount());
