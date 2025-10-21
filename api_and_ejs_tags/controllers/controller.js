// Sample data
let employees = [
  { name: "John Doe", department: "Engineering", contact: "9876543210" },
  { name: "Priya Sharma", department: "HR", contact: "9898989898" },
  { name: "Amit Verma", department: "Finance", contact: "9123456789" },
  { name: "Sara Khan", department: "Marketing", contact: "9001122334" },
];

// GET: Home Page
const getHome = (req, res) => {
  res.status(200).render("index", {
    title: "Welcome to Our Company",
    message: "Empowering innovation through teamwork.",
    team: employees,
    isLoggedIn: true,
  });
};

// GET: Services Page
const getServices = (req, res) => {
  const services = [
    { name: "Web Development", cost: "₹50,000", duration: "3 months" },
    { name: "App Development", cost: "₹70,000", duration: "4 months" },
    { name: "Cloud Hosting", cost: "₹25,000", duration: "1 month" },
  ];

  res.status(200).render("services", {
    title: "Our Services",
    services,
    note: "We offer top-notch digital solutions.",
  });
};

// POST: Contact Form
const postContactForm = (req, res) => {
  console.log("📩 Form Submitted:", req.body);
  res.status(301).redirect("/");
};

export { getHome, getServices, postContactForm };
