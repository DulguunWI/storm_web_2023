const users = [
    
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
    },

    
    {
        id: 2,
        name: 'Ervin Howel',
        username: 'Antonette',
    },

    {
        id: 3,
        name: 'Clementine',
        username: 'Samantha',
    },
    
]

//hereglegch haidaf funkts

function searchUser(keyword) {
    const filteredUsers = users.filter(user => user.name.includes(keyword));
    document.getElementById('searchResults').innerHTML = filteredUsers.map(user => `<p>${user.name}</p>`).join('');
}

//search hailtin ur dun haruulah element

document.getElementById('searchBox').addEventListener('input', (e) => searchUser(e.target.value));