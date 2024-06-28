document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;

        // Log user info to console for now (you would normally send this to a server)
        console.log(`First Name: ${firstName}`);
        console.log(`Last Name: ${lastName}`);
        console.log(`Email: ${email}`);
        console.log(`Password: ${password}`);

        // Optionally redirect or show a success message
        alert('Account created successfully! Redirecting to login page.');
        window.location.href = 'index.html';
    });
});
