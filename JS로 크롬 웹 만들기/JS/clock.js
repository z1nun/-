const clock = document.querySelector("h2#clock")



function getTime(){
    const Time = new Date()
    const Hour = String(Time.getHours()).padStart(2,"0")
    const Min = String(Time.getMinutes()).padStart(2,"0")
    const sec = String(Time.getSeconds()).padStart(2,"0")
    clock.innerText = `${Hour}:${Min}:${sec}`
}

getTime()
setInterval(getTime, 1000);

