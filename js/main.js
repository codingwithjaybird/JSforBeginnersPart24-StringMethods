// STRING METHODS:

// String Length
let duck = 'RubberDuck';
document.getElementById('ex1').innerHTML = duck.length;

// String slice()
let hobby = 'I like reading books';
document.getElementById('ex2').innerHTML = hobby.slice(7, 11);

let negative = 'My negative indexes';
document.getElementById('ex3').innerHTML = negative.slice(-5, -2);

// String substring()
let coding = 'JavaScript';
document.getElementById('ex4').innerHTML = coding.substring(2,5);

// Replace string
let original = 'My original string';
document.getElementById('ex5').innerHTML = original.replace("original", "NEW");

// String toUpperCase()
let string1 = 'My upper case string';
document.getElementById('ex6').innerHTML = string1.toUpperCase();

// String toLowerCase()
let string2 = 'MY LOWER CASE STRING';
document.getElementById('ex7').innerHTML = string2.toLowerCase();

// String concat()
let word1 = 'My';
let word2 = 'concatonated';
let word3 = 'string';
document.getElementById('ex8').innerHTML = word1.concat(" ", word2, " ", word3);

// String trim()
let str = '   Too much space   ';
document.getElementById('ex9').innerHTML = str.trim();

// String charAt()
let text = 'My sentence';
document.getElementById('ex10').innerHTML = text.charAt(3); 