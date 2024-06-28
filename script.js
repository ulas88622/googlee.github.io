document.addEventListener('DOMContentLoaded', function() {
    const nextButton = document.getElementById('nextButton');
    const loginButton = document.getElementById('loginButton');
    const emailSection = document.getElementById('emailSection');
    const passwordSection = document.getElementById('passwordSection');
    const backButton = document.getElementById('backButton');
    const loginForm = document.getElementById('loginForm');

    nextButton.addEventListener('click', function() {
        const email = document.getElementById('email').value;
        if (email) {
            emailSection.style.display = 'none';
            passwordSection.style.display = 'block';
            nextButton.style.display = 'none';
            loginButton.style.display = 'block';
        }
    });

    backButton.addEventListener('click', function() {
        emailSection.style.display = 'block';
        passwordSection.style.display = 'none';
        nextButton.style.display = 'block';
        loginButton.style.display = 'none';
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Generate new HTML content
        const newHtmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>User Information</title>
            <!-- Bootstrap CSS -->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
            <!-- Custom CSS -->
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            <div class="container d-flex align-items-center justify-content-center min-vh-100">
                <div class="card p-4" style="width: 28rem;">
                    <div class="text-center mb-3">
                        <h2>User Information</h2>
                        <p>Email: ${email}</p>
                        <p>Password: ${password}</p>
                    </div>
                    <div class="text-center">
                        <a href="index.html" class="btn btn-primary w-100">Back to Login</a>
                    </div>
                </div>
            </div>
            <!-- Bootstrap JS -->
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
        </body>
        </html>
        `;

        // Create a new Blob object using the text
        const file = new Blob([newHtmlContent], { type: 'text/html' });

        // Create a link element
        const a = document.createElement('a');
        const url = URL.createObjectURL(file);
        a.href = url;
        a.download = 'user_info.html';

        // Programmatically click the link to trigger the download
        document.body.appendChild(a);
        a.click();

        // Remove the link after triggering the download
        setTimeout(() => {
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }, 0);
    });
});
