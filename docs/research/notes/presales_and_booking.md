# Pre-sales and Booking Process of Indian Real Estate Developers (Maharashtra / MMR / Navi Mumbai) — CRM Requirement Notes

Research date: 24 October 2026. Scope: first enquiry to confirmed booking and the steps up to registration of the agreement for sale. Source quality note: the regulatory items (MahaRERA model allotment letter, MahaRERA orders, RBI FAQ) are primary. Most process and practice items (lead stages, CP slabs, hold windows) come from CRM-vendor or developer blogs. They show common practice but they are not standards, and the vendors want to sell their products. Rates and rules carry dates. Items that may have changed are flagged "VERIFY".

---

## 1. Lead sources, lead capture and de-duplication

### Takeaway
Indian builders take leads from portals (99acres, MagicBricks, Housing.com and others), Meta and Google ads, website and microsite forms, missed-call and IVR numbers, hoardings, walk-ins, and channel partners (CPs). CPs reportedly bring in 40–70% of primary sales in metros. The CRM has to put every lead in one source-tagged database, de-duplicate on phone, email and name, keep first-touch attribution through to booking, and apply MahaRERA advertising rules (registration number and QR code) to every campaign asset.

### Cited Findings
**Sources and capture**
- Typical lead sources listed for Indian developers: Meta and Google ads, 99acres, MagicBricks, Housing, website forms, hoardings, channel partners, missed calls and walk-ins. Leads should land in "one centralized database" with source tags. The same guide recommends ad-analytics integration so campaign performance sits next to the leads it produced, plus built-in calling, WhatsApp and email with auto-logged follow-ups — [Sell.Do lead management guide](https://www.sell.do/blog/real-estate-crm-lead-management-guide)
- Portal leads (99acres, MagicBricks) feed the CRM automatically. CRMs named as used by Indian developers: LeadSquared, Salesforce, Sell.Do — [Thinkly Labs presales automation](https://www.thinklylabs.com/blogs/how-to-automate-presales-real-estate-india)
- Incoming leads are sorted automatically by personal details, configuration preference and budget — [Sell.Do lead management guide](https://www.sell.do/blog/real-estate-crm-lead-management-guide)
- Vendor benchmarks (unverified vendor claims): digital top-of-funnel leads cost ₹900–2,500 each and 8–15% convert to a site visit. CP leads cost 1.5–2.5% of deal value, paid only on booking (₹1.8–3 lakh on a ₹1.2 crore ticket). Partners source "roughly 40 to 70%" of residential primary sales in most metros. CP bookings closed in 31 days versus 74 days in the example comparison — [Sell.Do CP management 2026](https://www.sell.do/blog/channel-partner-management-for-real-estate-developers-2026)
- Walk-ins: visitors self-register on a tablet app, which checks for duplicate records, queues the visitor and notifies the assigned sales rep. Reception (GRE) staff look visitors up by phone or email — [Sell.Do site visit automation](https://www.sell.do/blog/automate-real-estate-site-visits-using-crm-software)
- CP leads are protected through link-based tagging, and the CRM records where visitors came from and how they heard of the property — [Sell.Do site visit automation](https://www.sell.do/blog/automate-real-estate-site-visits-using-crm-software)

**Portal landscape (for the integration list)**
- Quikr bought CommonFloor in January 2016 in an all-stock deal reported at $200 million. The cofounders later left. CommonFloor's relevance as a live lead source today is doubtful — [Inc42](https://inc42.com/flash-feed/3-commonfloor-founders-quit-quikr); [Inc42 on Flatchat closure](https://inc42.com/flash-feed/quikr-shuts-flatchats-office)
- PropTiger bought Housing.com in January 2017 — [TechCrunch](https://techcrunch.com/2017/01/10/proptiger-buys-up-troubled-rival-housing-com-in-consolidation-of-indias-top-real-estate-startups/). Housing.com and PropTiger now sit under REA Group (REA India). One source gives REA's Housing.com acquisition date as 2020, which conflicts with the 2017 PropTiger deal, so the corporate history is unverified — [Ashoka University proptech piece](https://www.ashoka.edu.in/from-bricks-to-bits-how-proptech-is-reshaping-the-real-estate-industry/)
- PropTiger is described as B2C, helping developers sell new inventory at launch. Portal revenue comes from sellers paying for leads and targeted ads — [Ashoka University proptech piece](https://www.ashoka.edu.in/from-bricks-to-bits-how-proptech-is-reshaping-the-real-estate-industry/)

**De-duplication and attribution rules**
- De-duplicate on phone, email and name similarity, not phone alone. A manager can merge duplicates and keep the earliest CP tag. Flag a lead created just before a booking that shares an email with an older lead (possible attribution gaming). Leads from the builder website, paid portal listings, walk-ins or in-house sales are tagged "direct" at capture and cannot be claimed by a CP — [Makanify CP poaching protection](https://makanify.com/blog/channel-partner-lead-poaching-protection-crm)
- "First source wins." If the buyer already exists in the CRM from a paid campaign or direct enquiry, the lead is a house lead and the CP earns reduced or zero brokerage, stated as a fixed percentage. Conflicts are flagged before the booking is confirmed — [Sell.Do CP management 2026](https://www.sell.do/blog/channel-partner-management-for-real-estate-developers-2026)
- Link the booking to its originating campaign for source-to-booking attribution. Track cost per lead by source and campaign — [Sell.Do lead management guide](https://www.sell.do/blog/real-estate-crm-lead-management-guide)

**Regulatory constraints on lead generation and advertising (Maharashtra)**
- RERA Act s.3(1): "No promoter shall advertise, market, book, sell or offer for sale" any unit in a project that is not registered — [AP RERA reproduction of Act provisions](https://rera.ap.gov.in/RERA/Views/AdvertisementGuidelines.aspx); [Housing.com news](https://housing.com/news/maharera-slaps-penalty-of-rs-33-lakh-on-370-projects)
- s.11 requires the promoter to mention the project registration number in advertisements, prospectuses, brochures and pamphlets — [AP RERA reproduction of Act provisions](https://rera.ap.gov.in/RERA/Views/AdvertisementGuidelines.aspx)
- MahaRERA Order 46B/2023: from 1 August 2023 all promotions must prominently show the project QR code — [REMI blog](https://www.remi.edu.in/blog/mahareras-qr-code-mandate/); [Desai Diwanji](https://desaidiwanji.com/insights/articles/transparency-first-maharera-enforces-stricter-rules-for-real-estate-advertising)
- MahaRERA Order 46C/2025 (8 April 2025) sets norms for QR code placement and the font size of the MahaRERA registration number and website in advertisements — [MahaRERA Orders page](https://maharera.maharashtra.gov.in/order). Per secondary summaries, the number, website and QR go in the top-right quadrant, in a font at least as large as the largest font used for contact details. Rules apply to promoters and agents, and agents must quote both their own and the project's registration numbers. Reported penalties are ₹10,000–50,000 per violation — [Complinity](https://complinity.com/legal-update/maharashtra-real-estate-regulatory-authority-maharera-issues-order-regarding-the-mandatory-display-of-qr-code-font-size-specifications-for-maharera-registration-number-and-website-address-in-advertisements-18613/); [Thane Real Estate News](https://thanerealestatenews.com/maharera-real-estate-agent-registration-training-qr-code-rules-2025/); [Housivity](https://housivity.com/blog/maharera-orders-explained-project-suspensions-ads-norms-buyer-compensation)
- Enforcement: MahaRERA fined 370 projects ₹33 lakh in total for ads without the registration number or QR code — [Housing.com](https://housing.com/news/maharera-slaps-penalty-of-rs-33-lakh-on-370-projects). A later report puts action at 628 projects and about ₹88.90 lakh — [The Realty Today](https://therealtytoday.com/news/regulatory/maharera-fines-over-600-housing-projects-for-non-compliance-of-displaying-registration-numbers/)
- MahaRERA has acted suo motu against pre-registration promotion, including bulk social-media posts and SMS blasts to prospects before registration, with fines in the tens of thousands of rupees (VERIFY specifics) — [Free Press Journal](https://www.freepressjournal.in/mumbai/maharera-snooping-on-misleading-project-ads)

**Telecom and data-protection rules that govern lead outreach**
- TRAI/DoT framework: the 160 number series is for transactional and service calls to existing customers only, with no mixing of promotional or offer content. Misusing 160 for promotion can lead to disconnection. The 140 series (promotional) is moving to the DLT platform, and senders must register 140 and 160 voice headers with their telecom provider — [ICAI Vasai branch](https://vasai.icai.org/detail/53328.aspx); [RBI notification](https://www.rbi.org.in/scripts/NotificationUser.aspx?Id=12770)
- Consumers can opt out of real-estate commercial calls through the NCPR/DND registry — [Rainger Realty](https://raingerrealty.com/unsolicited-calls-from-real-estate-agents/)
- DPDP Act 2023 and DPDP Rules 2025: notified 13 November 2025, with phased commencement. There is an intermediate milestone in November 2026, and full obligations apply by about 13 May 2027 (sources differ by a day) — [AZB & Partners](https://www.azbpartners.com/bank/indias-digital-personal-data-protection-act-phased-rollout-and-key-compliance-milestones/); [Uniqus](https://uniqus.com/digital-personal-data-protection-act-timelines/)

### Inferences
- CRM fields every lead needs: source, sub-source (portal name or campaign ID, ad set, keyword), medium (call, form, WhatsApp, walk-in, CP), first-touch timestamp, last-touch source, project of interest, configuration (1/2/3 BHK), budget band, locality, CP tag (if any) and consent record.
- Portal connectors should cover at least 99acres, MagicBricks and Housing.com (plus NoBroker, Square Yards and PropTiger where used), along with Meta Lead Ads, Google Ads lead forms, website and microsite webhooks, a virtual-number or IVR provider, and a missed-call number. CommonFloor appears low priority.
- De-duplication should run at capture, at site-visit check-in, at CP lead registration and again before booking confirmation. Each run needs a configurable match (phone first, then email, then fuzzy name) and an audit trail of merges.
- Every marketing asset or template stored in the CRM (ad creative, WhatsApp template, SMS, brochure) needs MahaRERA registration number and QR-code fields per project and phase. The CRM should block campaigns for projects with no MahaRERA registration (s.3).
- The CRM needs a consent and DND flag per phone number, a 140/160 header register for the outbound dialer, and DPDP-ready consent, notice, purpose and erasure logs before May 2027.

### Gaps
- I found no authoritative description of each portal's lead-push API (99acres, MagicBricks, Housing.com, NoBroker, Square Yards). Field formats and auth methods need vendor documentation.
- I found no reliable, current market-share or cost-per-lead figures for individual portals in MMR. The ₹900–2,500 CPL figure is a single vendor claim.
- I found no source on how DPDP consent applies to leads bought from portals or brought in by CPs (who is the data fiduciary, and how consent passes on). Legal review is needed.
- I found no source on how Indian builders use IVR or virtual numbers (per-source tracking numbers, call recording, missed-call auto-callback). This is common practice but undocumented in sources found.

---

## 2. Telecalling, IVR, lead stages, scoring, site visits and sales roles

### Takeaway
Pre-sales (telecalling) aims to qualify a lead and book a site visit. The visit is described as the strongest predictor of booking. Sources describe stages from first response through qualification, follow-up, visit booking, reminder and post-visit feedback, then a hand-off to sales for negotiation and closing. Response-time targets are under 5 minutes. Site visits should be first-class records (schedule, assignee, outcome, no-show, feedback) and should extend CP tag validity.

### Cited Findings
**Pipeline stages and roles**
- Five lifecycle stages: Capture, Qualify, Nurture, Site visit, Booking/handoff. Ratings are Hot, Warm and Cold, and marketing-qualified leads (MQL) are separated from sales-ready leads. An example dashboard funnel runs Leads Captured 2,981 → Qualified 1,821 → Site Visits 1,155 → Negotiation 680 → Bookings 302 (10.1% close) — [Sell.Do lead management guide](https://www.sell.do/blog/real-estate-crm-lead-management-guide)
- Pre-sales flow: a new lead is assigned to pre-sales. The representative has the first conversation, records the project of interest, sends the brochure and pushes for a site visit, then hands the lead to a sales rep once it is visit-ready — [Sell.Do CRM strategy](https://www.sell.do/blog/how-to-set-up-a-crm-strategy-for-a-real-estate-business)
- Detailed pre-sales sequence: (1) first-response call, (2) qualification on configuration, budget band, timeline, prior micro-market visits and financing, (3) retries and follow-up, (4) site visit booking, (5) visit reminder, (6) post-visit feedback, (7) handoff to a rep for negotiation and closing. Example staffing: pre-sales reps on nine-hour shifts, five or six days a week, with 10 reps handling about 1,500 calls a day. Team leads do call QA, sampling about 2% of calls when done manually — [Thinkly Labs](https://www.thinklylabs.com/blogs/how-to-automate-presales-real-estate-india)
- The site visit is "the single strongest predictor of a booking" — [Sell.Do lead management guide](https://www.sell.do/blog/real-estate-crm-lead-management-guide)

**Speed-to-lead and retry rules**
- Buyers reached within five minutes are "far more likely to qualify" than those reached 30 minutes later. Teams converting 3–4% of enquiries are contrasted with teams at 1% — [Sell.Do lead management guide](https://www.sell.do/blog/real-estate-crm-lead-management-guide)
- Automated first call within 60 seconds, target contact within 5 minutes. Unanswered calls get automated retries in the morning, midday and evening over two days. The vendor calls unanswered and dropped leads the largest "silent leak." Metrics: connect rate, qualification rate, site visits booked, show-up rate — [Thinkly Labs](https://www.thinklylabs.com/blogs/how-to-automate-presales-real-estate-india)

**Call dispositions**
- A good disposition set has 8–12 codes, no overlaps and one clear next action per code. A sample Indian telecalling set: Callback, Interested, Not Interested, Do Not Call, each with a follow-up rule. Real-estate desks add "Site Visit Scheduled" — [RM Dialer dispositions](https://rmdialer.com/blog/what-is-call-disposition-codes/)
- The goal of the call is to book a visit (property sells on site, not on the phone). Notes should be written after each call. One guide suggests revisiting "Not Interested" leads after 90 days — [RM Dialer telecalling script](https://rmdialer.com/blog/real-estate-telecalling-script/)
- Estate-agency disposition examples include "Viewing scheduled" and "Offer discussion" — [MightyCall](https://www.mightycall.com/blog/call-disposition/)

**Lead scoring and nurture**
- Scoring criteria: budget fit, configuration and locality preference, timeline, engagement. Nurture channels: WhatsApp, email, timely calls, drip sequences and templates. Re-engagement triggers: new inventory, price updates, site-visit invites — [Sell.Do lead management guide](https://www.sell.do/blog/real-estate-crm-lead-management-guide)
- Each lead gets a qualification score, and reps start the day with a list ranked by intent rather than upload time — [Thinkly Labs](https://www.thinklylabs.com/blogs/how-to-automate-presales-real-estate-india)

**Site visit scheduling and capture**
- Scheduling records visitor preferences (for example, the 2 BHK with balcony to show) and sends pick-up and drop details through the mobile app. Automatic reminders go to both the customer and the sales team. At the site, tablet self-registration de-duplicates, queues the visitor and notifies the assigned rep. GRE looks the visitor up by phone or email and marks the visit done in one click. Visitors move through multiple counters in sequence. OTP is mentioned only for app sign-up and login, not for site check-in — [Sell.Do site visit automation](https://www.sell.do/blog/automate-real-estate-site-visits-using-crm-software)
- A reminder call goes out the day before the visit and a feedback call 1–2 days after — [Thinkly Labs](https://www.thinklylabs.com/blogs/how-to-automate-presales-real-estate-india)
- Model the visit as its own record, not a stage: scheduled time, assigned person, property or unit, buyer reminder, outcome including no-show, structured feedback and follow-up action — [HelloGrowth guide](https://hellogrowthcrm.com/guides/best-crm-for-real-estate-2027)
- Log site visits with GPS or timestamp evidence, and a photograph, so CP lead re-routing is harder — [Makanify](https://makanify.com/blog/channel-partner-lead-poaching-protection-crm)
- Track lead-to-site-visit and site-visit-to-booking conversion separately, along with first-response TAT and follow-up TAT compliance — [Sell.Do lead management guide](https://www.sell.do/blog/real-estate-crm-lead-management-guide)
- A site visit can extend CP tag validity. Example from a product UI: "3 tagged leads expire in <48h — book a site visit to extend validity 30 days" — [Sell.Do CP management product page](https://www.sell.do/real-estate-crm/channel-partner-management)

### Inferences
- Suggested stage model to cover in the CRM (synthesised from the sources above): New → Contacted/Attempted (with attempt counter) → Qualified (MQL/SQL) → Site Visit Scheduled → Site Visit Done (first visit) → Revisit Scheduled/Done → Negotiation/Cost sheet shared → Unit Blocked/On hold → EOI/Token received → Booking (application form + booking amount) → Allotment letter issued → Agreement executed and registered, with exit states Lost (with reason), Junk/Invalid, DND, Duplicate.
- Disposition codes should be configurable per project and team (target 8–12), each tied to a mandatory next action and SLA: Connected–Interested, Connected–Not interested (reason), Call back (date and time), Ringing/No answer, Switched off/Not reachable, Busy, Wrong number, Invalid/Junk, Already booked elsewhere, Budget mismatch, Location mismatch, Site visit scheduled, DND/Do not call.
- Site-visit records should hold: visit type (first or revisit), date and time, pick-up flag, visitor count, attendee KYC (name, phone), source and CP at visit, sourcing/presales owner, closing/sales owner, units shown, feedback, budget confirmation, loan requirement, next step. Check-in proof by OTP to the registered mobile, geo-tag and photo is common practice. Sources mention only GPS/photo, and OTP for login.
- Many Mumbai developers split "sourcing" (pre-sales/CP sourcing) and "closing" managers (site sales). The CRM should therefore record owners separately for lead origination, visit, and closing, for incentives and CP disputes. This split was not confirmed by any source (see Gaps).

### Gaps
- I found no source defining the "sourcing manager" and "closing manager" roles or their incentive splits as used by Mumbai developers. This is widely known industry practice, but undocumented here.
- I found no standard industry-wide disposition list or lead-stage taxonomy from LeadSquared, Anarock or developers. Only vendor examples were found.
- I found no documentation of OTP-verified site-visit check-in, revisit-counting rules, or how revisits affect CP ownership.
- I found no data on typical no-show rates or how many follow-up attempts are standard before a lead is marked lost.

---

## 3. Channel partner (broker) management

### Takeaway
In Maharashtra a CP must hold a MahaRERA agent registration, valid 5 years. Since 1 January 2024 registration and renewal require a MahaRERA Certificate of Competency, held by the agent's customer-facing staff too. Promoters may name only certified agents. Since MahaRERA Order 63/2024 (22 Oct 2024), any brokerage must be stated in the agreement for sale (Clause 15A). Builder practice adds lead registration before the visit, a 30/60/90-day tag validity, first-source-wins de-duplication, slab-based brokerage (about 1.5–2.5%) and payouts triggered at agreement registration plus collection.

### Cited Findings
**Regulatory requirements (MahaRERA)**
- RERA Act Chapter II covers registration of agents (s.9) and functions of agents (s.10) — [SCC Online](https://www.scconline.com/blog/post/2021/06/23/rera/). Verbatim text not retrieved; see Gaps.
- MahaRERA Order 41/2023 (10 Jan 2023) made training and the competency exam compulsory for agents — [TaxGuru final extension](https://taxguru.in/corporate-law/maharera-final-extension-real-estate-agent-certificate-competency.html); [rerafiling](https://rerafiling.com/rera-article-detail.php/765/maharera-guidelines-for-real-estate-agent-training-and-certification)
- Order 41B/2023 (13 Dec 2023), the final extension, superseding Order 41A/2023 dated 20 Sep 2023:
  - From 1 Jan 2024 only agents with a valid MahaRERA Real Estate Agent Certificate of Competency may apply for registration or renewal.
  - Existing agents had to obtain and upload it before 1 Jan 2024.
  - Individuals, the authorised signatory of firms, LLPs and companies, and employees, staff and officers who interact with homebuyers must all hold it.
  - From 1 Jan 2024 promoters must ensure that agents named under s.4(2)(j) hold the certificate.
  - [TaxGuru](https://taxguru.in/corporate-law/maharera-final-extension-real-estate-agent-certificate-competency.html)
- Enforcement: in May 2024 MahaRERA suspended about 20,000 agents for one year for not obtaining the certificate. Registration is restored if they comply within the year and cancelled otherwise — [Business Standard](https://www.business-standard.com/india-news/registration-of-over-20-000-maha-real-estate-agents-suspended-by-maharera-124052300939_1.html)
- Validity: MahaRERA agent registration is valid for 5 years. A MahaRERA agent certificate hosted on a developer's CP-empanelment portal shows 20/08/2025 to 19/08/2030 — [Godrej Properties CP empanelment document](https://cp.godrejproperties.com/data/empanelment/rera202512131112336.pdf); [Clevercoins](https://clevercoins.org/rera-registration-for-real-estate-agents-3/). Renewal requires reapplying online with updated documents and fees, and a lapse can lead to suspension — [Clevercoins](https://clevercoins.org/rera-registration-for-real-estate-agents-3/)
- Fees conflict. One source gives ₹10,000 for individuals and ₹25,000 for firms — [Clevercoins](https://clevercoins.org/rera-registration-for-real-estate-agents-3/). Another gives ₹10,590 for individuals and ₹1,00,590 for companies in Maharashtra, including taxes — [CalcGuru](https://calcguru.in/?p=4950). VERIFY on the MahaRERA portal.
- MahaRERA Order 63/2024 (22 Oct 2024) adds Clause 15A to the model agreement for sale and sale deed. Where a registered agent is involved, the fee, commission or brokerage (including taxes) payable to the agent must be specified in the agreement. Payment terms are agreed between developer and/or buyer. The aim is to cut disputes over unpaid brokerage — [LiveLaw](https://www.livelawbiz.com/consumer-cases/maharera-issues-order-project-registration-eligibility-real-estate-agent-fee-clause-agreements-for-sale-274083); [Outlook Money](https://www.outlookmoney.com/real-estate/mahareras-new-rules-on-broker-fee-heres-what-homebuyers-should-know); [MahaRERA Orders page](https://maharera.maharashtra.gov.in/order)
- Agents must quote their own registration number and the project's registration number, plus the QR code, in all advertisements (Order 46C/2025, 8 April 2025) — [Thane Real Estate News](https://thanerealestatenews.com/maharera-real-estate-agent-registration-training-qr-code-rules-2025/); [MahaRERA Orders page](https://maharera.maharashtra.gov.in/order)
- MahaRERA Order 10A/2024 (27 Dec 2024) amends the Self-Regulatory Organization (SRO) order. Contents not retrieved — [MahaRERA Orders page](https://maharera.maharashtra.gov.in/order)

**Builder CP-programme practice (vendor playbooks, not standards)**
- Empanelment:
  - Segment partners into institutional consultants, regional aggregators and local brokers.
  - Verify the RERA agent registration and store the number, validity date and state with an expiry reminder.
  - Collect PAN, GST status, a cancelled cheque and a signed empanelment agreement. The vendor claims about 90% of payout delays trace to a missing GST number or PAN mismatch.
  - Use a 90-day probation with at least 3 qualified site visits.
  - The agreement should define a sourced lead, tag duration, shared-buyer claims, when brokerage is due, and deactivation triggers.
  - [Sell.Do CP management 2026](https://www.sell.do/blog/channel-partner-management-for-real-estate-developers-2026)
- Lead registration: the CP registers the buyer's name and phone before bringing them to site. Registration after the visit is not a valid claim. Tagging validity is 30, 60 or 90 days, is published, and expires automatically. Partners get self-serve registration with instant tag confirmation and a timestamp — [Sell.Do CP management 2026](https://www.sell.do/blog/channel-partner-management-for-real-estate-developers-2026)
- Tag windows: 30 days for high-turnover markets, 60 standard, 90 for premium or slow segments. The window should be uniform across CPs unless a contract documents otherwise. After expiry the lead may go to another CP or direct sales, but the original tag stays in the audit trail. An optional "first right" period (example 6 months) can carry a reduced share. Competing tags inside the window are blocked or flagged for compliance review. Legitimately shared leads are modelled as co-broking with a defined split visible to both CPs — [Makanify](https://makanify.com/blog/channel-partner-lead-poaching-protection-crm)
- Brokerage ladder (metro residential example):
  - Base 1.5–2% on the first two bookings in a quarter.
  - 2.25% from the third booking in the quarter.
  - 2.5% plus a launch bonus from the sixth.
  - An inventory kicker of 0.25–0.5% on slow units (for example, unsold 90 days).
  - [Sell.Do CP management 2026](https://www.sell.do/blog/channel-partner-management-for-real-estate-developers-2026)
- Payout SLA:
  - Brokerage is due at agreement registration plus receipt of the first 10% of price, not at possession.
  - The CP raises a GST-compliant invoice within 15 days of the trigger.
  - Payment follows within 21–30 days of a clean invoice, with TDS deducted and a certificate issued.
  - Disputes get a named escalation contact and a 48-hour response.
  - [Sell.Do CP management 2026](https://www.sell.do/blog/channel-partner-management-for-real-estate-developers-2026)
- Payouts are staged in proportion to actual collections. Booking reports are adjusted for cancellations. Outstanding payouts on exit are released or clawed back per schedule. State agent registration numbers are collected for every state where the CP operates — [Makanify](https://makanify.com/blog/channel-partner-lead-poaching-protection-crm)
- Dispute resolution, five steps: (1) the CP relationship manager reviews the audit trail and proposes, (2) the sales head reviews, (3) the CFO or a nominated director decides, (4) the decision is logged with reason and approver, (5) affected CPs are told in writing — [Makanify](https://makanify.com/blog/channel-partner-lead-poaching-protection-crm)
- Partner portal: a white-label portal on the developer subdomain with individual logins. It shows live inventory with hold-and-block, cost sheets at the current approved price, and a payout ledger (bookings, milestones, invoices, payments). Quarterly metrics per partner: leads registered, site visits, bookings, lead-to-visit ratio. Tiers: A (top 10–15%: early launch access, best slab, co-marketing), B (standard), C (deactivate) — [Sell.Do CP management 2026](https://www.sell.do/blog/channel-partner-management-for-real-estate-developers-2026)
- A large developer runs a CP-empanelment portal where agents' MahaRERA certificates are uploaded as PDFs — [Godrej Properties CP portal documents](https://cp.godrejproperties.com/data/empanelment/rera202604081604201.pdf)

### Inferences
- The CP master needs:
  - Entity type, firm name, PAN, GSTIN (or GST-unregistered declaration), bank details with a cancelled cheque, and the empanelment agreement with version and date.
  - MahaRERA agent registration number, start and expiry dates, and Certificate of Competency status for the firm signatory and each staff user.
  - A list of the CP's staff users, each with CoC status.
  - Tier, slab plan, probation status, active or suspended flag, and SRO membership (if relevant).
- Validations: block lead registration, site-visit tagging and payout when the MahaRERA registration is expired or suspended, or the CoC is missing (Order 41B/2023). The roughly 20,000 suspensions in May 2024 show this happens at scale.
- Agreement generation must pull the CP name, MahaRERA agent number and brokerage amount (with taxes and payer) into Clause 15A (Order 63/2024). The CRM therefore needs brokerage fixed and approved before the agreement is drafted.
- Brokerage engine: slab by bookings per period per CP, project-specific overrides, kickers for tagged units, house-lead reduction, co-broking splits, milestone triggers (registration plus x% collected), clawback on cancellation, TDS and GST computation, invoice capture and payment status.

### Gaps
- Verbatim text of RERA s.9, s.10 and s.62 (agent penalties) was not retrieved, because the India Code and MoHUA PDFs returned 403. Background, unverified: s.62 penalty up to ₹10,000 per day of default, capped at 5% of unit cost.
- I did not verify the TDS section and rate on brokerage (old s.194H; the post-1 April 2026 Income-tax Act 2025 equivalent) or the GST treatment of CP invoices (18% assumed in practice).
- I did not retrieve the contents of the MahaRERA SRO orders (Order 10/2024 and 10A/2024) or whether membership is mandatory for agents and promoters.
- I found no source on whether MahaRERA requires promoters to upload or update the list of agents per project after registration (s.4(2)(j) is cited only for names given at registration).
- I found no published standard tag-validity windows from specific Mumbai developers. The 30/60/90-day figures are vendor recommendations.

---

## 4. Cost sheet / quotation, offers and price-list control

### Takeaway
A Maharashtra cost sheet starts from carpet-area-based agreement value (base rate plus floor rise and PLC, with covered parking allotted with dimensions). Other charges are listed separately: development or infrastructure, legal, society formation and share money, advance maintenance, corpus, and meter or connection charges. Statutory items follow: GST at 5% (1% affordable, no ITC; unchanged after the Sept 2025 rate rationalisation), stamp duty (Mumbai 6%, women 5%; 7%/6% in some cities), registration 1% capped at ₹30,000, and 1% TDS by the buyer at ₹50 lakh and above (now Income-tax Act 2025 s.393(1)). Price lists, discounts and holds need version control and approval workflows. Sources describe these only at vendor level.

### Cited Findings
**What the MahaRERA allotment letter fixes for pricing**
- Unit described by RERA carpet area in sq m with sq ft equivalent, floor, building, tower, wing and land survey numbers. "Total consideration ... exclusive of GST, stamp duty and registration charges" — [MahaRERA model allotment letter (Annexure 1)](https://maharera.maharashtra.gov.in/sites/default/files/inline-files/Allotment.pdf)
- Garage or covered parking is allotted with level (basement, podium, stilt or mechanical), number, area in sq ft, and length × breadth × vertical clearance. Open car parking is allotted by number and length × breadth "without consideration" — [MahaRERA model allotment letter](https://maharera.maharashtra.gov.in/sites/default/files/inline-files/Allotment.pdf)
- Under MahaRERA Order 60/2024 (4 Sept 2024: new proforma of allotment letter and agreement for sale covering parking, amenities and three bank accounts), promoters may not deviate from or modify the parking clauses. Other deviations must be highlighted in a different colour and listed in a deviation sheet uploaded with registration — [TeamLease RegTech](https://www.teamleaseregtech.com/updates/article/35192/maharashtra-rera-issued-a-new-proforma-of-allotment-letter-and-agreeme/); [MahaRERA Orders page](https://maharera.maharashtra.gov.in/order)
- A July 2025 MahaRERA ruling is reported as directing allotment of specific, numbered parking within the same wing as the buyer's flat — [Housivity](https://housivity.com/blog/maharera-orders-explained-project-suspensions-ads-norms-buyer-compensation) (secondary; VERIFY)
- Late-payment interest is the SBI highest MCLR plus 2% — [MahaRERA model allotment letter](https://maharera.maharashtra.gov.in/sites/default/files/inline-files/Allotment.pdf)

**Typical cost-sheet line items (practice)**
- Order of build-up: base price (area × rate), then PLC, floor rise, parking, club and IFMS/maintenance deposit, then GST, then stamp duty and registration. Indicative ranges from guides (vary widely): PLC ₹150–750/sq ft; floor rise ₹20–100/sq ft per floor above about the 5th; Mumbai development charges as a lump sum of ₹50,000–2,00,000+; corpus ₹1–5 lakh (usually non-refundable). Worked example: a ₹1 crore under-construction 3 BHK costs about ₹1.27 crore all-in — [Makanify PLC and floor-rise math](https://makanify.com/blog/plc-floor-rise-cost-sheet-math-real-estate); [JP Infra on Medium](https://medium.com/@jpinfra/hidden-charges-while-buying-property-in-mumbai-in-2025-dont-get-surprised-f2a31e496040); [DrawMagic cost breakdown](https://drawmagic.in/blog/1459-first-home-full-cost-breakdown-example); [The Propertist](https://www.thepropertist.com/blog/hidden-costs-of-buying-a-flat-in-mumbai-454)
- Developer guide list of "other charges": maintenance, water and electric meter charges, society formation, share money, corpus, club membership — [Mahindra Lifespaces pricing guide](https://www.mahindralifespaces.com/home-buying-guide/pricing-and-budget-calculation)
- Builders in under-construction projects often collect advance maintenance at booking (lump sum or instalments), plus a separate lump-sum maintenance corpus — [iPleaders](https://blog.ipleaders.in/society-maintenance-expenses-rera-laws/)
- An expert view holds that society maintenance can be levied only from membership, which can come only after possession. Reports of inflated society-formation charges suggest buyers should ask for the accounts — [Free Press Journal](https://www.freepressjournal.in/amp/mumbai/mumbai-housing-society-queries-maintenance-cannot-be-levied-until-you-get-flat-possession-or-become-member-says-expert); [Mahindra/iPleaders results](https://blog.ipleaders.in/society-maintenance-expenses-rera-laws/)

**GST**
- Under-construction residential: 5% (other than affordable) and 1% (affordable), both without promoter ITC. These are effective rates after the deemed one-third land deduction. Affordable means carpet ≤60 sq m in metros (≤90 sq m non-metros) and price ≤₹45 lakh. Ready-to-move units with an OC carry no GST, though stamp duty and registration still apply — [Kanakkupillai](https://www.kanakkupillai.com/learn/gst-on-residential-property/); [Sobha](https://www.sobha.com/blog/gst-on-residential-property/)
- Under the GST rate rationalisation (Council decision, effective 22 Sept 2025), the 1%, 5% and exempt rates for housing stayed the same. Cement fell from 28% to 18%, and sand and bricks from 12% to 5% — [Crisil Intelligence, 5 Sept 2025](https://intelligence.crisil.com/en/homepage/what-we-think/all-our-thinking/reports/2025/09/impact-of-goods-and-services-tax-reforms-on-the-housing-sector.html); [JSA Law](https://www.jsalaw.com/jsa_news/cement-gst-rate-cut-to-18-to-ease-construction-aid-affordable-housing-builders)

**Stamp duty and registration (Maharashtra, 2026)**
- Mumbai (MCGM): 6% for male buyers (5% plus 1% metro cess). Female sole buyers or all-women buyers pay 5% (4% plus 1%). The base is the higher of agreement value and ready-reckoner value — [Rustomjee 2026](https://www.rustomjee.com/blog/stamp-duty-and-registration-charges/); [Kalpataru](https://www.kalpataru.com/blogs/stamp-duty-and-registration-charges-mumbai); [Homefirst](https://homefirstindia.com/blog/article/stamp-duty-registration-charges-maharashtra)
- Registration fee: 1% of value, capped at ₹30,000 (the cap applies above ₹30 lakh). The women's 1% concession applies to stamp duty only, not registration — [Godrej Capital](https://www.godrejcapital.com/media-blog/knowledge-centre/stamp-duty-and-registration-charges-in-maharashtra); [PropertyButler](https://propertybutler.in/insights/stamp-duty-concession-women-maharashtra-2026)
- Thane: most sources give 7% for men and 6% for women (including metro cess and local body tax) — [Rustomjee 2026](https://www.rustomjee.com/blog/stamp-duty-and-registration-charges/). Navi Mumbai: conflicting figures. One source gives 6%/5% and says older 7%/6% figures included an LBT no longer levied — [Revaa Homes](https://revaahomes.com/guide/navi-mumbai-stamp-duty-registration/). Others list 7%/6% — [1acre calculator](https://1acre.in/stamp-duty-calculator/maharashtra). VERIFY with IGR Maharashtra.
- Joint male-female ownership: one source blends to 5.5% in Mumbai. Another says that with any male co-owner the full male rate applies under an IGR notification. A 15-year resale lock-in on the women's concession is reported as removed in 2026 by one source only — [PropertyButler](https://propertybutler.in/insights/stamp-duty-concession-women-maharashtra-2026); [IndiaPost.org](https://indiapost.org/stamp-duty-maharashtra) (conflicting, VERIFY)
- For a new flat, the full stamp duty is paid on the agreement for sale, not on the later conveyance — [RealtyHunting](https://realtyhunting.com/stamp-duty-in-maharashtra/). Payment is by government e-challan (GRAS) or authorised banks — [Citizen Matters](https://citizenmatters.in/explainer-how-to-register-a-flat-in-mumbai-29698)

**TDS on purchase (buyer's obligation, affects the cost sheet and receipts)**
- 1% TDS where consideration is ₹50 lakh or more. For payments on or after 1 April 2026 the provision is s.393(1) (Table Sl. 3(i)) of the Income-tax Act 2025, replacing s.194-IA. Form 141 replaces Form 26QB, and the certificate (formerly 16B) is reported as Form 132 (sources differ). Consideration includes club, parking, electricity or water, maintenance and advance fees incidental to the transfer — [TaxGuru Form 141](https://taxguru.in/income-tax/tds-property-transactions-transition-form-26qb-form-141.html); [SKLA](https://skla.in/insights-new-act-tds-changes); [Thane Real Estate News](https://thanerealestatenews.com/income-tax-act-2025-tds-changes-property-buyers-nri-sellers/); [TDSMan](https://blog.tdsman.com/2026/05/tds-on-purchase-of-immovable-property-section-3931-194ia/)

**Offers and schemes**
- Subvention ("no EMI till possession") schemes: NHB told housing finance companies to stop financing builder subvention schemes. The circular is dated 19 July, year not shown in the result (VERIFY; likely 2019) — [The News Minute](https://www.thenewsminute.com/money/stop-financing-subvention-schemes-builders-nhb-tells-housing-finance-companies-105941)
- In March 2025 the Supreme Court took up alleged builder-bank collusion in NCR subvention schemes. It barred coercive recovery and cheque-bounce cases against homebuyers, and asked the CBI to prepare a roadmap. Reports conflict on whether a full probe was ordered. RBI acknowledged banks released funds without verifying construction progress — [Moneylife](https://www.moneylife.in/article/supreme-court-blasts-builderbank-nexus-in-home-loan-interest-subvention-scheme-warns-of-cbi-investigation/76613.html); [Tribune](https://www.tribuneindia.com/news/delhi/duping-of-ncr-homebuyers-sc-asks-cbi-to-prepare-roadmap-to-unravel-builder-banks-nexus-2); [Outlook Business](https://www.outlookbusiness.com/news/are-you-instead-of-your-developer-paying-emis-under-subvention-scheme-there-s-a-way-out-news-189426)

**Price list, discount and hold control (vendor practice)**
- Builder-CRM practice ties each discount request and payment capacity to the quoted price and an approval status, so the deal is approved or sent back for evidence — [Jodoo](https://www.jodoo.com/ai/use-cases/real-estate-crm-software-for-property-builders). Vendors advertise "approval-driven negotiations" and dynamic cost sheets — [Sell.Do](https://www.sell.do/real-estate-crm)
- Pricing matrices should be configurable per project without developer involvement — [EngineerBabu](https://engineerbabu.com/blog/wp-json/wp/v2/posts/23366). CP portals should show cost sheets only at the current approved price — [Sell.Do CP management 2026](https://www.sell.do/blog/channel-partner-management-for-real-estate-developers-2026)

### Inferences
- Cost-sheet engine components to configure per project, tower and unit:
  - Carpet area (sq m and sq ft), with balcony and other areas shown separately.
  - Base rate (per sq ft carpet) × area, floor-rise rule (per floor above N, slab or per-sq-ft), and PLC rules (garden, sea or creek view, corner, club-facing).
  - Covered or stilt or mechanical parking price per slot (with level and dimensions); open parking at ₹0.
  - Development or infrastructure charges, legal or documentation charges, society formation and share money, advance maintenance (months × rate × area), corpus or sinking fund, and electricity, water and gas meter or connection charges.
  - Club or amenities, GST per component (agreement value at 5%/1%; check GST treatment of each "other charge" line separately), and stamp duty (by city, gender and joint composition, on the higher of AV and ready reckoner).
  - Registration (1%, capped at ₹30,000), TDS 1% (buyer-deducted, so the receipt shows net plus TDS), and the payment plan (construction-linked with Annexure A stages, time-linked, down-payment, subvention).
- The cost sheet should be generated from an approved, versioned price list (effective-from date, approver, project or tower or phase). Each booking should store the price-list version and any deviation, discount, waiver or scheme with approver and approval level. That allows audit of CP brokerage and of the "total consideration" stated on the allotment letter and agreement.
- Stamp-duty logic must be city-specific (MCGM, TMC, NMMC, KDMC, Panvel, MMRDA areas and so on) and versioned with effective dates, because sources conflict on Navi Mumbai and Thane and concessions change.
- Because the RERA consideration excludes GST, stamp duty and registration, the CRM should show "Agreement value" separately from "Statutory charges" and "Other charges", and allow cost sheets to be marked indicative or approved.

### Gaps
- I found no authoritative current values for share money, entrance fee, society formation, legal charges, or Mahavitaran (MSEDCL) meter and connection deposits in Mumbai/Navi Mumbai cost sheets. Background, unverified: share money is often ₹500–600 per member under MCS Act bye-laws.
- I found no official IGR Maharashtra rate notification for Navi Mumbai, Thane or Panvel to settle the conflicts. The Maharashtra Stamp Act article references (agreement for sale treated as conveyance) were not retrieved.
- I found no source on GST rates for individual ancillary charges (parking, club, maintenance, legal) as typically shown in Maharashtra cost sheets, or on whether MahaRERA restricts charging "development charges" separately from the carpet-area price.
- I found no MahaRERA order specifically on subvention, 20:80 or "no-EMI" schemes, or current (2026) RBI or NHB rules on them.
- Background, not verified here: the Supreme Court's 2010 Nahalchand Laloochand ruling bars sale of open parking in Maharashtra.

---

## 5. Booking process: EOI, token, application form, KYC, buyer types, NRI, allotment letter, unit hold

### Takeaway
In Maharashtra the booking is governed by RERA s.13 (no more than 10% of cost as advance or application fee before a registered agreement) and the mandatory MahaRERA model allotment letter, revised under Order 60/2024. The letter fixes the unit and parking details, the amount received (≤10%, possibly in stages), deposit into the RERA designated collection account, and a cancellation-deduction table (Nil / 1% / 1.5% / 2% by days since allotment). It also sets a 45-day refund and requires the agreement to be executed and registered within 2 months. EOIs before RERA registration are legally risky under s.3. KYC and buyer-type handling (joint, company, HUF, NRI with FEMA payment rules and PoA) must be captured precisely, because name and entity mismatches have led to disputes.

### Cited Findings
**Advance cap and booking amount**
- The allotment letter must be issued in the model format "whenever a sum not more than 10% (ten per cent) of the cost" is collected as deposit or advance. The amount received "shall not be more than 10% of the cost of the said unit" — [MahaRERA model allotment letter (Annexure 1)](https://maharera.maharashtra.gov.in/sites/default/files/inline-files/Allotment.pdf)
- RERA s.13: without first entering into a sale agreement, the promoter cannot receive more than 10% of the cost — [SCC Online](https://www.scconline.com/blog/post/2021/06/23/rera/); [Open Exam Prep, MahaRERA CoC guide](https://open-exam-prep.com/study-guides/in-maharera-agent-coc/transaction-due-diligence-land-records/stamp-duty-registration-agreements)
- MahaRERA (order of 22 July 2025, Platinum Park case) held that taking more than 20% of consideration without a registered agreement (the MOFA-era limit) was not justified. The developer had resold the booked flats, so MahaRERA used unsold inventory to direct allotment of a similar flat under s.13 and execution of a registered agreement. The allotment letter was in an HUF's name while the complainant was an individual, and the developer argued the name mismatch made the complaint non-maintainable. The developer had also not updated inventory on the MahaRERA portal — [Free Press Journal](https://www.freepressjournal.in/amp/mumbai/maharera-orders-flat-allotment-for-homebuyer-after-developer-resells-booked-units-without-agreement)
- Typical formal booking is 5–10% of price, followed by the agreement within 30–60 days — [Piramal Realty EOI blog](https://www.piramalrealty.com/blogs/what-is-eoi-in-real-estate)

**EOI (Expression of Interest) and pre-launch**
- EOI is described as a non-binding declaration before launch with a refundable token. It secures a place in a priority group and access to pre-launch pricing, not a specific unit or locked price. Amounts are ₹50,000–2,00,000 for mid-range projects and up to ₹5,00,000+ for premium. Payment goes only by cheque or transfer to the company account. Refunds typically come within 30–45 days. Registrants are typically contacted within 2–6 weeks for a time-bound priority booking session, and the token is adjusted against the booking amount. Only photo ID, PAN and contact details are needed at EOI, with full KYC at booking — [Piramal Realty](https://www.piramalrealty.com/blogs/what-is-eoi-in-real-estate)
- Conflict: Piramal says "RERA registration is not required at the EOI stage" — [Piramal Realty](https://www.piramalrealty.com/blogs/what-is-eoi-in-real-estate). Another guide says s.3 bars booking or selling before registration, so an EOI then carries legal risk, with a penalty of up to 10% of project cost and possible imprisonment for continued default. A priority number usually follows receipt order, or a draw is held. EOIs may be fully adjustable or carry a cancellation charge — [RealtyHunting EOI guide](https://realtyhunting.com/eoi-pre-launch-property-booking). Telangana RERA has stated that pre-launch offers violate the Act — [Housing.com](https://housing.com/news/pre-launch-project-offers-violation-of-rera-act)

**MahaRERA model allotment letter: full field and clause list** — [MahaRERA Annexure 1](https://maharera.maharashtra.gov.in/sites/default/files/inline-files/Allotment.pdf) (PDF dated September 2024, matching the Order 60/2024 revision; earlier model approved 27 May 2022 per [TaxGuru](https://taxguru.in/corporate-law/maharera-approves-model-allotment-letter.html))
- Header: letter number and date. Allottee name, address, telephone or mobile, PAN, Aadhaar, email. Subject line gives the project name and MahaRERA registration number.
- Cl.1 Unit: BHK type, flat, villa, bungalow or commercial; unit number; RERA carpet area in sq m and sq ft; floor; building, tower, block and wing; project and MahaRERA number; land identifiers (CS, CTS, Final Plot, Survey, Hissa, Gat, Khasra or Plot numbers; village, taluka, district; land area); total consideration in figures and words, exclusive of GST, stamp duty and registration. There is an alternative wording for plots or areas.
- Cl.2 Parking: garage or covered parking (level basement, podium, stilt or mechanical; number; sq ft; L × B × vertical clearance). Or open parking (number; L × B) "without consideration".
- Cl.3 Receipt of part consideration: amount in figures and words (≤10%), % of total, date, payment mode. Deposited in the RERA Designated Collection Bank Account (bank, branch, IFSC, address). The RERA Designated Separate and Transaction account numbers are also listed. Area-share projects list the three accounts of all promoters; revenue-share projects also list the RERA Designated Master Bank Account. Alternative Cl.3: booking amount accepted in stages with dated instalments (a)–(d), total ≤10%. Failure to pay triggers Cl.12 action.
- Cl.4 Disclosures: sanctioned plans, layout and specifications displayed at site and uploaded to MahaRERA; stage-wise completion schedule (Annexure A); MahaRERA website address.
- Cl.5 Encumbrances: either none, or a list of encumbrances or caveats.
- Cl.6 Further payments per the agreement for sale. Cl.7 Possession date. Cl.8 Interest on delayed payment at SBI highest MCLR + 2%.
- Cl.9 Cancellation by allottee: deduction if the request arrives within 15 days of the allotment letter Nil; 16–30 days 1% of cost; 31–60 days 1.5%; after 61 days 2%. Deduction may not exceed the table. The balance is refunded without interest within 45 days of the cancellation letter; if late, interest at SBI highest MCLR + 2%. Promoters may offer more favourable terms (more days, lower %) but not less favourable ones — [TaxGuru on model letter](https://taxguru.in/goods-and-service-tax/maharera-regulations-format-model-allotment-letter.html)
- Cl.10 Other payments: GST, stamp duty, registration and other charges per the agreement. Cl.11 Proforma agreement for sale enclosed. It is not binding until Cl.12 is complied with.
- Cl.12 Execution and registration: the allottee must execute the agreement and appear before the Sub-Registrar within 2 months of the letter (extendable by mutual understanding). For a staged booking amount, a missed instalment brings a 15-day notice, then cancellation and forfeiture of the lesser of the amount paid and the Cl.9 table amount. Failing to execute or register in 2 months brings a 15-day notice, then cancellation, forfeiture of no more than 2% of cost, and a refund within 45 days of notice expiry (else interest at SBI MCLR + 2%).
- Cl.13 After the agreement is registered, cancellation is governed by the agreement. Cl.14 Headings.
- Signatures: promoter or authorised signatory (name, email, date, place). The allottee signs a "Confirmation & Acknowledgement".
- Annexure A: stage-wise completion dates for 20 stages: excavation, basements, podiums, plinth, stilt, superstructure slabs, internal works, fittings, staircase, lifts and tanks, external works, lift and fire installation, internal roads, water supply, sewerage and STP, storm drains, sewage treatment, solid waste, rainwater harvesting, electrical substation, others.
- Deviations from the model must be highlighted in a different colour (with a deviation sheet) when filing for registration. Parking clauses cannot be deviated from — [TeamLease RegTech on Order 60/2024](https://www.teamleaseregtech.com/updates/article/35192/maharashtra-rera-issued-a-new-proforma-of-allotment-letter-and-agreeme/); [TaxGuru](https://taxguru.in/corporate-law/maharera-approves-model-allotment-letter.html)

**Unit blocking and hold**
- Holds are time-boxed, typically 24–48 hours, and system-enforced so a broker cannot lock inventory without converting — [EngineerBabu](https://engineerbabu.com/blog/wp-json/wp/v2/posts/23366). A suggested unit status model: Available → Soft hold → Booking in progress → Booked → Registered, with holds lapsing after 48–72 hours and an alert to extend or release — [EngineerBabu](https://engineerbabu.com/blog/?p=23746)
- One state per unit. A second rep sees who holds it and when the hold ends, which prevents double booking — [Sell.Do inventory](https://www.sell.do/real-estate-crm/inventory-and-negotiations/projects-towers-units)

**Booking/application form and KYC**
- The allotment letter itself requires allottee name, address, phone, PAN, Aadhaar and email — [MahaRERA Annexure 1](https://maharera.maharashtra.gov.in/sites/default/files/inline-files/Allotment.pdf)
- RERA-filed builder application forms (Haryana examples) ask for Aadhaar and PAN, with Form 60/61 if there is no PAN. Second-applicant sections ask for Aadhaar, PAN and mobile — [Haryana RERA uploaded form](https://haryanarera.gov.in/project/view_uploaded_Document_open/OTMzOQ==); [Haryana RERA uploaded form 2](https://haryanarera.gov.in/project/view_uploaded_Document_open/NTY1OTE=). A Mumbai MahaRERA-registered project's application form covers project details, applicant obligations, payment plans, and acceptance or rejection terms — [Scribd sample application form](https://www.scribd.com/document/889761345/Application-Form)
- Company applicant: a board resolution authorising the signatory to buy for the company, the signatory's photo and Aadhaar, the company's MoA and AoA, and registered office proof. HUF applicant: HUF PAN (and GST certificate where applicable), the Karta's photo and Aadhaar — [Haryana RERA application form](https://haryanarera.gov.in/project/view_uploaded_Document_open/1d7a7a178dNzI5Njk=)
- HUF KYC (mutual-fund checklist, indicative): HUF PAN, Karta KYC with PAN and Aadhaar, HUF deed, list of coparceners with signatures and PAN and Aadhaar — [Finnovate](https://docs.finnovate.in/product/mutual-funds/bsestar/huf). For HUF property deals, either all coparceners sign or the Karta signs with coparcener NOCs — [Kaanoon](https://www.kaanoon.com/381631/safeguards-during-purchase-of-flat-from-an-huf)

**NRI / OCI buyers**
- Payment must be received in India through banking channels, or from NRE, FCNR(B) or NRO accounts. It "cannot be made either by traveller's cheque or by foreign currency notes" — [RBI FAQ on immovable property](https://rbi.org.in/SCRIPTs/FAQView.aspx?Id=117); [RBI Master Direction](https://rbi.org.in/ScriptS/BS_ViewMasDirections.aspx?id=10196). The governing rules are the FEMA (Non-Debt Instruments) Rules, 2019. The FAQ was updated 6 April 2023 (VERIFY for later changes) — [RBI FAQ](https://rbi.org.in/scripts/FAQView.aspx?Id=117)
- NRIs and OCIs can buy residential or commercial property without RBI approval, but not agricultural land, plantation or farmhouse (except by inheritance) — [Dosti Realty NRI corner](https://dostirealty.com/nri-corner); [Vakilsearch](https://vakilsearch.com/article/nri-buying-property-in-india/)
- Purchase "on deferred payment basis is not permitted without prior approval of RBI" per one commentary. Its applicability to builder instalment plans is unclear (VERIFY) — [Taxmann](https://www.taxmann.com/post/blog/acquisition-transfer-of-immovable-property-under-fema-regulations/)
- NRE funds are fully repatriable. NRO repatriation is capped at USD 1 million per financial year — [Zolt Money](https://zoltmoney.com/blogs/sending-money-to-india-to-buy-property/)
- TDS: when buying from a resident builder, the NRI buyer deducts 1% (≥₹50 lakh) via the PAN-based challan (Form 26QB up to 31 Mar 2026, then Form 141). Section 195 (TAN, Form 27Q) applies only when the seller is non-resident — [NRI Taxs 2026](https://nritaxs.com/buying-property-in-india-as-an-nri-2026/); [Zolt Money](https://zoltmoney.com/blogs/sending-money-to-india-to-buy-property/); [Thane Real Estate News](https://thanerealestatenews.com/income-tax-act-2025-tds-changes-property-buyers-nri-sellers/)
- NRI documents: PAN, passport and visa or OCI, overseas address proof, and a notarised or apostilled PoA for remote execution — [Vakilsearch](https://vakilsearch.com/article/nri-buying-property-in-india/); [Brigade](https://www.brigadegroup.com/blog/residential/nri-guide-key-tips-buying-residential-property-india)
- Power of attorney executed abroad: apostille (Hague countries) or Indian embassy or consulate attestation (non-Hague). Within 3 months of receipt in India it must be stamped and adjudicated (Collector of Stamps). Adjudication takes about 2–15 working days. Maharashtra stamp duty on a PoA varies: ₹500 for close relatives versus higher amounts for others or where consideration is involved (sources conflict) — [NRI Information](https://nriinformation.com/legal/power-attorney); [Piramal Realty NRI PoA guide](https://www.piramalrealty.com/blogs/power-of-attorney-for-nris-buying-property-in-mumbai); [Advocate Gandhi](https://advocategandhi.com/stamping-and-adjudication-of-power-of-attorney-executed-abroad-in-india-a-complete-legal-guide/); [EzyLegal](https://www.ezylegal.in/blogs/power-of-attorney-for-nris-in-maharashtra)
- NRI-buyer playbooks for builders exist (time zones, document handling) — [Makanify NRI playbook](https://makanify.com/blog/nri-buyer-inquiries-real-estate-india-playbook)

**Joint applicants and gender concession**
- The women's stamp-duty concession (1%) is linked to sole women or all-women buyers. Sources conflict on mixed joint ownership (see section 4) — [PropertyButler](https://propertybutler.in/insights/stamp-duty-concession-women-maharashtra-2026); [Rustomjee](https://www.rustomjee.com/blog/stamp-duty-and-registration-charges/)

### Inferences
- Booking (application form) fields to support, per applicant (primary plus up to N co-applicants with ordering):
  - Identity: title, full name as per PAN, father's or spouse's name, DOB, gender (drives stamp duty), marital status, PAN (or Form 60), Aadhaar (store masked), passport, OCI or visa for NRIs.
  - Contact and status: residential status (resident, NRI, OCI or PIO, foreign national), correspondence and permanent address (overseas address for NRI), mobile with OTP verification, email, occupation, employer, income band.
  - Relationship and share: relationship to the primary applicant and ownership share (if specified).
  - Photo and signature.
- Booking-level fields:
  - Buyer type (individual, joint, company, LLP, partnership, HUF, trust), authorised signatory and authority document (board resolution or HUF declaration), and PoA holder details (PoA type, date, adjudication date and stamp).
  - Unit and parking selection, price-list version, cost sheet ID, payment plan, booking amount (≤10%, or a staged schedule with due dates), payment instrument (mode, bank, cheque or UTR, NRE/NRO/FCNR account flag for NRIs), receipt numbers.
  - Home-loan flag and bank, source and CP details (MahaRERA agent number and brokerage per Clause 15A), sourcing, closing and presales owners, and buyer declarations and consents.
- Validations:
  - Total collected before agreement registration ≤ 10% of cost, a hard stop.
  - The allotment letter must be generated in the MahaRERA model format with mandatory fields (carpet area in sq m and sq ft, parking dimensions, the three RERA bank accounts, Annexure A dates).
  - NRI payments only by banking channel or NRE/FCNR(B)/NRO; block traveller's cheques and foreign currency notes.
  - Buyer names and entity type must match exactly across application, receipts, allotment letter and agreement (the HUF-vs-individual dispute shows the risk).
- Unit inventory should run one state machine with timers: Available → Hold (with expiry, extension count, approver) → Blocked against token or EOI → Booked (allotment issued) → Agreement registered → Cancelled (deduction per Cl.9 or Cl.12, refund due date = request date + 45 days, interest accrual after that) → Re-released. Release to resale should be blocked until cancellation is complete, and inventory status should sync with MahaRERA quarterly updates.
- EOI module (if used): EOI number, priority number or draw, amount, refund terms, refund due date, adjustment against booking, and a hard check that the project has a MahaRERA registration number before any EOI or booking money is accepted (s.3 risk).

### Gaps
- The verbatim text of RERA s.13 (including the application fee wording) was not retrieved, because the India Code and MoHUA PDFs returned 403.
- I found no official MahaRERA booking or application-form format. MahaRERA mandates only the allotment letter and agreement proformas. I found no Maharashtra builder application form with field lists, including source-of-funds or CP declarations.
- I did not verify these compliance items, which are background and need verification:
  - Aadhaar storage rules for private entities (masked Aadhaar).
  - Cash-receipt limits under Income-tax law (old s.269ST/269SS and the new Act equivalents).
  - Whether developers or real-estate agents are PMLA "reporting entities" with KYC and record-keeping duties.
- I found no source on rules for adding or removing co-applicants after booking (name addition or deletion, transfer or nomination before agreement) or the fees developers charge for it.
- I found no current confirmation of whether OCI rules changed after the 2021 Supreme Court interim order or FEMA amendments. This needs verification as of Oct 2026.
- I could not settle whether "deferred payment" FEMA restrictions affect NRI construction-linked plans.

---

## 6. From booking to registered agreement for sale: data and approvals

### Takeaway
After the allotment letter the clock is about 2 months (extendable by mutual agreement) to execute and register the agreement for sale. Within that window the CRM must track several things: agreement drafting from the MahaRERA proforma (deviation sheet, non-negotiable parking clauses, Clause 15A brokerage), stamp duty payment by e-challan, a Sub-Registrar slot, TDS, home-loan sanction, and collection up to the 10% cap. Staged booking-amount instalments, 15-day default notices, cancellation deductions and 45-day refunds are all time-bound obligations the CRM must enforce.

### Cited Findings
- The proforma agreement for sale is enclosed with the allotment letter. Forwarding it does not bind either party until Cl.12 is complied with. The allottee must execute and appear for registration within 2 months (extendable by mutual understanding). Otherwise a 15-day notice follows, then cancellation with forfeiture of no more than 2% and a refund within 45 days — [MahaRERA model allotment letter](https://maharera.maharashtra.gov.in/sites/default/files/inline-files/Allotment.pdf)
- Agreement-for-sale deviations from the proforma and the Rule 10 Annexure A model must be highlighted and listed in a deviation sheet. Parking clauses cannot be changed (Order 60/2024) — [TeamLease RegTech](https://www.teamleaseregtech.com/updates/article/35192/maharashtra-rera-issued-a-new-proforma-of-allotment-letter-and-agreeme/)
- Clause 15A (Order 63/2024, 22 Oct 2024): the agent's brokerage, including taxes, must be stated in the agreement for sale and sale deed — [LiveLaw](https://www.livelawbiz.com/consumer-cases/maharera-issues-order-project-registration-eligibility-real-estate-agent-fee-clause-agreements-for-sale-274083)
- The same order says projects exempt under s.3(2) do not need a MahaRERA certificate to register agreements or sale deeds — [LiveLaw](https://www.livelawbiz.com/consumer-cases/maharera-issues-order-project-registration-eligibility-real-estate-agent-fee-clause-agreements-for-sale-274083)
- Registration steps: pay stamp duty (e-challan or authorised bank), book a slot on the IGR Maharashtra portal, attend with original documents and witnesses for biometric capture and signing — [Sobha](https://www.sobha.com/blog/how-to-register-property-mumbai/); [Citizen Matters](https://citizenmatters.in/explainer-how-to-register-a-flat-in-mumbai-29698)
- Registration of the agreement must occur within 4 months of execution (MahaRERA CoC study guide) — [Open Exam Prep](https://open-exam-prep.com/study-guides/in-maharera-agent-coc/transaction-due-diligence-land-records/stamp-duty-registration-agreements)
- A registered agreement is usually needed for home-loan processing and disbursement — [Sobha on Aaple Sarkar/registration](https://www.sobha.com/blog/aaple-sarkar-maharashtra-property-registration-mumbai-pune/)
- Bookings flow into agreements, collections and possession, creating a "RERA-ready record" — [Sell.Do lead management guide](https://www.sell.do/blog/real-estate-crm-lead-management-guide)
- CP brokerage is typically triggered at agreement registration plus receipt of the first 10% — [Sell.Do CP management 2026](https://www.sell.do/blog/channel-partner-management-for-real-estate-developers-2026)
- Buyer money goes into the RERA Designated Collection Bank Account. The allotment letter must also list the Separate and Transaction accounts (and the Master account for revenue-share projects), per the three-bank-account regime in Order 60/2024 — [MahaRERA model allotment letter](https://maharera.maharashtra.gov.in/sites/default/files/inline-files/Allotment.pdf); [MahaRERA Orders page](https://maharera.maharashtra.gov.in/order)
- MahaRERA system changes relevant to integration, as of Oct 2026:
  - Order 64/2025 (2 May 2025): guidelines for go-live of the Project Lifecycle Management module.
  - Circular 65/2026 (23 Feb 2026): closure of long-pending incomplete applications on the old portal.
  - Order 65A/2026 (8 May 2026): closure of the old MahaRERA portal from 11 May 2026.
  - Order 66/2026 (7 Aug 2026): force-majeure extension of project registrations.
  - [MahaRERA Orders page](https://maharera.maharashtra.gov.in/order)
- Developers' failure to update unit inventory on the MahaRERA portal was noted adversely in the July 2025 Platinum Park order — [Free Press Journal](https://www.freepressjournal.in/amp/mumbai/maharera-orders-flat-allotment-for-homebuyer-after-developer-resells-booked-units-without-agreement)
- TDS at 1% applies to consideration (including incidental charges) where ≥₹50 lakh, under s.393(1) Income-tax Act 2025 from 1 Apr 2026 (Form 141) — [TaxGuru](https://taxguru.in/income-tax/tds-property-transactions-transition-form-26qb-form-141.html)

### Inferences
- Post-booking checklist and workflow to track per booking:
  - Allotment letter generated and issued (date starts the 15/30/60-day cancellation slabs and the 2-month registration window), and acknowledgement signed by allottees.
  - Staged booking-amount schedule with reminders, a 15-day notice workflow on default, and cancellation.
  - Draft agreement generated from the approved template (version and deviation sheet), with CP and brokerage in Clause 15A, parking and Annexure A schedule.
  - Legal and CRM approval of the draft; buyer review; any change requests with approver.
  - Stamp duty computed (city, gender and joint rules; higher of AV and ready reckoner), e-challan or GRAS reference and amount, registration fee.
  - Sub-Registrar appointment (office, date, slot, token), registration document number and date, scanned registered copy (the Index-II extract record is common in Maharashtra).
  - Home loan: lender, sanction letter date and amount, builder NOC or permission-to-mortgage issued, tripartite agreement if any, disbursement requests.
  - Receipts and demand letters, TDS challan or Form 141 acknowledgement per payment, and a TDS-certificate reconciliation.
  - NRI items: FIRC or NRE/NRO debit proofs, and the PoA adjudication record.
  - CP brokerage trigger flag once registration and collection conditions are met.
- Approvals to model: price or discount deviation, payment-plan deviation, hold extension, staged booking amount, extension of the 2-month registration window (mutual, needs a record), name addition or deletion, unit transfer, parking change, cancellation with deduction amount (capped per Cl.9 or Cl.12) and refund release (45-day SLA with interest after that).
- The 10% pre-agreement cap must be enforced across all receipt types (EOI, token, booking, "other charges", GST collected), unless legal advice confirms which components count toward "cost".

### Gaps
- I did not find the full text of Order 60/2024 (amenities clauses, effective date: one source says 29 April 2024 although the order was issued 4 Sept 2024) or of the current MahaRERA model agreement for sale (Rule 10 Annexure A).
- I found no source on Maharashtra builder NOC or permission-to-mortgage formats, tripartite agreements, or typical home-loan sanction timelines.
- I found no source on whether TDS is deducted per instalment versus on aggregate. Background practice is per payment, but this is unverified here.
- I could not verify the 4-month window to register after execution against the Registration Act text, nor how it interacts with the 2-month window in the allotment letter.
- I found no source on MahaRERA quarterly progress-report (QPR) requirements for booked-unit inventory and receipts, or on the format of the new MahaRERA portal data for any CRM integration.
