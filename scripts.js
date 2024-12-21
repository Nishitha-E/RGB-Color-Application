const redslider = document.getElementById("redslider");
const greenslider = document.getElementById("greenslider");
const blueslider = document.getElementById("blueslider");

const redvalspan = document.getElementById("redvalue");
const greenvalspan = document.getElementById("greenvalue");
const bluevalspan = document.getElementById("bluevalue");

const colorbox = document.getElementById("colorbox");
const copybutton = document.getElementById("copybutton");
const inputRGBvalue = document.getElementById("inputType");

redslider.addEventListener('input', updateColor);
greenslider.addEventListener('input', updateColor);
blueslider.addEventListener('input', updateColor);
copybutton.addEventListener('click', copyRGBvalue);

function updateColor() {
    const redvalue = redslider.value;
    const greenvalue = greenslider.value;
    const bluevalue = blueslider.value;

    const rgbcolor = `rgb(${redvalue}, ${greenvalue}, ${bluevalue})`;

    colorbox.style.backgroundColor = rgbcolor;

    redvalspan.textContent = redvalue;
    greenvalspan.textContent = greenvalue;
    bluevalspan.textContent = bluevalue;
    inputRGBvalue.textContent = rgbcolor;
}

updateColor();

function copyRGBvalue() {
    const rgbcolor = inputRGBvalue.textContent;

    navigator.clipboard.writeText(rgbcolor)
        .then(() => {
            alert("RGB Color Value copied to clipboard: " + rgbcolor);
        })
        .catch((error) => {
            console.error("Failed to copy RGB values", error);
        });
}
