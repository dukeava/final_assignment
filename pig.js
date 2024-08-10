function generatePigLatinName() {
    let firstName = document.getElementById('firstName').value.trim();
    let lastName = document.getElementById('lastName').value.trim();

    if(firstName && lastName) {
        let pigLatinFirstName = firstName.slice(1).charAt(0).toUpperCase() + firstName.slice(2).toLowerCase() + firstName.charAt(0).toLowerCase() + 'ay';
        let pigLatinLastName = lastName.slice(1).charAt(0).toUpperCase() + lastName.slice(2).toLowerCase() + lastName.charAt(0).toLowerCase() + 'ay';

        document.getElementById('result').textContent = `Your pig latin name is ${pigLatinFirstName} ${pigLatinLastName}.`;
    } else {
        document.getElementById('result').textContent = "Please enter both first and last names.";
    }
}
