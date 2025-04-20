const mensajes = [
  { texto: "Se que esto se te ara raro yo lose", tipo: "received" },
  {
    texto:
      "Solo vengo a despedirme",
    tipo: "received",
  },
  {
    texto: "¿Porque?",
    tipo: "received",
  },
  {
    texto:
      "Creeme que mas que nadie le gustaria explicarte todo esto y que no haya dudas",
    tipo: "received",
  },
  {
    texto:
      "Pero se que las palabras no seran suficientes y que no podre decirte lo que realmente es",
    tipo: "received",
  },
  {
    texto:
      "Solo que sepas",
    tipo: "received",
  },
  { texto: "Perdon por los malos ratos y molestias que te pude aver echo pasar", tipo: "received" },
  { texto: "Cuidate mucho", tipo: "received" },
  { texto: "Te quiero..", tipo: "received" },
];

let indiceMensaje = 0;

const chatBox = document.getElementById("chat-box");
const nextButton = document.getElementById("next-button");

nextButton.addEventListener("click", () => {
  if (indiceMensaje < mensajes.length) {
    const mensaje = mensajes[indiceMensaje];
    agregarMensaje(mensaje.texto, mensaje.tipo, mensaje.imagen);
    indiceMensaje++;
  } else {
    nextButton.disabled = true;
  }
});

function agregarMensaje(texto, tipo, imagen = null) {
  let mensaje = document.createElement("div");
  mensaje.classList.add("message", tipo);
  mensaje.textContent = texto;

  if (imagen) {
    let img = document.createElement("img");
    img.src = imagen;
    img.alt = "Recuerdo especial";
    img.style.maxWidth = "100%";
    mensaje.appendChild(img);
  }

  chatBox.appendChild(mensaje);
  chatBox.scrollTop = chatBox.scrollHeight;
}
