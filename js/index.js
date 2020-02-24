//inheritance
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    speak(language){
        console.log(`${this.name}can speak ${language}`);
    }
}

class Employee extends Person{
    constructor(name, age, job){
        super(name, age);
        this.job = job;
    }
    work(duration){
        console.log(`${this.name} workd ${duration} hours a day`);
    }
}

let p = new Person("jdl", 23);
let w = new Employee("juan", 19, "janitor");

p.speak("brit");
w.speak("yes");
w.work("8");