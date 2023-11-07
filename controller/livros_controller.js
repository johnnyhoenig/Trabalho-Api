const livrosService = require('../service/livros_service')


function listar(req, res) {
    const listaProdutos = livrosService.listar();
    res.json(listaProdutos);
}

function inserir(req, res) {
    let livro = req.body;
    try {
      livrosService.inserir(livro);
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
    let livro = req.body;
    let nomeLivro = livro.nome;
    // console.log(nome);
    try{ 
      livrosService.atualizarNomeLivro(id, nomeLivro);
      res.json({msg:'livro atualizado com sucesso'});
    }
    catch(err) {
      res.status(err.id).json({msg: err.message});
    }
}
function atualizarNomeAutor(req, res) {
    const id = +req.params.id;
    let autor = req.body;
    let nomeAutor = autor.nome;
  
    try{ 
      livrosService.atualizarAutorLivro(id, nomeAutor);
      res.json({msg:'livro atualizado com sucesso'});
    }
    catch(err) {
      res.status(err.id).json({msg: err.message});
    }
}

function atualizarEditoraLivro(req, res) {
    const id = +req.params.id;
    let editora = req.body;
    let nomeEditora = editora.nome;
  
    try{ 
      livrosService.atualizarEditoraLivro(id, nomeEditora);
      res.json({msg:'livro atualizado com sucesso'});
    }
    catch(err) {
      res.status(err.id).json({msg: err.message});
    }
}
function atualizarAnoLivro(req, res) {
    const id = +req.params.id;
    let livro = req.body;
    let Ano = livro.ano;
    try{ 
      livrosService.atualizarAnoLivro(id, Ano);
      res.json({msg:'livro atualizado com sucesso'});
    }
    catch(err) {
      res.status(err.id).json({msg: err.message});
    }
}
function buscarNomelivro(res, res){
    const livro = req.body;
    const livroNome = livro.nome;
    try {
        livro = livrosService.pesquisarPorLikeNome(livroNome);
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