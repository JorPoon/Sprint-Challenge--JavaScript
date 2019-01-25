// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  constructor(cuboid) {
    this.length = cuboid.length;
    this.width = cuboid.width;
    this.height = cuboid.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

cuboid = new CuboidMaker({length: 4, width: 5, height: 5});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
  constructor(cube) {
    super(cube);
  }
  cubeSurface() {
    return (this.width * this.width * this.width ) * 6;
  }
}

const haha = new CubeMaker({length: 2, width:2, height: 2});

console.log(haha);
console.log(haha.volume());
console.log(haha.cubeSurface());