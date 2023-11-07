const express = require('express')
const router = express.Router()

const clienteController = require('../controller/cliente_controller')

app.use(express.json());


router.post('/:id', clienteController.inserir);

router.get('/', clienteController.listar);
router.get('/:id', clienteController.buscarPorId);
router.get('/', clienteController.pesquisarPorLikeNome);
router.get('/', clienteController.buscarPorMatricual);


router.put('/', clienteController.atualizarNome);
router.put('/', clienteController.atualizarSenha);
router.put('/', clienteController.atualizarEmail);



router.delete('/:id', clienteController.deletar);

module.exports = router;
