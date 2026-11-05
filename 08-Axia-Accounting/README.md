# 08 — AXIA ACCOUNTING (Demo Website)

Πλήρως λειτουργικό, αυτόνομο και ελαφρύ static website για το concept **AXIA ACCOUNTING — ΛΟΓΙΣΤΙΚΕΣ & ΦΟΡΟΛΟΓΙΚΕΣ ΥΠΗΡΕΣΙΕΣ**, σχεδιασμένο για το portfolio του VGES Online Websites.

## Χαρακτηριστικά
- **Αρχιτεκτονική**: Zero-dependency static HTML5, σύγχρονο CSS3 με custom properties, vanilla ES6 JavaScript.
- **Ενότητες**:
  1. `#top`: Συμπαγές τυπογραφικό hero σε λευκή βάση με διανυσματικό structured ledger graphic.
  2. `#services`: 4 αριθμημένες γραμμές ευρετηρίου (01. Λογιστική οργάνωση, 02. Φορολογική υποστήριξη, 03. Μισθοδοσία, 04. Έναρξη & οργάνωση δραστηριότητας).
  3. `#audience`: 3 στήλες κοινού (Ιδιώτες, Ελεύθεροι επαγγελματίες, Μικρές επιχειρήσεις).
  4. `#process`: Τετράβαθμη διαδικασία συνεργασίας (Κατανόηση ανάγκης, Οργάνωση πληροφοριών, Συμφωνία αντικειμένου, Επόμενα βήματα).
  5. `#about`: Φιλοσοφία διαφάνειας και επαγγελματικής εικόνας.
  6. `#faq`: Native HTML5 `<details>` για συχνές ερωτήσεις χωρίς JavaScript εξάρτηση.
  7. `#contact`: Τοπική δοκιμή φόρμας γενικού ενδιαφέροντος χωρίς ζήτηση ΑΦΜ ή οικονομικών δεδομένων.
  8. Footer: Πλήρης δήλωση σχεδιαστικού demo, σύνδεσμοι πλοήγησης και copyright.

## Τοπικός Έλεγχος
```bash
npx serve site
# ή
python -m http.server 8080 -d site
```

## Cloudflare Pages Deployment
- **Project Name**: `vges-axia-accounting`
- **Target URL**: `https://vges-axia-accounting.pages.dev`
- **Build Output Directory**: `site`
- **Build Command**: κανένα (static asset upload)
