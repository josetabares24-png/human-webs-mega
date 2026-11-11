(function(){
var d=document,h=d.documentElement;
var b=d.querySelector('.menu-btn'),m=d.getElementById('menu');
if(b){b.addEventListener('click',function(){var o=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',String(!o));m.classList.toggle('open',!o)});
d.addEventListener('keydown',function(e){if(e.key==='Escape'&&m.classList.contains('open')){m.classList.remove('open');b.setAttribute('aria-expanded','false');b.focus()}})}
var st=d.querySelector('.sticky'),hc=d.getElementById('hero-cta');
if(st&&hc&&'IntersectionObserver'in window){new IntersectionObserver(function(e){st.classList.toggle('on',!e[0].isIntersecting)}).observe(hc)}
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches||!('IntersectionObserver'in window))return;
h.classList.add('anim');
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px'});
d.querySelectorAll('.rv').forEach(function(el){io.observe(el)});
})();
