window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 0.5 || document.documentElement.scrollTop > 0.5) {
        document.getElementById("logo").style.width = "150px";
        document.getElementById("navbar").style.margin = "60px 0px 0px 0px";
    } 
    else {
        document.getElementById("logo").style.width = "225px";
        document.getElementById("navbar").style.margin = "100px 0px 0px 0px";
    }
}