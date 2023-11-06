let listalivros = [];
let idGerador = 1;
function listar() {
    return listalivros;
}

function geraId() {
    return idGerador++;
}

function inserir(livro) {
    livro.id = geraId();
    listalivros.push(livro);
}
function buscarPorId(id){
    return listalivros.find(function(livro) {
        return(livro.id === id);        
    })   
}


function atualizar(id, livro) {
    for(let ind in listalivros) {
        if(listalivros[ind].id === id) {
            listalivros[ind] = livro;
            listalivros[ind].id = id;
            return;
        }
    }
}
function atualizarNomeLivro(id, nome) {
    for(let ind in listalivros) {
        if(listalivros[ind].id === id) {
            listalivros[ind].nome = nome;
            listalivros[ind].id = id;
            return;
        }
    }
}
function atualizarAutorLivro(id, autor) {
    for(let ind in listalivros) {
        if(listalivros[ind].id === id) {
            listalivros[ind].autor = autor;
            listalivros[ind].id = id;
            return;
        }
    }
}
function atualizarEditoraLivro(id, editora) {
    for(let ind in listalivros) {
        if(listalivros[ind].id === id) {
            listalivros[ind].editora = editora;
            listalivros[ind].id = id;
            return;
        }
    }
}
function atualizarAnoLivro(id, ano) {
    for(let ind in listalivros) {
        if(listalivros[ind].id === id) {
            listalivros[ind].ano = ano;
            listalivros[ind].id = id;
            return;
        }
    }
}

function deletar(id) {
    for(let ind in listalivros) {
        if(listalivros[ind].id === id) {
            return listalivros.splice(ind,1)[0];
        }
    }
}
function pesquisarPorAutor(autor) {
    return listalivros.filter(
        (livro) => {
            return livro.autor === autor;
        }
    );
}
function pesquisarPorLikeNome(nome) {
    for(let ind in listalivros) {
        if(listalivros[ind].nome === nome) {
            let livro = buscarPorId(listalivros[ind].id)
            return livro;
        }
    }
}

module.exports = {
    listar,
    inserir,
    buscarPorId,
    atualizar,
    deletar,
    atualizarAnoLivro,
    pesquisarPorAutor,
    atualizarEditoraLivro,
    atualizarAutorLivro,
    atualizarNomeLivro,
    pesquisarPorLikeNome
}