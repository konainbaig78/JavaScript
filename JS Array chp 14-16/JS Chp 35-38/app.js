// Question # 1
// Write a function that displays current date & time in your
// browser.
// function displayCurrentDate() {
//     var currentDate = new Date()
//     document.write(currentDate)
// }
// displayCurrentDate();


// Question # 2
// Write a function that takes first & last name and then it
// greets the user using his full name.
// function greetUser(firstName, lastName) {
//     var fullName = firstName + " " + lastName
//     alert("Hello, " + fullName)
// }
// greetUser("Arishah" ,  "Khan");

// Question # 3
// Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.
// function addNumbers() {
//     var num1 = parseInt(prompt("Enter first number: "))
//     var num2 = parseInt(prompt("Enter second number: "))
//     var sum = num1 + num2
//     alert("Sum of " + num1 + " and " + num2 + " is: " + sum)
// }
// addNumbers();

// Question # 4
// Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.
// function calculator(num1, num2, operator) {
//     var result;
//     switch (operator) {
//         case "+":
//             result = num1 + num2;
//             break;
//         case "-":
//             result = num1 - num2;
//             break;
//         case "*":
//             result = num1 * num2;
//             break;
//         case "/":
//             if (num2 !== 0) {
//                 result = num1 / num2;
//             } else {
//                 return "Cannot divide by zero.";
//             }
//             break;
//         default:
//             return "Invalid operator.";
//     }
//     document.write("Result of " + num1 + " " + operator + " " + num2 + " is: " + result);
// }
// calculator(5, 3, "*");


// Question # 5
// Write a function that squares its argument.
// function squareNumber(num) {
//     var result = num * num;
//     document.write("The square of " + num + " is" + result);
// }
// squareNumber(4);


// Question # 6
// Write a function that computes factorial of a number.
// function factorial(num) {
//     if (num === 0 || num === 1) {
//         return 1;
//     } else {
//         return num * factorial(num - 1);
//     }
// }
// var num = 5
// var result = factorial(num);
// document.write("Factorial of " + num + " is: " + result);

// Question # 7
// Write a function that take start and end number as inputs
// & display counting in your browser.
// function countNumbers(start, end) {
//     for (var i = start; i <= end; i++) {
//         document.write(i + "<br>");
//     }
// }
// countNumbers(1, 100);


// Question # 8
// Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()
// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(num) {
//         var squareResult = num * num;
//         document.write("Inner function: Square of " + num + " is: " + squareResult + "<br>")
//     }
// var squareBase = calculateSquare(base);
// var squarePerpendicular = calculateSquare(perpendicular);
// var hypotenuse2 = squareBase + squarePerpendicular;
// var hypotenuse =  Math.sqrt(hypotenuse2);
// document.write("Outer function: Hypotenuse of the right triangle with base " + base + " and perpendicular " + perpendicular + " is: " + hypotenuse + "<br>");
// return hypotenuse;
// }
// calculateHypotenuse(5,12);


// Question # 9
// Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables
// function calculateArea(width, height) {
//     var area = width * height;
//     document.write("Area of the rectangle is: " + area + "<br>");
// }
// calculateArea(5, 10); // i. Arguments as value
// var w = 6;
// var h = 12;
// calculateArea(w, h); // ii. Arguments as variables

// Question # 10
// Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.
// function checkPalindrome(str) {
//     var reversedStr = str.split('').reverse().join('');
//     if (str === reversedStr) {
//         document.write(str + " is a palindrome. "  + " <br>");
//     } else {
//         document.write(str + " is not a palindrome.");
//     }
// }
//     checkPalindrome("noon")
//     checkPalindrome("now")


// Question # 11
// Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'
// function capitalizeFirstLetter(str) {
//     var words = str.split(" "); 
//     var capitalizedWords = [];
//     for (var i = 0; i < words.length; i++) {
//         var word = words[i];
//         var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//         capitalizedWords.push(capitalizedWord);
//     }
//     var capitalizedSentence = capitalizedWords.join(" ");
//     document.write("Capitalized Sentence: " + capitalizedSentence);
// }
// capitalizeFirstLetter("the quick brown fox");



// Question # 12
// Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'
// function findLongestWord(str) {
//     var words = str.split(" ");
//     var longestWord = "";
//     for (var i = 0; i < words.length; i++) {
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i];
//         }
//     }
//     return longestWord;
// }
// var longest = findLongestWord("Web Development Tutorial")
// document.write("Longest Word: " + longest)


// Question # 13
// Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'
// function countLetterOccurrences(str, letter) {
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             count++;
//         }
//     }
//     return count;
// }
// var result = countLetterOccurrences("JSResources.com", "s");
// document.write("Number of occurrences of 's' in the string: " + result);


// Question # 14
// The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

// function calcCircumference(radius) {
//     var circumference = 2 * Math.PI * radius;
//     document.write("The circumference is " + circumference + "<br>");
//     return circumference;
// };
// calcCircumference(5);
// function calcArea(radius) {
//     var area = Math.PI * Math.pow(radius, 2);
//     document.write("The area is " + area + "<br>");
//     return area;
// };
// calcArea(5);

//The End