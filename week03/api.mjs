const todo = document.getElementById('todo');

async function getTodo() {
    let todoPlaceHolder = "<ul>";
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const users = await response.json();
        users.forEach(function (user) {
            todoPlaceHolder += `
            <li>Name: ${user.name}
            Email: ${user.email}</li>
            
            <br>
            `;
        })
        todoPlaceHolder += `</ul>`;
        todo.innerHTML = todoPlaceHolder;
    }
    catch (error) {
        console.error('There was a problem fetching the data:', error);
    }

}

todo.textContent = 'Loading...';
getTodo();