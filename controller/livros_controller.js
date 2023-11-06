const livrosService = require('../service/livros_service')


function listar(req, res) {
    const listaProdutos = livrosService.listar();
    res.json(listaProdutos);
}

function inserir(req, res) {
    let produto = req.body;
    try {
      livrosService.inserir(produto);
      res.status(201).json({msg:'Inserido com sucesso!'})
    }
    catch(err) {
      res.status(err.id).json({msg: err.message});
    }
}

function buscarPorId(req, res) {
    const id = +req.params.id;
    try {
      const livro = livrosService.buscarPorId(id);
      res.json(livro);
    }
    catch(err) {
      res.status(err.id).json({msg: err.message});
    }
}

function atualizarNomeLivro(req, res) {
    const id = +req.params.id;
    let nome = req.body;
  
    try{ 
      livrosService.atualizarNomeLivro(id, nome);
      res.json({msg:'livro atualizado com sucesso'});
    }
    catch(err) {
      res.status(err.id).json({msg: err.message});
    }
}
function atualizarNomeAutor(req, res) {
    const id = +req.params.id;
    let autor = req.body;
  
    try{ 
      livrosService.atualizarAutorLivro(id, autor);
      res.json({msg:'livro atualizado com sucesso'});
    }
    catch(err) {
      res.status(err.id).json({msg: err.message});
    }
}

function atualizarEditoraLivro(req, res) {
    const id = +req.params.id;
    let autor = req.body;
  
    try{ 
      livrosService.atualizarEditoraLivro(id, autor);
      res.json({msg:'livro atualizado com sucesso'});
    }
    catch(err) {
      res.status(err.id).json({msg: err.message});
    }
}
function atualizarAnoLivro(req, res) {
    const id = +req.params.id;
    let autor = req.body;
  
    try{ 
      livrosService.atualizarAnoLivro(id, autor);
      res.json({msg:'livro atualizado com sucesso'});
    }
    catch(err) {
      res.status(err.id).json({msg: err.message});
    }
}
function buscarNomelivro(res, res){
    const nome = req.body;
    try {
        livro = livrosService.pesquisarPorLikeNome(nome);
        res.json(livro);
    } catch (err) {
        res.status(err.id).json({msg: err.message});
    }
}

function deletar(req, res) {
    const id = +req.params.id;
    try{ 
      const livroDeletado = livrosService.deletar(id);
      res.json(livroDeletado);
    }
    catch(err) {
      res.status(err.id).json({msg: err.message});
    }   
}
module.exports={
    listar,
    inserir,
    buscarPorId,
    atualizarNomeLivro,
    deletar,
    atualizarNomeAutor,
    atualizarEditoraLivro,
    atualizarAnoLivro,
    buscarNomelivro


}