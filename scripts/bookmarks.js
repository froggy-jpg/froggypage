let bookmarks = localStorage.getItem(`bookmarks`)

if (!bookmarks) {
    bookmarksArray = []
    localStorage.setItem(`bookmarks`, JSON.stringify(bookmarksArray))
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

        const bookmark = {
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
}

const button = document.getElementById('createBookmarkBtn');
button.addEventListener(`click`, createBookmark)


