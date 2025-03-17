// Filtering Inside an Object Containing Arrays

// Filter Students Based on Subjects
const students = [
    { name: "Alice", subjects: ["Math", "English", "Physics"] },
    { name: "Bob", subjects: ["History", "Biology"] },
    { name: "Charlie", subjects: ["Math", "Chemistry"] }
];

// Filter students who have "Math" in their subjects
const mathStudents = students.filter(student =>
    student.subjects.includes("Math"));

console.log(mathStudents);
console.log("\n");

// Filter Orders That Contain a Specific Product
const orders = [
    { id: 1, items: ["Laptop", "Mouse", "Keyboard"] },
    { id: 2, items: ["Phone", "Charger"] },
    { id: 3, items: ["Laptop", "Monitor"] }
];

// Filter orders that contain "Laptop"
const laptopOrders = orders.filter(order =>
    order.items.includes("Laptop"));

console.log(laptopOrders);
