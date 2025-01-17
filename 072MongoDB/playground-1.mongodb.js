// Select the database to use.
use("Sigma");

// Insert a few documents into the sales collection.
db.getCollection("Courses").insertMany([
  {
    "name": "JAVA",
    "price": 10000,
    "instructor": "Harry"
  },
  {
    "name": "Python",
    "price": 9000,
    "instructor": "Alice"
  },
  {
    "name": "C++",
    "price": 12000,
    "instructor": "John"
  },
  {
    "name": "ReactJS",
    "price": 15000,
    "instructor": "Emma"
  },
  {
    "name": "Node.js",
    "price": 11000,
    "instructor": "Oliver"
  },
  {
    "name": "HTML & CSS",
    "price": 7000,
    "instructor": "Sophia"
  },
  {
    "name": "JavaScript",
    "price": 13000,
    "instructor": "Liam"
  },
  {
    "name": "C",
    "price": 8000,
    "instructor": "Mason"
  },
  {
    "name": "React Native",
    "price": 14000,
    "instructor": "Isabella"
  },
  {
    "name": "MongoDB",
    "price": 9500,
    "instructor": "Lucas"
  }
]
);

// Run a find command to view items sold on April 4th, 2014.
const salesOnApril4th = db
  .getCollection("sales")
  .find({
    date: { $gte: new Date("2014-04-04"), $lt: new Date("2014-04-05") },
  })
  .count();

// Print a message to the output window.
console.log(`Data Inserted`);
