document.querySelector("#input1")
document.querySelector("#sum").onclick = sumFunc;
document.querySelector("#minus").onclick = minusFunc;
document.querySelector("#division").onclick = divisionFunc;
document.querySelector("#multiplication").onclick = multiplicationFunc;
document.querySelector("#remains").onclick = remainsFunc;
document.querySelector("#degree").onclick = degreeFunc;
document.querySelector("#equally").onclick = result
document.querySelector("#clear").onclick = clearInput
let res;
let inpVal;
let arrDig = ["+", "-", "/", "*", "%", "^"]
let arr = document.getElementsByClassName("button")
for (let elem of arr) {
    elem.onclick = num;

    function num() {
        input1.value += elem.textContent
    }
}

function sumFunc() {
    input1.value += sum.textContent
}

function minusFunc() {
    input1.value += minus.textContent
}

function divisionFunc() {
    input1.value += division.textContent
}

function multiplicationFunc() {
    input1.value += multiplication.textContent
}

function remainsFunc() {
    input1.value += remains.textContent
}

function degreeFunc() {
    input1.value += degree.textContent
}

function clearInput() {
    document.querySelector("#input1").value = ""
}



function result() {
    inpVal = input1.value
    for (let elem of arrDig) {
        if (inpVal.includes(elem)) {
            let newArr = inpVal.split(elem)
            switch (elem) {
                case "+":
                    console.log(res = +newArr[0] + +newArr[1]);
                    document.getElementById("resultJS").innerHTML = res
                    break;
                case "-":
                    console.log(res = +newArr[0] - +newArr[1]);
                    document.getElementById("resultJS").innerHTML = res
                    break;
                case "/":
                    console.log(res = +newArr[0] / +newArr[1]);
                    document.getElementById("resultJS").innerHTML = res
                    break;
                case "*":
                    console.log(res = +newArr[0] * +newArr[1]);
                    document.getElementById("resultJS").innerHTML = res
                    break;
                case "%":
                    console.log(res = +newArr[0] % +newArr[1]);
                    document.getElementById("resultJS").innerHTML = res
                    break;
                case "^":
                    console.log(res = Number(newArr[0]) ** +newArr[1]);
                    document.getElementById("resultJS").innerHTML = res
                    break;
            }
        }
    }
}