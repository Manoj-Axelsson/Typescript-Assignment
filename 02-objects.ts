interface Book {
  title: string;
  author: string;
  year: number;
  isAvailable: boolean;
}

// const myBook: Book = {
//   title: "The God of Small Things",
//   author: "Arundhati Roy",
//   year: 1996,
//   isAvailable: true,
// };

// console.log(myBook);

const books: Book[] = [
  {
    title: "Satanic Verses",
    author: "Salman Rushdie",
    year: 1988,
    isAvailable: true,
    // isAvailable :true,
  },
  {
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    year: 2003,
    isAvailable: false,
  },
  {
    title: "Autobiography of a Yogi",
    author: "Paramahansa Yogananda",
    year: 1946,
    isAvailable: true,
  },
  {
    title: "The God of Small Things",
    author: "Arundhati Roy",
    year: 1996,
    isAvailable: true,
  },
];

//console.log(books);

function getBookDescription(book: Book): string {
  return `${book.title} by ${book.author}, published in ${book.year}
Available: ${book.isAvailable ? "Yes" : "No"}`;
}

function findBookByTitle(books: Book[], title: string): Book | undefined {
  return books.find((book) => book.title === title);
}

function getAvailableBooks(books: Book[]): string[] {
  return books.filter((b) => b.isAvailable).map((b) => getBookDescription(b));
}
///// print by title: ////

const found = findBookByTitle(books, "The Kite Runner");
if (found) {
  console.log("Found by title:");
  console.log(getBookDescription(found));
} else {
  console.log("Book not found.");
}

/////  print by availability   /////

console.log("\nAvailable books:");

const available = getAvailableBooks(books);
available.forEach((desc) => console.log(desc));

console.log();

console.log();

////  testing the code snippet  ///////

console.log("testing code", getAvailableBooks(books));
