let userData = {};

function register() {
    const username = document.getElementById('registerUsername').value;
    const password1 = document.getElementById('registerPassword1').value;
    const password2 = document.getElementById('registerPassword2').value;

    if (password1.length < 8 || password1.length > 10) {
        document.getElementById('registerMessage').textContent = "Must be between 8-10 characters.";
    } else if (password1 !== password2) {
        document.getElementById('registerMessage').textContent = "The passwords must match.";
    } else {
        userData[username] = password1;
        document.getElementById('registerMessage').textContent = `Thank you, ${username}, for registering.`;
    }
}

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (userData[username] && userData[username] === password) {
        document.getElementById('loginMessage').textContent = "Congratulations! You are logged in.";
    } else {
        document.getElementById('loginMessage').textContent = "Your login information does not match those on file. Please try again.";
    }
}
