// Question # 1
// var currentDate = new Date()

// Question # 2
// var  todayDate = new Date()
// var month = todayDate.getMonth()
// var currentMonth ;
// var months = ["January","Febuary", "March" , "April" , "May" , "June" ,"July" , "August" , "September" , "October" , "November" ,"December"]

//     currentMonth = months[month]
//     alert("The current month is " + currentMonth)

// Question # 3
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var today = new Date()
// var day = today.getDay()
// var fin = dayNames[day]
// alert("Today is "+ fin)

// Question # 4
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var today = new Date()
// var day = today.getDay()
// if(day === 6 || day === 0){
//     alert("Its fun day")
// }
// else{alert("Today is " + dayNames[day])}

// Question # 5
// var today = new Date()
// var newToday = today.getDate()
// if (newToday<=15){
//     alert("First fifteen days of the Month")}
// else{alert("Last days of the month")}

// Question # 6
// var today = new Date()
// document.write("<b> Today</b> "+ today + "<br />")
// var mid = new Date("Jan. 1, 1970")
// var mili = today - mid

// document.write("<b>Ellapsed milliseconds since Jan. 1, 1970 </b>"+ mili + "<br />")
// var min = mili/(1000*60)
// document.write("<b>Ellapsed minutes since Jan. 1, 1970 </b>"+ min)

// Question # 7
// var today = new Date();
// var hours = today.getHours();

// if (hours < 12) {
//     alert("It's AM");
// } else {
//     alert("It's PM");
// }


// Question # 8
// var laterDate = new Date("December 31, 2020");
// document.write(laterDate)

// Question # 9
// var today = new Date()
// var that = new Date("June 18, 2015")

// var fins = today.getTime() - that.getTime()
// var fin = Math.floor(fins / (1000 * 60 * 60 * 24))
// document.write(fin + " days have passed since 1st Ramzan , 2015")

// Question # 10
// var referenceDate = new Date("Sat Dec 05 2015 22:50:16 GMT+0500 (PKT)");
// var startOfYear2015 = new Date("January 1, 2015");
// var diff = referenceDate.getTime() - startOfYear2015.getTime()
// var fin = diff/1000;
// document.write("Seconds elapsed between " + referenceDate + " and the beginning of 2015: " + fin);

// Question # 11
// var today = new Date()
// document.write("Current date and time: " + currentDate + "<br />");
// var hour = today.getHours()
// today.setHours(hour + 1)
// document.write(" date and time after 1 hour: " + currentDate);

// Question # 12
// var today = new Date()
// alert("Date today " + today);
// today.setFullYear(today.getFullYear()-100)
// alert("Date 100 years ago: " + today);

// Question # 13
// var today = new Date()
// var user = prompt("Your age")
// var fin = today.getFullYear() - user
// document.write("Your age is "+ user + "<br />" + "Your birth year is " + fin)

// Question # 14
// Step 1: Input variables (for demonstration purposes)
// var customerName = "John Doe";
// var currentMonth = "July 2024"; // Example month
// var numberOfUnits = 300; // Example number of units consumed
// var chargesPerUnit = 15.5; // Example charges per unit
// var latePaymentSurchargeRate = 0.1; // 10% late payment surcharge rate

// Step 2: Calculate net amount payable within due date
// var netAmountPayable = numberOfUnits * chargesPerUnit;
// netAmountPayable = Math.round(netAmountPayable * 100) / 100; // Round to 2 decimal places

// Step 3: Calculate late payment surcharge
// var latePaymentSurcharge = netAmountPayable * latePaymentSurchargeRate;
// latePaymentSurcharge = Math.round(latePaymentSurcharge * 100) / 100; // Round to 2 decimal places

// Step 4: Calculate gross amount payable after due date
// var grossAmountPayable = netAmountPayable + latePaymentSurcharge;
// grossAmountPayable = Math.round(grossAmountPayable * 100) / 100; // Round to 2 decimal places

// Step 5: Display the bill details in the browser using alert
// var billDetails = "Customer Name: " + customerName + "\n";
// billDetails += "Current Month: " + currentMonth + "\n";
// billDetails += "Number of units: " + numberOfUnits + "\n";
// billDetails += "Charges per unit: $" + chargesPerUnit.toFixed(2) + "\n\n";
// billDetails += "Net Amount Payable (within Due Date): $" + netAmountPayable.toFixed(2) + "\n";
// billDetails += "Late Payment Surcharge (10%): $" + latePaymentSurcharge.toFixed(2) + "\n";
// billDetails += "Gross Amount Payable (after Due Date): $" + grossAmountPayable.toFixed(2);

// alert(billDetails);

//The End