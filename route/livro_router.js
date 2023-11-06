const express = require('express')
const router = express.Router()

const livroController = require('../controller/livros_controller')

app.use(express.json());


router.post('/', livroController.inserir);

router.get('/', livroController.listar);
router.get('/:id', livroController.buscarPorId);
router.get('/', livroController.buscarNomelivro);

router.put('/:id', livroController.atualizarNomeAutor);
router.put('/:id', livroController.atualizarNomeLivro);
router.put('/:id', livroController.atualizarEditoraLivro);
router.put('/:id', livroController.atualizarAnoLivro);



router.delete('/:id', livroController.deletar);

module.exports = router;