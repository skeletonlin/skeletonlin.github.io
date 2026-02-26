// highlight current nav
(function(){
  const path = location.pathname.replace(/\/+$/,'/') || '/';
  const links = document.querySelectorAll('.nav a[data-path]');
  links.forEach(a=>{
    const p = a.getAttribute('data-path');
    if(p === '/' && path === '/') a.classList.add('active');
    else if(p !== '/' && path.startsWith(p)) a.classList.add('active');
  });
  const y = document.getElementById('y');
  if(y) y.textContent = new Date().getFullYear();
})();
