let names = ["Tolu","Bola", "Praise", "Blessing", "Queen", "Aisha"];

console.log(names[0]);
console.log(names[2]);
console.log(names[names.length -1]);

//task 1: print the first, third and last name

for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}

// task 2: loop through the array and print every name


let numbers = [4,7,10,13,16,19,22]
for (let i = 0; i < numbers.length; i++)
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }

    // task 3: print only the even numbers


let scores = [50, 40, 70, 20, 42]
let total = 0;
for (let i = 0; i < scores.length; i++){
    total = total + scores[i];
}
console.log("Total score:", total);

// task 4: add up 5 scores


let values = [12, 45, 7, 89, 23, 56]
let largest = values[0];
for (let i = 1; i < values.length; i++)
    if (values[i] > largest) {
        largest = values[i];
    }

console.log("largest:", largest);

// task 5: find the largest number

let fruits = ["apple", "manggo", "pearl"];
fruits.push("orange");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.unshift("banana");
console.log(fruits);
fruits.shift();
console.log(fruits);


// task 6: practise push,pop, unshift and shift

//Why arrays are useful
//Array is useful because it allows us to store multiple values in a single variable instead of creating a seperable variable for each value. it make the code shorter and easier to manage //


// Why loop and array work well together
// Loops and array work together because array stores multiple values,while loops help us access and process each those values automatically. instead of writing code to handle each item in an array seperately, we can use a loop to through the items one after another.


//one thing that confused me while doing the task.
// using loop to find the largest number in the given values in task 5



