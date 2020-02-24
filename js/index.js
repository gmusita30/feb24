//encapsulation
class School{
setName(name){
    this.name = name;
}

getName(){
    return this.name;
}

setLocation(location){
    this.location = location;
}

getLocation(){
     return this.location;
}

setPopulation(population){
    this.population = population;
}

getPopulation(){
    return this.population;
}
}

let ust = new School();
ust.setName("ust");
ust.setLocation("manila");
ust.setPopulation(40000);

console.group(`${ust.getName()} ${ust.getLocation()} has a population of ${ust.getPopulation()}`);