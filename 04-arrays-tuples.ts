//

/////  sum of numbers in the Array  (using reduce method)  ///////

function sum(numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log();

console.log(sum([15, 42, 39, 74, 85]));

console.log();

//

/////    Create a function that filters out all numbers less than a threshold   //////

function filterNumbers(numbers: number[], threshold: number): number[] {
  return numbers.filter((num) => num >= threshold);
}

console.log();

console.log(filterNumbers([1, 5, 8, 2], 5));

console.log();

///////    Defining Tuples for Coordinates & distance   //////

type Coordinate = [number, number];

function calculateDistance(point1: Coordinate, point2: Coordinate): number {
  const dx = point2[0] - point1[0];
  const dy = point2[1] - point1[1];
  return Math.sqrt(dx * dx + dy * dy);
}
console.log();

console.log(calculateDistance([0, 0], [3, 4]));

console.log();

//////    function to convert RGB to hex color string   //////////

type RGB = [number, number, number];

function rgbToHex(color: RGB): string {
  return (
    "#" +
    color.map((c) => c.toString(16).padStart(2, "0").toUpperCase()).join("")
  );
}
console.log();

console.log(rgbToHex([255, 128, 0]));

console.log();

///////////********The End*********/////////////
