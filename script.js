
const validEmail = 'tincho@gmail.com';
const validPassword = '123456';


function login(event) {
    
    event.preventDefault();//hace que no refresque la pantalla si ingrese bine los datos

    console.info('me ejecuto');

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value; //en value se guarda el valor que ingreso en la pantalla

    if (email === validEmail && password === validPassword){
        window.location.href = 'inicio.html'//Si el usuario esta bien logueado lo lleva a la página de inicio directamente 
    } else {
         document.getElementById('error').innerHTML = "<span> Usuario o contraseña incorrecta </span>";
    }

}