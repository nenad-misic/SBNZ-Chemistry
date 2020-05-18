<h1 align="center">SBNZ-Chemistry</h1>

<p align="center">
  <img src="https://i.imgur.com/IyZUpJG.png" width="250" height="250" />
</p>

## Video snimci:
  Jedna supstanca pronađena: https://drive.google.com/open?id=1jAdsJ42KZAY4n0ns50HuRGRZG2E9a6wo
  
  Pronađeno 6 ili manje supstanci koje odgovaraju odgovorima korisnika: https://drive.google.com/open?id=1VbH84tck6kr63def9FmIqOs6IZ3QPEhp
 
  Pronađeno više od 6 supstanci: https://drive.google.com/open?id=16hXoZ-VvuEY1G_laQyUSkYkYX46vhrUf
  
  Ni jedna supstanca ne odgovara odgovorima korisnika: https://drive.google.com/open?id=1EpPKKZe_CydGHFVvS4nQ7XfcSjAxlihM

## Opis projekta
Moja ideja za projekat iz predmeta “Sistemi bazirani na znanju” je implementacija rule-based sistema
koji bi služio kao ekspertska pomoć pri kvalitativnoj hemijskoj analizi supstanci.

Nauka o dobijanju informacija o hemijskom sastavu uzorka i metodama za njegovo dokazivanje i
određivanje naziva se analitička hemija. Podoblast koja se bavi utvrđivanjem (dokazivanjem) iz kojih
sastavnih delova, odnosno elementarnih jedinki ili čestica (atoma, jona, funkcionalnih grupa, molekula)
se sastoji ispitivani uzorak naziva se kvalitativna analitička hemija.

Uzimajući u obzir da je ovo egzaktna nauka, sa tačno određenim metodama rada, moguće je to znanje
digitalizovati i kreirati sistem sposoban da delom automatizuje neke od procesa koje ova oblast koristi.

## Motivacija
Analitička hemija je oblast hemije koja zauzima veoma značajno mesto u svim granama hemije i
svakodnevnog života uopšte. Analiza je osnovna metoda istraživanja, pa je analitička hemija prisutna u
svim hemijskim istraživanjima, ali i u istraživanjima u ostalim prirodnim, pa čak i humanističkim
naukama. U svakodnevnom životu analitička hemija ima veliki značaj u materijalnoj proizvodnji u
hemijskoj, farmaceutskoj, prehrambenoj i tekstilnoj industriji, u metalurgiji, rudarstvu, poljoprivredi itd.
Veoma važnu ulogu analitička hemija ima u zdravstvenoj zaštiti, medicinskoj dijagnostici i terapiji kao i u
kontroli životne i radne sredine.

Značaj ovakvog sistema direktno proizilazi iz značaja same nauke, a polje primene je, kao što vidimo, vrlo
široko

## Pregled problema
S obzirom da je ovo jedna vrlo kompleksna i velika naučna oblast, pokušaj digitalizacije celokupnog
znanja i procesa bio bi preambiciozan. Zato ću pokušati da realizujem samo mali podskup neorganskih
jedinjenja koji se mogu dokazati unutar uzorka i time pokazati da je pristup ovom problemu preko rulebased sistema izvodljiv.

Postoje komercijalna rešenja, poput QualX2 softvera koji rešavaju sličan problem, ali nema smisla
porediti se sa takvim sistemima.

S druge strane, kreiranjem rule-based sistema dobiće se lako proširiva arhitektura pa će se jednostavnim
dodavanjem novih pravila širiti i spektar mogućnosti.
  
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

## Primer rezonovanja
Korisnik ispred sebe ima, recimo, srebro nitrat (AgNO3), kristalnu supstancu bele boje, bez mirisa.
Popunjava formu kako bi uneo informacije o fizičkim karakteristikama u sistem, kao što su boja,
struktura, tačka topljenja, rastvorljivost u vodi, itd.

Nakon toga sistem postavlja pitanja o ponašanju nakon mešanja sa određenim supstancama iz
laboratorije. Recimo, od korisnika zahteva da mali deo uzorka pomeša sa razblaženom hlorovodoničnom
kiselinom i upituje da li se stvorio talog.

Ukoliko jeste, a trebalo bi da jeste, znamo da se u uzorku nalazi neki od metala iz prve analitičke grupe.
U suprotnom, dobijanjem rastvora bez taloga, znamo da uzorak ne sadrži pomenute metale, pa se
nastavlja sa reakcijama da se utvrdi iz koje grupe su metali.

Pošto je uspešno utvrđeno da su u uzorku prisutni joni metala iz prve grupe, uz pomoć par hemijskih
reakcija, lako se dokazuje o kom tačno metalu je reč (preskočićemo hemijske reakcije da bi se smanjila
kompleksnost opisa).

Nakon uspešnog određivanja metala (katjona), prelazi se na analizu i dokazivanje prisustva određenih
anjona. Postoji tačno određen šablon reakcija koje se primenjuju da bi se dokazalo o kom se tačno
anjonu radi, pa bi sistem redom korisniku postavljao upite o ponašanju uzorka u određenim uslovima.

Primenom reakcije na nitrate, koja podrazumeva uvođenje uzorka u gvožđe-2-sulfat (FeSO4) i postepeno
dodavanje sumporne kiseline (H2SO4), očekujemo pojavu braon prstena unutar novodobijenog rastvora.
Dokazivanjem da se u našem uzorku nalaze katjoni srebra kao i anjoni nitrata, sistem obaveštava
korisnika da njegov uzorak predstavlja srebro nitrat.

## Pravila za određivanje supstance
Pravila za određivanje supstance podeljena su u tri grupe:
* Pravila određivanja katjona (Ag+, Pb2+, Hg22+, Fe3+, Al3+, Cr3+, Mn2+, Zn2+, Ba2+, Ca2+)
* Pravila određivanja anjona (SO4, PO4, CO3, C2O4, Cl, NO3, CH3COO)
* Pravila određivanja soli na osnovu prisustva katjona i anjona.

Prve dve grupe su jako slične i svode se na posmatranje prisustva određenih eksperimentalnih rezultata (Experiment.class)

Inicijalno, u sistemu postoje svi rezultati eksperimenata prisutni, pa je moguće da se ispred korisnika nalazi bilo koja supstanca.
Kako korisnik daje odgovore na pitanja, tako se svi ostali odgovori na to pitanje, osim datog, brišu iz činjenica.
Recimo, ako je u pitanju rastvorljivost supstance u vodi, inicijalno se u memoriji nalaze i solubleInWater i insolubleInWater eksperimenti. Ukoliko korisnik da odgovor da se njegova supstanca rastvara u vodi, insolubleInWater eksperiment će biti izbačen iz memorije. Ukoliko korisnik odabere odgovor da nije u stanju da izvrši eksperiment, svi odgovori će ostati u memoriji (u ovom primeru, pretpostavićemo da je supstanca možda rastvorljiva a možda ne).

Jedan primer je (za dokazivanje jona Ag+), rezoner očekuje da u sesiji postoje 5 eksperimenata sa određenim nazivima (colorlessSolutionWithWater, colorlessSolutionWithWater, warmWaterInsoluble, solubleInNH4OH, whiteWithHNO3). Svi ostali su slični, samo sa drugim skupom pravila. Ukoliko se pravilo ispuni, u memoriju će se dodati objekat tima Cation.class (ili Anion.class) sa odgovarajućim nazivom (u ovom slučaju "Silver").

Treća grupa uzima u obzir prisustvo jednog katjona i jednog anjona, ali i fizičke karakteristike date supstance, pa je primer sledeći:

Za dokazivanje soli Ca3(PO4)2, potrebno je da u memoriji postoje objekti:
* Color.class sa nazivom "white"
* Structure.class sa nazivom "powder"
* Anion.class sa nazivom "PO4"
* Cation.class sa nazivom "Calcium"

Ispunjenje ovog pravila dovešće do dodavanja supstance Ca3(PO4)2 u memoriju, i lista svih dodatih supstanci će kasnije biti vraćena klijentu za prikaz.


Pravila su analizirana sa prezentacija na web sajtu: https://www.sites.google.com/site/epruveticaki/nastava-hemije/srednja-skola---2-razred/kvalitativna-hemijska-analiza

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
