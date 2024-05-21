//Validar si el formulario de registro está vacío
function validateRegisterForm() {
    console.log("Dentro de validateRegisterForm()")
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    console.log("email: "+email);
    console.log("password: "+password);

    if (!email || !password) {
    alert("Por favor, complete todos los campos.");
    return false;
    }
    if (password.length < 6) {
    alert("La contraseña debe tener al menos 6 caracteres.");
    return false;
    }
    return true;
}

/*ACTIVIDAD: REGISTRO DE USUARIOS*/
function handleRegister(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const offers = document.getElementById("offers").checked;
    if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return false;
    }
    const result = registerUser(email, password, offers);
        if (result.success) {
        alert(result.message);
        window.location.href = "login.html";
    } else {
        alert(result.message);
    }
    }

// Función para obtener la lista de usuarios desde localStorage
function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}
// Función para guardar la lista de usuarios en localStorage
function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}
// Función para registrar un nuevo usuario
function registerUser(email, password, offers) {

    console.log("Dentro del registerUser: ");

    let users = getUsers();

    console.log("Users: "+users);

// Verificar si el correo electrónico ya está registrado
    let existingUser = users.find((user) => user.email === email);
    if (existingUser) {
        return {
        success: false,
        message: "El correo electrónico ya está registrado.",
        };
    }
// Agregar el nuevo usuario
    users.push({ email, password, offers });
    saveUsers(users);
    return { success: true, message: "Registro exitoso." };
}