// var user = ['Suman', 5 , 'admin']
// console.log(user[0]);
// console.log(user[2]);
// var [name,courseCount,role] = user ;
// console.log(role);

const myUser = {
    name : "Suman",
    courseCount : 6 ,
    role : "admin"

};
console.log(myUser.courseCount);
const { name , mycourseCount , role } = myUser
console.log(role);