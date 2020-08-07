// Maps - Key - Value

// let myMap = new Map(); // Creation

// console.log(myMap);


// const key1 = "Altug";
// const key2 = {a:10,b:20};
// const key3 = () => 2;

// set

// myMap.set(key1,"String Value");
// myMap.set(key2,"Object Value");
// myMap.set(key3,"Function Value");

// get

// console.log(myMap.get(key1));
// console.log(myMap.get(key2));
// console.log(myMap.get(key3));

// console.log(myMap.size);

// const cities = new Map();

// cities.set("Ankara",5);
// cities.set("Istanbul",15);
// cities.set("Izmir",4);

// ForEach

// cities.forEach(function (value,key) {
//     console.log(key, value);
// })

// for (let [key,value] of cities){
//     console.log(key,value);
// }

// Map Keys

// for (let key of cities.keys()){
//     console.log(key);
// }

// for (let value of cities.values()){
// //     console.log(value);
// }


// Creating Map With Arrays
// const array = [["key1","value1"],["key2","value2"]];

// const lastMap = new Map(array);

// console.log(lastMap);

// Creating Array With Maps

const cities = new Map();

cities.set("Ankara",5);
cities.set("Istanbul",15);
cities.set("Izmir",4);

const array = Array.from(cities);
// [["Ankara",5],["Istanbul",15],["Izmir",4]]
console.log(array);