/* PROFIKOV SR/EN - probna verzija, ne menja izvorne fajlove */
(function () {
  "use strict";
  const translations = {
  "Pocetna": "Home",
  "Početna": "Home",
  "O nama": "About Us",
  "Galerija": "Gallery",
  "Konfigurator": "Configurator",
  "Kontakt": "Contact",
  "Umetnost oblikovanja metala": "The Art of Shaping Metal",
  "Kovane kapije, ograde i dekorativni elementi izrađeni po vašoj meri.": "Custom-made wrought-iron gates, fences and decorative elements.",
  "Kreirajte svoju kapiju": "Design Your Gate",
  "PORODIČNA TRADICIJA": "FAMILY TRADITION",
  "Dve generacije. Jedna umetnost.": "Two Generations. One Craft.",
  "PROFIKOV je zanatska radionica iz Malog Orašja, kod Smedereva. Naša priča počinje porodičnom tradicijom kovačkog zanata, koji se prenosi sa oca na sina.": "PROFIKOV is a metalworking workshop based in Malo Orašje, near Smederevo. Our story began with a family blacksmithing tradition passed down from father to son.",
  "Znanje nasleđeno od oca, koji je prema porodičnom svedočenju dobio priznanje za najboljeg kovača u Jugoslaviji, danas se nastavlja kroz ručnu izradu unikatnih metalnih proizvoda.": "Skills inherited from the father, who according to family accounts was recognized as the best blacksmith in Yugoslavia, live on today through the handcrafted production of unique metalwork.",
  "Od idejnog crteža i oblikovanja metala do završne montaže, svaki projekat izrađujemo sa pažnjom prema detaljima.": "From the initial design and metal shaping to final installation, we approach every project with attention to detail.",
  "Iskustvo stečeno kroz rad u Srbiji, Rusiji i Crnoj Gori dodatno je obogatilo naše zanatsko umeće.": "Experience gained through work in Serbia, Russia and Montenegro has further enriched our craftsmanship.",
  "Porodična tradicija": "Family Tradition",
  "Znanje koje se prenosi generacijama.": "Skills Passed Down Through Generations.",
  "Ručna izrada": "Handcrafted",
  "Majstorska preciznost u svakom detalju.": "Expert Precision in Every Detail.",
  "Od crteža do montaže": "From Design to Installation",
  "Kompletna realizacija po meri kupca.": "Complete Custom-Made Solutions.",
  "Naši radovi": "Our Work",
  "Preciznost, kvalitet i elegancija u svakom detalju. Pogledajte naše kapije, ograde, gelendere i unikatne radove.": "Precision, quality and elegance in every detail. Explore our gates, fences, railings and unique creations.",
  "Sve": "All",
  "Kapije": "Gates",
  "Ograde": "Fences",
  "Gelenderi": "Railings",
  "Dekoracija": "Decorative Work",
  "Kovana kapija": "Wrought-Iron Gate",
  "Dvorišna kapija": "Driveway Gate",
  "Dvorišna ograda": "Yard Fence",
  "Balkonska ograda": "Balcony Railing",
  "Stepenišni gelender": "Stair Railing",
  "Unutrašnji gelender": "Indoor Railing",
  "Kovana rasveta": "Wrought-Iron Lighting",
  "Unikatni radovi": "Unique Creations",
  "Ručno izrađena kovana kapija": "Handcrafted Wrought-Iron Gate",
  "Kapija sa ornamentima": "Ornamental Gate",
  "Dekorativna kapija": "Decorative Gate",
  "Pešačka kapija": "Pedestrian Gate",
  "Mala dvorišna kapija": "Small Yard Gate",
  "Kapija sa lukom": "Arched Gate",
  "Projekat kovane kapije": "Wrought-Iron Gate Design",
  "Moderna kapija": "Modern Gate",
  "Izrada kovane kapije": "Wrought-Iron Gate Production",
  "Crtež kapije": "Gate Drawing",
  "Ručna izrada panela": "Handcrafted Panel",
  "Plan kovane kapije": "Wrought-Iron Gate Plan",
  "Rucno izradjena ograda": "Handcrafted Fence",
  "Dekorativna kovana ograda": "Decorative Wrought-Iron Fence",
  "Ograda sa ornamentima": "Ornamental Fence",
  "Metalna ograda po meri": "Custom-Made Metal Fence",
  "Tradicionalna kovana ograda": "Traditional Wrought-Iron Fence",
  "Dvorisna ograda": "Yard Fence",
  "Ograda sa dekoracijom": "Decorative Fence",
  "Ograda za terasu": "Terrace Railing",
  "Dekorativna balkonska ograda": "Decorative Balcony Railing",
  "Ukrasni kovani gelender": "Decorative Wrought-Iron Railing",
  "Dekorativni gelender": "Decorative Railing",
  "Ručna izrada detalja": "Handcrafted Details",
  "Ukrasni metalni elementi": "Decorative Metal Elements",
  "Dekorativna rešetka": "Decorative Metal Grille",
  "Kovani ornamenti": "Wrought-Iron Ornaments",
  "Unikatni kovani rad": "Unique Wrought-Iron Work",
  "Detalji ručne izrade": "Handcrafted Details",
  "Dekorativni metalni rad": "Decorative Metalwork",
  "Majstorski kovani detalji": "Expertly Forged Details",
  "Metalni ukrasi": "Metal Decorations",
  "Unikatna dekoracija": "Unique Decoration",
  "Projektovanje gelendera": "Railing Design",
  "Unutrasnji gelender": "Indoor Railing",
  "Izrada gelendera": "Railing Production",
  "Detalji izrade gelendera": "Railing Production Details",
  "Ukrasni gelender": "Decorative Railing",
  "Gelender stepenista": "Stair Railing",
  "Spoljasnji gelender": "Outdoor Railing",
  "Crtez gelendera": "Railing Drawing",
  "Rucno kovani gelender": "Hand-Forged Railing",
  "Ukrasni kovani ornament": "Decorative Wrought-Iron Ornament",
  "Rucno oblikovan metal": "Hand-Shaped Metal",
  "Unikatni ornament": "Unique Ornament",
  "Kovana spirala": "Wrought-Iron Scroll",
  "Ukrasne spirale": "Decorative Scrolls",
  "Majstorski detalji": "Craftsmanship Details",
  "Kovani elementi u radionici": "Wrought-Iron Elements in the Workshop",
  "Idejni crtež kovane kapije": "Wrought-Iron Gate Concept Drawing",
  "Izrada metalnog panela": "Metal Panel Production",
  "Projekat metalne ograde": "Metal Fence Design",
  "Segment kovane ograde": "Wrought-Iron Fence Section",
  "Izrada ukrasne ograde": "Decorative Fence Production",
  "Ograda pre montaže": "Fence Before Installation",
  "Dekorativni panel ograde": "Decorative Fence Panel",
  "Detalji izrade ograde": "Fence Production Details",
  "Metalna konstrukcija": "Metal Structure",
  "Ograde na stambenom objektu": "Residential Fencing",
  "Kovana ograda izbliza": "Wrought-Iron Fence Close-Up",
  "Ograda stambenog objekta": "Residential Fence",
  "Detalj postavljene ograde": "Installed Fence Detail",
  "Ručno kovani panel": "Hand-Forged Panel",
  "Ukrasni panel u radionici": "Decorative Panel in the Workshop",
  "Metalni dekorativni paneli": "Decorative Metal Panels",
  "Elementi ručnog rada": "Handcrafted Elements",
  "Tehnički crtež": "Technical Drawing",
  "Izrada metalnih elemenata": "Metal Element Production",
  "Izrada metalne konstrukcije": "Metal Structure Production",
  "Dekorativni metalni radovi": "Decorative Metalwork",
  "Unikatna kovana kapija": "Unique Wrought-Iron Gate",
  "Majstorski detalji kapije": "Expert Gate Details",
  "Dekorativna kapija i ograda": "Decorative Gate and Fence",
  "Ukrasna balkonska ograda": "Decorative Balcony Railing",
  "Ograde terasa": "Terrace Railings",
  "Dizajnirajte svoju kapiju": "Design Your Gate",
  "Izaberite model i boju. Pogledajte kako izgleda vaša kapija.": "Choose a model and color. See what your gate will look like.",
  "Model kapije:": "Gate model:",
  "Klasična kapija": "Classic Gate",
  "Boja kapije:": "Gate color:",
  "Crna": "Black",
  "Antracit": "Anthracite",
  "Zlatna": "Gold",
  "Ukrasni elementi:": "Decorative elements:",
  "Kružni ukrasi": "Circular Ornaments",
  "Kovane spirale": "Wrought-Iron Scrolls",
  "Bez ukrasa": "No Decorations",
  "Oblik kapije:": "Gate shape:",
  "Ravni vrh": "Flat Top",
  "Lučni vrh": "Arched Top",
  "Talasasti vrh": "Wave-Shaped Top",
  "Ukrasni vrhovi:": "Decorative Finials:",
  "Bez vrhova": "No Finials",
  "Šiljasti vrhovi": "Pointed Finials",
  "Ukrasne kugle": "Decorative Balls",
  "Širina kapije (cm):": "Gate width (cm):",
  "Visina kapije (cm):": "Gate height (cm):",
  "🛒 Prikaži ponudu i korpu": "🛒 View Quote and Cart",
  "Okvirna ponuda": "Estimated Quote",
  "Osnovna cena:": "Base price:",
  "* Demonstraciona cena. Konačnu ponudu potvrđuje PROFIKOV.": "* Illustrative price only. PROFIKOV confirms the final quote.",
  "🛒 Dodaj u korpu": "🛒 Add to Cart",
  "Vaša korpa (": "Your Cart (",
  "Korpa je trenutno prazna.": "Your cart is currently empty.",
  "Ukupno:": "Total:",
  "* Prikazana cena je informativna. Konačna ponuda formira se nakon dogovora o dimenzijama, materijalu, ukrasima i uslovima montaže.": "* The displayed price is indicative. The final quote depends on the agreed dimensions, materials, decorations and installation conditions.",
  "Pošaljite zahtev za ponudu": "Request a Quote",
  "Popunite podatke i kontaktiraćemo vas u vezi sa izradom.": "Fill in your details and we will contact you about your order.",
  "Ime i prezime": "Full Name",
  "Telefon": "Phone",
  "Email (opciono)": "Email (optional)",
  "Napomena": "Notes",
  "Pošalji upit za ponudu": "Send Quote Request",
  "Izabrali ste klasičnu kapiju.": "You have selected a classic gate.",
  "Izabrali ste modernu kapiju.": "You have selected a modern gate.",
  "Pregled vaše kapije": "Your Gate Preview",
  "Izbor boje": "Color Selection",
  "Izrada po meri": "Made to Measure",
  "Prikaz uživo": "Live Preview",
  "Kovani elementi": "Wrought-Iron Elements",
  "Izaberite dekorativne kovane elemente za kapije, ograde i gelendere.": "Choose decorative wrought-iron elements for gates, fences and railings.",
  "Kovani šiljak": "Wrought-Iron Finial",
  "Cena: 250 RSD / kom": "Price: 250 RSD / piece",
  "Dodaj u korpu": "Add to Cart",
  "Cena na upit": "Price on Request",
  "Zatraži ponudu": "Request a Quote",
  "Kontaktirajte nas": "Contact Us",
  "Imate ideju za kapiju, ogradu ili gelender? Kontaktirajte nas i zajedno ćemo pronaći najbolje rešenje za vaš prostor.": "Have an idea for a gate, fence or railing? Contact us and we will find the best solution for your space together.",
  "📞 Telefon": "📞 Phone",
  "⚒️ Naše usluge": "⚒️ Our Services",
  "Izrada kovanih kapija, ograda, gelendera i dekorativnih elemenata po vašoj meri.": "Custom-made wrought-iron gates, fences, railings and decorative elements.",
  "Zatražite ponudu": "Request a Quote",
  "☎ Pozovite majstora": "☎ Call the Craftsman",
  "Kovane kapije, ograde, gelenderi i dekorativni elementi izrađeni po vašoj meri.": "Custom-made wrought-iron gates, fences, railings and decorative elements.",
  "Brzi linkovi": "Quick Links",
  "📞 Telefon:": "📞 Phone:",
  "📍 Malo Orašje, Smederevo": "📍 Malo Orašje, Smederevo",
  "Izrada po meri i dogovoru.": "Custom-made to your specifications.",
  "© 2026 PROFIKOV. Sva prava zadržana.": "© 2026 PROFIKOV. All rights reserved.",
  "Prikaži još fotografija": "Show More Photos",
  "Prikaži manje": "Show Less",
  "Ukloni": "Remove",
  "Unesite ispravne dimenzije.": "Please enter valid dimensions.",
  "Unesite ispravne dimenzije kapije.": "Please enter valid gate dimensions.",
  "Prvo dodajte kapiju u korpu.": "Please add a gate to your cart first.",
  "Vaš zahtev je uspešno poslat!": "Your request has been sent successfully!",
  "Upit nije poslat. Pokušajte ponovo.": "The request was not sent. Please try again.",
  "Greška pri povezivanju. Proverite internet.": "Connection error. Please check your internet connection.",
  "Slanje upita...": "Sending request...",
  "Otvori meni": "Open Menu",
  "Zatvori meni": "Close Menu"
};
  const originalNodes = new WeakMap();
  const originalAttrs = new WeakMap();
  let language = document.documentElement.lang === "en" ? "en" : "sr";
  let updating = false;
  const normalize = text => text.replace(/\s+/g, " ").trim();
  function translateText(value) {
    const key = normalize(value);
    if (translations[key]) {
      const start = value.match(/^\s*/)[0], end = value.match(/\s*$/)[0];
      return start + translations[key] + end;
    }
    if (/^Površina:/.test(key)) return value.replace("Površina:", "Area:");
    return value;
  }
  function walk(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      if (node.parentElement?.closest("script,style,textarea,svg")) return;
      if (!normalize(node.nodeValue)) return;
      let original = originalNodes.get(node);
      if (original === undefined) { original = node.nodeValue; originalNodes.set(node, original); }
      // New text written by the original script while English is active.
      if (language === "en" && node.nodeValue !== translateText(original) && node.nodeValue !== original) {
        original = node.nodeValue; originalNodes.set(node, original);
      }
      const target = language === "en" ? translateText(original) : original;
      if (node.nodeValue !== target) node.nodeValue = target;
    });
    const elements = root.querySelectorAll ? root.querySelectorAll("[placeholder],img[alt],button[aria-label]") : [];
    elements.forEach(el => {
      let saved = originalAttrs.get(el);
      if (!saved) {
        saved = {};
        ["placeholder", "alt", "aria-label"].forEach(attr => { if (el.hasAttribute(attr)) saved[attr] = el.getAttribute(attr); });
        originalAttrs.set(el,saved);
      }
      for (const [attr, original] of Object.entries(saved)) {
        el.setAttribute(attr, language === "en" ? translateText(original) : original);
      }
    });
  }
  function refresh() {
    if (updating) return;
    updating = true;
    try { observer.disconnect(); walk(document.body); document.title = language === "en" ? "PROFIKOV | Wrought-Iron Gates and Fences" : "PROFIKOV | Kovane kapije i ograde"; }
    finally { observer.observe(document.body, {subtree:true,childList:true,characterData:true}); updating = false; }
  }
  const button = document.getElementById("languageBtn");
  if (button) button.addEventListener("click", () => {
    // Existing language handler runs first, preserving the original navigation logic.
    language = document.documentElement.lang === "en" ? "en" : "sr";
    refresh();
  });
  const observer = new MutationObserver(() => { if (!updating) refresh(); });
  observer.observe(document.body, {subtree:true,childList:true,characterData:true});
  // Translate alerts generated by the existing app without changing its calculations.
  const originalAlert = window.alert.bind(window);
  window.alert = message => originalAlert(language === "en" ? translateText(String(message)) : message);
  refresh();
})();
/* PROFIKOV - PORUKE ZA OBAVEZNA POLJA */

document.querySelectorAll("#formaUpit input[required]")
    .forEach(function(polje) {

        polje.addEventListener("invalid", function() {
            this.setCustomValidity(
                document.documentElement.lang === "en"
                    ? "Please fill out this field."
                    : "Molimo vas da popunite ovo polje."
            );
        });

        polje.addEventListener("input", function() {
            this.setCustomValidity("");
        });
    });

document.getElementById("languageBtn")
    .addEventListener("click", function() {
        document.querySelectorAll("#formaUpit input[required]")
            .forEach(polje => polje.setCustomValidity(""));
    });
