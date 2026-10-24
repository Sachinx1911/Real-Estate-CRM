# Beans Online CRM: raw study notes

Structure only. No customer names, phone numbers or amounts are recorded here.
Studied 2026-10-24, logged in as the user, browse-only.

## General
- Product name: "Beans Online" (title "Sales Online"). URL base /ddsr4/. Server-rendered legacy HTML, quirks mode, no JS framework, tiny inline scripts, every action is a plain form POST.
- Company: one builder (two LLPs) with 13 society projects. Current project is chosen in a dropdown + "Set" button (form sform, field op1, posts to nmain.html). Project context is global for all pages.
- Header: logged-in user name, product + current project name, date and weekday.

## Main page (nmain.html)
- Top menu, grouped columns:
  - Inventory: New Flats (flat1), New Parking (park1), Info Menus (menu1)
  - Parties: New Clients (cus1), New Broker (cus2), New Executive (cus2?ktn1=123), Land Owner (cus3), Flat Info (flat1r)
  - Booking: Booking Entry (book1), Receipts Entry (rpay), Booking Info (book1r), Extra Expenses (rpayd)
  - Money out / changes: Cancellation (book1c), Repayment (rpayc), Broker Payments (rpayb), Quotation (flat2r)
  - Search: Chq Search (chisa), Due Bookings only (rep3a)
  - Payment slabs: Define Slabs New (slab1a), Slab Setting (slab2), Slab Details (slab3)
  - Account: Change Password (bedi1), Settings (set1), Log Out (out)
- Body: alert strip list "No Flat Allocation <project> : Booking No--N Customer--name", across ALL projects. Each links to book1r.html?knoxu=<bookingId>. So a booking can exist before a flat is allocated.

## Info Menus (reports menu, menu1.html?knox=N), replaces the top menu
Lists: Client List (tcus1), Broker List (tcus4), Booking List (tbook1), List of Flats (tcus2), Available Flats ListView (scus1), Available Flats GridView (scus2), Flats for Soc List (tbook7a), Parking List (tcus3), Cancellation List (tbook1c)
Finance and reports: Reg & Loan 2 (tbook4a), Sales Report Global (tbook6), Receipt Report Global (tbook6b), Dues Report Global (rep4b), Soc Comn Rep (tbook7), Mega Dues (rep3c), Project Sales (rep6), Detailed Balance (rep1), Broker Balance (trpay2a), Sales Consolidation (rep2), Payment Follow (trcus1), Follow Details (trpay2b), Bank APF nos (tbook8), Broker Dues (tbook2b), Flat and Dues (rep3), Rec Management (trpays1), Dues Report Lite (rep3b), Taxes (tbook3), Letter History (trpay7), Extra Exp Rep (tbook9), Letter Formats (blan2)
Plus Main Menus, Log_Out.

## New Flats (flat1.html)
- Add form (posts flat1x.html): Building (A/B, per project), Type (1 RK, 1 RK + Terrace, 1 BHK, 1 BHK + Terrace, 2 BHK, 2 BHK + Terrace, 3 BHK, 4BHK+T, OFFICE, SHOP, REFUSE AREA), Facing (Club/Garden/Podium/Road), Floor (51 options, Ground..), Flat No, Maintenance Area (sq.ft, required), Carpet Area (sq.m), Balcony Area (sq.m), Terrace Area (sq.m). Button "Add Flat".
- Right side: list box of existing flats (245) + Refresh, to pick one.
- Bottom table "List of Flats entered by <user>": Sno, Flat_No, Type, Building, Floor, Facing, Maint_area, Carpet area (shows sq.ft and sq.m), Balcony, Terrace area, Edit (flat1e.html?knox2=id). Flat No links to flat1r.html?knoxu=id (flat info).
- Carpet area entered in sq.m and auto-shown in sq.ft too.

## New Parking (park1.html)
- Form (park1x): Building, Type (Adjustable / Open / Stilt), Availability (a count). Button "Save Parking Availability".
- Parking is tracked as counts per building and type, not as individual numbered slots.

## New Clients (cus1.html)
- Form (cus1x): Name, Company, Designation, Address1-3, City, Phone (Office, Residence), Mobile x2, Email x2, PAN no, Aadhaar, DOB (day/month/year + "known" checkbox), Date of Marriage (same pattern), DND: "Do not Call" and "Only Email" checkboxes, Particulars (notes textarea). Button "Add Client".
- Right panel: client picker list (466 clients in all), Refresh, "Goto Edit" (cus1e), link "Booking for <client>" (book1.html?knox1=clientId) to start a booking from the client.
- Second form per client: Communication Address (Address1-3, City), separate from the main address, and "Name Plate Information" (text for the door name plate).
- DOB and marriage date suggest birthday and anniversary greetings.

## New Broker (cus2.html)
- Form (cus2x, hidden ktn1 = party type): Name, Company, Org Type (Individual / Proprietor / Partnership / Limited company), Address1-3, City, Office Phone, Mobile x2, Email, PAN, RERA No, Area of Operation. Button "Add Broker".
- Picker of brokers (13). The broker list also holds non-person sources like "HEAD OFFICE" and "SOCIETY", so "broker" doubles as the sale source/channel.
- Edit: cus2e.html?ktn1=id.

## New Executive (cus2.html?ktn1=123)
- Same form and same table as broker, minus Org Type. Button "Add Executive". Only 1 executive. So brokers and executives are one "party" table with a type flag.

## Land Owner (cus3.html)
- Form (cus3x): Name, Address1-3, City, Phone, Mobile, Email. Edit: cus3e. 0 land owners in this project. Relevant to redevelopment projects where original owners get flats.

## Flat Info (flat1r.html, also flat1r.html?knoxu=flatId)
- Search box + flat picker (245; each shown as "--<flatNo>-<booked client>").
- Header card: Flat, Building, Type, Floor, Booking Status (e.g. Available / Booked), Flat Markings.
- Flat Markings (flat1rx): For Lease, For Resale, Hold this flat, Particulars. Button "Fix Markings". "Hold" blocks a flat from sale.
- Land Owner: pick a land owner for the flat ("Nobody" default). Button "Fix Landowner".
- "Resale Clients and Reg Infos": First Client, 2nd/3rd/4th Resale Client, each with Name, Reg No, Reg Date, Maint Date. So the flat keeps an ownership chain.

## Booking Entry (book1.html, title "Booking Request Entry")
- Step 1: pick client (search + list of 466) on the left, pick an AVAILABLE flat (search + list, 5 available) on the right. Booking code = "<Building>-<FlatNo>", e.g. A-108. Client can also be preselected via book1.html?knox1=clientId.
- Step 2 form (book1x): File No, Date (required), Consideration (agreement value, required) + Scheme dropdown, Broker (list; when a broker is chosen a brokerage amount box appears), Parking Infos, Reference, Bare Flat ("This flat needs no modification"), Executive Name (list includes "FOUNDER MEMBER"), Particulars, Booking button, token amount box, "Move to Receipts" checkbox (records the token amount directly as a receipt).
- Inline cost formula found in page JS: total = consideration + other charges (stamp duty + registration + up to 4 misc charges) + tax lines at fixed % of consideration (old code: 2.6% service tax, 1% VAT). Today GST is tracked separately (see Booking Info).

## Booking Info (book1r.html, book1r.html?knoxu=bookingId), the heart of the system
- Left: booking picker (241 bookings, "<code>-<client>") with search.
- Summary box: status (Booked), Flat Cost: total - Received + Repaid = Balance. GST: total - Received + Repaid = Balance (GST ledger kept separate from flat cost).
- Info: File No, Client (link Edit Client Infos), Consideration (- received = balance), Booking Date, Scheme, PAN.
- Markings: Bare Flat only, Mark for Legal Proceeds, Needs Verification. Button "Fix Markings".
- Client block: name, address, phones (from client master).
- Joint clients: 2nd, 3rd, 4th joint client, each with ~6 fields (name, PAN, phone, mobile, email, etc.). Button "Fix Client and Pan Infos".
- Deal values: File No, Consideration, Broker + brokerage fields (amount, and 3 more: likely %, deduction, GST), Market Value, Construction Amount, Stamp Duty Amount, Registration Amount, Parking Info, Reference, Executive, Financing (loan / Self), General Particulars. Button "Modify Particulars".
- Lifecycle dates (each day/month/year + an "is set" checkbox): Booking Date, Due Amount Date, Booking Intimation Date, NOC Request Date, Allot Date, Agreement Date, Stamp Date, Reg No + Reg Date, NOC Date, CIDCO Transfer Date, CIDCO Mortgage NOC Date, Possession Date, Possession Reg Date, Mortgage Release Date, Maintenance Date. Button "Save Modifications".
- Loan: Bank Name (+branch), Bank Person (name, phone, mobile, email), Loan Amount, Loan Tenure ("Modify Loan Info"), Loan Sanction Date, Booking Accepted Date, Doc Submission Date, Loan Disbursement Date (each with its own Fix button).
- Flat allocation: Select Flat ("No Flat" or a flat code). Button "Modify Flat Allocation". This is how the "No Flat Allocation" alerts get resolved.
- Parking allocation: per parking type (Adjustable / Open / Stilt ...) a count, with the remaining Balance shown. Button "Modify Parking Information".
- Resale chain (First Client .. 4th Resale Client with Reg No, Reg Date, Maint Date), same as Flat Info.
- Links out: client edit (cus1e), Flat and Dues report for this booking (rep3.html?ksg1=id), letters for this booking (blet3r.html?knox2=&knox1=), flat info.
- Region-specific: CIDCO (Navi Mumbai leasehold authority) transfer and mortgage NOC steps.

## Receipts Entry (rpay.html)
- Pick booking (search + 241 list). Shows the same Flat Cost / GST summary boxes (total, received, repaid, balance).
- Pick the company bank Account the money went into (4 company accounts across the two LLPs; numbers not recorded). Refresh.
- Receipt form (rpayx): Rec_No, Date, amount split into: Consideration (agreement value), Extra Charges, Interest, TDS, GST; Total auto-summed. Hidden legacy parts in code: service tax, VAT, maintenance, society maintenance, maintenance deposit, society deposit.
- Mode: Cheque, D.D, Cash, RTGS, Challan, NEFT, IMPS, UPI, Transfer. Chq_No, Chq_Date, Bank (+ branch), Particulars, Submit, plus a checkbox.
- Receipt history table: Sno, Date, Rec_Num, Details, Amount, Dishonoured, User, Action (edit rpaye.html?knox=id, receipt letter/print blet3r.html?...&kro1=receiptId).
- Summary table by purpose: Received, Repaid, Net Received for: Agreement Value, TDS, Extra Charges, Interest, Total.
- Concepts: cheque dishonour tracking, which user entered each receipt, receipt printing, TDS as part of receipt.

## Extra Expenses (rpayd.html)
- Pick booking (list of 295, which includes cancelled ones). Form (rpaydx): Date, Expense Head (from a master list; currently only "Other Charges - CIDCO Plot Mortgage"), Amount, Particulars, Submit.
- Concept: extra charges billed to a booking beyond the agreement value.

## Cancellation (book1c.html)
- Pick booking (search + list), shows Flat.
- Staged dates, each with its own Fix button: Cancellation Request Date, Cancellation Accept Date, Bank NOC Received Date, Cancellation Deed Date.
- Final: Cancellation Date, Cancellation Charge, Compensation, Particulars, Submit, + amount box. Edit page book1ce.
- Cancelled bookings then appear in "Cancellation List" and remain selectable in money screens (295 vs 241 active).

## Repayment (rpayc.html)
- Mirror of Receipts for money going back to a client: Pay_No, Date, same 5-part split (Consideration, Extra Charges, Interest, TDS, GST), Mode, Chq No/Date, company Account it was paid from, Particulars.
- Same "Purpose / Received / Repaid / Net Received" summary.

## Broker Payments (rpayb.html)
- Pick a booking that has a broker (1 here). Form: Pay_No, Date, Amount, Mode, Chq No/Date, company Account, Particulars.
- Brokerage is tracked per booking; Broker Balance and Broker Dues reports compare brokerage vs paid.

## Quotation (flat2r.html)
- Pick an available flat, pricing Type (Type1..Type7, e.g. "A-Founder Member", "A-New Member", "B-Founder Member", "B-New Member"), Client name (free text, so prospects need not be in the client master), Amount, checkbox, "Show Quotation".
- Concept: separate price plans per building and per member category (founder members of the old society vs new buyers).

## Chq Search (chisa.html)
- Search receipts by cheque number and date (list of recent cheques). Not submitted.

## Due Bookings only (rep3a.html, title "Due Bookings Report as on <today>")
- Table: Sno, Client, Mobile, Flat No, Type, FlatCost, Slab Amt, Rec, Due Bal. 185 rows in this project.
- Concept: Due = amount demanded so far by reached construction slabs - received.

## Payment slabs (construction-linked payment plan)
- Define Slabs (slab1a.html): choose Building + pricing Type, then add slabs: Slab No, Slab Name, Percent. Button "Add Slab". Slab list per Building+Type.
- Slab Setting (slab2.html): choose Building + Type, pick flats (multi-select with "select all"), optional "Allow Special Start Date change only" + Special Start Date, Schedule Amount, button "Set Slab as per <Type>". Shows the flat's schedule: Sno, Slab Date, Slab, Percent, Agree Slab Amount, Extra Slab Amount, row Edit, and Bulk Edit. Totals row checks schedule vs agreement (balance).
  - Example plan seen: 24 slabs, percents 0, 15, 4.11, 4.1, then 3.33 x13, 6.5, 8, 5, 4, 4, 4, 2 (sums to 100).
  - "Slab Date" = date the stage was demanded. Amount = percent x agreement value.
- Slab Details (slab3.html): per booking. Interest settings: Interest Rate per Annum, Interest Waived, Manual VAT, Discount Rate %, button "Fix Interest Settings".
  - Interest Calculation table: Sno, Date, Particulars, Amount, Received, Balance, Days, Interest, Particulars. Late-payment interest on overdue days per slab.
  - A GST box posts to sms2.html, so the system also sends SMS (GST/demand info).
  - Links: client edit, letters for the booking.

## Settings (set1.html, "Software Settings")
- Report period: From Date, To Date, Save (global date range used by reports).
- Master links: Add Type (blat2, flat types), Add Facing (blat8), New Building (blat1: building name, list, Goto Edit), Category in Payment Followup (blat5c, "Client Category": free categories, empty here), Project Info (pro1), Company Info (pro2), Goto Main.
- Project Info (pro1): Address1-3, Phone and Email, Site Address, Authorized Signatory Title + Name, Bank Account Details, IFSC, MICR, SWIFT, Service Tax No, "Extra Charges - company name" (a separate company may collect extra charges), RERA No. Second bank block: Account Number, Account Holder, Bank, Branch, IFSC. These print on letters, demands and receipts.
- Company Info (pro2): Address1-3, Service Tax No, PAN, GST No, Authorized Signatory.
- Change Password (bedi1) and Log Out (out) were deliberately not opened.

## Reports (from Info Menus). Many reports show data only after "Refresh" (a form submit), which was not pressed, so for those only the filters are known.
- Client List (tcus1): filters Category (57 options), Filter Category, To Print, Only Email Client. Columns: Sno, Client ID, Client, Address, Phone, Email, Flat No. 466 rows.
- Broker List (tcus4): Sno, Client (broker), Address, Phone, Pan, Area.
- Booking List (tbook1): search, client filter, From/To date, To Print. Table appears after Refresh.
- List of Flats (tcus2): radio Available only / Booked only / Both, Type filter, checkboxes Lease / Resale / Hold / Land Owner flats (+ land owner pick), Building. Columns: Sno, Building, Flat_No, Type, Floor, Maint_area, Carpet area, Balcony, Terrace area, Client, Status, Reg_Date, Broker, Land Owner, Markings. 246 rows. Links to Detailed Balance (rep1?knox5=) and Flat and Dues (rep3?knox5=) per flat.
- Available Flats ListView (scus1): filters Building, Floor (52), Type (14), Search.
- Available Flats GridView (scus2): newer UI (blue header, rounded filter bar: Building, Floor, Type, Search). Left: project card with photo, name, plot/sector address. Right: grid of flats (filled after Search). Concept: visual building availability chart for sales.
- Flats for Soc List (tbook7a, "Flats list to Society"): Sno, Flat No, Client, Reg Date, Reg No, Maint Date. 240 rows. Handover list for the housing society.
- Parking List (tcus3): radio Available only / Allotted only, Building.
- Cancellation List (tbook1c): From/To date.
- Reg & Loan 2 (tbook4a, "Registration and Loan Info 2"): "Unregistered only" filter, To Print.
- Sales Report Global (tbook6): From/To. Table "Global Sales Report from .. to ..": Sno, Project, Total, one column per month. 14 rows (13 projects + total). Cross-project.
- Receipt Report Global (tbook6b): same shape for receipts per project per month.
- Dues Report Global (rep4b, "Global Consolidated Dues"): Sno, Project, Total Agreement Value, Slab Due, Received, Due Balance, Total Balance. Cross-project.
- Soc Comn Rep (tbook7, "Society Communication Rep"): Sno, Flat No, Client, Reg Date, Reg No, Maint Date, Pan No, Mob No, Email. 240 rows. Contact sheet for the society.
- Mega Dues (rep3c, "Due Report Mega"): filters To Print, Building, pricing Type. Table after Refresh.
- Project Sales (rep6): Sno, Building, Type, Carpet Area, Salable Area, No of Unit, Sold unit, Balance unit, Total Area, Sold Area, Balance Area, Sold Amount. 34 rows (building x type).
- Detailed Balance (rep1, "Detailed Consolidated Balance Report as on <date>"): one row per booking (242). Columns: Client, Address, Phone, Email, Flat_No, Type, Booking Date, Reg_Date, Agree_Date, Pos_Date, Maint_Date, Cr_Area, Area, Rate, Mkt_Value, then for each charge head Amount / Rec / Bal: Flat, Extra, Amn (amenities), Park (parking), Adv (advance), Total; then Bank, Loan Amt, NOC Date, Reg No, Mort_Rel Date, Pan nos, Parking Infos.
  - So the full set of charge heads per booking is: Flat (agreement), Extra charges, Amenities, Parking, Advance, plus GST tracked separately.
- Broker Balance (trpay2a): pick broker, From/To.
- Sales Consolidation (rep2, "Sales & Availability Report"): Sno, Building, Total Area, Sold, Balance, Total Flats, Sold, Balance.

## Payment Follow (trcus1, "Payment Follow-Ups"), the CRM activity screen
- Pick Building, search, pick a booking from the follow-up list (26 here, likely those with dues), select-all checkbox.
- Call log entry: "Why you called?" (payment followup / loan documents / customer feedback; master "Calling Message" blat5), "What they told?" (responses; master "Answering Message" blat5a, empty here; list depends on the chosen reason), Particulars (remark), Next follow-up date, Save.
- Client Category for follow-up (master blat5c), "Fix Category".
- Context shown on the same screen: Name, Address, Phone, Flat, NOC Date, Stamp Duty, Registration Date, Broker, Mortgage Bank and Branch, Category, status.
- Money summary rows: Flat Cost, Extra Charges, Main Slab Due, Extra Slab Due, GST, Total (each amount / received / balance).
- Slab schedule: Slab_date, Slab, Slab_Amt, Extra_Amt. Real slab names seen: BOOKING AMOUNT, Plinth, (several slab-wise floor stages), Brick Work, Plaster work, Tiles work, Plumbing work, Electric Work, Painting Work, ON POSSESSION.
- Ledger: Date, Particulars, Rec Num, Debit, Credit, Balance.
- "Recovery Sheet" (mrep1.html?krno=bookingId) opens a printable sheet in a new window (not opened).
- Follow Details (trpay2b, "Payment Follow Details"): search, pick person (9), From/To.
- Bank APF nos (tbook8): search list of bank Approved Project Finance numbers + "Add Bank APF nos" (fsat2). Banks that pre-approved the project for home loans.
- Broker Dues (tbook2b, "Global Broker Dues"): Sno, Broker, Brokerage, TDS, GST, Final, Paid, Balance. Final = brokerage - TDS + GST.
- Flat and Dues (rep3, "Flat & Dues Report as on <date>"): options With Slab, To Print. Columns: Sno, Com (comments), Client, Mobile, Flat No, Type, Booked, Agree Date, Exp Agree Date (expected agreement date), Area, FlatCost, Slab Amt, Rec, Repay, Due Balance, Flat_Bal, SlabName (current slab), GST, GST_Rec, GST_Bal, Interest, Waived, Int_Rec, Int_Bal, Scheme, Financing (loan / Self).
- Rec Management (trpays1, "Receipt Management"): pick bookings (multi), Search by Receipt_Date or Cheque_Date, From/To, Account, Mode (all 9), Status (Unrealized only / Realized only / Dishonoured only), Purpose (Agreement / TDS / Interest / Cancelled Flats), Chq or Rec No. Summary: Mode x (Realized, Unrealized, Dishonoured, Total); Purpose x Amount. Concept: cheque realization tracking.
- Dues Report Lite (rep3b): Sno, Client, Mobile, Flat No, Type, FlatCost, Slab %, Slab Amt, Rec, Repay, Due Balance, Flat_Bal, Slab_Name.
- Taxes (tbook3, "Statutory Taxes"): Sno, Date, Type, Flat No, Client, Agree_Amt, Slab Amount, GST, GST_Rec, GST_Bal, GST_Per. GST is demanded slab-wise.
- Letter History (trpay7): pick booking, From/To; also manual entry of a letter sent: Letter Date, Letter Name, Particulars, Add.
- Extra Exp Rep (tbook9): two account groups per booking. Builder A/c: GST, Total, Rec, Balance. Society A/c: Total, Rec, Balance. Some extra charges are collected on behalf of the society.

## Letter Formats (blan2.html)
- 16 Word (.docx) mail-merge templates generated per booking (?kno=bookingId): Demand Letter (6 versions), Customer Details_Builder, Customer Details_Society, NOC letters for Union Bank, ICICI, Canara, Axis, SBI, HDFC, Testing. Not downloaded.
- Letters are also reachable per booking and per receipt (blet3r.html?knox2=&knox1=&kro1=), i.e. demand letter, receipt letter, NOC.

## Not covered (by the browse-only rule or not needed)
- Any page content that appears only after pressing Refresh / Search / Show Quotation / Set (form submits).
- Change Password, Log Out, edit pages (cus1e, flat1e, rpaye, book1ce ...), SMS page (sms2), Recovery Sheet (new window, blocked), .docx downloads.
- Only the "DDSR HERITAGE CHS" project was viewed; the other 12 projects were not switched to.
