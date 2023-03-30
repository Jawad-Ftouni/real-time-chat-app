import express from "express";
import http from "http";
import cors from "cors";
import { Server, Socket } from "socket.io";
import dotenv from "dotenv";
dotenv.config();

let app = express();

app.use(cors);

let server = http.createServer(app);

let io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["POST", "GET"],
  },
});

io.on("connection", (socket: Socket) => {
  console.log("user:" + socket.id + " connectted");

  socket.on("disconnect", () => {
    console.log(socket.id);
  });
});

const PORT: number = parseInt(process.env.PORT || "4000", 10);

server.listen(PORT, () => {
  console.log("server working on port :" + PORT);
});
