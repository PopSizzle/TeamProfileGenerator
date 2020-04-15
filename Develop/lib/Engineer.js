const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name1, id1, email1, github) {   
        const name = name1;
        const id = id1;
        const email = email1;

        super(name, id, email);

        this.github = github;
        this.role = "Engineer";
    }

    getGithub() {
        return this.github;
    }

}

module.exports = Engineer;