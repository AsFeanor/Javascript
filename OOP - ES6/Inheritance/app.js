class Person {  // Superclass, Baseclass
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    showInfos(){
        console.log("Isim: " + this.name + "Yas: " + this.age);
    }
}
class Employee extends Person { // Derivedclass, Subclass, Childclass
    constructor(name,age,salary) {
        // this.name = name;
        // this.age = age;
        super(name,age);
        this.salary = salary;
    }
    showInfos() {
        console.log("Isim: " + this.name + "Yas: " + this.age + "Maas: " + this.salary);
    }
    toString(){
        console.log("Employee");
    }

    raiseSalary(amount){
        this.salary += amount;
    }
}
const emp = new Employee("Altug", "21", "4000");
emp.raiseSalary(500);
// console.log(emp);
// emp.showInfos();

emp.showInfos();
emp.toString();