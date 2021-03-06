const Employee = require("./Employee");

class Intern extends Employee {
    constructor(input) {
        super(input);
        this.school = input.school;
    };

    getSchool() {
        return `${this.school}`
    };
};

module.exports = Intern;