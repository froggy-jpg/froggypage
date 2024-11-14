const accessKey = 'vXeMJm7TTrxKZH6OkvLHtnC1Y2WngT31jcNZAWvpslU'

async function fetchImage() {
    const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}`);

    const data = await response.json()
        const getAllInfo = data.urls.full
        const image = document.getElementById(`pic`)
        console.log(getAllInfo)
        image.src = `${getAllInfo}`
}   

fetchImage()