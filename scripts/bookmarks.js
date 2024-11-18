let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

if (!bookmarks.length) {
    localStorage.setItem(`bookmarks`, JSON.stringify(bookmarks))
}

async function createBookmark() {
        let bookmarks = JSON.parse(localStorage.getItem(`bookmarks`))

        const getName = document.getElementById("nameInput")
        let name = getName.value.trim() 
        const getLink = document.getElementById("linkInput")
        let link = getLink.value.trim() 

        if (!name) {
            console.log("Enter name, smol!!")
            return
        }

        if(!link) {
            console.log("Enter link, smol!!")
            return
        }

        let bookmark = {
            id: Math.random().toString(5).substring(2,9),
            name: name,
            link: link
        }

        if (Array.isArray(bookmarks)) {
            bookmarks.push(bookmark); 
        } else {
            bookmarks = [bookmark];
        }

        localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
        nameInput.value = '';
        linkInput.value = '';
        renderBookmarks()
}

function renderBookmarks() {
    const getBookmarksContainer = document.getElementById('bookmarkContainer');
    document.getElementById('bookmarkContainer').innerHTML="";
    let getUpdatedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

    getUpdatedBookmarks.forEach(bookmark => {
        const bookmarkDiv = document.createElement('div');

        bookmarkDiv.className = 'bookmark';
        bookmarkDiv.innerHTML = `
            <p>Name: ${bookmark.name}</p>
            <a>${bookmark.link}</a>
            <button class="deleteBtn" data-id="${bookmark.id}">Delete</button>
        `

        const deleteBtn = bookmarkDiv.querySelector('.deleteBtn');
        deleteBtn.addEventListener('click', () => deleteBookmark(bookmark.id));

        getBookmarksContainer.appendChild(bookmarkDiv)
    })
}

function deleteBookmark(id) {
    console.log("meow")
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    bookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    renderBookmarks();
}

const button = document.getElementById('createBookmarkBtn');
button.addEventListener(`click`, createBookmark)

renderBookmarks();



