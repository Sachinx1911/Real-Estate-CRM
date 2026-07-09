# Real Estate CRM

बिल्डर/developer साठी web-based CRM — leads, properties, deals, booking, payments व documents एका ठिकाणी.

## Tech Stack
- **Frontend:** React (Vite) + Tailwind CSS
- **Backend/DB:** Supabase (PostgreSQL + Auth + Storage)
- **Deploy:** Vercel

## पूर्ण Plan
project ची पूर्ण planning, features, database design व phases पाहण्यासाठी 👉 [`docs/PLAN.md`](docs/PLAN.md)

## दुसऱ्या laptop वर setup कसे करायचे

```bash
# 1. Repo clone करा
git clone https://github.com/Sachinx1911/Real-Estate-CRM.git
cd Real-Estate-CRM

# 2. Dependencies install करा
npm install

# 3. .env file तयार करा (Supabase keys सह) — खाली पहा

# 4. App चालवा
npm run dev
```

App उघडेल: `http://localhost:5173`

## Environment Variables
project root मध्ये `.env` नावाची file तयार करा (ही git मध्ये जात नाही):

```
VITE_SUPABASE_URL=तुमचा-supabase-project-url
VITE_SUPABASE_ANON_KEY=तुमची-supabase-anon-key
```

> Supabase → Settings → API मधून URL व anon key मिळेल.

## Progress
- [x] Phase 0 — React + Vite setup
- [ ] Phase 1 — Login/Auth
- [ ] Phase 2 — Leads
- [ ] Phase 3 — Properties
- [ ] Phase 4 — Deals + Booking Wizard
- [ ] Phase 5 — Payments
- [ ] Phase 6 — Documents
- [ ] Phase 7 — Availability chart
- [ ] Phase 8 — Global search
- [ ] Phase 9 — Dashboard + Export
- [ ] Phase 10 — Notifications
- [ ] Phase 11 — Activity log + Roles
- [ ] Phase 12 — Bulk import
- [ ] Phase 13 — Deploy
