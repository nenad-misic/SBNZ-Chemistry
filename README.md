<h1 align="center">SBNZ-Chemistry</h1>

<p align="center">
  <img src="https://i.imgur.com/IyZUpJG.png" width="250" height="250" />
</p>

## Opis projekta
Moja ideja za projekat iz predmeta “Sistemi bazirani na znanju” je implementacija rule-based sistema
koji bi služio kao ekspertska pomoć pri kvalitativnoj hemijskoj analizi supstanci.

Nauka o dobijanju informacija o hemijskom sastavu uzorka i metodama za njegovo dokazivanje i
određivanje naziva se analitička hemija. Podoblast koja se bavi utvrđivanjem (dokazivanjem) iz kojih
sastavnih delova, odnosno elementarnih jedinki ili čestica (atoma, jona, funkcionalnih grupa, molekula)
se sastoji ispitivani uzorak naziva se kvalitativna analitička hemija.

Uzimajući u obzir da je ovo egzaktna nauka, sa tačno određenim metodama rada, moguće je to znanje
digitalizovati i kreirati sistem sposoban da delom automatizuje neke od procesa koje ova oblast koristi.

## KT2 - Promene
* <b>Forward-chaining u 3 nivoa</b>
* <b>Liste i query-ji umesto pristupanja po string kodovima</b>
* <b>Generičko pravilo za određivanje sledećeg pitanja za korisnika</b>
* <b>Integracija sa springom i dinamičko povlačenje pravila</b>
* <b>Drools template za dodavanje korisničkih pravila</b>
* <b>Rich edit komponenta za ručno pisanje drl pravila</b>
* <b>Kompletno istestirani rezoneri i sve moguće putanje</b>

Za kontrolnu tačku dva sam napravio nekoliko promena u samoj arhitekturi projekta.
Pravila za određivanje supstance su sada organizovane u četiri, umesto u tri grupe, i time je donekle povećana kompleksnost projekta jer sada postoji forward-chaining na 3 nivoa.
Takođe, upućena mi je primedba da je možda elegantnije rešenje implementirati rezonovanje preko lista i query-ja umesto pristupanja objektima po string kodovima, pa sam i taj deo implementirao.
Pristupanje atributima se u prvoj verziji vršilo putem getera, dok je sada sve prebačeno na korišćenje direktnih atributa (jer drools pruža tu mogućnost).
Još jedna zamerka je bila da Q&A pravila nisu imala preteranog smisla jer su sva bila ista, a bilo ih je jako puno, pa je taj deo smanjen sa skoro 70 na samo dva pravila.

Što se tiče ostalih funkcionalnosti, za ovu kontrolnu tačku implementirao sam integraciju sa springom i dinamičko učitavanje dependency-ja sa pravilima na svakih 10 sekundi. Takođe, prilikom korisničkog menjanja pravila dolazi do pozivanja clean install procedura i dependency se automatski povlači nakon toga, tako da nije potrebno restartovati server.
Što se tiče korisničkog dodavanja novih pravila, postoji deo implementiran preko drools template-a gde je korisnik u mogućnosti putem checkbox mehanizma isključi i uključi postojeća jedinjenja, katjone i anjone kao i da doda potpuno nove i izabere njihove atribute (na osnovu kojih će sistem napraviti novo pravilo).
Ukoliko template ne daje dovoljnu fleksibilnost, implementirana je i textedit komponenta u kojoj korisnik može da unese svoja pravila u drl formatu i pošalje ih na server. Ta pravila biće konkatenirana na kraj drl datoteke, nakon što se templejt iskompajlira.

Što se testiranja tiče, unit testovima sam istestirao sve moguće putanje kroz rezoner, kako za jedinjenja tako i za Q&A deo.

## Opis forward-chaining u 3 nivoa
Prvi nivo predstavlja pronalaženje grupe na osnovu rezultata eksperimenata. Ukoliko se leva strana nekog pravila ispuni, doći će do dodavanja novog objekta u radnu memoriju i to će okinuti drugi niz pravila. Pravila za katjone očekuju postojanje objekta grupe, pa ako određeni katjon pripada grupi koja se pre toga ispunila, i takođe ispunjava neke specifičnije eksperimente, dodaće se i on u memoriju. Nakon toga dolazi do potencijalne aktivacije pravila za jedinjenja koja očekuju postojanje katjona u radnoj memoriji, ali takođe i postojanje anjona koje se paralelno aktiviralo, kao i posebna fizička svojstva koja je korisnik uneo.
Na ovaj način, da bi se došlo do jedinjenja, rezoner mora proći kroz tri aktivacije pravila i samim tim je postignut forward-chaining od tri nivoa.


## Metodologija rada
Tradicionalna kvalitativna hemijska analiza sastoji se od niza metoda koje se primenjuju nad uzorkom da
bi se utvrdio sastav datog uzorka. Te metode se mogu podeliti na fizičke i hemijske. Primeri fizičkih
metoda su ispitivanje tačke topljenja, tačke ključanja, gustine, boje, mirisa, dok se hemijske svode na
mešanje sa drugim supstancama i posmatranje da li se određene karakteristike neke reakcije ispoljavaju,
kao što su pojava taloga ili obojenog jedinjenja, izdvajanje gasa karakterističnog mirisa ili boje,
obrazovanje kristala, itd.

Sistem bi funkcionisao tako što bi korisniku koji želi da utvrdi koja se supstanca nalazi u njegovom uzorku
bila postavljena pitanja koja ispituju fizička svojstva supstance.

Nakon toga bi se od korisnika zahtevalo da nad svojim uzorkom uradi nekoliko hemijskih reakcija i od
ponuđenih odgovora odabere kojim je ponašanjem rezultovala akcija.

Nakon prikupljenih informacija, sistem bi trebalo da bude u stanju da odredi o kojoj se supstanci radi.
Dakle, ulazi u sistem bili bi informacije prikupljene od korisnika koje oslikavaju fizička i hemijska svojstva
njegovog uzorka, dok bi izlaz predstavljao hemijsko jedinjenje koje se nalazi u tom uzorku.

Što se tiče baze znanja, istraživanjem literature iz ove oblasti izdvojio bih dovoljan broj hemijskih reakcija
na osnovu kojih se može zaključiti vrsta supstance. Takođe, za supstance koje budem rešio da
implementiram analizu, iz literature ili sa interneta bih prikupio informacije o fizičkim svojstvima koja bi
se takođe tretirala kao znanje.

## Pravila za određivanje supstance
Pravila za određivanje supstance podeljena su u četiri grupe:
* Pravila određivanja grupe katjona (Grupa1 - Ag+, Pb2+, Hg22+; Grupa2 - Fe3+, Al3+, Cr3+; Grupa3 - Mn2+, Zn2+; Grupa4 - Ba2+, Ca2+)
* Pravila određivanja katjona (Ag+, Pb2+, Hg22+, Fe3+, Al3+, Cr3+, Mn2+, Zn2+, Ba2+, Ca2+)
* Pravila određivanja anjona (SO4, PO4, CO3, C2O4, Cl, NO3, CH3COO)
* Pravila određivanja soli na osnovu prisustva katjona i anjona (i fizičkih karakteristika).

Neki koncizan opis pravila bi bio sledeći:

Pravila za određivanje grupe katjona očekuju da u radnoj memoriji postoje objekti tipa Experiment, svaka grupa različite. Nakon aktivacije ove grupe pravila, doći će do potencijalne aktivacije pravila iz grupe katjona.

Pravila za određivanja katjona očekuju da u radnoj memoriji postoje objekti tipa Experiment, ali takođe i tačno jedan objekat tipa Group. Ova pravila aktiviraju se tek u drugom prolazu rezonera kroz pravila. Aktivacija ove grupe pravila potencijalno izaziva aktivaciju pravila za određivanje soli.

Pravila za određivanje anjona očekuju da u radnoj memoriji postoje objekti tipa Experiment i ova grupa pravila se aktivira zajedno sa prvom grupom pravila. Aktivacija ovog tipa pravila neophodna je za aktivaciju pravila za određivanja soli.

Pravila za određivanje soli je grupa pravila koja se poslednja aktivira i koja zapravo daje output iz programa. Ova pravila očekuju da u memoriji postoje objekti tipa Color i Structure koje korisnik unosi, ali i objekti tipa Cation i Anion koji se u memoriji pojavljuju nakon rezonovanja.
State dijagram modelovan po ugledu na pravila:

![State diagram 1](https://i.imgur.com/RtubTe1.png)

* Levo - dijagram stanja za pronalaženje katjona
* Desno - dijagram stanja za pronalaženje anjona

## Pravila za određivanje sledećeg pitanja
Odabir narednog pitanja je takođe prepušten rezoneru i pitanja koja korisnik dobija zavise od toga kakve odgovore daje.

Pokušao sam da što verodostojnije modelujem dijagram stanja koji opisuje jedan proces u analitičkoj hemiji, i na osnovu njega implementiram rezoner.

Odabir narednog pitanja zavisi od toga koje je prethodno pitanje bilo i koji odgovor je korisnik na njega dao.

State dijagram koji sam modelovao se može videti ispod:

![State diagram 2](https://svgshare.com/i/LDk.svg)

Pitanja:
1. Da li se Vaša supstanca rastvara u vodi?
2. Da li Vaša supstanca pri reakciji sa razblaženom HCl daje talog?
3. Nakon uvođenja tople vode u stvoreni talog dobija se rastvor?
4. U novodobijeni rastvor unesite K2CrO4. Da li je rastvor postao žut?
5. U novodobijeni rastvor unesite NH4OH. Da li se stvorio talog sive boje?
6. U novodobijeni rastvor unesite HNO3 (ili NaOH). Da li se stvorio talog bele boje?
7. Da li se Vaša supstanca rastvara u NH4OH (ili HNO3 ili NH4Cl)?
8. Opišite talog koji je prethodno dobijen
9. Da li se Vaša supstanca rastvara u (NH4)2S?
10. Opišite dobijeni talog
11. Da li se Vaša supstanca rastvara u (NH4)2CO3 na temperaturi 60-70 stepeni?
12. Da li se dobijeni talog rastvara u CH3COOH?
13. Da li se dodavanjem K2Cr2O4 (ili K2Cr2O7) u dobijeni rastvor izdvaja žuti talog?
14. U eprivetu sipati malo ispitivanog rastvora, z…dodati 5 kapi BaCl2. Da li se pojavio beli talog?
15. U eprivetu sipati malo ispitivanog rastvora, z… (NH4)2MoO4 u višku. Da li se pojavio žuti talog?
16. U eprivetu sipati malo ispitivanog rastvora, z…i je došlo do burnog izdvajanja gasa i zamućenja?
17. U eprivetu sipati malo ispitivanog rastvora u …i je došlo do izdvajanja belog kristalnog taloga?
18. U epruvetu sa uzorkom dodati azotnu kiselinu d…ko kapi AgNO3. Da li se stvorio beo sirast talog?
19. Rastvor za analizu zakiseliti sa razbl. H2SO4 …do pojave prstena koji se gradi između dva sloja?
20. U epruvetu sa ispitivanim rastvorom dodati raz…i zagrevati. Da li se oseća miris nalik na sirće?
 
Odgovori:
1. Označeno crvenom bojom - Prvi negativan odgovor
2. Označeno narandžastom bojom - Drugi negativan odgovor (ukoliko postoji)
3. Označeno zelenom bojom - Pozitivan odgovor
4. Označeno plavom bojom - Korisnik nije u stanju da izvrši eksperiment
