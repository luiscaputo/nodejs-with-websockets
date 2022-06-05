import { io } from './http';

interface User {
    room: string;
    username: string;
    socket_id: string;
}

const users: User[] = [];

io.on('connection', (socket) => {  
    socket.on("room", (data) => {
        socket.join(data.room);

        const usersInRoom = users.find(user => user.username === data.username && user.room === data.room);

        if(usersInRoom) {
            usersInRoom.socket_id = socket.id;
        }else{
            users.push({
                room: data.room,
                username: data.username,
                socket_id: socket.id
            });
        }
        console.log(users)
    });
});