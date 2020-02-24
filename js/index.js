//apply function demo

let stud1 = {name:"jdl"};
let stud2 = {name:"pedro"};

details = ["ics2609", "2itf"];

let study = function(subject, section){
    console.log(`${this.name} is enrolled in ${subject}, section ${section}`);
};

study.apply(stud1, details);