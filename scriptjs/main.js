let animation = document.querySelectorAll(".animation");

const showScroll = () =>{
    let scrollTop = document.documentElement.scrollTop; //cantidad de scroll que hago a medida que bajo
    //aplicar esto para todos los elementos
    for (var i = 0; i<animation.length; i++){
        let animateHeight = animation[i].offsetTop; //offset detecta la alturra desde el inicio de la ventana hasta el comienzo del elemento
        if (animateHeight-280 < scrollTop){
            animation[i].style.opacity = 1;
        }
    }
}

window.addEventListener('scroll', showScroll);

const btnSend = document.getElementById("btn-send");
const password = document.querySelector(".password");
const user = document.querySelector(".user-name");
const comment = document.querySelector(".comment");




btnSend.addEventListener("click", (e) =>{
    e.preventDefault();
    if (user.value != "" && password.value != '' && comment.value != ''){
        alert("Felicidades, se han enviado correctamente los datos!");
    }else{
        alert("No deje campos vacios...")
    }
});

