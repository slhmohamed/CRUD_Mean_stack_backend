const express = require('express');
var router =express.Router();
var {Employee}= require('../models/employee');
var ObjectId = require('mongodb').ObjectID;
//=> localhost:3000/employees/
router.get('/',(req,res)=>{
    Employee.find((err,docs) => {
        if(!err) { res.send(docs); }
        else { console.log('Error in Rectriving Employyes:'+JSON.stringify(err,undefined,2));}
    }); 
}); 


router.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('Norecord with given id :  ${req.params.id}');
    Employe.findById(req.params.id,(err,doc)=>{
        if(!err) {rs.send(doc);}
        else {console.log('Error in Hetriving Employee:'+ JSON.stringify(err,undefined,2));}
    });
});

router.put('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('Norecord with given id :  ${req.params.id}');
    var emp = {
        name:req.body.name,
        position:req.body.position,
        office:req.body.office,
        salary:req.body.salary,
     }; 
     Employee.findByIdAndUpdate(req.params.id,{$set:emp},{new: true},(err,doc)=>{

        if(!err) { res.send(doc); }
        else { console.log('Error in Retriving Employyes:'+JSON.stringify(err,undefined,2));}
   
     });
});

router.post('/',(req,res)=>{
    var emp = new Employee({
        name:req.body.name,
        position:req.body.position,
        office:req.body.office,
        salary:req.body.salary,
    });
    emp.save((err,doc)=>{
        if(!err) { res.send(doc);}
        else { console.log('Error in Retriving Employyes:'+JSON.stringify(err,undefined,2));}
    
    });
});

router.delete('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('Norecord with given id :  ${req.params.id}');
    console.log('node');
    Employe.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err) {rs.send(doc);} 
        else {console.log('Error in Hetriving Employee:'+ JSON.stringify(err,undefined,2));}
    });
});
module.exports = router;