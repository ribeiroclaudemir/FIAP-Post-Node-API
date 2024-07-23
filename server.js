import http from 'http';

const PORT = 3000;

const rotas = {
    '/'  : 'Curso de node',
    '/livros' : 'Entrei na pagina de livros',
    '/autores' : 'Listagem de autores',
    '/editora' : 'Página de editora',
    '/info' : "Sobre o projeto"
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(rotas[req.url]);
});

server.listen(PORT, () => {
    console.log("Servidor escutando!");
});
