window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("logo").style.width = "200px";
    } 
    else {
        document.getElementById("logo").style.width = "275px";
    }
}