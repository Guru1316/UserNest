const API_URL = "http://localhost:8080/api/users";

function loadUsers() {
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            const table = document.getElementById("usersTable");
            table.innerHTML = "";

            data.forEach(user => {
                table.innerHTML += `
                    <tr>
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>${user.role}</td>
                        <td>
                            <button class="delete" onclick="deleteUser(${user.id})">Delete</button>
                        </td>
                    </tr>
                `;
            });
        });
}

function addUser() {
    const user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        age: document.getElementById("age").value,
        role: document.getElementById("role").value,
        active: true
    };

    fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    }).then(() => {
        loadUsers();
        document.querySelectorAll("input").forEach(i => i.value = "");
    });
}

function deleteUser(id) {
    fetch(`${API_URL}/${id}`, { method: "DELETE" })
        .then(() => loadUsers());
}

loadUsers();