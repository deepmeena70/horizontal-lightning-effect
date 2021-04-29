const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas1.width = innerWidth;
canvas1.height = innerHeight;


class Particle {
    constructor() {
        this.x = 30;
        this.y = 300;
        this.vx = 1;
        this.vy = 1;
        this.color = 'blue';
        this.size = 1;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(Math.floor(this.x), Math.floor(this.y), this.size, 0, Math.PI * 2, true);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
    update() {
        this.x += Math.random() + this.vx;
        this.y += Math.random() * 5;
        this.y -= Math.random() * 5;
        if (this.y > canvas.height || this.y < 0) {
            this.y = 0;
        }
        if (this.x > canvas.width || this.x < 0) {
            this.x = 0;
        }
    }
    random() {
        this.y = 30 + (Math.random() * canvas.width);
    }
}

let particles = [];
let numberOfParticles = 2;

function init() {
    for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
    }
}
init();

function animate() {
    ctx.fillStyle = 'rgba(0,0,0,0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = '140px serif';
    ctx.fillStyle = 'blue';
    ctx.fillText('theLearningHab', 285, 340);
    for (j = 0; j < 200; j++) {

        for (let i = 0; i < particles.length; i++) {
            particles[i].draw();
            particles[i].update();
        }
    }
    requestAnimationFrame(animate);
}
animate();