# Real Estate CRM — Development Plan

## Context (हा project का बनवत आहोत)
बिल्डर/developer साठी एक **web-based CRM** बनवायचा आहे — जिथे leads, properties, deals एका ठिकाणी manage होतील आणि sales चा आढावा dashboard वर दिसेल. User beginner आहे, त्यामुळे plan step-by-step व शिकण्यासाठी सोपा ठेवला आहे. हा एक नवीन (greenfield) project आहे — सध्या फोल्डरमध्ये code नाही.

## निर्णय झालेले (Decisions)
- **कोणासाठी:** बिल्डर/developer (अनेक projects, flats/plots, booking)
- **Platform:** Web app (browser)
- **Frontend:** React (Vite + Tailwind CSS)
- **Backend/Database:** Supabase (PostgreSQL + Auth + Storage — ready-made)
- **Features (final scope):**
  1. Leads management (search/filter, follow-up)
  2. Property listings (photos, filter)
  3. Deal pipeline (inquiry → sold)
  4. Dashboard / Reports
  5. **Payments** — booking amount + installment/EMI tracking, payment receipt
  6. **Documents** — (a) upload (Aadhaar, PAN, agreement scan) + (b) generate (Allotment Letter, NOC, Payment Receipt, Booking/Agreement letter → PDF)
  7. **Unit availability chart** — tower/floor नुसार available/booked/sold visual
  8. **Global search** — customer नाव किंवा flat number ने सर्व data मधून शोध
  9. **Reports export** — leads/payments reports Excel व PDF मध्ये download
  10. **Reminders/Notifications** — follow-up व installment-due ची app-मधील आठवण (bell icon)
  11. **Activity log/History** — कोणत्या user ने कधी काय बदलले याची नोंद
  12. **Bulk import** — जुने leads/customers Excel मधून एकदम import
  13. **Role-wise permissions** — admin/agent ला कोणते page/data दिसावे याचे नियंत्रण (RLS + UI route guard)

- **सध्या वगळलेले (नंतर):** WhatsApp/SMS/Email notifications, Broker/channel partner, Commission tracking, Site-visit scheduling, Portal integrations (99acres/MagicBricks/FB), Expense tracking

## का Supabase?
CRM मध्ये reports, filtering, search खूप लागतात → त्यासाठी SQL (PostgreSQL) सर्वात योग्य. शिवाय login (Auth) आणि property photos साठी storage readymade मिळते, त्यामुळे beginner ला फक्त features वर लक्ष देता येईल.

---

## Database Design (Supabase tables)
सुरुवातीचे मुख्य tables:

1. **profiles** — users (admin, agent). Supabase Auth शी जोडलेले.
   - id, name, email, role, phone
2. **projects** — बिल्डरचे projects (उदा. "Green Valley")
   - id, name, address, location, **project_type (residential / residential+commercial)**, status, **amenities[]** (gym/garden/lift... — कितीही)
   - **project_media** (वेगळे table): id, project_id, media_type (image/document/brochure/video/project_plan), file_url, title — कितीही entries (Supabase Storage)
3. **properties** — units (flat/shop/office)
   - id, project_id, wing, floor, flat_no, **unit_category (flat/shop/office)**, flat_type (1BHK/2BHK... — फक्त flat साठी), **area (sq.ft)**, price, status (available/booked/sold), photos[]
   - रचना: project → wing → floor → unit (availability chart यावर आधारित)
   - Residential unit = Flat; Commercial unit = Shop किंवा Office
4. **leads** — ग्राहक/inquiry
   - id, name, phone, email, source, budget, status (hot/warm/cold), assigned_to (agent), notes
5. **deals** — deal pipeline
   - id, lead_id, property_id, stage (inquiry/visit/negotiation/booking/sold), amount, agent_id
6. **followups** — reminders/tasks
   - id, lead_id, due_date, note, done
7. **payments** — booking व installment नोंदी
   - id, deal_id, amount, payment_date, mode (cash/cheque/online), installment_no, receipt_no, notes
   - **bank_account_id** — पैसे कोणत्या project bank account मध्ये आले (त्या project च्या accounts मधून निवड)
8. **documents** — upload केलेले व generate केलेले documents
   - id, customer/lead_id, deal_id, doc_type (aadhaar/pan/agreement/allotment/noc/receipt...), source ('uploaded' / 'generated'), file_url, created_at
9. **doc_templates** — generate साठी templates (allotment, noc, receipt, booking)
   - id, name, doc_type, template_content (placeholders सह)
10. **notifications** — reminders व alerts
    - id, user_id, type (followup/payment_due), message, related_id, is_read, due_date
11. **activity_log** — history/audit
    - id, user_id, action, entity (lead/deal/payment...), entity_id, details, created_at
12. **applicants** — booking चा applicant व co-applicant
    - id, deal_id, role ('applicant'/'co_applicant'), name, aadhaar_no, pan_no, address, mobile, alt_mobile, email
13. **payment_schedules** — आधीच तयार केलेले payment plan templates (booking wizard step 3 मध्ये निवडायला)
    - id, name, funding_type (loan/self), installments[] (टप्पा नाव + **टक्केवारी %** + due अट)
    - **टक्केवारी आधारित** — प्रत्येक हप्ता total किमतीच्या % नुसार (उदा. booking 10%, slab 30%, possession 60%). App रक्कम = deal amount × % मोजेल.
14. **deal_charges** — final deal चे extra charges (booking wizard step 5)
    - id, deal_id, charge_type, amount, note
    - dropdown ला default: **Parking, GST** — admin ला अजून types जोडता येतील (charge_types हे settings मध्ये configurable ठेवू)
15. **project_bank_accounts** — प्रत्येक project चे एक किंवा अनेक bank accounts
    - id, project_id, bank_name, account_holder, account_no, ifsc, branch
    - project add करतानाच नोंदवायचे. Payment नोंदवताना **त्याच project चे** accounts dropdown मध्ये दिसतील.

नोंद: **flat_type** ही fixed यादी नाही — project/property तयार करताना admin स्वतःचे types (उदा. 1BHK, 2BHK, 3BHK, Shop...) टाकेल व हवे तसे नवीन जोडता येतील. Booking wizard मध्ये flat निवडल्यावर तोच type auto भरेल.
नोंद: document generate वर **company branding (logo/नाव/पत्ता) नंतर ठरवायचे** — सध्या simple ठेवू.

deals table वाढवणे: booking_date, funding_type (loan/self), assigned_schedule_id, final_amount जोडणे.

Relationships: lead → deal → property → project; payments → deal; documents → lead/deal (foreign keys नी जोडणे).
Unit availability: `properties.status` वरून tower/floor नुसार मोजून chart दाखवणे (वेगळे table नको).
Security: Supabase Row Level Security (RLS) — agent ला फक्त स्वतःचे leads, admin ला सगळे.

---

## Booking Wizard (5-step form)
image प्रमाणे वरती numbered stepper (1→2→3→4→5) व खाली त्या step चे fields, "Next"/"Back" बटण. डेटा एका temporary state मध्ये जमा होईल; शेवटी Submit केल्यावर सर्व एकदम database मध्ये जाईल.

**Step 1 — Customer Details**
- Applicant + Co-applicant (दोघांचे वेगळे section)
- प्रत्येकाचे: नाव, Aadhaar No, PAN No (Aadhaar/PAN चे fields त्या व्यक्तीखाली)
- Address, Mobile, Alternative mobile, Email

**Step 2 — Flat/Unit Selection**
- कोणता flat द्यायचा तो निवडणे (project → tower → unit)
- Booking date
- Flat No, Flat Type → flat निवडल्यावर **automatic भरेल** (properties table मधून)

**Step 3 — Payment / Funding**
- Loan की Self-funding निवड
- आधी तयार केलेल्या payment_schedules मधून एक निवडून customer ला assign करणे (टप्पे तिथे दिसतील)

**Step 4 — Documents Upload**
- Aadhaar card, PAN card upload
- "Add more" ने अजून documents जोडता येतील (dynamic list)

**Step 5 — Final Deal**
- Final Deal Amount
- Extra charges: dropdown मधून charge_type निवडून amount लिहिणे — अनेक rows जोडता येतील (deal_charges)
- **Submit** → deal + applicants + charges + documents save होतील आणि set केलेली booking/membership document (template मधून) **automatic generate** होईल

> हा wizard **Phase 4 (Deal/Booking)** चा मुख्य भाग असेल. Payment schedule templates तयार करण्याचे काम **Phase 5** मध्ये, document generate **Phase 6** मध्ये जोडले जाईल.

---

## Project Add (wizard flow)
नवीन project add करणे हे पण **booking wizard सारखेच step-by-step wizard UI** ने — वरती numbered stepper (**1→2→3→4→5→6**, step नाव खाली), खाली त्या step चे fields, Next/Back बटण, शेवटी Submit. (Stepper हा एक **common reusable component** बनवू — दोन्ही wizards त्याच component वर चालतील.)

**Step 1 — Project माहिती:**
- Project Name, Project Address, Project Location
- **Project Type:** Residential **किंवा** Residential + Commercial

**Step 2 — Project रचना (structure):**
- Wings जोडणे (1 किंवा अनेक — उदा. Wing A, Wing B)
- प्रत्येक wing ला: Floors संख्या + प्रत्येक floor वर किती flats/units

**Step 3 — Unit Creation (पूर्ण inventory इथे तयार):**
- Step 2 च्या रचनेवरून units ची यादी तयार होईल (auto-generate: A-101, A-102...) + manual add/edit पण शक्य
- प्रत्येक unit ला भरायचे: **Flat Number**, **Type** (1BHK/2BHK...), **Area** (sq.ft)
- प्रत्येक unit चा **वापर-प्रकार**: Residential → **Flat**; Commercial → **Shop किंवा Office** (project type Residential+Commercial असेल तेव्हाच commercial पर्याय दिसेल)
- एकसारख्या units ना bulk-edit ने एकदम भरता येईल
- अशा प्रकारे project ची **पूर्ण inventory** याच step मध्ये तयार होईल

**Step 4 — Amenities व Media:**
- **Amenities** (उदा. gym, garden, parking, lift...) — हवे तेवढे add
- **Images** (project फोटो), **Project Documents**, **Brochure**, **Videos**, **Project Plan** (नकाशा)
- सर्व प्रकारात "+ Add more" — **कितीही files/entries जोडता येतील** (Supabase Storage मध्ये)

**Step 5 — Bank Accounts:** bank_name, account_no, IFSC, branch, holder — "+ Add more" ने अनेक accounts

**Step 6 — Custom Payment Schedules:**
- या project साठी **custom payment schedules तयार करणे** — 1 पेक्षा जास्त असू शकतात
- प्रत्येक schedule = नाव + टप्पे (टप्पा नाव + %)
- **हेच schedules booking wizard (step 3) मध्ये दिसतील** — त्यातून निवडून customer ला assign
- (शिवाय common templates Settings मध्येही ठेवता येतील — दोन्ही booking मध्ये दिसतील)

> payment_schedules table मध्ये project_id nullable ठेवू — null = common template, भरलेले = त्या project पुरते.

---

## UI/UX Design

### रंगसंगती (Theme) — understand-anything.com वरून
[understand-anything.com](https://understand-anything.com/) या site ची रंगसंगती वापरायची — **light theme + violet/purple accent**. (हे hex codes त्या site च्या खऱ्या CSS मधून काढले आहेत.)

| Token | Value | कुठे वापरायचे |
|---|---|---|
| `--bg` | `#f8f8fd` | page background (हलकी lavender-white) |
| `--surface` | `#ffffff` (व `rgba(255,255,255,.78)`) | cards, panels, forms |
| `--surface-dark` | `#10131d` | sidebar / dark भाग |
| `--border` | `#e8e1ff` | borders (हलकी जांभळी छटा) |
| `--border-soft` | `#eceef4` | soft dividers |
| `--accent` | `#582be8` | primary buttons, active menu, links |
| `--accent-2` | `#6236ff` | gradient मधला रंग |
| `--accent-3` | `#8b5cf6` | gradient फिका रंग / hover |
| `--accent-deep` | `#4520c8` | button hover/pressed |
| `--accent-soft` | `#f1ecff` | selected row, badge/chip background |
| `--text` | `#0f1020` | headings |
| `--text-soft` | `#1f2236` | body text |
| `--text-muted` | `#7e7893` | labels, secondary text |
| `--text-on-dark` | `#eef0fb` | dark sidebar वरील मजकूर |
| Gradient | `linear-gradient(135deg, #8b5cf6, #6236ff, #582be8)` | login panel, CTA, stepper active step |
| Shadow | `0 18px 42px rgba(80,70,120,.1)` | card ची मऊ जांभळट सावली |

**Status रंग (CRM साठी जोडलेले):** available/success हिरवा `#16a34a` · booked/warning पिवळा `#d97706` · sold/danger लाल `#dc2626` · info निळा `#2563eb`

**अंमलबजावणी:** Tailwind v4 च्या `@theme` block मध्ये (`src/index.css`) हे tokens define करू (`--color-accent: #582be8` इ.) — मग `bg-accent`, `text-muted` अशा utility classes थेट मिळतील. **Font: Inter** (Google Fonts, free).

### Layout
- **डावीकडे dark sidebar** (`#10131d`): वर logo, खाली menu — Dashboard, Leads, Projects, Properties, Deals, Payments, Documents, Availability, Reports, Notifications, Settings. Active item ला violet gradient highlight.
- **वर top bar** (पांढरा): global search bar (Phase 8), bell icon (Phase 10), user नाव + logout.
- **मुख्य भाग:** `#f8f8fd` background वर पांढरी rounded cards (`rounded-2xl` + मऊ सावली).
- **Mobile:** sidebar लपून hamburger menu ने overlay म्हणून उघडेल.
- **UI भाषा:** English labels (Leads, Payments...) — plan मराठीत, app English.

### Reusable components (src/components/)
`Sidebar`, `TopBar`, `PageHeader`, `Card`, `Button` (primary/secondary/danger), `Input`/`Select`/`DateField`, `Table` (search+filter सह), `Badge` (status रंगांत), `Modal`, `Stepper` (दोन्ही wizards साठी common), `EmptyState`, `Spinner`

---

## Build करण्याचे टप्पे (Phases)

### Phase 0 — Setup (पाया)
- Node.js install करणे ✅ (v26, npm v11 — तपासले)
- GitHub repo शी जोडणे: **https://github.com/Sachinx1911/Real-Estate-CRM.git**
  - repo clone करणे किंवा project तयार करून या repo ला push करणे
- React project तयार करणे (Vite): `npm create vite@latest`
- Tailwind CSS जोडणे
- `.gitignore` (node_modules, .env वगळणे) व पहिला commit + push
- Supabase account + नवीन project बनवणे
- Supabase client library जोडणे व connection test करणे

### Phase 1 — Login/Auth
- Supabase Auth ने **फक्त login** page (public signup बंद)
- **Admin च नवीन agent चे account तयार करेल** — Phase 1 मध्ये Supabase dashboard मधून; in-app Users page **Phase 11** मध्ये
- Role (admin/agent) — profiles table मध्ये
- Login नंतरच आत जाता येईल असे protected routes
- पहिला admin account manually (Supabase dashboard मधून) तयार करू

**Supabase बाजू (SQL — dashboard च्या SQL editor मध्ये चालवायचे):**
1. **profiles table:** `id uuid PK references auth.users`, `name text`, `email text`, `role text check (role in ('admin','agent')) default 'agent'`, `phone text`, `created_at`
2. **Trigger:** `auth.users` मध्ये नवीन user आला की profiles मध्ये row auto तयार (name/email metadata मधून)
3. **RLS:** profiles वर enable — प्रत्येकाला स्वतःची row वाचता येईल; admin ला सर्व rows. Admin check साठी `is_admin()` helper function **`security definer`** ने (नाहीतर policy स्वतःच profiles वाचताना infinite recursion होते)
4. **Public signup बंद:** Supabase dashboard → Authentication → Sign-ups disable

**App बाजू (नवीन files):**
- `react-router-dom` install; routes: `/login` व `/reset-password` (public), बाकी सर्व protected
- `src/context/AuthContext.jsx` — `onAuthStateChange` ने session + profile (role सह) load; `useAuth()` hook देईल `{user, profile, loading, signIn, signOut}`
- `src/components/ProtectedRoute.jsx` — session नसेल तर `/login` कडे redirect; loading असताना spinner
- `src/pages/Login.jsx` — theme प्रमाणे: डावीकडे violet gradient panel (app नाव/टॅगलाइन), उजवीकडे पांढऱ्या card मध्ये email+password form; चुकीच्या login वर error message
- **Forgot password:** Login वर link → `resetPasswordForEmail()` ने email; `/reset-password` page वर नवीन password सेट
- `src/components/layout/AppLayout.jsx` — sidebar + top bar shell, आत `<Outlet/>`; Dashboard placeholder page
- `App.jsx` मधले Phase 0 status card काढून router बसवणे; `src/lib/supabase.js` तसाच

**Phase 1 verification:**
- चुकीच्या password ने login fail होतो, बरोबरने Dashboard उघडते
- Page refresh नंतर session टिकते; logout ने `/login` वर परत
- Protected URL थेट उघडल्यास `/login` कडे redirect
- Forgot-password चा email येतो व नवीन password ने login होते

### Phase 2 — Leads Management (आधी हेच)
- Lead add/edit/delete form
- Leads ची यादी (table) — search व filter (status नुसार)
- प्रत्येक lead ला agent assign करणे
- Follow-up reminder जोडणे

### Phase 3 — Property Listings
- **Project Add wizard** (वरील "Project Add" flow प्रमाणे) — रचना, units auto-generate, bank accounts, schedules
- Property add/edit form (type, size, price, status) — manual units साठी
- Photo upload (Supabase Storage)
- Properties ची grid/card यादी + filter

### Phase 4 — Deal Pipeline + Booking Wizard
- Deal तयार करणे (lead + property जोडणे)
- Stage बदलणे: inquiry → visit → negotiation → booking → sold
- **5-step Booking Wizard** (वरील तपशीलाप्रमाणे) — booking करताना
- Kanban-style board (drag करून stage बदलणे) — नंतर

### Phase 5 — Payments (पैसे व्यवस्थापन)
- Booking नंतर customer च्या booking मध्ये **payment add करणे** (जसे-जसे पैसे येतील)
- Payment नोंदवताना **त्या project चे bank account** निवडणे (कोणत्या खात्यात पैसे आले)
- Installment/EMI नोंदी — किती भरले, किती बाकी (टक्केवारीनुसार)
- प्रत्येक payment ला receipt number
- Payment Receipt PDF तयार करणे

### Phase 6 — Documents (upload + generate)
- **Upload:** customer चे documents (Aadhaar, PAN, agreement scan) Supabase Storage मध्ये
- **Generate:** template मधून customer/property/payment data भरून PDF —
  - Allotment Letter, NOC, Payment Receipt, Booking/Agreement letter
- Generate केलेले documents पण साठवणे (documents table मध्ये source='generated')

### Phase 7 — Unit Availability Chart
- Project → tower/floor नुसार सर्व units चा visual तक्ता
- रंगाने status: हिरवा=available, पिवळा=booked, लाल=sold
- Unit वर click केल्यास त्या property/deal ची माहिती

### Phase 8 — Global Search
- वरती एक search bar (सर्व pages वर)
- customer नाव किंवा flat/unit number टाकल्यास leads + properties + deals मधून result
- Result वर click → संबंधित page वर जाणे

### Phase 9 — Dashboard/Reports + Export
- एकूण leads, active deals, sold units, total collected vs pending payment चे cards
- महिन्यानुसार sales/collection चा chart
- Agent-wise व project-wise performance
- **Reports export** — कोणतीही यादी/report Excel व PDF मध्ये download

### Phase 10 — Reminders / Notifications
- follow-up व installment-due वर app मध्ये bell icon + यादी
- वाचले/न-वाचले (read/unread) दाखवणे

### Phase 11 — Activity Log & Role Permissions
- प्रत्येक महत्त्वाच्या बदलाची activity_log मध्ये नोंद
- Admin ला सर्व, agent ला फक्त स्वतःचे — RLS + UI route guard
- Admin साठी history पाहण्याचे page

### Phase 12 — Bulk Import (Excel)
- Excel/CSV file upload करून leads/customers एकदम import
- चुका (invalid rows) दाखवणे

### Phase 13 — Polish & Deploy
- Mobile-responsive design तपासणे
- Frontend deploy: Vercel (free)
- Supabase आधीच cloud वर आहे

---

## Folder Structure (सुरुवातीचे)
```
real-estate-crm/
├── src/
│   ├── components/     (button, table, card असे reusable भाग)
│   ├── pages/          (Login, Leads, Properties, Deals, Payments, Documents, Availability, Dashboard, Notifications, ActivityLog, Import, Settings)
│   ├── lib/            (supabase client setup)
│   ├── hooks/          (data fetch चे logic)
│   └── App.jsx
├── .env                (Supabase keys — secret)
└── package.json
```

## Tools लागणारे (सर्व free)
- Node.js, VS Code
- Supabase account (free tier)
- Vercel account (deploy साठी, free)
- GitHub (code backup साठी — recommended)

---

## Verification (काम झाले हे कसे तपासायचे)
प्रत्येक phase नंतर browser मध्ये app चालवून (`npm run dev`) तपासणे:
- Phase 1: login/logout नीट चालतो का
- Phase 2: नवीन lead add केला की table मध्ये दिसतो का, filter चालतो का
- Phase 3: property + photo add होते का
- Phase 4: deal ची stage बदलली की save होते का
- Phase 5: payment नोंदवले की बाकी रक्कम बरोबर दिसते का, receipt PDF निघते का
- Phase 6: document upload होते का व generate केलेली PDF (allotment/NOC) बरोबर data ने भरते का
- Phase 7: availability chart मध्ये unit चा रंग/status बरोबर दिसतो का
- Phase 8: नाव/flat number ने search केल्यावर बरोबर result येतो का
- Phase 9: dashboard चे आकडे बरोबर मोजले जातात का, export केलेली Excel/PDF बरोबर आहे का
- Phase 10: follow-up/installment due वर notification दिसते का
- Phase 11: agent ला फक्त स्वतःचे data दिसते का, बदलाची log नोंद होते का
- Phase 12: Excel import केल्यावर leads बरोबर तयार होतात का, चुकीच्या rows दाखवतात का
- शेवटी Supabase dashboard मध्ये data नीट साठतोय का हे पाहणे

---

## पुढील पाऊल
Plan मंजूर झाल्यावर **Phase 0 (Setup)** पासून सुरुवात करू — Node व project तयार करणे. मी प्रत्येक step सोप्या मराठीत समजावत, code देत पुढे जाईन.
