// Leipziger kerkelijk jaar: liturgische zondagen worden jaarlijks opnieuw berekend.
// Dates at local 12:00 avoid DST shifts when counting whole days.
export const DAY = 86400000;
const makeDate=(y,m,d)=>new Date(y,m-1,d,12);
export const iso = (date)=>`${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
export const parseDate = (s) => {const [y,m,d]=s.split('-').map(Number);return makeDate(y,m,d);};
export const shift=(date,days)=>makeDate(date.getFullYear(),date.getMonth()+1,date.getDate()+days);
export const gapDays=(later,earlier)=>Math.round((Date.UTC(later.getFullYear(),later.getMonth(),later.getDate())-Date.UTC(earlier.getFullYear(),earlier.getMonth(),earlier.getDate()))/DAY);
export const firstSundayOnOrAfter = (d)=>shift(d,(7-d.getDay())%7);
export const previousSunday = (d)=>shift(d,-d.getDay());
export const dutchDate=(d, opts={})=>new Intl.DateTimeFormat('nl-NL',{day:'numeric',month:'long',year:'numeric',...opts}).format(d);
// Anonymous Gregorian algorithm, valid in modern Gregorian years.
export function easter(year){
 const a=year%19,b=Math.floor(year/100),c=year%100,d=Math.floor(b/4),e=b%4,
 f=Math.floor((b+8)/25),g=Math.floor((b-f+1)/3),h=(19*a+b-d-g+15)%30,
 i=Math.floor(c/4),k=c%4,l=(32+2*e+2*i-h-k+7)%7,
 m=Math.floor((a+11*h+22*l)/451),month=Math.floor((h+l-7*m+114)/31),
 day=((h+l-7*m+114)%31)+1;
 return makeDate(year,month,day);
}
export function firstAdvent(year){
 // Advent I = vierde zondag voor Kerstmis (altijd tussen 27 november en 3 december).
 const christmas=makeDate(year,12,25);
 return shift(previousSunday(shift(christmas,-1)),-21);
}
export const KEYS={
 advent1:'1e zondag van Advent',advent2:'2e zondag van Advent',advent3:'3e zondag van Advent',advent4:'4e zondag van Advent',
 christmas:'Kerstfeest',afterChristmas:'Zondag na Kerst',newYear:'Nieuwjaarsdag',afterNewYear:'Zondag na Nieuwjaar',epiphany:'Epifanie',
 septuagesima:'Septuagesima',sexagesima:'Sexagesima',estomihi:'Estomihi',
 lent1:'Invocavit · 1e lijdenszondag',lent2:'Reminiscere · 2e lijdenszondag',lent3:'Oculi · 3e lijdenszondag',lent4:'Laetare · 4e lijdenszondag',lent5:'Judica · 5e lijdenszondag',palm:'Palmarum · Palmzondag',
 easter:'Paaszondag',easter1:'Quasimodogeniti',easter2:'Misericordias Domini',easter3:'Jubilate',easter4:'Cantate',easter5:'Rogate',easter6:'Exaudi',pentecost:'Pinksteren',trinity:'Trinitatis',
 candlemas:'Maria-Lichtmis / Opdracht in de tempel',annunciation:'Maria-Boodschap',john:'Geboorte van Johannes de Doper',visitation:'Maria-Visitatie',michael:'Michaëlsdag',reformation:'Hervormingsdag',
};
for(let n=1;n<=6;n++) KEYS[`epi${n}`]=`${n}e zondag na Epifanie`;
for(let n=1;n<=27;n++) KEYS[`tri${n}`]=`${n}e zondag na Trinitatis`;
export function occasion(sunday){
 const year=sunday.getFullYear(), s=iso(sunday), easterDay=easter(year), days=gapDays(sunday,easterDay), advent=firstAdvent(year);
 // A fixed feast is only given precedence when it itself falls on Sunday.
 const fixed={"01-01":"newYear","01-06":"epiphany","02-02":"candlemas","03-25":"annunciation","06-24":"john","07-02":"visitation","09-29":"michael","10-31":"reformation","12-25":"christmas"};
 const md=s.slice(5);
 if(fixed[md]) return {key:fixed[md],name:KEYS[fixed[md]],context:'Vaste kerkelijke feestdag op zondag'};
 if(sunday>=advent && sunday<makeDate(year,12,25)){
  const week=Math.floor(gapDays(sunday,advent)/7)+1;const key=`advent${week}`;
  return {key,name:KEYS[key],context:'Advent · begin van het nieuwe kerkelijk jaar'};
 }
 if(sunday.getMonth()===11 && sunday.getDate()>25) return {key:'afterChristmas',name:KEYS.afterChristmas,context:'Kersttijd'};
 if(sunday.getMonth()===0 && sunday.getDate()<6) return {key:'afterNewYear',name:KEYS.afterNewYear,context:'Kersttijd'};
 if(days>=-63 && days<0){
  const keys={"-63":"septuagesima","-56":"sexagesima","-49":"estomihi","-42":"lent1","-35":"lent2","-28":"lent3","-21":"lent4","-14":"lent5","-7":"palm"};
  const key=keys[String(days)];if(key)return {key,name:KEYS[key],context:days<=-42?'Veertigdagentijd':'Voorbereiding op de vastentijd'};
 }
 if(days>=0 && days<=56){
  const keys={0:'easter',7:'easter1',14:'easter2',21:'easter3',28:'easter4',35:'easter5',42:'easter6',49:'pentecost',56:'trinity'};
  const key=keys[days];if(key)return {key,name:KEYS[key],context:days<=42?'Paastijd':days===49?'Pinksteren':'Zondag van de Drie-eenheid'};
 }
 if(days>56 && sunday<advent){
  const n=(days-56)/7,key=`tri${n}`;
  return {key,name:KEYS[key]||`${n}e zondag na Trinitatis`,context:'Tijd na Trinitatis'};
 }
 if(sunday.getMonth()===0 || sunday.getMonth()===1 || sunday.getMonth()===2){
  const epiphany=makeDate(year,1,6), n=Math.ceil(gapDays(sunday,epiphany)/7),key=`epi${Math.max(1,n)}`;
  return {key,name:KEYS[key]||`${n}e zondag na Epifanie`,context:'Tijd na Epifanie'};
 }
 // Defensive fallback for unusual calendars; every Sunday still gets an occasion.
 return {key:'afterChristmas',name:KEYS.afterChristmas,context:'Kersttijd'};
}
export function sundaysOfYear(year){
 const sundays=[];
 for(let date=firstSundayOnOrAfter(makeDate(year,1,1));date.getFullYear()===year;date=shift(date,7)){
  sundays.push({date:iso(date),...occasion(date)});
 }
 return sundays;
}
