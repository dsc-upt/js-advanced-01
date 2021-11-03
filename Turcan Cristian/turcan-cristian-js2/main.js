function myFunc(firstName, lastName:string = 'GDSC')



myFunc('My club is');

//Anonymus function
const showName= function (name:string = 'GDSC'){
    console.log(name)
}

showName(name:'Cristi')

const myLambda = (name:string = 'GDSC', ...params) => {
    console.log(name)
    console.log(params)
}

myLabda(name:'Cristi', params: 1,2,3,4,5)