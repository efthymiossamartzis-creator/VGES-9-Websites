# 09 — PEDIA LEARNING CENTER (Demo Website)

Πλήρως λειτουργικό, αυτόνομο και ελαφρύ static website για το concept **PEDIA LEARNING CENTER — ΕΚΠΑΙΔΕΥΤΙΚΟ ΚΕΝΤΡΟ**, σχεδιασμένο για το portfolio του VGES Online Websites.

## Χαρακτηριστικά
- **Αρχιτεκτονική**: Zero-dependency static HTML5, σύγχρονο CSS3 με custom properties, vanilla ES6 JavaScript.
- **Ενότητες**:
  1. `#top`: Στατικό split hero με σαφή τίτλο, φιλική τυπογραφία και πρωτότυπο διανυσματικό γραφικό μάθησης.
  2. `#programs`: 4 εκπαιδευτικά προγράμματα (Καθημερινή μελέτη, Ενίσχυση μαθημάτων, Γλωσσική ανάπτυξη, Δεξιότητες μάθησης).
  3. `#about`: Φιλοσοφία χώρου αποριών και προόδου με απεικόνιση σύγχρονης βιβλιοθήκης.
  4. `#process`: Τρίπτυχο πορείας (Γνωριμία, Στόχοι, Διαδρομή μάθησης).
  5. `#learning`: 3 πυλώνες μεθόδου (Οργάνωση, Εξάσκηση, Ανατροφοδότηση).
  6. `#faq`: Native HTML5 `<details>` για απαντήσεις προς γονείς χωρίς JavaScript εξάρτηση.
  7. `#contact`: Τοπική δοκιμή φόρμας ενδιαφέροντος αποκλειστικά για ενήλικες (χωρίς δεδομένα παιδιών ή βαθμολογίες).
  8. Footer: Πλήρης δήλωση σχεδιαστικού demo, σύνδεσμοι πλοήγησης και copyright.

## Τοπικός Έλεγχος
```bash
npx serve site
# ή
python -m http.server 8080 -d site
```

## Cloudflare Pages Deployment
- **Project Name**: `vges-pedia-learning`
- **Target URL**: `https://vges-pedia-learning.pages.dev`
- **Build Output Directory**: `site`
- **Build Command**: κανένα (static asset upload)
