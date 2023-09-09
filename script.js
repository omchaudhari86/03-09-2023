// Program that ask for the number to the user
function isEven() {
    let number = prompt("Enter a number:");
    number = parseInt(number);

    // Check if the number is even.
    if (number % 2 === 0) {
        return "The number is even.";
    } else {
        return "The number is odd.";
    }
}

console.log(isEven());

// program that asks the user for two numbers. If the first number is greater than the second number, print "The first number is greater than the second number." Otherwise, print "The second number is greater than the first number.
function compareNumbers() {
    let firstNumber = prompt("Enter the first number:");
    let secondNumber = prompt("Enter the second number:");
    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);

    // Check if the first number is greater than the second number.
    if (firstNumber > secondNumber) {
        return "The first number is greater than the second number.";
    } else {
        return "The second number is greater than the first number.";
    }
}

console.log(compareNumbers());

function isLessThanTen() {
    let number = prompt("Enter a number:");
    number = parseInt(number);

    // Check if the number is less than 10.
    if (number < 10) {
        return "The number is less than 10.";
    } else {
        return "The number is greater than or equal to 10.";
    }
}

console.log(isLessThanTen());


for (let i = 1; i <= 10; i++) {
    console.log(i);
}


for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}


for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

