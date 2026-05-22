import Aluno from '../models/Aluno.js';

export const listarAlunos = async (req, res) => {
    const alunos = await Aluno.find();
    console.log(alunos)
    return res.status(200).json(alunos);
}

export const criarAluno = async (req, res) => {
    const { name, email, age } = req.body;
    if (!name || !email || !age) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' })
    }

    try {
        const aluno = await Aluno.create({
            name,
            email,
            age
        })
        return res.status(201).json(aluno);
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

export const deletarAluno = async (req, res) => {
    const { id } = req.params;
    const aluno = await Aluno.findByIdAndDelete(id);

    if (!aluno) {
        return res.status(404).json({ message: 'Aluno não encontrado' })
    }

    return res.status(200).json({ message: `Aluno ${aluno.name} deletado com sucesso` });
}

export const atualizarAluno = async (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;
    const aluno = await Aluno.findByIdAndUpdate(id, {
        name,
        email,
        age
    }, { new: true });
    return res.status(200).json(aluno);
}
