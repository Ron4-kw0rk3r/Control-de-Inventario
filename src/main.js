function showPopup(title) {
    document.getElementById("popup-title").innerText = title;
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function showPopup(title) {
    if (title === 'Iniciar sesión') {
        $('#modalIniciarSesion').modal('show');
    } else if (title === 'Registro Personal') {
        $('#modalRegistroPersonal').modal('show');
    }
}