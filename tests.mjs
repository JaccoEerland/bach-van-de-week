import assert from 'node:assert/strict';
import {iso,easter,firstAdvent,occasion,parseDate,sundaysOfYear} from './calendar.js';
import {CANTATAS,DAY_TITLES,getCantata,lessonFor} from './data.js';
import {BACH_FACTS,factForDate} from './facts.js';

assert.equal(iso(easter(2024)),'2024-03-31');
assert.equal(iso(easter(2025)),'2025-04-20');
assert.equal(iso(easter(2026)),'2026-04-05');
assert.equal(iso(firstAdvent(2026)),'2026-11-29');
assert.equal(sundaysOfYear(2026).length,52);
assert.equal(sundaysOfYear(2028).length,53);
assert.equal(occasion(parseDate('2026-10-25')).key,'tri21');
assert.equal(getCantata(occasion(parseDate('2026-10-25'))).bwv,'109');
assert.equal(occasion(parseDate('2026-11-29')).key,'advent1');
assert.equal(CANTATAS.advent2.historical,false);
assert.equal(DAY_TITLES.length,7);

for(let y=2000;y<=2100;y++){
 const sundays=sundaysOfYear(y);
 assert.ok([52,53].includes(sundays.length),`zondagenaantal ${y}`);
 const chosen=new Set();
 for(const sunday of sundays){
  assert.ok(CANTATAS[sunday.key],`${sunday.date} mist selectie: ${sunday.key}`);
  const work=getCantata(sunday);
  assert.ok(!chosen.has(work.bwv),`dubbele cantate BWV ${work.bwv} in ${y}`);
  chosen.add(work.bwv);
  for(let d=0;d<7;d++){
   const l=lessonFor(work,sunday,d);
   assert.ok([l.title,l.lead,l.body,l.assignment].every(s=>typeof s==='string'&&s.length>15),`incomplete les: ${sunday.date}, dag ${d}`);
  }
 }
}
assert.ok(BACH_FACTS.length >= 60,'Minimaal zestig gevarieerde Bach-weetjes');
assert.equal(new Set(BACH_FACTS.map(f=>f.title)).size,BACH_FACTS.length,'Dubbele titels');
for(const fact of BACH_FACTS){
 assert.ok(fact.title.length>8 && fact.body.length>70, 'Weetje mist inhoud');
 assert.ok(fact.category && fact.source?.name && /^https:\/\//.test(fact.source?.url||''), 'Weetje zonder geldige bronlink');
}
const d1 = new Date(2026,9,26), d2=new Date(2026,9,27);
assert.equal(factForDate(d1),factForDate(d1),'Stabiel op dezelfde dag');
assert.notEqual(factForDate(d1),factForDate(d2),'Verschilt per dag');
assert.equal(factForDate(d1,1),factForDate(d2),'Volgend weetje werkt');
assert.equal(factForDate(d1,BACH_FACTS.length),factForDate(d1),'Rondgang door alle weetjes');
console.log('OK: 61 Bach-weetjes, unieke titels, bronlinks en dagelijkse wisseling.');
console.log('OK: paasdata, Advent, 52/53 zondagen, 101 kalenderjaren en alle daglessen.');
