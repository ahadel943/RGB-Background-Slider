let redSlider = document.querySelector(".red-slider");
let greenSlider = document.querySelector(".green-slider");
let blueSlider = document.querySelector(".blue-slider");
let wrapper = document.querySelector(".wrapper");
let rgbValues = document.querySelector(".rgb");
let hexCode = document.querySelector(".hex");

const getColors = () => {
    wrapper.style.backgroundColor = `rgb(${redSlider.value}, ${greenSlider.value}, ${blueSlider.value})`;
    rgbValues.textContent = `RGB(${redSlider.value}, ${greenSlider.value}, ${blueSlider.value})`;
    let r = (parseInt(redSlider.value)).toString(16);
    let g = (parseInt(greenSlider.value)).toString(16);
    let b = (parseInt(blueSlider.value)).toString(16);
    hexCode.textContent = `#${r}${g}${b}`
}

redSlider.addEventListener("input", getColors);
greenSlider.addEventListener("input", getColors);
blueSlider.addEventListener("input", getColors);