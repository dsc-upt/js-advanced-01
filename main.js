


function myFunc(firstname, lastname='GDSC'){
    console.log(firstname + ' ' + lastname)
}
myFunc('My club is');

//anonymus function
const showName = function (name){
    console.log(name)
}
showName('Dan')

const myLambda= ( name='gdsc', ...params) =>{
    console.log(name)
    console.log(params)
}
myLambda('DAn' , 1, 3, 4, 5, 5, 2)