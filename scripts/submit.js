let passwordInput = document.getElementById("passwd");
let emailInput = document.getElementById("email");
let invalido = document.getElementById("invalido");
let form = document.getElementById("form");
let login = document.getElementById("login");

const usersListSection = document.getElementById("users-list");
const userList = document.getElementById("userList");

let button = document.getElementById("send");

button.addEventListener("mouseenter", function (event) {
    button.innerHTML = `<img src="assets/arrow_RED.svg" alt="">`
});

button.addEventListener("mouseleave", function (event) {
    button.innerHTML = `<img src="assets/arrow_WHITE.svg" alt="">`
});

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let formData = new FormData(form);
    let data = Object.fromEntries(formData);
    const screenOpacity = document.getElementById("blackscreen");
    let signInBtn = document.getElementById("signIn");

    let validLength = data.passwd.length >= 8;
    let hasUppercase = /[A-Z]/.test(data.passwd);
    let hasNumber = /[0-9]/.test(data.passwd);

    let hasSigned = false;

    if (validLength && hasUppercase && hasNumber) {
        if (data.email === "user@example.com" && data.passwd === "Pene12345") {
            fetchUsers();
            screenOpacity.style.display = "none";
            signInBtn.innerHTML = "SIGNED IN";
            signInBtn.style.backgroundColor = "Green";
            signInBtn.style.pointerEvents = "None";
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

