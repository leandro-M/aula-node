import { Router } from "express";
import { atualizarAluno, buscarAlunoPorId, criarAluno, deletarAluno, listarAlunos } from '../controllers/alunoController.js'

const router = Router();

router.get('/', listarAlunos);
router.get('/:id', buscarAlunoPorId)

router.post('/', criarAluno)
router.delete('/:id', deletarAluno)
router.put('/:id', atualizarAluno)
export default router;