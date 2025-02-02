// Patient Schema
const mongoose = require("mongoose");
const patientSchema = new mongoose.Schema({
	firstname:{
		type: String,
		required: true
	},
	middlename:{
		type: String,
	},
	lastname:{
		type: String,
		required: true
	},
	age:{
		type: Number,
		required: true
	},
	gender:{
		type: String,
		enum:["Male", "Female", "Other"],
		required: true 
	},
	contact:{
		type: String,
		required: true 
	},
	address:{
		type: String,
		required: true
		},
	medicalHistory:[
		{ 
			type: mongoose.Schema.Types.ObjectId,
			ref: "MedicalRecord"
	},
]
}, { timestamps: true });
const Patient = mongoose.model("Patient", patientSchema);