var index = 0;
var speed = 3;
autoPlay();

function autoPlay() {
	showTab();
    var timer = setInterval(showTab, speed * 1000 + 500);
}

function showTab() {
    var tabs = document.getElementsByClassName("tab");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("tabLeftHover");
        tabs[i].classList.remove("tabRightHover");
    }
    var timer1 = setTimeout(function() {
        for (let i = 0; i < tabs.length; i++) {
            if (i <= index) {
                tabs[i].classList.add("tabLeftHover");
            } else {
                tabs[i].classList.add("tabRightHover");
            }
        }
    }, 500)
    index++;
    if (index > tabs.length - 1) {
        index = 0;
    }
}