//your JS code here. If required.
setInterval(()=>{
        let time = document.getElementById("timer")
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let date1 = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear()
    let timeZone = "AM"

    if(hr>12){
        hr = hr-12;
        timeZone = "PM"
    }
    time.innerText= `${month}/${date1}/${year},${hr}:${min}:${sec} ${timeZone}`  
    },1000)