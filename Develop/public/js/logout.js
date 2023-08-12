// logout function, send request to log the user out
const crochetLogout = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('failed to log out');
    }
};

const crochetLogoutButton = document.querySelector('#crochet-logout');
if (crochetLogoutButton) {
    crochetLogoutButton.addEventListener('click', crochetLogout);
}