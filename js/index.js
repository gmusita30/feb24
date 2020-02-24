//bind function demo

let stud1 = {name:"jdl"};
let stud2 = {name:"pedro"};


let study = function(subject, section){
    console.log(`${this.name} is enrolled in ${subject}, section ${section}`);
};

 let s = study.bind(stud2);
s("biology", "itf");