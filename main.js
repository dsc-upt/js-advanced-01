


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
myLambda(45)
myLambda('DAn' , 1, 3, 4, 5, 5, 2)
const myArray = [1, 2, 3, 40, 50, 23, 45]

function by10(value, index){
    return value % 10 ==0;
}
console.log(myArray.filter(by10))
console.log(myArray.filter(function (value,index){
    return value %10 ==0;
}))

console.log(myArray.filter((value) =>{
    return value % 10==0;
}))

console.log(myArray.filter(value => value %10 ==0));

myArray.forEach((value,index) => console.log(value*10+index))

/*myArray.forEach(value => {
    const x = value+5;
    const y=value+105;
    return;
})
 */

for(const item of myArray){
    if( item === 50){
        break;
}

console.log(item)
}