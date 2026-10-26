# Bach van de Week

Een eenvoudige, installeerbare telefoonapp (PWA) met een cantate van Johann Sebastian Bach voor **iedere zondag van het kalenderjaar**. De app volgt zo veel mogelijk Bachs historische Lutherse kerkelijk jaar in Leipzig. Iedere week heeft zeven korte, inhoudelijke lessen en luisteropdrachten.

## Functies

- De kalender wordt **elk jaar opnieuw** berekend, aan de hand van Pasen, Advent en bijzondere feestdagen. Geen vaste startdatum of kunstmatige cyclus van 52 weken.
- Het jaaroverzicht toont automatisch **52 of 53 zondagen**.
- Historische liturgische toewijzingen zijn onderscheiden van **thematische keuzes**, vooral voor de Leipziger stille perioden in Advent en de vastentijd.
- **Bach-weetje op het hoofdscherm:** 61 bronvermelde weetjes over zijn leven, muziek en latere muziekgeschiedenis. Het openingsweetje wisselt iedere kalenderdag; met **Nog een weetje** kun je doorklikken. De verzameling begint na 61 dagen opnieuw.
- Dagelijks andere aandacht: introductie, geschiedenis, Bijbel en tekst, instrumenten, compositie, luisteropdracht en terugblik.
- YouTube- en Spotify-links leiden naar zoekresultaten voor de geselecteerde cantate, niet naar een gegarandeerd specifieke opname.
- Afgevinkte lessen worden lokaal opgeslagen op de telefoon.
- Werkt na het eerste bezoek grotendeels offline; muzieklinks vereisen internet.
- Geen account, geen analytics, geen pushmeldingen en geen externe backend.

## Publiceren met GitHub Pages

1. Maak in je eigen GitHub-account een **nieuwe openbare repository**, bijvoorbeeld `bach-van-de-week`.
2. Pak de gedownloade ZIP uit op je computer en upload **alle bestanden in de map** naar de hoofdmap van de repository (dus `index.html` niet in een extra submap). In GitHub: **Add file → Upload files → Commit changes**. Je kunt dezelfde bestanden ook via Git commit/push uploaden.
3. Open **Settings → Pages** van de repository.
4. Kies onder **Build and deployment**: **Deploy from a branch**, branch **main**, folder **/(root)** en sla op.
5. De app is daarna bereikbaar op een adres van de vorm `https://<gebruikersnaam>.github.io/<repositorynaam>/`. GitHub Pages moet de site eerst publiceren. Je repositorynaam mag afwijken; alle appverwijzingen zijn relatief.
6. Open dat adres in Chrome op Android, open het browsermenu en kies **App installeren** of **Toevoegen aan startscherm**.

> Er wordt **geen** repository aangemaakt door de ZIP zelf. Dit is de volledige broncode; je publiceert hem door de bestanden in een GitHub-repository te plaatsen.

## Projectbestanden

- `index.html` — startpunt van de site
- `styles.css` — mobiele opmaak
- `app.js` — interface, navigatie en lokale voortgang
- `facts.js` — de 61 geverifieerde Bach-weetjes, bronlinks en dagelijkse keuze
- `calendar.js` — paaskalender, kerkelijk jaar, zondagselectie
- `data.js` — 66 liturgische gelegenheden, BWV-selecties en dagelijkse lessen
- `sw.js` — offline caching
- `manifest.webmanifest`, `icon.svg`, `icon-192.png`, `icon-512.png` — appinstallatie en pictogrammen
- `tests.mjs` — automatische kalender- en inhoudscontrole (Node.js)

## Historische verantwoording

De hoofdindeling volgt het historische **Lutherse** kerkelijk jaar van Bachs Leipzig, niet een moderne driejarige lectionariumcyclus. De jaarlijkse selectie is niet dezelfde als de historische chronologische volgorde van Bachs eerste, tweede of derde cantatejaargang. Op belangrijke vaste feestdagen die op zondag vallen, kan het feest voorrang krijgen op de gewone zondag. Op zondagen zonder passende bewaarde Leipzigse cantate wordt dat in de app gemeld; de gekozen cantate is daar thematisch.

Belangrijkste naslagwerken:

- [Carus-Verlag: Bach Cantatas for Sundays and Holidays during the Liturgical Year](https://www.carus-verlag.com/en/composers/bach/cantatas/in-the-church-year/)
- [Bach Cantatas Website: Lutheran Church Year](https://www.bach-cantatas.com/LCY/index.htm)
- [Bach Cantatas Website: Scripture readings](https://www.bach-cantatas.com/Read/index.htm)

Dit is een leerapp: de lessen geven een compacte, eigen inleiding en luisteropdrachten. De inhoud bevat geen volledige cantateteksten en geen letterlijke HSV-citaten.

## Ontwikkeling en testen

Deze app gebruikt standaard JavaScript-modules en heeft geen build-stap nodig. Gebruik lokaal wel een eenvoudige HTTP-server (rechtstreeks `file://` kan ES-modules blokkeren):

```sh
python -m http.server 8000
```

Open `http://localhost:8000/`. Voor installatie als PWA is HTTPS nodig (GitHub Pages levert dat).

Automatische tests: `node tests.mjs`.

## Bach-weetjes en bronvermelding

De weetjes staan als statische gegevens in `facts.js`: er is geen dagelijkse netwerk- of AI-aanroep nodig. Alle weetjes verwijzen door naar de Bach-Archiv Leipzig of de Nederlandse Bachvereniging. De dagelijkse keuze wordt bepaald door de lokale kalenderdatum van de telefoon en staat los van de cantate die je in het archief bekijkt. **Nog een weetje** biedt aanvullende weetjes wanneer je verder wilt lezen.

## Updatebeleid

Als je `app.js`, `data.js`, `styles.css` of andere statische bestanden bijwerkt, verhoog dan de waarde `CACHE` in `sw.js` (bijv. naar `bach-van-de-week-v2`) zodat offline opgeslagen versies verversen.
