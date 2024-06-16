import { createServer } from 'node:http'

const server = createServer(()=>{
    console.log("Servidor ativo !")
});

server.listen(3000);