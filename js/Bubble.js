"use strict";

/**
 * Bubble class.
 */
class Bubble {
    /**
     * Constructor for the bubble.
     * @param diameter Diameter of the bubble.
     * @param color Color of the bubble.
     */
    constructor(diameter, color) {
        this.diameter = diameter;
        this.lineWidth = getRandomInt(1, 10);

        this.position = new Vector(
            getRandomInt(
                0 + this.diameter + this.lineWidth / 2,
                canvas.width - this.diameter - this.lineWidth / 2
            ),
            canvas.height - this.diameter - this.lineWidth / 2
        );

        this.speed = new Vector();
        this.color = color;
        // Increase y position of the bubble every frame.
        this.speed.y = (getRandomInt(1, 28) / 4) * -1;
    }

    /**
     * Gets the left edge of the bubble, including the line width.
     * @returns {number} Left edge of the bubble.
     */
    get left() {
        return this.position.x - this.diameter - this.lineWidth / 2;
    }

    /**
     * Gets the right edge of the bubble, including the line width.
     * @returns {number} Right edge of the bubble.
     */
    get right() {
        return this.position.x + this.diameter + this.lineWidth / 2;
    }

    /**
     * Gets the top edge of the bubble, including the line width.
     * @returns {number} Top edge of the bubble.
     */
    get top() {
        return this.position.y - this.diameter - this.lineWidth / 2;
    }

    /**
     * Gets the bottom edge of the bubble, including the line width.
     * @returns {number} Bottom edge of the bubble.
     */
    get bottom() {
        return this.position.y + this.diameter + this.lineWidth / 2;
    }

    /**
     * Draw the bubble.
     */
    display() {
        ctx.beginPath();
        ctx.strokeStyle = "rgb(0, 0, 0)";
        ctx.fillStyle = this.color;
        ctx.lineWidth = this.lineWidth;
        ctx.arc(this.position.x, this.position.y, this.diameter, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }

    /**
     * Slowly ascend the bubble.
     */
    ascend() {
        this.speed.x = getRandomInt(-4, 4) / 2;
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
    }

    /**
     * Checks the Y coordinate of the bubble.
     * If the bubble ascended fully, then move the bubble at the bottom.
     */
    checkTop() {
        if (this.bottom <= 0) {
            this.position.y = canvas.height + this.diameter;
        }
    }

    /**
     * Prevent the bubble to go out of screen ot he both right and left sides.
     */
    checkEdges() {
        if (this.left <= 0) {
            this.position.x = this.diameter + this.lineWidth / 2;
        }
        if (this.right >= canvas.width) {
            this.position.x = canvas.width - this.diameter - this.lineWidth / 2;
        }
    }
}
