# DEPLOYMENT CHECKLIST

Κατάσταση: οδηγός μελλοντικού ελέγχου. Κανένα κουτί δεν σημαίνει ότι έγινε test.

- [ ] Σωστή ταυτότητα και απομονωμένος φάκελος project· το Studio/portfolio παραμένουν ανέπαφα.
- [ ] Έλεγχος πραγματικού ZIP, αρχείων άδειας και dependency versions.
- [ ] Publish directory `site/`, με `index.html` ακριβώς στη ρίζα του.
- [ ] HTML/CSS/JS χωρίς απαραίτητο build. Μόνο τελικά απαραίτητα assets, χωρίς ZIP/briefs/.env.
- [ ] Τοπικός HTTP server από το `site/`. Έλεγχος όλων των URLs και πεζών/κεφαλαίων paths.
- [ ] 1440×900, 1280×800, 768×1024, 360×800, 390×844: layout/menu/CTAs/φόρμα/gallery όπου υπάρχει.
- [ ] Keyboard, focus, Esc, reduced motion, no JS, zoom 200%, contrast και ελληνικοί χαρακτήρες.
- [ ] Console και network: χωρίς σφάλματα/404, κατάλληλες εικόνες και χωρίς ατεκμηρίωτα hotlinks.
- [ ] Demo form χωρίς αποστολή, αποθήκευση ή fake booking confirmation.
- [ ] Όλα τα assets έχουν πηγή/άδεια και σωστό alt· αντικατάσταση sample assets.
- [ ] Όχι ψεύτικες διευθύνσεις, τηλέφωνα, social links, reviews, credentials, τιμές ή υποσχέσεις.
- [ ] Meta title/description/lang/noindex. Canonical και absolute OG μόνο όταν δοθεί πραγματικό hostname.
- [ ] Μετρήσεις performance εφόσον εκτελεστούν, όχι εικαστικά scores.
- [ ] Screenshots τελικού desktop/mobile και πίνακας PASS/FAIL/NOT RUN/N/A με αποδείξεις.
- [ ] Ο χρήστης ελέγχει το diff και τις εκκρεμότητες πριν δημιουργήσει ξεχωριστό repository στο GitHub Desktop.
- [ ] Με νέα εντολή: ξεχωριστό Cloudflare Pages project, framework None, χωρίς αναγκαίο build, publish folder που αντιστοιχεί στο `site/`. Επιβεβαίωση των πραγματικών dashboard πεδίων κατά την εκτέλεση.
- [ ] Πρώτα preview, έλεγχος HTTPS/σελίδων/assets/headers/κινητού και έπειτα τελική δημοσίευση από τον χρήστη.
- [ ] Με το πραγματικό preview URL: σωστά absolute OG paths και canonical όπου επιλεγεί, χωρίς εικονικό domain. Το demo παραμένει noindex μέχρι συνειδητή αλλαγή.
- [ ] Πραγματική εμπορική χρήση μόνο μετά αντικατάσταση demo content, επιβεβαίωση υπηρεσιών και δοκιμασμένο backend αν ενεργοποιηθεί.

## Ειδικός έλεγχος AURELIO BARBERSHOP

- [ ] ΑΝ ΔΕΝ έχουν δοθεί τα υπάρχοντα αρχεία Aurelio, σταμάτησε τις αλλαγές και ζήτησε τον σωστό φάκελο ή ZIP. Μην χρησιμοποιήσεις το αρχικό Fade για να δημιουργήσεις νέο Aurelio. Αν υπάρχουν αρχεία, κατέγραψε πρώτα την ταυτότητα του project, τις αλλαγές και τυχόν uncommitted εργασία. Εργάσου σε αντίγραφο και δώσε μικρό diff· μην αντικαταστήσεις ολόκληρα αρχεία χωρίς ανάγκη.
