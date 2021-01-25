let animal = {
    name: "Flora",
    numLegs: 4,
    sayLegs: function() {return animal.name + " has " + this.numLegs + " legs."}
};

console.log(animal.name);
console.log(animal.numLegs);
console.log(animal.sayLegs());

document.getElementById('post').innerHTML = animal.name + " | " + animal.numLegs + " legs";