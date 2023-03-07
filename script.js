const loadComments = () => {
    const url = `https://jsonplaceholder.typicode.com/comments`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayComments(data.slice(0, 20)))
    .catch(error => console.log(error))
}

const displayComments = comments => {
    const commentContainer = document.querySelector('[data-comments-container]')
    commentContainer.textContent = ''
    comments.forEach(comment => {
        commentContainer.innerHTML += `
        
        <a onclick="loadPost(${comment.postId})" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${comment.name}</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400" title="${comment.body}" >${comment.body.slice(0, 80)}...</p>
        </a>

        `
    });
}

const loadPost = postId => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayPost(data))
    .catch(error => console.log(error))
}

const displayPost = post => {
    const postContainer = document.querySelector('[data-post-container]');

    postContainer.innerHTML = `
    <a class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${post.title}</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400" >${post.body}</p>
    </a>
    `
    console.log(post);
    console.log(postContainer);
}

loadComments()