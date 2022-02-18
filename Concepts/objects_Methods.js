
// creating object 

var user = {

    fname : "Bob",
    lname : "Marle",
    role : "Admin",
    loginCount : 32,
    age : 33,
    fbSignedIn : true,
    courseList : [],
    buyCourse : function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount : function (){
        return `${this.fname} is enrolled in ${this.courseList.length} courses`;
    }



};

// methods
var courseList = true;

console.log(user.fname);
console.log(user.lname);
console.log(user["role"]);
console.table(user);

user.buyCourse("JS Course");
user.buyCourse("Blockchain Course");

console.log("courses user bought : ", user.courseList);
console.log(user.getCourseCount());


