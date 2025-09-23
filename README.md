# Praktisk Laboration (Moment 3 - Angular I)

## Beskrivning
En enkel webbapplikation med tre undersidor och routing.  
Applikationen gör det möjligt för användaren att:
- Konvertera från meter/fahrenheit och meter/feet
- Navigera mellan de olika undersidorna
- Se en bild på startsidan

---

## Tekniker
- **TypeScript**
- **Angular**
- **CSS**
- **HTML**
- **Routing**
- **ngModel**

---

## Konstruktion av lösningen

### 1. **Komponenter**
- `HeaderComponent` - Navigering
- `HomeComponent` - Startsida med bild
- `ConvertComponent` - Konvertering av enheter
- `AboutComponent` - Informationssida
- `Not-foundComponent` - fallback vid ogiltig URL


### 2. **Konvertering**
Fyra metoder för att konverter:
- Celsius till Fahrenheit och vice versa 
- Meter till Feet och vice versa 
Metoderna anropas automatiskt när användaren lägger till ett värde.

---

### 3. **Routing**
- Konfigurerad i `app.routes.ts`
- Navigering fungerar med `RouterLink` och `RouterLinkActive`