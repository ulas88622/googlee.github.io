document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('email');
    const password = urlParams.get('password');

    document.getElementById('userEmail').textContent = email;
    document.getElementById('userPassword').textContent = password;
});
