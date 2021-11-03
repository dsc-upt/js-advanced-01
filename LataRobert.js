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
    return value % 10 === 0;
}

console.log(myarray.filter(by10));
console.log(myarray.filter(function(value, index) {
    return value % 10 === 0;
}));

console.log(myarray.filter(value => value % 10 === 0));

myarray.forEach( (value, index) => console.log(value * 10 + index));

//for (const item of myarray) {
   //console.log(item);
//}

for (const item of myarray) {
    if(item === 50)
        break;
    console.log(item);
}

function decrement (number) {
    //number = number--; ->asa nu
    const newNumber = number - 1;
    console.log(newNumber);
    if(newNumber > 1) {
        return decrement(newNumber);
    }
    return;
}
decrement(10);

const myDictionary = {
    one: 'one',
    "two-two": [1, 5, 6],
    "numbers": [1, 5, 6],
    4: "patru"
}
console.log(myDictionary);
console.log(myDictionary.one);
console.log(myDictionary.numbers);
console.log(myDictionary["two-two"]);
console.log(myDictionary[4]);
myDictionary["three"] = "number 3";
console.log(myDictionary.three);
myDictionary["number"]= "45";
console.log(myDictionary.numbers);

for (const key in myDictionary) {
    console.log(key, myDictionary[key]);
}
const keys = Object.keys(myDictionary);
console.log(keys);

for (const key of Object.keys(myDictionary)) {
    console.log(key);
}

myDictionary['showName'] = showName
myDictionary.showName('Name from dictionary');
myDictionary['showName']('Name from dictionary v2');
delete myDictionary.three;
console.log(myDictionary);

const mySet = new Set([1, 2, 3, 4, 4, 4, 5, 2]);
console.log(mySet);
console.log(mySet.size);
console.log(mySet.has(7));
console.log(mySet.has(2));
mySet.forEach(value => console.log(value));
mySet.add(67);
mySet.delete(4);
mySet.clear();
console.log(mySet);
