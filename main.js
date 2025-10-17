
// URL params
const params = new URLSearchParams(location.search);
const nombre = params.get('nombre') || 'Querido invitado';
const pasesParam = params.get('pases') || '1';
const nPases = isNaN(parseInt(pasesParam)) ? 1 : parseInt(pasesParam);
const textoPases = nPases === 1 ? '1 pase' : `${nPases} pases`;

document.getElementById('nombre').textContent = nombre;
const pasesElement = document.getElementById('pases');
if (pasesElement) {
  pasesElement.textContent = `Con mucho cariño hemos reservado ${textoPases} para ti.`;
}

// Links
const mapa = params.get('mapa') || '#';
const regalos = params.get('regalos') || '#';
const whatsapp = params.get('whatsapp') || '#';
const btnMapa = document.getElementById('btn-mapa');
const btnRegalos = document.getElementById('btn-regalos');
const btnRsvp = document.getElementById('btn-rsvp');
if (btnMapa) btnMapa.href = mapa;
if (btnRegalos) btnRegalos.href = regalos;
if (btnRsvp) btnRsvp.href = whatsapp;

// Countdown
const app = document.getElementById('app');
const targetDateParam = params.get('fecha');
const defaultDate = app.getAttribute('data-event-date') || '2025-12-31T18:00:00';
const target = new Date(targetDateParam || defaultDate);

function tick(){
  const now = new Date();
  let diff = Math.max(0, target - now);

  const sec = Math.floor(diff / 1000) % 60;
  const min = Math.floor(diff / (1000*60)) % 60;
  const hour = Math.floor(diff / (1000*60*60)) % 24;
  const day = Math.floor(diff / (1000*60*60*24));

  document.getElementById('d').textContent = String(day).padStart(2, '0');
  document.getElementById('h').textContent = String(hour).padStart(2, '0');
  document.getElementById('m').textContent = String(min).padStart(2, '0');
  document.getElementById('s').textContent = String(sec).padStart(2, '0');
}
tick();
setInterval(tick, 1000);

// Animación overlay
requestAnimationFrame(()=>{
  const ov = document.querySelector('.page:first-child .overlay');
  if (ov) ov.classList.add('loaded');
});
