const displayDate = setInterval(() => {
    const date = new Date()
    const day = date.getDay()
    const dayOfWeek = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]
    const today = dayOfWeek[day]

    document.getElementsByClassName("date")[0].innerHTML = today
    document.getElementsByClassName("time")[0].innerHTML = date.toLocaleTimeString([], {
        hour: 'numeric',
        minute: 'numeric'
    })
}, 1000)

