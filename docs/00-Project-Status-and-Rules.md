# Project Status, Rules and Next Steps

Last updated: 24 October 2026

**मराठीत:** ही फाइल प्रोजेक्ट कुठपर्यंत आला आहे, काम करताना कोणते नियम पाळायचे, आणि पुढे काय करायचे हे सांगते. नवीन संगणकावर किंवा नवीन Claude सत्रात काम सुरू करताना सगळ्यात आधी ही फाइल वाचा.

---

## 1. Goal

- Build a new, modern real estate CRM for a builder in Maharashtra (Navi Mumbai, CIDCO projects).
- Take concepts from the two CRMs used today: **Beans Online** (post-sales, accounts, legal) and **HomeLead** (leads, sales, marketing).
- Make old concepts simple. Design must be **simple and premium**.
- **Reports** must be strong and complete.
- **Old data** from both systems must be importable in a very simple way.

**मराठीत:** आज कंपनी दोन वेगवेगळी सॉफ्टवेअर्स वापरते. नवीन CRM ही दोन्हींची कामे एकाच ठिकाणी, सोप्या पद्धतीने करेल.

---

## 2. Status

| Area | Status |
|---|---|
| Study of Beans Online (all pages, browse-only) | Done |
| Study of HomeLead (all main pages, browse-only) | Done |
| Feature documentation of both CRMs | Done (docs/01, docs/02) |
| Module documentation for the new CRM | Done (docs/03, 28 modules) |
| Real estate research (India / Maharashtra) | Done (docs/04, 94 requirements) |
| Useful ideas from the earlier plan | Done (docs/05) |
| Design brief checklist | Done (docs/06) |
| Design decisions | **Pending** |
| Visual design | **Not started** |
| Code | **Not started** |

---

## 3. Rules for Working on This Project

### Language

- Lists, list items, headings and table contents: **English**
- Explanations and guidance: **Marathi (Devanagari)**
- Commands, file paths and code: English

### Design and code

- **No design work** (colours, layouts, mockups) until the owner describes the design or answers the design questions.
- **No application code** until the owner says "start building" ("आता बनवायला सुरुवात करा").

### Studying the old CRMs (if more study is needed)

- The owner signs in. Never type passwords.
- **Browse only:** never create, edit, delete, submit forms, save settings, send messages or press confirm buttons.
- Open one page at a time at a human pace. **HomeLead rate-limits** fast browsing ("Too many requests"): wait at least 30 seconds between pages.
- Do not try to get past bot checks or CAPTCHAs; the owner solves them.

### Privacy

- The old CRMs contain live customer data.
- Never write any customer's or employee's name, phone, email, PAN, Aadhaar, bank account number or amount into any file.

### GitHub

- This repository is currently **public**. Files in `docs/01`, `docs/02` and `docs/study` describe internal CRM addresses and company details. The owner chose to keep them here.
- Ask the owner before pushing anything new.

---

## 4. Decisions Made So Far

- Menu grouped as **Pre-Sales, Sales, Post-Sales, Common**.
- Core list of **12 modules**: Dashboard; Projects & Inventory; Leads; Sales; Customers; Payments & Collections; Legal & Loans; Brokers; Letters & Messages; Reports; Team; Settings & Data Import.
- Research recommends **4 more modules** (owner approval pending):
  - 13. Compliance & Statutory Calendar
  - 14. Possession, Handover & Society
  - 15. Customer Service, Portal & Disputes
  - 16. Privacy & Consent (DPDP)
- Old concepts to simplify, for example:
  - One milestone checklist instead of a separate button for every legal date
  - Brokers kept separate from sale sources
  - 40+ old reports grouped into about 9 report groups
- Not adopted: the violet theme from the earlier plan.

---

## 5. Pending Decisions

### Design (see docs/06, Part A)

- Reference apps or screenshots the owner likes
- Brand: logo, app name
- Theme: light / dark / both
- Main colour and status colours
- Screen language: English / Marathi / both
- Devices: desktop first with mobile for sales staff, or other
- Density, menu style, fonts, icons
- Letterhead style for receipts and letters
- Customer portal look
- Design method: Figma, or clickable browser mockups

### Business rules (see docs/03, Part इ)

- 10 open questions, e.g. maximum joint applicants, parking by count or by number, interest rules, receipt allocation order, broker commission timing, CIDCO steps, accounting software, portals, extra modules

### Legal and tax confirmations (see docs/04, "Seventeen conflicts")

- 17 rules to confirm with IGR, MahaRERA, a CA or a lawyer, e.g. Navi Mumbai stamp duty, TDS forms after 1 April 2026, GST on commercial units, DPDP start date

---

## 6. Next Steps

1. Owner answers the design questions (docs/06, Part A) and shares references.
2. Owner answers the 10 business questions (docs/03) and approves the module list (12 + 4).
3. Confirm the 17 legal and tax conflicts with experts.
4. Prepare the style sheet, then simple layouts of the first 12 screens (docs/06, Part C).
5. Owner reviews the layouts, then final designs and a clickable prototype.
6. Only after the owner says so: choose the tech stack and start building, beginning with old data import, payments and reports.

---

## 7. How to Start a New Session

Tell Claude:

```text
README, docs/00-Project-Status-and-Rules.md आणि docs फोल्डर वाचून पुढे काम कर.
```

**मराठीत:** नवीन सत्रात Claude ला मागच्या गोष्टी आठवत नाहीत. ही फाइल आणि `CLAUDE.md` वाचल्यावर त्याला सगळे नियम आणि पुढचे काम कळेल.
