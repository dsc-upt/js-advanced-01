function myFunc(firstName, lastName) {
    console.log(firstName + ' ' + lastName)
}

myFunc();
myFunc('My club is')
myFunc('My club is', 'GDSC')

// functii anonime
const showName = function (name) {
    console.log(name)
}
showName("Dan")

// function that has a predefined parameter
function myFunc2(firstName, lastName='lala') {
    console.log(firstName + ' ' + lastName)
}

myFunc2()

// lambda function

const myLambda = () => {
    console.log("This is my lambda function")
}

function myFunc3(Name, ...params) {
    console.log(Name)
    console.log(params)
}

myFunc3("lala", 1, 4, 6, 101)


const myArray = [1, 5, 10, 15, 20, 25]
console.log(myArray.filter(n => n % 3 === 0))
console.log(myArray.filter(function (value, index) {
    return myArray[index] % 3 === 0
}))



// loop array
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i] * myArray[i])
}

// loop array lambda
myArray.forEach(value => console.log(value * 100))

// loop array foreach, this works for lists, it doesn't work for dictionaryies
for (const item of myArray)
    console.log(item - item)

function decrement(number) {
    // nubmer-- bad practice, better not to modify function parameters
    const newNumber = number - 1;
    if (newNumber > 1) {
        decrement(newNumber);
    }
    return newNumber;
}

console.log(decrement(50))

const dictionary = {
    one : 'one',
    2 : 'two',
    "momo" : [1, 4, 5],
    "mo-mo" : [1, 4, 5], // nu pot fi numite cu cratima
    dodo : 5
}

console.log(dictionary)
console.log(dictionary.one)
console.log(dictionary["2"])
console.log(dictionary.momo) // nu pot fi numite cu cratima
console.log(dictionary["mo-mo"])

dictionary["vasea"] = 4;
dictionary.momo = "zuzu"
delete dictionary.dodo

for (const key in dictionary) {
    console.log(key, dictionary[key])
}

const mySet = new Set([1, 4, 12, 4, 41, 4])
console.log(mySet.values())
console.log(mySet.size)
console.log(mySet.has(5))
console.log(mySet.has(4))
mySet.forEach(value => console.log(value))
mySet.add(69)
mySet.delete(1)
console.log(mySet)
