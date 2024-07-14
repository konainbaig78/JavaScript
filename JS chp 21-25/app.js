// Question # 1
// var fName = prompt("Enter your first name")
// var sName = prompt("Enter your last name")
// var fullName = fName  +  sName
// alert("Hello "+  fullName)

// Question # 2
// var userFav = prompt("Enter your favourite mobile")
// var userLength = userFav.length
// document.write("My favourite phone is:" + userFav + "<br />" +
//     "Length of string:" + userLength)

// Question # 3
// var string = "Pakistan"
// var ind = string.indexOf("n")
// document.write("string " + string + "<br />" + "Index of 'n':"
//     + ind)

// Question # 4
// var string = "Hello world"
// var ind = string.lastIndexOf("l")
// document.write("string " + string + "<br />" + "Last index of 'l':"
//     + ind)

// Question # 5
// var string = "Pakistani"
// var ind = string.charAt(3)
// document.write("string " + string + "<br />" + "LCharacter at index '3':"
//     + ind)

// Question # 6
// var fName = prompt("Enter your first name")
// var sName = prompt("Enter your last name")
// var al = fName.concat(" ",sName)
// alert("Hello cute " + al)

// Question # 7
// var city = "Hyderabad"
// var nCity = city.replace("Hyder","Islam")
// // console.log(city);
// document.write("City: "+ city + "<br/>" + "After replacement: "+ nCity)

// Question # 8 
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMess = message.replace(/and/g , "&")
// document.write(newMess)

// Question # 9 
// var valueStr = "472"
// var typeStr = typeof (valueStr)
// document.write("value " + valueStr + "<br />" + "Type:" + typeStr + "<br />")
// var valueStr = 472
// var typeStr = typeof (valueStr)
// document.write("value " + valueStr + "<br />" + "Type:" + typeStr)

// Question # 10
// var user = prompt("enter somthing in small letters i will convert them into Capital letters");
// var inCapi = user.toUpperCase()
// alert(inCapi);

// Question # 11 
// var num = 35.36
// var numStri = num.toString()
// var rep = numStri.replace("." ,"")
// document.write("Number: "+ num + "<br />" + "Result:" + rep)

// Question # 12 
// var userName = prompt("Enter user name")
// var hasSpecialSymbol = false;
// for (var i = 0; i < userName.length; i++) {
//     var char = userName[i]

//     if (char === "@" || char === "." || char === "," || char === "!") {
//         hasSpecialSymbol=true;
//         break;
//     }

// }
// if (hasSpecialSymbol) {
//     alert("Please enter a valid username without special symbols like @, ., ,, !");
// } else {
//     alert("Username accepted: " + userName);
// }

// // Question # 13 
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter an item to search");
// var found = false;
// for (var i = 0; i < A.length; i++) {
//     var avail = A[i].toLocaleLowerCase();
//  if (avail === userInput) {
//     found = true;
//     break;    
//  }    
// }
// if (found) {
//     alert("Yes, '" + A.indexOf(userInput) + "' is found in the list.");
// } else {
//     alert("No, '" + userInput + "' is not found in the list.");
// }

// Question # 16 
// // var university = "University of Karachi";
// // var inArr = university.split(" ") 
// // console.log(inArr);
// // for (var i = 0; i < inArr.length; i++) {
// //     document.write(inArr[i] + "<br>");
// }

// Question # 17 
// var user = prompt("enter the sentence ")
// if (user.length > 0) {
//     var lastchar = user.charAt(user.length - 1)
    
//     alert("The last character is " + lastchar)

// }
// else{alert("please enter a valid sentence")}
// question 18 
// var str = "The quick brown fox jumps over the  lazy dog"
// var cnvrt = str.toLowerCase().split(" ").filter(word => word  === "the").length
// console.log(cnvrt);

//The End