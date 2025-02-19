# Telegram Mini-App Umfrage

## 🚀 Über diese App
Dies ist eine Telegram Mini-App zur Durchführung von Umfragen. Nutzer können für verschiedene Features abstimmen und die aktuellen Ergebnisse in Echtzeit sehen.

## 📂 Dateien
- `index.html`: Hauptseite mit Umfrageformular und Ergebnisanzeige
- `styles.css`: Design und Layout der App
- `script.js`: Verbindung zu Supabase und Echtzeit-Auswertung

## 🔧 Voraussetzungen
1. **Supabase-Projekt mit Tabelle `umfrage`**
   - Spalten: `id (UUID)`, `feature (TEXT)`, `created_at (TIMESTAMP)`
2. **Supabase URL und ANON KEY**
3. **Hosting-Plattform (z. B. Vercel oder Netlify)**
4. **Telegram-Bot mit WebApp-Integration**

## 🚀 Installation
### 1. Supabase einrichten:
- Gehe zur [Supabase Console](https://app.supabase.com/)
- Erstelle ein neues Projekt und aktiviere eine Datenbank
- Erstelle die Tabelle `umfrage` mit den Spalten:
  - `id (UUID, Primary Key, Default: gen_random_uuid())`
  - `feature (TEXT, Not Null)`
  - `created_at (TIMESTAMP, Default: now(), Not Null)`
- Erstelle die folgenden Policies:
```sql
CREATE POLICY "Öffentliche Schreibrechte"
ON public.umfrage
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Öffentliches Lesen der Ergebnisse"
ON public.umfrage
FOR SELECT
USING (true);
```
### 2. Dateien hochladen:
- Lade alle Dateien (`index.html`, `styles.css`, `script.js`) auf eine Hosting-Plattform wie **Vercel** oder **Netlify**
- Stelle sicher, dass die Dateien öffentlich zugänglich sind

### 3. Telegram-Bot einrichten:
- Erstelle einen Telegram-Bot mit dem [BotFather](https://t.me/BotFather)
- Nutze den Befehl `/setdomain`, um die Hosting-URL der WebApp festzulegen

## 🔗 Weiterführendes Tutorial
Für eine detaillierte Anleitung zur Erstellung und Integration dieser Umfrage-App, besuche bitte das Tutorial auf: [Erstellung einer Umfrage-App mit Telegram Mini-Apps](https://telegram-mini-apps.de/docs/erstellung-einer-umfrage-app-mit-telegram-mini-apps/)

## 📧 Support
Falls du Fragen oder Probleme hast, schreib mir auf Telegram!

Viel Spaß beim Entwickeln! 🚀
