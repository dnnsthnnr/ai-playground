declare var Matter: any;

export class Obstacle {

  private body;

  constructor(private world, x, y, width, height, rotation) {
    this.body = Matter.Bodies.rectangle(x, y, width, height, {
      isStatic: true,
    });

    Matter.Body.rotate(this.body, rotation * Math.PI / 180);

    Matter.World.add(this.world, this.body);
  }

  static generateWorldBorders(render, world) {
    new Obstacle(world, render.options.width / 2, 0, render.options.width, 50, 0);
    new Obstacle(world, 400, 600, render.options.width, 50, 0);
    new Obstacle(world, render.options.width, render.options.height / 2, 50, render.options.height, 0);
    new Obstacle(world, 0, render.options.height / 2, 50, render.options.height, 0);
  }


  static generateRandomObstacles(render, world) {
    for (let i = 0; i < 2; i++) {
      // object in upper left corner
      new Obstacle(world, Math.random() * (render.options.width / 2 - 50),
        Math.random() * (render.options.height / 2 - 50), 50, 100, 0);
      // object in lower left corner
      new Obstacle(world, Math.random() * (render.options.width / 2 - 50),
        (render.options.height / 2 + 50) + Math.random() * (render.options.height / 2 - 50), 50, 100, 0);
      // object in lower right corner
      new Obstacle(world, (render.options.width / 2 + 50) + Math.random() * (render.options.width / 2 - 50),
        (render.options.height / 2 + 50) + Math.random() * (render.options.height / 2 - 50), 50, 100, 0);
      // object in upper left corner
      new Obstacle(world, (render.options.width / 2 + 50) + Math.random() * (render.options.width / 2 - 50),
        Math.random() * (render.options.height / 2 - 50), 50, 100, 0);
    }
  }

}
