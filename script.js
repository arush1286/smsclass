let students = [];

// Function to add a student to the list
document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let roll = document.getElementById('roll').value;
    let contact = document.getElementById('contact').value;

    // Add student details to the array
    students.push({
        name: name,
        age: age,
        roll: roll,
        contact: contact
    });

    // Clear form
    document.getElementById('studentForm').reset();

    // Update student table
    displayStudents();
});

// Function to display students in the table
function displayStudents() {
    const tableBody = document.querySelector('#studentTable tbody');
    tableBody.innerHTML = '';  // Clear previous content

    students.forEach((student, index) => {
        let row = document.createElement('tr');

        row.innerHTML = `
            <td>${student.roll}</td>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.contact}</td>
        `;

        tableBody.appendChild(row);
    });
}

// Function to search students
function searchStudent() {
    let searchValue = document.getElementById('search').value.toLowerCase();
    const tableBody = document.querySelector('#studentTable tbody');
    tableBody.innerHTML = '';  // Clear previous content

    students.filter(student => 
        student.name.toLowerCase().includes(searchValue) || 
        student.roll.toLowerCase().includes(searchValue)
    ).forEach(filteredStudent => {
        let row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${filteredStudent.roll}</td>
            <td>${filteredStudent.name}</td>
            <td>${filteredStudent.age}</td>
            <td>${filteredStudent.contact}</td>
        `;

        tableBody.appendChild(row);
    });
}
