let numbers = document.querySelectorAll(".button");
let result = document.querySelector("#name"); // to display the answer
let reset = document.querySelector(".reset_button"); // for reset button
let del = document.querySelector(".del_button");// for delete button
let add = document.querySelector("#add_button");// for addition operation
let equal = document.querySelector(".equal_button");// for = button
let sub = document.querySelector("#sub_button");// for - button
let mul = document.querySelector(".mul_button");// for * button
let div = document.querySelector(".div_button");// for / button

result.value = "0";

function isLastCharOperator() {
    const lastChar = result.value[result.value.length - 1];
    return ['+', '-', '*', '/'].includes(lastChar);
}

numbers.forEach(number => {
    number.addEventListener("click", () => {
        if(result.value === "0") {
            result.value = number.innerText;
        } else {
            result.value += number.innerText;
        }
    });
});

reset.addEventListener("click", () => {
    result.value = "0";
});

del.addEventListener("click", () => {
    result.value = result.value.slice(0, -1);
    if (result.value === "") result.value = "0"; 
});

add.addEventListener("click", () => {
    if(result.value !== "0" && !isLastCharOperator()) {
        result.value += "+";
    }
});

sub.addEventListener("click", () => {
    if(result.value !== "0" && !isLastCharOperator()) {
        result.value += "-";
    }
});

mul.addEventListener("click", () => {
    if(result.value !== "0" && !isLastCharOperator()) {
        result.value += "*";
    }
});

div.addEventListener("click", () => {
    if(result.value !== "0" && !isLastCharOperator()) {
        result.value += "/";
    }
});

equal.addEventListener("click", () => {
    try {
        const evaluatedValue = eval(result.value);
        result.value = evaluatedValue;
    } catch (error) {
        result.value = "Error";
    }
});
