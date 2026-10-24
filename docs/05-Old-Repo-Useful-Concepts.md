# Useful Concepts from the Old Real-Estate-CRM Repo

Source: `https://github.com/Sachinx1911/Real-Estate-CRM` (`docs/PLAN.md`, 9 commits, 9 to 28 July 2026)
Saved on: 24 October 2026

**मराठीत:** जुन्या रिपॉझिटरीत प्रत्यक्ष CRM चा कोड नव्हता. फक्त सुरुवातीची रचना आणि 399 ओळींचे नियोजन होते. त्या नियोजनातल्या आपल्या नवीन CRM ला उपयोगी पडणाऱ्या सगळ्या कल्पना इथे जपल्या आहेत, म्हणजे रिपॉझिटरी साफ केल्यानंतरही त्या हरवणार नाहीत. जुना पूर्ण मजकूर GitHub च्या इतिहासात (git history) राहील.

**Not taken (by your instruction):** the UI theme (violet colours, Inter font, layout). You will decide the design later.
**Recorded only, not decided:** the old tech choice (React + Vite + Tailwind + Supabase + Vercel). Tech for the new CRM is not decided yet.

---

## 1. Data Model Ideas (old 20 tables)

| Old table | Concept to keep |
|---|---|
| profiles | Users linked to login, with role (admin / agent) |
| projects | Project type (residential / residential + commercial), amenities list |
| project_media | Unlimited media per project: images, documents, brochure, video, project plan |
| properties (units) | Project → wing → floor → unit; unit category (flat / shop / office); status available / hold / booked / sold |
| leads | Source, budget, status, lost reason, assigned agent, notes |
| deals | Lead + unit + stage + amount + agent; booking date, funding type, assigned schedule, final amount |
| followups | Follow-up linked to a lead **or** a booking (post-sales follow-ups too) |
| payments | Linked to booking, installment, project bank account; receipt number |
| documents | Uploaded and generated documents, both stored with type and source |
| doc_templates | Templates with placeholders |
| notifications | Per user, type, related record, read / unread, due date |
| activity_log | Who did what, on which record, when |
| applicants | Applicant and co-applicant per booking with Aadhaar, PAN, address, mobile, alternate mobile, email |
| payment_schedules | Percentage-based plans; project-specific or common templates |
| deal_charges | Extra charges per booking (parking, GST and admin-defined types) |
| project_bank_accounts | One or more bank accounts per project |
| project_milestones | Construction stages per project, marked "completed" with a date |
| deal_installments | Installments per booking: stage, %, amount, status, due date |
| company_profile | Company name, address, logo, GST no, RERA no for document headers |
| refunds | Refund amount, deduction, date, mode, bank account |
| app_settings | Editable lists: lead sources, charge types, lost reasons |

**मराठीत:** ही रचना आपल्या 12 मॉड्यूल्सशी चांगली जुळते. फरक एवढाच की आपल्या संशोधनानुसार पावतीत GST, TDS आणि व्याजाचे वेगळे भाग, जास्त सह-ग्राहक, ब्रोकर आणि अधिक कायदेशीर टप्पे जोडावे लागतील.

---

## 2. Project Setup Wizard (6 steps)

1. Project info: name, address, location, project type
2. Structure: wings, number of floors, units per floor
3. Unit creation: auto-generated unit numbers (A-101, A-102 …), type, area, unit category; bulk edit for similar units
4. Amenities and media: unlimited images, documents, brochure, videos, project plan
5. Bank accounts: one or more per project
6. Payment schedules: one or more custom schedules (stage name + %); common templates also allowed

**मराठीत:** इमारतीची रचना दिली की सगळी युनिट्स आपोआप तयार होणे ही कल्पना वेळ वाचवणारी आहे. Beans Online मध्ये प्रत्येक फ्लॅट हाताने जोडावा लागतो.

---

## 3. Booking Wizard (5 steps)

1. Customer details: applicant and co-applicant (Aadhaar, PAN, address, mobile, alternate mobile, email)
2. Unit selection: project → wing → unit, booking date; flat number and type filled automatically
3. Funding: loan or self; choose a payment schedule
4. Documents: Aadhaar, PAN and "add more"
5. Final deal: final amount, extra charges rows; on submit, booking letter generated automatically

**मराठीत:** बुकिंग एकाच लांब फॉर्मऐवजी टप्प्याटप्प्याने करणे सोपे आहे. आपल्या संशोधनानुसार यात MahaRERA अलॉटमेंट लेटरचे फील्ड्स आणि 10% मर्यादेची तपासणी जोडावी लागेल.

---

## 4. Payment Rules

- Installment amount = final amount × stage %
- Admin marks a project milestone "completed" → that installment becomes due for **all bookings** of the project, with notifications
- Payment is recorded against a specific installment → installment becomes partial or paid
- Paid and balance are calculated directly from installments
- Receipt numbers: separate series per project, starting at 1, generated automatically
- Payment records the project bank account the money went into
- Receipt PDF with company header

**मराठीत:** "टप्पा पूर्ण झाला की सगळ्यांचे हप्ते आपोआप देय" ही कल्पना Beans Online पेक्षा सोपी आणि अचूक आहे. आपल्या नवीन CRM मध्ये हीच पद्धत घ्यावी.

---

## 5. Unit Hold / Token

- Hold a unit for a lead with token amount, hold-until date and note
- When the hold expires, admin gets a notification; admin decides whether to release the unit (no automatic release)
- On booking, the token is adjusted in the first payment

**मराठीत:** HomeLead मध्ये होल्ड आपोआप सुटतो, तर इथे ॲडमिन ठरवतो. आपल्या CRM मध्ये हे सेटिंगने ठरवता येईल.

---

## 6. Cancellation and Refund

- Cancel from any stage
- Unit goes back to available
- Remaining installments are cancelled
- Refund recorded with deduction, date, mode and the bank account it was paid from
- Entry in the activity log

**मराठीत:** यात MahaRERA च्या कपातीच्या मर्यादा (15 दिवसांत शून्य, नंतर 1%, 1.5%, 2%) आणि 45 दिवसांत परतावा हे नियम जोडावे लागतील.

---

## 7. Post-Booking Checklist

- Agreement date, registration date, possession date per booking (empty = pending)
- Dashboard count: "how many registrations are pending"

**मराठीत:** Beans Online मधल्या 15 पेक्षा जास्त कायदेशीर टप्प्यांसाठी हीच साधी "चेकलिस्ट" पद्धत वापरता येईल.

---

## 8. Leads

- Lead sources from an editable list (Walk-in, Reference, Facebook/Instagram, Website, Hoarding, Newspaper, Other)
- Duplicate phone check with a link to the existing lead
- Lost status with reason from an editable list (Budget, Bought elsewhere, No response, Location not liked, Other)
- Lead detail page (360°): info, follow-up timeline, later bookings, payments and documents
- Deal pipeline stages: inquiry → visit → negotiation → booking → sold, plus cancelled
- Kanban board and table view

---

## 9. Documents

- Upload: Aadhaar, PAN, agreement scan
- Generate from templates with placeholders: `{{customer_name}}`, `{{co_applicant_name}}`, `{{project_name}}`, `{{wing}}`, `{{flat_no}}`, `{{flat_type}}`, `{{area}}`, `{{final_amount}}`, `{{amount_in_words}}`, `{{booking_date}}`, `{{receipt_no}}`, `{{payment_amount}}`, `{{payment_mode}}`, `{{payment_date}}`, `{{total_paid}}`, `{{balance_amount}}`, `{{company_name}}`, `{{company_address}}`, `{{company_logo}}`, `{{today_date}}`
- Default templates: Allotment Letter, NOC, Payment Receipt, Booking Confirmation, Cost Sheet / Quotation
- Cost sheet can be given before booking (lead + unit + charges)
- Admin can edit template text in Settings

---

## 10. Search, Dashboard and Reports

- Global search across leads, customers, units, projects, bookings; results grouped by type
- Dashboard cards: leads (new this month), active deals, units by status, collection received vs pending
- Charts: bookings per month, collection per month, lead sources, project-wise inventory
- Agent performance table: leads, deals, bookings, collection
- "Today's work" panel: follow-ups and due installments
- Filters: project and date range for all charts
- Reports with Excel and PDF export: Leads, Collection, Outstanding, Inventory

---

## 11. Notifications

- Daily job (7:00 AM IST): today's and overdue follow-ups, due and partial installments (weekly repeat until paid), expired holds
- Immediate notification when a milestone is marked complete
- No duplicate notifications (unique per user, type, record, date)
- Bell with unread count, mark all read, click to open the record

---

## 12. Security and Audit

- Login only, public sign-up disabled; admin creates user accounts
- Forgot password flow
- Roles: admin sees all, agent sees only own leads (database-level rules plus page guards)
- Activity log of every important change, with an admin history page

---

## 13. Bulk Import (Old Data)

- Three imports, each with a downloadable sample Excel:
  1. Leads: Name*, Phone*, Email, Source, Budget, Status, Notes, Agent email
  2. Old bookings / customers: Customer Name*, Phone*, Project*, Flat No*, Booking Date, Final Amount*, Total Paid so far
  3. Units: Project*, Wing*, Floor*, Flat No*, Type, Area, Price, Status
- Preview before import: valid and invalid rows
- Invalid rows skipped, with reasons and a downloadable error list

**मराठीत:** ही पद्धत आपल्या "जुना डेटा सोप्या पद्धतीने आणणे" या गरजेशी जुळते. Beans Online मधून पूर्ण हिशोब आणण्यासाठी आपल्याला यात पावत्या, हप्त्यांचे वेळापत्रक आणि कायदेशीर तारखा अशा आणखी आयाती जोडाव्या लागतील.

---

## 14. Verification Checklist Idea

- After each phase, test in the browser: login, lead creation, duplicate warning, hold expiry notification, balance after payment, receipt PDF, chart colours after cancellation, search, dashboard numbers, export files, notifications, agent data restriction, import errors

**मराठीत:** प्रत्येक टप्प्यानंतर काय तपासायचे याची यादी आधीच ठरवणे ही चांगली सवय आहे. नवीन CRM बनवताना ही पद्धत वापरू.
