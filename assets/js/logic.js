const toggleButton = document.getElementById("toggle-btn");

function saveBlogPost(blogPost) {
    const blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
    blogPosts.push(blogPost);
    localStorage.setItem("blogPosts", JSON.stringify(blogPosts))
}

function displayBlogPosts() {
    const blogPostsList = document.getElementById("posts");
    const storedBlogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];

    blogPostsList .innerHTML = "";

    for (let i = 0; i < storedBlogPosts.length; i++) {
        const postDiv = document.createElement("div");
        postDiv.className = "blog-post";
        postDiv.innerHTML = `
            <h2>${storedBlogPosts[i].blogTitle}</h2>
            <p>${storedBlogPosts[i].blogText}</p>
            <small>by ${storedBlogPosts[i].username}</small>`;

        blogPostsList.appendChild(postDiv);
    }
}


toggleButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    document.nav.classList.toggle("dark-mode");
    document.input.classList.toggle("dark-mode");
    document.textarea.classList.toggle("dark-mode");
    document.div.classList.toggle("dark-mode");
})

