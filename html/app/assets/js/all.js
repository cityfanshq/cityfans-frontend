window.addEventListener("load",(function(){var e=document.querySelectorAll("ul.nav-tabs > li");function t(e){for(var t=e.currentTarget,r=e.currentTarget.parentNode.parentNode.parentNode,a=r.querySelectorAll("ul.nav-tabs > li"),n=0;n<a.length;n++)a[n].classList.remove("active");t.classList.add("active"),e.preventDefault();var l=r.querySelectorAll(".tab-pane");for(n=0;n<l.length;n++)l[n].classList.remove("active");var c=e.target.getAttribute("href");r.querySelector(c).classList.add("active")}for(i=0;i<e.length;i++)e[i].addEventListener("click",t)}));const scrollers=document.querySelectorAll(".scroller");function addAnimation(){scrollers.forEach((e=>{e.setAttribute("data-animated",!0);const t=e.querySelector(".scroller__inner");Array.from(t.children).forEach((e=>{const r=e.cloneNode(!0);r.setAttribute("aria-hidden",!0),t.appendChild(r)}))}))}window.matchMedia("(prefers-reduced-motion: reduce)").matches||addAnimation();