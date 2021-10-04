const profile = document.getElementById("fh-profile");
const profileIcon = document.getElementById("fh-profile-icon");
const sidebar = document.getElementById("fh-sidebar");
const options = document.getElementsByClassName("fh-sidebar-option");
const iframe = document.getElementById("fh-iframe");

profile.addEventListener("change", (event) => {
    if(event.target.checked) {
        profileIcon.style.transform="scale(1.70) translateY(35px) translateX(10px)";
        setTimeout(() => {
            sidebar.style.width = "650px";
        }, 500);
    }
    else {
        profileIcon.style.transform="scale(1) translateY(0px) translateX(0px)";
        setTimeout(() => {
            sidebar.style.width = "400px";
        }, 500);
    }
})

function changePage(link){
    iframe.src = link;
}

let indexes = [0,1,2,3];
indexes.map(option => {
    switch(option){
        case 0: options[0].addEventListener("click", () => {changePage("./DashboardContent.html")});
        break;
        case 1: options[1].addEventListener("click", () => {changePage("./Leaderboard.html")});
        break;
        case 2: options[2].addEventListener("click", () => {changePage("./group.html")});
        break;
        case 3: options[3].addEventListener("click", () => {changePage("./notifications.html")});
        break;
        default: console.log(index);
    }
})