import mongoose from "mongoose";
import dotenv from "dotenv";
import { Language } from "./models/Language.js";

dotenv.config();

const languages = [
  { title: "JavaScript", scope: ["Web development", "Full-stack", "Mobile apps"], duration: "6", difficulties: "Medium" },
  { title: "Python", scope: ["AI", "ML", "Web", "Data science", "Scripting"], duration: "4", difficulties: "Easy" },
  { title: "Java", scope: ["Enterprise apps", "Android", "Backend systems"], duration: "8", difficulties: "Medium" },
  { title: "C", scope: ["System programming", "Embedded systems", "OS"], duration: "10", difficulties: "Hard" },
  { title: "C++", scope: ["Game dev", "High-performance apps", "System software"], duration: "10", difficulties: "Hard" },
  { title: "C#", scope: ["Game dev (Unity)", "Desktop apps", "Enterprise software"], duration: "6", difficulties: "Medium" },
  { title: "PHP", scope: ["Web development", "CMS (WordPress, Drupal)"], duration: "4", difficulties: "Easy" },
  { title: "Ruby", scope: ["Web apps (Rails)", "Scripting"], duration: "6", difficulties: "Easy" },
  { title: "Go", scope: ["Cloud", "Backend services", "Distributed systems"], duration: "6", difficulties: "Medium" },
  { title: "Rust", scope: ["System programming", "Web assembly", "Blockchain"], duration: "10", difficulties: "Hard" },
  { title: "Kotlin", scope: ["Android apps", "Modern JVM apps"], duration: "6", difficulties: "Medium" },
  { title: "Swift", scope: ["iOS", "macOS apps"], duration: "6", difficulties: "Medium" },
  { title: "TypeScript", scope: ["Scalable web apps", "Angular", "React apps"], duration: "6", difficulties: "Medium" },
  { title: "SQL", scope: ["Databases", "Queries", "Data analysis"], duration: "3", difficulties: "Easy" },
  { title: "R", scope: ["Data science", "Statistics", "Visualization"], duration: "6", difficulties: "Medium" },
  { title: "Scala", scope: ["Big data", "JVM-based apps", "Functional programming"], duration: "8", difficulties: "Hard" },
  { title: "Perl", scope: ["Scripting", "Text processing", "Automation"], duration: "6", difficulties: "Medium" },
  { title: "Dart", scope: ["Mobile apps (Flutter)", "Web apps"], duration: "6", difficulties: "Medium" },
  { title: "Objective-C", scope: ["Legacy iOS apps", "macOS apps"], duration: "10", difficulties: "Hard" },
  { title: "MATLAB", scope: ["Engineering", "Simulation", "Scientific computing"], duration: "6", difficulties: "Medium" },
  { title: "Haskell", scope: ["Functional programming", "Research", "Compilers"], duration: "1", difficulties: "Hard" },
  { title: "Lua", scope: ["Game scripting", "Embedded systems"], duration: "4", difficulties: "Easy" },
  { title: "Shell Scripting", scope: ["Automation", "Linux administration"], duration: "3", difficulties: "Easy" },
  { title: "PowerShell", scope: ["Windows automation", "DevOps"], duration: "3", difficulties: "Easy" },
  { title: "Elixir", scope: ["Scalable apps", "Real-time systems"], duration: "8", difficulties: "Hard" },
  { title: "Clojure", scope: ["Functional programming", "Concurrency", "JVM"], duration: "10", difficulties: "Hard" },
  { title: "Erlang", scope: ["Telecom", "Distributed systems", "Concurrency"], duration: "10", difficulties: "Hard" },
  { title: "Fortran", scope: ["Scientific computing", "Simulations"], duration: "8", difficulties: "Medium" },
  { title: "COBOL", scope: ["Legacy enterprise systems", "Banking"], duration: "8", difficulties: "Medium" },
  { title: "F#", scope: ["Functional-first .NET apps", "Finance"], duration: "8", difficulties: "Hard" },
  { title: "Groovy", scope: ["Scripting", "Automation", "JVM ecosystem"], duration: "6", difficulties: "Medium" },
  { title: "VB.NET", scope: ["Legacy enterprise apps", ".NET ecosystem"], duration: "6", difficulties: "Easy" },
  { title: "Assembly", scope: ["Low-level programming", "OS", "Embedded systems"], duration: "1", difficulties: "Hard" },
  { title: "Solidity", scope: ["Blockchain", "Smart contracts (Ethereum)"], duration: "6", difficulties: "Medium" },
  { title: "VHDL", scope: ["Hardware design", "FPGA programming"], duration: "1", difficulties: "Hard" },
  { title: "Verilog", scope: ["Digital circuits", "Hardware design"], duration: "1", difficulties: "Hard" },
  { title: "Prolog", scope: ["AI", "Logic programming", "Research"], duration: "10", difficulties: "Hard" },
  { title: "Ada", scope: ["Military", "Avionics", "Real-time systems"], duration: "10", difficulties: "Hard" },
  { title: "Smalltalk", scope: ["OOP", "Research", "Legacy systems"], duration: "10", difficulties: "Medium" },
  { title: "Crystal", scope: ["Web apps", "Fast scripting"], duration: "6", difficulties: "Medium" },
  { title: "Nim", scope: ["System apps", "Cross-platform development"], duration: "8", difficulties: "Medium" },
  { title: "Julia", scope: ["Scientific computing", "ML", "Data analysis"], duration: "6", difficulties: "Medium" },
  { title: "Hack", scope: ["Facebook’s HHVM ecosystem"], duration: "6", difficulties: "Medium" },
  { title: "ABAP", scope: ["SAP systems", "Enterprise software"], duration: "8", difficulties: "Hard" },
  { title: "OCaml", scope: ["Functional programming", "Compilers", "Research"], duration: "10", difficulties: "Hard" },
  { title: "Q#", scope: ["Quantum computing", "Simulations"], duration: "1", difficulties: "Hard" },
  { title: "APL", scope: ["Math-heavy programming", "Research"], duration: "10", difficulties: "Hard" },
  { title: "Delphi/Object Pascal", scope: ["Desktop apps", "Legacy systems"], duration: "8", difficulties: "Medium" },
  { title: "Logo", scope: ["Educational programming", "Basics"], duration: "2", difficulties: "Easy" },
  { title: "Scratch", scope: ["Beginner education", "Kids programming"], duration: "2", difficulties: "Easy" }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected");

    // Clear existing data
    await Language.deleteMany({});
    console.log("🗑️ Existing languages cleared");

    // Insert new data
    await Language.insertMany(languages);
    console.log("🌟 Languages seeded successfully!");

    process.exit();
  } catch (err) {
    console.error("❌ Error seeding database:", err);
    process.exit(1);
  }
};

seedDB();
