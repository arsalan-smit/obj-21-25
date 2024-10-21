let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
let fullName = firstName + " " + lastName;
alert(`Hello, ${fullName}`);

let mobileModel = prompt("Enter your favorite mobile phone model:");
document.write(`My favorite phone is: ${mobileModel}<br>`);
document.write(`Length of input: ${mobileModel.length}<br>`);

var word = "Pakistani";
let indexN = word.indexOf('n');
alert(`String: Pakistani \nIndex of 'n': ${indexN}`);

let greeting = "Hello World";
let lastIndexL = greeting.lastIndexOf('l');
alert(`String: Hello World \nLast index of 'l': ${lastIndexL}`);

var word = "Pakistani";
let charAt3rdIndex = word.charAt(3);
alert(`Character at 3rd index: ${charAt3rdIndex}`);

let fullNameConcat = firstName.concat(" ", lastName);
alert(`Hello, ${fullNameConcat}`);

let city = "Hyderabad";
let newCity = city.replace("Hyder", "Islam");
alert(`New city: ${newCity}`);

let message = "Ali and Sami are best friends. They play cricket and football together.";
let updatedMessage = message.replace(/and/g, "&");
alert(updatedMessage);

let str = "472";
let numb = Number(str);
alert(`String: ${str} (type: ${typeof str}), Number: ${numb} (type: ${typeof numb})`);

let userInputt = prompt("Enter something:");
let upperCaseInput = userInputt.toUpperCase();
alert(`User Input: ${userInputt}\nUpper Case: ${upperCaseInputt}`);

let input = prompt("Enter a string:");
let titleCaseInput = input.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
alert(titleCaseInput);

let num = 35.36;
let strNum = num.toString().replace(".", "");
alert(`Number: ${num}\n Result: ${strNum}`);

let username = prompt("Enter your username:");
let isValid = !(/[!@.,]/.test(username));
if (!isValid) {
    alert("Please enter a valid username without special characters [@ . , !]");
}

let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let searchItem = prompt("Enter item to search:").toLowerCase();
if (A.indexOf(searchItem) !== -1) {
    console.log(`${searchItem} is available at index ${A.indexOf(searchItem)} our bakery.`);
  } else {
    console.log(`we are sorry. ${searchItem} is not available in our bakery.`);
}


let password = prompt("Enter your password:");
if (!/^[a-zA-Z]\w{5,}$/.test(password)) {
    alert("Password must contain letters and numbers, start with a letter, and be at least 6 characters long.");
}

let university = "University of Karachi";
let uniArray = university.split(" ");
alert(uniArray.join("\n"));

let userInput = prompt("Enter something:");
alert(`Last character: ${userInput.charAt(userInput.length - 1)}`);

let sentence = "The quick brown fox jumps over the lazy dog";
let count = (sentence.match(/the/gi) || []).length;
alert(`Number of occurrences of 'the': ${count}`);