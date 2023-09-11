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
for(i in person){
    console.log(person[i]);
}