(function(){function p(c){function d(m){a[b].className="";b="right"===m?b<a.length-1?b+1:0:0<b?b-1:a.length-1;m=b<a.length-1?b+1:0;var c=0<b?b-1:a.length-1;a[b].className="current";a[c].className="prev_slide";a[m].className="";f.firstChild.textContent=b+1}var a=c.querySelectorAll("li"),b=0,n=!0,e=document.createElement("nav");e.className="nav_arrows";var g=document.createElement("button");g.className="prev";g.setAttribute("aria-label","Prev");var h=document.createElement("button");h.className="next";
h.setAttribute("aria-label","Next");var f=document.createElement("div");f.className="counter";f.innerHTML="<span>1</span><span>"+a.length+"</span>";1<a.length&&(e.appendChild(g),e.appendChild(f),e.appendChild(h),c.appendChild(e));a[b].className="current";1<a.length&&(a[a.length-1].className="prev_slide");c.addEventListener("mouseenter",function(){n=!1});c.addEventListener("mouseleave",function(){n=!0});setInterval(function(){n&&d("right")},4E3);g.addEventListener("click",function(){d("left")});h.addEventListener("click",
function(){d("right")});document.addEventListener("keydown",function(a){switch(a.keyCode||a.which){case 37:d("left");break;case 39:d("right")}});c.addEventListener("touchstart",function(a){k=a.touches[0].clientX;l=a.touches[0].clientY},!1);c.addEventListener("touchmove",function(a){if(k&&l){var b=k-a.touches[0].clientX;Math.abs(b)>Math.abs(l-a.touches[0].clientY)&&(0<b?d("right"):d("left"));l=k=null}},!1);var k=null,l=null}[].slice.call(document.querySelectorAll(".cd-slider")).forEach(function(c){p(c)})})();