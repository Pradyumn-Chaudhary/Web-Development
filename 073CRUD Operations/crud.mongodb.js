// Select the database to use.
use("CRUD");

// // Insert a few documents into the sales collection.
db.createCollection("courses")

//CRUD Operations
//Create
db.courses.insertMany(
  [
    {
      "Name": "Sigma Web Development Express",
      "Price": 0,
      "Project": 10,
      "Instructor": "Harry",
      "Platform": "YouTube"
    },
    {
      "Name": "Alpha Coding Masterclass",
      "Price": 49.99,
      "Project": 5,
      "Instructor": "Alice",
      "Platform": "Udemy"
    },
    {
      "Name": "Next.js Deep Dive",
      "Price": 0,
      "Project": 8,
      "Instructor": "John",
      "Platform": "YouTube"
    },
    {
      "Name": "React Beginner to Pro",
      "Price": 19.99,
      "Project": 12,
      "Instructor": "Emma",
      "Platform": "Skillshare"
    },
    {
      "Name": "Tailwind CSS Crash Course",
      "Price": 0,
      "Project": 3,
      "Instructor": "Alex",
      "Platform": "YouTube"
    },
    {
      "Name": "Full Stack Development Bootcamp",
      "Price": 299.99,
      "Project": 20,
      "Instructor": "Sophia",
      "Platform": "Coursera"
    },
    {
      "Name": "JavaScript Essentials",
      "Price": 9.99,
      "Project": 6,
      "Instructor": "Mike",
      "Platform": "Pluralsight"
    }
  ]
);

//Read
let a = db.courses.find({ Price: 19.99 });
console.log(a.count());
console.log(a.toArray());

let b = db.courses.findOne({ Price: 0 });
console.log(b);

// //Update
db.courses.updateOne(
  { Price: 0 },  // Filter condition to find the document(s) to update
  { $set: { Price: 99.99 } }  // Update operation to set the Price field to 99.99
);

db.courses.updateMany(
  { Price: 99.99 },
  {$set:{Price: 100}}
)

//Delete
db.courses.deleteOne({Price:100})
db.courses.deleteMany({Price:0})
db.courses.deleteMany({})

// https://www.mongodb.com/docs/manual/reference/operator/query/