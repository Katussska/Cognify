# Cognify

## Versatile Multi-LLM Chat Application with User Profiles and Group Chats

Cognify je webová aplikace, která umožňuje uživatelům komunikovat s různými velkými jazykovými modely (LLM) a zároveň spravovat své uživatelské profily. Aplikace podporuje skupinové chaty, správu tokenů pro využití LLM, rozvětvování konverzací a jejich ukládání.

## Cíle projektu

Cílem této aplikace je nabídnout flexibilní prostředí, kde mohou uživatelé interagovat s více LLM službami a ostatními uživateli, přičemž mají plnou kontrolu nad svým profilem a možnostmi interakcí. Aplikace zahrnuje následující klíčové funkce:

- **Multi-LLM chat**: Možnost přepínání mezi různými LLM během chatu.
- **Groupchaty s LLM**: Uživatelé mohou sdílet chat s více lidmi v jednom chatu, kde každý může přispívat a komunikovat s LLM.
- **Správa uživatelských profilů**: Uživatelé mohou vytvářet a spravovat své profily.
- **Admin panel**: Správa tokenů a monitorování limitů (počet requestů/dolarů na určité časové období).
- **Rozvětvení konverzací**: Uživatelé mohou rozdělit konverzaci do různých větví a vizualizovat historii chatu, přičemž se mohou kdykoliv vrátit k předchozí větvi.
- **Ukládání zpráv**: Možnost ukládání jednotlivých zpráv nebo celých konverzací.

## Funkce aplikace

1. **Registrace a přihlášení uživatelů**: Uživatelé se mohou registrovat, přihlašovat a spravovat své účty.
2. **Groupchat s LLM**: Uživatelé mohou vytvářet skupinové konverzace s více lidmi, přičemž každý účastník může interagovat s LLM.
3. **Správa tokenů (admin)**: Správa počtu requestů nebo dolarového limitu, který každý uživatel může využít během určitého období. Tato možnost je dostupná pouze pro administrátory.
4. **Rozvětvení konverzace**: Uživatelé mohou větvit konverzace na různé scénáře a vizualizovat celou historii interakcí, s možností vracet se k předchozím větvím.
5. **Ukládání zpráv a konverzací**: Uživatelé mohou ukládat jednotlivé zprávy nebo celé konverzace pro budoucí reference.
6. **Základní statistiky**: Zobrazení statistik interakcí s různými LLM modely a přehled uživatelských aktivit.

## Technický stack

- **Frontend**: React, Remix, TailwindCSS
- **Backend**: Supabase
- **Jazyk**: TypeScript
- **Databáze**: PostgreSQL
- **Styling**: TailwindCSS

## Instalace a spuštění projektu

### 1. Klonování repozitáře

```bash
git clone https://github.com/tvuj-username/cognify.git
cd cognify
```

### 2. Instalace závislostí

Použijte následující příkaz pro instalaci všech potřebných závislostí projektu:

```bash
npm install
```

### 3. Nastavení prostředí

Vytvořte `.env` soubor v kořenovém adresáři projektu a přidejte do něj následující proměnné prostředí s vašimi klíči pro Supabase:

```env
SUPABASE_URL=<tvůj_supabase_url>
SUPABASE_ANON_KEY=<tvůj_supabase_anon_key>
```

### 4. Spuštění vývojového serveru

Aplikaci spustíte pomocí následujícího příkazu:

```bash
npm run dev
```

Po spuštění bude aplikace dostupná na `http://localhost:3000`.

### 5. Build pro produkci

Pro build aplikace pro produkční prostředí použijte:

```bash
bpm run build
```

Tento příkaz vygeneruje optimalizovanou verzi aplikace ve složce `build`, připravenou pro nasazení.

## Architektura

### Frontend

Aplikace využívá **React** pro komponentově orientovaný vývoj a **Remix** pro efektivní správu routování a server-side rendering (SSR). Remix umožňuje rychlou a efektivní práci s daty a poskytuje přímočarý způsob načítání dat z API a jejich správu.

### Backend

**Supabase** zajišťuje autentizaci uživatelů, ukládání dat a poskytování backend API. Používá **PostgreSQL** databázi, která ukládá uživatelské profily, zprávy, tokeny, statistiky a další interakce.

### Styling

Pro rychlou a efektivní tvorbu uživatelského rozhraní aplikace používá **TailwindCSS**, což zjednodušuje správu responzivního designu a umožňuje dynamické přizpůsobení stylů přímo ve vývoji.

### Databáze

Databázová vrstva využívá **PostgreSQL** a spravuje ji Supabase. Data zahrnují:

- Uživatelé (profily, přístupové role, statistiky)
- Chaty (groupchaty, jednotlivé zprávy, LLM interakce)
- Správa tokenů (limit počtu requestů a dolarových částek)
- Ukládání a historie konverzací

## Správa tokenů (Admin panel)

**Admin účet** poskytuje možnost spravovat využití LLM tokenů pro jednotlivé uživatele, nastavit limity pro počet požadavků nebo finanční náklady za určité časové období. Administrátor může sledovat využití tokenů v reálném čase a upravovat limity pro každého uživatele.

## Přispění

Přivítáme příspěvky ke zlepšení aplikace. Při odesílání pull requestů se ujistěte, že váš kód je dobře zdokumentovaný a prošel všemi testy.

## Licence

Tento projekt je licencován pod licencí **MIT**.
