"use strict";

// Get span element.
/**
 * Keeps tracks of how many bubbles are in the canvas.
 * @type {Element}
 */
const howManyBubbles = window.document.getElementsByClassName(
    "howManyBubbles"
)[0];

// Get span element.
/**
 * Determines if the span element will be "is" or "are".
 * Depends on how many bubbles there are of course.
 * @type {HTMLCollectionOf<Element>}
 */
const singular_plural = window.document.getElementsByClassName(
    "singular-plural"
);

/**
 * Description for the user.
 * How to use this little "fun".
 * @type {Element}
 */
const description = window.document.getElementsByClassName("description")[0];

if (bubbles.length === 1) {
    singular_plural[0].textContent = "is";
    singular_plural[1].textContent = "bubble";
}

howManyBubbles.textContent = (bubbles.length).toString();

// Create listener for keypress event.
window.document.addEventListener("keypress", addBubble);

/**
 * This function corrects grammar accordingly and it all depends on count of the bubbles.
 * @param e
 */
function addBubble(e) {
    howManyBubbles.textContent = (bubbles.length).toString();
    if (bubbles.length > 1 || bubbles.length === 0) {
        singular_plural[0].textContent = "are";
        singular_plural[1].textContent = "bubbles";
    } else {
        singular_plural[0].textContent = "is";
        singular_plural[1].textContent = "bubble";
    }
}

function setToMiddle(mediaQuery) {
    if (mediaQuery.matches) {
        description.style.left = `calc(50% - ${description.clientWidth / 2}px)`;

        description.style.color = "rgb(80, 230, 120)";
    } else {
        description.style.left = "40px";

        description.style.color = "white";
    }
}

function widthToAuto(mediaQuery) {
    if (mediaQuery.matches) {
        description.style.left = "0";
        description.style.width = "auto";

        description.style.color = "rgb(221,13,86)";
    } else {
        description.style.left = `calc(50% - ${description.clientWidth / 2}px)`;
        description.style.color = "rgb(80, 230, 120)";
    }
}


let mediaMaxWidth900 = window.matchMedia("(max-width: 900px)");
setToMiddle(mediaMaxWidth900);
mediaMaxWidth900.addListener(setToMiddle);

let mediaMaxWidth420 = window.matchMedia("(max-width: 420px)");
widthToAuto(mediaMaxWidth420);
mediaMaxWidth420.addListener(widthToAuto);

window.addEventListener("resize", reloadCanvas);
