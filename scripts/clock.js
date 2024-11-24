async function getFirstTime() {
        const date = new Date()
        const day = date.getDay()
        const dayOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
        const today = dayOfWeek[day]
    
        document.getElementsByClassName("date")[0].innerHTML = today
        document.getElementsByClassName("time")[0].innerHTML = date.toLocaleTimeString([("en-GB")], {
            hour: 'numeric',
            minute: 'numeric',
        })
        getUpdatedTime()
}

async function getUpdatedTime() {
    const displayDate = setInterval(() => {
        const date = new Date()
        const day = date.getDay()
        const dayOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
        const today = dayOfWeek[day]
    
        document.getElementsByClassName("date")[0].innerHTML = today
        document.getElementsByClassName("time")[0].innerHTML = date.toLocaleTimeString([("en-GB")], {
            hour: 'numeric',
            minute: 'numeric',
        })
    }, 1000)
}

getFirstTime()