// const object = new Object(); // Object Literal
// const object2 = new Object();
// object.name = "Altug";
// console.log(object);

// function Employee(name,age) {
//     this.name = name;
//     this.age = age;
//     this.showInfos = function () {
//         console.log("bilgiler gosteriliyor...");

    // }
    // this.toString = function () {
    //     console.log("Bu bir Employee objesi");

//     }
// }
// const emp1 = new Employee("Altug",21);
// console.log(emp1);

// console.log(emp1.toString());

function Employee(name,age) {
    this.name = name;
    this.age = age;

}
Employee.prototype.showInfos = function () {
    console.log("Isim: " + this.name + "Yas: " + this.age);

}

const emp1 = new Employee("Altug",21);
const emp2 = new Employee("Ege",21);

emp2.showInfos();
console.log(emp1);
console.log(emp2);