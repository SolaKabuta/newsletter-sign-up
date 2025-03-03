document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche l’envoi par défaut

    let mail = document.getElementById("mail");
    let errorMessage = document.getElementById("error-message");

    // Regex de validation email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(mail.value.trim())) {
      errorMessage.style.display = "block";
      mail.style.border = "1px solid hsl(4, 100%, 67%)";
      mail.style.background = "hsl(4, 100%, 97%)";
      
      return; // Bloquer la redirection si email invalide
    } else {
      errorMessage.style.display = "none";
      mail.style.border = ""; 
      mail.style.background = "";
    }

    // Rediriger vers success.html avec l’email dans l’URL (query string)
    const email = encodeURIComponent(mail.value.trim());
    window.location.href = `success.html?mail=${email}`;
  });
