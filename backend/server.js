const express = require('express');
const http = require('http');
const mongoose = require('./db');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const projectRoutes = require('./routes/project');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes.router);
app.use('/api/projects', projectRoutes);

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('codeChange', (code) => {
    socket.broadcast.emit('updateCode', code);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
