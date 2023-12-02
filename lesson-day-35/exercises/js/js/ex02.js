async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
            throw new Error(`HTTP error! status: $ {response.status}`);
        }
        const data = await response.json();
        console.log(data);

        displayData(data);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

function displayData(users) {
    const usersSlice = users.slice(0, 3);
    const userElement = document.createElement('ul');

    usersSlice.forEach(user => {
        const li = document.createElement('li');
        li.textContent = user.name;
        userElement.appendChild(li);
    });
    document.body.appendChild(userElement);
};


fetchData();




