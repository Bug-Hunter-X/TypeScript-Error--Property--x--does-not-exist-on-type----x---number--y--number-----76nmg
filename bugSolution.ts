interface Coordinate {
  x?: number; //Optional Property
  y: number;
}

function printCoord(pt: Coordinate) {
  if (pt.x !== undefined) {
    console.log("The coordinate's x value is " + pt.x);
  }
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 3, y: 7 });
printCoord({ y: 7 });