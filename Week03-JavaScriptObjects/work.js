var person = {};
person.firstName = 'Mads';
person.lastName = 'Jacobsen';
person.fullName = function() {
    return person.firstName + " " + person.lastName;
    
};
console.log('===============');
console.log('Person');
console.log('===============')
console.log('FirstName:',person.firstName);
console.log('LastName:',person.lastName);
console.log('FullName:',person.fullName());

var calculator = {'operator1':-1, 'operator2':-1};
calculator.operator1=person.firstName.length;
calculator.operator2=person.lastName.length;

calculator.add=add(calculator.operator1,calculator.operator2);
calculator.subtract=subtract(calculator.operator1,calculator.operator2);
calculator.multiply=multiply(calculator.operator1,calculator.operator2);

console.log('===============')
console.log('calculator')
console.log('===============')
console.log('operator1 =', calculator.operator1)
console.log('operator2 =', calculator.operator2)
console.log('Add:',calculator.add)
console.log('Subtract:',calculator.subtract)
console.log('Multiply:',calculator.multiply)

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

