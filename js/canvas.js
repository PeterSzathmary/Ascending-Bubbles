const container = window.document.getElementsByClassName("container")[0];
const canvas = window.document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
container.appendChild(canvas);

const ctx = canvas.getContext("2d");

const bubbles = [];
const howMany = 1;

for (let i = 0; i < howMany; i++)
{
    bubbles[i] = new Bubble(getRandomInt(10, 50), `rgba(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${.2, .8})`);   
}

window.document.addEventListener("mousemove", followMouse);
window.document.addEventListener("keypress", addBubble);
window.document.addEventListener("keypress", deleteBubble);
window.document.addEventListener("mousedown", speedUpAllBubbles);
window.document.addEventListener("mouseup", slowDownAllBubbles);

let canSpeedUp = true;

const draw = () =>
{
    requestAnimationFrame(draw);
    background(28, 28, 28);

    for (let bubble = 0; bubble < bubbles.length; bubble++)
    {
        bubbles[bubble].display();
        bubbles[bubble].ascend();
        bubbles[bubble].checkTop();
        bubbles[bubble].checkEdges();
    }
}

draw();

var mouseX, mouseY;
function followMouse(e)
{
    mouseX = e.clientX - canvas.offsetLeft;
    mouseY = e.clientY - canvas.offsetTop;
}

function background(r, g, b)
{
    ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function addBubble(e)
{
    if (e.key === "w")
    {
        bubbles.push(new Bubble(getRandomInt(10, 50), `rgba(${getRandomInt(0, 255)},${getRandomInt(0, 255)},${getRandomInt(0, 255)},${0.5})`));
    }
}

function deleteBubble(e)
{
    if (e.key === "s")
    {
        bubbles.shift();
    }
}

function speedUpAllBubbles(e)
{
    if (canSpeedUp)
    {
        for (let bubble = 0; bubble < bubbles.length; bubble++)
        {
            bubbles[bubble].speed.y *= 8;
            //bubbles[bubble].color = `rgba(${getRandomInt(0, 0)},${getRandomInt(80, 111)*2},${getRandomInt(80, 255)},${0.5})`;
        }
        canSpeedUp = false;
    }
}

function slowDownAllBubbles()
{
    if (!(canSpeedUp))
    {
        for (let bubble = 0; bubble < bubbles.length; bubble++)
        {
            bubbles[bubble].speed.y /= 8;
        }
        canSpeedUp = true;
    }
}

function reloadCanvas()
{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}