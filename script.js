function qwerty(number) {
    return number * number;
}


const foo = (number) => { return number * number; };

const result = document.getElementById("result");
const numberInput = document.getElementById("numberInput");
const calculateBtn = document.getElementById("calculateBtn");

numberInput.addEventListener("change", () => {
    console.log("Input changed to:", numberInput.value, typeof numberInput.value);
});

calculateBtn.addEventListener("click", () => {
    const number = parseFloat(numberInput.value);
    result.textContent = qwerty(number);
});

function square(side) {
    return side * 4;
}
const btn2 = document.getElementById("btn2");
const sideInput = document.getElementById("sideInput");
const result2 = document.getElementById("result2");

btn2.addEventListener("click", () => {
    const side = parseFloat(sideInput.value);
    result2.textContent = square(side);
});

function rectangleSquare(length, width) {
    return length * width;
}
const rectangleAreaBtn = document.getElementById("rectangleAreaBtn");
const lengthInput = document.getElementById("lengthInput");
const widthInput = document.getElementById("widthInput");
const rectangleAreaResult = document.getElementById("rectangleAreaResult");

rectangleAreaBtn.addEventListener("click", () => {
    const length = parseFloat(lengthInput.value);
    const width = parseFloat(widthInput.value);
    rectangleAreaResult.textContent = rectangleSquare(length, width);
});



function rectanglePerimeter(length, width) {
    return 2 * (length + width);
}

const rectanglePerimeterBtn = document.getElementById("rectanglePerimeterBtn");
const perimeterLengthInput = document.getElementById("perimeterLength");
const perimeterWidthInput = document.getElementById("perimeterWidth");
const rectanglePerimeterResult = document.getElementById("rectanglePerimeterResult");

rectanglePerimeterBtn.addEventListener("click", () => {
    const length = parseFloat(perimeterLengthInput.value);
    const width = parseFloat(perimeterWidthInput.value);
    rectanglePerimeterResult.textContent = rectanglePerimeter(length, width);
});
