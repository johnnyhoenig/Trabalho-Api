const express = require('express')
const router = express.Router()

const clienteController = require('../controller/cliente_controller')


router.post('/', clienteController.inserir);

router.get('/', clienteController.listar);
router.get('/:id', clienteController.buscarPorId);
router.get('/buscaNome', clienteController.pesquisarPorLikeNome);
router.get('/buscaMatricula', clienteController.buscarPorMatricual);


router.put('/nome', clienteController.atualizarNome);
router.put('/senha', clienteController.atualizarSenha);
router.put('/email', clienteController.atualizarEmail);



router.delete('/:id', clienteController.deletar);

module.exports = router;
