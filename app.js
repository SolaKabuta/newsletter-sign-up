



document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le formulaire d’être envoyé par défaut

let mail = document.getElementById('mail');
let errorMessage = document.getElementById('error-message');

        if (mail.value === "") {
           errorMessage.style.display = 'block';
           mail.style.border = '1px solid hsl(4, 100%, 67%)'
           mail.style.background = 'hsl(4, 100%, 97%)'
           mail.classList.add('mail-placeholder')
           return;
        } 
        

    this.submit()
});


document.getElementById('dismiss').addEventListener('click', function(){
    document.getElementById('success-msg').style.display = "none"
})