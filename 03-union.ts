/////   "union + type narrowing" exercise   //////

import { clearScreenDown } from "readline";

type ID = string | number;

function formatID(id: ID): string {
  if (typeof id === "number") {
    return `ID-${id}`;
  } else {
    return id.toUpperCase();
  }
}
console.log(formatID(1234));

console.log(formatID("Typescript"));

////// Create a type for different "user roles"  //////

type UserRole = "admin" | "user" | "guest";

interface User {
  id: ID;
  name: string;
  role: UserRole;
  email?: string;
}

const user1: User = {
  id: 1,
  name: "Alice",
  role: "admin",
};

const user2: User = {
  id: "USER-123",
  name: "Bob",
  role: "user",
  email: "bob@example.com",
};

function isAdmin(user: User): user is User & { role: "admin" } {
  return user.role === "admin";
}
console.log(`${user1.name} is an admin.`);

if (!isAdmin(user2)) {
  console.log(`${user2.name} is not an admin.`);
}
console.log(isAdmin(user2));

//////   Greeting function with 'switch'   /////

function getRoleGreeting(user: User): string {
  switch (user.role) {
    case "admin":
      return `Welcome back, Admin ${user.name}! You have full access.`;
    case "user":
      return `Hello ${user.name}, enjoy exploring our platform.`;
    case "guest":
      return `Welcome, Guest! Please sign up to access more features.`;
    default:
      return `Hello ${user.name}, role not recognized.`;
  }
}
console.log(getRoleGreeting(user2));
