console.log("Notes page loaded");
var age = 10;
const addnumber = function(a,b){
    return a + b;
}

module.exports={
    age,
    addnumber
};


// Server.js

var fs = require('fs');
var os = require('os');
var _ = require('lodash');
const { log } = require('console');

// var notes = require('./notes.js');
// var age = notes.age;

// var addnumber = notes.addnumber(age , 10);

// console.log(age);
// console.log(addnumber);


// console.log("hi");
// x = 9; 
// c = 6;

// function add(x,y){
//     return x + y;
// }

// const sum = add(5,8);
// console.log(sum);


// var user = os.userInfo();
// // console.log(user);


// var data = ["neel",2,4,2,3,3,5,5,6,5,4 , "namdev" , "neel"];
// var filteredData = _.uniq(data);

// console.log(data);
// console.log(filteredData);


const jsonString = '{"name" : "Neelesh" , "age" : 22, "college" :"LNCT"}';
const jsonObj = JSON.parse(jsonString);

console.log(jsonObj.name);
console.log(jsonObj);

const json = JSON.stringify(jsonObj);
console.log(json);
console.log(typeof jsonObj);
console.log(typeof json);
