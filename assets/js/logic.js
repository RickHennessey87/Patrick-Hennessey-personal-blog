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

    for (let i = storedBlogPosts.length - 1; i >= 0; i--) {
        const postDiv = document.createElement("div");
        postDiv.className = "blog-post";
        postDiv.innerHTML = `
            <h2>${storedBlogPosts[i].blogTitle}</h2>
            <p>${storedBlogPosts[i].blogText}</p>
            <small>by ${storedBlogPosts[i].username}</small>`;

        blogPostsList.appendChild(postDiv);
    }
}

function setColors(mode) {
    const isDark = mode === "dark";

    document.body.classList.toggle("dark-mode", isDark);

    document.querySelector('nav').classList.toggle("dark-mode", isDark);
    document.querySelectorAll('input').forEach(input => input.classList.toggle("dark-mode", isDark));
    document.querySelectorAll('textarea').forEach(textarea => textarea.classList.toggle("dark-mode", isDark));
    document.querySelectorAll('div').forEach(div => div.classList.toggle("dark-mode", isDark));
    document.querySelectorAll('label').forEach(label => label.classList.toggle("dark-mode", isDark));
    document.querySelectorAll('h2').forEach(h2 => h2.classList.toggle("dark-mode", isDark));
}


toggleButton.addEventListener("click", function() {
    const isDark = document.body.classList.toggle("dark-mode");
    localStorage.setItem("mode", isDark ? "dark-mode" : "light");
    setColors(isDark ? "dark" : "light");
});

window.onload = function() {
    displayBlogPosts();

    const savedMode = localStorage.getItem("mode") || "light";
    setColors(savedMode);
}