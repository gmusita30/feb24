//call function demo

let stud1 = {name:"jdl"};
let stud2 = {name:"pedro"};

let study = function(subject){
    console.log(`${this.name} is enrolled in ${subject}`);
}

study.call(stud1, "Science");