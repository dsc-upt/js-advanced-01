


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

function  decrement(number){
    //number=number--; -> bad programming practice
    const newNumber = number-1;
    console.log(newNumber);
    if(newNumber>1){
        return decrement(newNumber)
    }
    return;
}
decrement(10)

const dictionary ={
    one: 'one',
    "two-two":[1, 5, 6],
    "number":[1, 5, 6],
    4:"patru"
}
console.log(dictionary)
console.log(dictionary["two-two"])
console.log(dictionary.one)
console.log(dictionary[4])
dictionary["three"]= "number three"
dictionary["number"]="45"

console.log(dictionary)
console.log(dictionary.three)

for(const key in dictionary)
{
    console.log(key,dictionary[key])
}
const keys=Object.keys(dictionary);
console.log(keys)

for(const key of keys)
{
    console.log(key)
}

dictionary['SHOWname'] = showName
dictionary.SHOWname('name from dict')

const mySet = new Set( [1, 2, 3, 4, 4, 5, 2]);
console.log(mySet)
console.log(mySet.size)
console.log(mySet.has(7))
console.log(mySet.has(2))
mySet.forEach(value => console.log(value))
mySet.add(67)
mySet.delete(4)
console.log(mySet)
mySet.clear()
console.log(mySet)