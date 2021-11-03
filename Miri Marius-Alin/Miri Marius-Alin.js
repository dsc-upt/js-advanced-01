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

