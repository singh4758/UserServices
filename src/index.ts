import Server from './server';

const server: Server = new Server(3000);
server.bootstrap().start();
