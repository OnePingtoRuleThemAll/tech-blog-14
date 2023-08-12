// get the post id from the endpoint
const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
];

//update the post
const updateCrochetPostFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySeelector("#title-update-crochet-post").value.trim();
    const content = document
        .querySelector("#content-update-crochet-post")
        .value.trim();

        if (title && content) {
            const response = await fetch(`/api/pwsts/${post_id}`, {
                method: "PUT",
                body: JSON.stringify({ title, content }),
                headers: { "Content-Type": "application.json" },
            });

            if (response.ok) {
                document.location.replace("/dashboard"); // when, successful, load the dashboard page
            } else {
                alert("failed to update a post"); //show when unsuccessful
            }
        }
};

// delete post
const deleteCrochetPostFormHandler = async (event) => {
    event.preventDefault();

    const response = await fetch (`/api/posts/${post_id}`, {
        method: "DELETE",
    });

    if (response.ok) {
        document.location.replace("/dashboard"); //load when successful
    } else {
        alert("failed to delete post"); //show when unsuccessful
    }
};

//event lsteners
const updateCrochetPostButton = document.querySelector("#update-crochet-post");

if (updateCrochetPost) {
    updateCrochetPostButton.addEventListener("click", updateCrochetPostFormHandler);
}

const deleteCrochetPostButton = document.querySelector("#delete-crochet-post");

if (deleteCrochetPostButton) {
    deleteCrochetPostButton.addEventListener("click", deleteCrochetPostFormHandler);
}