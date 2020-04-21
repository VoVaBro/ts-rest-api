import http from "http";
import app from "./app";

const server = http.createServer(app);

import { db } from "./database";

function main() {
  db();

  server.listen(process.env.PORT || 5000, () => console.log("server start"));
}

main();
