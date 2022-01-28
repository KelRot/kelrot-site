window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("logo").style.width = "150px";
        document.getElementById("navbar").style.margin = "30px 6px 0px 0px";
    } 
    else {
        document.getElementById("logo").style.width = "275px";
        document.getElementById("navbar").style.margin = "140px 6px 0px 0px";
    }
}