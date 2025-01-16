[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/Bzh4RYwL)

# SR Humorprogram

## Kort beskrivning av vad programmet gör
Det här projektet är en webbapplikation som listar humorprogram från Sveriges Radio (SR). Användare kan växla mellan ljust och mörkt läge för att anpassa sitt användargränssnitt. Applikationen hämtar podcastinformation från en API och visar den i en lista med programnamn, beskrivning, bild och en länk till varje podcast.

#### Funktionalitet
- Växling mellan ljus och mörkt läge: Användaren kan växla mellan ljust och mörkt läge med en enkel knapptryckning.
- Dynamisk listning av podcasts: Programmen hämtas från ett API och visas med namn, beskrivning, bild och en länk till varje program.
- Användarvänligt gränssnitt: Enkla och tydliga funktioner som gör det enkelt för användaren att navigera och hitta podcasts.

## Skärmdump på hur det ser ut



## Teknologier som har använts
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

![openapi initiative](https://img.shields.io/badge/openapiinitiative-%23000000.svg?style=for-the-badge&logo=openapiinitiative&logoColor=white)

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

![PNPM](https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220)

![Prettier](https://img.shields.io/badge/prettier-%23F7B93E.svg?style=for-the-badge&logo=prettier&logoColor=black)

![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)


## Kort kom igång-guide till projektet

#### För att köra projektet lokalt

- Klona detta repository till din lokala maskin. 

- Installera pnpm.

- Starta localhost för att se applikationen i din webbläsare.

#### Projektets innehåll

- index.html: HTML-strukturen för sidan, som inkluderar en knapp för att växla mellan ljus och mörkt läge och en plats för att visa podcastlistan.

- style.css: Används för att definiera sidans stil, inklusive stöd för växling mellan ljus och mörkt läge.

- createHtml.ts: Funktionen för att skapa och visa podcastlistan. Den hämtar podcastdata via API:t och dynamiskt genererar HTML-element för varje podcast.

- toggleLightMode.ts: En enkel funktion som växlar mellan ljus och mörkt läge när användaren klickar på knappen.

- api.ts: Denna kod är en del av en funktionalitet som hämtar och visar humorprogram från Sveriges Radio (SR) i en webbläsare. Om något går fel vid hämtningen från API:et, informeras användaren om detta via ett tydligt felmeddelande som visas temporärt på sidan.

- .env: Den här filen innehåller en miljövariabel, VITE_API_URL, som lagrar URL:en till det externa API:et som används för att hämta data om Sveriges Radios (SR) humorprogram. Denna URL används för att göra en HTTP-förfrågan och få information om humorprogrammen. .env-filen säkerställer att API-nycklar eller andra känsliga inställningar inte exponeras i koden, vilket ger en säker och flexibel hantering av konfiguration.


## Uppgiftsbeskrivning
Du har precis fått din första praktikplats på webbyrån Wundermålig AB, och din första uppgift är att fixa till kod som en annan utvecklare lämnat efter sig. Koden håller ungefär samma standard som företagsnamnet.

Du har fått nedan kravspecifikation från din handledare.

#### Kravspec/Checklista för uppgiften
G
- [x] Fixa till README.md
- [x] Skapa issues
- [x] Använda Conventional Commits i hela projekt
- [x] Få projektet att funka
- [x] CSS till Sass
- [x] Enhetlig namngivning i CSS:en
- [x] Konvertera till TypeScript
- [x] Enhetlig kodkvalitet
- [x] Mobilvyn
- [x] Språk
- [ ] Rensa loggning
- [ ] Dokumentation/README
- [x] Tillgänglighet (bilder)
- [x] Refaktorera funktioner
- [x] Eliminera onödig kod
- [x] Rensa bort kod som inte ska sättas
  
VG
- [x] Rätt sak på rätt plats
- [ ] Hantera loggning på ett effektivt sätt
- [x] Gör en tillgänglighetsgranskning av sidan
- [x] Utnyttja features i Sass i CSS:en
- [ ] Rensa bort paket som inte används
- [x] Hantera fel i API-anropet
- [ ] Gör en Lighthouse-analys
- [ ] Läs av utvecklingsmiljön
- [x] Enhetlig syntax i CSS:en
- [x] Publicera sidan på GitHub pages