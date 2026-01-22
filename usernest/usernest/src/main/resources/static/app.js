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
                        <td>${user.age}</td>
                        <td>${user.role}</td>
                        <td>
                            <button class="edit" onclick='editUser(${JSON.stringify(user)})'>Edit</button>
                            <button class="delete" onclick="deleteUser(${user.id})">Delete</button>
                        </td>
                    </tr>
                `;
            });
        });
}

// ADD or UPDATE
function submitUser() {
    const id = document.getElementById("userId").value;

    const user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        age: document.getElementById("age").value,
        role: document.getElementById("role").value,
    };

    if (id) {
        // UPDATE
        fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        }).then(resetForm);
    } else {
        // ADD
        fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        }).then(resetForm);
    }
}

function editUser(user) {
    document.getElementById("formTitle").innerText = "Update User";
    document.getElementById("submitBtn").innerText = "Update User";

    document.getElementById("userId").value = user.id;
    document.getElementById("name").value = user.name;
    document.getElementById("email").value = user.email;
    document.getElementById("age").value = user.age;
    document.getElementById("role").value = user.role;
}

function deleteUser(id) {
    fetch(`${API_URL}/${id}`, { method: "DELETE" })
        .then(loadUsers);
}

function resetForm() {
    document.getElementById("formTitle").innerText = "Add User";
    document.getElementById("submitBtn").innerText = "Add User";

    document.getElementById("userId").value = "";
    document.querySelectorAll("input").forEach(i => {
        if (i.type !== "checkbox") i.value = "";
    });

    loadUsers();
}

loadUsers();