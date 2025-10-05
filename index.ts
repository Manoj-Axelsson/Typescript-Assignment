// *** Ignore the following lines ***
import chalk from "chalk";
import prompt from "prompt-sync";

// *** Ignore the above lines ***

// Use the following function to read input from the user:
const readLine = prompt({ sigint: true });

// * Assignment 1

function runExerciseOne() {
  const firstName = "Sebastian";
  const lastName = "Vallin";
  console.log(
    `Hello ${firstName} ${lastName}! I'm glad to inform you that you are the test subject for my first assignment!`
  );
}

// * Assignment number 2

function runExerciseTwo() {
  const firstName = "Manoj";
  const lastName = "Axelsson";

  console.log(`Hello ${firstName} ${lastName}! Have a nice day!`);
}

// * Assignment number 3

function runExerciseThree() {
  let num1: number = 20;
  let num2: number = 40;

  let sum: number = num1 + num2;

  let oddNum: number = 41;
  let evenNum: number = 20;

  let divisionResult: number = oddNum / evenNum;

  console.log("The sum is:", sum);

  console.log("Division result (odd / even):", divisionResult);
}

// * Assignment number: 4

function runExerciseFour() {
  const radius: number = parseFloat(readLine("Enter a number:  "));

  let areaCircle: number = Math.PI * Math.pow(radius, 2);
  console.log("Area of the Circle is:", areaCircle.toFixed(2));

  const sphere: number = parseFloat(readLine("Enter a number:  "));

  let areaSphere: number = 4 * Math.PI * Math.pow(sphere, 3);
  console.log("Area of the Sphere is:", areaSphere.toFixed(3), "cm^2");
}

// * Assignment number: 5

function runExerciseFive() {
  let num3: number = parseInt(readLine("Enter a number: "));
  let num4: number = parseFloat(readLine("Enter a number: "));

  if (Math.abs(num3 - num4) === 1) {
    console.log("Consecutive");
  } else {
    console.log("Not Consecutive");
  }
}
// * Assignment number: 6

function runExerciseSix() {
  let num: number = parseInt(readLine("Enter a Number:  "));

  if (isNaN(num) || num <= 0) {
    console.log("Invalid input. Please enter a positive integer.");
  } else {
    if (num % 2 === 0) {
      console.log(`The number ${num} is even.`);
    } else {
      console.log(`The number ${num} is odd.`);
    }
  }
}

// * Assignment 7

function runExerciseSeven() {
  let temperatureInput: string | null = readLine(
    "Enter your body temperature in Celsius:"
  );

  let temperature: number = parseFloat(
    temperatureInput.replace(",", ".") || "0"
  );

  let normalTemperature: number = 37.2;

  if (isNaN(temperature)) {
    console.log("Invalid input. Please enter a valid number for temperature.");
  } else if (temperature > normalTemperature) {
    console.log(`You have a fever. Your temperature is ${temperature}°C.`);
  } else if (temperature < 37.0) {
    console.log("Please consult your doctor!");
  } else {
    console.log(
      `Your temperature is ${temperature}°C. You have normal body temperature.`
    );
  }
}

//Assignment *  8

function runExerciseEight() {
  let userGrade = readLine("Enter your grade (A, B, C, D, E):");

  switch (userGrade.toUpperCase()) {
    case "A":
      console.log("Excellent! You have scored an A.");
      break;
    case "B":
      console.log("Great job! You have scored a B.");
      break;
    case "C":
      console.log("Good effort! You have scored a C.");
      break;
    case "D":
      console.log("You have passed with a D.");
      break;
    case "E":
      console.log("You scored an E. You have to keep trying!");
      break;
    default:
      console.log(
        "Invalid grade entered. Please enter a grade between A and E."
      );
      break;
  }
}

//Assignment *  9

function runExerciseNine() {
  let splitTheString = (value: string): string[] => {
    return value.split("");
  };

  let reverseTheString = (value: string[]): string[] => {
    return value.reverse();
  };

  let joinTheString = (value: string[]): string => {
    return value.join("");
  };

  const splitString = splitTheString("palindrome");
  console.log(splitString);

  const reversedString = reverseTheString(splitString);
  console.log(reversedString);

  const joinedString = joinTheString(reversedString);
  console.log(joinedString);

  if (joinedString === "palindrome") {
    console.log("This word is a palindrome");
  } else {
    console.log("This word is not a palindrome");
  }
}

//Assignment * 10 : A

function runExerciseTen() {
  const str: string = "The quick fox Jumped Over the DOG";
  const newStr: string = str.replace(
    "The quick fox Jumped Over the DOG",
    "The brown fox jumped over the lazy dog"
  );
  console.log(newStr);

  console.log();

  // 10 :B

  let ord1 = readLine("enter a word  ");
  let ord2 = readLine("enter a word  ");
  if (ord1 === ord2) {
    console.log("the words are the same");
  } else {
    console.log("the words are not the same");
  }

  console.log();

  // 10 : C

  let context: string = "The Donkey is eating grass";
  let word1 = "Donkey";
  let newcontext: string = context.replace(word1, "Monkey");

  console.log(newcontext);

  console.log();

  // 10 : D

  let paragragh: string =
    "I am going to visit Kolmården zoo tomorrow. I am a big fan of the dolphin show. I may watch all dolphin shows during the day. I would like to take a gondola safari as well. I wish to visit Bamse and his team there";

  let find1 = "I";
  let replace1 = "we";
  let find2 = "am";
  let replace2 = "are";

  while (paragragh.indexOf(find1) > -1) {
    paragragh = paragragh.replace(find1, replace1);

    while (paragragh.indexOf(find2) > -1) {
      paragragh = paragragh.replace(find2, replace2);
    }
  }
  console.log(paragragh);

  console.log();

  // 10 : E

  let sentence = "She is the popular singer";
  let parts = sentence.split(" ");
  parts.splice(3, 0, "most");
  let newSentence = parts.join(" ");

  console.log(newSentence);

  console.log();

  // 10 : F

  let phrase = "A friend is the asset of your life.";
  let parts1 = phrase.split(" ");
  parts1.splice(1, 0, "true");
  parts1.splice(4, 0, "greatest");
  let newPhrase = parts1.join(" ");

  console.log(newPhrase);

  console.log();

  // 10 : G

  const abcd: string = "My name is Sebastian Vallin.";
  const newabcd: string = abcd.replace(
    "My name is Sebastian Vallin",
    "Sebastian Vallin."
  );
  console.log(newabcd);

  console.log();

  // 10 : H

  const parole: string =
    "Arrays are very common in programming, they look something like: [1,2,3,4,5]";
  const newparole: string = parole.replace(
    "Arrays are very common in programming, they look something like: [1,2,3,4,5]",
    "[1,4,5,6,7,8]"
  );
  console.log(newparole);

  console.log();
}

// Assignment * 11

function runExerciseEleven() {
  const num1: number = parseFloat(readLine("Enter first number: "));
  const operator: string = readLine("Enter an operator (+, -, *, /): ");
  const num2: number = parseFloat(readLine("Enter second number: "));

  let result: number;

  switch (operator) {
    case "+":
      result = num1 + num2;
      console.log(`Result: ${num1} + ${num2} = ${result}`);
      break;

    case "-":
      result = num1 - num2;
      console.log(`Result: ${num1} - ${num2} = ${result}`);
      break;

    case "*":
      result = num1 * num2;
      console.log(`Result: ${num1} * ${num2} = ${result.toFixed(2)}`);
      break;

    case "/":
      if (num2 !== 0) {
        result = num1 / num2;
        console.log(`Result: ${num1} / ${num2} = ${result.toFixed(2)}`);
      } else {
        console.log("Error: Division by zero is not allowed.");
      }
      break;

    default:
      console.log("Invalid operator! Please use +, -, *, or /.");
  }
}
console.log();

// Assignment * 12

function runExerciseTwelve() {
  //
  // for loop
  //
  let num: number = Number(readLine("Enter a number smaller than 100: "));

  if (num < 100) {
    console.log("Ascending Order (for loop):");
    for (let i = 1; i <= num; i++) {
      console.log(i);
    }

    console.log();

    console.log("Descending Order (for loop):");
    for (let i = num; i >= 1; i--) {
      console.log(i);
    }
  } else {
    console.log("Number must be smaller than 100!");
  }

  console.log();
  //
  // while loop
  //
  let num2: number = Number(readLine("Enter a number smaller than 100: "));

  if (num2 < 100) {
    console.log("Ascending Order (while loop):");
    let i = 1;
    while (i <= num2) {
      console.log(i);
      i++;
    }

    console.log("Descending Order (while loop):");
    i = num2;
    while (i >= 1) {
      console.log(i);
      i--;
    }
  } else {
    console.log("Number must be smaller than 100!");
  }
  console.log();
  //
  //do-while loop
  //
  let num3: number = Number(readLine("Enter a number smaller than 100: "));

  if (num3 < 100) {
    console.log("Ascending Order (do-while loop):");
    let i = 1;
    do {
      console.log(i);
      i++;
    } while (i <= num3);

    console.log("Descending Order (do-while loop):");
    i = num3;

    do {
      console.log(i);
      i--;
    } while (i >= 1);
  } else {
    console.log("Number must be smaller than 100!");
  }

  console.log();

  // (Alterative all in one function)

  // let numb: number = Number(readLine("Enter a number smaller than 100: "));

  // // ----------------(FOR LOOP)----------------

  // if (numb < 100) {
  //   console.log(chalk.blue.bold("\nAscending Order (for loop):"));

  //   for (let i = 1; i <= numb; i++) {
  //     console.log(chalk.green(i));
  //   }

  //   console.log(chalk.blue.bold("Descending Order (for loop):"));

  //   for (let i = numb; i >= 1; i--) {
  //     console.log(chalk.yellow(i));
  //   }

  //   // ----------------(WHILE LOOP)----------------

  //   console.log(chalk.magenta.bold("\nAscending Order (while loop):"));
  //   let i = 1;

  //   while (i <= numb) {
  //     console.log(chalk.green(i));
  //     i++;
  //   }

  //   console.log(chalk.magenta.bold("Descending Order (while loop):"));
  //   i = numb;

  //   while (i >= 1) {
  //     console.log(chalk.yellow(i));
  //     i--;
  //   }

  //   // ----------------(DO-WHILE LOOP)----------------

  //   console.log(chalk.cyan.bold("\nAscending Order (do-while loop):"));
  //   i = 1;

  //   do {
  //     console.log(chalk.green(i));
  //     i++;
  //   } while (i <= numb);

  //   console.log(chalk.cyan.bold("Descending Order (do-while loop):"));
  //   i = numb;

  //   do {
  //     console.log(chalk.yellow(i));
  //     i--;
  //   } while (i >= 1);
  // } else {
  //   console.log(chalk.red.bold(" Number must be smaller than 100!"));
  // }
}

// Assignment * 13

function runExerciseThirteen() {
  const secretNumber: number = Math.floor(Math.random() * 10) + 1;

  let guess: number = Number(readLine("Guess a number between 1 and 10:  "));

  while (guess !== secretNumber) {
    console.log("Wrong guess...");

    let tryAgain = readLine(
      "Do you want to guess again? (yes/no):   "
    ).toLowerCase();

    if (tryAgain !== "yes" && tryAgain !== "y") {
      console.log("Game over. The secret number was:  " + secretNumber);
      break;
    }
    guess = Number(readLine("Guess a number between 1 and 10:  "));
  }
  if (guess === secretNumber) {
    console.log("Correct! You guessed the secret number!");
  }
}

// Assignment * 14

function runExerciseFourteen() {
  for (let i = 1; i <= 10; i++) {
    let row: string = "";
    for (let j = 1; j <= 10; j++) {
      row += (i * j).toString().padStart(6, " ");
    }
    console.log(row);
  }
}

// Assignment * 15

function runExerciseFifteen() {
  let startCount = Number(readLine("How many stars? "));

  let stars = 1;
  let strStr1 = "";

  for (let i = startCount; i >= 1; i--) {
    for (let x = stars; x > 0; x--) {
      strStr1 += " ";
    }
    stars++;

    for (let j = 1; j <= i; j++) {
      strStr1 += "* ";
    }
    console.log(strStr1);
    strStr1 = "";
  }
}

// Assignment * 16

function runExerciseSixteen() {
  let sum: number = 0;
  let count: number = 0;

  while (true) {
    let input: number = Number(readLine("Enter a number (0 to stop): "));

    if (input === 0) {
      break;
    }
    sum += input;
    count++;
  }

  if (count > 0) {
    let average: number = sum / count;
    console.log("Sum of numbers: " + sum);
    console.log("Average of numbers: " + average);
  } else {
    console.log("No numbers were entered.");
  }
}

// Assignment * 17

function runExerciseSeventeen() {
  const input = readLine("Enter how many Fibonacci numbers to display: ");

  const count = Number(input);

  if (isNaN(count) || count <= 0) {
    console.log("Invalid input. Please enter a positive number.");
    return;
  }
  const fib: number[] = [];

  for (let i = 0; i < count; i++) {
    if (i === 0) {
      fib.push(0);
    } else if (i === 1) {
      fib.push(1);
    } else {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
  }
  console.log(`\nFirst ${count} numbers in the Fibonacci series:`);

  console.log(fib.join(", "));
}

console.log();

// Assignment * 18 - Exercise donot exist!

//function runExerciseEighteen() {}
console.log("");

console.log();

// Assignment * 19 -

function runExerciseNineteen() {
  let calculateTriangleArea = (height: number, width: number): number => {
    return 0.5 * height * width;
  };

  let height: number = Number(readLine("Enter the height of the triangle: "));
  let width: number = Number(readLine("Enter the width of the triangle: "));

  let area: number = calculateTriangleArea(height, width);

  console.log("The area of the triangle is: " + area);
}

//Assignment * 20

function runExerciseTwenty() {
  let swap = (a: number, b: number): void => {
    const temp = a;
    a = b;
    b = temp;
    console.log(`Inside swap function: a = ${a}, b = ${b}`);
  };

  let num1 = 5;
  let num2 = 10;

  console.log(`Before calling swap: num1 = ${num1}, num2 = ${num2}`);

  swap(num1, num2);

  console.log(`After calling swap: num1 = ${num1}, num2 = ${num2}`);
}

// Assignment * 21

function runExerciseTwentyone() {
  let calculateAge = (dob: Date): number => {
    const today = new Date();

    let age = today.getFullYear() - dob.getFullYear();

    const monthDiff = today.getMonth() - dob.getMonth();

    const dayDiff = today.getDate() - dob.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
    return age;
  };

  let dobInput: string = readLine("Enter your date of birth (YYYY-MM-DD): ");

  let dob: Date = new Date(dobInput);

  let age: number = calculateAge(dob);

  console.log("Your age is: " + age + " years.");
}

//Assignment  * 22

function runExerciseTwentytwo() {
  let calculateAge = (dob: Date): number => {
    const today = new Date();

    let age = today.getFullYear() - dob.getFullYear();

    const monthDiff = today.getMonth() - dob.getMonth();

    const dayDiff = today.getDate() - dob.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
    return age;
  };

  const name: string = readLine("Enter your name: ");

  console.log(`Hello, ${name}!`);

  const dobInput: string = readLine("Enter your date of birth (YYYY-MM-DD): ");

  const dob: Date = new Date(dobInput);

  const age: number = calculateAge(dob);

  console.log(`You are ${age} years old.`);

  if (age >= 18) {
    let ChoiceofBeer = readLine(
      "Do you want to order a beer? (yes/no): "
    ).toLowerCase();

    if (ChoiceofBeer === "yes" || ChoiceofBeer === "y") {
      console.log("A beer has been served!");
    } else {
      let ChoiceofSoda = readLine(
        "Would you like a soda instead? (yes/no): "
      ).toLowerCase();

      if (ChoiceofSoda === "yes" || ChoiceofSoda === "y") {
        console.log("A soda has been served!");
      } else {
        console.log("No more options available.");
      }
    }
  } else {
    let ChoiceofSoda = readLine(
      "You are under 18. Do you want to order a soda? (yes/no): "
    ).toLowerCase();

    if (ChoiceofSoda === "yes" || ChoiceofSoda === "y") {
      console.log("A soda has been served!");
    } else {
      console.log("No more options available.");
    }
  }
}

// Assignmemt * 23

function runExerciseTwentythree() {
  const input = (
    readLine("Enter 5 numbers separated by spaces: ") || ""
  ).trim();
  if (!input) {
    console.log("No input provided.");
    return;
  }

  const parts = input.split(/\s+/).filter((s) => s.length > 0);
  if (parts.length !== 5) {
    console.log("Please enter exactly 5 numbers (separated by spaces).");
    return;
  }

  const nums: number[] = parts.map((s) => {
    const normalized = s.replace(",", ".");
    return Number(normalized);
  });

  if (nums.some((n) => isNaN(n))) {
    console.log("Invalid number detected. Please enter valid numeric values.");
    return;
  }

  const getGreatest = (arr: number[]): number => {
    return arr.reduce((max, cur) => (cur > max ? cur : max), arr[0]);
  };

  const greatest = getGreatest(nums);
  console.log("Input array:", nums);
  console.log("Greatest number:", greatest);
}

// Assignment * 24

function runExerciseTwentyfour() {
  let input = (
    readLine(
      "Enter numbers (without spaces and seperated by comma)inside parentheses: "
    ) || ""
  ).trim();
  if (!input) {
    console.log("No input provided.");
    return;
  }

  if (input.startsWith("(") && input.endsWith(")")) {
    input = input.slice(1, -1).trim();
  } else {
    input = input.replace(/[()]/g, "");
  }

  const parts = input
    .split(",")
    .map((s) => s.trim())
    .filter((s) => s.length > 0);

  if (parts.length === 0) {
    console.log("No numbers found in the input.");
    return;
  }

  const nums: number[] = parts.map((s) => Number(s.replace(",", ".")));

  if (nums.some((n) => isNaN(n))) {
    console.log(
      "One or more values are not valid numbers. Please check your input."
    );
    return;
  }

  const min = Math.min(...nums);
  const max = Math.max(...nums);
  const avg = nums.reduce((sum, v) => sum + v, 0) / nums.length;

  console.log("Input array:", nums);
  console.log("Min:", min);
  console.log("Max:", max);
  console.log("Average:", avg.toFixed(2));
}

// Assignment * 25

function runExerciseTwentyfive() {
  const input = (readLine("Enter an integer lower than 10:  ") || "").trim();

  if (!input) {
    console.log("No input provided.");
    return;
  }

  const n = Number(input);

  if (!Number.isFinite(n) || n < 0 || !Number.isInteger(n)) {
    console.log(
      "Please enter a valid non-negative integer (e.g. 0, 1, 5, 20)."
    );
    runExerciseTwentyfive();
    return;
  }

  if (n >= 10) {
    runExerciseTwentyfive();
    return;
  }

  let result: bigint = BigInt(1);
  for (let i = 2; i <= n; i++) {
    result *= BigInt(i);
  }

  console.log(`${n}! = ${result.toString()}`);

  if (n <= 20) {
    console.log(`(Numeric representation: ${Number(result)})`);
  }
}

// Assignment * 26

function runExerciseTwentysix() {
  const numbers: number[] = [];

  for (let i = 0; i < 10; i++) {
    const input = readLine(
      `Enter 10 positive or  negative numbers   ${i + 1} of 10: `
    );
    const num = Number(input);

    if (!isNaN(num)) {
      numbers.push(num);
    } else {
      console.log("Invalid input, please enter a number.");
      i--;
    }
  }
  const negatives = numbers.filter((n) => n < 0);

  console.log("\nNegative numbers:");
  console.log(negatives.join(","));
}
console.log();

// Assignment * 27

function runExerciseTwentyseven() {
  const numbers: number[] = [];

  for (let i = 0; i < 12; i++) {
    const input = readLine(`Enter a positive  number:  ${i + 1} of 12: `);
    const num = Number(input);

    if (!isNaN(num)) {
      numbers.push(num);
    } else {
      console.log("Invalid input, please enter a number.");
      i--;
    }
  }
  console.log(
    "\nAll numbers entered:",
    numbers.filter((n) => n >= 0)
  );
}

// Assignment * 28

function runExerciseTwentyeight() {
  const size: number = Math.floor(Math.random() * (12 - 5 + 1)) + 5;

  function bubbleSort(arr: number[]): number[] {
    const a = [...arr];

    for (let i = 0; i < a.length - 1; i++) {
      let swapped = false;

      for (let j = 0; j < a.length - i - 1; j++) {
        if (a[j] > a[j + 1]) {
          const temp = a[j];
          a[j] = a[j + 1];
          a[j + 1] = temp;
          swapped = true;
        }
      }

      if (!swapped) break;
    }
    return a;
  }
  const arr: number[] = Array.from({ length: size }, () =>
    Math.floor(Math.random() * 50 + 1)
  );
  console.log("Array before sorting:", arr);

  let sorted = bubbleSort(arr);
  console.log("Array after sorting: ", sorted);
}

// Assignment * 29

///////////////////////////////////////optional exercise 29 not attempted///////////////////////////

function runExerciseTwentynine() {}

// Assignment * 30

function runExerciseThirty() {
  const size = Math.floor(Math.random() * 11) + 5; // [5..15]
  const numbers: number[] = [];

  while (numbers.length < size) {
    const rand = Math.floor(Math.random() * 20);

    if (!numbers.includes(rand)) {
      numbers.push(rand);
    }
  }
  numbers.sort((a, b) => a - b);

  console.log("\nOriginal array:");

  console.log(numbers.join(", "));

  console.log();

  let choice = readLine(
    "Do you want the values squared or cubed? (square/cube): "
  )
    .trim()
    .toLowerCase();

  while (choice !== "square" && choice !== "cube") {
    choice = readLine("Invalid choice. Please enter 'square' or 'cube': ")
      .trim()
      .toLowerCase();
  }
  let transformed: number[];

  if (choice === "square") {
    transformed = numbers.map((n) => n ** 2);
  } else {
    transformed = numbers.map((n) => n ** 3);
  }
  console.log(`\nTransformed array (${choice}d values):`);

  console.log(transformed.join(", "));
}

// Assignment * 31

function runExerciseThirtyone() {
  const input = readLine("Enter the current year: ");

  const year = Number(input);

  if (isNaN(year)) {
    console.log("Invalid input. Please enter a valid year.");
    return;
  }
  const currentYear = new Date().getFullYear();

  if (year === currentYear) {
    console.log(`Correct! ${year} is the current year.`);
  } else {
    console.log(
      `${year} is not the current year. The current year is ${currentYear}.`
    );
  }
}

// Assignment 32

function runExerciseThirtytwo() {
  const today = new Date();

  const formatA = today.toDateString();

  console.log("Format A:", formatA);

  const formatB = today.toLocaleDateString();

  console.log("Format B:", formatB);

  const yesterday = new Date(today);

  yesterday.setDate(today.getDate() - 1);

  const tomorrow = new Date(today);

  tomorrow.setDate(today.getDate() + 1);

  console.log("\nYesterday (short):", yesterday.toLocaleDateString());

  console.log("Today (short):", today.toLocaleDateString());

  console.log("Tomorrow (short):", tomorrow.toLocaleDateString());
}

// Assignment * 33

function runExerciseThirtythree() {
  const input = readLine("Enter a date (YYYY-MM-DD): ");

  const enteredDate = new Date(input);

  if (isNaN(enteredDate.getTime())) {
    console.log("Invalid date format. Please use YYYY-MM-DD.");
    return;
  }
  const enteredYear = enteredDate.getFullYear();

  const currentYear = new Date().getFullYear();

  if (enteredYear === currentYear) {
    console.log("Result: Current Year");
  } else if (enteredYear < currentYear) {
    console.log("Result: Past Year");
  } else {
    console.log("Result: Future Year");
  }
}

// Assignment * 34

function runExerciseThirtyfour() {
  let year = 1990;

  const currentYear = new Date().getFullYear();

  console.log(`Leap years from 1990 to ${currentYear}:`);

  while (year <= currentYear) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      process.stdout.write(year + " ");
    }
    year++;
  }
  console.log();
}

//

//

/* ^^^^^^^^^^^^  (Add the rest of the exercise functions above this line )^^^^^^^^^^^^ */

let keepAlive = true;
console.clear();
while (keepAlive) {
  try {
    const assignmentChoice = parseInt(
      readLine("Enter assignment number (ctrl + C or -1 to exit): ")
    );
    console.log();
    switch (assignmentChoice) {
      case 1:
        runExerciseOne();
        break;
      case 2:
        runExerciseTwo();
        break;
      case 3:
        runExerciseThree();
        break;
      case 4:
        runExerciseFour();
        break;
      case 5:
        runExerciseFive();
        break;
      case 6:
        runExerciseSix();
        break;
      case 7:
        runExerciseSeven();
        break;
      case 8:
        runExerciseEight();
        break;
      case 9:
        runExerciseNine();
        break;
      case 10:
        runExerciseTen();
        break;
      case 11:
        runExerciseEleven();
        break;
      case 11:
        runExerciseEleven();
        break;
      case 12:
        runExerciseTwelve();
        break;
      case 13:
        runExerciseThirteen();
        break;
      case 14:
        runExerciseFourteen();
        break;
      case 15:
        runExerciseFifteen();
        break;
      case 16:
        runExerciseSixteen();
        break;
      case 17:
        runExerciseSeventeen();
        break;

      // case 18:
      //   runExerciseEighteen();  Exercise donot exist !
      //   break;

      case 19:
        runExerciseNineteen();
        break;
      case 20:
        runExerciseTwenty();
        break;
      case 21:
        runExerciseTwentyone();
        break;
      case 22:
        runExerciseTwentytwo();
        break;
      case 23:
        runExerciseTwentythree();
        break;
      case 24:
        runExerciseTwentyfour();
        break;
      case 25:
        runExerciseTwentyfive();
        break;
      case 26:
        runExerciseTwentysix();
        break;
      case 27:
        runExerciseTwentyseven();
        break;
      case 28:
        runExerciseTwentyeight();
        break;
      case 29:
        runExerciseTwentynine();
        break;
      case 30:
        runExerciseThirty();
        break;
      case 31:
        runExerciseThirtyone();
        break;
      case 32:
        runExerciseThirtytwo();
        break;
      case 33:
        runExerciseThirtythree();
        break;
      case 34:
        runExerciseThirtyfour();
        break;

      /* ^^^^^^^^^^^^  Add the rest of the exercises above this line ^^^^^^^^^^^^ */
      case -1:
        keepAlive = false;
        break;
      default:
        console.log(chalk.red("That is not a valid assignment number!"));
        break;
    }
    if (assignmentChoice !== -1) {
      console.log();
      readLine(chalk.dim("Press enter to continue..."));
      console.clear();
    } else {
      console.log(chalk.green("Exiting..."));
    }
  } catch (err) {
    console.log(chalk.red(err));
  }
}
