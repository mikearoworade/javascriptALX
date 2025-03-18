// Write a script that computes the number of tasks completed by user id.
//
// The first argument is the API URL: https://jsonplaceholder.typicode.com/todos
// Only print users with completed task
// You must use the module request

// Import request module
const request = require("request");

// Get command-line argument
const apiUrl = process.argv[2];

// Validate input
if (!apiUrl) {
    console.error('Usage ./06-completed_tasks.js <URL>');
    process.exit(1);
}

// Send get request
request(apiUrl, function (error, response, body) {
    if (error) {
        console.error("Error fetching URL:", error);
        return;
    }

    try {
        const todos = JSON.parse(body);
        // console.log(todos);
        const completedTasks = {};

        // Filter only completed tasks and count per user
        todos.forEach(todo => {
            if (todo.completed) {
                if(!completedTasks[todo.userId]) {
                    completedTasks[todo.userId] = 1;
                } else {
                    completedTasks[todo.userId]++
                }
            }
        });

        console.log(completedTasks);
    } catch (err) {
        console.error("Error parsing JSON:", err);
    }
});
