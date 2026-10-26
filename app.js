import {iso,parseDate,previousSunday,shift,dutchDate,occasion,sundaysOfYear} from './calendar.js';
import {CANTATAS,DAY_NAMES,DAY_TITLES,getCantata,lessonFor} from './data.js';
import {factForDate,BACH_FACTS} from './facts.js';

const el=document.getElementById('app');
const today=new Date();
let selectedSunday=iso(previousSunday(today));
let selectedDay=today.getDay();
let currentTab='week';
let overviewYear=today.getFullYear();
let deferredInstall=null;
let factOffset=0;
const KEY='bach-week-progress-v1';
const safeStorage={
 get(){try {return JSON.parse(localStorage.getItem(KEY)||'{}')}catch{return {}}},
 set(v){try{localStorage.setItem(KEY,JSON.stringify(v))}catch{}}
};
let checked=safeStorage.get();
const icons={
 chevronLeft:'<path d="m15 18-6-6 6-6"/>',chevronRight:'<path d="m9 18 6-6-6-6"/>',
 check:'<path d="m20 6-11 11-5-5"/>',calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
 book:'<path d="M12 7v14m0-14C9.5 5.5 7 5 3 5v14c4 0 6.5.5 9 2m0-14c2.5-1.5 5-2 9-2v14c-4 0-6.5.5-9 2"/>',
 headphones:'<path d="M3 14v-3a9 9 0 0 1 18 0v3M3 14v4a2 2 0 0 0 2 2h2v-8H5a2 2 0 0 0-2 2Zm18 0v4a2 2 0 0 1-2 2h-2v-8h2a2 2 0 0 1 2 2Z"/>',
 external:'<path d="M13 5h6v6m0-6-9 9"/><path d="M19 13v6H5V5h6"/>',
 info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7h.01"/>',
 bookmark:'<path d="M5 4h14v17l-7-5-7 5V4Z"/>',
 sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/>',
 arrowUp:'<path d="m7 14 5-5 5 5"/>'
};
const svg=(name,size=20)=>`<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]}</svg>`;
const esc=(x)=>String(x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const weekEntry=()=>{
 const date=parseDate(selectedSunday);
 const oc=occasion(date);
 return {...oc,date,cantata:getCantata(oc)};
};
const allDone=(id)=>DAY_NAMES.filter((_,i)=>checked[`${id}-${i}`]).length;
const isCurrent=(date)=>date===iso(previousSunday(new Date()));
function mark(day){const key=`${selectedSunday}-${day}`;checked[key]=!checked[key];safeStorage.set(checked);render();}
function navWeek(offset){selectedSunday=iso(shift(parseDate(selectedSunday),offset*7));selectedDay=isCurrent(selectedSunday)?new Date().getDay():0;overviewYear=parseDate(selectedSunday).getFullYear();currentTab='week';render();window.scrollTo({top:0,behavior:'smooth'});}
function selectWeek(date){selectedSunday=date;selectedDay=isCurrent(date)?new Date().getDay():0;currentTab='week';render();window.scrollTo({top:0,behavior:'smooth'});}
function btn(text,action,classes=''){return `<button type="button" class="${classes}" data-action="${action}">${text}</button>`;}
function renderHeader(){
 return `<header class="site-header"><div class="identity"><div class="monogram" aria-hidden="true">B</div><div><div class="brand-title">Bach van de Week</div><div class="brand-subtitle">Elke zondag een cantate</div></div></div><button class="icon-button" data-action="today" aria-label="Ga naar deze zondag" title="Ga naar deze zondag">${svg('sun',21)}</button></header>
 <nav class="tabs" aria-label="Hoofdnavigatie"><button class="tab ${currentTab==='week'?'selected':''}" data-action="tab-week">Deze week</button><button class="tab ${currentTab==='year'?'selected':''}" data-action="tab-year">Jaaroverzicht</button><button class="tab ${currentTab==='about'?'selected':''}" data-action="tab-about">Over de app</button></nav>`;
}
function renderFact(){
 const now=new Date();
 const fact=factForDate(now,factOffset);
 const dateText=new Intl.DateTimeFormat('nl-NL',{weekday:'long',day:'numeric',month:'long'}).format(now);
 return `<aside class="fact-card" aria-label="Bach-weetje van vandaag">
   <div class="fact-header"><div class="fact-kicker">${svg('info',17)} BACH-WEETJE</div><span class="fact-date">${esc(dateText)}</span></div>
   <div class="fact-content" aria-live="polite"><div class="fact-category">${esc(fact.category)}</div><h2>${esc(fact.title)}</h2><p>${esc(fact.body)}</p></div>
   <div class="fact-actions"><a href="${esc(fact.source.url)}" target="_blank" rel="noopener noreferrer" class="fact-source">Bron: ${esc(fact.source.name)} ${svg('external',13)}</a><button type="button" class="fact-next" data-action="next-fact">Nog een weetje ${svg('chevronRight',16)}</button></div>
 </aside>`;
}
function renderWeek(){
 const {date,name,context,cantata:c}=weekEntry();
 const weekEnd=shift(date,6);
 const lesson=lessonFor(c,{name},selectedDay);
 const isToday=isCurrent(selectedSunday);
 const count=allDone(selectedSunday);
 const yt=`https://www.youtube.com/results?search_query=${encodeURIComponent(`Bach BWV ${c.bwv} ${c.title} Netherlands Bach Society`)}`;
 const spotify=`https://open.spotify.com/search/${encodeURIComponent(`Bach BWV ${c.bwv} ${c.title}`)}`;
 return `<section class="week-controls" aria-label="Andere zondag"><button data-action="prev-week" class="week-arrow" aria-label="Vorige zondag">${svg('chevronLeft')}</button><span>${dutchDate(date)} – ${new Intl.DateTimeFormat('nl-NL',{day:'numeric',month:'short'}).format(weekEnd)}</span><button data-action="next-week" class="week-arrow" aria-label="Volgende zondag">${svg('chevronRight')}</button></section>
 <section class="hero"><div class="hero-top"><span class="eyebrow">${esc(context)}</span><span class="hero-bwv">BWV ${esc(c.bwv)}</span></div><div class="rule"></div><div class="occasion">${esc(name)}</div><h1 lang="de">${esc(c.title)}</h1><div class="hero-meta"><span>${c.historical?'Historisch gekoppeld':'Thematische selectie'}</span><span>•</span><span>${count} van 7 dagen gelezen</span></div><p class="hero-theme">${esc(c.theme.charAt(0).toUpperCase()+c.theme.slice(1))}.</p></section>
 ${isToday?'<p class="today-line">Dit is de cantate van deze week.</p>':''}
 ${renderFact()}
 <section class="days-block" aria-label="Lessen van deze week"><div class="section-heading"><h2>Zeven dagen verdieping</h2><span class="muted">Kies een dag</span></div><div class="day-selector">${DAY_NAMES.map((name,i)=>{const d=shift(date,i);const active=i===selectedDay,done=!!checked[`${selectedSunday}-${i}`];return `<button class="day ${active?'active':''}" data-day="${i}" aria-pressed="${active}"><span class="day-name">${name.slice(0,2)}</span><span class="day-number">${d.getDate()}</span><span class="day-mark">${done?svg('check',13):'<span class="day-dot"></span>'}</span></button>`}).join('')}</div></section>
 <article class="lesson"><div class="lesson-meta"><span>Dag ${selectedDay+1} van 7</span><span>${esc(DAY_NAMES[selectedDay])}</span></div><h2>${esc(lesson.title)}</h2><p class="lesson-lead">${esc(lesson.lead)}</p><p>${esc(lesson.body)}</p><div class="listening-task"><div class="task-title">${svg('headphones',18)} Luisteropdracht</div><p>${esc(lesson.assignment)}</p></div><button class="done-button ${checked[`${selectedSunday}-${selectedDay}`]?'done':''}" data-action="done">${svg('check',18)} ${checked[`${selectedSunday}-${selectedDay}`]?'Gelezen – markering verwijderen':'Markeer als gelezen'}</button></article>
 <section class="listen-card"><div><span class="eyebrow dark">DEZE CANTATE BELUISTEREN</span><h2>Luister met aandacht</h2><p>Zoek naar een uitvoering van BWV ${esc(c.bwv)}. Historisch geïnformeerde uitvoeringen zijn een goed begin.</p></div><div class="listen-actions"><a href="${yt}" target="_blank" rel="noopener noreferrer" class="listen-link">YouTube ${svg('external',16)}</a><a href="${spotify}" target="_blank" rel="noopener noreferrer" class="listen-link secondary">Spotify ${svg('external',16)}</a></div><p class="microcopy">De links openen zoekresultaten; de app speelt zelf geen opnamen af.</p></section>
 <section class="reference-card"><h3>${svg('book',19)} Tekst en achtergrond</h3><p><strong>Bijbelgedeelten:</strong> ${esc(c.scripture)}</p><p><strong>Historische toewijzing:</strong> ${c.historical?'Bach componeerde of gebruikte deze cantate voor deze kerkelijke gelegenheid.':'Voor deze datum is een verwante cantate gekozen; dit is geen oorspronkelijke Leipzigse bestemming.'}</p></section>`;
}
function renderYear(){
 const sundays=sundaysOfYear(overviewYear);
 return `<section class="year-heading"><span class="eyebrow dark">HET KERKELIJK JAAR</span><h1>Alle zondagen</h1><p>Iedere zondag krijgt een cantate volgens het Lutherse kerkelijk jaar van Bachs Leipzig, met expliciet gemarkeerde uitzonderingen.</p><div class="year-picker"><button data-action="year-prev" aria-label="Vorig jaar">${svg('chevronLeft')}</button><strong>${overviewYear}</strong><button data-action="year-next" aria-label="Volgend jaar">${svg('chevronRight')}</button></div><p class="year-count">${sundays.length} zondagen in ${overviewYear}</p></section>
 <div class="year-list">${sundays.map((s,i)=>{const c=getCantata(s),active=isCurrent(s.date),chosen=s.date===selectedSunday;return `<button class="year-item ${active?'this-week':''} ${chosen?'selected-week':''}" data-week="${s.date}"><div class="date-box"><strong>${parseDate(s.date).getDate()}</strong><span>${new Intl.DateTimeFormat('nl-NL',{month:'short'}).format(parseDate(s.date)).replace('.','')}</span></div><div class="year-description"><strong>${esc(s.name)}</strong><span>BWV ${esc(c.bwv)} · <i lang="de">${esc(c.title)}</i></span><small>${c.historical?'Historische toewijzing':'Thematisch gekozen'}</small></div><span class="year-chevron">${svg('chevronRight',18)}</span></button>`}).join('')}</div>`;
}
function renderAbout(){return `<section class="about"><span class="eyebrow dark">OVER DE APP</span><h1>Bach van de Week</h1><p>Een rustige manier om wekelijks een cantate van Johann Sebastian Bach te beluisteren en dagelijks meer te leren over de muzikale, historische en Bijbelse achtergrond.</p>
 <h2>Hoe wordt de cantate gekozen?</h2><p>Iedere zondag wordt opnieuw berekend op basis van de kalenderdatum, Pasen en de daarop gebaseerde zondagen van het historische Lutherse kerkelijk jaar. De selectie loopt dus niet vanaf een willekeurige startdatum: een kalenderjaar telt 52 of 53 zondagen.</p><p>Voor de reguliere zondagen zijn voornamelijk cantates gekozen die Bach zelf voor die liturgische dag bestemde. Waar dat niet kan, bijvoorbeeld in de Leipziger <em>tempus clausum</em> (de stille periode in Advent en de vastentijd), is duidelijk vermeld dat een werk <strong>thematisch</strong> is gekozen. Dat onderscheid is historisch belangrijk.</p><h2>Bronnen en verdieping</h2><ul><li><a href="https://www.carus-verlag.com/en/composers/bach/cantatas/in-the-church-year/" target="_blank" rel="noopener noreferrer">Carus-Verlag – cantates per liturgische dag</a></li><li><a href="https://www.bach-cantatas.com/LCY/index.htm" target="_blank" rel="noopener noreferrer">Bach Cantatas Website – Lutherse kerkelijk jaar</a></li><li><a href="https://www.bach-cantatas.com/Read/index.htm" target="_blank" rel="noopener noreferrer">Bijbellezingen per gelegenheid</a></li></ul><p>De zeven lessen zijn compacte inleidingen en luistervragen, geen vertalingen van volledige cantateteksten. Voor de Bijbelverwijzingen wordt de HSV aanbevolen; er worden geen verzen letterlijk geciteerd.</p>
 <h2>Op je startscherm</h2><p>Open de app in Chrome op Android, kies in het browsermenu <strong>Toevoegen aan startscherm</strong> of <strong>App installeren</strong>. Daarna opent Bach van de Week als een zelfstandige webapp.</p><p>Op het hoofdscherm staat een dagelijks wisselend Bach-weetje over zijn leven, composities en de latere muziekgeschiedenis. Je kunt ook direct een volgend weetje bekijken. Elk weetje bevat een bronlink. De app heeft ${BACH_FACTS.length} verschillende weetjes.</p><p>Deze app gebruikt geen account, advertenties of meldingen. Gelezen lessen worden uitsluitend op deze telefoon opgeslagen. De lessen en kalender kunnen offline worden geopend nadat de app eenmaal geladen is; voor muzieklinks is internet nodig.</p><button id="install-button" class="done-button hidden" data-action="install">Installeer op telefoon</button>
 <p class="build-note">Bach van de Week · versie 1.1 · gebouwd als open-source PWA</p></section>`;}
function render(){
 document.title='Bach van de Week';
 el.innerHTML=`<div class="app-shell">${renderHeader()}<main id="main-content">${currentTab==='week'?renderWeek():currentTab==='year'?renderYear():renderAbout()}</main><footer><div class="footer-rule"></div><span>JS Bach · Leipzig · iedere zondag</span><span>Met aandacht luisteren</span></footer></div>`;
 const install=document.getElementById('install-button');if(install&&deferredInstall)install.classList.remove('hidden');
}
el.addEventListener('click',async(e)=>{
 const day=e.target.closest('[data-day]');if(day){selectedDay=Number(day.dataset.day);render();return;}
 const week=e.target.closest('[data-week]');if(week){selectWeek(week.dataset.week);return;}
 const action=e.target.closest('[data-action]')?.dataset.action;
 if(!action)return;
 switch(action){
 case 'prev-week':navWeek(-1);break;case 'next-week':navWeek(1);break;
 case 'done':mark(selectedDay);break;
 case 'next-fact':factOffset=(factOffset+1)%BACH_FACTS.length;render();break;
 case 'tab-week':currentTab='week';render();break;
 case 'tab-year':currentTab='year';overviewYear=parseDate(selectedSunday).getFullYear();render();break;
 case 'tab-about':currentTab='about';render();break;
 case 'year-prev':overviewYear--;render();break;case 'year-next':overviewYear++;render();break;
 case 'today':selectedSunday=iso(previousSunday(new Date()));selectedDay=new Date().getDay();overviewYear=new Date().getFullYear();currentTab='week';render();break;
 case 'install':if(deferredInstall){deferredInstall.prompt();await deferredInstall.userChoice;deferredInstall=null;render();}break;
 }
});
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredInstall=e;render();});
window.addEventListener('appinstalled',()=>{deferredInstall=null;render();});
render();
// Ververs de datumkaart wanneer de app opnieuw in beeld komt (bijvoorbeeld na middernacht).
let lastDate=new Date().toDateString();
let lastCurrentSunday=iso(previousSunday(new Date()));
let lastDay=new Date().getDay();
function refreshOnNewDay(){
 const now=new Date(),next=now.toDateString();
 if(next===lastDate)return;
 const wasFollowingWeek=selectedSunday===lastCurrentSunday;
 const wasFollowingDay=selectedDay===lastDay;
 lastDate=next;factOffset=0;
 lastCurrentSunday=iso(previousSunday(now));lastDay=now.getDay();
 if(wasFollowingWeek){
  selectedSunday=lastCurrentSunday;
  if(wasFollowingDay)selectedDay=lastDay;
  overviewYear=now.getFullYear();
 }
 render();
}
window.addEventListener('focus',refreshOnNewDay);
document.addEventListener('visibilitychange',()=>{if(!document.hidden)refreshOnNewDay();});
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));}
