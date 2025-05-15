const chat = document.getElementById('chat');
const input = document.getElementById('userInput');
const button = document.getElementById('sendBtn');

const respuestas = {
  "¿Qué es la hipertensión?": "La hipertensión es una condición en la que la presión arterial está constantemente por encima de lo normal.",
  "¿Qué hace un neurólogo?": "Un neurólogo es un médico especializado en el diagnóstico y tratamiento de enfermedades del sistema nervioso.",
  "Hola": "¡Hola! ¿En qué puedo ayudarte hoy con tus estudios de medicina?",
  "hola": "¡Hola! ¿En qué puedo ayudarte hoy con tus estudios de medicina?",
};

function agregarMensaje(texto, tipo = 'usuario') {
  const mensaje = document.createElement('div');
  mensaje.className = `p-3 max-w-md rounded-lg ${tipo === 'usuario' ? 'bg-[#3B82F6] text-white self-end' : 'bg-white border self-start'}`;
  mensaje.textContent = texto;
  mensaje.classList.add('whitespace-pre-line');
  chat.appendChild(mensaje);
  chat.scrollTop = chat.scrollHeight;
}

button.addEventListener('click', () => {
  const texto = input.value.trim();
  if (!texto) return;

  agregarMensaje(texto, 'usuario');

  const respuesta = respuestas[texto.toLowerCase()] || "Lo siento, aún no sé responder eso. Pero estoy aprendiendo.";
  setTimeout(() => agregarMensaje(respuesta, 'bot'), 600);

  input.value = '';
});
