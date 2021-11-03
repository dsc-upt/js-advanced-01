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
