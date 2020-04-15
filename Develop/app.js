const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
let manager = {};
let employees = [];

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Welcome message
function beginTeam () {

    console.log("Welcome to the team creator!")
    console.log("We will now begin to construct your team profile");
    console.log("------------------------------------------")

    enterTeamMember();
}

// Function for adding a team member
function enterTeamMember() {
    // Inquirer prompt for basic details
    inquirer.prompt([
        {
            type: "list",
            message: "Please select an employee role to add.",
            name: "role",
            choices: [
                "Manager",
                "Engineer",
                "Intern",
            ]
        },
        {
            type: "input",
            message: "Please enter the name of your employee.",
            name: "name"
        },
        {
            type: "input",
            message: "Please enter the id of your employee.",
            name: "id"
        },
        {
            type: "input",
            message: "Please enter the email of your employee.",
            name: "email"
        }
    ])
    .then(function(response) {
        // Switch case for different classes of employees
        switch(response.role) {
        // If manager class
        case "Manager":
            inquirer.prompt([
                {
                    type: "input",
                    message: "Please enter your manager's office number.",
                    name: "officeNumber"
                }
            ])
            .then(function(response1){
                response.officeNumber = response1.officeNumber;
                console.log(response);
                nextStep();
            })
            break;
        // If Engineer class
        case "Engineer":
            inquirer.prompt([
                {
                    type: "input",
                    message: "Please enter your Engineer's Github username.",
                    name: "github"
                }
            ])
            .then(function(response1){
                response.github = response1.github;
                console.log(response);
                nextStep();
            })
            break;
        // If neither, must be intern class
        default:
            inquirer.prompt([
                {
                    type: "input",
                    message: "Please enter your Intern's school.",
                    name: "school"
                }
            ])
            .then(function(response1){
                response.school = response1.school;
                console.log(response);
                nextStep();
            })
        }        
    })    
}

// Function for switching between adding team members, printing team, and exiting.
function nextStep() {
    inquirer.prompt([
        {
            type: "list",
            message: "what would you like to do now?",
            name: "continue",
            choices: [
                "Add another employee",
                "Print my team to an html file",
                "Exit"
            ]

        }
    ])
    .then(function(response){
        // Switch case to handle inquirer response
        switch(response.continue) {
            // Add another employee
            case "Add another employee":
                enterTeamMember();
                break;
            // Print the team
            case "Print my team to an html file":
                // PrintTeam()
                break;
            // Exit the app
            default:
                return;
        }
    })
}

beginTeam();
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
