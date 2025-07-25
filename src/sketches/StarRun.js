import starImagePath from '../assets/fat-star-outline.png';

export default function StarRun(p5) {
  let star;
  let starImage;
  const gravity = 0.8;
  const jumpForce = -15;
  let groundY;
  let obstacles = [];
  let gameOver = false;

  p5.preload = () => {
    starImage = p5.loadImage(starImagePath); // path relative to public folder root
  };

  p5.setup = () => {
    p5.createCanvas(600, 300);
    groundY = p5.height - 50;
    resetGame();
  };

  function resetGame() {
    star = {
      x: 50,
      y: groundY,
      size: 40,
      vy: 0,
      onGround: true,
    };
    obstacles = [];
    gameOver = false;
    p5.loop();
  }

  p5.draw = () => {
    p5.background('lightblue');

    // Draw ground line
    p5.stroke('lightblue');
    p5.line(0, groundY + star.size / 2, p5.width, groundY + star.size / 2);

    if (!gameOver) {
      star.vy += gravity;
      star.y += star.vy;

      if (star.y >= groundY) {
        star.y = groundY;
        star.vy = 0;
        star.onGround = true;
      }

      if (p5.frameCount % 90 === 0) {
        const isHigh = p5.random() < 0.5;
        obstacles.push({
          x: p5.width,
          y: isHigh ? groundY - 60 : groundY,
          size: 30,
          speed: 6,
        });
      }

      for (let i = obstacles.length - 1; i >= 0; i--) {
        const obs = obstacles[i];
        obs.x -= obs.speed;

        p5.fill(255);
        p5.noStroke();
        p5.rect(obs.x, obs.y - obs.size, obs.size, obs.size);

        // Collision detection (bounding box)
        const starLeft = star.x - star.size / 2;
        const starRight = star.x + star.size / 2;
        const starTop = star.y - star.size / 2;
        const starBottom = star.y + star.size / 2;

        const obsLeft = obs.x;
        const obsRight = obs.x + obs.size;
        const obsTop = obs.y - obs.size;
        const obsBottom = obs.y;

        const isOverlap =
          starRight > obsLeft &&
          starLeft < obsRight &&
          starBottom > obsTop &&
          starTop < obsBottom;

        if (isOverlap) {
          gameOver = true;
          p5.noLoop();
        }

        if (obs.x + obs.size < 0) {
          obstacles.splice(i, 1);
        }
      }
    }

    // Draw star image instead of ellipse
    p5.noStroke();
    p5.imageMode(p5.CENTER);
    p5.image(starImage, star.x, star.y, star.size, star.size);

    if (gameOver) {
      p5.textAlign(p5.CENTER);
      p5.fill(255, 255, 255);
      p5.textSize(20);
      p5.text('game over', p5.width / 2, p5.height / 2);
      p5.textSize(16);
      p5.text('press zero to restart', p5.width / 2, p5.height / 2 + 30);
    }
  };

  p5.keyPressed = () => {
    if (p5.key === ' ' && star.onGround && !gameOver) {
      star.vy = jumpForce;
      star.onGround = false;
    }
    if (gameOver && (p5.key === 'r' || p5.key === '0')) {
      resetGame();
    }
  };
}

