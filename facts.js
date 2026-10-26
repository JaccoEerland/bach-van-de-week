// Korte, zelfstandig leesbare Bach-weetjes. Ieder feit bevat een bronverwijzing.
// De volgorde biedt afwisseling tussen levensloop, werken, muziekpraktijk en receptiegeschiedenis.
export const FACT_SOURCES={
 chronology:{name:'Bach-Archiv Leipzig · chronologie',url:'https://www.bachmuseumleipzig.de/en/neutral/johann-sebastian-bach-%E2%94%80-chronology'},
 heritage:{name:'Nederlandse Bachvereniging · erfenis',url:'https://www.bachvereniging.nl/erfenis'},
 life:{name:'Nederlandse Bachvereniging · leven',url:'https://www.bachvereniging.nl/het-leven-van-bach-vervolg'},
 works:{name:'Bach-Archiv Leipzig · het oeuvre',url:'https://www.bachmuseumleipzig.de/en/node/1481'},
 continuo:{name:'Nederlandse Bachvereniging · de barok',url:'https://www.bachvereniging.nl/thema-erfenis'},
 musicfree:{name:'Bach-Archiv Leipzig · stille perioden',url:'https://www.bachmuseumleipzig.de/en/bach-museum/museumfromhome-1'},
 bwv147:{name:'Nederlandse Bachvereniging · BWV 147',url:'https://www.bachvereniging.nl/nl/bwv/bwv-147'},
 mendelssohn:{name:'Bach-Archiv Leipzig · Matthäus-Passion',url:'https://www.bachmuseumleipzig.de/sites/default/files/files/2024_03_Act%201.pdf'},
 museum:{name:'Bach-Archiv Leipzig · museum en archief',url:'https://www.bach-leipzig.de/en/neutral/history-leipzig-bach-archive'}
};

// [categorie, titel, toelichting, broncode]
const entries=[
 ['Jeugd','Een muzikaal familiehuis','Bach werd in 1685 geboren in Eisenach. In het ouderlijk huis waren ook kamers voor jonge musici in opleiding: muziek maakte van jongs af aan deel uit van het dagelijks leven.','chronology'],
 ['Muziek','De basso continuo','Een barokensemble heeft vaak een doorlopende baslijn met instrumenten die de akkoorden invullen. Die basso continuo hoor je ook in veel cantates: het muzikale fundament blijft zelfs onder een enkele solostem aanwezig.','continuo'],
 ['Nalatenschap','Beroemd na zijn dood','Bach was bij leven vooral bekend als organist en improvisator. Zijn wereldwijde roem als componist groeide vooral in de eeuwen na 1750.','heritage'],
 ['Leipzig','Elke week nieuwe muziek','Vanaf 1723 moest Bach in Leipzig de kerkmuziek voor zondag en feestdagen verzorgen. In zijn eerste jaren componeerde hij veel cantates op een hoog tempo.','chronology'],
 ['Biografie','Al jong wees','In 1694 verloor Bach zijn moeder en in 1695 zijn vader. De tienjarige Johann Sebastian ging bij zijn oudere broer Johann Christoph in Ohrdruf wonen.','chronology'],
 ['Nalatenschap','Mendelssohns grote impuls','Op 11 maart 1829 dirigeerde de twintigjarige Felix Mendelssohn de Matthäus-Passion in Berlijn. Die uitvoering speelde een belangrijke rol in de negentiende-eeuwse Bachrenaissance.','mendelssohn'],
 ['Muziek','Wat is een koraalcantate?','Bij Bachs koraalcantates vormt een bestaand kerklied de basis. De melodie klinkt vaak duidelijk in het eerste en laatste deel, terwijl tussenliggende delen vrijer met tekst en muziek omgaan.','chronology'],
 ['Leven','Een voetreis naar Lübeck','Bach bezocht rond 1705–1706 de beroemde organist Dietrich Buxtehude in Lübeck. Hij bleef veel langer dan toegestaan en kreeg bij terugkomst een berisping.','chronology'],
 ['Muziekgeschiedenis','BWV is geen jaartelling','BWV staat voor Bach-Werke-Verzeichnis. De nummering rangschikt zijn werken grotendeels naar genre en niet op datum van compositie; een laag BWV-nummer betekent dus niet automatisch een vroeg werk.','works'],
 ['Leipzig','Niet Bachs eerste keuze?','Bach was niet de eerste kandidaat van de stad Leipzig. Eerst wilde de raad Telemann, daarna Graupner; pas daarna werd Bach Thomascantor.','chronology'],
 ['Instrumenten','Een instrumentaal fundament','Bij een uitvoering met basso continuo kan bijvoorbeeld een cello de baslijn spelen, terwijl een orgel of klavecimbel de harmonieën realiseert. De bezetting varieert per werk.','continuo'],
 ['Nalatenschap','De eerste Bachbiografie','Johann Nikolaus Forkel publiceerde in 1802 een vroege biografie van Bach. Hij gebruikte onder meer informatie van twee van Bachs muzikale zoons.','heritage'],
 ['Jeugd','Bach zong zelf in een koor','Als jongen zong Bach in het schoolkoor in Ohrdruf. Later studeerde hij in Lüneburg, waar hij eveneens als koorzanger verbonden was aan een school.','chronology'],
 ['Muziek','De Johannes-Passion','Bachs Johannes-Passion werd voor het eerst uitgevoerd op Goede Vrijdag, 7 april 1724, in zijn eerste Leipziger ambtsjaar.','chronology'],
 ['Nalatenschap','Muziek bleef in de familie','Na Bachs overlijden werden partituren en stemmen onder zijn erfgenamen verdeeld. Daardoor raakten manuscripten verspreid en gingen sommige werken verloren.','heritage'],
 ['Leven','Een maand gevangen','Toen Bach in 1717 van Weimar naar Köthen wilde vertrekken zonder toestemming van zijn werkgever, werd hij wegens ongehoorzaamheid een maand vastgezet.','chronology'],
 ['Leipzig','Concerten in een koffiehuis','Bach leidde vanaf 1729 het Collegium Musicum. Dat gaf concerten in Café Zimmermann, een bekend koffiehuis in Leipzig, en in de zomer ook buiten.','chronology'],
 ['Muziek','De Matthäus-Passion','De vroegste versie van Bachs Matthäus-Passion werd volgens de chronologie van het Bach-Archiv op 11 april 1727 uitgevoerd.','chronology'],
 ['Invloed','Bach in populaire muziek','Ook popmusici lieten zich door Bach inspireren. De Nederlandse Bachvereniging noemt bijvoorbeeld invloeden bij Paul McCartney en Simon & Garfunkel.','heritage'],
 ['Biografie','Twee huwelijken','Bach trouwde in 1707 met Maria Barbara Bach. Na haar overlijden in 1720 huwde hij in 1721 de zangeres Anna Magdalena Wilcke.','chronology'],
 ['Leipzig','Kerk én school','Als Thomascantor was Bach niet alleen verantwoordelijk voor kerkmuziek; hij werkte ook in de omgeving van de Thomasschule en gaf onderwijs.','life'],
 ['Nalatenschap','De Bach-Gesellschaft','In 1850 werd in Leipzig de Bach-Gesellschaft opgericht om een wetenschappelijk verantwoorde uitgave van Bachs werken te publiceren.','works'],
 ['Muziek','Een kerstwerk in zes delen','Het Weihnachtsoratorium bestaat uit zes cantates. De delen werden tussen Eerste Kerstdag 1734 en Driekoningen 1735 op verschillende feestdagen uitgevoerd.','chronology'],
 ['Leven','Bach begon als violist','In 1703 werkte de jonge Bach ongeveer een halfjaar als violist bij het hoforkest in Weimar. Zijn loopbaan begon dus niet uitsluitend achter het orgel.','chronology'],
 ['Nalatenschap','Mozart en Beethoven','Bachs klaviermuziek en contrapunt bleven ook na zijn dood onder musici leven. Componisten als Mozart en Beethoven bestudeerden en bewonderden zijn werk.','heritage'],
 ['Instrumenten','Waarom een hobo?','In veel cantates heeft de hobo een opvallende solistische rol. Let eens op hoe een melodische houtblazer een gezongen tekst lijkt te beantwoorden.','life'],
 ['Biografie','Een afwezige echtgenoot','Toen Bach in 1720 terugkeerde van een reis met zijn werkgever, hoorde hij dat Maria Barbara al was overleden en begraven. De precieze doodsoorzaak is onbekend.','chronology'],
 ['Leipzig','Stilte in de vastentijd','In Bachs Leipzig klonken tijdens veel zondagen van Advent en de lijdenstijd geen gewone feestelijke cantates. De stilte gaf mede ruimte om de grote passies voor te bereiden.','musicfree'],
 ['Nalatenschap','Een Nederlandse traditie','In Nederland groeide de jaarlijkse uitvoering van de Matthäus-Passion rond Pasen uit tot een bijzonder sterke traditie, met veel koren en orkesten.','heritage'],
 ['Muziek','Een Cantate voor de gemeenteraad','De cantate Gott ist mein König (BWV 71) klonk in 1708 bij de installatie van de stadsraad van Mühlhausen. Het werk werd al tijdens Bachs leven gedrukt.','chronology'],
 ['Biografie','Een muzikale peetvader','De componist Georg Philipp Telemann werd in 1714 peetvader van Carl Philipp Emanuel Bach, een van Bachs later beroemde zonen.','chronology'],
 ['Muziekgeschiedenis','De oude Bach-uitgave','De Bach-Gesellschaft voltooide haar grote editie in 1899 met het 46e deel. Het project vormde lang de basis voor uitvoeringen en onderzoek.','works'],
 ['Leipzig','Het koffiehuis en een cantate','De beroemde Kaffeekantate (BWV 211) past bij Bachs wereld buiten de kerk. Zij werd geschreven voor een bijzondere concertgelegenheid rond het Collegium Musicum.','chronology'],
 ['Instrumenten','Een recitatief is anders','Een recitatief volgt de natuurlijke spraak en wordt vaak spaarzaam begeleid. Een aria gebruikt doorgaans een duidelijker muzikale vorm om één gedachte uit te werken.','continuo'],
 ['Muziek','Cantates met dezelfde melodie','In zijn tweede Leipziger cantatejaargang (vanaf 1724) gebruikte Bach veel kerkliederen als uitgangspunt. De melodie kon in rijke meerstemmigheid worden verwerkt.','chronology'],
 ['Nalatenschap','Het BWV verscheen in 1950','Wolfgang Schmieder stelde het Bach-Werke-Verzeichnis samen. Het verscheen in 1950 en werd het standaardhulpmiddel om Bachs composities aan te duiden.','works'],
 ['Leven','Een orgeldeskundige','Bach beoordeelde en keurde nieuwe orgels. Zijn technische kennis van orgelbouw hielp zijn reputatie als musicus en bracht hem opdrachten.','life'],
 ['Muziek','Een werk dat later veranderde','BWV 147 begon als een Weimarse adventscantate. Bach breidde het werk in Leipzig uit voor Maria-Visitatie in 1723, onder meer met het later zo beroemde koraal.','bwv147'],
 ['Nalatenschap','Een archief sinds 1950','Het Bach-Archiv in Leipzig werd op 20 november 1950 opgericht, precies tweehonderd jaar na Bachs sterfjaar. Het verzamelt en bestudeert bronnen over zijn leven en werk.','museum'],
 ['Leipzig','Bach klaagde over de bezetting','In 1730 stuurde Bach de stadsraad een uitvoerig memorandum over de benodigde musici en middelen. Het laat zien hoe praktisch zijn werk als cantor was.','chronology'],
 ['Leven','Koninklijke erkenning','In 1736 kreeg Bach de titel van hofcomponist van het keurvorstelijke Saksische en koninklijke Poolse hof. Die titel versterkte zijn maatschappelijke positie.','chronology'],
 ['Muziek','Een koninklijk thema','In 1747 speelde Bach voor Frederik II van Pruisen. De koning gaf hem een thema om op te improviseren; dat werd de aanleiding voor Das Musikalische Opfer.','chronology'],
 ['Nalatenschap','De Nieuwe Bach-uitgave','Vanaf 1950 werkten onderzoekers aan de Neue Bach-Ausgabe. Het laatste deel van deze omvangrijke wetenschappelijke editie verscheen in 2007.','works'],
 ['Biografie','Een verloren sollicitatie','In 1702 leek Bach een organistenpost in Sangerhausen te krijgen. De plaatselijke vorst greep in, waarna de baan toch naar iemand anders ging.','chronology'],
 ['Muziek','Een komische kant van Bach','Niet alle cantates zijn kerkelijk. De Kaffeekantate is een wereldlijk, humoristisch werk over de aantrekkingskracht van koffie.','chronology'],
 ['Nalatenschap','Bach in jazz','Jazzpianisten zoals Jacques Loussier en Brad Mehldau lieten horen hoe Bachs harmonieën, lijnen en ritmes een nieuw muzikaal leven kunnen krijgen.','heritage'],
 ['Jeugd','Een bijzondere vondst','In 2006 werden vroege handschriften van Bach geïdentificeerd. Ze tonen hoe intensief hij als jongen ingewikkelde Noord-Duitse orgelmuziek bestudeerde.','chronology'],
 ['Instrumenten','Het klavecimbel in concert','Bij het Collegium Musicum kon Bach zijn vaardigheden op klavierinstrumenten tonen. Zijn klavecimbelconcerten behoorden tot het repertoire dat daar klonk.','chronology'],
 ['Muziek','De Hohe Messe','Bach voltooide rond 1748 de mis in b klein (BWV 232). Het monumentale werk brengt oudere en nieuwe muziek samen in een grote miscompositie.','chronology'],
 ['Nalatenschap','Bachs muziek is niet verdwenen','Bach raakte na 1750 niet volledig in vergetelheid: zijn klaviermuziek bleef bekend bij kenners. De publieke waardering voor zijn grote vocale werken groeide later sterk.','heritage'],
 ['Leven','De laatste levensmaanden','In 1750 onderging Bach oogoperaties bij de rondreizende arts John Taylor. Zijn gezondheid verslechterde; op 28 juli 1750 overleed hij in Leipzig.','chronology'],
 ['Leipzig','Muziek als onderdeel van preek en liturgie','In Bachs tijd verwees de zondagscantate naar de kerkelijke lezingen. De tekst en muziek maakten deel uit van de Lutherse eredienst, niet van een losstaand concert.','chronology'],
 ['Muziekgeschiedenis','Verschillende versies','Van sommige Bachwerken bestaan verschillende versies. Hij paste eerder materiaal aan voor een andere plaats, feestdag of uitvoeringsbezetting.','bwv147'],
 ['Jeugd','Leren van Georg Böhm','Bach kwam in Lüneburg in aanraking met de organist Georg Böhm. Vroege afschriften wijzen op nauwe verbindingen tussen de jonge Bach en diens muzikale omgeving.','chronology'],
 ['Muziek','Italiaanse invloeden','Bach leerde muziek van tijdgenoten als Vivaldi kennen. Die Italiaanse concertstijl beïnvloedde hoe hij solisten tegenover het grotere ensemble plaatste.','life'],
 ['Nalatenschap','Van handschrift naar scherm','Via Bach digital zijn scans van veel originele handschriften en historische bronnen toegankelijk. Zo kun je nu zelf zien hoe Bach zijn muziek noteerde.','works'],
 ['Leven','Bach en Picander','Vanaf 1724 werkte Bach samen met de tekstdichter Picander, de schrijversnaam van Christian Friedrich Henrici. Deze samenwerking duurde ongeveer twintig jaar.','chronology'],
 ['Muziek','Een beroemd koraal in context','Het geliefde “Wohl mir, dass ich Jesum habe” hoort bij cantate BWV 147. Losse pianobewerkingen maakten het bekend, maar het koraal krijgt extra betekenis binnen de hele cantate.','bwv147'],
 ['Nalatenschap','Het complete Bachbeeld veranderde','Onderzoekers ontdekten in de afgelopen eeuwen nieuwe manuscripten. Daardoor veranderde ook wat we weten over de datering, bezetting en oorspronkelijke bestemming van werken.','works'],
 ['Biografie','Bach en de universiteit','In Leipzig had Bach soms bestuurlijke conflicten over wie welke muziek mocht leiden, onder meer rond de universiteitskerk. Hij was niet alleen componist, maar ook organisator.','chronology'],
 ['Muziek','Een wereldlijke jachtcantate','BWV 208, Was mir behagt, ist nur die muntre Jagd, werd in 1713 uitgevoerd voor de verjaardag van hertog Christian von Sachsen-Weißenfels.','chronology']
];

export const BACH_FACTS=entries.map(([category,title,body,source])=>({category,title,body,source:FACT_SOURCES[source]}));

// Lokale datum zonder tijdcomponent. Voor een gegeven dag dezelfde openingskaart.
export function factForDate(date=new Date(),offset=0){
 const serial=Math.floor(Date.UTC(date.getFullYear(),date.getMonth(),date.getDate())/86400000);
 const i=((serial+offset)%BACH_FACTS.length+BACH_FACTS.length)%BACH_FACTS.length;
 return BACH_FACTS[i];
}
