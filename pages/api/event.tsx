import { Server } from "Socket.IO"

const SocketHandler = (req, res) => {
  const io = new Server(res.socket.server)
  res.socket.server.io = io
  io.on("connection", (socket) => {
    socket.on("input-change", (msg) => {
      socket.broadcast.emit("update-input", msg)
    })
  })

  res.end()
}

export default SocketHandler
