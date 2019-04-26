const howManyBubbles = window.document.getElementsByClassName("howManyBubbles")[0];
const singular_plural = window.document.getElementsByClassName("singular-plural");

if (bubbles.length === 1)
{
    singular_plural[0].textContent = "is";
    singular_plural[1].textContent = "bubble";
}

howManyBubbles.textContent = bubbles.length;

window.document.addEventListener("keypress", addBubble);

function addBubble(e)
{
    howManyBubbles.textContent = bubbles.length;
    if (bubbles.length > 1 || bubbles.length === 0)
    {
        singular_plural[0].textContent = "are";
        singular_plural[1].textContent = "bubbles";
    } else {
        singular_plural[0].textContent = "is";
        singular_plural[1].textContent = "bubble";
    }
}

window.addEventListener("resize", reloadCanvas);