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
