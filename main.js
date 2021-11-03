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