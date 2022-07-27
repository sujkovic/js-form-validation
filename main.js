let form = document.querySelector('form');
let email = document.querySelector('input#email');
let country = document.querySelector('form')[1];
let zipcode = document.querySelector('form')[2];
let password1 = document.querySelector('form')[3];
let password2 = document.querySelector('form')[4];
let submitBtn = document.querySelector('.btn');
console.log(email);

email.addEventListener('input', () => {
    email.setCustomValidity('');
    email.checkValidity();
});
email.addEventListener('invalid', () => {
    if (email.value === '') {email.setCustomValidity('Please enter an email');}
    else if (email.validity.tooShort) {email.setCustomValidity('Email is too short');}
    else {email.setCustomValidity('Please enter a valid email');}
});

country.addEventListener('input', () => {
    country.setCustomValidity('');
    country.checkValidity();
});
country.addEventListener('invalid', () => {
    if (country.value === '') { country.setCustomValidity('Please enter a country'); }
    else if (country.validity.patternMismatch) { country.setCustomValidity('Please enter a valid country'); }
    else {country.setCustomValidity('Please enter a valid country');}
});

zipcode.addEventListener('input', () => {
    zipcode.setCustomValidity('');
    zipcode.checkValidity();
});
zipcode.addEventListener('invalid', () => {
    if (zipcode.value === '') { zipcode.setCustomValidity('Please enter a zipcode'); }
    else if (zipcode.tooShort || zipcode.tooLong) { zipcode.setCustomValidity('Please enter a valid zipcode'); }
    else { zipcode.setCustomValidity('Please enter a valid zipcode'); }
});

password1.addEventListener('input', () => {
    password1.setCustomValidity('');
    password1.checkValidity();
});
password1.addEventListener('invalid', () => {
    if (password1.value === '') { password1.setCustomValidity('Please enter a password'); }
    else if (password1.validity.patternMismatch) { password1.setCustomValidity('Password must be at least 8 characters and must include at least one uppercase letter, one lowercase letter, and one number'); }
    else {password1.setCustomValidity('Please enter a valid country');}
});

password2.addEventListener('input', () => {
    password2.setCustomValidity('');
    if (password2.value === '') { password2.setCustomValidity('Passwords do not match'); }
    else if (password1.value === password2.value) { password2.setCustomValidity(''); }
    else if (password1.value !== password2.value) { password2.setCustomValidity('Passwords do not match'); }
});


//  prevent validation on load

document.querySelectorAll("form input").forEach(function(element) {
    element.addEventListener('blur', function() {
        // if input field passes validation remove the error class, else add it
        if(this.checkValidity())
            this.classList.remove('error-input');
        else
            this.classList.add('error-input');
    });
});

/* submit event on form */
document.querySelector("form").addEventListener('submit', function(e) {
    // if form has not passed validation 
    if(!this.checkValidity()) {
        // check validation for each input field inside the form
        // if input field is valid then remove the error class, else add it
        this.querySelectorAll("input").forEach(function(element) {
            if(element.checkValidity())
                element.classList.remove('error-input');
            else
                element.classList.add('error-input');
        });

        alert('Error');
        e.preventDefault();
    }
});