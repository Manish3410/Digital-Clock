function updateClock(){
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    const time = `${hours}:${minutes}:${seconds}`;

    const date = now.toLocaleDateString("en-us", {
        year:"numeric",
        month:"short",
        day:"numeric",
});
document.getElementById("time").innerHTML = time;
document.getElementById("date").innerHTML = date;
}

setInterval(updateClock, 1000);
updateClock();