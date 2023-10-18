function loginPopup() {
// Obtener los elementos del formulario
  const loginForm = document.getElementById('login-form');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const errorMessage = document.getElementById('error-message');


  loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    const username = usernameInput.value;
    const password = passwordInput.value;

  
    const adminUsername = atob('YWRtaW4='); // ad
    const hashedPassword = '2b9038a7a34a4c5f995c1fa7adcf4c46'; // rob
    
    if (username === adminUsername && md5(password) === hashedPassword) {
      // Credenciales válidas, redirigir a la página de inicio
      window.location.href = '/inicio.html';
    } else {
        const loginPopup = document.getElementById('loginPopup');
        loginPopup.style.backgroundColor = 'red';
        setTimeout(() => {
            loginPopup.style.backgroundColor = '';
        }, 2000);
      
      errorMessage.innerText = 'Error! Credenciales inválidas, por favor inténtalo nuevamente.';
    }
  });

 
}
