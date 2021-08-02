// MANEJO DE NAVBAR
progreso();

window.addEventListener("scroll", function () {
  progreso();
});

function progreso() {
  let progreso = document.documentElement.scrollTop;
  var nav = document.getElementById("nav");
  if (progreso > 40) {
    nav.style.height = "10vh";
  } else if (progreso <= 40) {
    nav.style.height = "20vh";
  }

  let posicion = window.innerHeight - 5;
  var pos = document.getElementsByClassName("a_section");
  var p = Math.floor(progreso / posicion);
  console.log(posicion);
  for (var i = 0; i < 6; i++) {
    if (i == p) {
      pos[i].style.color = "#f7c04f";
    } else {
      pos[i].style.color = "white";
    }
  }
}

// MANEJO DE BOTONES
let botonFormulario = document.querySelector("#btn-form-help");
let botonSuscribe = document.querySelector("#btn-suscribe");
let botonFormularioCerrar = document.querySelector("#btn-form-help-close");
let botonSuscribeCerrar = document.querySelector("#btn-suscribe-close");
let modalFormulario = document.querySelector(".help-modal");
let modalSuscribe = document.querySelector(".suscribe-modal");

botonFormulario.addEventListener("click", (event) => {
  event.preventDefault();

  let nombre=document.querySelector("#nombre");
  let edad=document.querySelector("#edad");
  let email=document.querySelector("#email");
  let radiosi=document.querySelector("#victima-si");
  let radiono=document.querySelector("#victima-no");
  let radionose=document.querySelector("#victima-nolose");
  let mensaje=document.querySelector("#mensaje");

  nombre.value="";
  edad.value="";
  email.value="";
  radiosi.checked=false;
  radiono.checked=false;
  radionose.checked=false;
  mensaje.value="";

  modalFormulario.classList.remove("display-modal");
  //document.querySelector(".contact").classList.add("opacity");
});
botonFormularioCerrar.addEventListener("click", () => {
  modalFormulario.classList.add("display-modal");
});
botonSuscribe.addEventListener("click", (event) => {
  event.preventDefault();
  modalSuscribe.classList.remove("display-modal");
  document.querySelector(".contact").classList.add("opacity");
});
botonSuscribeCerrar.addEventListener("click", () => {
  modalSuscribe.classList.add("display-modal");
  document.querySelector(".contact").classList.remove("opacity");
});
