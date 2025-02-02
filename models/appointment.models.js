// Appointment Schema
const mongoose = require("mongoose")
const appointmentSchema = new mongoose.Schema({
    patient:{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
        required: true 
    },
    doctor:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor", 
        required: true 
    },
    date:{
        type: Date,
        required:true
    },
    time:{
        type: String,
        required: true
    },
    status:{
        type: String,
        enum: ["Scheduled", "Completed", "Cancelled"],
        default: "Scheduled"
    }
}, { timestamps: true });
const Appointment = mongoose.model("Appointment", appointmentSchema);