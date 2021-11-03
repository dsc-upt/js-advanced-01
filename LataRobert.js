function myFunc(firstname, lastname) {
    console.log(firstname+' '+lastname)
}

myFunc('Robert', 'Lata');
//console.log(null == undefined) ->false
function myFunc(firstname, lastname='gdsc') {
    console.log(firstname+' '+lastname)
}

myFunc('My club is');
// Anonymous function
const showName = function (name) {
    console.log(name);
}
showName('Roby');

//const myLambda = (name='gdsc') => {
    //console.log(name);
//}
//myLambda();

const myLambda = (name='gdsc', ...params) => {
    console.log(name);
    console.log(params);
}
myLambda('Roby', 1, 2, 3);

const myarray = [1, 2, 3, 40, 50, 23, 45];

function by10(value, index) {
    console.log(value, index);
    return value % 10 == 0;
}

console.log(myarray.filter(by10));
console.log(myarray.filter(function(value, index) {
    return value % 10 == 0;
}));

console.log(myarray.filter(value => value % 10 == 0));

myarray.forEach( (value, index) => console.log(value * 10 + index));

//for (const item of myarray) {
   //console.log(item);
//}

for (const item of myarray) {
    if(item == 50)
        break;
    console.log(item);
}
