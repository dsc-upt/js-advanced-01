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
/*
const myArray = [1, 2, 3, 40, 50, 23, 45]

function by10(value, index) {
    console.log(value, index)
    return value % 10 === 0;
}

console.log(myArray.filter(by10))
console.log('')

    console.log(myArray.filter(function (value, index) {
        return value % 10 === 0;
}))

console.log(myArray.filter((value ) => {
    return value % 10 === 0;

}))

console.log(myArray.filter(value => value % 10 === 0 ))

myArray.forEach((value , index)  => console.log(value * 10 + index));

for (const item of myArray)
{
    if(item === 50)
    {
        break;
    }
    console.log(item)
}
*/

function decrement(number){
    //number = number-- ; -> bad programming practice
    const newNumber= number - 1;
    console.log(newNumber);

    if(newNumber > 1)
    {
        return decrement(newNumber)
    }
    return;
}
decrement(10)


const dictionary = {
    one: 'one',   // cheie
    "two-two": [1, 5, 6],  //cheie cu valoare
    4:'patru'

}
console.log(dictionary)
console.log(dictionary.one)
console.log(dictionary["two-two"])
console.log(dictionary[4])
dictionary["three"] = "number three"
dictionary["number"] = "45"

console.log(dictionary.three)
console.log(dictionary)

//pt a parcurge un dictionar
//for of pt liste
//for in pt dictionare

for(const key in dictionary){
    console.log(key, dictionary[key])
}

const keys = Object.keys(dictionary);
console.log(keys)

for(const key of Object.keys(dictionary)){
    console.log(key)
}

function showName(name){
    console.log(name);
}

dictionary['showName'] = showName

dictionary.showName('Name from dict')
dictionary['showName']('Name from dict v2.0')










