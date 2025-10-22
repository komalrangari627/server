// controllers/controller.js

// Sample data to show in EJS pages
const topics = [
  { title: "NoSQL vs SQL", description: "Understand the key differences between SQL and NoSQL databases." },
  { title: "MongoDB Basics", description: "Learn about MongoDB, a popular NoSQL database." },
  { title: "Database Models", description: "Explore document, key-value, column, and graph data models." },
];

// GET: Home Page
const getHome = (req, res) => {
  res.status(200).render("index", {
    title: "Database Comparison",
    intro: "Welcome! This page explores the difference between SQL and NoSQL databases.",
    topics, // pass array to EJS
  });
};

// GET: About Page
const getAbout = (req, res) => {
  res.status(200).render("about", {
    title: "About This Project",
    description:
      "This project demonstrates Express.js + EJS setup with form handling and dynamic rendering.",
  });
};

// POST: Handle Form Submission
const postSubmitForm = (req, res) => {
  console.log("📝 Form Data Received:", req.body);

  // You can later save this to MongoDB if needed
  const { name, email, message } = req.body;

  // Simulate success message
  console.log(`✅ Thank you, ${name}! We received your message: "${message}"`);

  // Redirect back to home
  res.status(301).redirect("/");
};

export { getHome, getAbout, postSubmitForm };
