// handler fucntion for login form submission
const crochetLoginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-crochet-login').value.trim();
    const password = document.querySelector('#password-crochet-login').value.trim();

    if (username && password) {

        const response = await fetch('/api/users/login', {
            method:'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {

            alert('failed to login');
        }
    }
};

const crochetLoginForm = document.querySelector('.crochet-login-form');
if (crochetLoginForm) {
    crochetLoginForm.addEventListener('submit', crochetLoginFormHandler);
}