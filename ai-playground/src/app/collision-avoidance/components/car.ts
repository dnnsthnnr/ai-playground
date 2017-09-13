declare var Matter: any;

export class Car {

  private maxVelocity = 10;

  private _body: any;

  private _sensors: Array<Sensor> = [];

  private _composite: any;

  private _alive = true;

  constructor(private world: any, x, y) {

    this._body = Matter.Bodies.rectangle(x, y, 20, 30);
    this._body.label = 'Car';

    this._sensors.push(new Sensor(this.world, this, 0));
    this._sensors.push(new Sensor(this.world, this, 10));
    this._sensors.push(new Sensor(this.world, this, -10));
    this._sensors.push(new Sensor(this.world, this, 45));
    this._sensors.push(new Sensor(this.world, this, -45));

    this._composite = Matter.Body.create({
      parts: [this._body, ...this._sensors.map((el) => {
        return el.body
      })]
    });

    Matter.World.add(this.world, this._composite);

  }

  // getter

  get body(): any {
    return this._body;
  }

  get composite(): any {
    return this._composite;
  }

  get sensors(): Array<Sensor> {
    return this._sensors;
  }

  get alive(): boolean {
    return this._alive;
  }

  set alive(value: boolean) {
    this._alive = value;
  }
}

export class Sensor {

  private static WIDTH = 1;
  private static LENGTH = 75;

  private _objectOverlap = 0;

  private _body: any;

  constructor(private world: any, private car: Car, rotation: number) {
    this._body = Matter.Bodies.rectangle(car.body.position.x - Sensor.WIDTH / 2, car.body.position.y - Sensor.LENGTH / 2, Sensor.WIDTH, Sensor.LENGTH, {
      isSensor: true,
    });
    this._body.label = 'Sensor';
    this._body.render.strokeStyle = 'yellow';
    Matter.Body.rotate(this._body, rotation * Math.PI / 180, Matter.Vector.create(car.body.position.x, car.body.position.y))
  }

  // getter

  get body(): any {
    return this._body;
  }


  set objectOverlap(value: number) {
    this._objectOverlap = value;
  }
}
