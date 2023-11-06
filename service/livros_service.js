const livrosRepository = require('../repository/livros_repository')

function listar() {
    return livrosRepository.listar();
}

function inserir(livro) {
    let nomelivro = livrosRepository.pesquisarPorLikeNome(livro.nome);
    if (nomelivro) {
        throw {id:400, message:"nome ja existe"}
    }
    if(livro) {
        if (livro.nome) {
            if (livro.autor) {
                if (livro.editora) {
                    if (livro.isbn) {
                        livrosRepository.inserir(livro);
                    } else {
                        throw {id:400, message:"livro isbn!!!"}
                    };
                } else {
                    throw {id:400, message:"livro sem autor"};
                };
            } else {
                throw {id:400, message:"livro sem email"};
            };
        } else {
            throw {id:400, message:"livro sem nome"};
        };
    }else {
        throw {id:400, message:"erro livro"};
    };
}

function buscarPorId(id) {
    const livro = livrosRepository.buscarPorId(id);
    if(livro) {
        return livro;
    }
    else {
        throw {id:404, message:"livro nao encontrado"};
    }
}
function atualizarNomeLivro(id, nome) {
    const livro = livrosRepository.buscarPorId(id);
    if(!livro) {
        throw {id: 404, message: "livro nao encontrado"};
    }
    
    if(!nome) {
        livrosRepository.atualizarNomeLivro(id,nome);
    }
    else {
        throw {id: 400, message: "livro nao possui nome"};
    }
}
function atualizarAutorLivro(id, autor) {
    const livro = livrosRepository.buscarPorId(id);
    if(!livro) {
        throw {id: 404, message: "livro nao encontrado"};
    }
    
    if(!autor) {
        livrosRepository.atualizarAutorLivro(id,autor);
    }
    else {
        throw {id: 400, message: "autor nao aceito"};
    }
}
function atualizarEditoraLivro(id, editora) {
    const livro = livrosRepository.buscarPorId(id);
    if(!livro) {
        throw {id: 404, message: "livro nao encontrado"};
    }
    
    if(!editora) {
        livrosRepository.atualizarAutorLivro(id,editora);
    }
    else {
        throw {id: 400, message: "editora nao aceita"};
    }
}
function atualizarAnoLivro(id, ano) {
    const livro = livrosRepository.buscarPorId(id);
    if(!livro) {
        throw {id: 404, message: "livro nao encontrado"};
    }
    
    if(!ano) {
        livrosRepository.atualizarAnoLivro(id,ano);
    }
    else {
        throw {id: 400, message: "ano nao aceita"};
    }
}
function deletar(id) {
    const livroDeletado = livrosRepository.deletar(id);
    if(livroDeletado){
        return livroDeletado;
    }
    else {
        throw {id: 404, message: "livro nao encontrado"};
    }
}
function pesquisarPorLikeNome(nome){
    const livro = livrosRepository.pesquisarPorLikeNome(nome);
    if(livro) {
        return livro;
    }
    else {
        throw {id:404, message:"livro nao encontrado"};
    }
}


module.exports = {
    listar,
    inserir,
    buscarPorId,
    deletar,
    atualizarEditoraLivro,
    atualizarAutorLivro,
    atualizarNomeLivro,
    pesquisarPorLikeNome,
    atualizarAnoLivro
}