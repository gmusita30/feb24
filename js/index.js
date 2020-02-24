//constructor function

function Student(name, course, section){
    this.name = name;
    this.course = course;
    this.section = section;

}

Student.prototype.study = function(subject){
    console.log(`${this.name} is enrolled in ${subject}`);

}
Student.prototype.school = "UST"

let stud1 = new Student("jdl", "it", "itf");
let stud2 = new Student("juan", "it", "itf");

stud1.study("Biology");
stud2.study("algebra");

console.log(stud1.school);