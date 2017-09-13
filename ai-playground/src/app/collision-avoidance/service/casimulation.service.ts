import {Injectable} from '@angular/core';
import {Car} from '../components/Car';
import {Obstacle} from '../components/obstacle';

declare var Matter: any;

@Injectable()
export class CASimulationService {

  private engine;

  private render;

  private car: Car;

  constructor() {
  }

  initSimulation(renderElement) {


    this.engine = Matter.Engine.create();
    this.render = Matter.Render.create({
      element: renderElement,
      engine: this.engine,
      options: {
        showCollisions: true
      }
    });


    this.engine.world.gravity.y = 0;

    this.car = new Car(this.engine.world, this.render.options.width / 2, this.render.options.height / 2);
    Obstacle.generateWorldBorders(this.render, this.engine.world);

    Obstacle.generateRandomObstacles(this.render, this.engine.world);


    this.initCollisionHandling();

    Matter.Engine.run(this.engine);
    Matter.Render.run(this.render);


    document.onkeypress = (event) => {

      console.debug(this.car.composite.velocity, Matter.Vector.magnitude(this.car.composite.velocity));

      if (event.key == 'w') {
        Matter.Body.applyForce(this.car.composite, this.car.body.position, Matter.Vector.rotate(Matter.Vector.create(0, -this.car.body.mass * 0.001), this.car.composite.angle))
      }


      if (event.key == 'a') {
        this.car.composite.torque -= 0.01;
      }

      if (event.key == 'd') {
        // car.composite.angle += (1 * Math.PI / 180);
        this.car.composite.torque += 0.01;
      }

      if (event.key == 's') {
        Matter.Body.applyForce(this.car.composite, this.car.body.position, Matter.Vector.rotate(Matter.Vector.create(0, this.car.body.mass * 0.001), this.car.composite.angle))
      }

    }


  }

  initCollisionHandling() {
    Matter.Events.on(this.engine, 'collisionActive', (event) => {
      for (let pair of event.pairs) {
        if (pair.bodyA.label == 'Sensor') {
          this.car.sensors.find((el) => {
            return el.body.id == pair.bodyA.id
          }).objectOverlap = pair.separation;
        }
        if (pair.bodyB.label == 'Sensor') {
          this.car.sensors.find((el) => {
            return el.body.id == pair.bodyB.id
          }).objectOverlap = pair.separation;
        }
      }
    });

    Matter.Events.on(this.engine, 'collisionEnd', event => {

      for (let pair of event.pairs) {
        if (pair.bodyA.label == 'Sensor') {
          this.car.sensors.find((el) => {
            return el.body.id == pair.bodyA.id
          }).objectOverlap = 0;
        }
        if (pair.bodyB.label == 'Sensor') {
          this.car.sensors.find((el) => {
            return el.body.id == pair.bodyB.id
          }).objectOverlap = 0;
        }
      }

    });

    Matter.Events.on(this.engine, 'collisionStart', event => {
      for (let pair of event.pairs) {
        if (pair.bodyA.label == 'Car' || pair.bodyA.label == 'Car') {
          this.car.alive = false;
        }
      }

    });

  };

}
