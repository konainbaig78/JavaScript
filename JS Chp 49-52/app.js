// // Function to handle form submission and display data
// function handleFormSubmit(event) {
//     event.preventDefault(); // Prevent the default form submission

//     // Retrieve form elements
//     const form = event.target;
//     const name = form.elements['name'].value;
//     const email = form.elements['email'].value;
//     const password = form.elements['password'].value;

//     // Create the user data display
//     const userData = `
//         <h2>Submitted Data</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Password:</strong> ${password}</p>
//     `;

//     // Display the data
//     document.getElementById('userData').innerHTML = userData;

//     // Optionally clear the form
//     form.reset();
// }

// // Attach event listener to the form
// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('form');
//     form.addEventListener('submit', handleFormSubmit);
// });

//Question 2
/*function mor1e() {
    const p1 = document.getElementById("p1");
    const isHidden = document.getElementById("isHidden");
    const readMore = document.getElementById("more");

    // Check if 'isHidden' is currently visible
    const isCurrentlyHidden = isHidden.style.display !== 'none';
    
    if (isCurrentlyHidden) {
        // If 'isHidden' is currently visible, hide it and show 'p1'
        p1.style.display = 'block'; // Show p1
        isHidden.style.display = 'none'; // Hide isHidden
        readMore.textContent = "Read more"; // Change button text
    } else {
        // If 'isHidden' is currently hidden, show it and hide 'p1'
        p1.style.display = 'none'; // Hide p1
        isHidden.style.display = 'block'; // Show isHidden
        readMore.textContent = "Read less"; // Change button text
    }
}*/

//Question 3
document.addEventListener("DOMContentLoaded", () => {
  const studentForm = document.getElementById("studentForm");
  const studentTable = document
    .getElementById("studentTable")
    .getElementsByTagName("tbody")[0];
  const editForm = document.getElementById("editForm");
  const editStudentForm = document.getElementById("editStudentForm");
  const cancelEdit = document.getElementById("cancelEdit");
  let editingRowIndex = null;

  studentForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const grade = document.getElementById("grade").value;

    addStudentRow(name, age, grade);
    studentForm.reset();
  });

  function addStudentRow(name, age, grade) {
    const row = studentTable.insertRow();
    row.insertCell().textContent = name;
    row.insertCell().textContent = age;
    row.insertCell().textContent = grade;

    const actionsCell = row.insertCell();
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      studentTable.deleteRow(row.rowIndex - 1); // Adjust for the header row
    });

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => {
      editingRowIndex = row.rowIndex - 1; // Adjust for the header row
      document.getElementById("editName").value = name;
      document.getElementById("editAge").value = age;
      document.getElementById("editGrade").value = grade;
      editForm.style.display = "block";
    });

    actionsCell.appendChild(deleteButton);
    actionsCell.appendChild(editButton);
  }

  editStudentForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("editName").value;
    const age = document.getElementById("editAge").value;
    const grade = document.getElementById("editGrade").value;

    if (editingRowIndex !== null) {
      const row = studentTable.rows[editingRowIndex];
      row.cells[0].textContent = name;
      row.cells[1].textContent = age;
      row.cells[2].textContent = grade;
      editForm.style.display = "none";
      editingRowIndex = null;
    }
  });

  cancelEdit.addEventListener("click", () => {
    editForm.style.display = "none";
    editingRowIndex = null;
  });
});
