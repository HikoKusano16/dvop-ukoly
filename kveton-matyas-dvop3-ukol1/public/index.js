"use strict";

console.log("Úkol 1");
const lang = ["Lodash", "React", "Next", "Strapi", "Axios", "Typescript"]
let text = "";
for (let x of lang) {
    console.log(text + x);
}

console.log(" ");

console.log("Úkol 2");
const rev = lang.reverse();
for (let x of rev) {
    console.log(text + x);
}

console.log(" ");

console.log("Úkol 3");
const sort = lang.sort();
for (let x of sort) {
    console.log(text + x);
}

console.log(" ");

console.log("Úkol 4");
const car = {brand:"Fiat", model:"Multipla", year:2004};
var { brand: br, model: md, year: yr } = car;
console.log( br, md, yr);


console.log(" ");

console.log("Úkol 5");
function getRandomInt(min = 0, max = 555) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var ranum = getRandomInt();
console.log("Náhodné číslo je: " + ranum)