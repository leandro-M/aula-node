import { Router } from "express";
import { atualizarAluno, criarAluno, deletarAluno, listarAlunos } from '../controllers/alunoController.js'

const router = Router();

router.get('/', listarAlunos);
router.post('/', criarAluno)
router.delete('/:id', deletarAluno)
router.put('/:id', atualizarAluno)

export default router;