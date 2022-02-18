let state;
const responsiveNav = document.querySelector(".nav-li-responsive-container");
const menu = document.querySelector("#menu");

const menuFunction = () =>{
    console.log("xd")
    if (state){
        state = false;
        responsiveNav.style.top = "-2500px";
    }else{
        state = true;
        responsiveNav.style.top = "0";
    }
}


menu.addEventListener("click", (err)=>{
    menuFunction();
});