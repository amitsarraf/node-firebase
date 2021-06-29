class Employee {
    constructor(id, employeeDetails, employeeSalary, employeeEducation,
        employeePrevCmpny) {
            this.id = id;
            this.employeeDetails = employeeDetails;
            this.employeeSalary = employeeSalary;
            this.employeeEducation = employeeEducation;
            this.employeePrevCmpny = employeePrevCmpny;
    }
}

module.exports = Employee;