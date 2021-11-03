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