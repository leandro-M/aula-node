import { Router } from "express";
import { criarAluno, deletarAluno, listarAlunos } from '../controllers/alunoController.js'

const router = Router();

router.get('/', listarAlunos);
router.post('/', criarAluno)
router.delete('/:id', deletarAluno)

export default router;