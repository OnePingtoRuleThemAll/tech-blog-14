// logout function, send request to log the user out
const blogLogout = async () => {
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

const blogLogoutButton = document.querySelector('#blog-logout');
if (blogLogoutButton) {
    blogLogoutButton.addEventListener('click', blogLogout);
}