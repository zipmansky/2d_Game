window.addEventListener('load', function() {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 1500;
    canvas.height = 500;

    class InputHandler {
        constructor(game) {
            console.log("starterd InputHandler constructor");
            this.game = game;
            window.addEventListener('keydown', e => {
                if ( ((e.key === 'ArrowUp') ||
                      (e.key === 'ArrowDown')
                ) && (this.game.keys.indexOf(e.key) === -1) ){
                    this.game.keys.push(e.key);
                }
                console.log('added: ' + this.game.keys);
            });

            window.addEventListener('keyup', e => {
                if (this.game.keys.indexOf(e.key) > -1) {
                    this.game.keys.splice(this.game.keys.indexOf(e.key), 1);
                }
                console.log('removed: ' + e.key + " queue is " + this.game.keys);
            });
        }

    }

    class Projectile {

    }

    class Player {
        constructor(game) {
            this.game = game;
            this.width = 120;
            this.height = 190;
            this.x = 20;
            this.y = 100;
            this.speedY = -0.1;
        }

        update() {
            this.y += this.speedY;
        }

        draw(context) {
            context.fillRect(this.x, this.y, this.width, this.height);

        }

    }

    class Enemy {

    }

    class Layer {

    }

    class Background {

    }

    class UI {

    }

    class Game {
        constructor(width, height) {
            console.log("started Game constructor");
            this.width = width;
            this.height = height;
            this.player = new Player(this);
            this.input = new InputHandler(this);
            this.keys = [];
        }

        update() {
            this.player.update();

        }

        draw(context) {
            this.player.draw(context);

        }

    }

    const game = new Game(canvas.width, canvas.height);
    
    function animate() {
        ctx.clearRect(0,0, canvas.width, canvas.height)
        game.update();
        game.draw(ctx);
        requestAnimationFrame(animate);
    }

    animate();
});