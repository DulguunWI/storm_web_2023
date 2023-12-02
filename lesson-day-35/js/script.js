const user = [
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

    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
    },
    
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
    },

    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
    },
        
    
]

//zuvhun 3 huniig hadaglah
const usersSlice = user.slice(0, 3);
//hereglegch haruulah element uusgeh
const userElement = document.createElement('ul');
//hereglegch burt li element uusgeh
usersSlice.forEach(user => {
    const li = document.createElement('li');
    li.textContent = user.name;
    userElement.appendChild(li);
});
//hereglech haruulah element dom-d hiih

document.body.appendChild(userElement);


