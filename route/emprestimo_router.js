const express = require('express')
const router = express.Router()

const emprestimoController = require('../controller/emprestimo_controller')




router.post('/:id', emprestimoController.NovoEmprestimo);
router.post('/:id/devolucao', emprestimoController.devolucao);

router.get('/devolucao', emprestimoController.listarDevolucao);
router.get('/emprestimo', emprestimoController.listarEmprestimo);
router.get('/nomeLivro', emprestimoController.buscarNomelivro);


router.delete('/:id', emprestimoController.deletar);

module.exports = router;