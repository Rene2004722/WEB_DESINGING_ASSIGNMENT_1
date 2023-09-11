//creating a nested object representing a person
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
        street: "123 Main Street",
        city :"New York",
        state:"NY",
        zipCode:"10001",
    },
    occupation :"Engineer",
};
//accessing properties of the main object
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.occupation);

//accessing properties of the nested object
console.log(person.address.street);
console.log(person.address.city);
console.log(person.address.state);
console.log(person.address.zipCode);