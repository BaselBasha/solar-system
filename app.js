let btn = document.querySelector("button");

window.onscroll = function () {
    if ( scrollY >= 600) {
        btn.style.display ="block";
    } else{
        btn.style.display ="none";
    }
}
btn.onclick = function() {
    window.scrollTo ({
        top: 0,
        behavior: "smooth"
    });
}
