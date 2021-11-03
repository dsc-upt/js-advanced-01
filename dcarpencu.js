function myFunc(firstName, lastName) {
    console.log(firstName + ' ' + lastName);
}

myFunc('David', 'Carpencu');

// Anonymous function
const showName = function (name){
    console.log(name = 'GDSC')
}

showName('Dan')

const myLambda = (name = 'GDSC', ...params) => {
    console.log(name)
    console.log(params)
}

myLambda('Dan', 1, 2, 3, 4, 5, 2)
