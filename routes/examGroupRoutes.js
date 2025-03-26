const express = require('express');

const router = express.Router();

// Mock database (replace with real DB)
let examGroups = [
    { id: 1, name: "SEMI FINAL" }
];

// GET: Fetch all exam groups
router.get('/exam-group', (req, res) => {
    res.json(examGroups);
});

// POST: Create a new exam group
router.post('/exam-group', (req, res) => {
    const { id, name } = req.body;
    if (!id || !name) {
        return res.status(400).json({ message: "ID and Name are required!" });
    }
    
    examGroups.push({ id, name });
    res.status(201).json({ message: "Exam group added!", examGroups });
});

// PUT: Update an existing exam group
router.put('/exam-group/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    
    let exam = examGroups.find(exam => exam.id == id);
    
    if (!exam) {
        return res.status(404).json({ message: "Exam group not found!" });
    }
    
    exam.name = name || exam.name;
    
    res.json({ message: "Exam group updated!", examGroups });
});

module.exports = router;
