class School{
    static location = "manila";
    static population = "40000";
    
    constructor(name, population, location){
        this.name = name;
        this.population = population;
        this.location = location;
    }

  static offer(course){
        console.log(`${this.name} located in ${this.location} has a population of ${this.population}`);
    }
}

let ust = new School("ust", 40000, "manila");
School.offer("IT");