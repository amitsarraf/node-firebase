'use strict';

const firebase = require('../db');
const Employee = require('../models/employee');
const firestore = firebase.firestore();


const addEmployee = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('employees').doc().set(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllEmployee = async (req, res, next) => {
    try {
        const employees = await firestore.collection('employees');
        const data = await employees.get();
        const employeeArray = [];
        if (data.empty) {
            res.status(400).send("no employee Record Found");
        } else {
            data.forEach(doc => {
                const employee = new Employee(
                    doc.id,
                    doc.data().employeeDetail,
                    doc.data().employeeSalary,
                    doc.data().employeeEducation,
                    doc.data().employeePrevCompany

                );
                employeeArray.push(employee);
            });
            res.send(employeeArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getSingleEmployee = async (req, res, next) => {
    try {
        const id = req.params.id;
        const employee = firestore.collection('employees').doc(id);
        const data = await employee.get();
        if (!data.exists) {
            res.status(400).send("students with given ID not found");
        } else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateEmployee = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const employee = await firestore.collection('employees').doc(id);
        await employee.update(data);
        res.send("Student record updated successfully");
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteEmployee = async(req,res,next) =>{
    try {
        const id = req.params.id;
         await firestore.collection('employees').doc(id).delete();
        res.send("Employee deleted succesfully");
    } catch (error) {
        res.status(400).send(error.message);
        
    }
}


module.exports = {
    addEmployee,
    getAllEmployee,
    getSingleEmployee,
    updateEmployee,
    deleteEmployee
}