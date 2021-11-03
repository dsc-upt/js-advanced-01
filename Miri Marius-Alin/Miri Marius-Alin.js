function myFunc(firstName, lastName = "GDSC") {
    console.log(`${firstName} ${lastName}`);
}
myFunc("Miri", "Marius");

const showName = function (name){
    console.log(name);
}
showName ("Miri");

const myLambda = (name = "GDSC" , ...params) => {
    console.log(name);
    console.log(params);
}


myLambda ("Miri", 1,2,true,"4");

function stopAtFive(){
    let n;
    while( n !== 5)
    {
        n = Math.floor(Math.random() * 10 + 1);
        console.log(n);
    }
}

stopAtFive();

const myArray = [1, 3, 40, 5, 60, 2];
function by10(value, index){
    console.log(value, index);
    return value % 10 === 0;
}

console.log( myArray.filter(by10) );

console.log(myArray.filter(function(value, index){
    return value % 10 === 0;
}));

console.log(myArray.filter(value => value % 10 === 0));
console.log();

myArray.forEach(value => console.log(value*10));
console.log();

myArray.forEach ((value, index) => console.log(value * 10 + index));
console.log();

for (const item of myArray){
    console.log(item);   
}
console.log();

for (const item of myArray){
    if (item === 40)
    {
        break;
    }
    console.log(item);   
}
console.log();

let unsorted = [2, 4, 1, 5, 3, 6, 4, 5];
function sort ( sorted ){
let ok = 1;
while( ok ){
    let aux;
    ok = 0;
    for ( let i = 0; i < sorted.length - 1; i++){
    if (sorted[i] > sorted [i+1]){
        aux = sorted[i];
        sorted [i] = sorted [i + 1];
        sorted[ i + 1 ] = aux;
        ok = 1; 
    }
}
}
console.log(sorted);
}
// nu se modifica parametrii unei functii
console.log();
function decrement ( number ) {
    const newNumber = number - 1;
    console.log(newNumber);
    if(newNumber > 1){
        return decrement (newNumber);
    }
    return;
}

decrement ( 10 );

const dictionary = { 
    one: 'one',
    "two-two": [1, 5, 6],
    4: "patru"
}
console.log(dictionary);
console.log(dictionary.one);
console.log(dictionary["two-two"]);
console.log(dictionary[4]);
dictionary["three"] = "number three";
dictionary["one"] = "number 45";
console.log(dictionary.three);
console.log(dictionary.one);

for ( const key in dictionary){
    console.log(key, dictionary[key]);
}
delete dictionary.three;
console.log();
const keys = Object.keys(dictionary);
console.log(keys);

for (const key of keys){
    console.log(key);
}

dictionary["showName"] = showName;

dictionary.showName("Name from dic");
dictionary["showName"]("Name from dic v2.0");

const mySet = new Set ( [ 1, 2, 3, 4, 5, 6, 2]);
console.log(mySet);
console.log(mySet.has(3));
console.log(mySet.has(7));
console.log();
mySet.forEach(value => console.log(value));
mySet.add(56);
mySet.delete(4);
console.log();
mySet.clear();  