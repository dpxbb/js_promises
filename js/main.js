//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
console.log(Object.keys(person3))

for (let i = 0; i < Object.keys(person3).length; i++){
    if (Array.isArray(Object.values(person3)[i])){
    console.log(Object.values(person3)[i])
    }
}

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
/* ES6 JavaScript Object Prototype */
function Person(name, age)
{
    this.name = name;
    this.age = age
    
    this.printInfo = () =>
    {
        return `Your name is ${this.name}, you are ${this.age} years old`
    },
    this.addAge = (age) =>
        {
            for (let i = 0; i === age; i++){
                return age(i++)
            }
        }
}

let new_person = new Person('Joel', 30)
console.log(new_person.printInfo())

let new_person2 = new Person('Addie', 31)
console.log(new_person2.printInfo())


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
const wordCount = (str) => {
    return new Promise((resolve, reject) =>{
        if (str.length >= 10){
            resolve(true);
        }
        else {
            reject(false);
        }
    })
}

console.log(wordCount('Octothorpe'))
wordCount("Octothorpe").catch((result) => {
    console.log("Big Word", result)
}).catch((error) => {
    console.log("Small Word", error)
})
