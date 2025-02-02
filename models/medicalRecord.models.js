// Medical Record Schema
const mongoose = require("mongoose")
const medicalRecordSchema = new mongoose.Schema({
    patient:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
        required: true },
    doctor:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required: true
    },
    diagnosis:{
        type: String,
        required: true
    },
    prescription:{ 
        type: String,
        required: true
    },
    visitDate:{
        type: Date,
        default: Date.now
    }
}, { timestamps: true });
const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema);