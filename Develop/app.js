const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
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
        },
        {
            type: "list",
            message: "Please select this employee's role on your team.",
            name: "role",
            choices: [
                "Manager",
                "Engineer",
                "Intern",
            ]
        }
    ])
    .then(function(response) {
        // Switch case for different classes of employees
        switch(response.role) {
        // If manager class
        case "Manager":

            // Check if there is already a manager
            let isManager = employees.filter(employee => employee.getRole() === "Manager");
            console.log(isManager);
            console.log(isManager.length);
            // If there is a manager go back and try again
            if(isManager.length > 0){
            console.log("Your team already has a manager, please go back and select a different option.")
            return nextStep();
            }

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
                const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
                employees.push(manager);
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
                const engineer = new Engineer(response.name, response.id, response.email, response.github);
                employees.push(engineer);
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
                const intern = new Intern(response.name, response.id, response.email, response.school);
                employees.push(intern);
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
                
            console.log(employees);
            // Using the render function, write the employees to the html templates.
            fs.writeFile("./output/index.html", render(employees), function(err) {

                if (err) {
                    return console.log(err);
                }
                  
                console.log("Success!");
                  
                });
                break;
            // Exit the app
            default:
                return;
        }
    })
}

beginTeam();
