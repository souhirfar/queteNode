const info = require('./information');
const cowsay = require('cowsay');

console.log(cowsay.say({
    text : `My name is ${info.name} and I'm from ${info.campus}.`,
    e : "\\",
    T : "U "
}));