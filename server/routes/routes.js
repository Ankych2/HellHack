const router = require('express').Router()
const controller=require('../controller/employee')
router.post('/create', controller.createEmployee)
router.get('/', controller.getEmployee)

module.exports=router;

