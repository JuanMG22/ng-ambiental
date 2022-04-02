/*TOMA DE DATOS FORMULARIO Y VALIDACION*/

const form = document.getElementById("Form");

let nombre = document.getElementById("name");
let mail = document.getElementById("email");
let area = document.getElementById("text-area");
let textArea = document.getElementsByClassName("text-area");


form.addEventListener("submit", (e)=>{
    e.preventDefault();

    if(nombre.value == ""){
        nombre.classList.add('error');
        textArea[0].style.display = "block";
    

    nombre.addEventListener("keydown", ()=>{
        textArea[0].style.display = "none"
        nombre.classList.remove('error');
    });

}   else if(email.value == ""){
        mail.classList.add('error');
        textArea[1].style.display = "block";


    mail.addEventListener("keydown", ()=>{
        textArea[1].style.display = "none"
        mail.classList.remove('error');
    });

} else if(area.value == ""){
    area.classList.add('error');
    textArea[2].style.display = "block";


area.addEventListener("keydown", ()=>{
    textArea[2].style.display = "none"
    area.classList.remove('error');
});

} else if(nombre.value !="" && mail.value!="" && area.value!="" ){
    console.log("correcto");

    
Swal.fire({
  icon: 'success',
  width: 200,
  height: 30,
  title: 'Consulta Enviada',
  showConfirmButton: false,
  timer: 1500
});

    nombre.value = "";
    mail.value ="";
    area.value = "";
}





});


