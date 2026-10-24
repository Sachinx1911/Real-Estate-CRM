# HomeLead CRM (ddsr.homelead.app): raw study notes

Structure and design only. No customer names, phones, amounts or user names are recorded.
Studied 2026-10-24, logged in as the user, browse-only.

## Tech and design system
- Modern SPA, Next.js style (next/font "Rubik"), Tailwind + shadcn/ui style tokens (HSL CSS variables), ApexCharts for charts. Version label "v0.0.1" in sidebar.
- Tokens seen: --primary near-black hsl(0,0%,11%), --background white, page bg #f5f5f5, cards white, --radius 0.5rem, --border hsl(0,0%,87%), --success green hsl(132,83%,39%), --destructive red, accent "micro green gradient" #16b98d to #0b5d47, chart palette (orange, teal, dark slate, yellow, peach). Full dark theme (.dark) with mint-green icons.
- Layout: black top bar (logo, collapse-menu button, activity icon, global search pill "Ctrl /", notifications bell with count badge, language/translate, dark-mode toggle, fullscreen, user avatar menu). White left sidebar 256px with "Dashboard" active pill (black, rounded) and a "Features" list of collapsible groups with line icons; editable menu (pencil icon). Floating chat/help button bottom-right.
- Dashboard: "Welcome, <user>", project selector "All" dropdown. 9 KPI cards in a 3x3 grid (icon + label + big value): Total Sale Revenue, Total Sale Amount Required, Total Sold Units, Total Booked Units, Total Refunded Amount, Total Booking Cancelled, Total Rent Revenue, Total Rent Amount Required, Total Rented Units. Widgets: Inventory Analytics (donut; statuses Available, Rent, Booked, Sold, Temporary Booked, Temporary Rent, On Rent Temporary Booked; "See All"), Total Leads (line/area chart, Weekly toggle), Total Bookings (chart, Weekly toggle), Leads Source ("See All Leads"), Properties Listed (table with page size 10 and pagination, "See All Properties").

## Sidebar modules and pages (route in brackets)
- User Management: Manage Department (/users/group-department), Manage Users, Manage Targets, Manage Designations (/master/designation-list), Manage Teams, Manage Permissions, Attendance
- Land Management: Add New Land, Manage Land
- Project Management: Add New Project, Manage Projects, Interactive Map, Map View
- Property Management: Add New Property, Manage Properties, Inventory (/property/available-inventory)
- Lead Management: Add New Lead, Manage Leads, Cold Leads, Reports, Search Duplicate, Lead Tags
- Sales Management: Sales Command Center, Customers, Manage Sales (/sales-analytics), Payment Terms (/documentation/upload-sanction-letter), Quotations, Compare Quotation, Manage Loan
- Broker Management: Add Broker, Manage Broker
- Contractors Management: Add Contractor, Manage Contractor, Add Contract, Manage Contract, Contract Timeline
- Rent Management: Manage Rent, Tenant Listing, Rent Collection
- General Expenses: Expense Types, Expense Sub Types
- Financial Management: Manage Payee, Add Expense, Expense Register, Verify Payment (/sales-analytics/booking-token), Broker Payment, Ledger Payments, Bank-wise Collection, Refund Booking Payments, CLP Payments (/sales-analytics/flat-booking), Subscription Payments, Upgrade Plan, Make Contract Payments, Manage Contract Payments, Purchase Payments, Credit/Debit Notes, Send CLP Reminder
- Marketing & Campaigning: Contact Tag, Contact, Bulk SMS, Bulk Email, Bulk Whatsapp, Whatsapp Message, Balance, Connect Accounts, Facebook, Instagram, LinkedIn, Twitter
- Documentation: Generate Documents, Miscellaneous Documents
- Tasks: All Task, My Task
- Settings & Configuration
- Bank: Add Bank, Manage Bank
- Help & Support: Manage Tickets
- Construction procurement and stores: Add/Manage Material, Add/Manage Supplier, Add/Manage MQR (material requirement), Purchase Orders, Manage / Approve Purchase Order, Manage GRN, MQR Timeline, Add/Manage Store, Store Materials, Store Material Ledger, MSIR, MSRR, SMTR (store issue / return / transfer records)

## Manage Leads (/leads/manage-leads?mod=all-lead)
- Title "All Leads (<count>)" with a view dropdown (All Leads / Team's Leads etc.). Top-right icon buttons: import, export, and a black primary button.
- "Statistics" with a "By Source Type" dropdown: one card per lead source with logo and count: Direct, Broker, 99 Acres, Magic Bricks, Housing.com, Proptiger, Square Yard, IVR, Land Microsite, Project Microsite, Property Microsite, Meta Ads, Website, OLX. So portal, ad and microsite leads flow in automatically.
- Filter bar: search (lead name / contact number / email / lead no), Assigned Date, Schedule Date, Follow up date, Assign To, advanced filter icon.
- Tag chips (horizontal scroll): Cold, Converting, Escalated, High Priority, Highlighted, Hot, Not Interested, Re-engaged, Warm.
- Bulk actions: Bulk Assign, Bulk Delete (with row checkboxes).
- Table (black header row, sortable Lead No. and Name): S.No., checkbox, Lead No. (#683, with a small red "D" badge on possible duplicates), Name, Contact Number (+91 link, click-to-call), Email, Lead Status (e.g. "On going"), Action (sticky): "Re Assign" outlined button, "Book" black button, "..." menu.
- Row "..." menu: View Lead, Edit Lead, Delete Lead, Add Note, Add Visited Property, Create Quotation, Send Micro Site Link, Send Project Website, Send Location, Call.
- Pagination with page size select (10).

## View Lead (full-screen sheet, ?viewLead=open&LID=<id>)
- Top bar: close X, "View Lead #N", Call split button, black "Send Micro Site Link".
- Left: dark gradient card with edit pencil: Lead No, Lead Name, Primary Contact No, Source, Is Plot Based Lead, Assign To (+ Re Assign), Budget (min-max), Buying Timeline, Lead Status, Other Requirements (shows the ad form name and the question/answer captured from Meta lead forms), Last Activity, Received Date, Assignee, Primary User, Secondary User, Created On, Updated On.
- Most Recent Communication: Communication Type, Meeting Date and Time, Site Visit Status, Follow Up / Next Meeting.
- History card: orange pill "Lead Age: N Days", "Add Note", filter radios All / Lead Note / Lead Assignment, refresh; vertical timeline entries with timestamp (e.g. "Lead Assigned to <user>", "Primary Assigned - <user>").
- Requirement block: Project, Project Type, Sub Type, Furnishing Status, Interested Area, Country, State, City, Facing, Vastu Compliant.
- "Lead Visited Property" table: S.No., Site/Project Name, Visited Date Time, Property Type, Price Range, Action.
- "Available Property Based On Lead" table (auto-matching inventory to the lead's requirement): S.No., Site/Project Name, Block / Area Name, Property Type, Budget Range, Property Status, Action.
- Concept: primary and secondary owner per lead, lead age, automatic property matching, one-click send of microsite / website / location.

## Add New Lead (/leads/add)
- Layout: left dark "live preview" card that mirrors values as you type (Lead Name, Primary Contact No., Secondary Contact No., WhatsApp Number, Email Address, Source Type ...). Right: collapsible 2-column form card. Buttons Cancel / Save.
- Toggle "Plot Based Lead" (switches requirement fields to plot sizes).
- Fields (* = required): Name*, Primary Phone* (country code picker with flag, +91), Secondary Phone, WhatsApp Number, Email Address, Source Type* (searchable dark dropdown: Broker, Direct, Reference, Online ...), Sub Source Type, Budget (₹)* as min-max pair, Buying Timeline* (e.g. "0 TO 3 months"), Project, Project Unit Sub Type (e.g. Apartments), Property Type (e.g. Commercial), Rent / Buy, Client Preference, Interested Area, Lead Address, City, Longitude, Latitude, Postal/Zip Code, Date of Birth, Received Date (date picker "DD MMM YYYY"), Assign To, Lead Tags, Occupation, Employer Name, Residential Plot Size, Luxury Villa Size, Preferred Facing, Purpose of Purchase, Funding Mode, Corner Plot Required (toggle), Other Requirements.

## Cold Leads (/leads/cold-leads)
- Telecalling / IVR pool. Filter pills All / Pending / Converted, "Advanced filter", search "Agent No / Lead No / Virtual No".
- Call outcome tags: Call Later, Call Not Picked, Language Issue, Not Interested, Out of Service.
- Table: S.No., Assign To, Name, Contact Number, Team, Default Primary, Default Secondary, Lead Status, Assigned To, Action (Re Assign). Bulk Assign / Bulk Delete.

## Lead Reports (/leads/leads-reports)
- "User reports" table per salesperson: Name, Total Leads, On going, Total site visits, Temporary converted, Converted, Dropped, Refunded. Search name, date range, source filter, refresh, column settings gear.
- "Lead analysis" donut with date range picker.
- "Broker reports": same columns per broker.
- Implied lead funnel: On going -> Site visit -> Temporary converted (token / temporary booking) -> Converted (booked) or Dropped; Refunded after cancellation.

## Search Duplicate (/leads/search-duplicate)
- Team leads selector and "Includes visited property" All / Yes / No; results after a search.

## Lead Tags (/leads/lead-tags)
- Master list with All / Active / Inactive pills, search, table Name, Status, Action.

## Sales Command Center (/sales-command-center), the salesperson's daily workspace
- Header: "All Leads" view dropdown, "By Lead Type" dropdown, "Run Campaign" dropdown.
- "Smart Lead List": search, Advanced filter, refresh, column settings. Table: S.No., Lead Type, Lead No., Name, Contact Number, Project, Last Contact, Lead Status, Action (black "Call" button with phone icon, grey "Follow-ups" button).
- Right column cards: Follow-ups (Upcoming / Missed tabs), Site Visits (Upcoming / Missed), with an empty-state illustration "Looks like there is no data."
- "My Performance (KPI)": Calls, Meetings, Site Visit Scheduled, Site Visited, Follow Ups, Revenue.
- "Monthly Target" card, "Sales Trends (₹ Lakhs)" chart.
- "Sales Pipeline" stages: Lead in, Follow up, Negotiation, Quotation sent, Converted, Closed lost.

## Customers (/customers)
- Converted leads: S.No., Name, Lead No., Contact, Email, Project, Lead Status, Action.

## Manage Sales (/sales-analytics?project=<id>, title "Sales Analytics" + project dropdown)
- KPI cards: Sale Revenue, Sale Amount Pending, Rent Amount, Rent Amount Pending, Property Sold, Bookings, Booking Cancelled, Rented Units, Refund to Customer.
- "Property Sales" table: S.No., Lead No., Name, Flat/Shop No., Booking Amount, Sale Price, Finance Status, Action. Search by lead name / property type / block / flat / shop no.
- "Sales Performance" chart with Week / Months toggle and date range; "Sales Team Performance" (Agent Name, Revenue, Total Assigned Leads, Converted Leads); "Broker Performance".

## Payment Terms (/documentation/upload-sanction-letter, "Define Payment Terms: Customer & Bank")
- Pick Project and Customer, then a summary strip: Name, Mobile Number, Property Purchase, Details, Sale Price, Token Amount, PAN Number, Aadhar Card, Received Date. Then define the split between customer's own contribution and bank loan, with the bank sanction letter upload. (Customer not selected, to avoid personal data.)

## Quotations (/sales-analytics/quotation, "Manage Quotation(s)")
- Table: S.No., PBQ No. (quotation number), Lead, Project, Sale Price, Min Budget, Booking Amount, Booking Date, Quotation Valid Date, Block / Area Name, Action. Search + Advanced filter. Quotations are created from a lead ("Create Quotation").

## Compare Quotation (/sales-analytics/compare-quotation)
- Filters: Project, Property Type (Residential...), Lead, Min/Max Saleable Price, Min/Max Booking Amount, Booking Date, Quotation Valid Date, Booking Amount Due Date, Payment Term (e.g. Loan), Contributor (e.g. Bank), Is Approved By Client (Yes/No). Reset / Search.

## Manage Loan (/loans, "Loan Management")
- Table: S.No., Lead, Project, Loan Account No, Requested Amount, Sanctioned Amount, Disbursed Amount, Self Funding Amount, Loan Status (e.g. Sanctioned), Applicants, Action. Search by branch / loan account no / amount.

## Manage Projects (/projects/manage-projects)
- Header "Manage Projects (*Remaining Project Limit: 15 / 20)" (SaaS plan limit) + black "+" button.
- Statistics "By Project Type" cards: Residential, Commercial, "Commercial, Residential".
- Filter pills All / Active / Inactive, search (name / project name / RERA no.), Advanced filter, refresh, column settings.
- Table: S.No., Name, Land Name, Project Type (grey chips), Plot Based Project, Promoter Name, Promoter Number, Project Category, Financer Bank Name, Project Unit Sub Type, Budget Range, Project Status, Status (toggle switch, not touched), Action (...). 5 projects.

## Add New Project (/projects/add, "Project Master"), 2-step wizard: "Project Details" then "Define CLP"
- Basic Project Details: Upload Photo*, Plot Based Project toggle, Select Land* (projects are created on a land record), Project Name*, Project Type*, Rent / Buy, Project Category*, Project Status* (e.g. Yet to start), Project Budget (₹)* min-max, Project Start Date*, Project Completion Date*, Phone Number (+91), Email, Website, Project Full Address, City, Postal/zip Code, Google Maps Link (+ "Fetch" to get coordinates), Latitude, Longitude, RERA/Govt Registration Number, Project Registration Number, Layout Plan (attach), 360 Degree View Link, GST Number, PAN Number, Government Approved.
- Amenities checklist with "Select All" (~37): Aquapress Pathway, Block Boundary, Borewell Water Supply, CCTV Surveillance, Childrens Play Area, Community Hall, CWR, Fitness Center, Gas Pipeline, Gazebo, Intercom, Interlocking Road Tiles, Library, Lift, Outer Boundary with wireframe, Park, Parking, Power Backup, Rain Water Harvesting, Reception and Waiting Lounge, Sewage System, Solar Power, Solar Water Heating, Staff Quarters, Street Demarcation, Street Light, Swimming Pool, Temple, Underground Electric / Sewer / Water networks, Water Connection.
- Sections: Near By Locations, Images, Videos, Brochure, RERA Documents, Promoter Details (Name, Contact Number, Documents), About (Title, Description), Financer Banks Details (Bank).
- Buttons: Cancel, "Save & Next" (not pressed). Step 2 "Define CLP" = construction-linked payment plan for the project.
- Note: at this point the server returned a toast "Failed - Too many requests, please try again later." Browsing pace was slowed down after this.

## Interactive Map (/interactiveMap, "Site Layout - Interactive site layout - N plots")
- Full-width page without sidebar, cream header strip, dark canvas. "Select project" dropdown. Empty state: "Pick a project, or drop a DXF, DWG or PDF to open its site layout". Concept: upload the CAD/PDF site plan and get a clickable plot map with live status. (Nothing selected or uploaded.)

## Map View (/map-view)
- Geographic map with clustered markers (count bubbles) and checkboxes "Project (5)" and "Land (9)".

## Inventory (/property/available-inventory, "Inventory Analytics")
- KPI cards: Properties Booked, Properties Available, Properties On Rent.
- "Inventory" table: S.No., Property Type (Residential / Commercial), Project Unit Sub Type (Apartments, Office ...), Block / Area Name, Budget Range (shown as "₹X Lakh - ₹Y Cr"), Property Status, Site/Project Name, Action (...). Search (property type / block / unit no / facing), property status filter, Advanced filter.

## Manage Properties/Units (/property/manage-properties)
- Header buttons: import, export, black "+".
- Same 3 KPI cards. Filters: search (project / block / unit no / facing), All / Available status select, property type select, Advanced filter, refresh, column settings.
- Table: S.No., Property Status (orange "Available" pill), Project Name, Unit No., Property Type, Budget Range, Floor Name, Property Area, Facing, Status (toggle, not touched), Action.
- Row menu: View Property, Edit Property, Micro Site, Share Microsite, Delete Property. Every unit has its own shareable microsite.

## Add New Property (/property/add, "Property/Unit Master")
- Fields: Select Project, Flat Number (e.g. B12-204), Budget (₹) min-max, Vastu Compliant, PLC Applicable (preferential location charge), Property Area, Super Built-Up Area, Built-Up Area, Carpet Area, area unit selector ("Square Feet") with an area calculator ("Open calculator"), Budget/Area (rate per unit area, min-max), Property facing feature, Tags, No. of Balconies / Bathrooms / Bedrooms / Kitchens / Drawing Rooms / Parking Lot, 360 Degree View Link, Add Property Images / Videos / Brochure, About Property. Cancel / Save (not pressed).

## Manage Land (/lands/manage-land)
- Filter All, search (land name / property type / occupancy), Advanced filter.
- Table: S.No., Name, Property Type (Residential / Commercial chips), Occupancy Status, Status, Action. 9 lands, one per society project (the same society names as in Beans Online), so Land -> Project -> Units is the hierarchy.

## PAUSED here on 2026-10-24 at the user's request (30 minute break, user will log in again).
Still to study, with at least 20-30 seconds between pages to avoid the server's rate limit:
- Broker Management: Manage Broker, Add Broker
- Financial Management: Verify Payment (/sales-analytics/booking-token), CLP Payments (/sales-analytics/flat-booking), Send CLP Reminder, Ledger Payments, Bank-wise Collection, Refund Booking Payments, Broker Payment, Credit/Debit Notes, Expense Register, Add Expense, Manage Payee
- Marketing & Campaigning: Contact, Contact Tag, Bulk WhatsApp / SMS / Email, Connect Accounts
- Documentation: Generate Documents, Miscellaneous Documents
- Tasks: All Task, My Task
- Settings & Configuration
- User Management: Manage Users, Manage Permissions, Manage Targets, Manage Teams, Attendance, Department, Designations
- Bank: Manage Bank
- Rent, Contractors / Contracts, and the procurement + store modules (one list page each)
- Help & Support: Manage Tickets

## RESUMED after the break (same day), pages opened at least 30 seconds apart.

## Broker List (/broker/manage-broker)
- Filter All, search (name / contact number), Advanced filter.
- Table: S.No., Name, Contact, Email, Country, State, City, Real Estate License No., Expiration Date (licence expiry), Status, Action. 4 brokers.

## Verify Payment (/sales-analytics/booking-token, "Flat Booking Payment")
- Search (lead no / lead name / reference no / amount / ...), project select, Advanced filter.
- Table: S.No., Lead No., Lead Name, Reference No. (format "#PROPAY/<PROJECT>/<YEAR>/<N>"), Block Name, Purchase (pill "WITHOUT LOAN" or "LOAN"), Action: green gradient "Confirm Payment" button (not pressed).
- Concept: maker-checker. Sales records a booking payment, accounts confirms it before it counts.

## CLP Payments (/sales-analytics/flat-booking, "CLP Booking Payments")
- Search, project select, "CLP" filter, Advanced filter.
- One row per installment: Name (slab name: BOOKING AMOUNT, PLINTH, 1ST SLAB, 2ND SLAB, 3RD SLAB, 4TH SLAB, 2nd Floor ...), Amount, Sale Price, Payment Status (red "Due" / green "Paid"), Payment Mode (Online / Cheque), Purchase, Action menu: View, Send Reminder (not pressed).

## Send CLP Reminder (/sales-analytics/send-clp-reminder, "CLP Payments Reminder")
- Project*, Due Date* (date picker), "Send Reminder" button (not pressed). Bulk reminder to all customers with installments due by that date.

## Ledger Payments (/financial-management/ledger-payments)
- Summary pills with totals, project select, Advanced filter, mode chips (Online, Cash).
- Table: S.No., Payment For (e.g. "Property payment"), Project, Payment Mode, Amount, Received On.
- "Summary" table: Name, Debit, Credit.

## Bank-wise Collection (/financial-management/bank-collections)
- Project select, Advanced filter, chips per bank account plus "Cash / Unassigned".
- Table: S.No., Bank Name, Account No., No. of Payments, Booking Collection, Rent Collection, Total Collected.

## Refund Booking Payments (/sales-analytics/refund-booking)
- Search (customer name / contact / amount), project select, Advanced filter.
- Table: S.No., Customer Name, Contact Number, Payment Mode, Payment Status (Paid).

## Broker Payment (/financial-management/broker-payment, "Broker Payments")
- Search (amount / reference no / generated ref), project select, Advanced filter, "Open calculator".
- Table: S.No., Broker Name, Broker Commission, Lead Name, Contact Number, Property Type, Block / Area Name, Booking Date, Action.

## Credit/Debit Notes (/financial-management/credit-debit-notes)
- Procurement-side notes. Table: Note No., Purchase Order Count, GRN Count, Note Type, Note Date, Project, Supplier, Total Materials, Store, Total Amount, Created By, Action.

## Expense Register (/financial-management/expense-register)
- Search (payment for / remarks). Table: Payee Name, Total Amount, Total Payable Amount, Total Items, Payment Mode, Action. Empty.

## Marketing: Contact (/marketing-campaigning/contact, "Address Book")
- Tag/group dropdown "All", search (name / email / phone / address), Advanced filter. Table: Name, Email, Phone No., Address, Action.

## Marketing: Bulk Whatsapp (/marketing-campaigning/bulk-whatsapp)
- "All" dropdown, black "+" to create a campaign. "Campaign List": Name, Audience, Billing Amount, Schedule Time, Status, Action. Empty. Bulk SMS and Bulk Email follow the same pattern; "Balance" is a prepaid messaging wallet.

## Marketing: Connect Accounts (/marketing-campaigning/connect-accounts)
- Cards for Facebook, Twitter, LinkedIn, WhatsApp, Meta Ads with "Connect Now" / "Connect More" (not pressed). "Meta Ads Details" shows the connected business account, working status and "Valid till" date. This is how Meta lead forms flow into Leads.

## Generate Documents (/documentation/generate)
- Project Name, Customer Name, summary strip (Name, Mobile Number, Property Purchase, Details, Sale Price, Token Amount), then a template table: Template Name, Document Type, Created On, Updated On, Action. Documents are generated per customer from templates. No templates in the default project.

## Tasks (/tasks, "Manage Tasks")
- Black "+" button. Statistics "By Priority" cards: Critical, High, Medium, Low.
- Table: S.No., Task No., Name, Priority, Date, Due Date, Author Name, Assigned To, Status, Action. Empty. "My Task" shows the user's own tasks.

## Settings & Configuration (/settings-configuration), a grid of setting cards with icon, title and one-line description
- General (common platform configuration), Security (2FA, OTP), Attendance (shift timings), Export Settings, Leads (customized lead features), Campaign, Booking Settings, Documentation & Priorities, Inventory settings (stock, MQR, PO), Marketing Templates (campaign templates), Communication Templates (direct message templates), Lead Types, Inventory Tags, PLC (Preferential Location Charges) master, Plot Categories, Extra Charges master, Transcription (call transcription), IVR Recording, Notifications Settings, Audit Logs (user activity log), Microsite Settings.

## Booking Settings (/settings-configuration/booking-settings), each row = title + help text + control (nothing changed)
- Temporary Property Booking Period (days), Temporary Rent Booking Period (days), Quotation Validity Period (days), Direct Booking Allowed (toggle), Can Book Unapproved Quote (toggle), Document Sharing Channel (multi-select, e.g. Email), Interest Frequency (how often late interest is computed), Compound Interest Enabled (toggle). Cancel / Save.
- Concept: a "temporary booking" (hold) that expires after N days unless converted.

## Extra Charges master (/master/extra-charges-list)
- Inline "Add New" form (Cancel / Save) and table: Name, Amount, Tax Percentage, Created On, Updated On, Status, Action. Empty here.

## Manage Users (/users/manage-users)
- Filter All, search (name / contact / email), Advanced filter. Table: Full Name, Contact Number, Email, Status, Action. 15 users.

## Permissions (/users/manage-users/permissions, "Access Right & Permissions")
- Access Type select (Individual ...), Individuals* picker, Cancel / Preview.
- "Grant Full Access" master checkbox, search permission box, then per-module groups with "Full Access" plus fine-grained checkboxes, e.g.:
  - Dashboard Info Count
  - Departments: List / Add / View / Update / Delete Group
  - Users: List, Add, View, Update, Update User Permission, Update User Password, Delete, Import Users, Export CSV, Export PDF
  - Teams, User Targets, Attendance (List, My Attendance, Export PDF/CSV)
  - Lands, Projects (incl. "Update Project CLP Phases", Export PDF/CSV), Contractors, Contractor Contracts, Contract Payments, and so on for every module.

## Manage Targets (/users/manage-targets)
- Search "sale or lead targets / achievements". Table: S.No., User, Action (targets per user; feeds "Monthly Target" in Sales Command Center).

## Attendance (/users/attendance, "Employee Attendance")
- User select, Month toggle, date range, Clear. Table: S.No., Name, Date, In Time, Late In, Late Out, Total Hours, Action. Shift timings are set in Settings > Attendance.

## Manage Rent (/rent/manage-rent)
- Project select, Residential / Commercial toggle; unit grid for renting appears after choosing a project. Tenant Listing and Rent Collection pages complete the rent cycle.

## Manage Contract (/contract/manage-contract)
- Project select, contractor select, search. Table: S.No., Name, Phone No., Email, Project Name, Reg./License No., Amount, Balance, Generated Reference No., Action. Contract Timeline and contract payments pages exist.

## Procurement: MQR (/mqr-details, "Material Quotation Request Management")
- Table: S.No., MQR No., Issue Date, Due Date, Store, Quotation Count, Status, Action.
- Implied chain: MQR (ask suppliers for quotes) -> Purchase Order -> Approve PO -> GRN (goods received) -> Store Materials and Store Material Ledger -> MSIR (issue) / MSRR (return) / SMTR (transfer between stores); Credit/Debit Notes and Purchase Payments on the finance side.

## Help & Support: Manage Tickets (/help-support/manage-tickets)
- "Manage and track all support tickets", "Raise a ticket" button (not pressed), search, status select, Advanced filter.
- Table: S.No., Ticket No, title, Priority (e.g. Low), Ticket Status (e.g. Pending), Category, Author, Assign To, Action.

## Study of HomeLead finished 2026-10-24. Not opened: Bulk SMS/Email pages, social channel pages, Teams, Departments, Designations, Tenant Listing, Rent Collection, Contractors list, POs, GRN, stores, MSIR/MSRR/SMTR, subscription and plan pages, individual settings sub-pages except Booking Settings and Extra Charges. Their purpose is clear from the menu and related pages.
