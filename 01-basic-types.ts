//****************Exercise 1 - part 1********************//

let userName = "Alice";
let age = 25;
let hobbies = ["reading", "gaming", "coding"];
let isStudent = true;

let userName1 = "Bob";
let age1 = 30;

function newFunction(): string {
  return "pagebreak";
}

function greet(name: string, age: number, hobbies: string[]): string {
  if (!name.trim()) {
    throw new TypeError("name is compulsory");
  }
  if (!Number.isFinite(age) || age < 0) {
    throw new TypeError("age must be a number");
  }
  if (!Array.isArray(hobbies) || hobbies.length === 0) {
    throw new TypeError("no hobbies entered");
  }

  let hobbiesStr = "";
  for (let i = 0; i < hobbies.length; i++) {
    if (i === hobbies.length - 2) {
      hobbiesStr += `${hobbies[i]} and `;
    } else if (i === hobbies.length - 1) {
      hobbiesStr += `${hobbies[i]}`;
    } else {
      hobbiesStr += `${hobbies[i]}, `;
    }
  }

  return `Hello, I am ${name.trim()} and ${Math.floor(
    age
  )} years old. I am a student and my hobbies are ${hobbiesStr}.`;
}

console.log(greet(userName1, age1, hobbies));

//
//*******************************part 2 *************************************//

// * Create a function that calculates the area of a rectangle.
//

function calculateArea(width: number, height: number): number {
  if (width <= 0 || height <= 0) {
    throw new Error("Width and height must be positive numbers.");
  }
  return width * height;
}

//

console.log(calculateArea(5, 10));
