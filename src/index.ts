import http from "http";
import app from "./app";

const server = http.createServer(app);

import  "./database";


server.listen(process.env.PORT || 5000, () => console.log("server start"));
