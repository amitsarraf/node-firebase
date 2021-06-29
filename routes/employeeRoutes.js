const express = require('express');
const {addEmployee, getAllEmployee,getSingleEmployee,updateEmployee,deleteEmployee } = require('../controllers/employeController');

const router = express.Router();

router.post('/employee', addEmployee);
router.get('/employee', getAllEmployee);
router.get('/employee/:id', getSingleEmployee);
router.put('/employee/:id', updateEmployee);
router.delete('/employee/:id', deleteEmployee);



module.exports = {
    routes: router
}