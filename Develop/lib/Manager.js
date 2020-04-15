const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name1, id1, email1, officeNumber) {   
        const name = name1;
        const id = id1;
        const email = email1;

        super(name, id, email);

        this.officeNumber = officeNumber;
        this.role = "Manager";
    }

    getOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager;