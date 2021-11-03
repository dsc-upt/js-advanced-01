// const x=undefined;
function myFunct(firstName, lastName= 'GDSC')
{
    console.log(firstName+ ' '+ lastName);
}
myFunct('My club is');
const showName= function(name)
{
    console.log(name)
}
showName('Adina')
const myLambda =() =>
{
    console.log('myLambda')
}
const myArray=[1, 2, 3, 40, 50, 23, 45]

function by10(value, index)
{
    console.log(value, index){
    return value %10==0}
}
console.log(myArray.filter(by10))
console.log(' ')

console.log(myArray.filter(function(value, index))) {
    return value %10==0
}
console.log(myArray.filter(value=>value %10==0));

myArray.forEach((value, index)=>console.log(value *10));



for (const item of myArray)
{
    if(item==50)
        break;
    console.log(item)
}
