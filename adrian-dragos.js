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

// loop array foreach
for (const item of myArray)
    console.log(item - item)


