function myFunc(firstName, lastName) {
    console.log(firstName + ' ' + lastName);
}

myFunc('David', 'Carpencu');

// Anonymous function
const showName = function (name = 'GDSC'){
    console.log(name)
}

showName('Dan')

const myLambda = (name = 'GDSC', ...params) => {
    console.log(name)
    console.log(params)
}

myLambda(45)
myLambda('Dan', 1, 2, 3, 4, 5, 2)

const myArray = [1, 2, 3, 40, 50, 23, 45]

function by10(value, index){
    console.log(value, index)
    return value % 10 === 0;
}

console.log(myArray.filter(by10))
console.log(myArray.filter(function(value, index){
    return value % 10 === 0;
}))

console.log(myArray.filter((value) =>{
    return value % 10 === 0
}))

console.log(myArray.filter(value => value % 10 === 0));

myArray.forEach(value => console.log(value * 10));

myArray.forEach((value, index) => console.log(value * 10 + index));

// myArray.forEach(value => {
//     const x = value + 5;
//     const y = value + 106;
//
//     return;
// });

for (const item of myArray){
    console.log(item);
}
for (const item of myArray){
    if (item === 50){
        break;
    }

    console.log(item);
}

