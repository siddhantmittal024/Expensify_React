const person = {
    name: 'Andrew',
    age: 26,
    location: {
        city: 'Philadelphia',
        temp: 92
    }
};

const {name,age} = person;

console.log(`${person.name} is ${person.age}`);