import p5 from 'p5';
import starImagePath from '../assets/fat-star-outline.png';

export const BouncingStar = (parentRef) => {
  return new p5((p) => {
    let x = 100, y = 100;
    let xSpeed = 2, ySpeed = 3;
    let starImage;
    const starSize = 60;

    // Store past mouse positions for trail
    const trail = [];
    const maxTrailLength = 20;

    p.preload = () => {
      starImage = p.loadImage(starImagePath);
    };

    p.setup = () => {
      p.createCanvas(400, 400).parent(parentRef);
      p.imageMode(p.CENTER);
    };

    p.draw = () => {
      p.background('lightblue');

      // Define the square area
      const squareX = 125;
      const squareY = 125;
      const squareSize = 150;

      // Draw the square background
      p.noStroke();
      p.fill(191, 241, 255); // light blue
      p.rect(squareX, squareY, squareSize, squareSize);

      // Bounce the star normally
      x += xSpeed;
      y += ySpeed;

      if (x < starSize / 2 || x > p.width - starSize / 2) xSpeed *= -1;
      if (y < starSize / 2 || y > p.height - starSize / 2) ySpeed *= -1;

      // Check if mouse is inside the square
      const inSquare =
        p.mouseX > squareX &&
        p.mouseX < squareX + squareSize &&
        p.mouseY > squareY &&
        p.mouseY < squareY + squareSize;

      // Update trail if mouse inside square
      if (inSquare) {
        trail.push({ x: p.mouseX, y: p.mouseY });
        if (trail.length > maxTrailLength) trail.shift();
      } else {
        trail.length = 0; // clear trail when mouse leaves square
      }

      // Draw trail stars (smaller and faded)
      for (let i = 0; i < trail.length; i+=3) {
        const pos = trail[i];
        const alpha = p.map(i, 0, trail.length, 0, 150);
        p.tint(255, alpha);
        p.image(starImage, pos.x, pos.y, starSize / 3, starSize / 3);
      }
      p.noTint();

      // Draw the main star
      if (starImage) {
        p.image(starImage, x, y, starSize, starSize);
      } else {
        p.fill(255, 255, 0);
        p.ellipse(x, y, starSize, starSize);
      }
    };
  });
};
