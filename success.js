document.getElementById('dismiss').addEventListener('click', function(){
    document.getElementById('success-msg').style.display = "none";
})

// FETCH THE VALUE IN MAIL INPUT
window.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const email = params.get('mail');

    if (email) {
        document.getElementById('confirm').textContent = email;
    }
});
