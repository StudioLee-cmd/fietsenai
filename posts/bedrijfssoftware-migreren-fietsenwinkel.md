---
title: "Bedrijfssoftware migreren als fietsenwinkel: 3 valkuilen"
slug: bedrijfssoftware-migreren-fietsenwinkel
date: "2026-07-06"
excerpt: "Overstappen van bedrijfssoftware als fietsenwinkel: welke drie datasets mee moeten, welke valkuilen bijna elke winkel raken en hoe je zonder chaos migreert."
authorSlug: "tim-van-der-lee"
image: "/images/blog/bedrijfssoftware-migreren-fietsenwinkel.jpg"
tags: ["Automatisering", "Software", "Werkplaats"]
cluster: "automatisering"
---

Vraag drie systemen in je winkel hoeveel banden je op voorraad hebt en je krijgt drie antwoorden. De kassa zegt twaalf, de Excel van de werkplaats zegt negen, en in de ordner met werkbonnen zit nog een reparatie waar er twee voor gereserveerd zijn. Precies op zo'n avond besluiten de meeste fietsenmakers dat het tijd is voor een systeem dat alles in een keer bijhoudt.

En dan komt de echte vraag: hoe krijg je jaren aan klanten, reparaties en voorraad heelhuids van het oude naar het nieuwe systeem? Bij een fietsenwinkel verhuizen er namelijk drie datasets tegelijk, niet een. Wie er een vergeet, staat in september een klant aan de balie uit te leggen waarom de servicegeschiedenis van zijn e-bike weg is. In dit artikel: de drie datasets, de drie valkuilen en de aanpak die werkt. Wil je dat het nieuwe systeem daarna ook echt werk uit handen neemt, kijk dan hoe [workflow automatisering voor fietsenmakers](/automatisering) en een [crm voor fietsenmakers](/crm) samen dat ene systeem vormen waar alles in leeft.

**In het kort:**

- Bij een fietsenwinkel verhuizen drie datasets: klanten met fietshistorie, de werkplaats-agenda met werkbonnen, en je voorraad met artikelbestand.
- De grootste fout is alleen de kassa-omzet exporteren en de servicegeschiedenis per fiets vergeten.
- Migreer nooit midden in het voorjaarsseizoen: plan de overstap in oktober tot februari.
- Een proefimport van vijftig artikelen en tien klanten voorkomt dat je een vervuild bestand meeneemt.

## De drie datasets die mee moeten

Software wisselen voelt als een grote klus, maar het wordt overzichtelijk zodra je het opknipt in de drie soorten data die je winkel draaiend houden.

### 1. Klanten en hun fietshistorie

Dit is de dataset waar je omzet in zit. Niet alleen namen en telefoonnummers, maar vooral: welke fiets rijdt deze klant, wanneer was de laatste servicebeurt, welke onderdelen zijn toen vervangen. Een [crm systeem voor fietsenmakers](/crm) hangt die historie aan de fiets zelf, zodat je bij elke telefoontje meteen ziet wat er speelt. Exporteer daarom niet alleen je klantenlijst maar ook de gekoppelde reparatiehistorie, anders begin je met een adresboek in plaats van een klantenbestand.

### 2. De werkplaats-agenda en werkbonnen

Openstaande reparaties, geplande servicebeurten, gereserveerde onderdelen. Deze dataset is klein maar levend: er verandert elke dag iets. Daarom migreer je hem als laatste, vlak voor de overstapdatum. Werk je nog met papieren bonnen, dan is de overstap meteen het moment om dat te digitaliseren, zoals we eerder beschreven in [werkbonnen van papier naar digitaal](/blog/werkbon-administratie-fietswerkplaats-papier-naar-digitaal).

### 3. Voorraad en artikelbestand

![Fietsenmaker scant onderdelen in de werkplaats voor de voorraadtelling](/images/blog/bedrijfssoftware-migreren-fietsenwinkel-2.jpg)

Banden, kettingen, cassettes, accessoires: je artikelbestand is in de meeste winkels het grootste en meest vervuilde bestand. Leveranciers wisselden, artikelnummers veranderden, en ergens staan nog drie regels voor dezelfde binnenband. Welke velden je minimaal nodig hebt: artikelnummer, omschrijving, inkoopprijs, verkoopprijs, btw-tarief en actuele voorraadstand. Vraag je nieuwe leverancier om een importsjabloon voordat je gaat exporteren, dan weet je precies wat je moet aanleveren.

## Valkuil 1: je exporteert alleen de kassa-omzet

De kassa is het zichtbaarste systeem, dus daar begint iedereen. Maar omzetcijfers zijn juist het minst waardevol om mee te nemen: die staan ook in je boekhouding, en de <a href="https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/administratie/administratie_opzetten/hoe_lang_moet_u_uw_administratie_bewaren" target="_blank" rel="noopener">bewaarplicht van 7 jaar</a> dek je af met een archief-export als PDF. Wat je niet terugkoopt met geld: de servicegeschiedenis per klant en per fiets. Check dus per systeem, ook bij pakketten als <a href="https://www.lightspeedhq.nl" rel="nofollow">Lightspeed</a> of <a href="https://www.cyclesoftware.nl" rel="nofollow">CycleSoftware</a>, of je naast verkoopregels ook klantkaarten en reparatieregels kunt exporteren: die horen straks thuis in je [klantbeheer software voor fietsenmakers](/crm). Kan je huidige leverancier dat niet, vraag dan om een volledige data-dump zolang je account nog actief is.

## Valkuil 2: je stapt over midden in het voorjaar

Van maart tot juni staat elke fietsenwerkplaats vol. Precies dan wisselen van systeem betekent dat je personeel het nieuwe pakket moet leren terwijl de wachtrij groeit, en dat elke import-fout meteen een klant raakt. Plan de overstap in de stille maanden, oktober tot februari, en reken op vier tot zes weken van eerste export tot definitieve overstap. Zet in die weken je bereikbaarheid vast op automatisch: een [ai telefonist voor fietsenmakers](/voice-ai) vangt de telefoontjes op terwijl jij met de inrichting bezig bent, en je mist geen enkele aanvraag.

## Valkuil 3: je vervuilde artikelbestand gaat één-op-één mee

Tien jaar aan dubbele artikelnummers, oude leveranciers en spookvoorraad importeren betekent tien jaar rommel in je nieuwe systeem. Doe eerst een proefimport met vijftig artikelen en tien klanten en loop het resultaat na: kloppen de prijzen, de btw-tarieven, de voorraadstanden? Schoon daarna op voor je de volledige import draait: voeg dubbelingen samen, verwijder artikelen die je twee jaar niet verkocht en tel je echte voorraad. Ja, dat kost een paar avonden. Maar het is de enige kans die je krijgt om met een schoon bestand te starten, en het is de basis voor alles wat je daarna wilt: [klantcommunicatie automatiseren als fietsenmaker](/automatisering) werkt alleen als de data eronder klopt.

## Zo pak je de overstap aan

1. **Kies je moment.** Stille maanden, geen actieweken, vier tot zes weken doorlooptijd.
2. **Vraag exports op bij je huidige leverancier** terwijl alles nog draait: klanten met historie, artikelbestand, openstaande werkbonnen. Vraag je nieuwe leverancier om het importsjabloon. Twijfel je nog over de bestemming, lees dan eerst de [vergelijking van kassasystemen voor fietswinkels](/blog/beste-kassasysteem-fietswinkels-2026).
3. **Draai een proefimport** met een kleine set en controleer prijzen, btw en voorraadstanden.
4. **Schoon op en importeer volledig.** Eerst klanten en artikelen, als laatste de levende werkplaats-agenda.
5. **Kies een harde overstapdatum.** Vanaf die dag werkt iedereen in het nieuwe systeem en gaat het oude op alleen-lezen. Controleer de eerste twee weken steekproefsgewijs of werkbonnen en voorraad kloppen.

## Veelgestelde vragen

### Kan ik mijn voorraadtellingen zomaar meenemen?

Nee, neem alleen getelde voorraad mee: een systeemstand die al jaren niet geverifieerd is, importeer je niet. Combineer de overstap met een echte telling, dan start je nieuwe systeem met cijfers die kloppen.

### Wat doe ik met werkbonnen die openstaan tijdens de overstap?

Maak de lopende reparaties zoveel mogelijk af in het oude systeem en zet alleen de bonnen over die na de overstapdatum doorlopen. Zo voorkom je dat een reparatie in twee systemen half bestaat.

### Verlies ik mijn Google reviews als ik van software wissel?

Nee, Google reviews staan aan je Google Bedrijfsprofiel en hebben niets met je bedrijfssoftware te maken. Wat wel verandert: een modern systeem kan na elke reparatie automatisch om een review vragen, zodat je er eindelijk aan denkt zonder eraan te denken.

## Conclusie: drie datasets, een rustig moment, een schoon bestand

Bedrijfssoftware migreren als fietsenwinkel is geen software-project maar een data-project. Wie de drie datasets kent, de overstap buiten het seizoen plant en zijn artikelbestand opschoont voor de import, is in zes weken over en heeft er daarna nooit meer omkijken naar.

Bij FietsenAI doen we die migratie met je mee: klanten, fietshistorie en werkplanning in één systeem, klaarmeldingen en review-verzoeken automatisch, met onze Groei-of-Geld-Terug Garantie. Jij repareert, wij regelen de rest. Benieuwd wat dat kost voor jouw winkel? Bekijk de [tarieven van FietsenAI](/tarieven) en reken het zelf uit.

<div class="container"><div class="row justify-content-center"><div class="col-lg-10 col-xl-8 mx-auto"><p class="lees-ook my-5 px-4 py-3 rounded-3 fs-6 text-dark" style="background-color: rgba(193, 255, 114, 0.18);"><strong class="text-dark">Lees ook:</strong> <a href="/blog/welkom-mailflow-nieuwe-fietsenwinkel-klanten" class="text-dark fw-semibold">Welkom-mailflow voor nieuwe fietsenwinkel-klanten</a> →</p></div></div></div>
