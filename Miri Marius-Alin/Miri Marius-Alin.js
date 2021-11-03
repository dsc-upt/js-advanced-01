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