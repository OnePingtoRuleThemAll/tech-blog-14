// get the post id from the endpoint
const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
];

//update the post
const updateBlogPostFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySeelector("#title-update-blog-post").value.trim();
    const content = document
        .querySelector("#content-update-blog-post")
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
const deleteBlogPostFormHandler = async (event) => {
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
const updateBlogPostButton = document.querySelector("#update-blog-post");

if (updateBlogPost) {
    updateBlogPostButton.addEventListener("click", updateBlogPostFormHandler);
}

const deleteBlogPostButton = document.querySelector("#delete-blog-post");

if (deleteBlogPostButton) {
    deleteBlogPostButton.addEventListener("click", deleteBlogPostFormHandler);
}