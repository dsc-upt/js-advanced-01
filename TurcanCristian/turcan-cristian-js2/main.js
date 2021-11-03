function myFunc(firstName, lastName = 'GDSC'){
    console.log(firstName+ ' ' + lastName);
}

myFunc('My club is');

//Anonymus function
const showName= function (name = 'GDSC'){
    console.log(name)
}

showName('Cristi')

const myLambda = (name = 'GDSC', ...params) => {
    console.log(name)
    console.log(params)
}

myLambda('Cristi', 1,2,3,4,5)


const myArray = [1, 2, 3, 40, 50, 23, 45]

function by10(value, index) {
    return value % 10 === 0;
}

console.log(myArray.filter(by10))
console.log('')

console.log(myArray.filter(function(value, ){
    return value % 10 === 0;
}))

console.log(myArray.filter((value) => {
    return value % 10 === 0
}))

console.log(myArray.filter(value => value % 10 ===0));

myArray.forEach((value, index ) => console.log(value * 10 + index));
// myArray.forEach(value => {
//     const x = value + 5;
//     const y = value + 106;
//
//
//
//     return;
// });

for (const item of myArray){
    if (item === 50){
        break;
    }

    console.log(item)
}

function decrement(number){
    const newNumber = number -1;
    console.log(newNumber);

    if(newNumber > 1){
        return decrement(newNumber)
    }
    return;
}

decrement(10)

const dictionary = {
    one: 'one',
    "two-two": [1, 5, 6],
    4: "patru"
}

console.log(dictionary)
console.log(dictionary.one)
console.log(dictionary["two-two"])
console.log(dictionary[4])

dictionary["three"] = "number three"
dictionary["number"] = "45"

console.log(dictionary.three)
console.log(dictionary)


for (const key in dictionary){
    console.log(key, dictionary[key])
}
const keys = Object.keys(dictionary);
console.log(keys)

for (const key of Object.keys(dictionary)){
    console.log(key)
}

dictionary['showName'] = showName

dictionary.showName('Name from dict')
dictionary['showName']('Name from dict v2.0')

const mySet = new Set([1,2,3,4,4,4,5,4,2]);
console.log(mySet)
console.log(mySet.size)
console.log(mySet.has(2))
mySet.forEach(value => console.log(value))
mySet.add(67)
mySet.delete(4)
console.log(mySet)