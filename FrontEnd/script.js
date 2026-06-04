const API = "http://localhost:3000/usuarios";

async function agregarUsuario() {
  const nombre = prompt("Nombre del usuario:");

  if (!nombre) return;

  await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ nombre })
  });

  cargarUsuarios();
}

async function cargarUsuarios() {
  try {
    const res = await fetch(API);
    const data = await res.json();

    const lista = document.getElementById("listaUsuarios");
    lista.innerHTML = "";

    data.forEach(user => {
      const li = document.createElement("li");
      li.textContent = user.nombre;
      lista.appendChild(li);
    });

  } catch (error) {
    console.error("Error:", error);
  }
}

cargarUsuarios();

let likes = 0;
function Titulo() {
    var texto = document.getElementById("titulo");
    texto.innerHTML = "Bien Venidos";
}
function cambiarModo() {
    document.body.classList.toggle("dark");
}
function darLike() {
    likes++;
    document.getElementById("like").innerHTML = likes;
}