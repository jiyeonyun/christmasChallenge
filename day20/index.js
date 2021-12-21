
const eye = document.querySelector('.eye');
const nose = document.querySelector('.nose');
const button = document.querySelector('.button');
const color = document.querySelector('#color');
const color2 = document.querySelector('#color2');
const color3 = document.querySelector('#color3');

// Task:
// Write a function to update the snowman colors
// according to the colors selected from the pickers.

const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value
  );
}

inputs.forEach(input => input.addEventListener("change", handleUpdate));

// Stretch goals:
// - Add other items eg scarf, arms, etc.
// - Add different options for nose shape, or hats.
// - Check for contrast between pupils and eye color.