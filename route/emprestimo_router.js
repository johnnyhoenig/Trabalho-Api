const express = require('express')
const router = express.Router()

const emprestimoController = require('../controller/emprestimo_controller')

app.use(express.json());


router.post('/:id', emprestimoController.NovoEmprestimo);
router.post('/:id', emprestimoController.devolucao);

router.get('/', emprestimoController.listarDevolucao);
router.get('/', emprestimoController.listarEmprestimo);
router.get('/', emprestimoController.buscarNomelivro);


router.delete('/:id', emprestimoController.deletar);

module.exports = router;