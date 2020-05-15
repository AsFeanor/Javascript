const name = "Altug Ege Sari";
const department = "Development";
const salary = "7000";

// const a = "Name: " + name + "\n" + "Department: " + department + "\n" + "Salary: " + salary;

// const a = `Name:${name}\nDepartment:${department}\nSalary:${salary}`;

// const html = "<ul> " +
//             "<li>" + name + "</li>" +
//             "<li>" + department + "</li>" +
//             "<li>" + salary + "</li>" +
//             "</ul>";

const html = `
    <ul>
    <li>${name}</li>
    <li>${department}</li>
    <li>${salary}</li>

    </ul>

    `;

document.body.innerHTML = html;