function changeTime() {
    var dt = new Date();
    var str = dt.getHours() % 12 + ":" + dt.getMinutes();
    dt.getHours() % 12 > 0 ? str += " PM" : str += " AM";
    document.querySelector(".timing").textContent = str;
}

function changeDateAndTime() {
    var dt2 = new Date();
    var str = dt2.getDate() + ' / ' + (dt2.getMonth() + 1) + ' / ' + dt2.getFullYear() + "   " + dt2.getHours() % 12 + ":" + dt2.getMinutes();
    dt2.getHours() % 12 > 0 ? str += " PM" : str += " AM";
    document.querySelector(".dt").textContent = str;
}

setInterval(function () {
    changeTime();
    changeDateAndTime();
}, 1000)