class Bubble
{
    constructor(diameter, color)
    {
        this.diameter = diameter;
        this.lineWidth = getRandomInt(1, 10);
        this.position = new Vector(getRandomInt(0 + this.diameter + this.lineWidth / 2, canvas.width - this.diameter - this.lineWidth / 2), canvas.height - this.diameter - this.lineWidth / 2);
        this.speed = new Vector();
        this.color = color;
        // Increase y position of the bubble every frame.
        this.speed.y = (getRandomInt(1, 28) / 4) * -1;
    }

    get left()
    {
        return this.position.x - this.diameter - this.lineWidth / 2;
    }

    get right()
    {
        return this.position.x + this.diameter + this.lineWidth / 2;
    }

    get top()
    {
        return this.position.y - this.diameter - this.lineWidth / 2;
    }

    /**
     * @returns {any}
     */
    get bottom()
    {
        return this.position.y + this.diameter + this.lineWidth / 2;
    }

    display()
    {
        ctx.beginPath();
        ctx.strokeStyle = "rgb(0, 0, 0)";
        ctx.fillStyle = this.color;
        ctx.lineWidth = this.lineWidth;
        ctx.arc(this.position.x, this.position.y, this.diameter, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }

    ascend()
    {
        this.speed.x = getRandomInt(-4, 4) / 2;
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
    }

    checkTop()
    {
        if (this.bottom <= 0) {
            this.position.y = canvas.height + this.diameter;
        }
    }

    checkEdges()
    {
        if (this.left <= 0)
        {
            this.position.x = this.diameter + this.lineWidth / 2;
        }
        if (this.right >= canvas.width)
        {
            this.position.x = canvas.width - this.diameter - this.lineWidth / 2;
        }
    }
}