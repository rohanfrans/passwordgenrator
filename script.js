document.getElementById('generate').addEventListener('click', function() {
    const length = parseInt(document.getElementById('length').value);
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSpecial = document.getElementById('special').checked;

    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let charset = '';
    if (includeUppercase) charset += upperChars;
    if (includeLowercase) charset += lowerChars;
    if (includeNumbers) charset += numberChars;
    if (includeSpecial) charset += specialChars;

    if (charset === '') {
        alert('Please select at least one character type.');
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById('result').textContent = password;
    document.getElementById('copy').style.display = 'inline'; // Show the copy button
});

// Copy to clipboard function
document.getElementById('copy').addEventListener('click', function() {
    const password = document.getElementById('result').textContent;
    navigator.clipboard.writeText(password).then(() => {
        alert('Password copied to clipboard!');
    }).catch(err => {
        console.error('Error copying to clipboard: ', err);
    });
});
