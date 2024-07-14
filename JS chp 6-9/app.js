//Question # 1
// var value1=10;
// document.write("Result: " + "<br>" +  "The value of a is: " + value1 +"<br>" +"<br>" +".............................................................." +"<br>"+ "<br>" +"<br>");
// ++value1;
// document.write("The value of ++a is: " + value1 + "<br>" + "Now the value of ++a: " + value1 + "<br>" +"<br>"+"<br>");
// document.write("The value of ++a is: " + value1 + "<br>" + "Now the value of a: " + ++value1 + "<br>" +"<br>"+"<br>");
// --value1;
// document.write("The value of --a is: " + value1 + "<br>" + "Now the value of a: " + value1 + "<br>" +"<br>"+"<br>");
// document.write("The value of a-- is: " + value1-- + "<br>" + "Now the value of a: " + value1 + "<br>" +"<br>"+"<br>");

//Question # 2
// var a=2;
// var b=1;
// var result= --a - --b + ++b + b--;
// --a; 
// 2-1=1
// --a - --b;
// ((1-1=0)-(1-1=0)=0)
// --a - --b + ++b;
// 0+ 0+1=1
// --a - --b + ++b + b--
// 1+1=2
// document.write("a is " + 0 + "<br>" + "b is " + 0 + "<br> " + "Result is " + result);



//Question # 3
// prompt("Enter your name");
// alert("Have a nice day!");

//Question # 4
//no question given

//Question # 5

//Qustion # 6
// document.addEventListener("DOMContentLoaded", function() {
//     // Step a: Take three subjects' names from user and store them in 3 different variables.
//     const subject1 = prompt("Enter the name of the first subject:");
//     const subject2 = prompt("Enter the name of the second subject:");
//     const subject3 = prompt("Enter the name of the third subject:");

//     // Step b: Total marks for each subject is 100, store it in another variable.
//     const totalMarksPerSubject = 100;

//     // Step c: Take obtained marks for the first subject from user and store it in a different variable.
//     const obtainedMarks1 = parseFloat(prompt(`Enter the obtained marks for ${subject1}:`));

//     // Step d: Take obtained marks for the remaining 2 subjects from user and store them in variables.
//     const obtainedMarks2 = parseFloat(prompt(`Enter the obtained marks for ${subject2}:`));
//     const obtainedMarks3 = parseFloat(prompt(`Enter the obtained marks for ${subject3}:`));

//     // Step e: Calculate total marks and percentage
//     const totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
//     const totalPossibleMarks = totalMarksPerSubject * 3;
//     const percentage = (totalObtainedMarks / totalPossibleMarks) * 100;

//     // Create table element
//     const table = document.createElement("table");
//     table.style.width = '100%';
//     table.setAttribute('border', '1');

//     // Create header row
//     const headerRow = document.createElement("tr");
//     const headers = ["Subject", "Obtained Marks", "Total Marks"];
//     headers.forEach(headerText => {
//         const th = document.createElement("th");
//         th.appendChild(document.createTextNode(headerText));
//         headerRow.appendChild(th);
//     });
//     table.appendChild(headerRow);

//     // Create rows for each subject
//     const subjects = [subject1, subject2, subject3];
//     const obtainedMarks = [obtainedMarks1, obtainedMarks2, obtainedMarks3];

//     subjects.forEach((subject, index) => {
//         const row = document.createElement("tr");

//         const cell1 = document.createElement("td");
//         cell1.appendChild(document.createTextNode(subject));
//         row.appendChild(cell1);

//         const cell2 = document.createElement("td");
//         cell2.appendChild(document.createTextNode(obtainedMarks[index]));
//         row.appendChild(cell2);

//         const cell3 = document.createElement("td");
//         cell3.appendChild(document.createTextNode(totalMarksPerSubject));
//         row.appendChild(cell3);

//         table.appendChild(row);
//     });

//     // Create row for total and percentage
//     const totalRow = document.createElement("tr");

//     const totalCell1 = document.createElement("td");
//     totalCell1.appendChild(document.createTextNode("Total"));
//     totalRow.appendChild(totalCell1);

//     const totalCell2 = document.createElement("td");
//     totalCell2.appendChild(document.createTextNode(totalObtainedMarks));
//     totalRow.appendChild(totalCell2);

//     const totalCell3 = document.createElement("td");
//     totalCell3.appendChild(document.createTextNode(totalPossibleMarks));
//     totalRow.appendChild(totalCell3);

//     table.appendChild(totalRow);

//     const percentageRow = document.createElement("tr");

//     const percentageCell1 = document.createElement("td");
//     percentageCell1.appendChild(document.createTextNode("Percentage"));
//     percentageRow.appendChild(percentageCell1);

//     const percentageCell2 = document.createElement("td");
//     percentageCell2.setAttribute('colspan', '2');
//     percentageCell2.appendChild(document.createTextNode(percentage.toFixed(2) + "%"));
//     percentageRow.appendChild(percentageCell2);

//     table.appendChild(percentageRow);

//     // Insert table into the container
//     document.getElementById("table-container").appendChild(table);
// });


//Question # 7
//no question given

// END
