

async function searchUser(keyword) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!response.ok) {
            throw new Error(`HTTP error! status: $ {response.status}`);
        }
        const users = await response.json();
        console.log(users);

        
        const filteredUsers = users.filter(user => user.title.includes(keyword));
    document.getElementById('searchResults').innerHTML = filteredUsers.map(user => `<p>${user.title}</p>`).join('');
    } catch (error) {
        console.error('Fetch error:', error);
    }
    
}



document.getElementById('searchBox').addEventListener('input', (e) => searchUser(e.target.value));


