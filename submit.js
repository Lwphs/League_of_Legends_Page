let passwordInput = document.getElementById("passwd");
let emailInput = document.getElementById("email");
const invalido = document.getElementById("invalido");
const form = document.getElementById("form");  
const login = document.getElementById("login");

const usersListSection = document.getElementById("users-list");
const userList = document.getElementById("userList");

form.addEventListener("submit", function (event) {
    event.preventDefault();  

    const email = emailInput.value;
    const password = passwordInput.value;

    const hasMinLength = password.length > 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasNum = /[0-9]/.test(password);

    if (hasMinLength && hasUppercase && hasNum) {
        invalido.style.display = "none"; 
        login.style.display = "none";

        if (email === "user@example.com" && password === "Pene12345") {
            fetchUsers();
            
        } else {
            alert("Usuario o contraseña incorrectos");
        }

    } else {
        invalido.style.display = "flex"; 
    }
});

function fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            usersListSection.style.display = "block";  
            userList.innerHTML = "";

            users.forEach(user => {
                let li = document.createElement("li");
                li.textContent = `${user.name} - ${user.email}`;
                userList.appendChild(li);
            });
        })
        .catch(error => {
            console.error("Error fetching users:", error);
        });
}
