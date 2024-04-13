document.getElementById('form').addEventListener('submit', validar_formulario);


function validar_formulario(event){

    document.getElementById('alerta').hidden = true
    document.getElementById('enviado').hidden = true
    
    event.preventDefault();
    var formData = new FormData(event.target);

    var nombre = formData.get('name');
    var usuario = formData.get('username');
    var email = formData.get('email');
    var password = formData.get('password');
    var sexo = formData.get('sexo');
    var aceptaCondiciones = document.getElementById('habeasData').checked;
    var captchaResponse = grecaptcha.getResponse();

    console.log(nombre)
    console.log(usuario)
    console.log(email)
    console.log(password)
    console.log(sexo)
    console.log(aceptaCondiciones)

    if(!nombre || nombre == null || nombre.length < 8){
        document.getElementById('alerta').innerText = 'Nombre tiene que tener 8 letras como minimo.'
        document.getElementById('alerta').hidden = false
        return
    }

    if(!password || password == null || password.length < 8){
        document.getElementById('alerta').innerText = 'Password tiene que tener 8 letras como minimo.'
        document.getElementById('alerta').hidden = false
        return
    }

    if(!captchaResponse || captchaResponse == null ){
        document.getElementById('alerta').innerText = 'No paso validacion de seguridad.'
        document.getElementById('alerta').hidden = false
        return
    }

    document.getElementById('alerta').hidden = true
    document.getElementById('enviado').hidden = false

}