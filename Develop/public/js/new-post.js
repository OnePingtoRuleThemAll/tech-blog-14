//create a new opst
const newCrochetPostFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title-new-crochet-post').value.trim();
    const content = document.querySelector('#content-new-crochet-post').value.trim();

    if (title && content) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('failed to create new post');
        }
    }
};

//event listeners
const newCrochetPostForm = document.querySelector('.new-crochet-post-form');
if (newCrochetPostForm) {
    newCrochetPostForm.addEventListener('submit', newCrochetPostFormHandler);
}