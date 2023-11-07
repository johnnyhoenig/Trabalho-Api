const express = require('express')
const router = express.Router()

const livroController = require('../controller/livros_controller')




router.post('/', livroController.inserir);

router.get('/', livroController.listar);
router.get('/:id', livroController.buscarPorId);
router.get('/nome', livroController.buscarNomelivro);

router.put('/:id/nomeautor', livroController.atualizarNomeAutor);
router.put('/:id/nomelivro', livroController.atualizarNomeLivro);
router.put('/:id/nomeeditora', livroController.atualizarEditoraLivro);
router.put('/:id/ano', livroController.atualizarAnoLivro);



router.delete('/:id', livroController.deletar);

module.exports = router;