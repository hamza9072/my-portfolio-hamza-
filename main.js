// main.js

// set year in footers
const years = document.querySelectorAll('[id^="year"]');
years.forEach(el => el.textContent = new Date().getFullYear());

// mobile nav toggles
function setupNav(toggleId, linksId){
  const btn = document.getElementById(toggleId);
  const links = document.getElementById(linksId);
  if(!btn || !links) return;
  btn.addEventListener('click', () => {
    links.classList.toggle('show');
  });
}
setupNav('navToggle','navLinks');
setupNav('navToggle2','navLinks2');
setupNav('navToggle3','navLinks3');
setupNav('navToggle4','navLinks4');
setupNav('navToggle5','navLinks5');

// gallery modal
const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalClose = document.getElementById('modalClose');

if(galleryItems.length && modal){
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const src = item.dataset.img;
      const title = item.dataset.title || '';
      modalImg.src = src;
      modalTitle.textContent = title;
      modal.classList.add('show');
      modal.setAttribute('aria-hidden','false');
    });
    item.addEventListener('keydown', (e) => { if(e.key === 'Enter') item.click(); });
  });
}

if(modalClose){
  modalClose.addEventListener('click', () => {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden','true');
  });
  modal.addEventListener('click', (e) => {
    if(e.target === modal) { modal.classList.remove('show'); modal.setAttribute('aria-hidden','true'); }
  });
}

// simple contact form behaviour (no backend)
const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const msgEl = document.getElementById('formMsg');

    if(!name || !email || !message){
      msgEl.textContent = 'Please fill all fields.';
      msgEl.style.color = '#ff8b8b';
      return;
    }
    // fallback: open mail client
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:hamza@example.com?subject=${subject}&body=${body}`;
    msgEl.textContent = 'Opening mail client...';
    msgEl.style.color = '#bdecb6';
  });
}
