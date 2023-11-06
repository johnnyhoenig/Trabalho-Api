const cliente_service = require("./service/cliente_service");
const livros_service = require("./service/livros_service");
const emprestimo = require("./service/emprestimo.service");

function main() {
    let user3={
    nome:'teste',
    email:"teste@teste.com",
    senha:"1111",
    matricula:"1312"};

    cliente_service.inserir(user3);

    let livro = {
        nome:"o homem que calculava",
        isbn:"333",
        autor:"ze",
        editora:"almanaque",
        ano:"2023",
    };
    let livro2 = {
        nome:"origem",
        isbn:"444",
        autor:"brow",
        editora:"arqueiro",
        ano:"nao sei",
    };
    let livro3 = {
        nome:"aaa",
        isbn:"888",
        autor:"aaa",
        editora:"bbb",
        ano:"2023",
    };
    livros_service.inserir(livro3);
    livros_service.inserir(livro2);
    livros_service.inserir(livro);
    
    let user2 ={
        nome : "teste2",
        email : "teste2@teste.com",
        senha : "1111",
        matricula : "1213"};

    cliente_service.inserir(user2);
    
    emprestimo.emprestimo("1213",1)
    // console.log(emprestimo.listarEmprestimo())
    emprestimo.emprestimo("1312",2)
    //console.log(emprestimo.listarEmprestimo())
    // let x = emprestimo.buscarLivroEmprestados("origem")
    // console.log(x.id)
    console.log(emprestimo.devolucao("origem"))
    console.log(emprestimo.listardevolucao())

    
    // {const aluguel1 = new Object();
    //     aluguel1.cliente = user3;
    //     aluguel1.livro = livro;
    //     emprestimo.alugar(aluguel1)
    // };
    // {const aluguel2 = new Object();
    //     aluguel2.cliente = user3;
    //     aluguel2.livro = livro2;
    //     emprestimo.alugar(aluguel2)
    // };
    // {const aluguel2 = new Object();
    //     aluguel2.cliente = user2;
    //     aluguel2.livro = livro3;
    //     emprestimo.alugar(aluguel2)
    // };
    // let li = livros_service.buscarPorId(1)
    // console.log(li)
    // console.log(emprestimo.listarEmprestimo())
    // console.log(emprestimo.buscarNomelivro(li.nome))
    
    // console.log("AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH");
    // console.log(cliente_service.listar());
    // console.log("AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH;");
    // try {
    //     livros_service.inserir(livro);
    // } catch (error) {
    //     console.log(error.message)
    // }
    // console.log("AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH");
    // console.log(livros_service.listar());
    // console.log(livros_service.buscarPorId(2))
    // console.log("AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH");
    // let x = cliente_service.pesquisarPorLikeNome('teste');
    // console.log(x.senha);
    // try {
    //     cliente_service.inserir(user2);
    // } catch (error) {
    //     console.log(error.message)
    // }
    // console.log("AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH");
    // cliente_service.atualizarNome("1213","99999")
    // console.log("AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH");
    // console.log(cliente_service.listar());
    // cliente_service.deletar(1)
    // console.log(cliente_service.listar());
    // console.log(emprestimo.listarEmprestimo());
    // console.log(data);
    // console.log(emprestimo.buscarNomelivro("aaa"));
    // console.log(emprestimo.devolucao(1));
    // console.log("DEVOLUÇAO ||||||||||||||||||||||||||||||||||||||");
    // console.log(emprestimo.listardevoluçao());
    // console.log("DEVOLUÇAO ||||||||||||||||||||||||||||||||||||||");
    // console.log("listar")
    // console.log("Listar: ", cliente_service.listar());   
    // console.log("buscar id")
    // console.log(cliente_service.buscarPorId(2));
    // cliente_service.atualizar(2, { 
    //     nome:"teste2",
    //     email:"teste2@teste.com",
    //     senha:"255",
    //     matricula: "1213"});

    // cliente_service.deletar(1);
    // console.log("buscar id")
    // console.log(cliente_service.buscarPorId(2));
    // console.log(cliente_service.buscarPorMatricula('1213'))
    // // console.log("Listar: ", cliente_service.listar());
    // cliente_service.deletarporMatricula('1312')
    // console.log("listar")
    // console.log("Listar: ", cliente_service.listar());
    // console.log(cliente_service.pesquisarPorLikeNome("teste"))
     
    // console.log("Listar: ", cliente_service.listar());







}
main();