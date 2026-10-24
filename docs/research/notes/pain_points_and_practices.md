# Pain Points, Failure Reasons and Best Practices for Builder CRM Adoption in India (incl. Data Migration)

Source-quality note for the report writer: research done October 2026. Independent, India-specific research on builder CRM adoption is thin. Most concrete operational detail comes from CRM vendor pages (Sell.Do, Makanify, telecrm, DaeBuild) and one implementation-partner case study (Aaxonix). Those claims are flagged "vendor claim" below and their numbers are unverified. Regulator data (MahaRERA), rating-agency reports (ICRA), listed-developer disclosures, tax guides and legal guides are more reliable and are used where available. No personal data is included.

## 1. Why do builder CRM implementations fail or get under-used?

### Takeaway
CRMs fail in Indian builder firms less because of missing features than because the CRM covers only part of the workflow. Leads sit in the CRM, while inventory, quotes and approvals stay in Excel and WhatsApp, receivables stay in Tally, and CP attribution has no fixed rule. Sales staff then see the CRM as extra data entry, stop updating it, and management loses the single source of truth it was bought for. Portal duplicates, CP-versus-walk-in ownership fights and inflexible reports make it worse.

### Cited Findings
**Poor fit of generic or global CRMs**
- Generic CRMs are "designed for industries like SaaS or retail, not for property sales". Project-wise inventory, broker performance tracking and post-sales documentation are complicated or missing (vendor claim) — [Sell.Do: Real Estate CRM Challenges in India](https://www.sell.do/blog/real-estate-crm-challenges-and-solutions-in-india)
- Low-cost tools handle only lead capture. They have no automated follow-ups, project workflows or broker channel tracking, and "break down when you try to scale" (vendor claim) — [Sell.Do](https://www.sell.do/blog/real-estate-crm-challenges-and-solutions-in-india)
- Global CRMs "demand large budgets, external consultants, and dedicated IT teams" that many Indian developers can't commit (vendor claim) — [Sell.Do](https://www.sell.do/blog/real-estate-crm-challenges-and-solutions-in-india)
- Without hands-on onboarding and local support, "CRM becomes just another unused subscription". Teams that resist change are named as a cause — [Sell.Do](https://www.sell.do/blog/real-estate-crm-challenges-and-solutions-in-india)
- Tool sprawl: "using five different platforms for one sales process" (leads, site visits, email) creates data silos, and integration becomes a project in itself — [Sell.Do](https://www.sell.do/blog/real-estate-crm-challenges-and-solutions-in-india)
- Buyers lack clarity on where customer data is stored and who can access it, despite stricter Indian data-protection law — [Sell.Do](https://www.sell.do/blog/real-estate-crm-challenges-and-solutions-in-india)

**Adoption and data-entry burden**
- Teams stop updating the CRM because the interface isn't mobile-friendly, basic tasks take too many clicks, and the tool "feels like extra work". Managers then lose visibility (vendor claim) — [Makanify: Using a CRM but still struggling?](https://makanify.com/blog/real-estate-crm-struggles-india)
- Leads from 99acres, MagicBricks and ads don't always reach the CRM automatically. Assignment and follow-up stay manual. Makanify cites Freshsales: "sales teams lose up to 27% of leads due to poor CRM lead assignment practices" (secondary citation, not verified) — [Makanify](https://makanify.com/blog/real-estate-crm-struggles-india)
- Makanify's self-check, under which more than two "no" answers means the CRM isn't working:
  - Does the team update it daily without reminders?
  - Can you see project sales health in three clicks?
  - Are portals and Meta integrated?
  - Is Excel or WhatsApp still used for inventory or follow-ups?
  - Can project documents be generated inside the CRM?
  — [Makanify](https://makanify.com/blog/real-estate-crm-struggles-india)

**Excel and WhatsApp dependence**
- Generic CRMs can't handle unit holds, bookings or payment plans, so teams use the CRM for leads, Excel for inventory, Word for quotes and WhatsApp for approvals. This causes errors and internal confusion. Makanify says a good CRM should replace four or five tools (vendor claim) — [Makanify](https://makanify.com/blog/real-estate-crm-struggles-india)
- When WhatsApp runs on reps' personal phones:
  - Chats and buyer context leave with a departing rep, and nothing is logged in the CRM.
  - The campaign behind a booking can't be traced.
  - There is no response SLA or manager visibility.
  The recommended fix is the WhatsApp Business API, with company-owned shared threads in the CRM — [Sell.Do: WhatsApp-first real estate playbook 2026](https://www.sell.do/blog/whatsapp-first-real-estate-2026-playbook)

**Duplicate leads**
- Portals are "the largest lead source in Indian real estate and the largest source of duplicates". In Sell.Do's example the same buyer enquires on three portals and a rep calls twice (vendor claim) — [Sell.Do: Portal leads 2026](https://www.sell.do/blog/real-estate-portal-leads-99acres-magicbricks-housing-2026)
- On most portal packages, enquiries arrive by email. API or webhook delivery is mainly on larger builder or agency plans. If an enquiry has no listing or project ID, the lead is attributed to "99acres" as a whole rather than to a project — [Sell.Do: Portal leads 2026](https://www.sell.do/blog/real-estate-portal-leads-99acres-magicbricks-housing-2026)
- Without deduplication, "the same buyer is assigned to three different agents who call within minutes of each other". The fix is to identify the same buyer across sources and merge into one record before assignment (vendor claim) — [telecrm real estate](https://devweb.telecrm.in/crm-for-industry/real-estate)

**CP lead-ownership disputes**
- How a typical dispute starts: a CP tags a buyer, and later the buyer walks into the site office and a direct rep logs them. "Both now claim the brokerage." In Sell.Do's example, all three disputes in a month began with walk-ins that were never checked against CP tags — [Sell.Do: CP conflict management](https://www.sell.do/real-estate-crm/channel-partners/conflict-management)
- The fix is an attribution window and tie-break set in advance:
  - "90 days is common in Indian real estate". "A window decided after a dispute is not a rule."
  - The tie-break is the first verified tag. In the example, a CP tag on 4 June beats a direct walk-in logged 17 days later.
  - Overrides are "Sales Head only".
  - The audit trail records who tagged, when and through which channel, so the outcome becomes "a policy being applied rather than a judgement being made".
  - Sell.Do claims disputes fell 82% (vendor claim, unverified).
  — [Sell.Do](https://www.sell.do/real-estate-crm/channel-partners/conflict-management)
- Developers treat this as a formal job duty. A Salarpuria Group channel-sales role must "resolve lead ownership conflicts and commission-related disputes" and is measured on a "Dispute Resolution Turnaround Time" KPI — [Salarpuria channel sales manager listing (foundit)](https://www.foundit.in/job/channel-sales-manager-salarpuria-group-kolkata-58167820)

**Disconnected sales and accounts (township case study, vendor-published)**
- Broker-held spreadsheets caused duplicate plot allotments, with brokers booking the same plot hours apart. These surfaced only at registration: 23 conflicts and ₹6.4 lakh in compensation in one fiscal year — [Aaxonix township developer case study](https://aaxonix.com/resources/?p=1884)
- Accounts logged instalments in Tally, but sales had no view of overdue buyers. Demand letters were written manually in Word, often weeks late. Estimated annual leakage was ₹38L, though the page headline says ₹18L — [Aaxonix](https://aaxonix.com/resources/?p=1884)
- Commissions were calculated by hand from booking registers with no audit trail. 15–20% of transactions were disputed, and two top brokers left the network — [Aaxonix](https://aaxonix.com/resources/?p=1884)

**Complaints on review sites (real-estate CRM, Sell.Do as the most-reviewed Indian example)**
- Overall sentiment is positive: Capterra shows 96% positive, 1% neutral and 4% negative across 134 reviews, while SpotSaaS gives 3.5/5 from 12 reviews — [Capterra: Sell.Do](https://www.capterra.com/p/151826/Sell-Do/); [SpotSaaS](https://www.spotsaas.com/product/sell-do)
- Recurring complaints: default reports are "not customizable or flexible", telephony, notification and speed problems, integration issues and spam-call flagging — [G2: Sell.Do reviews](https://www.g2.com/products/selldo/reviews); [Software Advice](https://www.softwareadvice.com/crm/selldo-profile/)
- One 1-star review alleges features "don't work or are in development since years" — [Software Advice](https://www.softwareadvice.com/crm/selldo-profile/)
- Pricing can be high for smaller agencies, and advanced AI features take time to master — [SpotSaaS](https://www.spotsaas.com/product/sell-do)

### Inferences
- The main design goal should be that the CRM is where the work happens, not a record of work done elsewhere. That means:
  - Unit holds and bookings, cost sheets and quotes, approvals, demand letters, receipts and CP tagging all live in the same system.
  - Every portal, ad and WhatsApp lead is captured automatically, so reps never retype leads.
- Duplicate checks need to run at every entry point: portal webhook, CP tag, walk-in registration and manual entry. Matching should use a normalised mobile number at minimum. A walk-in must be checked against active CP tags before it is saved. This is the exact gap behind the Sell.Do dispute example.
- CP attribution should be a configurable, versioned policy with a dispute log, decided before launch:
  - window length
  - tie-break rule
  - who may override
  - CP visibility of outcomes
- Commission calculation must be tied to the booking and fully audit-trailed. The Aaxonix case links untracked commissions to losing top brokers.
- Reporting must be configurable by the builder. Rigid default reports are the most common review complaint.
- Telephony reliability matters, because the call is the core sales action. Calling and speed issues come up repeatedly in reviews.

### Gaps
- No independent survey of Indian builder CRM adoption or failure rates was found. The Freshsales 27% figure is second-hand.
- A vendor claim that Salesforce rollouts in Indian real estate are "quietly abandoned" for Excel and WhatsApp within a year appeared in search snippets. The exact source page was not verified, so it is excluded.
- No Farvision user reviews were found on G2, Capterra or SoftwareSuggest in this pass.
- No RERA or court rulings on CP-versus-developer lead ownership were found.

## 2. What problems do builders report with collections and post-sales?

### Takeaway
Collections break down at four handoffs:
- Construction milestone to demand letter, where demands are raised late or with manual interest maths.
- Demand to receipt, where bank and cheque receipts are not matched to the buyer ledger.
- Receipt to statutory records: GST rate versions, 194-IA TDS challans, Form 16B and 26AS matching.
- Collections to sales, where sales can't see overdue buyers because accounts work in Tally.

Lenders and rating agencies judge developers on collection efficiency, so these failures hit cash flow and credit, not just buyer experience.

### Cited Findings
**Demands and interest**
- Demands are tied to construction milestones and payment plans, and finance hand-calculates interest. The page says this delays "crores in collections" and frustrates buyers with errors. Teams also chase approvals and post letters late (vendor claim) — [Sell.Do: Demand letters](https://www.sell.do/real-estate-crm/post-sales-and-collections/demand-letters)
- The proposed fix: marking a milestone complete raises demands for every customer in that tower, with the right percentage, GST and due date. Letters go out in bulk by email and WhatsApp, and late-payment risk is scored for early reminders. Sample dashboard figures:
  - 184 demands, ₹42.6 Cr raised, ₹31.2 Cr (73%) collected
  - ₹6.8 Cr overdue across 41 customers
  - average 18 days to pay
  - sample delay-interest line of 10.5% p.a.
  These are vendor sample figures, illustrative only — [Sell.Do](https://www.sell.do/real-estate-crm/post-sales-and-collections/demand-letters)
- In the township case, manual Word demand letters took 5–7 days. After automation they were generated within 24 hours (vendor-published outcome) — [Aaxonix](https://aaxonix.com/resources/?p=1884)

**GST and TDS (194-IA) reconciliation**
- GST:
  - "Every quarter finance rebuilds GST workings in Excel."
  - After a mid-quarter rate change, "half the cost sheets go out on the old slab".
  - The fix is versioned tax rules: a new rate applies going forward and earlier documents keep their original rate (vendor claim).
  — [Sell.Do: Taxes, TDS & GST](https://www.sell.do/real-estate-crm/post-sales-and-collections/taxes-tds-gst)
- TDS:
  - Buyers who never file their 194-IA challan block the process: no Form 16B, and finance chases each buyer.
  - Manual Form 26AS matching takes "a fortnight of somebody's life".
  - Sell.Do's worked example on a ₹1.04 Cr agreement in Maharashtra: GST 5% (under construction) ₹5.2L, TDS 1% ₹1.04L, stamp duty 6% ₹6.24L, registration (capped) ₹30k.
  — [Sell.Do](https://www.sell.do/real-estate-crm/post-sales-and-collections/taxes-tds-gst)
- 194-IA mechanics:
  - The buyer deducts 1% on deals of ₹50 lakh or more, on every construction-linked instalment, at payment or credit, whichever is earlier.
  - Form 16B is not automatic. The buyer must download it from TRACES, and until then the seller's credit doesn't appear in 26AS.
  - Wrong PAN or transaction details cause 26AS mismatches.
  - TDS is due on the higher of agreement value and stamp-duty value, so buyers who use only the agreement value risk short-deduction notices.
  — [TaxBuddy: Form 16B](https://www.taxbuddy.com/blog/form-16b); [TaxGuru: Builder delay can trigger TDS interest](https://taxguru.in/income-tax/builder-delay-trigger-tds-interest-homebuyers.html); [Makanify: 194-IA guide for builders](https://makanify.com/blog/tds-property-purchase-194-ia-builders-india)
- Under the Income-tax Act, 2025 (from 1 April 2026), Form 141 is reported to replace Form 26QB and Form 132 to replace Form 16B. This came from 2026 tax guides surfaced in search and was not verified against the statute — [HomeFirst: TDS on property 2026](https://homefirstindia.com/blog/article/tds-on-purchase-of-property/); [TaxGarden](https://taxgarden.in/blog/tds-on-property-purchase-section-194-ia-form-26qb-india)
- On cancellation, 194-IA TDS can be refunded. Either the buyer applies on TRACES with the cancellation deed and a seller NOC, or the seller claims it and reimburses the buyer. This is CA forum guidance, not statute — [CAclubindia](https://www.caclubindia.com/experts/treatment-of-tds-under-section-194ia-in-case-of-cancelled-property-transaction-2959119.asp)

**Receivables tracking and the Tally gap**
- Tally tracks receivables by due date, but "receivables are seldom received on due-dates in India". This is the argument for a CRM-synced receivables layer on top of Tally (vendor claim) — [CRN: Enjay receivables management](https://www.crn.in/?p=6249)
- TallyPrime gives each invoice a bill reference, has ageing reports with configurable intervals, and has a cash-flow projection report — [Tally: credit & cash-flow management](https://durga.tallysolutions.com/us/features/credit-and-cashflow-management/)
- Township case fix: bank-feed payment matching plus a weekly reconciliation queue for unmatched payments (vendor-published) — [Aaxonix](https://aaxonix.com/resources/?p=1884)

**Why collection efficiency matters to the business**
- An ICRA rationale on a Ghaziabad developer flags several metrics together:
  - "muted sales velocity" over 12–18 months
  - years-to-sell of 7 years
  - collection efficiency of 41%
  - cash-flow adequacy of 32%
  This makes the company "highly dependent on ramping-up its sales and collections" — [ICRA rationale](https://www.icra.in/Rating/GetRationalReportFilePdf?id=117441)
- Ajmera Realty's collection efficiency rose to 65% in FY26 from 60% in FY25. This was tied to beating its leverage guidance — [Realty n More: Ajmera FY26](https://realtynmore.com/ajmera-realty-posts-record-fy26-profitability/)
- Lodha reports collections against pre-sales: about INR 761bn collected against about INR 770bn pre-sales since FY14, or 99% — [BSE filing (Lodha investor presentation)](https://www.bseindia.com/xml-data/corpfiling/Attachhis/2fe06cb2-48d5-489e-a37e-5a84912f903b.pdf)

**Possession, handover and snagging**
- SnagMann, an Indian app, positions itself on reducing customer dissatisfaction at handover — [GEM Engserv SnagMann](https://gemengserv.com/construction-technology/snagmann-app/)
- SnagR colour-codes each unit by handover stage: purchaser invited, key collection booked, keys collected — [SnagR handover process](https://snagr.helpjuice.com/handover-process-with-purchaser)
- PlanRadar recommends snagging during construction so only minor fixes remain at key handover — [PlanRadar](https://www.planradar.com/gb/?p=159941)
- Township case: project handovers were reported 40% faster after integration (vendor-published) — [Aaxonix](https://aaxonix.com/resources/?p=1884)

### Inferences
- The CRM needs a per-buyer ledger with dated demand lines and receipt lines, from which overdue amounts and interest are calculated. Interest should be computed by the system from a rate rule versioned by state and date. That removes manual interest maths, the most-cited error source.
- Demand generation should be triggered in bulk by a milestone event, such as "slab 7 complete in Tower B". Approval workflow and WhatsApp/email dispatch should be built in, with receipts acknowledged automatically.
- TDS needs to be tracked per instalment:
  - TDS expected, at 1% of the higher of agreement value and stamp-duty value
  - challan received yes or no
  - Form 16B received yes or no, with nudges to the buyer
  - 26AS matched yes or no
  A receipt short by 1% should be booked as "TDS receivable", not as a buyer shortfall.
- GST and stamp-duty rates must be versioned by effective date, so a rate change never rewrites issued documents.
- Receipts need a bank-matching queue that covers cheque, RTGS/NEFT/UPI and home-loan disbursement. Cheque status should include bounced, with the reason, re-presentation and bounce charges. No sources were found for cheque handling specifically, so this is inferred from general receivables practice.
- An accounts integration such as Tally sync, or a ledger that serves both teams, is essential so sales and CRM staff can see overdue buyers.
- Handover should be a tracked workflow, not an event:
  - pre-possession checklist: final dues, TDS, registration
  - snag list
  - possession letter
  - key handover stage per unit

### Gaps
- No India-specific source quantified cheque-bounce frequency or described builders' bounce workflows. Charges, Section 138 NI Act notices and re-presentation were not covered by sources in this pass.
- The legal delay-interest rate under RERA varies by state rules. It was not verified in this pass, and the vendor's 10.5% is a sample only.
- No survey quantified how often builders raise wrong demands or wrong interest. The evidence is vendor anecdote.

## 3. What do home buyers complain about in post-sales service, and how do customer portals and apps help?

### Takeaway
Buyers' formal complaints are about delayed possession, missing receipts and documents, extra charges, quality and missing completion certificates. Their own evidence trail is receipts, demand letters, emails and WhatsApp chats. Complaint volumes are significant: MahaRERA receives roughly 5,000 new complaints a year. A customer portal or app removes the information gap behind many disputes: a live statement of account, receipts, demand letters, documents and construction progress. Evidence on outcomes in India is mostly vendor-sourced.

### Cited Findings
- A consumer-law guide lists these as grounds for a case against a builder:
  - "the builder fails to issue a receipt(s) against the paid amount"
  - failure to issue copies of relevant documents, such as the development agreement
  - charges above the agreed amount
  - poor quality and non-compliance with specifications
  - a missing completion certificate
  - delay in possession
  "Lack of communication" is mentioned as evidence a buyer can use, not as a ground in itself — [LawRato: action against builder](https://lawrato.com/indian-kanoon/consumer-court-law/action-against-builder-for-delayed-possession-121)
- Buyers are told to keep every receipt, bank statement, demand letter, allotment letter, email and WhatsApp chat, and to raise grievances in writing before filing. The MahaRERA online complaint asks for receipts, the agreement and correspondence as proof — [Housiey: How to file a RERA complaint](https://housiey.com/blogs/how-to-file-a-rera-complaint-and-win-against-your-builder-step-by-step)
- MahaRERA complaint volumes:
  - 30,833 complaints received since May 2017, 23,726 resolved.
  - 79% relate to pre-RERA projects.
  — [Storyboard18](https://www.storyboard18.com/how-it-works/pre-rera-projects-account-for-79-of-complaints-says-maharera-80618.htm)
  - October 2024 to July 2025: 5,267 complaints disposed, 3,743 new complaints filed — [The Realty Today](https://therealtytoday.com/news/regulatory/maharera-strengthens-buyer-protection-resolves-5267-homebuyer-complaints-in-under-a-year/)
  - Calendar 2025 figures conflict between outlets. One reports 6,945 resolved and 5,039 new, up 29% from 3,880 in 2024. The other reports 6,045 resolved and 5,073 new.
  — [Outlook Money](https://www.outlookmoney.com/invest/maharera-complaint-resolution-soars-81-per-cent-in-2025-grievance-rate-also-follows-the-surge); contradicted by [The Realty Today](https://therealtytoday.com/news/news/maharera-sets-record-6045-complaints-resolved-in-2025-as-efficiency-soars/)
- Under RERA Section 18, a buyer facing delay can withdraw for a refund with interest, or stay and receive interest for each month of delay. Delay is also a "deficiency in service" under the Consumer Protection Act, 2019 — [Business Standard: delayed possession and RERA](https://www.business-standard.com/amp/finance/personal-finance/home-possession-delayed-here-s-how-rera-can-help-buyers-claim-compensation-126073100823_1.html); [SSG Law Firm](https://ssglawfirm.in/builder-delay-in-india-legal-remedies-available-to-homebuyers/)
- 70% of buyer collections must go to a separate project bank account, and buyers can complain if this isn't done — [Ambak: RERA rights & complaints](https://ambak.com/blog/rera-rights-complaints/)
- History of delays (older data):
  - PropEquity (2011): 67% of about 8,200 projects were behind schedule, with an average delay of about 9 months.
  - Track2Realty (about 2013): late possession was the top complaint.
  - Anarock (2020): at least 15.62 lakh units delayed in the top 7 cities.
  — [Outlook Business: Slow mo](https://www.outlookbusiness.com/markets/trend/slow-mo-1779); [Track2Realty](https://www.track2realty.track2media.com/?p=651); [Newslaundry](https://www.newslaundry.com/2020/08/26/i-have-waited-11-years-covid-delays-the-urban-indians-dream-to-own-a-home)
- What a customer app offers: one white-label builder app gives buyers account statements, payment-due and receipt notifications, construction-progress updates and document access (vendor claim) — [DaeBuild](https://www.daebuild.com/)
- Why WhatsApp is the delivery channel:
  - India has over 500 million WhatsApp users.
  - Vendors cite 70–90% open rates, against 20–30% for email (vendor claim).
  — [Sell.Do WhatsApp playbook](https://www.sell.do/blog/whatsapp-first-real-estate-2026-playbook)
- A broker or partner portal reached 92% adoption in the first month in the township case (vendor-published) — [Aaxonix](https://aaxonix.com/resources/?p=1884)
- Global evidence (directionally relevant):
  - Satisfaction falls after sale: 92.8% during sales versus 75.8% in the warranty phase, across more than 350,000 buyer responses (US) — [ECI Avid CX 2025](https://www.ecisolutions.com/blog/the-2025-state-of-customer-experience-report-is-here-are-you-meeting-buyer-expectations/)
  - About a third of first-time buyers said post-construction service fell short, against 9% of builders who said so about themselves (US). This shows a perception gap — [Builder](https://www.builderonline.com/article/the-weakest-link_o/)
  - UK: 45% of 1,000 buyers were not satisfied, 9 in 10 reported snags, and over a third had a delayed move-in — [Housing Today](https://housingtoday.co.uk/news/almost-half-of-housebuilders-provide-poor-service/5104157.article)

### Inferences
- The minimum buyer-facing set, which directly removes several statutory complaint grounds:
  - instant digital receipt on every payment, sent by WhatsApp and email and stored in the portal
  - live statement of account: demanded, paid, TDS, interest, balance
  - document vault: allotment letter, agreement, demand letters, receipts, NOCs, possession letter
  - construction-progress updates linked to milestones
- Buyers already treat WhatsApp chats as legal evidence. Builder communication should therefore come from company-owned, logged channels (WhatsApp Business API), not personal phones.
- A ticketing or query module with SLAs is needed for balance, document and possession queries. Because satisfaction drops after the sale, post-sales service is the stage to invest in.

### Gaps
- No Indian survey (LocalCircles, Anarock or others) on post-sales service satisfaction was found in this pass.
- No breakdown of MahaRERA complaints by type was found, so the share about receipts or documents versus delay is unknown.
- No independent Indian data shows whether customer portals reduce complaints or query volumes.

## 4. Best practices for migrating data from legacy systems or Excel into a new CRM

### Takeaway
Migrate a deliberately limited scope: active leads, live bookings and open balances, not every historic column. Clean and deduplicate before import. Load masters first and transactions after. Prove the opening balance of every buyer ledger against accounts (Tally) before go-live. Run old and new systems in parallel for a short period, then freeze legacy files as read-only. General data-migration projects overrun often, so plan pilots, contingency and post-launch monitoring.

### Cited Findings
- A 10-step process:
  1. Goals
  2. Scoping, with cutover in a low-activity window
  3. Cleansing and deduplication, with standard phone and address formats
  4. Full backup and rollback plan
  5. Configure the new CRM (fields, pipelines, roles) before import
  6. Field mapping, including relationships
  7. Pilot with about 10% of records
  8. Full run with delta checks for records changed during the transfer
  9. Validation and UAT
  10. Role-based training and at least 6 weeks of monitoring
  Automation rules don't transfer and must be rebuilt. The guide advises a 15–20% contingency — [SolGuruz CRM data migration guide 2026](https://solguruz.com/blog/crm-data-migration-guide/)
- Gartner, cited by SolGuruz: "83% of data migration projects" fail or exceed budget or schedule. Bloor: delayed migrations run 41% over timeline. Both are secondary citations — [SolGuruz](https://solguruz.com/blog/crm-data-migration-guide/)
- Scoping advice:
  - Migrate only active leads, open deals and recent customers. Leave behind old closed-lost records and duplicate or incomplete ones.
  - Don't recreate every spreadsheet column "out of fear of losing data".
  - Keep the original Excel as a backup until validation is done.
  — [NetHunt: Excel to CRM](https://nethunt.com/blog/how-to-migrate-from-excel-to-a-crm/amp/)
- Waiting for perfectly clean data stalls migrations. Clean what matters and keep improving after go-live — [Bigin by Zoho](https://www.bigin.com/articles/how-to-migrate-customer-data-from-excel-to-a-crm-without-losing-your-mind.html)
- Standardise date and phone formats before upload — [Popl](https://popl.co/blogs/all/how-to-upload-excel-to-crm)
- In a real-estate agency case, each agent kept their own spreadsheet, so there was "no source of truth". Notes, tasks, appraisals, listings and past sales mattered as much as contacts — [Elite Agent: Avoiding data disaster](https://eliteagent.com/avoiding-data-disaster)
- Indian township developer migration, an 8-week phased plan (vendor-published):
  - Weeks 1–2: import 1,200+ plot records and booking data from spreadsheets, cross-checked against Tally.
  - Weeks 3–4: build the broker portal, demand-letter templates and commission tracker.
  - Weeks 5–6: connect bank feeds, reconciliation and reminders.
  - Weeks 7–8: dashboards, broker training and a two-week parallel run, then go-live.
  - Legacy spreadsheets were archived and Tally kept read-only for 90 days.
  — [Aaxonix](https://aaxonix.com/resources/?p=1884)
- Opening-balance practice from ERP migrations:
  - Close or settle open items in the legacy system before cutover, then upload.
  - After loading opening balances, check that debits equal credits and that the offset/clearing account is explained.
  - Loaded historical balances support reporting and audit, but individual old documents aren't viewable.
  — [SAP Community: customer opening balances](https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-members/migrate-customer-opening-balances-upload-in-rise-with-sap-cloud-2208/ba-p/13563482); [SAP Community: opening balance Q&A](https://community.sap.com/t5/enterprise-resource-planning-q-a/opening-balance/qaq-p/8434797); [SAP Community: historical balances](https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-members/historical-balances-migration-in-sap-s-4hana-cloud-public-edition/ba-p/13580309)
- Deduplication method: identify the same buyer across sources and merge into one record before assignment (vendor claim) — [telecrm](https://devweb.telecrm.in/crm-for-industry/real-estate)

### Inferences
- Suggested load order for a builder CRM (inferred from the dependencies above):
  1. Users, roles and teams
  2. Projects, phases, towers and wings
  3. Units, with area, floor, facing, status and price/PLC
  4. Payment-plan templates and milestones
  5. Tax and charge masters (GST, stamp duty, other charges), versioned by date
  6. Channel partners, with RERA agent number, PAN, GSTIN and commission slabs
  7. Customers and co-applicants, deduplicated on mobile, PAN and email
  8. Bookings and allotments, linking customer, unit, CP and cost sheet
  9. Demand schedule: demands already raised, with dates
  10. Receipts, including cheque/UTR, bank and TDS portion
  11. Opening balance and interest position per booking, reconciled to Tally/accounts as of the cutover date
  12. Open leads and recent activities
  13. Documents
- Reconciliation gates before cutover:
  - Unit status in the CRM equals the sales register: no unit both booked and available, no double allotment.
  - For each booking, demanded minus received equals the outstanding figure in accounts.
  - The total of buyer ledgers equals the Tally debtors control figure for each project.
  - TDS receivable per buyer matches 26AS where available.
- Cutover pattern:
  - Freeze bookings and receipts entry in legacy at a fixed date.
  - Load data, reconcile, and parallel-run 2–4 weeks with dual entry for receipts only.
  - Then switch, keeping legacy read-only for about 90 days.
- The product should include import templates with validation (format, duplicate and reference checks) and a dry-run mode that shows errors before commit, plus a migration reconciliation report per project.
- Train people by role: sales on mobile, CRM/post-sales on demands and receipts, accounts on reconciliation, CPs on the portal. Measure adoption weekly for the first six weeks.

### Gaps
- No India-specific vendor migration guide was found, from Farvision or another builder ERP, describing entity order or opening-balance reconciliation for builder ledgers. The entity order above is inference.
- No source quantified typical data-quality issues in builder Excel files, such as duplicate rate or missing PAN rate.

## 5. Reporting needs of builder management (MIS)

### Takeaway
Owners, CFOs, lenders and regulators look at the same core numbers:
- bookings or sales value and units (sales velocity)
- collections, and collections as a share of sales or demands (collection efficiency)
- unsold inventory and years-to-sell
- receivables ageing
- cash-flow adequacy against remaining construction cost and debt
- CP and source performance

MahaRERA's quarterly progress report (QPR) adds a hard compliance need, with real enforcement since 2026. That makes booking, receipt and expenditure data by project mandatory to produce.

### Cited Findings
**What lenders and listed developers track**
- Rating agencies read sales velocity, years-to-sell, collection efficiency and cash-flow adequacy together. In ICRA's example: years-to-sell of 7 years, 41% collection efficiency and 32% cash-flow adequacy — [ICRA rationale](https://www.icra.in/Rating/GetRationalReportFilePdf?id=117441)
- Listed developers headline collections:
  - Puravankara: nine-month collections of Rs 2,991 crore, up 19% year on year — [Business Standard](https://www.business-standard.com/companies/news/puravankara-s-sales-bookings-rise-2-to-rs-1-265-cr-in-december-quarter-125011301117_1.html)
  - Ajmera Realty: collection efficiency of 65% against 60% the year before — [Realty n More](https://realtynmore.com/ajmera-realty-posts-record-fy26-profitability/)
  - Lodha: cumulative collections at 99% of pre-sales — [BSE filing](https://www.bseindia.com/xml-data/corpfiling/Attachhis/2fe06cb2-48d5-489e-a37e-5a84912f903b.pdf)
- Sector forecast: collections growing at a 36% CAGR to Rs 1.5 trillion over FY25–27E, keeping net D/E below 0.5x. This is a Motilal Oswal forecast — [DT Next](https://www.dtnext.in/news/business/strong-capital-flow-and-consolidation-continue-to-drive-real-estate-growth-in-india-report-838316)

**RERA QPR (Maharashtra)**
- Every quarter, Forms 1, 2 and 3 are uploaded covering booked flats and garages, funds received, expenditure and plan changes. Order 18/2021 puts the deadline at 7 days after quarter end. Circular 29/2021 says bookings should be uploaded as soon as a sale is made — [Realty Hunting: RERA QPR](https://realtyhunting.com/rera-quarterly-progress-report); [WIRC-ICAI MahaRERA update Sept 2021](https://old.wirc-icai.org/images/law-updates/Maharera-Sept-2021.pdf)
- May 2026 enforcement:
  - Show-cause notices went to 8,212 projects that missed the January–March 2026 QPR deadline of 20 April. That date differs from "7 days after quarter end" and may reflect an extended deadline; verify.
  - Developers have 60 days to respond.
  - Possible measures: a ₹50,000 penalty, registration cancelled or put on hold, bank and escrow accounts frozen, and bans on advertising or selling.
  — [Outlook Money](https://www.outlookmoney.com/invest/maharera-flags-8212-projects-for-missing-qpr-deadline-gives-regulatory-warning)
- Compliance rose from 0.02% of projects updated in January 2023 to 62% by February 2025, per MahaRERA as reported by the press — [Punekar News](https://www.punekarnews.in/real-estate-builders-updating-housing-project-details-on-maharera-website-increases-from-0-02-in-january-2023-to-62-now/)
- A sample QPR from another state, Bihar, reports amount received in the quarter, cost incurred in the quarter, and cumulative funds collected against cumulative expenditure — [Bihar RERA progress filing](https://rera.bihar.gov.in/Progress_Doc/RERAP2911201700055-604221648272025.pdf)

**Operational reports builders want**
- Sales reports builders want but don't get from generic CRMs: project-wise sales and inventory, team performance by source and region, conversion by channel, and unit availability. The test is seeing "project sales health in three clicks" — [Makanify](https://makanify.com/blog/real-estate-crm-struggles-india)
- Collections dashboard elements: demands raised in the month, collected and percentage collected, overdue amount and customer count, and average days to pay — [Sell.Do: Demand letters](https://www.sell.do/real-estate-crm/post-sales-and-collections/demand-letters)
- Tax dashboard: GST collected for the quarter, 194-IA TDS, Form 16B certificates issued, 26AS mismatches and GSTR-1 readiness — [Sell.Do: Taxes](https://www.sell.do/real-estate-crm/post-sales-and-collections/taxes-tds-gst)
- Township case dashboards: inventory heatmaps, broker scorecards, collection ageing and conversion funnels. Site-visit-to-booking conversion went from about 12% to 34% (vendor-published) — [Aaxonix](https://aaxonix.com/resources/?p=1884)
- WhatsApp and marketing metrics: first-response time, cost per lead from click-to-WhatsApp ads, conversation-to-site-visit rate and source-to-booking attribution — [Sell.Do WhatsApp playbook](https://www.sell.do/blog/whatsapp-first-real-estate-2026-playbook)
- CP governance KPI: dispute-resolution turnaround time — [Salarpuria listing](https://www.foundit.in/job/channel-sales-manager-salarpuria-group-kolkata-58167820)
- Accounts tooling (Tally): ageing with configurable buckets, and cash-flow projection from expected inflows and outflows — [Tally](https://durga.tallysolutions.com/us/features/credit-and-cashflow-management/)

### Inferences
- Suggested cadence (inferred; no source gives explicit frequencies):
  - **Daily:** new leads by source, site visits, bookings and cancellations, collections received, cheques bounced, overdue calls due, and CP tags with disputes raised.
  - **Weekly:** funnel conversion by source and CP, sales-team activity, demands raised against collected, ageing in 0–30/31–60/61–90/90+ day buckets, unmatched-receipts queue, and 194-IA challans or Form 16B pending.
  - **Monthly / quarterly:** sales velocity and absorption, unsold inventory value and years-to-sell, collection efficiency by project, cash-flow projection (scheduled demands by milestone against construction spend), CP leaderboard and commission payable, GST and TDS summaries, the RERA QPR data pack per project, and the 70% escrow-account position.
- Collection efficiency must be defined in the product, and both versions offered with a note on which is used:
  - collections ÷ demands due in the period
  - cumulative collections ÷ cumulative sales value, as listed developers report it
- The QPR data needs (bookings as they happen, funds received, expenditure) mean the CRM should be able to export a project-wise QPR data pack, ideally refreshed as each booking happens. Maharashtra now expects bookings uploaded on sale, not only at quarter end.

### Gaps
- No primary source sets out which reports Indian owners or CFOs review daily, weekly or monthly. The cadence above is inference.
- MahaRERA's current official QPR form fields were not retrieved, so field-level mapping needs a check against the MahaRERA portal.
- No Anarock, JLL, Knight Frank or PropEquity report on internal MIS practices was found. Their public reports cover market-level sales, launches and unsold inventory.

## 6. Simplicity and usability expectations: mobile-first, WhatsApp-first, vernacular

### Takeaway
Sales staff work from site offices, on site and on the phone. If logging an activity takes more than a few taps on mobile, they won't do it. Buyers and CPs live on WhatsApp, so the CRM must own that channel through the WhatsApp Business API rather than leave it on personal phones. Indian-language support is expected, especially voice and Hindi-English code-switching, but there is little direct evidence for sales-CRM screens.

### Cited Findings
- Mobile-first design and fewer clicks for routine tasks are the main fix for poor adoption (vendor claim) — [Makanify](https://makanify.com/blog/real-estate-crm-struggles-india)
- Features seen as table stakes: site visits with OTP check-in and location tracking, call/email/SMS/WhatsApp logged automatically, document automation with eKYC and e-sign, and a CP hub (vendor claim) — [Sell.Do](https://www.sell.do/blog/real-estate-crm-challenges-and-solutions-in-india)
- WhatsApp-first practice:
  - One business number fed by click-to-WhatsApp ads, the website, portals and walk-in QR codes.
  - Source tagging on every chat.
  - An automated first reply at any hour, then handoff to a rep.
  - Auto-assignment by project or location, with a response-time clock and escalation.
  - Replying "in the first five minutes" sharply lifts qualification rates.
  - Click-to-WhatsApp ads cut cost per lead by up to 40% (vendor claim).
  — [Sell.Do WhatsApp playbook](https://www.sell.do/blog/whatsapp-first-real-estate-2026-playbook)
- Even small real-estate businesses run client and broker communication on the WhatsApp Business app. Meta's India example is Brongo, a broker aggregator — [WhatsApp business story: Brongo](https://www.whatsapp.com/stories/business/India/brongo?lang=en)
- Language support:
  - Salesforce is adding 7 Indian languages to Agentforce Voice, with Marathi in beta. Hindi plus English are expected to cover about 95–97% of customer language needs in India — [Business Today, June 2026](https://www.businesstoday.in/amp/latest/corporate/story/salesforce-to-add-7-indian-languages-as-enterprise-ai-adoption-gathers-pace-536265-2026-06-11)
  - Hindi-English code-switching is the default way Indian customers speak, and Hindi varies by region (UP, Bihar, Mumbai). Tools that force one pure language perform poorly (vendor claim) — [ChatMaxima: Vernacular voice AI](https://chatmaxima.com/blog/vernacular-voice-ai-india/)
  - Hindi, Bengali, Marathi, Tamil and Telugu are preferred by almost 70% of the population — [NASSCOM: Vernacular solutions](https://www.nasscom.in/knowledge-center/publications/vernacular-solutions-diversity-language)
  - In consumer apps, about 35% of Snapdeal users used vernacular interfaces and spent about 20% more time (2021, consumer data) — [MediaNews4U](https://www.medianews4u.com/nearly-35-users-on-snapdeal-now-use-vernacular-interfaces-to-search-and-buy/)
- Speed of rollout: vendors market go-live "in as little as 7 days" (Sell.Do) or onboarding within days (Makanify). These are vendor claims — [Sell.Do](https://www.sell.do/blog/real-estate-crm-challenges-and-solutions-in-india); [Makanify](https://makanify.com/blog/real-estate-crm-struggles-india)

### Inferences
- Mobile-app design rules for sales staff:
  - One-tap call with automatic call logging.
  - Post-call disposition in two taps.
  - Voice-note or voice-to-text notes, in Hindi, Marathi or English.
  - Offline-tolerant site-visit capture.
  - Walk-in registration that checks CP tags and duplicates instantly.
  - The CP app should tag a lead in under 30 seconds and show tag status (valid, expired, disputed).
- WhatsApp should be the default outbound channel for the full buyer journey:
  - pre-sales: brochure, site-visit confirmation
  - booking: cost sheet, booking form
  - post-sales: demand letter, receipt, TDS reminder, construction update, possession checklist
  This should use approved templates, logged centrally, with opt-in captured.
- Buyer-facing documents and WhatsApp templates should be available in English plus the regional language, for example Marathi in Maharashtra. Staff UI should at least support Hindi and the regional language for labels, and handle code-switched notes.

### Gaps
- No study was found on vernacular-UI adoption by real-estate sales teams in India specifically.
- Rules for WhatsApp Business API opt-in and template approval, and how DPDP Act 2023 obligations apply to CRM data and WhatsApp messaging, were not covered by the sources fetched. These need separate legal or compliance research.
