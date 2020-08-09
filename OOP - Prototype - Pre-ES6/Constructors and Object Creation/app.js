// console.log(this); // Global Scope

// const emp1 = {  // Object Literal
//     name:"Altug",
//     age:21,
//     showInfos:function ()
//  {
//      console.log("Bilgiler Gosteriliyor");
//     }
// };
// const emp2 = {
//     name: "Ege",
//     age: 21
// }
// emp1.salary = 4000;
// emp1.showInfos();
// console.log(emp1);

function Employee(name,age,salary) {  // Constructor
    this.name = name;
    this.age = age;
    this.salary = salary;

    this.showInfos = function () {
        console.log(this.name, this.age, this.salary);

    }
}

const emp1 = new Employee("Altug",21,4000);
const emp2 = new Employee("Ege",21,4488);

emp1.showInfos();
emp2.showInfos();