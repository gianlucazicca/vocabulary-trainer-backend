import { Server } from "./api/server";
import { createServer, Server as HttpServer } from 'http';
import express from 'express';
import { env } from "./config/global";

function main() {
    const app: express.Application = new Server().app;
    const server: HttpServer = createServer(app);

    server.listen(env.NODE_PORT);
    server.on('listening', () => {
        console.log(`⚡️[server]: Server is running at http://localhost:${env.NODE_PORT} |test| http://localhost:${env.NODE_PORT}/api/v1/`);
    });

};

main();

