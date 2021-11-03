/*
function myFunc(firstName, lastName ='GDSC' )
{
    console.log(firstName +' '+ lastName)
}
myFunc('My club is');


//Anonymous function
const showName = function (name = 'GDSC')
{
    console.log(name)
}
showName ('Dan');


const myLambda = (name = 'GDSC', ...params) =>
{
    console.log (name)
    console.log)(params)
}
myLambda('Dan', 1,2,3,5,5,2)
*/

const myArray = [1, 2, 3, 40, 50, 23, 45]

function by10(value, index) {
    console.log(value, inde)
    return value % 10 == 0;
}

console.log(myArray.filter(by10))
console.log('')

    console.log(myArray.filter(function (value, index) {
        return value % 10 == 0;
}))

console.log(myArray.filter((value ) => {
    return value % 10 == 0;

}))

console.log(myArray.filter(value => value % 10 == 0 ))

myArray.forEach((value , index)  => console.log(value * 10 + index));

for (const item of myArray)
{
    if(item == 50)
    {
        break;
    }
    console.log(item)
}