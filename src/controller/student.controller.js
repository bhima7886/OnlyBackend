const Student = require("../model/student");
const studentService = require("../service/student.service");
const userService = require("../service/student.service");
/*async function createStudent(req, res) {
    try {
        const student = await studentService.createStudent(req.body);
        res.status(201).json(student);
    }
    catch (err) {
        res.status(500).json({ err: err.message })
    }
}*/
/*
async function getStudentData(req, res) {
    try {
        const student = await studentService.getStudentData();
        res.status(201).json(student);
    }
    catch (err) {
        res.status(500).json({ err: err.message })
    }
}*/

async function createMarks(req, res) {
    try {
        const { name, rollno, std, english, marathi, physics, chemistry, maths, electronics, user_id } = req.body;
        const subjectMarks = { name, rollno, std, english, marathi, physics, chemistry, maths, electronics, user_id };
        const createdMarks = await studentService.createMarks(subjectMarks);
        res.status(201).json(createdMarks);
    }
    catch (err) {
        res.status(500).json({ err: "Internal server error" })
    }
}
async function getMarks(req, res) {
    try {
       // const token=req.cookies.token;
        //console.log(token);

        const marks = await studentService.getMarks();
        res.status(201).json(marks);
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: "Internal server Error" });
    }
}

async function getStudentDataById(req, res) {
    try {
        const student = await studentService.getStudentDataById(req.params.studentId);
        res.status(201).json(student);
        if (!student) {
            return res.status(404).json({ error: "No Student Record" });
        }
        res.json(student);
    }
    catch (err) {
        res.status(500).json({ err: err.message })
    }
}
async function updateStudentData(req, res) {
    try {
        const student = await studentService.updateStudentData(req.params.studentId, req.body);
        res.status(201).json(student);
        console.log(req.body);
        if (!student) {
            return res.status(404).json({ error: "No Student Record" })
        }
        res.json(student);
    }
    catch (err) {
        res.status(err);
    }
}
async function deleteStudentData(req, res) {
    try {
        await studentService.deleteStudentData(req.params.studentId);
        res.status(204).json("Record deleted successfully")
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}

async function getAverageMarks(req, res) {
    try {
        const averageMarks = await studentService.getAverageMarks();
        res.status(201).json(averageMarks);
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}

async function getNameandMarks(req, res) {
    try {
        const getNameandMarks = await studentService.getNameandMarks();
        res.status(201).json(getNameandMarks);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    //createStudent,
    //getStudentData,

    createMarks,
    getMarks,
    getStudentDataById,
    updateStudentData,
    deleteStudentData,
    getAverageMarks,
    getNameandMarks,
 
}