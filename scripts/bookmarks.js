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

async function renderBookmarks() {
    const getBookmarksContainer = document.getElementById('bookmarkContainer');
    document.getElementById('bookmarkContainer').innerHTML="";
    let getUpdatedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

    getUpdatedBookmarks.forEach(bookmark => {
        const bookmarkDiv = document.createElement('div');

        bookmarkDiv.className = 'bookmark';
        bookmarkDiv.innerHTML = `
            <p>Name: ${bookmark.name}</p>
            <a>${bookmark.link}</a>
            <button class="deleteButton" data-id="${bookmark.id}">Delete</button>
            <button class="editButton" data-id="${bookmark.id}">Edit</button>
            <div class="editMenu" id="edit-${bookmark.id}">
                <input type="text" id="changeName">
                <input type="text" id="changeLink">
                <button id="saveButton"></button>
            </div>
        `

        const deleteButton = bookmarkDiv.querySelector('.deleteButton');
        deleteButton.addEventListener('click', () => deleteBookmark(bookmark.id));
        const editButton = bookmarkDiv.querySelector(`.editButton`)
        editButton.addEventListener(`click`, () => editMenu(bookmark.id))
        getBookmarksContainer.appendChild(bookmarkDiv);
    })
}

async function editMenu(id) {
    const getEditMenuById = document.getElementById(`edit-${id}`)
    getEditMenuById.className = `editMenu.open`
    const saveButton = document.getElementById(`saveButton`)
    saveButton.addEventListener('click', () => updateBookmark(id));
}

async function deleteBookmark(id) {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    bookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    renderBookmarks();
}

async function updateBookmark(id) {
    let nameInput = document.getElementById(`changeName`)
    let linkInput = document.getElementById(`changeLink`)

    const updatedName = nameInput.value.trim();
    const updatedLink = linkInput.value.trim();

    if (!updatedName || !updatedLink) {
        console.log("Name or link cannot be empty!");
        return;
    }

    bookmarks = bookmarks.map(bookmark => {
        if (bookmark.id === id) {
            return { ...bookmark, name: updatedName, link: updatedLink };
        }
        return bookmark;
    });
    const getEditMenuById = document.getElementById(`edit-${id}`)
    getEditMenuById.className = `editMenu`
    renderBookmarks()
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}


const button = document.getElementById('createBookmarkBtn');
button.addEventListener(`click`, createBookmark)

renderBookmarks();



