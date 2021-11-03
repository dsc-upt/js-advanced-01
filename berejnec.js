function myFunc(firstName, lastName) {
    console.log(firstName + " " + lastName)
}
myFunc("Adrian","Berejnec");

console.log(undefined === null)

const showName = function(name) {
    console.log(name);
}
showName("Adi")

const myLambda = (name = "GDSC", ...params) => {
    console.log(name)
    console.log(params)
}

myLambda("Adi",23,34,56,7)


const myArray = [1, 2, 3, 40, 23 , 45, 89, 90]

function by10(value, index) {
    console.log(value, index)
    return value % 10 === 0;
}

console.log(myArray.filter(by10))
console.log(myArray.filter(function(value, index){
    return value % 10 === 0;
}))

console.log(myArray.filter((value) => {
    return value % 10 === 0
}))

console.log(myArray.filter(value => value % 10 === 0))

myArray.forEach((value, index) => console.log(value * 10 + index));

for (const item of myArray){
    if(item === 23)
        break;
    console.log(item)
}

function decrement(number){
    // number = number--; -> bad programming practice
    const newNumber = number - 1;
    console.log(newNumber);

    if(newNumber > 1){
        return decrement(newNumber)
    }
    return;
}
decrement(10)

//dictionaries
const dictionary = {
    one : "one",
    "two-two" : [1, 5, 6],
    4 : "patru"
}
console.log(dictionary["two-two"])
console.log(dictionary[4])
dictionary["three"] = "number three"

console.log(dictionary.three)

for(const key in dictionary){
    console.log(key, dictionary[key])
}
dictionary["showName"] = showName

dictionary.showName("Name from dict")


//sets

const mySet = new Set([1, 2, 3, 4, 5, 6, 6, 3]);
console.log(mySet.size)
console.log(mySet.has(4))
mySet.forEach(value => console.log(value))
mySet.add(67)
mySet.delete(6)
console.log(mySet)
mySet.clear()
console.log(mySet)