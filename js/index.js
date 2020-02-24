class Student{
    constructor(name, course, section){
        this.name = name;
        this.course = course;
        this.section = section;
    }
    enroll(subject){
        console.log(`${this.name}, ${this.course}, is enrolled in section ${this.section}`);
        console.log(`he is studying ${subject}`);
    }
}

let stud1 = new Student("jdl", "12","itf");
stud1.enroll("ics2609");