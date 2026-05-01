document.getElementById('year').textContent=new Date().getFullYear();

// reveal animation
const reveals=document.querySelectorAll('.reveal');
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
},{threshold:.1});
reveals.forEach(el=>observer.observe(el));

// mobile menu
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('[data-nav-links]');
if(toggle){
  toggle.addEventListener('click',()=>{
    nav.classList.toggle('open');
  });
}
