

// var = GB

var chocalate = 10   // declaration // intialisation

chocalate = 20       // reuse       // reintialisation

console.log(chocalate)

// let = block scope

let a = 20         // declaration // intialisation

a = 50             // reuse   // reintialisation

console.log(a)

// const = block sccope

const b = 50      // only declaration// intialisation


// b = 70

console.log(b)


console.log("Hello, javascript")


let a1 = 40;
let a2 = 20;


let addition = a1 + a2;
let subtraction = a1 - a2;
let multiplication = a1 * a2;
let division = a1 / a2;


console.log("Addition:", addition);
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Division:", division);


let num1 = 20;
let num2 = 30;
let num3 = 40;

if(num1 >= num2 && num1 >= num3) {
    console.log("largest:", num1);

} else if(num2 >= num1 && num2 >= num3) {
    console.log("largest:", num2);

} else { console.log("largest:", num3);

}
let num = 10

let i = 1

for(let i = 1; i <= num; i++) {

console.log(i);

}

let number = 10;

function square(num) {
    return num * num;
}


console.log("Square of the number is:", square(number));



let example1 = [10,20,30];

let example2 = [40,50,60];

let result = [...example1,...example2];

console.log(result);


let example3 = [10,20,30];

let clonedexample3 = [...example3];

clonedexample3.push(40);

console.log("clonedexample3:", clonedexample3);



// calculator


let input = document.querySelector("input")


function add(a){
    input.value += a

                //= 0 + 5 = 5
                // "5" + "5" =  "55"
}

function clr(){
    input.value = "0"
}

function del(){
    input.value = input.value.slice(0,input.value.length-1)

    // display = 564

    //         = 564.slice(0,2)
    //         = 0 - 5, 1 - 6, 2 - 4
    //         = 56
}


function total(){
    input.value = eval(input.value)
}
