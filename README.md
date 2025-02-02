# Hospital Management System - MongoDB Data Modeling

This project demonstrates a **Hospital Management System** using **MongoDB** and **Mongoose** for data modeling. It includes schemas for managing patients, doctors, appointments, and medical records.

---

## Features

- **Patient Management**: Track patient details, contact information, and medical history.
- **Doctor Management**: Manage doctor profiles, specializations, and appointments.
- **Appointment Scheduling**: Schedule and track patient-doctor appointments.
- **Medical Records**: Store diagnosis, prescriptions, and visit details.

---

## Technologies Used

- **Node.js**: Runtime environment for the application.
- **MongoDB**: NoSQL database for storing data.
- **Mongoose**: MongoDB object modeling for Node.js.
- **VS Code**: Code editor used for development.

---

## Schemas

### 1. Patient
- **Fields**: `firstname`, `middlename`, `lastname`, `age`, `gender`, `contact`, `address`, `medicalHistory`
- **Relationships**: References `MedicalRecord` for medical history.

### 2. Doctor
- **Fields**: `name`, `specialization`, `contact`, `experience`, `appointments`
- **Relationships**: References `Appointment` for scheduled appointments.

### 3. Appointment
- **Fields**: `patient`, `doctor`, `date`, `time`, `status`
- **Relationships**: References `Patient` and `Doctor`.

### 4. Medical Record
- **Fields**: `patient`, `doctor`, `diagnosis`, `prescription`, `visitDate`
- **Relationships**: References `Patient` and `Doctor`.
