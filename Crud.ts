import fs from "fs"
import { IncomingMessage, ServerResponse } from "http"
import path from "path"
import http from "http"
import os from "os"

const port : number = 2000

const server = http.createServer((req: IncomingMessage, res: ServerResponse<IncomingMessage>)=>{
    res.writeHead(200);
    const Raw = req.rawHeaders.toString();
    const Browser = Raw.slice(117, 142);
    const Computer = os.cpus()
    const name = (Computer[0].model)
    res.write(`You are contacting me with ${Browser} on ${name}`)
    res.end()
});

server.listen(port, () =>{
    console.log("Listening on port", port);
})

