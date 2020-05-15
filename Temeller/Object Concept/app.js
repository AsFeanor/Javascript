let value;

const programmer = {
    name : "Altug Ege Sari",
    age : 21,
    email : "altugegesarigmail.com",
    langs : ["Python","C","C++","Javascript"],

    address : {
        city : "Aydin",
        street : "Nazilli"
    },

    work : function () {
        console.log("Programmer does not work currently.");
    }


}

value = programmer;

value = programmer.email;
value = programmer["email"];

value = programmer.langs;

value = programmer.address.city;

programmer.work();

const programmers = [
    {name: "Altug Ege", age:21},
    {name: "Oguz", age:20}
];

value = programmers[0]. name;

console.log(value);