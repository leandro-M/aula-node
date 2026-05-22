import mongoose from "mongoose";

const alunoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'O nome é obrigatório'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'O email é obrigatório'],
        trim: true,
        lowercase: true,
        unique: [true, 'Email já cadastrado'],
    },
    age: {
        type: Number,
        required: [true, 'A idade é obrigatória'],
        min: [18, 'A idade deve ser maior ou igual a 18'],
        max: [100, 'A idade deve ser menor ou igual a 100'],
    },
}, {
    timestamps: true
})

export default mongoose.model('Aluno', alunoSchema)