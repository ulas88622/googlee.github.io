document.addEventListener('DOMContentLoaded', function() {
    const forgotEmailForm = document.getElementById('forgotEmailForm');

    forgotEmailForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const recoveryInfo = document.getElementById('recoveryInfo').value;

        // Log recovery info to console for now (you would normally send this to a server)
        console.log(`Recovery Info: ${recoveryInfo}`);

        // Simulate an email recovery process
        alert('Recovery email or phone has been submitted. Check your inbox or messages.');
        window.location.href = 'index.html';
    });
});
