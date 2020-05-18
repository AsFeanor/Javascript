// While loops

// let i = 0;
//
// while (i < 10){
//     console.log(i);
//
//     i += 1; // i++
//
// }

// let i = 10;
//
// while (i > 0){
//     console.log(i);
//
//     // i--;
//
//     i -= 2;
// }

// Break and Continue

// let i = 0;

// while (1 < 10){
//     console.log(i);
//     if (i == 5){
//         break;
//     }
//     i++;
// }

// let i = 0;
//
// while (i < 10){
//
//     if (i == 3 || i == 5){
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++;
// }

// Do While

// let i = 0;
//
// do {
//     console.log(i);
//     i++;
// }while(i < 10);

const langs = ["Python","Javascript","Java"];

// let index = 0;
//
// while (index < langs,length){
//     console.log(langs[index]);
//     index++;
// }

// for (let index = 0;index < langs.length;index++){
//     console.log(langs[index]);
// }

// langs.forEach(function (lang,) {
//     console.log(lang);
//
// });

// const users = [
//     {name:"Ege",age:21},
//     {name:"Sevil",age:52},
//     {name:"Anil",age:31}
// ];
//
// const names = users.map(function (user) {
//     return user.name;
//
// });
// const ages = users.map(function (user) {
//     return user.age;
//
// });
// console.log(names);
// console.log(ages);

const user = {
    name:"Ege",
    age:21
};

for (let key in user){
    console.log(key,user[key]);
}