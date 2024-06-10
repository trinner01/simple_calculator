"use strict"
document.getElementById("btn1").onclick = func
let arrSym = ["+", "-", "/", "*", "^", "%"];
let operation;

function func() {
    operation = document.getElementById("inputOper").value
    for (let elem of arrSym) {
        if (operation.includes(elem)) {
            let newArr = operation.split(elem)
            switch (elem) {
                case "+":
                    console.log(+newArr[0] + +newArr[1]);
                    break;
                case "-":
                    console.log(+newArr[0] - +newArr[1]);
                    break;
                case "/":
                    console.log(+newArr[0] / +newArr[1]);
                    break;
                case "*":
                    console.log(+newArr[0] * +newArr[1]);
                    break;
                case "^":
                    console.log(Number(newArr[0]) ** +newArr[1]);
                    break;
                case "%":
                    console.log(+newArr[0] % +newArr[1])
            }
        }
    }
}


// function func() {
//     let operation;
//     let obj = {
//         "+": function(num1, num2) {
//             console.log(+num1 + +num2);
//         },
//         "-": function(num1, num2) {
//             console.log(+num1 - +num2)
//         },
//         "/": function(num1, num2) {
//             console.log(+num1 / +num2)
//         },
//         "*": function(num1, num2) {
//             console.log(+num1 * +num2)
//         },
//         "^": function(num1, num2) {
//             console.log(Number(num1) ** +num2)
//         },
//         "%": function(num1, num2) {
//             console.log(+num1 % +num2)
//         }
//     }
//     operation = document.getElementById("inputOper").value
//     let arr;
//     for (let key in obj) {
//         if (operation.includes(key)) {
//             arr = operation.split(key)
//         }
//     }
//     if (operation.includes("+")) {
//         obj["+"](arr[0], arr[1])
//     } else if (operation.includes("-")) {
//         obj["-"](arr[0], arr[1])
//     } else if (operation.includes("/")) {
//         obj["/"](arr[0], arr[1])
//     } else if (operation.includes("*")) {
//         obj["*"](arr[0], arr[1])
//     } else if (operation.includes("^")) {
//         obj["^"](arr[0], arr[1])
//     } else if (operation.includes("%")) {
//         obj["%"](arr[0], arr[1])
//     } else {
//         console.log("Ошибка")
//     }
// }