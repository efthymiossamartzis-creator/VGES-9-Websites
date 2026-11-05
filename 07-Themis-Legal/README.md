# 07 — THEMIS LEGAL (Demo Website)

Πλήρως λειτουργικό, αυτόνομο και ελαφρύ static website για το concept **THEMIS LEGAL — ΝΟΜΙΚΕΣ ΥΠΗΡΕΣΙΕΣ**, σχεδιασμένο για το portfolio του VGES Online Websites.

## Χαρακτηριστικά
- **Αρχιτεκτονική**: Zero-dependency static HTML5, σύγχρονο CSS3 με custom properties, vanilla ES6 JavaScript.
- **Ενότητες**:
  1. `#top`: Αυστηρό editorial hero με διανυσματικό background κιόνων και σαφή H1.
  2. `#services`: 4 αριθμημένες θεματικές ενότητες νομικών υπηρεσιών (Αστικό, Εμπορικό, Ακίνητα, Οικογενειακές).
  3. `#about`: Φιλοσοφία σαφούς πληροφόρησης και εικονογράφηση γραφείου μελέτης.
  4. `#process`: Τριφασική ροή συνεργασίας (Αρχική επικοινωνία, Κατανόηση, Επόμενα βήματα).
  5. `#faq`: Native HTML5 `<details>` για συχνές ερωτήσεις χωρίς JavaScript εξάρτηση.
  6. `#contact`: Τοπική δοκιμή εμπειρίας χρήστη χωρίς αποστολή ευαίσθητων δεδομένων.
  7. Footer: Πλήρης δήλωση σχεδιαστικού demo, σύνδεσμοι πλοήγησης και copyright.

## Τοπικός Έλεγχος
```bash
npx serve site
# ή
python -m http.server 8080 -d site
```

## Cloudflare Pages Deployment
- **Project Name**: `vges-themis-legal`
- **Target URL**: `https://vges-themis-legal.pages.dev`
- **Build Output Directory**: `site`
- **Build Command**: κανένα (static asset upload)
