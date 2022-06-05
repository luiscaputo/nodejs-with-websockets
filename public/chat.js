const socket = io();

const urlSearch = new URLSearchParams(window.location.search);
const username = urlSearch.get('username');
const room = urlSearch.get('room');

document.getElementById('form_sender').addEventListener('keypress', (e) => {
    e.preventDefault();
    if(e.key === 'Enter') {
        const message = e.target.value;
        console.log(message);
    }
});

console.log(message);

socket.emit('room', { username, room });
