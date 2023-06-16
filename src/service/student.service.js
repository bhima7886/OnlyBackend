const Student = require("../model/student");

/* async function createStudent(studentData) {
    try {
        const student = new Student(studentData);
        await student.save();
        return student;
    }
    catch (err) {
        console.log("Error")
    }
} */

async function createMarks(subjectMarks) {
    try {
        const createMarks = new Student(subjectMarks);
        await createMarks.save();
        return createMarks;
    }
    catch (err) {
        console.log(err)
    }
}

async function addData(data)
{
    try{
        const student=new Student(data);
        await student.save();
        return student;
    }
    catch(err)
    {
        console.log(err);
    }
}
async function getData()
{
    try
    {
         const record=await Student.find().populate("user");
         return record;
    }
    catch(err)
    {
        console.log(err);
    }
}

async function getMarks() {
    try {
        const marks = await Student.aggregate([
            {
                $project: {
                    user_id:1,
                    name: 1,
                    rollno:1,
                    std: 1,
                    english: 1,
                    marathi: 1,
                    physics: 1,
                    chemistry: 1,
                    maths: 1,
                    electronics: 1,
                  
                    totalMarks: {
                        $sum: ['$english', '$marathi', '$physics', '$chemistry', '$maths', '$electronics']
                    },
                    percentage: {
                        $multiply: [
                            { $divide: [{ $sum: ['$english', '$marathi', '$physics', '$chemistry', '$maths', '$electronics'] }, 600] }, 100
                        ]
                    }
                }
            }  
        ])
        return marks;
    }
    catch (err) {
        console.log(err)
    }
}


/*async function getStudentData() {b
    try {
        const student = await Student.find();
        return student;
    }
    catch (err) {
        console.log(err);
    }
}*/

async function getStudentDataById(studentId) {
    try {
        const student = await Student.findById(studentId)
        return student;
    }
    catch (err) {
        console.log(err);
    }
}

async function updateStudentData(studentId, studentData) {
    try {
        const student = await Student.findByIdAndUpdate(studentId, studentData, { new: true });
        return student;
    }
    catch (err) {
        console.log(err);
    }
}

async function deleteStudentData(studentId) {
    try {
        await Student.findByIdAndRemove(studentId);
    }
    catch (error) {
        console.log("Record is not deleted");
    }
}

//By using Aggregation calculate Average Marks
/*async function getAverageMarks() {
    try {
        const averageMarks = await Student.aggregate([{ $group: { _id: null, averageMark: { $max: "$marks" } } }])
        console.log(averageMarks);
        return averageMarks;
    }
    catch (err) {
        console.log(err)
    }
}*/

// By using Project only get name and marks from table
/*async function getNameandMarks() {
    try {
        const getNameandMarks = await Student.find({}, { name: 1, marks: 1 });
        console.log(getNameandMarks);
        return getNameandMarks;
    }
    catch (err) {
        console.log(err)
    }
}*/

module.exports = {
    //createStudent,
    //getStudentData,
    // getAverageMarks,
   //getNameandMarks,
 
    createMarks,
    getMarks,
    getStudentDataById,
    updateStudentData,
    deleteStudentData,
    getData,
    addData,
   

}