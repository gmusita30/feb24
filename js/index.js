//prototype
let stud1 = {name: "jsl", section: "itf", course: "IT", 
    study:function(subject){
    console.log(`${this.name} is enrolled in ${this.subject}`);

}};
stud1.study("ics2609")

let stud2 = {name:"pdl", course:"IT", section:"itf"};

stud2.study("ics2609");