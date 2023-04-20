
const person = {
    name:"Mithun",
    age: 21,
    addrress: {
        street: "B8, Block B, Industrial Area.",
        city: "Saltlake sector 2, Kolkata",
        state: "West Bengal",
    },
};

let Name = person.name;
let Street = person.addrress.street;

let output = {Name,Street};

console.log(output);
