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
   - id, name, location, description, status
3. **properties** — flat/plot/shop listings (units)
   - id, project_id, tower_wing, floor, flat_no, flat_type (1BHK/2BHK...), size, price, status (available/booked/sold), photos[]
   - रचना: project → tower/wing → floor → flat (availability chart यावर आधारित)
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
- **Admin च नवीन agent चे account तयार करेल** (Settings/Users page मधून)
- Role (admin/agent) — profiles table मध्ये
- Login नंतरच आत जाता येईल असे protected routes
- पहिला admin account manually (Supabase dashboard मधून) तयार करू

### Phase 2 — Leads Management (आधी हेच)
- Lead add/edit/delete form
- Leads ची यादी (table) — search व filter (status नुसार)
- प्रत्येक lead ला agent assign करणे
- Follow-up reminder जोडणे

### Phase 3 — Property Listings
- Project add करणे — यातच project चे **bank accounts** (एक किंवा अनेक) जोडणे
- Property add form (type, size, price, status)
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
