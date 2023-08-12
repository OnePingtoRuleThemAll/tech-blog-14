// signup request
const crochetSignupFormHandler = asnync (event) => {
    event.preventDefault();


    const username = document.querySelector('#username').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'apllication/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('failed to sign up');
        }
    }
};

// event listenter
const crochetSignupForm = document.querySelector('#signup-form');
if (crochetSignupForm) {
    crochetSignupForm.addEventListener('submit', crochetSignupFormHandler);
}