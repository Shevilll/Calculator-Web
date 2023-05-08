let container = document.createElement("div");
container.id = "container";
document.body.appendChild(container);

container = document.getElementById("container");
let label = document.createElement("label");

let first = null;
let operator = null;
let current = "";

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const symbols = ["C", "\xB1", "%", "\xF7", "x", "-", , "+", ".", "="];
const all = [
    "C",
    "\xB1",
    "%",
    "\xF7",
    7,
    8,
    9,
    "x",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "+",
    0,
    ".",
    "=",
];

function draw() {
    label.id = "inputlabel";
    label.innerText = 0;
    container.append(label);
    container.append(document.createElement("br"));
    all.forEach((i) => {
        if (i == 4 || i == 1 || i == 7 || i == 0) {
            container.append(document.createElement("br"));
        }
        let button = document.createElement("button");
        button.id = `button${i}`;
        button.innerText = i;
        button.className = "button";
        container.append(button);
    });
}

function changeLabel() {
    let buttons = document.querySelectorAll(".button");
    buttons.forEach((button) => {
        button.addEventListener("click", function (event) {
            const target = event.target;
            const value = target.innerText;
            if (target.id == "buttonC") {
                first = null;
                operator = null;
                current = "";
                label.innerText = "0";
            } else if (target.id == "button\xB1") {
                label.innerText *= -1;
            } else if (target.id == "button%") {
                label.innerText = parseFloat(label.innerText) / 100;
            } else if (
                target.id == "button\xF7" ||
                target.id == "buttonx" ||
                target.id == "button+" ||
                target.id == "button-"
            ) {
                operator = value;
                first = parseFloat(label.innerText);
                current = "";
            } else if (target.id == "button=") {
                if (operator) {
                    const second = parseFloat(label.innerText);
                    if (operator === "+") {
                        first += second;
                    } else if (operator === "-") {
                        first -= second;
                    } else if (operator === "\xF7") {
                        first /= second;
                    } else if (operator === "x") {
                        first *= second;
                    }
                    operator = null;
                    current = first.toString();
                    label.innerText = first;
                }
            } else {
                if (value === "." && current.includes(".")) {
                    return;
                }
                current += value;
                label.innerText = current;
            }
        });
        button.addEventListener("mousedown", () => {
            button.style = "color:blue";
        });
        button.addEventListener("mouseup", () => {
            button.style = "color:black";
        });
    });
}

function main() {
    draw();
    changeLabel();
}

main();
