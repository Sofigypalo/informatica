<script>
 function saludar() {
 let nombre = document.getElementById("nombre").value;
 alert("¡Hola " + nombre  + "!");
 }
 </script> 
// Capturar y validar género
let radio = document.querySelector('input[name="genero"]:checked');
if (!radio) {
alert('Selecciona un género.');
return;
}
// Determinar saludo
if (radio.value === 'hombre') {
saludo = 'Bienvenido';
} else {
saludo = 'Bienvenida';
}
alert(`${saludo}, ${nombre}`); 