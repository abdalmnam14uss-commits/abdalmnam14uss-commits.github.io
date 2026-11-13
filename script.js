const intro=document.getElementById('intro');
const codeScreen=document.getElementById('codeScreen');
const welcomeScreen=document.getElementById('welcomeScreen');
const typedCode=document.getElementById('typedCode');
const loadBar=document.getElementById('loadBar');
const loadPercent=document.getElementById('loadPercent');
const enterBtn=document.getElementById('enterBtn');
const nav=document.getElementById('nav');
const menuToggle=document.getElementById('menuToggle');

// Type the opening code, then reveal the welcome screen.
const codeLines=[
  '<span class="code-purple">const</span> developer = {',
  '  name: <span class="code-green">"Abdel Monem"</span>,',
  '  field: <span class="code-green">"Software Engineering"</span>,',
  '  location: <span class="code-green">"Amman, Jordan"</span>,',
  '  mindset: <span class="code-green">"Always learning"</span>',
  '};',
  '',
  '<span class="code-purple">function</span> <span class="code-blue">buildFuture</span>() {',
  '  <span class="code-purple">return</span> learn() + create() + grow();',
  '}'
];
let line=0,char=0,plain='';
function typeNext(){
  if(line>=codeLines.length){setTimeout(showWelcome,650);return;}
  const current=codeLines[line].replace(/<[^>]*>/g,'');
  if(char<current.length){plain+=current[char++];typedCode.textContent=plain;const progress=Math.min(100,Math.round((plain.length/260)*100));loadBar.style.width=Math.max(progress,Math.round(((line+char/current.length)/codeLines.length)*100))+'%';loadPercent.textContent=Math.max(progress,Math.round(((line+char/current.length)/codeLines.length)*100))+'%';setTimeout(typeNext,24);}
  else{plain+='\n';line++;char=0;typedCode.textContent=plain;setTimeout(typeNext,180);}
}
function showWelcome(){codeScreen.classList.add('done');setTimeout(()=>{codeScreen.style.display='none';welcomeScreen.classList.add('show');welcomeScreen.setAttribute('aria-hidden','false');},650);}
window.addEventListener('load',()=>setTimeout(typeNext,450));
enterBtn.addEventListener('click',()=>{intro.classList.add('hide');document.body.classList.remove('intro-active');});
menuToggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.textContent=open?'×':'☰';});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');menuToggle.textContent='☰';}));
document.getElementById('year').textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const sections=[...document.querySelectorAll('main section[id]')];
const links=[...document.querySelectorAll('#nav a[href^="#"]')];
const sectionObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id));}}),{rootMargin:'-35% 0px -55% 0px'});
sections.forEach(section=>sectionObserver.observe(section));
