let value;

const firstName = "Louis";
const lastName = "Armstrong";

const langs = "Java,Python,C++";

value = firstName + lastName;

value = firstName + " " + lastName

value = "Altug Ege ";

value += "Sari";

value = firstName.length;

value = firstName.concat(" ", lastName, " ", "Caz");

value = firstName.toLowerCase();

value = firstName.toUpperCase();

value = firstName[0];

// index Of

value = firstName.indexOf("L");

// Char At

value = firstName.charAt(0);

// Split

value = langs.split(",");

// Replace

value = langs.replace("Python","CSS");

// Includes

value = langs.includes("Java");

console.log(value);