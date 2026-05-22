import "dotenv/config";
import express from 'express';
import mongoose from 'mongoose';
import alunosRoutes from './routes/alunoRoutes.js';

const app = express();

app.use(express.json());

app.use('/alunos', alunosRoutes);

const PORT = 3000;

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Conectado ao MongoDB');
    app.listen(PORT, () => {
        console.log(`Servidor iniciado na porta http://localhost:${PORT}`);
    });
}).catch((error) => {
    console.log(error);
})

