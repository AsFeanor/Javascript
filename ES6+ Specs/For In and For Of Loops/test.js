const person = {
    name:"Altug Ege",
    age:21,
    salary:3000
};

const langs = ["Python","Java","C++","Php"];

const name = "Ege";

// For in

// for (let prop in person){
//     console.log(prop,person[prop]);
// }

// for (let index in langs){
//     console.log(index,langs[index]);
// }

// for (let index in name){
//     console.log(index,name[index]);
// }

// for (let value of person){
//     console.log(value);
// } // Wrong!

// for (let value of langs){
//     console.log(value);
// }

for (let character of name){
    console.log(character);
}