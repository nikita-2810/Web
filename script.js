document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    // Display the sent message
    document.getElementById('displayName').textContent = name;
    document.getElementById('displayMessage').textContent = message;
    document.getElementById('sentMessage').style.display = 'block';

    // Clear the form
    document.getElementById('messageForm').reset();
});
