# IT-Portfolio – HTML/CSS/JavaScript

Professionelles, responsives Grundgerüst für eine Bewerbung im Bereich Fachinformatik – Systemintegration.

## Starten

Öffne `index.html` direkt im Browser. Es ist kein Build-Prozess und keine Installation erforderlich. Für lokale Entwicklung empfiehlt sich ein einfacher lokaler Webserver (z. B. VS Code Live Server).

## Inhalte bearbeiten

1. Suche in allen HTML-Dateien nach `ANPASSEN`, `PLATZHALTER` oder eckigen Klammern `[ ... ]`.
2. Ersetze `DEIN NAME`, E-Mail-Adresse, Links und Texte.
3. Skill-Balken: In `index.html` und `werdegang.html` die Prozentzahl in der Beschriftung, `aria-valuenow` **und** `style="--level:XX%"` gemeinsam ändern. Alle Werte sind Beispielwerte, keine echten Angaben.
4. Projekte: In `projekte.html` die Karten bearbeiten; `projekt-vorlage.html` für eigene Projekt-Detailseiten kopieren und die Links in der Projektübersicht anpassen.
5. Eigene Bilder unter `assets/images/` ablegen und die dekorativen Platzhalter bei Bedarf durch `<img>`-Elemente ersetzen. Beschreibende `alt`-Texte verwenden.
6. Deinen Lebenslauf unter `assets/documents/lebenslauf.pdf` ablegen. Erst dann den Hinweis-Link in `werdegang.html` und die statische Kontakt-Zeile in `kontakt.html` in einen echten Download-Link ändern.
7. Vor Veröffentlichung `impressum.html` und `datenschutz.html` auf Basis der tatsächlichen rechtlichen Anforderungen und des Hostings ausfüllen.

## Struktur

- `index.html`: Startseite, Projekte, Skill-Vorschau
- `projekte.html`: filterbare Projektübersicht
- `projekt-vorlage.html`: Vorlage für eine Projektdokumentation
- `werdegang.html`: Timeline, Skills mit Filtern, Qualifikationen
- `ueber-mich.html`: Motivation und Interessen
- `kontakt.html`: Kontaktlinks
- `impressum.html`, `datenschutz.html`: **noch nicht veröffentlichungsfertige** Rechtstext-Platzhalter
- `css/styles.css`: gemeinsames Designsystem und responsive Layouts
- `js/main.js`: Navigation, Filter, Animationen

## Hinweise

Die technischen Projekte und Prozentwerte sind ausschließlich Demonstrationsinhalte. Behaupte in deiner Bewerbung nur Kenntnisse, Zertifikate und Erfahrungen, die du tatsächlich hast. Keine sensiblen Netzwerkinformationen oder Zugangsdaten in Screenshots veröffentlichen.

Die Website verwendet keine externen Schriftarten, Frameworks oder Tracker. Sie ist statisch und benötigt keine serverseitige Verarbeitung.
