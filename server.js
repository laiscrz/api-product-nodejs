import { createServer } from 'node:http'

const server = createServer((request, response)=>{
    response.write("Servidor ativo !");

    return response.end();
});

server.listen(3000);