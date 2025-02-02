// Doctor Schema
const mongoose = require("mongoose")
const doctorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    specialization:{
        type: String,
        required: true
    },
    contact:{
        type: String,
        required: true
    },
    experience:{
        type: Number,
        required: true
    },
    appointments: [
        { 
            type: mongoose.Schema.Types.ObjectId,
            ref: "Appointment"
        },
    ]
}, { timestamps: true });
const Doctor = mongoose.model("Doctor", doctorSchema)