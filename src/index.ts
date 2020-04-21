import cluster from "cluster";
import os from "os";
import http from "http";
import app from "./app";

const pid = process.pid;

const server = http.createServer(app);

import "./database";

if (cluster.isMaster) {
  const cpu = os.cpus().length;
  console.log(`CPU: ${cpu}`);
  console.log(`Pid: ${pid}`);
  for (let i = 0; i < cpu - 1; i++) {

    const worker = cluster.fork();
    // worker.on('exit', () => {
    //     console.log(`Message from worker ${worker.process.pid}`)
    //     cluster.fork()
    // })
    // worker.send('hello from server')
    // worker.on('message', (msg) => {
    //     console.log(`message from worker ${worker.process.pid}: ${JSON.stringify(msg)}`)
    // })
  }
  cluster.on('exit', (worker, code) => {
        console.log(`Message from worker ${worker.process.pid}, Code: ${code}`)
        if (code === 1){
             cluster.fork()
        }
       
    })
}



if (cluster.isWorker) {
  server.listen(process.env.PORT || 3000, () => console.log(`server start Pid: ${pid}`));
    // process.on('message', (msg) => {
    //     console.log(`${msg}`)
    // })

    process.on("SIGINT", () => {
        console.log('signal SIGINT')
        server.close(() => {
            process.exit(0)
        })
    })

    process.on("SIGTERM", () => {
        console.log('signal SIGTERM')
        server.close(() => {
            process.exit(0)
        })
    })

    process.on("SIGUSR2", () => {
        console.log('signal SIGUSR2')
        server.close(() => {
            process.exit(1)
        })
    })
}
