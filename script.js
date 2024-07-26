function toggleTheme() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('petitionForm');
    const signatureList = document.getElementById('signatureList');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const firstName = document.getElementById('first-name').value.trim();
        const lastName = document.getElementById('last-name').value.trim();
        
        const newSignature = document.createElement('li');

        if (firstName && lastName) {
            newSignature.textContent = `${firstName} ${lastName}`;
            newSignature.classList.add('valid');
        } else {
            newSignature.textContent = 'Invalid signature';
            newSignature.classList.add('invalid');
        }

        signatureList.appendChild(newSignature);

        if (firstName && lastName) {
            form.reset();
        }
    });
});
