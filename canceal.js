
//console.log(null === undefined);

function myFunc(firstName, lastName = 'GDSC') {
    console.log(firstName + ' ' + lastName);
}

myFunc('My club is');

// Anonymous function
const showName = function(name = 'GDSC') {
    console.log(name);
}

showName('Dan');

const myLambda = (name = 'GDSC', ...params) => {
    console.log(name);
    console.log(params);
}

myLambda('Dan', 1, 3, 4, 5, 6, 2, 1);