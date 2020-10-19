var slideIndex = 0;
showSlides();
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000); 

    
}

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }
// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("dot");
//     if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += " active";
// }

document.getElementById("form").onsubmit= function(){
    var regexName = /^[a-zA-Z ]{2,30}$/;
    var regexEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    //name
        var name = document.getElementById("nombreformI").value;
        if(name == ""){
            alert("Datos incorrectos");
            return false;
        }
        if(!regexName.test(name)){
            alert("Datos incorrectos");
            return false;
        }
    //lastname
    var lastname = document.getElementById("apellidoformI").value;
    if(lastname == ""){
        alert("Datos incorrectos");
        return false;
    }
    if(!regexName.test(lastname)){
        alert("Datos incorrectos");
        return false;
    }
    //email
    var email = document.getElementById("emailformI").value;
    if(email == ""){
        alert("Datos incorrectos");
        return false;
    }
    if(!regexEmail.test(email)){
        alert("Datos incorrectos");
        return false;
    }
    //message
    var message = document.getElementById("mensajeformI").value;
    if(message == ""){
        alert("Datos incorrectos");
        return false;
    }

    console.log("nombre"+name+"\napellido:"+lastname+"\nemail:"+email+"\nmensaje:"+message)
    alert("Su solicitud ha sido enviada")
    console.log("nombre"+name+"\napellido:"+lastname+"\nemail:"+email+"\nmensaje:"+message)
    return true;
}