
const modelKapije = document.getElementById("modelKapije");
const bojaKapije = document.getElementById("bojaKapije");
const skicaKapije = document.getElementById("skicaKapije");
const ukrasi = document.querySelector(".ukras");
const ukrasKapije = document.getElementById("ukrasKapije");
const rezultat = document.getElementById("rezultat");

const sirinaKapije = document.getElementById("sirinaKapije");
const visinaKapije = document.getElementById("visinaKapije");

const povrsinaKapije = document.getElementById("povrsinaKapije");
const cenaKapije = document.getElementById("cenaKapije");

const oblikKapije = document.getElementById("oblikKapije");

const ramKapije = document.getElementById("ramKapije");
const sipkeKapije = document.getElementById("sipkeKapije");
const srednjaSipka =document.getElementById("srednjaSipka");

const vrhKapije = document.getElementById("vrhKapije");
const vrhoviKapije = document.getElementById("vrhoviKapije");


const osnovnaCena =
    document.getElementById("osnovnaCena");

const cenaDodataka =
    document.getElementById("cenaDodataka");


// Probne cene po kvadratnom metru
const CENA_KLASICNE = 22000;
const CENA_MODERNE = 18000;

 // PROBNE CENE UKRASNIH VRHOVA

const CENE_VRHOVA = {
    bez: 0,
    siljak: 250,
    kugla: 350,
    ornament: 600
};


function promeniKapiju() {
    vrhoviKapije.innerHTML = "";

    let model = modelKapije.value;
    let boja = bojaKapije.value;

    let sirina = Number(sirinaKapije.value);
    let visina = Number(visinaKapije.value);

    // Promena boje
    skicaKapije.style.color = boja;

    // Promena modela
    let cenaPoKvadratu;

    if (model === "klasicna") {

        ukrasi.style.display = "block";
        cenaPoKvadratu = CENA_KLASICNE;

        rezultat.textContent =
            "Izabrali ste klasičnu kapiju.";

    } else {

        ukrasi.style.display = "none";
        cenaPoKvadratu = CENA_MODERNE;

        rezultat.textContent =
            "Izabrali ste modernu kapiju.";
    }

// Izbor dekorativnih elemenata

if (model === "klasicna" || model === "moderna") {

    ukrasi.style.display = "block";

    if (ukrasKapije.value === "krug") {

        ukrasi.innerHTML = `
            <circle cx="115" cy="110" r="28"
                fill="none"
                stroke="currentColor"
                stroke-width="5"/>

            <circle cx="285" cy="110" r="28"
                fill="none"
                stroke="currentColor"
                stroke-width="5"/>
        `;

    } else if (ukrasKapije.value === "spirala") {

        ukrasi.innerHTML = `
            <path d="
                M145 145
                C65 150 70 70 115 75
                C145 80 135 120 110 110

                M255 145
                C335 150 330 70 285 75
                C255 80 265 120 290 110
            "
            fill="none"
            stroke="currentColor"
            stroke-width="5"/>
        `;

    } else {

        ukrasi.innerHTML = "";
    }
}
    
    // PROMENA OBLIKA KAPIJE

    let oblik = oblikKapije.value;

    if (oblik === "ravna") {

        ramKapije.setAttribute(
            "d",
            "M30 30 H370 V190 H30 Z"
        );

    } else if (oblik === "lucna") {

        ramKapije.setAttribute(
            "d",
            "M30 45 Q200 -5 370 45 V190 H30 Z"
        );

    } else if (oblik === "talasasta") {

        ramKapije.setAttribute(
            "d",
            "M30 35 Q115 85 200 35 Q285 -15 370 35 V190 H30 Z"
        );

    }
    
        // SREDNJA ŠIPKA PRATI OBLIK KAPIJE

        if (oblik === "ravna") {
            srednjaSipka.setAttribute("y1", 30);

        } else if (oblik === "lucna") {
            srednjaSipka.setAttribute("y1", 20);

        } else if (oblik === "talasasta") {
            srednjaSipka.setAttribute("y1", 35);
        }

    // AUTOMATSKO CRTANJE VERTIKALNIH ŠIPKI

    sipkeKapije.innerHTML = "";

    const pozicijeSipki = [
        65, 100, 135, 170,
        230, 265, 300, 335
    ];

    pozicijeSipki.forEach(function(x) {

        let y = 30;

        if (oblik === "lucna") {

            let t = (x - 30) / 340;

            y = 45 - 100 * t * (1 - t);

        } else if (oblik === "talasasta") {

            if (x <= 200) {

                let t = (x - 30) / 170;

                y = 35 + 100 * t * (1 - t);

            } else {

                let t = (x - 200) / 170;

                y = 35 - 100 * t * (1 - t);
            }
        }

        // Pravimo novu SVG liniju

        const sipka = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "line"
        );

        sipka.setAttribute("x1", x);
        sipka.setAttribute("y1", y + 4);

        sipka.setAttribute("x2", x);
        sipka.setAttribute("y2", 186);

        sipka.setAttribute("stroke", "currentColor");
        sipka.setAttribute("stroke-width", "5");

        sipkeKapije.appendChild(sipka);
        
        // UKRASNI VRHOVI

        let vrh = vrhKapije.value;

        if (vrh !== "bez") {

            let element;

            if (vrh === "siljak") {

                element = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "polygon"
                );

                element.setAttribute(
                    "points",
                    `${x},${y - 18} ${x - 8},${y + 4} ${x + 8},${y + 4}`
                );

            } else if (vrh === "kugla") {

                element = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "circle"
                );

                element.setAttribute("cx", x);
                element.setAttribute("cy", y - 5);
                element.setAttribute("r", 8);

            } else if (vrh === "ornament") {

                element = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "path"
                );

                element.setAttribute(
                    "d",
                    `M${x} ${y - 19}
                     L${x - 9} ${y - 7}
                     L${x} ${y + 5}
                     L${x + 9} ${y - 7} Z`
                );
            }

            if (element) {
                element.setAttribute(
                    "fill",
                    "currentColor"
                );

                vrhoviKapije.appendChild(element);
            }
        }


    });


// Provera unetih dimenzija
    if (
        sirina < 100 || sirina > 600 ||
        visina < 100 || visina > 300 ||
        !Number.isFinite(sirina) ||
        !Number.isFinite(visina)
    ) {
        povrsinaKapije.textContent =
            "Unesite ispravne dimenzije.";

        cenaKapije.textContent = "—";
        return;
    }

    // Pretvaranje centimetara u metre
    let sirinaMetri = sirina / 100;
    let visinaMetri = visina / 100;

    // Površina
    let povrsina = sirinaMetri * visinaMetri;

    // Cena
    
    // BROJ I CENA UKRASNIH VRHOVA

    let brojVrhova = 8;

    let izabraniVrh = vrhKapije.value;

    let cenaVrhova = 0;

    if (izabraniVrh !== "bez") {
        cenaVrhova =
            brojVrhova * CENE_VRHOVA[izabraniVrh];
    }

    // UKUPNA CENA KAPIJE

    let ukupnaCena =
        povrsina * cenaPoKvadratu + cenaVrhova;
        
// PRIKAZ POJEDINAČNIH CENA

let cenaOsnovneKapije =
    povrsina * cenaPoKvadratu;

osnovnaCena.textContent =
    cenaOsnovneKapije.toLocaleString("sr-RS") + " RSD";

cenaDodataka.textContent =
    cenaVrhova.toLocaleString("sr-RS") + " RSD";



    // Prikaz rezultata
    povrsinaKapije.textContent =
        "Površina: " + povrsina.toFixed(2) + " m²";

    cenaKapije.textContent =
        ukupnaCena.toLocaleString("sr-RS") + " RSD";
}

// Promene u izboru i dimenzijama
modelKapije.addEventListener("change", promeniKapiju);
bojaKapije.addEventListener("change", promeniKapiju);

sirinaKapije.addEventListener("input", promeniKapiju);
visinaKapije.addEventListener("input", promeniKapiju);

// Pocetni prikaz
promeniKapiju();
ukrasKapije.addEventListener("change", promeniKapiju);
oblikKapije.addEventListener("change", promeniKapiju);
vrhKapije.addEventListener("change", promeniKapiju);

/* PROFIKOV - KORPA */

// Lista proizvoda u korpi

const korpa = JSON.parse(
    localStorage.getItem("profikovKorpa") || "[]"
);

 // ČUVANJE KORPE U PREGLEDAČU

function sacuvajKorpu() {

    localStorage.setItem(
        "profikovKorpa",
        JSON.stringify(korpa)
    );

}



// Povezivanje sa HTML elementima
const dugmeKorpa = document.getElementById("dodajUKorpu");
const brojStavki = document.getElementById("brojStavki");
const stavkeKorpe = document.getElementById("stavkeKorpe");
const ukupnoKorpe = document.getElementById("ukupnoKorpe");

// Prikaz proizvoda u korpi
function prikaziKorpu() {

    stavkeKorpe.innerHTML = "";

    brojStavki.textContent = korpa.length;

    let ukupno = 0;

   
korpa.forEach(function(proizvod, index) {

    ukupno += proizvod.cena;

    const stavka = document.createElement("div");
    stavka.className = "stavka-korpe";

    const opis = document.createElement("span");

    opis.textContent =
        proizvod.model + " | " +
        proizvod.sirina + " × " +
        proizvod.visina + " cm | " +
        proizvod.cena.toLocaleString("sr-RS") +
        " RSD";

    const dugmeUkloni = document.createElement("button");

    dugmeUkloni.type = "button";
    dugmeUkloni.textContent = "Ukloni";
    dugmeUkloni.className = "ukloni-proizvod";

    dugmeUkloni.addEventListener("click", function() {

        korpa.splice(index, 1);

        prikaziKorpu();

    });

    stavka.appendChild(opis);
    stavka.appendChild(dugmeUkloni);

    stavkeKorpe.appendChild(stavka);

});


    if (korpa.length === 0) {
        stavkeKorpe.textContent =
            "Korpa je trenutno prazna.";
    }

    ukupnoKorpe.textContent =
        ukupno.toLocaleString("sr-RS") + " RSD";
        sacuvajKorpu();
}


// Klik na dugme Dodaj u korpu
dugmeKorpa.addEventListener("click", function() {
    
    const sirina = Number(sirinaKapije.value);
    const visina = Number(visinaKapije.value);

    if (
        !Number.isFinite(sirina) ||
        !Number.isFinite(visina) ||
        sirina < 100 || sirina > 600 ||
        visina < 100 || visina > 300
    ) {
        alert("Unesite ispravne dimenzije kapije.");
        return;
    }

    const povrsina = (sirina * visina) / 10000;

    const cenaM2 = modelKapije.value === "klasicna"
        ? CENA_KLASICNE
        : CENA_MODERNE;

    const cenaUkrasnihVrhova =
        8 * CENE_VRHOVA[vrhKapije.value];

    const proizvod = {
        model: modelKapije.selectedOptions[0].text,
        boja: bojaKapije.selectedOptions[0].text,
        oblik: oblikKapije.selectedOptions[0].text,
        ukrasi: ukrasKapije.selectedOptions[0].text,
        vrhovi: vrhKapije.selectedOptions[0].text,
        sirina: sirina,
        visina: visina,
        cena: povrsina * cenaM2 + cenaUkrasnihVrhova
    };

    korpa.push(proizvod);

    prikaziKorpu();
});

// Početni prikaz korpe
prikaziKorpu();

/* PROFIKOV - FILTERI GALERIJE I PRIKAZI JOS */

const filterDugmad = document.querySelectorAll(".filter-dugme");
const fotografije = document.querySelectorAll(".galerija-kartica");

(function () {
    const grid = document.querySelector(".galerija-grid");
    if (!grid || fotografije.length === 0) return;

    const KORAK = 12;
    let prikazano = KORAK;
    let kategorija = "sve";

    // Dugme pravimo automatski: index.html ne mora da se menja.
    const dugmeVise = document.createElement("button");
    dugmeVise.type = "button";
    dugmeVise.id = "prikaziJosFotografija";
    dugmeVise.textContent = "Prikaži još fotografija";
    dugmeVise.style.cssText =
        "display:block;margin:32px auto 0;padding:14px 28px;" +
        "background:#d4af37;color:#111;border:0;border-radius:8px;" +
        "font-size:16px;font-weight:700;cursor:pointer;";
    grid.insertAdjacentElement("afterend", dugmeVise);

    function osveziGaleriju() {
        const odgovarajuce = Array.from(fotografije).filter(function (slika) {
            return kategorija === "sve" || slika.dataset.kategorija === kategorija;
        });

        fotografije.forEach(function (slika) {
            slika.style.display = "none";
        });
        odgovarajuce.slice(0, prikazano).forEach(function (slika) {
            slika.style.display = "";
        });

        if (odgovarajuce.length <= KORAK) {
            dugmeVise.style.display = "none";
        } else {
            dugmeVise.style.display = "block";
            dugmeVise.textContent = prikazano >= odgovarajuce.length
                ? "Prikaži manje"
                : "Prikaži još fotografija";
        }
    }

    filterDugmad.forEach(function (dugme) {
        dugme.addEventListener("click", function () {
            kategorija = dugme.dataset.filter;
            prikazano = KORAK;
            filterDugmad.forEach(function (d) {
                d.classList.remove("aktivan");
            });
            dugme.classList.add("aktivan");
            osveziGaleriju();
        });
    });

    dugmeVise.addEventListener("click", function () {
        const ukupno = Array.from(fotografije).filter(function (slika) {
            return kategorija === "sve" || slika.dataset.kategorija === kategorija;
        }).length;
        if (prikazano >= ukupno) {
            prikazano = KORAK;
            grid.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
            prikazano += KORAK;
        }
        osveziGaleriju();
    });

    osveziGaleriju();
})();

/* PROFIKOV - UVEĆAVANJE FOTOGRAFIJA */

(function () {
    const kartice = document.querySelectorAll(
        ".galerija-kartica"
    );

    const lightbox = document.getElementById("lightbox");
    const velikaSlika = document.getElementById("velikaSlika");
    const opis = document.getElementById("opisVelikeSlike");

    const zatvori = document.getElementById("zatvoriSliku");
    const prethodna = document.getElementById("prethodnaSlika");
    const sledeca = document.getElementById("sledecaSlika");

    if (!lightbox || !velikaSlika || !opis ||
        !zatvori || !prethodna || !sledeca) {
        return;
    }

    let trenutnaKartica = null;

    // Uzimamo samo fotografije iz izabrane kategorije
    function vidljiveKartice() {
        return Array.from(kartice).filter(function (kartica) {
            return kartica.style.display !== "none";
        });
    }

    // Otvaranje fotografije
    function prikaziSliku(kartica) {
        const slika = kartica.querySelector("img");

        if (!slika) return;

        trenutnaKartica = kartica;
        velikaSlika.src = slika.src;
        velikaSlika.alt = slika.alt;

        const naziv = kartica.querySelector("figcaption");
        opis.textContent = naziv ? naziv.textContent : "";

        lightbox.classList.add("otvoren");
    }

    // Klik na fotografiju
    kartice.forEach(function (kartica) {
        const slika = kartica.querySelector("img");

        if (slika) {
            slika.style.cursor = "pointer";

            slika.addEventListener("click", function () {
                prikaziSliku(kartica);
            });
        }
    });

    // Zatvaranje
    function zatvoriPrikaz() {
        lightbox.classList.remove("otvoren");
        trenutnaKartica = null;
    }

    zatvori.addEventListener("click", zatvoriPrikaz);

    // Prethodna ili sledeća fotografija
    function promeniSliku(korak) {
        const dostupne = vidljiveKartice();

        if (dostupne.length === 0 || !trenutnaKartica) {
            return;
        }

        const indeks = dostupne.indexOf(trenutnaKartica);

        const noviIndeks =
            (indeks + korak + dostupne.length)
            % dostupne.length;

        prikaziSliku(dostupne[noviIndeks]);
    }

    prethodna.addEventListener("click", function () {
        promeniSliku(-1);
    });

    sledeca.addEventListener("click", function () {
        promeniSliku(1);
    });

    // Zatvaranje klikom na tamnu pozadinu
    lightbox.addEventListener("click", function (dogadjaj) {
        if (dogadjaj.target === lightbox) {
            zatvoriPrikaz();
        }
    });

    // Tastatura: Esc, levo i desno
    document.addEventListener("keydown", function (dogadjaj) {
        if (!lightbox.classList.contains("otvoren")) {
            return;
        }

        if (dogadjaj.key === "Escape") {
            zatvoriPrikaz();
        }

        if (dogadjaj.key === "ArrowLeft") {
            promeniSliku(-1);
        }

        if (dogadjaj.key === "ArrowRight") {
            promeniSliku(1);
        }
    });
    
/* PROFIKOV - PREVLAČENJE SLIKA PRSTOM */

let pocetakDodira = 0;

velikaSlika.addEventListener("touchstart", function(e) {
    pocetakDodira = e.changedTouches[0].screenX;
}, { passive: true });

velikaSlika.addEventListener("touchend", function(e) {
    const krajDodira = e.changedTouches[0].screenX;
    const razlika = krajDodira - pocetakDodira;

    // Ignorišemo veoma kratke pokrete
    if (Math.abs(razlika) < 50) return;

    if (razlika < 0) {
        promeniSliku(1);  // Prst ulevo
    } else {
        promeniSliku(-1); // Prst udesno
    }
}, { passive: true });

})();

/* PROFIKOV - MOBILNI MENI */

const menuToggle = document.getElementById("menuToggle");
const mobilnaNavigacija = document.getElementById("mobilnaNavigacija");

if (menuToggle && mobilnaNavigacija) {

    // Otvaranje i zatvaranje menija
    menuToggle.addEventListener("click", function () {

        const otvoren = mobilnaNavigacija.classList.toggle("otvoren");

        menuToggle.setAttribute("aria-expanded", otvoren);
        menuToggle.setAttribute(
            "aria-label",
            otvoren ? "Zatvori meni" : "Otvori meni"
        );

        menuToggle.innerHTML = otvoren ? "&times;" : "&#9776;";
    });

    // Zatvaranje kada izaberemo stranicu
    mobilnaNavigacija.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            mobilnaNavigacija.classList.remove("otvoren");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Otvori meni");
            menuToggle.innerHTML = "&#9776;";

        });

    });

}

/* PROFIKOV - SLANJE UPITA IZ KORPE */

const dugmeUpit = document.getElementById("posaljiUpit");

if (dugmeUpit) {

    dugmeUpit.addEventListener("click", async function () {
        

        const forma = document.getElementById("formaUpit");

        // Proveravamo obavezna polja
        if (!forma.reportValidity()) {
            return;
        }

        const ime = document.getElementById("imeKupca").value.trim();
        const telefon = document.getElementById("telefonKupca").value.trim();
        const email = document.getElementById("emailKupca").value.trim();
        const napomena = document.getElementById("napomenaKupca").value.trim();

        // Provera da li je korpa prazna
        const brojStavki = Number(
            document.getElementById("brojStavki").textContent
        );

        if (brojStavki === 0) {
            alert("Prvo dodajte kapiju u korpu.");
            return;
        }

        // Preuzimamo proizvode i ukupnu cenu iz korpe
        const stavke = document.getElementById("stavkeKorpe")
            .innerText
            .replace(/Ukloni/g, "")
            .trim();

        const ukupno = document.getElementById("ukupnoKorpe")
            .innerText
            .trim();

        const naslov = "PROFIKOV - Zahtev za ponudu";

        const poruka = [
            "NOVI ZAHTEV ZA PONUDU",
            "",
            "Ime i prezime: " + ime,
            "Telefon: " + telefon,
            "Email: " + (email || "Nije unet"),
            "",
            "IZABRANI PROIZVODI:",
            stavke,
            "",
            "Ukupna okvirna cena: " + ukupno,
            "",
            "NAPOMENA:",
            napomena || "Bez dodatne napomene"
        ].join("\n");

        const primalac = "kovacstanojlovic@gmail.com";

        
/* PROFIKOV - OTVARANJE GMAIL-A */

/* PROFIKOV - AUTOMATSKO SLANJE UPITA */

const podaci = new FormData();

podaci.append("ime", ime);
podaci.append("telefon", telefon);
podaci.append("email", email);
podaci.append("napomena", napomena);
podaci.append("proizvodi", stavke);
podaci.append("ukupnaCena", ukupno);
podaci.append("_subject", "PROFIKOV - Novi zahtev za ponudu");

dugmeUpit.disabled = true;
dugmeUpit.textContent = "Slanje upita...";

try {

    const odgovor = await fetch(
        "https://formspree.io/f/myekjzga",
        {
            method: "POST",
            body: podaci,
            headers: {
                "Accept": "application/json"
            }
        }
    );

    if (odgovor.ok) {

        alert("Vaš zahtev je uspešno poslat!");

        forma.reset();

    } else {

        alert("Upit nije poslat. Pokušajte ponovo.");

    }

} catch (greska) {

    alert("Greška pri povezivanju. Proverite internet.");

} finally {

    dugmeUpit.disabled = false;
    dugmeUpit.textContent = "Pošalji upit za ponudu";

}


    });

}
/* PROFIKOV - PROMENA JEZIKA SR / EN */

const dugmeJezik = document.getElementById("languageBtn");

let trenutniJezik = "sr";

const prevodiNavigacije = {
    sr: ["Početna", "O nama", "Galerija", "Konfigurator", "Kontakt"],
    en: ["Home", "About Us", "Gallery", "Configurator", "Contact"]
};

if (dugmeJezik) {

    dugmeJezik.addEventListener("click", function () {

        trenutniJezik = trenutniJezik === "sr" ? "en" : "sr";

        const linkovi = document.querySelectorAll("#mobilnaNavigacija a");

        linkovi.forEach(function (link, indeks) {
            link.textContent = prevodiNavigacije[trenutniJezik][indeks];
        });

        dugmeJezik.textContent = trenutniJezik === "sr" ? "SR" : "EN";

        document.documentElement.lang = trenutniJezik;

    });

}
