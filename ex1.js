function myFunc(par1, par2) {
    console.log(par1 + par2);
}

myFunc("ceva", " altceva");

const showName = function (name){
    console.log(name);
}

showName("nrbi");

const myLambda = (name) =>{
    console.log("alt ceva " + name);
}
myLambda("ceva");

const myArray = [20,10,3,40,5,6];

function by10(value, index){
    return value % 10 == 0;
}

console.log(myArray.filter(by10));

function decrement (number){
    const newNumber = number - 1;
    console.log(newNumber);
    if(newNumber > 1){
        return decrement(newNumber);
    }
}

decrement(10);

const dictionary = {
    one: "nr",                    // *
    "two - two": [1, 3, 5],
    "x": "tot p variabila ca one" // *
}
console.log(dictionary);

console.log(dictionary.one);
console.log(dictionary["two - two"]);

dictionary["ceva"] = "alt ceva";
console.log(dictionary);
console.log(dictionary.ceva);
console.log(dictionary.x);

for (const key in dictionary){
    console.log(key,dictionary[key]);
}

const keys = Object.keys(dictionary);
console.log(keys);

for (const key of keys){
    console.log(key);
}

dictionary["showName"] = showName

dictionary.showName("Name from dict");
dictionary["showName"]("ceva frumos");

delete dictionary.x;
console.log(dictionary);

function myFunc(par1, par2) {
    console.log(par1 + par2);
}

myFunc("ceva", " altceva");

const x = function (name){
    console.log(name);
}

x("nrbi");

const myLambda1 = (name) =>{
    console.log("alt ceva " + name);
}
myLambda1("ceva");

console.log(" ");

const mySet = new Set([1, 2, 3, 4,5]); // multimi
console.log(mySet);
console.log(mySet.size);
console.log(mySet.has(7));
console.log(mySet.has(2));
mySet.forEach(value => console.log(value));
mySet.add(10);
mySet.delete(3);
// mySet.clear() // sterge tot
console.log(mySet);