
// structured one
console.log("------ structured ------");

const Myuser = {
    name : "jack",
    courseCount : 2,
    role : "Admin"
};

console.log(Myuser.courseCount);


// Destructuring data

console.log("=== Destructing ===");

const {name, courseCount, role} = Myuser;
console.log("Role: ", role);
console.log(courseCount);
