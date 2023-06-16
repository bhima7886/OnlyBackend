const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        required: true,
    },
    std: {
        type: String,
        required: true,
    },
    rollno: {
        type: Number,
        required: true,
        unique: true,
    },
    english: {
        type: Number,
        required: true,
    },
    marathi: {
        type: Number,
        required: true,
    },
    physics: {
        type: Number,
        required: true,
    },
    chemistry: {
        type: Number,
        required: true,
    },
    maths: {
        type: Number,
        required: true,
    },
    electronics: {
        type: Number,
        required: true,
    },
 

});
const Student = mongoose.model("Student", studentSchema);

module.exports = Student;