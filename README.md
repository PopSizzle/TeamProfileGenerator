# Team Profile Generator

This command line app will prompt users for input data about their software engineering team. From that data the app will generate a clean and nicely styled team profile as an html page that the user can access and use.

## Table of Contents

* Installationg and Usage
* Dependencies and Code Snippet
* Sample Team Page
* Languages used
* Author
* License
* Acknowledgements

### Installation and Usage

This app will function from the command line for anybody who runs the file using 'node app.js'. No further technical knowledge is required, as the app compiles and renders all of the date for you.

### Dependencies and Code Snippet

This app uses the following dependencies:
npm fs (for reading and writing files)
npm inquirer (for prompting and storing user inputs)
npm path (for routing the files and objects)

Here is an example of the code which will check if there is already a manager on the team. If there is not, it will allow you to populate the team with a manager. If there is already a manager, it will send you back to the options menu.

```
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
```

### Sample Team Page

Here is a team page that was built using this app:

![Site](Assets/Screenshot (45).png)

## Languages Used

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Authors

* Sam Poppe 

- [Link to Portfolio Site](https://popsizzle.github.io/Portfolio/)
- [Link to Github](https://github.com/PopSizzle)
- [Link to LinkedIn](https://www.linkedin.com/in/sam-poppe-623281193/)

## License

This project is licensed under the MIT License 

## Acknowledgments

* Hat tip to my teacher Jerome Chenetter and my TAS Kerwin Hy and Mahisha Gunasekaran for teaching me all the skills needed for this project.