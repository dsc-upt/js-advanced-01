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