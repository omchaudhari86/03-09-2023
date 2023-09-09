// Program that ask for the number to the user.
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



// Program that ask user two number.
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



// Programe that ask number to user and print the number is greater or less than 10.
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



// Program that prints the number from 1 to 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}



// Program that prints the even number from 1 to 10.
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}



// Program that prints the odd numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

