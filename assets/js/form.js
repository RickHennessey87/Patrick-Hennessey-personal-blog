const form = document.getElementById("form");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const blogTitle = document.getElementById("blog-title").value;
    const blogText = document.getElementById("blog-text").value;

    console.log(username, blogTitle, blogText)

    if (!username || !blogTitle || !blogText) {
        message.textContent = "Please complete the full form to post."
        return;
    }

    const blogPost = { username, blogTitle, blogText}
    saveBlogPost(blogPost);
    window.location.href = "blog.html"
})