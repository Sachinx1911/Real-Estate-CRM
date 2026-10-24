# HomeLead CRM: फीचर्सचे सविस्तर दस्तऐवजीकरण

| बाब | माहिती |
|---|---|
| सॉफ्टवेअर | HomeLead, रिअल इस्टेटसाठीचे CRM (SaaS) |
| पाहिलेले खाते | DDSR (`ddsr.homelead.app`) |
| अभ्यासाची तारीख | 24 ऑक्टोबर 2026 |
| पद्धत | युजरच्या लॉगिनने फक्त पाहणे. काहीही सेव्ह केले नाही, पाठवले नाही, मान्य केले नाही. |
| आधार | `homelead-notes-raw.md` (इंग्रजी कच्च्या नोंदी) आणि `HomeLead-abhyas-ani-tulana.md` (आधीचा मराठी अहवाल) |
| गोपनीयता | यात कोणत्याही ग्राहकाचे, कर्मचाऱ्याचे किंवा युजरचे नाव, फोन, ईमेल, PAN, आधार, बँक खाते क्रमांक किंवा ग्राहकाशी जोडलेली रक्कम नाही. |

**हे दस्तऐवज कसे वाचावे**

- **उघडले:** ते पान प्रत्यक्ष पाहिले.
- **फक्त मेनूवरून माहिती, उघडले नाही:** पानाचे नाव फक्त बाजूच्या मेनूत दिसले.
- **(अनुमान):** नोंदींवरून काढलेला निष्कर्ष. स्क्रीनवर थेट दिसलेला नाही.
- **नोंद नाही:** त्या गोष्टीची माहिती नोंदींमध्ये नाही.
- स्क्रीनवरील पानांची नावे, फील्ड्स, कॉलम्स, बटणे आणि स्थितींची नावे इंग्रजीत ठेवली आहेत. त्यामुळे ती सॉफ्टवेअरमध्ये जशीच्या तशी शोधता येतील.
- "मार्ग" म्हणजे ब्राउझरमधील पानाचा पत्ता (URL), उदा. `/leads/manage-leads`.

## अनुक्रमणिका

1. ओळख
2. मेनूची रचना
3. HomeLead चे सध्याचे दिसणे (फक्त नोंद)
4. मुख्य घटक (Data entities) आणि त्यांचे नाते
5. मॉड्यूलनिहाय फीचर्स
6. कामाचे प्रवाह
7. एकत्रीकरणे (Integrations)
8. सेटिंग्ज आणि परवानग्या
9. अहवाल आणि विश्लेषण
10. मर्यादा आणि लक्षात आलेल्या गोष्टी
11. या अभ्यासात न पाहिलेले भाग

---

## 1. ओळख

### 1.1 HomeLead काय आहे

- HomeLead हे रिअल इस्टेट विकासकांसाठीचे (बिल्डर) CRM आहे. ते इंटरनेटवर सबस्क्रिप्शनने (SaaS) चालते.
- एकाच ॲपमध्ये हे सगळे विभाग आहेत:
  - लीड्स आणि त्यांचा पाठपुरावा
  - विक्री, कोटेशन, बुकिंग आणि कर्ज
  - जमीन, प्रोजेक्ट आणि युनिट्स (इन्व्हेंटरी)
  - बुकिंगचे पैसे, CLP हप्ते, परतावा, ब्रोकरचे कमिशन, खर्च आणि हिशोब
  - भाडे (Rent)
  - कंत्राटदार आणि कंत्राटे
  - मार्केटिंग मोहिमा (WhatsApp, SMS, Email) आणि सोशल खाती
  - कागदपत्रे (साच्यांमधून दस्त)
  - टास्क
  - युजर्स, टीम्स, लक्ष्य, हजेरी आणि परवानग्या
  - बांधकाम साहित्याची खरेदी आणि स्टोअर
  - मदत तिकिटे (Help & Support)
- तंत्रज्ञान (नोंदींनुसार): आधुनिक एक-पानी वेब ॲप (SPA), Next.js प्रकारचे. स्टाईलसाठी Tailwind आणि shadcn/ui प्रकारचे टोकन्स. चार्ट्ससाठी ApexCharts.
- बाजूच्या मेनूत आवृत्ती "v0.0.1" असे लिहिलेले आहे.
- कंपनी HomeLead सोबत Beans Online हे दुसरे CRM सुद्धा वापरते. दोन्हींमध्ये त्याच सोसायटी प्रोजेक्ट्स आहेत. हे दस्तऐवज फक्त HomeLead बद्दल आहे.

### 1.2 SaaS प्लॅन आणि मर्यादा

| बाब | नोंद |
|---|---|
| प्रोजेक्ट्सची मर्यादा | Manage Projects च्या शीर्षकात "*Remaining Project Limit: 15 / 20" असे आहे. म्हणजे प्लॅनमध्ये 20 प्रोजेक्ट्स. 5 वापरले, 15 बाकी. |
| प्लॅनची पाने | Financial Management मध्ये Subscription Payments आणि Upgrade Plan. (फक्त मेनूवरून माहिती, उघडले नाही) |
| संदेशांचे पाकीट | Marketing & Campaigning मधील "Balance" हे संदेशांसाठी आधी पैसे भरलेले (प्रीपेड) पाकीट आहे, असे नोंदीत आहे. (पान उघडले नाही) |
| मोहिमेचा खर्च | Bulk Whatsapp च्या मोहिमांच्या यादीत "Billing Amount" कॉलम आहे. |
| Meta Ads जोडणीची मुदत | "Meta Ads Details" मध्ये जोडलेल्या खात्याची "Valid till" तारीख दिसते. |
| सर्व्हरची मर्यादा | पाने पटापट उघडल्यावर "Failed - Too many requests, please try again later." असा संदेश आला. |
| इतर मर्यादा | युजर्स, लीड्स किंवा युनिट्सच्या संख्येवर प्लॅनची मर्यादा नोंदींमध्ये दिसली नाही. |

### 1.3 पाहिलेल्या खात्याचा आकार

| बाब | संख्या | आधार |
|---|---|---|
| बाजूच्या मेनूतील पाने | सुमारे 100 | आधीचा मराठी अहवाल |
| जमिनी | 9 | Manage Land; Map View मध्ये "Land (9)" |
| प्रोजेक्ट्स | 5 (मर्यादा 20) | Manage Projects; Map View मध्ये "Project (5)" |
| युनिट्स | 500 पेक्षा जास्त | आधीचा मराठी अहवाल. कच्च्या नोंदींमध्ये नेमका आकडा नाही. |
| लीड्स | 600 पेक्षा जास्त | आधीचा मराठी अहवाल. कच्च्या नोंदींमध्ये "All Leads (<count>)" असे लिहिले आहे, नेमका आकडा नाही. |
| युजर्स | 15 | Manage Users |
| ब्रोकर | 4 | Broker List |

प्रत्येक सोसायटी प्रोजेक्टसाठी एक जमीन नोंदवलेली आहे. ही नावे Beans Online मधील सोसायटी नावांसारखीच आहेत.

### 1.4 कोण वापरते

- पाहिलेले खाते DDSR या कंपनीचे आहे. त्यात 15 युजर्स आहेत.
- युजर्सच्या भूमिकांची यादी नोंदींमध्ये नाही. पानांच्या रचनेवरून हे वापरकर्ते दिसतात (अनुमान):

| वापरकर्ता | मुख्य पाने |
|---|---|
| विक्री कर्मचारी | Sales Command Center, Manage Leads, View Lead, Quotations |
| टेलिकॉलर / IVR टीम | Cold Leads |
| अकाउंट्स | Verify Payment, CLP Payments, Ledger Payments, Bank-wise Collection, Refund Booking Payments, Broker Payment, Expense Register |
| व्यवस्थापक | Dashboard, Lead Reports, Manage Sales, Manage Targets, Permissions |
| मार्केटिंग | Contact, Bulk Whatsapp, Connect Accounts |
| प्रशासन / HR | Manage Users, Attendance, Settings & Configuration |
| खरेदी आणि स्टोअर | MQR, Purchase Orders, GRN, स्टोअरची पाने |
| बांधकाम / कंत्राट | Manage Contract |

- बाहेरच्या पक्षांच्या नोंदी ठेवल्या जातात: ब्रोकर, कंत्राटदार, पुरवठादार, भाडेकरू आणि ग्राहक. ते स्वतः HomeLead मध्ये लॉगिन करतात का, हे नोंदींमध्ये नाही.

### 1.5 अभ्यासाची पद्धत

1. तारीख 24 ऑक्टोबर 2026. युजरच्या स्वतःच्या लॉगिनने अभ्यास केला.
2. फक्त पाहणे. कोणताही फॉर्म सेव्ह केला नाही.
3. ही बटणे दाबली नाहीत: "Save", "Save & Next", "Confirm Payment", "Send Reminder", "Connect Now", "Connect More", "Raise a ticket". स्टेटसच्या टॉगल स्विचेसना हात लावला नाही.
4. फक्त रचना नोंदवली: पाने, फील्ड्स, कॉलम्स, पर्याय, स्थिती आणि रंग.
5. Payment Terms आणि Generate Documents या पानांवर वैयक्तिक माहिती दिसू नये म्हणून ग्राहक निवडला नाही.
6. Add New Project पानावर असताना सर्व्हरने "Failed - Too many requests, please try again later." असा संदेश दिला. त्यानंतर पाने उघडण्याचा वेग कमी केला.
7. युजरच्या सांगण्यावरून सुमारे 30 मिनिटांचा ब्रेक घेतला. त्याच दिवशी अभ्यास पुन्हा सुरू केला. त्यानंतर प्रत्येक पान किमान 30 सेकंदांच्या अंतराने उघडले.
8. न उघडलेल्या पानांची यादी विभाग 11 मध्ये आहे.

---

## 2. मेनूची रचना

- डाव्या बाजूच्या मेनूत सर्वात वर "Dashboard" आहे.
- त्याखाली "Features" नावाखाली गट आहेत. प्रत्येक गट उघडता-मिटता येतो.
- मेनूत बदल करण्यासाठी पेन्सिलचे आयकॉन आहे.
- मार्ग नोंदवलेला नसेल तेथे "—" ठेवले आहे.

### 2.1 Dashboard

| पान (मेनूतील नाव) | मार्ग | स्थिती |
|---|---|---|
| Dashboard | — | उघडले |

### 2.2 User Management

| पान (मेनूतील नाव) | मार्ग | स्थिती |
|---|---|---|
| Manage Department | `/users/group-department` | फक्त मेनूवरून माहिती, उघडले नाही |
| Manage Users | `/users/manage-users` | उघडले |
| Manage Targets | `/users/manage-targets` | उघडले |
| Manage Designations | `/master/designation-list` | फक्त मेनूवरून माहिती, उघडले नाही |
| Manage Teams | — | फक्त मेनूवरून माहिती, उघडले नाही |
| Manage Permissions | `/users/manage-users/permissions` | उघडले (शीर्षक "Access Right & Permissions") |
| Attendance | `/users/attendance` | उघडले (शीर्षक "Employee Attendance") |

### 2.3 Land Management

| पान (मेनूतील नाव) | मार्ग | स्थिती |
|---|---|---|
| Add New Land | — | फक्त मेनूवरून माहिती, उघडले नाही |
| Manage Land | `/lands/manage-land` | उघडले |

### 2.4 Project Management

| पान (मेनूतील नाव) | मार्ग | स्थिती |
|---|---|---|
| Add New Project | `/projects/add` | उघडले (शीर्षक "Project Master") |
| Manage Projects | `/projects/manage-projects` | उघडले |
| Interactive Map | `/interactiveMap` | उघडले (शीर्षक "Site Layout") |
| Map View | `/map-view` | उघडले |

### 2.5 Property Management

| पान (मेनूतील नाव) | मार्ग | स्थिती |
|---|---|---|
| Add New Property | `/property/add` | उघडले (शीर्षक "Property/Unit Master") |
| Manage Properties | `/property/manage-properties` | उघडले |
| Inventory | `/property/available-inventory` | उघडले (शीर्षक "Inventory Analytics") |

### 2.6 Lead Management

| पान (मेनूतील नाव) | मार्ग | स्थिती |
|---|---|---|
| Add New Lead | `/leads/add` | उघडले |
| Manage Leads | `/leads/manage-leads?mod=all-lead` | उघडले |
| View Lead (मेनूत नाही; Manage Leads मधून उघडणारा पॅनल) | `?viewLead=open&LID=<id>` | उघडले |
| Cold Leads | `/leads/cold-leads` | उघडले |
| Reports | `/leads/leads-reports` | उघडले (या दस्तऐवजात "Lead Reports") |
| Search Duplicate | `/leads/search-duplicate` | उघडले |
| Lead Tags | `/leads/lead-tags` | उघडले |

### 2.7 Sales Management

| पान (मेनूतील नाव) | मार्ग | स्थिती |
|---|---|---|
| Sales Command Center | `/sales-command-center` | उघडले |
| Customers | `/customers` | उघडले |
| Manage Sales | `/sales-analytics?project=<id>` | उघडले (शीर्षक "Sales Analytics") |
| Payment Terms | `/documentation/upload-sanction-letter` | उघडले (शीर्षक "Define Payment Terms: Customer & Bank"). ग्राहक निवडला नाही. |
| Quotations | `/sales-analytics/quotation` | उघडले (शीर्षक "Manage Quotation(s)") |
| Compare Quotation | `/sales-analytics/compare-quotation` | उघडले |
| Manage Loan | `/loans` | उघडले (शीर्षक "Loan Management") |

### 2.8 Broker Management

| पान (मेनूतील नाव) | मार्ग | स्थिती |
|---|---|---|
| Add Broker | — | फक्त मेनूवरून माहिती, उघडले नाही |
| Manage Broker | `/broker/manage-broker` | उघडले (शीर्षक "Broker List") |

### 2.9 Contractors Management

| पान (मेनूतील नाव) | मार्ग | स्थिती |
|---|---|---|
| Add Contractor | — | फक्त मेनूवरून माहिती, उघडले नाही |
| Manage Contractor | — | फक्त मेनूवरून माहिती, उघडले नाही |
| Add Contract | — | फक्त मेनूवरून माहिती, उघडले नाही |
| Manage Contract | `/contract/manage-contract` | उघडले |
| Contract Timeline | — | फक्त मेनूवरून माहिती, उघडले नाही |

### 2.10 Rent Management

| पान (मेनूतील नाव) | मार्ग | स्थिती |
|---|---|---|
| Manage Rent | `/rent/manage-rent` | उघडले |
| Tenant Listing | — | फक्त मेनूवरून माहिती, उघडले नाही |
| Rent Collection | — | फक्त मेनूवरून माहिती, उघडले नाही |

### 2.11 General Expenses

| पान (मेनूतील नाव) | मार्ग | स्थिती |
|---|---|---|
| Expense Types | — | फक्त मेनूवरून माहिती, उघडले नाही |
| Expense Sub Types | — | फक्त मेनूवरून माहिती, उघडले नाही |

### 2.12 Financial Management

| पान (मेनूतील नाव) | मार्ग | स्थिती |
|---|---|---|
| Manage Payee | — | फक्त मेनूवरून माहिती, उघडले नाही |
| Add Expense | — | फक्त मेनूवरून माहिती, उघडले नाही |
| Expense Register | `/financial-management/expense-register` | उघडले |
| Verify Payment | `/sales-analytics/booking-token` | उघडले (शीर्षक "Flat Booking Payment") |
| Broker Payment | `/financial-management/broker-payment` | उघडले (शीर्षक "Broker Payments") |
| Ledger Payments | `/financial-management/ledger-payments` | उघडले |
| Bank-wise Collection | `/financial-management/bank-collections` | उघडले |
| Refund Booking Payments | `/sales-analytics/refund-booking` | उघडले |
| CLP Payments | `/sales-analytics/flat-booking` | उघडले (शीर्षक "CLP Booking Payments") |
| Subscription Payments | — | फक्त मेनूवरून माहिती, उघडले नाही |
| Upgrade Plan | — | फक्त मेनूवरून माहिती, उघडले नाही |
| Make Contract Payments | — | फक्त मेनूवरून माहिती, उघडले नाही |
| Manage Contract Payments | — | फक्त मेनूवरून माहिती, उघडले नाही |
| Purchase Payments | — | फक्त मेनूवरून माहिती, उघडले नाही |
| Credit/Debit Notes | `/financial-management/credit-debit-notes` | उघडले |
| Send CLP Reminder | `/sales-analytics/send-clp-reminder` | उघडले (शीर्षक "CLP Payments Reminder") |

### 2.13 Marketing & Campaigning

| पान (मेनूतील नाव) | मार्ग | स्थिती |
|---|---|---|
| Contact Tag | — | फक्त मेनूवरून माहिती, उघडले नाही |
| Contact | `/marketing-campaigning/contact` | उघडले (शीर्षक "Address Book") |
| Bulk SMS | — | फक्त मेनूवरून माहिती, उघडले नाही |
| Bulk Email | — | फक्त मेनूवरून माहिती, उघडले नाही |
| Bulk Whatsapp | `/marketing-campaigning/bulk-whatsapp` | उघडले |
| Whatsapp Message | — | फक्त मेनूवरून माहिती, उघडले नाही |
| Balance | — | फक्त मेनूवरून माहिती, उघडले नाही |
| Connect Accounts | `/marketing-campaigning/connect-accounts` | उघडले |
| Facebook | — | फक्त मेनूवरून माहिती, उघडले नाही |
| Instagram | — | फक्त मेनूवरून माहिती, उघडले नाही |
| LinkedIn | — | फक्त मेनूवरून माहिती, उघडले नाही |
| Twitter | — | फक्त मेनूवरून माहिती, उघडले नाही |

### 2.14 Documentation

| पान (मेनूतील नाव) | मार्ग | स्थिती |
|---|---|---|
| Generate Documents | `/documentation/generate` | उघडले |
| Miscellaneous Documents | — | फक्त मेनूवरून माहिती, उघडले नाही |

### 2.15 Tasks

| पान (मेनूतील नाव) | मार्ग | स्थिती |
|---|---|---|
| All Task | `/tasks` | उघडले (शीर्षक "Manage Tasks") |
| My Task | — | स्वतंत्र पान उघडल्याची नोंद नाही. नोंदींनुसार यात युजरची स्वतःची टास्क दिसतात. |

### 2.16 Settings & Configuration

| पान (मेनूतील नाव) | मार्ग | स्थिती |
|---|---|---|
| Settings & Configuration | `/settings-configuration` | उघडले (सेटिंग्जच्या कार्ड्सची ग्रिड) |
| Booking Settings (उप-पान) | `/settings-configuration/booking-settings` | उघडले |
| Extra Charges master (उप-पान) | `/master/extra-charges-list` | उघडले |
| बाकी 19 कार्ड्सची उप-पाने | — | उघडले नाही |

### 2.17 Bank

| पान (मेनूतील नाव) | मार्ग | स्थिती |
|---|---|---|
| Add Bank | — | फक्त मेनूवरून माहिती, उघडले नाही |
| Manage Bank | — | फक्त मेनूवरून माहिती, उघडले नाही |

### 2.18 Help & Support

| पान (मेनूतील नाव) | मार्ग | स्थिती |
|---|---|---|
| Manage Tickets | `/help-support/manage-tickets` | उघडले |

### 2.19 बांधकाम साहित्याची खरेदी आणि स्टोअर

- या गटाचे मेनूतील नेमके नाव नोंदींमध्ये नाही. नोंदींमध्ये फक्त "Construction procurement and stores" असे वर्णन आहे.
- नोंदींमध्ये "Add/Manage" अशा जोडीने लिहिलेली नावे बहुधा मेनूतील दोन वेगळी पाने आहेत (अनुमान).

| पान (नोंदीतील नाव) | अर्थ | मार्ग | स्थिती |
|---|---|---|---|
| Add/Manage Material | साहित्याची मास्टर यादी | — | फक्त मेनूवरून माहिती, उघडले नाही |
| Add/Manage Supplier | पुरवठादारांची यादी | — | फक्त मेनूवरून माहिती, उघडले नाही |
| Add/Manage MQR | साहित्यासाठी दर मागवण्याच्या विनंत्या | `/mqr-details` (Manage) | Manage MQR उघडले (शीर्षक "Material Quotation Request Management"). Add उघडले नाही. |
| Purchase Orders | खरेदी ऑर्डर (PO) | — | फक्त मेनूवरून माहिती, उघडले नाही |
| Manage / Approve Purchase Order | PO ची यादी आणि मंजुरी | — | फक्त मेनूवरून माहिती, उघडले नाही |
| Manage GRN | माल मिळाल्याच्या नोंदी (GRN) | — | फक्त मेनूवरून माहिती, उघडले नाही |
| MQR Timeline | MQR चा वेळेनुसार प्रवास | — | फक्त मेनूवरून माहिती, उघडले नाही |
| Add/Manage Store | स्टोअर्सची यादी | — | फक्त मेनूवरून माहिती, उघडले नाही |
| Store Materials | स्टोअरमधील साहित्य | — | फक्त मेनूवरून माहिती, उघडले नाही |
| Store Material Ledger | स्टोअरमधील साहित्याची खातेवही | — | फक्त मेनूवरून माहिती, उघडले नाही |
| MSIR | स्टोअरमधून साहित्य देण्याची नोंद (issue) | — | फक्त मेनूवरून माहिती, उघडले नाही |
| MSRR | स्टोअरमध्ये साहित्य परत घेण्याची नोंद (return) | — | फक्त मेनूवरून माहिती, उघडले नाही |
| SMTR | एका स्टोअरमधून दुसऱ्या स्टोअरमध्ये साहित्य हलवण्याची नोंद (transfer) | — | फक्त मेनूवरून माहिती, उघडले नाही |

### 2.20 मार्गांबद्दल निरीक्षण

- काही पानांचा मार्ग त्यांच्या मेनू गटाशी जुळत नाही:
  - Payment Terms (Sales Management) चा मार्ग `/documentation/...` आहे.
  - Verify Payment, CLP Payments, Send CLP Reminder आणि Refund Booking Payments (Financial Management) चे मार्ग `/sales-analytics/...` आहेत.
  - Manage Designations (User Management) आणि Extra Charges (Settings) चे मार्ग `/master/...` आहेत.
- मेनूतील नाव आणि पानाचे शीर्षक बऱ्याच ठिकाणी वेगळे आहे. त्यांची यादी विभाग 10 मध्ये आहे.

---

## 3. HomeLead चे सध्याचे दिसणे (फक्त नोंद)

> हा भाग फक्त HomeLead सध्या कसे दिसते याची नोंद आहे. यात नवीन उत्पादनासाठी कोणतेही डिझाइन सुचवलेले नाही.

### 3.1 तंत्रज्ञान

| बाब | नोंद |
|---|---|
| ॲपचा प्रकार | आधुनिक SPA, Next.js प्रकारचे |
| फॉन्ट | "Rubik" (next/font द्वारे) |
| स्टाईल | Tailwind आणि shadcn/ui प्रकारचे टोकन्स, HSL CSS variables मध्ये |
| चार्ट्स | ApexCharts |
| आवृत्ती | बाजूच्या मेनूत "v0.0.1" |

### 3.2 एकूण मांडणी

**वरचा पट्टा (काळा).** नोंदीतील क्रमाने:

1. लोगो
2. मेनू लहान-मोठा करण्याचे बटण
3. ॲक्टिव्हिटीचे आयकॉन
4. सगळीकडे शोधण्याची गोळीच्या आकाराची पट्टी, "Ctrl /" शॉर्टकटसह
5. सूचनांची घंटा, संख्येच्या बिल्ल्यासह
6. भाषा / भाषांतराचे बटण
7. गडद थीमचे टॉगल
8. पूर्ण स्क्रीनचे बटण
9. युजरच्या अवताराचा मेनू

**डावा मेनू (पांढरा)**

- रुंदी 256px.
- चालू पान काळ्या, गोलसर पट्टीत दिसते (उदा. "Dashboard").
- त्याखाली "Features" यादी. त्यात उघडता-मिटता येणारे गट आहेत. प्रत्येक गटाला रेषेचे आयकॉन आहे.
- मेनू बदलता येतो (पेन्सिलचे आयकॉन).
- खाली आवृत्ती "v0.0.1".

**मुख्य भाग**

- पानाची पार्श्वभूमी हलकी राखाडी (#f5f5f5).
- माहिती पांढऱ्या कार्ड्समध्ये.

**कायम दिसणारे बटण**

- उजवीकडे खाली तरंगते गोल चॅट / मदतीचे बटण.

**वेगळी मांडणी असलेली पाने**

- **Interactive Map:** बाजूच्या मेनूशिवाय पूर्ण रुंदीचे पान. वर क्रीम रंगाची पट्टी आणि खाली गडद कॅनव्हास.
- **View Lead:** पूर्ण स्क्रीन पॅनल. डावीकडे गडद ग्रेडियंट माहिती कार्ड, उजवीकडे इतिहासाची टाइमलाइन.
- **Add New Lead:** डावीकडे गडद "live preview" कार्ड, उजवीकडे फॉर्म.

### 3.3 रंग आणि टोकन्स

| टोकन / घटक | मूल्य (नोंदीनुसार) |
|---|---|
| `--primary` | जवळजवळ काळा, hsl(0,0%,11%). आधीच्या अहवालात #1C1C1C. |
| `--background` | पांढरा |
| पानाची पार्श्वभूमी | #f5f5f5 |
| कार्ड्स | पांढरी |
| `--radius` | 0.5rem (सुमारे 8px गोलसर कोपरे) |
| `--border` | hsl(0,0%,87%) |
| `--success` | हिरवा, hsl(132,83%,39%) |
| `--destructive` | लाल |
| ॲक्सेंट | "micro green gradient", #16b98d ते #0b5d47 |
| चार्टचे रंग | केशरी, टील, गडद स्लेट, पिवळा, पीच |
| गडद थीम | पूर्ण `.dark` थीम. त्यात आयकॉन्स पुदिना-हिरव्या रंगाचे. |

काळ्या रंगात दिसणारे भाग: वरचा पट्टा, टेबलचा हेडर, मुख्य बटणे, मेनूतील चालू पानाची पट्टी. कोणता भाग कोणते टोकन वापरतो, हे नोंदवलेले नाही.

### 3.4 वारंवार दिसणारे घटक

| घटक | कसा दिसतो | कुठे दिसला |
|---|---|---|
| KPI कार्ड | आयकॉन, नाव आणि मोठा आकडा. आधीच्या अहवालानुसार आयकॉन आणि मजकुराच्या मध्ये उभी रेषा. | Dashboard (3x3 ग्रिड), Manage Sales, Inventory, Manage Properties, Sales Command Center |
| Statistics कार्ड्स | प्रत्येक प्रकारासाठी एक कार्ड, लोगो किंवा नाव आणि संख्या. वर "By ..." ड्रॉपडाउन. | Manage Leads ("By Source Type"), Manage Projects ("By Project Type"), Tasks ("By Priority") |
| फिल्टरचा पट्टा | शोध, "Advanced filter" आयकॉन, रिफ्रेश आणि कॉलम सेटिंग्ज (गिअर), एका ओळीत | बहुतेक यादीची पाने |
| फिल्टर पिल्स | "All / Active / Inactive", "All / Pending / Converted" | Lead Tags, Manage Projects, Cold Leads |
| टॅग चिप्स | आडवे सरकणारे टॅग्ज | Manage Leads |
| टेबल | काळा हेडर. काही कॉलम्सवर क्रम लावता येतो. उजवीकडे चिकटलेला "Action" कॉलम. ओळीवर "..." मेनू. खाली पाने आणि page size निवड (10). | बहुतेक यादीची पाने |
| मुख्य बटण | काळे. वर उजवीकडे काळे "+" बटण. | Manage Projects, Manage Properties, Tasks, Bulk Whatsapp |
| दुय्यम बटण | पांढरे, बॉर्डरचे, उदा. "Re Assign" | Manage Leads |
| राखाडी बटण | "Follow-ups" | Sales Command Center |
| पैसे मान्य करण्याचे बटण | हिरवे ग्रेडियंट, "Confirm Payment" | Verify Payment |
| आयात / निर्यात | वर उजवीकडे आयकॉन बटणे | Manage Leads, Manage Properties |
| स्टेटस बिल्ले | केशरी "Available"; लाल "Due"; हिरवा "Paid"; केशरी "Lead Age: N Days"; "WITHOUT LOAN" / "LOAN" | Manage Properties, CLP Payments, View Lead, Verify Payment |
| डुप्लिकेटचा बिल्ला | लीड क्रमांकाजवळ लहान लाल "D" | Manage Leads |
| चिप्स | राखाडी चिप्स (Project Type); Residential / Commercial चिप्स | Manage Projects, Manage Land |
| टॉगल स्विच | ओळीतील "Status" कॉलममध्ये | Manage Projects, Manage Properties |
| पूर्ण स्क्रीन पॅनल | डावीकडे गडद ग्रेडियंट कार्ड (पेन्सिलसह), उजवीकडे उभी टाइमलाइन | View Lead |
| नवीन नोंदीचा फॉर्म | डावीकडे गडद "live preview" कार्ड, टाइप करताना मूल्ये लगेच दिसतात. उजवीकडे उघडता-मिटता येणारे दोन कॉलमचे फॉर्म कार्ड. खाली Cancel / Save. | Add New Lead |
| ड्रॉपडाउन | गडद रंगाचे, आत शोधता येणारे | Add New Lead (Source Type) |
| फोन फील्ड | देशाचा कोड झेंड्यासह (+91) | Add New Lead, Add New Project |
| तारीख निवड | "DD MMM YYYY" स्वरूप | Add New Lead |
| रिकामी यादी | छोटे चित्र आणि "Looks like there is no data." संदेश | Sales Command Center |
| सेटिंग्जची ग्रिड | प्रत्येक कार्डवर आयकॉन, नाव आणि एका ओळीचे वर्णन | Settings & Configuration |
| सेटिंगची ओळ | नाव, मदतीचा मजकूर आणि नियंत्रण (संख्या, टॉगल, अनेक पर्याय निवडण्याची यादी) | Booking Settings |
| टेबलवरचा थेट फॉर्म | टेबलच्या वर "Add New" फॉर्म, Cancel / Save | Extra Charges |
| चार्ट्स | गोल (डोनट), रेषा / क्षेत्र (line / area). "Weekly" किंवा "Week / Months" बटण, तारीख श्रेणी. | Dashboard, Lead Reports, Manage Sales |
| कॅल्क्युलेटर | "Open calculator" | Add New Property, Broker Payment |
| स्प्लिट बटण | "Call" | View Lead |
| टोस्ट संदेश | उदा. "Failed - Too many requests, please try again later." | Add New Project पानावर असताना |

---

## 4. मुख्य घटक (Data entities) आणि त्यांचे नाते

### 4.1 मुख्य रचना

```
जमीन (Land)
  └─ प्रोजेक्ट (Project)  ──  CLP योजना ("Define CLP")
       └─ युनिट (Property / Unit)  ──  मायक्रोसाइट

लीड (Lead)  ──  युजर (Assign To, Primary User, Secondary User)
  ├─ पाहिलेले युनिट (Lead Visited Property)
  ├─ जुळणारे युनिट (Available Property Based On Lead)
  ├─ कोटेशन (Quotation, PBQ No.)
  └─ बुकिंग ("Book")  →  ग्राहक (Customers)
        ├─ बुकिंगचे पैसे (Verify Payment, Reference No.)
        ├─ पेमेंटच्या अटी (ग्राहक + बँक)
        ├─ CLP हप्ते  →  स्मरणे
        ├─ कर्ज (Loan)
        ├─ ब्रोकरचे कमिशन (Broker Payment)
        └─ परतावा (Refund Booking Payments)
```

### 4.2 नाती आणि त्यांचा आधार

| नाते | नोंदीतील आधार |
|---|---|
| प्रोजेक्ट एका जमिनीवर तयार होतो | Add New Project मध्ये "Select Land*"; Manage Projects मध्ये "Land Name" कॉलम. एका जमिनीवर किती प्रोजेक्ट्स होऊ शकतात, हे नोंदीत नाही. |
| युनिट एका प्रोजेक्टचे असते | Add New Property मध्ये "Select Project"; Manage Properties मध्ये "Project Name" |
| प्रोजेक्टचे CLP टप्पे | Add New Project चा दुसरा टप्पा "Define CLP"; परवानगी "Update Project CLP Phases" |
| लीडची गरज प्रोजेक्ट/प्रकाराशी | Add New Lead मध्ये Project, Project Unit Sub Type, Property Type; View Lead मधील Requirement भाग |
| लीड आणि पाहिलेले युनिट | "Add Visited Property"; "Lead Visited Property" टेबल |
| लीड आणि जुळणारे युनिट | "Available Property Based On Lead" (गरजेनुसार आपोआप) |
| लीडवरून कोटेशन | ओळीच्या मेनूत "Create Quotation"; Quotations मध्ये "Lead" कॉलम |
| लीडवरून बुकिंग | Manage Leads मध्ये "Book" बटण |
| रूपांतरित लीड म्हणजे ग्राहक | Customers यादीत "Lead No." कॉलम |
| लीड आणि युजर | Assign To, Assignee, Primary User, Secondary User |
| लीड आणि ब्रोकर | स्रोत "Broker"; Broker reports; Broker Payment मध्ये "Lead Name" |
| बुकिंग आणि पैसे | Verify Payment मध्ये Lead No., Reference No., Block Name, Purchase |
| बुकिंग आणि CLP हप्ते | CLP Payments मध्ये प्रत्येक हप्त्याची ओळ |
| बुकिंग आणि कर्ज | Manage Loan मध्ये Lead, Project |
| ग्राहक आणि पेमेंटच्या अटी | Payment Terms मध्ये Project आणि Customer निवड |
| ग्राहक आणि दस्त | Generate Documents मध्ये Project Name, Customer Name आणि साचा |
| प्रोजेक्ट आणि बँक | "Financer Banks Details"; Manage Projects मध्ये "Financer Bank Name" |
| बँक खाते आणि जमा रक्कम | Bank-wise Collection मध्ये प्रत्येक बँक खात्याची ओळ |
| कंत्राटदार, कंत्राट आणि प्रोजेक्ट | Manage Contract मध्ये Project आणि contractor निवड, "Project Name" कॉलम |
| MQR आणि स्टोअर | MQR मध्ये "Store" कॉलम |
| Credit/Debit Note आणि खरेदी | Note मध्ये Purchase Order Count, GRN Count, Supplier, Store, Project |
| युजर आणि टीम / लक्ष्य / हजेरी / परवानग्या | Cold Leads मध्ये "Team"; Manage Targets मध्ये "User"; Attendance मध्ये "Name"; Permissions मध्ये "Individuals" |
| टास्क आणि युजर | "Author Name", "Assigned To" |
| तिकीट आणि युजर | "Author", "Assign To" |
| मोहीम आणि प्रेक्षक | Bulk Whatsapp मध्ये "Audience". प्रेक्षक Contact (Address Book) मधून येतात का, हे नोंदीत नाही. |

### 4.3 घटकनिहाय माहिती

प्रत्येक घटकाची नोंदींमध्ये दिसलेली फील्ड्स खाली आहेत. सविस्तर टेबल्स विभाग 5 मध्ये संबंधित पानाखाली आहेत.

#### 4.3.1 जमीन (Land)

- **फील्ड्स:** Name, Property Type (Residential / Commercial), Occupancy Status, Status.
- **शोध:** land name / property type / occupancy.
- **नकाशा:** Map View मध्ये जमिनी दिसतात, म्हणजे जमिनीचे ठिकाण नोंदवलेले असते (अनुमान).
- **मायक्रोसाइट:** "Land Microsite" हा लीडचा स्रोत आहे, म्हणजे जमिनीचीही मायक्रोसाइट असते (अनुमान).
- **अपूर्ण माहिती:** Add New Land चा फॉर्म उघडला नाही.

#### 4.3.2 प्रोजेक्ट (Project)

- **मूळ माहिती:** Upload Photo, Plot Based Project, Select Land, Project Name, Project Type, Rent / Buy, Project Category, Project Status, Project Budget (₹) min-max, Project Start Date, Project Completion Date.
- **संपर्क आणि पत्ता:** Phone Number, Email, Website, Project Full Address, City, Postal/zip Code, Google Maps Link, Latitude, Longitude.
- **नोंदणी:** RERA/Govt Registration Number, Project Registration Number, GST Number, PAN Number, Government Approved.
- **माध्यमे:** Layout Plan, 360 Degree View Link, Images, Videos, Brochure, RERA Documents, Near By Locations.
- **इतर:** Amenities, Promoter Details (Name, Contact Number, Documents), About (Title, Description), Financer Banks Details (Bank).
- **यादीतील इतर कॉलम्स:** Promoter Name, Promoter Number, Financer Bank Name, Project Unit Sub Type, Budget Range, Status (टॉगल).
- **CLP:** दुसरा टप्पा "Define CLP" (बांधकामाशी जोडलेली हप्ता योजना).

#### 4.3.3 युनिट (Property / Unit)

- **फील्ड्स:** Select Project, Flat Number (उदा. B12-204), Budget (₹) min-max, Vastu Compliant, PLC Applicable, Property Area, Super Built-Up Area, Built-Up Area, Carpet Area, क्षेत्रफळाचे एकक ("Square Feet"), Budget/Area min-max, Property facing feature, Tags, No. of Balconies / Bathrooms / Bedrooms / Kitchens / Drawing Rooms / Parking Lot, 360 Degree View Link, Images, Videos, Brochure, About Property.
- **यादीतील कॉलम्स:** Property Status, Project Name, Unit No., Property Type, Budget Range, Floor Name, Property Area, Facing, Status (टॉगल).
- **इन्व्हेंटरीतील कॉलम्स:** Project Unit Sub Type (Apartments, Office ...), Block / Area Name, Site/Project Name.
- **मायक्रोसाइट:** प्रत्येक युनिटची स्वतःची, शेअर करता येणारी मायक्रोसाइट.
- **स्थिती (Inventory Analytics):** Available, Rent, Booked, Sold, Temporary Booked, Temporary Rent, On Rent Temporary Booked.

#### 4.3.4 लीड (Lead)

- **ओळख:** Lead No., Name, Primary Phone, Secondary Phone, WhatsApp Number, Email Address, Date of Birth, Occupation, Employer Name.
- **स्रोत:** Source Type, Sub Source Type, Received Date.
- **गरज:** Budget (₹) min-max, Buying Timeline, Project, Project Unit Sub Type, Property Type, Rent / Buy, Client Preference, Interested Area, Preferred Facing, Purpose of Purchase, Funding Mode, Plot Based Lead, Residential Plot Size, Luxury Villa Size, Corner Plot Required, Other Requirements.
- **View Lead मधील गरजेची फील्ड्स:** Project, Project Type, Sub Type, Furnishing Status, Interested Area, Country, State, City, Facing, Vastu Compliant.
- **पत्ता:** Lead Address, City, Longitude, Latitude, Postal/Zip Code.
- **वाटप:** Assign To, Assignee, Primary User, Secondary User, Lead Tags.
- **स्थिती आणि वेळ:** Lead Status, Last Activity, Last Contact, Lead Age, Created On, Updated On.
- **संवाद:** Communication Type, Meeting Date and Time, Site Visit Status, Follow Up / Next Meeting.
- **इतिहास:** Lead Note आणि Lead Assignment च्या नोंदी, वेळेसह.
- **इतर:** Lead Type (Sales Command Center मध्ये), डुप्लिकेटचा "D" बिल्ला.

#### 4.3.5 ग्राहक (Customer)

- रूपांतरित झालेला लीड म्हणजे ग्राहक.
- **यादीतील कॉलम्स:** Name, Lead No., Contact, Email, Project, Lead Status.
- **ग्राहक निवडल्यावर दिसणारी माहितीपट्टी:** Name, Mobile Number, Property Purchase, Details, Sale Price, Token Amount, PAN Number, Aadhar Card, Received Date (Payment Terms). Generate Documents मध्ये यातील पहिले सहा.

#### 4.3.6 कोटेशन (Quotation)

- **फील्ड्स:** PBQ No. (कोटेशन क्रमांक), Lead, Project, Property Type, Block / Area Name, Sale Price (Saleable Price), Min Budget, Booking Amount, Booking Date, Booking Amount Due Date, Quotation Valid Date, Payment Term (उदा. Loan), Contributor (उदा. Bank), Is Approved By Client (Yes / No).
- **नियम:** वैधतेचे दिवस Booking Settings मधील "Quotation Validity Period (days)" ने ठरतात. मान्य न झालेल्या कोटेशनवर बुकिंग होईल का, हे "Can Book Unapproved Quote" ने ठरते.

#### 4.3.7 बुकिंग आणि बुकिंगचे पैसे

- **बुकिंग:** लीडच्या ओळीवरील "Book" बटणाने सुरू होते. स्थिती: Temporary Booked (तात्पुरते बुकिंग), Booked, Sold. भाड्यासाठी Temporary Rent, Rent, On Rent Temporary Booked.
- **बुकिंगचे पैसे (Verify Payment):** Lead No., Lead Name, Reference No. ("#PROPAY/<PROJECT>/<YEAR>/<N>" स्वरूप), Block Name, Purchase ("WITHOUT LOAN" किंवा "LOAN").
- **विक्रीतील इतर फील्ड्स:** Flat/Shop No., Booking Amount, Sale Price, Finance Status, Token Amount, Booking Date.
- **पैसे भरण्याच्या पद्धती:** Online, Cheque, Cash.
- **खातेवही:** Payment For (उदा. "Property payment"), Project, Payment Mode, Amount, Received On; Summary मध्ये Name, Debit, Credit.

#### 4.3.8 CLP हप्ता

- प्रत्येक हप्ता स्वतंत्र ओळ.
- **फील्ड्स:** Name (टप्प्याचे नाव), Amount, Sale Price, Payment Status ("Due" / "Paid"), Payment Mode (Online / Cheque), Purchase.
- **टप्प्यांच्या नावांची उदाहरणे:** BOOKING AMOUNT, PLINTH, 1ST SLAB, 2ND SLAB, 3RD SLAB, 4TH SLAB, 2nd Floor.
- **स्मरण:** प्रत्येक ओळीवरून "Send Reminder", किंवा Send CLP Reminder पानावरून Project आणि Due Date नुसार एकत्र.
- **उशिरावर व्याज:** Booking Settings मध्ये "Interest Frequency" आणि "Compound Interest Enabled".

#### 4.3.9 कर्ज (Loan)

- **फील्ड्स:** Lead, Project, Loan Account No, Requested Amount, Sanctioned Amount, Disbursed Amount, Self Funding Amount, Loan Status (उदा. Sanctioned), Applicants.
- शोधात "branch" आहे, म्हणजे बँकेची शाखा नोंदवली जाते (अनुमान).
- बँकेचे मंजुरीपत्र (sanction letter) Payment Terms पानावर अपलोड होते.

#### 4.3.10 ब्रोकर (Broker)

- **फील्ड्स:** Name, Contact, Email, Country, State, City, Real Estate License No., Expiration Date (परवान्याची मुदत), Status.
- **कमिशन:** Broker Payment मध्ये Broker Name, Broker Commission, Lead Name, Contact Number, Property Type, Block / Area Name, Booking Date.
- **अहवाल:** Broker reports (Lead Reports) आणि Broker Performance (Manage Sales).

#### 4.3.11 कंत्राटदार आणि कंत्राट

- **कंत्राट (Manage Contract):** Name, Phone No., Email, Project Name, Reg./License No., Amount, Balance, Generated Reference No.
- **संबंधित पाने:** Contract Timeline, Make Contract Payments, Manage Contract Payments (उघडले नाही).
- **परवानग्यांचे गट:** Contractors, Contractor Contracts, Contract Payments.

#### 4.3.12 साहित्य, MQR, PO, GRN आणि स्टोअर

- **MQR:** MQR No., Issue Date, Due Date, Store, Quotation Count, Status.
- **Credit/Debit Note:** Note No., Purchase Order Count, GRN Count, Note Type, Note Date, Project, Supplier, Total Materials, Store, Total Amount, Created By.
- **साहित्य, पुरवठादार, PO, GRN, स्टोअर, MSIR, MSRR, SMTR:** फक्त मेनूवरून माहिती, उघडले नाही. त्यांची फील्ड्स नोंदींमध्ये नाहीत.

#### 4.3.13 युजर, टीम, विभाग, पद, लक्ष्य आणि हजेरी

- **युजर:** Full Name, Contact Number, Email, Status.
- **टीम:** Cold Leads मध्ये "Team" कॉलम. Manage Teams पान उघडले नाही.
- **विभाग (Department):** मार्ग `/users/group-department`. परवानग्यांमध्ये "Group" या नावाने. पान उघडले नाही.
- **पद (Designation):** मार्ग `/master/designation-list`. पान उघडले नाही.
- **लक्ष्य:** User; शोध "sale or lead targets / achievements".
- **हजेरी:** Name, Date, In Time, Late In, Late Out, Total Hours. शिफ्टच्या वेळा Settings > Attendance मध्ये.

#### 4.3.14 टास्क (Task)

- **फील्ड्स:** Task No., Name, Priority (Critical, High, Medium, Low), Date, Due Date, Author Name, Assigned To, Status.

#### 4.3.15 संपर्क आणि मोहीम (Contact, Campaign)

- **संपर्क (Address Book):** Name, Email, Phone No., Address. टॅग/गटानुसार निवड ("All").
- **मोहीम (Campaign List):** Name, Audience, Billing Amount, Schedule Time, Status.
- **पाकीट:** Balance (प्रीपेड).

#### 4.3.16 दस्तांचा साचा (Document template)

- **फील्ड्स:** Template Name, Document Type, Created On, Updated On.
- दस्त प्रत्येक ग्राहकासाठी साच्यावरून तयार होतात.

#### 4.3.17 तिकीट (Ticket)

- **फील्ड्स:** Ticket No, title, Priority (उदा. Low), Ticket Status (उदा. Pending), Category, Author, Assign To.

#### 4.3.18 भाडे आणि खर्च

- **भाडे:** Manage Rent मध्ये प्रोजेक्ट आणि Residential / Commercial निवड, मग युनिट्सचा ग्रिड. Tenant Listing आणि Rent Collection उघडले नाही.
- **खर्च (Expense Register):** Payee Name, Total Amount, Total Payable Amount, Total Items, Payment Mode.
- **खर्चाचे मास्टर:** Expense Types, Expense Sub Types, Manage Payee (उघडले नाही).

#### 4.3.19 इतर मास्टर याद्या

| मास्टर यादी | कुठे | नोंदीतील माहिती |
|---|---|---|
| Lead Tags | `/leads/lead-tags` | Name, Status |
| Lead Types | Settings | फक्त कार्डचे नाव |
| Inventory Tags | Settings | फक्त कार्डचे नाव |
| PLC (Preferential Location Charges) | Settings | फक्त कार्डचे नाव |
| Plot Categories | Settings | फक्त कार्डचे नाव |
| Extra Charges | `/master/extra-charges-list` | Name, Amount, Tax Percentage, Created On, Updated On, Status |
| Contact Tag | Marketing & Campaigning | उघडले नाही |
| Bank | Add Bank, Manage Bank | उघडले नाही |
| Designations, Departments | User Management | उघडले नाही |

### 4.4 स्थितींच्या आणि पर्यायांच्या याद्या

| कशाची | मूल्ये (स्क्रीनवर) | कुठे |
|---|---|---|
| युनिटची स्थिती | Available, Rent, Booked, Sold, Temporary Booked, Temporary Rent, On Rent Temporary Booked | Dashboard, Inventory |
| लीडची स्थिती | "On going" दिसले. अहवालांत On going, Temporary converted, Converted, Dropped, Refunded असे कॉलम्स. | Manage Leads, Lead Reports |
| विक्रीची पाइपलाइन | Lead in, Follow up, Negotiation, Quotation sent, Converted, Closed lost | Sales Command Center |
| लीड टॅग्ज | Cold, Converting, Escalated, High Priority, Highlighted, Hot, Not Interested, Re-engaged, Warm | Manage Leads |
| कॉलचे निकाल | Call Later, Call Not Picked, Language Issue, Not Interested, Out of Service | Cold Leads |
| Cold Leads फिल्टर | All, Pending, Converted | Cold Leads |
| मास्टर यादीचा फिल्टर | All, Active, Inactive | Lead Tags, Manage Projects |
| लीडचे स्रोत (कार्ड्स) | Direct, Broker, 99 Acres, Magic Bricks, Housing.com, Proptiger, Square Yard, IVR, Land Microsite, Project Microsite, Property Microsite, Meta Ads, Website, OLX | Manage Leads |
| Source Type (फॉर्म) | Broker, Direct, Reference, Online ... | Add New Lead |
| प्रोजेक्टचा प्रकार | Residential, Commercial, "Commercial, Residential" | Manage Projects |
| प्रोजेक्टची स्थिती | उदा. "Yet to start" | Add New Project |
| युनिटचा उप-प्रकार | उदा. Apartments, Office | Inventory, Add New Lead |
| खरेदीचा प्रकार | WITHOUT LOAN, LOAN | Verify Payment |
| हप्त्याची स्थिती | Due, Paid | CLP Payments |
| पैसे भरण्याची पद्धत | Online, Cheque, Cash | CLP Payments, Ledger Payments |
| परताव्याची स्थिती | Paid | Refund Booking Payments |
| कर्जाची स्थिती | उदा. Sanctioned | Manage Loan |
| टास्कचे प्राधान्य | Critical, High, Medium, Low | Tasks |
| तिकिटाचे प्राधान्य | उदा. Low | Manage Tickets |
| तिकिटाची स्थिती | उदा. Pending | Manage Tickets |
| Search Duplicate पर्याय | Includes visited property: All, Yes, No | Search Duplicate |
| कोटेशन मान्य | Is Approved By Client: Yes, No | Compare Quotation |
| खरेदी की भाडे | Rent / Buy | Add New Lead, Add New Project |
| खरेदीची वेळ | उदा. "0 TO 3 months" | Add New Lead |

इतर स्थितींची पूर्ण यादी (उदा. कर्ज, टास्क, तिकीट, MQR, मोहीम) नोंदींमध्ये नाही.

---

## 5. मॉड्यूलनिहाय फीचर्स

प्रत्येक पानासाठी हा क्रम ठेवला आहे: उद्देश, फील्ड्स / कॉलम्स, फिल्टर्स, क्रिया / बटणे, नियम आणि संबंधित पाने. एखादी गोष्ट नोंदींमध्ये नसेल तर "नोंद नाही" असे लिहिले आहे.

### 5.1 Dashboard

- **मार्ग:** नोंद नाही.
- **उद्देश:** विक्री, भाडे आणि इन्व्हेंटरीचा एका नजरेत आढावा, सर्व प्रोजेक्ट्सचा किंवा निवडलेल्या एका प्रोजेक्टचा.
- **वरचा भाग:** "Welcome, <युजरचे नाव>" आणि प्रोजेक्ट निवडण्याचा ड्रॉपडाउन ("All").

**KPI कार्ड्स (3x3 ग्रिड)**

| कार्ड (स्क्रीनवर) | अर्थ |
|---|---|
| Total Sale Revenue | विक्रीतून आलेले एकूण उत्पन्न |
| Total Sale Amount Required | विक्रीपोटी अजून येणे असलेली रक्कम (आधीच्या अहवालानुसार "बाकी रक्कम") |
| Total Sold Units | विकलेली युनिट्स |
| Total Booked Units | बुक झालेली युनिट्स |
| Total Refunded Amount | ग्राहकांना दिलेला एकूण परतावा |
| Total Booking Cancelled | रद्द झालेली बुकिंग्ज |
| Total Rent Revenue | भाड्यातून आलेले उत्पन्न |
| Total Rent Amount Required | भाड्यापोटी अजून येणे असलेली रक्कम |
| Total Rented Units | भाड्याने दिलेली युनिट्स |

**विजेट्स**

| विजेट (स्क्रीनवर) | काय दाखवते | बटण |
|---|---|---|
| Inventory Analytics | गोल (डोनट) चार्ट. स्थिती: Available, Rent, Booked, Sold, Temporary Booked, Temporary Rent, On Rent Temporary Booked. | "See All" |
| Total Leads | रेषा / क्षेत्र चार्ट | "Weekly" |
| Total Bookings | चार्ट | "Weekly" |
| Leads Source | स्रोतानुसार लीड्स | "See All Leads" |
| Properties Listed | युनिट्सचे टेबल, page size 10, पाने. कॉलम्स नोंदवलेले नाहीत. | "See All Properties" |

- **फिल्टर्स:** प्रोजेक्ट ("All" किंवा एक प्रोजेक्ट).
- **क्रिया / बटणे:** "See All", "See All Leads", "See All Properties", "Weekly".
- **नियम:** परवानग्यांमध्ये "Dashboard Info Count" अशी वेगळी परवानगी आहे. म्हणजे हे आकडे कोणाला दिसावेत हे ठरवता येते (अनुमान).
- **संबंधित पाने:** Inventory, Manage Leads, Manage Properties, Manage Sales.

### 5.2 Lead Management

#### 5.2.1 Manage Leads

- **मार्ग:** `/leads/manage-leads?mod=all-lead`
- **शीर्षक:** "All Leads (<संख्या>)" आणि दृश्य बदलण्याचा ड्रॉपडाउन (All Leads / Team's Leads इत्यादी).
- **उद्देश:** सर्व लीड्सची मुख्य यादी. येथून शोध, फिल्टर, वाटप, बुकिंग आणि लीडवरील पुढच्या क्रिया होतात.

**Statistics: "By Source Type"**

प्रत्येक स्रोतासाठी लोगो आणि लीड्सची संख्या असलेले एक कार्ड:

| स्रोत कार्ड | प्रकार |
|---|---|
| Direct | थेट आलेले |
| Broker | ब्रोकरमार्फत |
| 99 Acres | प्रॉपर्टी पोर्टल |
| Magic Bricks | प्रॉपर्टी पोर्टल |
| Housing.com | प्रॉपर्टी पोर्टल |
| Proptiger | प्रॉपर्टी पोर्टल |
| Square Yard | प्रॉपर्टी पोर्टल |
| OLX | जाहिरातींचे पोर्टल |
| IVR | फोन प्रणाली |
| Land Microsite | जमिनीची मायक्रोसाइट |
| Project Microsite | प्रोजेक्टची मायक्रोसाइट |
| Property Microsite | युनिटची मायक्रोसाइट |
| Meta Ads | Facebook / Instagram जाहिराती (Meta) |
| Website | वेबसाइट |

"By Source Type" ड्रॉपडाउनमधील इतर पर्याय नोंदवलेले नाहीत.

**टेबलचे कॉलम्स (काळा हेडर)**

| कॉलम (स्क्रीनवर) | अर्थ | नोंद |
|---|---|---|
| S.No. | अनुक्रमांक | |
| (चेकबॉक्स) | एकत्र क्रियेसाठी ओळ निवडणे | Bulk Assign / Bulk Delete साठी |
| Lead No. | लीड क्रमांक, उदा. #683 | क्रम लावता येतो. संभाव्य डुप्लिकेटवर लहान लाल "D" बिल्ला. |
| Name | लीडचे नाव | क्रम लावता येतो |
| Contact Number | फोन नंबर | +91 लिंक; क्लिक करून फोन लागतो |
| Email | ईमेल | |
| Lead Status | लीडची स्थिती | उदा. "On going" |
| Action | ओळीवरील क्रिया | चिकटलेला कॉलम: "Re Assign", "Book", "..." |

**फिल्टर्स**

| फिल्टर (स्क्रीनवर) | अर्थ |
|---|---|
| शोध | lead name / contact number / email / lead no |
| Assigned Date | लीड वाटप झाल्याची तारीख |
| Schedule Date | ठरलेल्या भेटीची / मीटिंगची तारीख (अनुमान) |
| Follow up date | पाठपुराव्याची तारीख |
| Assign To | कोणाला वाटप झाले |
| Advanced filter | आणखी फिल्टर्स. आतील पर्याय नोंदवलेले नाहीत. |
| टॅग चिप्स | Cold, Converting, Escalated, High Priority, Highlighted, Hot, Not Interested, Re-engaged, Warm (आडवे सरकणारे) |
| दृश्य ड्रॉपडाउन | All Leads / Team's Leads इत्यादी |

**क्रिया / बटणे**

- वर उजवीकडे: आयात आणि निर्यात आयकॉन बटणे, आणि एक काळे मुख्य बटण. त्याचे लेबल नोंदवलेले नाही.
- एकत्र क्रिया: **Bulk Assign**, **Bulk Delete** (ओळींचे चेकबॉक्स निवडून).
- ओळीवर: **Re Assign** (बॉर्डरचे बटण), **Book** (काळे बटण), **"..."** मेनू.
- खाली पाने आणि page size निवड (10).

**ओळीचा "..." मेनू**

| पर्याय (स्क्रीनवर) | काय करतो |
|---|---|
| View Lead | लीडचा पूर्ण स्क्रीन पॅनल उघडतो |
| Edit Lead | लीडची माहिती बदलणे |
| Delete Lead | लीड हटवणे |
| Add Note | लीडवर नोंद लिहिणे (History मध्ये "Lead Note") |
| Add Visited Property | साइट व्हिजिटमध्ये पाहिलेली प्रॉपर्टी नोंदवणे |
| Create Quotation | या लीडसाठी कोटेशन तयार करणे |
| Send Micro Site Link | मायक्रोसाइटची लिंक पाठवणे |
| Send Project Website | प्रोजेक्टची वेबसाइट पाठवणे |
| Send Location | ठिकाण (लोकेशन) पाठवणे |
| Call | फोन करणे |

**नियम**

- पोर्टल, जाहिरात आणि मायक्रोसाइटवरून लीड्स आपोआप येतात, असे नोंदीत आहे.
- संभाव्य डुप्लिकेट लीडवर लाल "D" बिल्ला दिसतो. डुप्लिकेट कसा ओळखला जातो (फोन, ईमेल इ.), हे नोंदीत नाही.
- लिंक्स आणि लोकेशन कोणत्या माध्यमातून (WhatsApp, SMS, Email) जातात, हे नोंदीत नाही.

**संबंधित पाने:** View Lead, Add New Lead, Search Duplicate, Lead Tags, Quotations, Sales Command Center, Connect Accounts.

#### 5.2.2 View Lead

- **मार्ग:** Manage Leads वरच `?viewLead=open&LID=<id>`. हा पूर्ण स्क्रीन पॅनल आहे, वेगळे पान नाही.
- **उद्देश:** एका लीडची सगळी माहिती, संवाद, इतिहास, गरज आणि जुळणारी युनिट्स एकाच ठिकाणी.
- **वरचा पट्टा:** बंद करण्याचे X, "View Lead #N", "Call" स्प्लिट बटण, काळे "Send Micro Site Link" बटण.

**डावे माहिती कार्ड (गडद ग्रेडियंट, पेन्सिलने बदलता येते)**

| Field (स्क्रीनवर) | अर्थ |
|---|---|
| Lead No | लीड क्रमांक |
| Lead Name | लीडचे नाव |
| Primary Contact No | मुख्य फोन |
| Source | स्रोत |
| Is Plot Based Lead | प्लॉटसाठीचा लीड आहे का |
| Assign To (+ Re Assign) | कोणाला वाटप; येथूनच पुन्हा वाटप |
| Budget (min-max) | बजेटची किमान-कमाल मर्यादा |
| Buying Timeline | खरेदी कधीपर्यंत करणार |
| Lead Status | लीडची स्थिती |
| Other Requirements | इतर गरजा. Meta च्या फॉर्ममधून आलेल्या लीडसाठी जाहिरातीच्या फॉर्मचे नाव आणि प्रश्न-उत्तरे येथे दिसतात. |
| Last Activity | शेवटची क्रिया |
| Received Date | लीड मिळाल्याची तारीख |
| Assignee | ज्याला वाटप झाले तो युजर |
| Primary User | मुख्य जबाबदार युजर |
| Secondary User | दुय्यम जबाबदार युजर |
| Created On | नोंद तयार झाल्याची तारीख |
| Updated On | शेवटचा बदल |

**Most Recent Communication (शेवटचा संवाद)**

| Field (स्क्रीनवर) | अर्थ |
|---|---|
| Communication Type | संवादाचा प्रकार |
| Meeting Date and Time | मीटिंगची तारीख आणि वेळ |
| Site Visit Status | साइट व्हिजिटची स्थिती |
| Follow Up / Next Meeting | पुढचा पाठपुरावा / पुढची भेट |

**History कार्ड**

- केशरी बिल्ला "Lead Age: N Days" (लीड किती दिवसांचा आहे).
- "Add Note" बटण.
- फिल्टर (रेडिओ): All / Lead Note / Lead Assignment.
- रिफ्रेश बटण.
- उभी टाइमलाइन, प्रत्येक नोंदीला वेळ. उदा. "Lead Assigned to <युजर>", "Primary Assigned - <युजर>".

**Requirement (गरज)**

| Field (स्क्रीनवर) | अर्थ |
|---|---|
| Project | प्रोजेक्ट |
| Project Type | प्रोजेक्टचा प्रकार |
| Sub Type | उप-प्रकार |
| Furnishing Status | फर्निचरची स्थिती |
| Interested Area | आवडीचा भाग |
| Country, State, City | देश, राज्य, शहर |
| Facing | दिशा |
| Vastu Compliant | वास्तुनुसार हवे का |

**"Lead Visited Property" टेबल**

| कॉलम (स्क्रीनवर) | अर्थ |
|---|---|
| S.No. | अनुक्रमांक |
| Site/Project Name | साइट / प्रोजेक्ट |
| Visited Date Time | व्हिजिटची तारीख आणि वेळ |
| Property Type | प्रॉपर्टीचा प्रकार |
| Price Range | किंमतीची श्रेणी |
| Action | क्रिया (पर्याय नोंदवलेले नाहीत) |

**"Available Property Based On Lead" टेबल**

| कॉलम (स्क्रीनवर) | अर्थ |
|---|---|
| S.No. | अनुक्रमांक |
| Site/Project Name | साइट / प्रोजेक्ट |
| Block / Area Name | ब्लॉक / भाग |
| Property Type | प्रॉपर्टीचा प्रकार |
| Budget Range | बजेटची श्रेणी |
| Property Status | युनिटची स्थिती |
| Action | क्रिया (पर्याय नोंदवलेले नाहीत) |

- **फिल्टर्स:** History मध्ये All / Lead Note / Lead Assignment.
- **क्रिया / बटणे:** Call (स्प्लिट), Send Micro Site Link, पेन्सिल (बदल), Re Assign, Add Note, रिफ्रेश, बंद (X).
- **नियम:**
  - प्रत्येक लीडला मुख्य (Primary) आणि दुय्यम (Secondary) जबाबदार युजर असतो.
  - लीडचे वय दिवसांत आपोआप मोजले जाते.
  - लीडच्या गरजेनुसार उपलब्ध युनिट्स आपोआप जुळवून दाखवली जातात. जुळवण्याचे निकष नोंदीत नाहीत.
  - "Assign To", "Assignee" आणि "Primary User" यांतील फरक नोंदीत स्पष्ट नाही.
- **संबंधित पाने:** Manage Leads, Manage Properties, Inventory, Sales Command Center.

#### 5.2.3 Add New Lead

- **मार्ग:** `/leads/add`
- **उद्देश:** हाताने नवीन लीड नोंदवणे.
- **मांडणी:** डावीकडे गडद "live preview" कार्ड. टाइप करताना Lead Name, Primary Contact No., Secondary Contact No., WhatsApp Number, Email Address, Source Type ... यांची मूल्ये त्यावर लगेच दिसतात. उजवीकडे उघडता-मिटता येणारे दोन कॉलमचे फॉर्म कार्ड.
- **"Plot Based Lead" टॉगल:** चालू केल्यावर गरजेची फील्ड्स प्लॉटच्या आकारांची होतात.

**फील्ड्स (* = आवश्यक)**

| Field (स्क्रीनवर) | अर्थ | प्रकार / पर्याय |
|---|---|---|
| Name* | लीडचे नाव | मजकूर |
| Primary Phone* | मुख्य फोन | देशाचा कोड झेंड्यासह (+91) |
| Secondary Phone | दुसरा फोन | फोन |
| WhatsApp Number | WhatsApp नंबर | फोन |
| Email Address | ईमेल | मजकूर |
| Source Type* | लीडचा स्रोत | शोधता येणारा गडद ड्रॉपडाउन: Broker, Direct, Reference, Online ... |
| Sub Source Type | उप-स्रोत | पर्याय नोंदवलेले नाहीत |
| Budget (₹)* | बजेट | किमान-कमाल जोडी |
| Buying Timeline* | खरेदी कधीपर्यंत | निवड, उदा. "0 TO 3 months" |
| Project | प्रोजेक्ट | निवड |
| Project Unit Sub Type | युनिटचा उप-प्रकार | उदा. Apartments |
| Property Type | प्रॉपर्टीचा प्रकार | उदा. Commercial |
| Rent / Buy | भाडे की खरेदी | निवड |
| Client Preference | ग्राहकाची पसंती | पर्याय नोंदवलेले नाहीत |
| Interested Area | आवडीचा भाग | |
| Lead Address | पत्ता | मजकूर |
| City | शहर | |
| Longitude | रेखांश | संख्या |
| Latitude | अक्षांश | संख्या |
| Postal/Zip Code | पिन कोड | |
| Date of Birth | जन्मतारीख | तारीख |
| Received Date | लीड मिळाल्याची तारीख | तारीख, "DD MMM YYYY" |
| Assign To | कोणाला वाटप | युजर निवड |
| Lead Tags | टॅग | निवड |
| Occupation | व्यवसाय | |
| Employer Name | नोकरी देणारी कंपनी | मजकूर |
| Residential Plot Size | निवासी प्लॉटचा आकार | |
| Luxury Villa Size | व्हिलाचा आकार | |
| Preferred Facing | पसंतीची दिशा | |
| Purpose of Purchase | खरेदीचा उद्देश | पर्याय नोंदवलेले नाहीत |
| Funding Mode | पैशांची सोय कशी करणार | पर्याय नोंदवलेले नाहीत |
| Corner Plot Required | कोपऱ्याचा प्लॉट हवा का | टॉगल |
| Other Requirements | इतर गरजा | मजकूर |

- **फिल्टर्स:** लागू नाही (फॉर्म).
- **क्रिया / बटणे:** Plot Based Lead (टॉगल), Cancel, Save (दाबले नाही).
- **नियम:**
  - आवश्यक फील्ड्स: Name, Primary Phone, Source Type, Budget (₹), Buying Timeline.
  - "Plot Based Lead" ने कोणती फील्ड्स नेमकी बदलतात हे नोंदीत नाही. प्लॉटसंबंधी फील्ड्स म्हणजे Residential Plot Size, Luxury Villa Size, Corner Plot Required (अनुमान).
  - फॉर्ममधील Source Type चे पर्याय (Reference, Online) आणि Manage Leads मधील स्रोत कार्ड्स वेगळे आहेत.
- **संबंधित पाने:** Manage Leads, Lead Tags, Manage Users (Assign To साठी), Manage Projects.

#### 5.2.4 Cold Leads

- **मार्ग:** `/leads/cold-leads`
- **उद्देश:** टेलिकॉलिंग / IVR साठीचा लीड्सचा साठा.

**टेबलचे कॉलम्स**

| कॉलम (स्क्रीनवर) | अर्थ |
|---|---|
| S.No. | अनुक्रमांक |
| Assign To | वाटप |
| Name | नाव |
| Contact Number | फोन |
| Team | टीम |
| Default Primary | मूळ मुख्य युजर (अनुमान) |
| Default Secondary | मूळ दुय्यम युजर (अनुमान) |
| Lead Status | स्थिती |
| Assigned To | ज्याला वाटप झाले |
| Action | "Re Assign" |

**फिल्टर्स**

- पिल्स: All / Pending / Converted.
- "Advanced filter".
- शोध: "Agent No / Lead No / Virtual No" (एजंटचा नंबर, लीड क्रमांक, IVR चा व्हर्च्युअल नंबर).
- कॉलच्या निकालाचे टॅग्ज: Call Later, Call Not Picked, Language Issue, Not Interested, Out of Service.

**क्रिया / बटणे:** Bulk Assign, Bulk Delete, ओळीवर Re Assign.

**नियम**

- "Pending" आणि "Converted" पिल्सवरून, टेलिकॉलिंगनंतर लीड पुढे रूपांतरित होतो असे दिसते (अनुमान).
- "Assign To" आणि "Assigned To" हे दोन वेगळे कॉलम्स आहेत. त्यांतील फरक नोंदीत नाही.

**संबंधित पाने:** Manage Leads, Settings (IVR Recording, Transcription).

#### 5.2.5 Lead Reports

- **मार्ग:** `/leads/leads-reports` (मेनूतील नाव "Reports")
- **उद्देश:** विक्री कर्मचारी आणि ब्रोकरनुसार लीड्सचा निकाल.

**"User reports" टेबल (प्रत्येक विक्री कर्मचाऱ्यासाठी एक ओळ)**

| कॉलम (स्क्रीनवर) | अर्थ |
|---|---|
| Name | कर्मचाऱ्याचे नाव |
| Total Leads | एकूण लीड्स |
| On going | चालू लीड्स |
| Total site visits | एकूण साइट व्हिजिट्स |
| Temporary converted | तात्पुरते रूपांतरित (टोकन / तात्पुरते बुकिंग) |
| Converted | रूपांतरित (बुकिंग) |
| Dropped | सोडलेले |
| Refunded | रद्द होऊन परतावा दिलेले |

- **"Lead analysis":** गोल (डोनट) चार्ट, तारीख श्रेणी निवडीसह.
- **"Broker reports":** वरीलप्रमाणेच कॉलम्स, प्रत्येक ब्रोकरसाठी.
- **फिल्टर्स:** नावाने शोध, तारीख श्रेणी, स्रोत (source) फिल्टर.
- **क्रिया / बटणे:** रिफ्रेश, कॉलम सेटिंग्ज (गिअर).
- **नियम:** कॉलम्सवरून लीडचा प्रवास असा दिसतो: On going → Site visit → Temporary converted → Converted किंवा Dropped. रद्द झाल्यास Refunded (नोंदीतील अनुमान).
- **संबंधित पाने:** Manage Leads, Broker List, Sales Command Center.

#### 5.2.6 Search Duplicate

- **मार्ग:** `/leads/search-duplicate`
- **उद्देश:** डुप्लिकेट लीड्स शोधणे.

| Field (स्क्रीनवर) | अर्थ | प्रकार / पर्याय |
|---|---|---|
| Team leads | कोणत्या टीमचे लीड्स | निवड |
| Includes visited property | साइट व्हिजिट झालेले लीड्स धरायचे का | All / Yes / No |

- **फिल्टर्स:** वरील दोन.
- **क्रिया / बटणे:** शोध. निकाल शोधानंतर दिसतात. निकालांचे कॉलम्स नोंदवलेले नाहीत.
- **नियम:** डुप्लिकेट ठरवण्याचे निकष नोंदीत नाहीत.
- **संबंधित पाने:** Manage Leads (लाल "D" बिल्ला).

#### 5.2.7 Lead Tags

- **मार्ग:** `/leads/lead-tags`
- **उद्देश:** लीड टॅग्जची मास्टर यादी.

| कॉलम (स्क्रीनवर) | अर्थ |
|---|---|
| Name | टॅगचे नाव |
| Status | सक्रिय / निष्क्रिय |
| Action | क्रिया (पर्याय नोंदवलेले नाहीत) |

- **फिल्टर्स:** All / Active / Inactive पिल्स, शोध.
- **क्रिया / बटणे:** नवीन टॅग जोडण्याचे बटण नोंदवलेले नाही.
- **नियम:** येथील टॅग्ज Manage Leads मधील टॅग चिप्स आणि Add New Lead मधील "Lead Tags" मध्ये वापरले जातात (अनुमान).
- **संबंधित पाने:** Manage Leads, Add New Lead, Settings (Lead Types).

### 5.3 Sales Management

#### 5.3.1 Sales Command Center

- **मार्ग:** `/sales-command-center`
- **उद्देश:** विक्री कर्मचाऱ्याचे रोजचे कामाचे पान: कोणाला फोन करायचा, कोणते पाठपुरावे आणि साइट व्हिजिट्स बाकी आहेत, आणि स्वतःची कामगिरी.
- **वरचा भाग:** "All Leads" दृश्य ड्रॉपडाउन, "By Lead Type" ड्रॉपडाउन, "Run Campaign" ड्रॉपडाउन.

**"Smart Lead List" टेबल**

| कॉलम (स्क्रीनवर) | अर्थ |
|---|---|
| S.No. | अनुक्रमांक |
| Lead Type | लीडचा प्रकार |
| Lead No. | लीड क्रमांक |
| Name | नाव |
| Contact Number | फोन |
| Project | प्रोजेक्ट |
| Last Contact | शेवटचा संपर्क |
| Lead Status | स्थिती |
| Action | काळे "Call" बटण (फोनच्या आयकॉनसह) आणि राखाडी "Follow-ups" बटण |

**उजवीकडील कार्ड्स**

| कार्ड (स्क्रीनवर) | टॅब्स | नोंद |
|---|---|---|
| Follow-ups | Upcoming / Missed | आगामी आणि चुकलेले पाठपुरावे |
| Site Visits | Upcoming / Missed | आगामी आणि चुकलेल्या साइट व्हिजिट्स |

रिकामे असताना चित्र आणि "Looks like there is no data." संदेश.

**"My Performance (KPI)"**

| KPI (स्क्रीनवर) | अर्थ |
|---|---|
| Calls | केलेले फोन |
| Meetings | मीटिंग्ज |
| Site Visit Scheduled | ठरलेल्या साइट व्हिजिट्स |
| Site Visited | झालेल्या साइट व्हिजिट्स |
| Follow Ups | पाठपुरावे |
| Revenue | उत्पन्न |

**इतर**

- "Monthly Target" कार्ड: महिन्याचे लक्ष्य.
- "Sales Trends (₹ Lakhs)" चार्ट: विक्रीचा कल, लाख रुपयांत.

**"Sales Pipeline" (विक्रीचे टप्पे)**

| टप्पा (स्क्रीनवर) | अर्थ |
|---|---|
| Lead in | लीड आला |
| Follow up | पाठपुरावा |
| Negotiation | वाटाघाटी |
| Quotation sent | कोटेशन पाठवले |
| Converted | रूपांतरित |
| Closed lost | गमावला |

- **फिल्टर्स:** All Leads दृश्य, By Lead Type, शोध, Advanced filter.
- **क्रिया / बटणे:** Call, Follow-ups, Run Campaign, रिफ्रेश, कॉलम सेटिंग्ज, Upcoming / Missed टॅब्स.
- **नियम:**
  - "Monthly Target" चे आकडे Manage Targets मधून येतात.
  - "Run Campaign" आणि "By Lead Type" मधील पर्याय नोंदवलेले नाहीत.
  - "Follow-ups" बटणाने उघडणारा फॉर्म नोंदवलेला नाही.
- **संबंधित पाने:** Manage Leads, View Lead, Manage Targets, Bulk Whatsapp, Settings (Lead Types).

#### 5.3.2 Customers

- **मार्ग:** `/customers`
- **उद्देश:** रूपांतरित झालेल्या लीड्सची, म्हणजे ग्राहकांची यादी.

| कॉलम (स्क्रीनवर) | अर्थ |
|---|---|
| S.No. | अनुक्रमांक |
| Name | ग्राहकाचे नाव |
| Lead No. | मूळ लीड क्रमांक |
| Contact | फोन |
| Email | ईमेल |
| Project | प्रोजेक्ट |
| Lead Status | स्थिती |
| Action | क्रिया (पर्याय नोंदवलेले नाहीत) |

- **फिल्टर्स:** नोंद नाही.
- **क्रिया / बटणे:** Action कॉलम; पर्याय नोंदवलेले नाहीत.
- **नियम:** लीड रूपांतरित झाल्यावर तो ग्राहकांच्या यादीत येतो.
- **संबंधित पाने:** Manage Leads, Payment Terms, Generate Documents, Manage Sales.

#### 5.3.3 Manage Sales

- **मार्ग:** `/sales-analytics?project=<id>`
- **शीर्षक:** "Sales Analytics", प्रोजेक्ट ड्रॉपडाउनसह.
- **उद्देश:** एका प्रोजेक्टच्या विक्री आणि भाड्याचे आकडे, विकलेल्या युनिट्सची यादी आणि टीम / ब्रोकरची कामगिरी.

**KPI कार्ड्स**

| कार्ड (स्क्रीनवर) | अर्थ |
|---|---|
| Sale Revenue | विक्रीचे उत्पन्न |
| Sale Amount Pending | विक्रीपोटी बाकी रक्कम |
| Rent Amount | भाड्याची रक्कम |
| Rent Amount Pending | भाड्याची बाकी रक्कम |
| Property Sold | विकलेली युनिट्स |
| Bookings | बुकिंग्ज |
| Booking Cancelled | रद्द बुकिंग्ज |
| Rented Units | भाड्याने दिलेली युनिट्स |
| Refund to Customer | ग्राहकाला परतावा |

**"Property Sales" टेबल**

| कॉलम (स्क्रीनवर) | अर्थ |
|---|---|
| S.No. | अनुक्रमांक |
| Lead No. | लीड क्रमांक |
| Name | ग्राहकाचे नाव |
| Flat/Shop No. | फ्लॅट / दुकान क्रमांक |
| Booking Amount | बुकिंगची रक्कम |
| Sale Price | विक्री किंमत |
| Finance Status | कर्जाची / पैशांची स्थिती |
| Action | क्रिया (पर्याय नोंदवलेले नाहीत) |

**चार्ट्स आणि टेबल्स**

| विजेट (स्क्रीनवर) | माहिती |
|---|---|
| Sales Performance | चार्ट, "Week / Months" टॉगल आणि तारीख श्रेणी |
| Sales Team Performance | Agent Name, Revenue, Total Assigned Leads, Converted Leads |
| Broker Performance | ब्रोकरनुसार कामगिरी. कॉलम्स नोंदवलेले नाहीत. |

- **फिल्टर्स:** प्रोजेक्ट ड्रॉपडाउन; शोध (lead name / property type / block / flat / shop no); Week / Months; तारीख श्रेणी.
- **क्रिया / बटणे:** Action कॉलम; पर्याय नोंदवलेले नाहीत.
- **नियम:** "Finance Status" मध्ये कोणती मूल्ये असतात, हे नोंदीत नाही.
- **संबंधित पाने:** Dashboard, Verify Payment, Manage Loan, Refund Booking Payments, Broker Payment.

#### 5.3.4 Payment Terms

- **मार्ग:** `/documentation/upload-sanction-letter`
- **शीर्षक:** "Define Payment Terms: Customer & Bank"
- **उद्देश:** एका ग्राहकाच्या खरेदीत किती रक्कम ग्राहक स्वतः भरणार आणि किती बँकेच्या कर्जातून येणार, हे ठरवणे. बँकेचे मंजुरीपत्र अपलोड करणे.

**निवड**

| Field (स्क्रीनवर) | अर्थ |
|---|---|
| Project | प्रोजेक्ट |
| Customer | ग्राहक |

**ग्राहक निवडल्यावर दिसणारी माहितीपट्टी**

| Field (स्क्रीनवर) | अर्थ |
|---|---|
| Name | ग्राहकाचे नाव |
| Mobile Number | मोबाईल |
| Property Purchase | घेतलेली प्रॉपर्टी |
| Details | तपशील |
| Sale Price | विक्री किंमत |
| Token Amount | टोकन रक्कम |
| PAN Number | PAN |
| Aadhar Card | आधार |
| Received Date | रक्कम मिळाल्याची तारीख |

- **फिल्टर्स:** Project, Customer.
- **क्रिया / बटणे:** मंजुरीपत्र अपलोड (नोंदीनुसार). बाकी बटणे नोंदवलेली नाहीत.
- **नियम:** ग्राहक निवडला नसल्याने विभागणीचा फॉर्म प्रत्यक्ष पाहिला नाही. विभागणी आणि मंजुरीपत्राची माहिती पानाचे शीर्षक आणि मार्गावरून नोंदवली आहे.
- **संबंधित पाने:** Customers, Manage Loan, Compare Quotation (Payment Term, Contributor), Verify Payment (Purchase: LOAN / WITHOUT LOAN).

#### 5.3.5 Quotations

- **मार्ग:** `/sales-analytics/quotation`
- **शीर्षक:** "Manage Quotation(s)"
- **उद्देश:** सर्व कोटेशन्सची यादी.

| कॉलम (स्क्रीनवर) | अर्थ |
|---|---|
| S.No. | अनुक्रमांक |
| PBQ No. | कोटेशन क्रमांक |
| Lead | लीड |
| Project | प्रोजेक्ट |
| Sale Price | विक्री किंमत |
| Min Budget | लीडचे किमान बजेट |
| Booking Amount | बुकिंगची रक्कम |
| Booking Date | बुकिंगची तारीख |
| Quotation Valid Date | कोटेशन कोणत्या तारखेपर्यंत वैध |
| Block / Area Name | ब्लॉक / भाग |
| Action | क्रिया (पर्याय नोंदवलेले नाहीत) |

- **फिल्टर्स:** शोध, Advanced filter.
- **क्रिया / बटणे:** येथे नवीन कोटेशनचे बटण नोंदवलेले नाही. कोटेशन लीडवरून ("Create Quotation") तयार होते.
- **नियम:**
  - वैधतेचे दिवस Booking Settings मधील "Quotation Validity Period (days)" ने ठरतात.
  - "Can Book Unapproved Quote" बंद असेल तर ग्राहकाने मान्य न केलेल्या कोटेशनवर बुकिंग होत नसावे (अनुमान).
  - "PBQ" चा पूर्ण अर्थ नोंदीत नाही.
- **संबंधित पाने:** Manage Leads, Compare Quotation, Booking Settings.

#### 5.3.6 Compare Quotation

- **मार्ग:** `/sales-analytics/compare-quotation`
- **उद्देश:** निवडलेल्या अटींनुसार कोटेशन्स शोधून त्यांची तुलना करणे.

**फिल्टर्स**

| Field (स्क्रीनवर) | अर्थ | प्रकार / पर्याय |
|---|---|---|
| Project | प्रोजेक्ट | निवड |
| Property Type | प्रॉपर्टीचा प्रकार | उदा. Residential |
| Lead | लीड | निवड |
| Min Saleable Price / Max Saleable Price | विक्री किंमतीची मर्यादा | संख्या |
| Min Booking Amount / Max Booking Amount | बुकिंग रकमेची मर्यादा | संख्या |
| Booking Date | बुकिंगची तारीख | तारीख |
| Quotation Valid Date | वैधतेची तारीख | तारीख |
| Booking Amount Due Date | बुकिंगची रक्कम भरण्याची शेवटची तारीख | तारीख |
| Payment Term | पैसे भरण्याची अट | उदा. Loan |
| Contributor | पैसे कोण देणार | उदा. Bank |
| Is Approved By Client | ग्राहकाने मान्य केले का | Yes / No |

- **क्रिया / बटणे:** Reset, Search.
- **नियम:** तुलनेच्या निकालाची मांडणी नोंदवलेली नाही.
- **संबंधित पाने:** Quotations, Payment Terms.

#### 5.3.7 Manage Loan

- **मार्ग:** `/loans`
- **शीर्षक:** "Loan Management"
- **उद्देश:** ग्राहकांच्या गृहकर्जाचा पाठपुरावा.

| कॉलम (स्क्रीनवर) | अर्थ |
|---|---|
| S.No. | अनुक्रमांक |
| Lead | लीड / ग्राहक |
| Project | प्रोजेक्ट |
| Loan Account No | कर्ज खाते क्रमांक |
| Requested Amount | मागितलेली रक्कम |
| Sanctioned Amount | मंजूर रक्कम |
| Disbursed Amount | प्रत्यक्ष दिलेली (वाटप) रक्कम |
| Self Funding Amount | ग्राहकाचा स्वतःचा हिस्सा |
| Loan Status | कर्जाची स्थिती, उदा. "Sanctioned" |
| Applicants | अर्जदार |
| Action | क्रिया (पर्याय नोंदवलेले नाहीत) |

- **फिल्टर्स:** शोध (branch / loan account no / amount).
- **क्रिया / बटणे:** Action कॉलम; पर्याय नोंदवलेले नाहीत. नवीन कर्ज जोडण्याचे बटण नोंदवलेले नाही.
- **नियम:** "Sanctioned" शिवाय इतर स्थिती नोंदवलेल्या नाहीत.
- **संबंधित पाने:** Payment Terms, Manage Sales (Finance Status), Verify Payment.

### 5.4 Project Management

#### 5.4.1 Manage Projects

- **मार्ग:** `/projects/manage-projects`
- **शीर्षक:** "Manage Projects (*Remaining Project Limit: 15 / 20)" आणि काळे "+" बटण.
- **उद्देश:** सर्व प्रोजेक्ट्सची यादी. खात्यात 5 प्रोजेक्ट्स आहेत.

**Statistics: "By Project Type"**

कार्ड्स: Residential, Commercial, "Commercial, Residential".

**टेबलचे कॉलम्स**

| कॉलम (स्क्रीनवर) | अर्थ | नोंद |
|---|---|---|
| S.No. | अनुक्रमांक | |
| Name | प्रोजेक्टचे नाव | |
| Land Name | कोणत्या जमिनीवर | |
| Project Type | प्रोजेक्टचा प्रकार | राखाडी चिप्स |
| Plot Based Project | प्लॉटचा प्रोजेक्ट आहे का | |
| Promoter Name | प्रमोटरचे नाव | |
| Promoter Number | प्रमोटरचा फोन | |
| Project Category | प्रोजेक्टची श्रेणी | |
| Financer Bank Name | कर्ज देणारी बँक | |
| Project Unit Sub Type | युनिटचे उप-प्रकार | |
| Budget Range | किंमतीची श्रेणी | |
| Project Status | बांधकामाची स्थिती | |
| Status | सक्रिय / निष्क्रिय | टॉगल स्विच (हात लावला नाही) |
| Action | "..." मेनू | पर्याय नोंदवलेले नाहीत |

- **फिल्टर्स:** All / Active / Inactive पिल्स; शोध (name / project name / RERA no.); Advanced filter.
- **क्रिया / बटणे:** "+" (नवीन प्रोजेक्ट), रिफ्रेश, कॉलम सेटिंग्ज, Status टॉगल, "...".
- **नियम:** प्लॅनमध्ये 20 प्रोजेक्ट्सची मर्यादा. उरलेली संख्या शीर्षकातच दिसते.
- **संबंधित पाने:** Add New Project, Manage Land, Manage Properties, Map View.

#### 5.4.2 Add New Project

- **मार्ग:** `/projects/add`
- **शीर्षक:** "Project Master"
- **उद्देश:** नवीन प्रोजेक्ट नोंदवणे. हा दोन टप्प्यांचा फॉर्म आहे: "Project Details" आणि मग "Define CLP".

**टप्पा 1: Basic Project Details (* = आवश्यक)**

| Field (स्क्रीनवर) | अर्थ | प्रकार / पर्याय |
|---|---|---|
| Upload Photo* | प्रोजेक्टचा फोटो | फाइल |
| Plot Based Project | प्लॉटचा प्रोजेक्ट | टॉगल |
| Select Land* | कोणत्या जमिनीवर | जमीन निवड |
| Project Name* | प्रोजेक्टचे नाव | मजकूर |
| Project Type* | प्रकार | निवड (Residential / Commercial ...) |
| Rent / Buy | भाडे की विक्री | निवड |
| Project Category* | श्रेणी | निवड; पर्याय नोंदवलेले नाहीत |
| Project Status* | बांधकामाची स्थिती | उदा. "Yet to start" |
| Project Budget (₹)* | किंमतीची श्रेणी | किमान-कमाल |
| Project Start Date* | सुरुवातीची तारीख | तारीख |
| Project Completion Date* | पूर्ण होण्याची तारीख | तारीख |
| Phone Number | फोन | +91 |
| Email | ईमेल | |
| Website | वेबसाइट | |
| Project Full Address | पूर्ण पत्ता | |
| City | शहर | |
| Postal/zip Code | पिन कोड | |
| Google Maps Link | Google Maps ची लिंक | "Fetch" बटणाने अक्षांश-रेखांश मिळतात |
| Latitude | अक्षांश | |
| Longitude | रेखांश | |
| RERA/Govt Registration Number | RERA / सरकारी नोंदणी क्रमांक | |
| Project Registration Number | प्रोजेक्ट नोंदणी क्रमांक | |
| Layout Plan | लेआउट प्लॅन | फाइल जोडणे |
| 360 Degree View Link | 360 अंश दृश्याची लिंक | |
| GST Number | GST | |
| PAN Number | PAN | |
| Government Approved | सरकारी मान्यता | |

**Amenities (सुविधा)**

- "Select All" सह चेकबॉक्सची यादी. एकूण सुमारे 37 सुविधा. नोंदींमध्ये ही 30 नावे आहेत (एका ओळीत तीन भूमिगत जाळ्या एकत्र):

| | | |
|---|---|---|
| Aquapress Pathway | Block Boundary | Borewell Water Supply |
| CCTV Surveillance | Childrens Play Area | Community Hall |
| CWR | Fitness Center | Gas Pipeline |
| Gazebo | Intercom | Interlocking Road Tiles |
| Library | Lift | Outer Boundary with wireframe |
| Park | Parking | Power Backup |
| Rain Water Harvesting | Reception and Waiting Lounge | Sewage System |
| Solar Power | Solar Water Heating | Staff Quarters |
| Street Demarcation | Street Light | Swimming Pool |
| Temple | Underground Electric / Sewer / Water networks | Water Connection |

**इतर भाग**

| भाग (स्क्रीनवर) | आतली फील्ड्स |
|---|---|
| Near By Locations | जवळची ठिकाणे |
| Images | फोटो |
| Videos | व्हिडिओ |
| Brochure | माहितीपत्रक |
| RERA Documents | RERA ची कागदपत्रे |
| Promoter Details | Name, Contact Number, Documents |
| About | Title, Description |
| Financer Banks Details | Bank |

**टप्पा 2: Define CLP**

- बांधकामाशी जोडलेली हप्ता योजना (construction-linked payment plan) ठरवणे.
- "Save & Next" दाबले नाही, म्हणून हा टप्पा पाहिला नाही.

- **फिल्टर्स:** लागू नाही (फॉर्म).
- **क्रिया / बटणे:** Cancel, "Save & Next" (दाबले नाही), "Fetch", "Select All".
- **नियम:**
  - प्रत्येक प्रोजेक्ट एका जमिनीच्या नोंदीवर तयार होतो ("Select Land*").
  - CLP टप्पे बदलण्यासाठी वेगळी परवानगी आहे: "Update Project CLP Phases".
  - या पानावर असताना "Failed - Too many requests, please try again later." हा संदेश आला.
- **संबंधित पाने:** Manage Projects, Manage Land, CLP Payments, Permissions.

#### 5.4.3 Interactive Map

- **मार्ग:** `/interactiveMap`
- **शीर्षक:** "Site Layout - Interactive site layout - N plots"
- **उद्देश:** साइटचा नकाशा (CAD किंवा PDF) टाकून, प्रत्येक प्लॉटची चालू स्थिती दाखवणारा, क्लिक करता येणारा नकाशा मिळवणे.

| घटक (स्क्रीनवर) | अर्थ |
|---|---|
| Select project | प्रोजेक्ट निवड (ड्रॉपडाउन) |
| रिकामी स्थिती | "Pick a project, or drop a DXF, DWG or PDF to open its site layout" |

- **फिल्टर्स:** Select project.
- **क्रिया / बटणे:** प्रोजेक्ट निवडणे किंवा DXF / DWG / PDF फाइल ओढून टाकणे.
- **नियम:** काहीही निवडले किंवा अपलोड केले नाही. त्यामुळे नकाशा कसा दिसतो, प्लॉटवर क्लिक केल्यावर काय होते, हे पाहिले नाही.
- **मांडणी:** बाजूच्या मेनूशिवाय पूर्ण रुंदीचे पान, क्रीम रंगाची वरची पट्टी, गडद कॅनव्हास.
- **संबंधित पाने:** Manage Projects, Manage Properties, Inventory.

#### 5.4.4 Map View

- **मार्ग:** `/map-view`
- **उद्देश:** प्रोजेक्ट्स आणि जमिनी भौगोलिक नकाशावर पाहणे.

| घटक (स्क्रीनवर) | अर्थ |
|---|---|
| नकाशा | गटबद्ध खुणा, संख्येच्या बुडबुड्यांसह |
| Project (5) | प्रोजेक्ट्स दाखवण्याचा चेकबॉक्स |
| Land (9) | जमिनी दाखवण्याचा चेकबॉक्स |

- **फिल्टर्स:** Project, Land चेकबॉक्स.
- **क्रिया / बटणे:** नोंद नाही.
- **नियम:** ठिकाण प्रोजेक्टच्या Latitude / Longitude (आणि जमिनीच्या ठिकाणावरून) येते (अनुमान).
- **संबंधित पाने:** Add New Project (Google Maps Link, Fetch), Manage Land.

### 5.5 Property Management

#### 5.5.1 Inventory

- **मार्ग:** `/property/available-inventory`
- **शीर्षक:** "Inventory Analytics"
- **उद्देश:** सर्व युनिट्सची स्थिती आणि उपलब्ध युनिट्स शोधणे.

**KPI कार्ड्स:** Properties Booked, Properties Available, Properties On Rent.

**"Inventory" टेबल**

| कॉलम (स्क्रीनवर) | अर्थ | उदाहरण / नोंद |
|---|---|---|
| S.No. | अनुक्रमांक | |
| Property Type | प्रॉपर्टीचा प्रकार | Residential / Commercial |
| Project Unit Sub Type | युनिटचा उप-प्रकार | Apartments, Office ... |
| Block / Area Name | ब्लॉक / भाग | |
| Budget Range | किंमतीची श्रेणी | "₹X Lakh - ₹Y Cr" अशा स्वरूपात |
| Property Status | युनिटची स्थिती | |
| Site/Project Name | प्रोजेक्ट | |
| Action | "..." | पर्याय नोंदवलेले नाहीत |

- **फिल्टर्स:** शोध (property type / block / unit no / facing), Property Status फिल्टर, Advanced filter.
- **क्रिया / बटणे:** "..." (पर्याय नोंदवलेले नाहीत).
- **नियम:** युनिटच्या स्थिती Dashboard च्या "Inventory Analytics" मधल्याच आहेत (विभाग 4.4).
- **संबंधित पाने:** Dashboard, Manage Properties, View Lead (जुळणारी युनिट्स).

#### 5.5.2 Manage Properties

- **मार्ग:** `/property/manage-properties`
- **उद्देश:** सर्व युनिट्सची (फ्लॅट, दुकान, ऑफिस, प्लॉट) मुख्य यादी.
- **वरची बटणे:** आयात, निर्यात, काळे "+".
- **KPI कार्ड्स:** Inventory प्रमाणेच तीन: Properties Booked, Properties Available, Properties On Rent.

| कॉलम (स्क्रीनवर) | अर्थ | नोंद |
|---|---|---|
| S.No. | अनुक्रमांक | |
| Property Status | युनिटची स्थिती | केशरी "Available" बिल्ला |
| Project Name | प्रोजेक्ट | |
| Unit No. | युनिट क्रमांक | |
| Property Type | प्रकार | |
| Budget Range | किंमतीची श्रेणी | |
| Floor Name | मजला | |
| Property Area | क्षेत्रफळ | |
| Facing | दिशा | |
| Status | सक्रिय / निष्क्रिय | टॉगल (हात लावला नाही) |
| Action | "..." मेनू | खाली पाहा |

**ओळीचा "..." मेनू**

| पर्याय (स्क्रीनवर) | काय करतो |
|---|---|
| View Property | युनिटची माहिती पाहणे |
| Edit Property | बदल |
| Micro Site | युनिटची मायक्रोसाइट उघडणे |
| Share Microsite | मायक्रोसाइटची लिंक शेअर करणे |
| Delete Property | युनिट हटवणे |

- **फिल्टर्स:** शोध (project / block / unit no / facing), All / Available स्थिती निवड, Property Type निवड, Advanced filter.
- **क्रिया / बटणे:** आयात, निर्यात, "+", रिफ्रेश, कॉलम सेटिंग्ज, Status टॉगल, "...".
- **नियम:** प्रत्येक युनिटची स्वतःची शेअर करता येणारी मायक्रोसाइट असते.
- **संबंधित पाने:** Add New Property, Inventory, Manage Projects, Settings (Microsite Settings, Inventory Tags, PLC).

#### 5.5.3 Add New Property

- **मार्ग:** `/property/add`
- **शीर्षक:** "Property/Unit Master"
- **उद्देश:** नवीन युनिट नोंदवणे.

| Field (स्क्रीनवर) | अर्थ | प्रकार / पर्याय |
|---|---|---|
| Select Project | प्रोजेक्ट | निवड |
| Flat Number | फ्लॅट क्रमांक | उदा. "B12-204" |
| Budget (₹) | किंमतीची श्रेणी | किमान-कमाल |
| Vastu Compliant | वास्तुनुसार आहे का | |
| PLC Applicable | चांगल्या जागेचा जादा दर (Preferential Location Charge) लागू आहे का | |
| Property Area | क्षेत्रफळ | संख्या |
| Super Built-Up Area | सुपर बिल्ट-अप क्षेत्रफळ | संख्या |
| Built-Up Area | बिल्ट-अप क्षेत्रफळ | संख्या |
| Carpet Area | कार्पेट क्षेत्रफळ | संख्या |
| (क्षेत्रफळाचे एकक) | एकक निवड | उदा. "Square Feet"; "Open calculator" ने क्षेत्रफळ कॅल्क्युलेटर |
| Budget/Area | प्रति एकक क्षेत्रफळ दर | किमान-कमाल |
| Property facing feature | दिशेचे वैशिष्ट्य | |
| Tags | टॅग्ज | |
| No. of Balconies | बाल्कनींची संख्या | संख्या |
| No. of Bathrooms | बाथरूम्सची संख्या | संख्या |
| No. of Bedrooms | बेडरूम्सची संख्या | संख्या |
| No. of Kitchens | किचनची संख्या | संख्या |
| No. of Drawing Rooms | दिवाणखान्यांची संख्या | संख्या |
| No. of Parking Lot | पार्किंगची संख्या | संख्या |
| 360 Degree View Link | 360 अंश दृश्याची लिंक | |
| Add Property Images | फोटो | फाइल |
| Add Property Videos | व्हिडिओ | फाइल |
| Add Property Brochure | माहितीपत्रक | फाइल |
| About Property | युनिटचे वर्णन | मजकूर |

- **फिल्टर्स:** लागू नाही (फॉर्म).
- **क्रिया / बटणे:** "Open calculator", Cancel, Save (दाबले नाही).
- **नियम:**
  - युनिट एका प्रोजेक्टमध्ये असते.
  - PLC चे दर Settings मधील "PLC (Preferential Location Charges) master" मध्ये असावेत (अनुमान).
  - आवश्यक फील्ड्सची खूण नोंदवलेली नाही.
- **संबंधित पाने:** Manage Properties, Manage Projects, Settings (PLC, Inventory Tags).

### 5.6 Land Management

#### 5.6.1 Manage Land

- **मार्ग:** `/lands/manage-land`
- **उद्देश:** जमिनींची यादी. खात्यात 9 जमिनी आहेत, प्रत्येक सोसायटी प्रोजेक्टसाठी एक.

| कॉलम (स्क्रीनवर) | अर्थ | नोंद |
|---|---|---|
| S.No. | अनुक्रमांक | |
| Name | जमिनीचे नाव | |
| Property Type | प्रकार | Residential / Commercial चिप्स |
| Occupancy Status | जमिनीच्या वापराची / ताब्याची स्थिती | मूल्ये नोंदवलेली नाहीत |
| Status | सक्रिय / निष्क्रिय | |
| Action | क्रिया | पर्याय नोंदवलेले नाहीत |

- **फिल्टर्स:** All, शोध (land name / property type / occupancy), Advanced filter.
- **क्रिया / बटणे:** Action कॉलम; पर्याय नोंदवलेले नाहीत.
- **नियम:** रचना जमीन → प्रोजेक्ट → युनिट अशी आहे.
- **संबंधित पाने:** Add New Land (उघडले नाही), Add New Project, Map View.

### 5.7 Broker Management

#### 5.7.1 Broker List

- **मार्ग:** `/broker/manage-broker` (मेनूतील नाव "Manage Broker")
- **शीर्षक:** "Broker List"
- **उद्देश:** ब्रोकर्सची यादी. खात्यात 4 ब्रोकर आहेत.

| कॉलम (स्क्रीनवर) | अर्थ |
|---|---|
| S.No. | अनुक्रमांक |
| Name | ब्रोकरचे नाव |
| Contact | फोन |
| Email | ईमेल |
| Country | देश |
| State | राज्य |
| City | शहर |
| Real Estate License No. | रिअल इस्टेट परवाना क्रमांक |
| Expiration Date | परवान्याची मुदत संपण्याची तारीख |
| Status | स्थिती |
| Action | क्रिया (पर्याय नोंदवलेले नाहीत) |

- **फिल्टर्स:** All, शोध (name / contact number), Advanced filter.
- **क्रिया / बटणे:** Action कॉलम; पर्याय नोंदवलेले नाहीत.
- **नियम:** परवान्याची मुदत संपल्यावर काय होते, हे नोंदीत नाही.
- **संबंधित पाने:** Add Broker (उघडले नाही), Broker Payment, Lead Reports (Broker reports), Manage Sales (Broker Performance), Manage Leads (स्रोत "Broker").

### 5.8 Financial Management

#### 5.8.1 Verify Payment

- **मार्ग:** `/sales-analytics/booking-token`
- **शीर्षक:** "Flat Booking Payment"
- **उद्देश:** विक्री टीमने नोंदवलेले बुकिंगचे पैसे अकाउंट्सने तपासून मान्य करणे (दुहेरी तपासणी: एक नोंदवतो, दुसरा मान्य करतो).

| कॉलम (स्क्रीनवर) | अर्थ | नोंद |
|---|---|---|
| S.No. | अनुक्रमांक | |
| Lead No. | लीड क्रमांक | |
| Lead Name | लीडचे नाव | |
| Reference No. | पैशांचा संदर्भ क्रमांक | स्वरूप "#PROPAY/<PROJECT>/<YEAR>/<N>" |
| Block Name | ब्लॉक | |
| Purchase | खरेदीचा प्रकार | बिल्ला "WITHOUT LOAN" किंवा "LOAN" |
| Action | मान्यता | हिरवे ग्रेडियंट "Confirm Payment" बटण (दाबले नाही) |

- **फिल्टर्स:** शोध (lead no / lead name / reference no / amount / ...), प्रोजेक्ट निवड, Advanced filter.
- **क्रिया / बटणे:** "Confirm Payment".
- **नियम:**
  - अकाउंट्सने "Confirm Payment" केल्यावरच पैसे हिशोबात धरले जातात (नोंदीतील संकल्पना).
  - विक्री टीम पैसे कोणत्या पानावर नोंदवते, हे नोंदीत नाही.
  - संदर्भ क्रमांकात प्रोजेक्ट आणि वर्ष असते.
- **संबंधित पाने:** Manage Leads ("Book"), CLP Payments, Ledger Payments, Bank-wise Collection.

#### 5.8.2 CLP Payments

- **मार्ग:** `/sales-analytics/flat-booking`
- **शीर्षक:** "CLP Booking Payments"
- **उद्देश:** बांधकामाशी जोडलेल्या योजनेतील (CLP) प्रत्येक हप्त्याची स्थिती पाहणे आणि स्मरण पाठवणे.

**टेबल: प्रत्येक हप्ता एक ओळ**

| कॉलम (स्क्रीनवर) | अर्थ | उदाहरण / नोंद |
|---|---|---|
| Name | हप्त्याच्या टप्प्याचे नाव | BOOKING AMOUNT, PLINTH, 1ST SLAB, 2ND SLAB, 3RD SLAB, 4TH SLAB, 2nd Floor ... |
| Amount | हप्त्याची रक्कम | |
| Sale Price | विक्री किंमत | |
| Payment Status | हप्त्याची स्थिती | लाल "Due" / हिरवा "Paid" |
| Payment Mode | भरण्याची पद्धत | Online / Cheque |
| Purchase | खरेदीचा प्रकार | (LOAN / WITHOUT LOAN असावे, अनुमान) |
| Action | मेनू | View, Send Reminder (दाबले नाही) |

- **फिल्टर्स:** शोध, प्रोजेक्ट निवड, "CLP" फिल्टर, Advanced filter.
- **क्रिया / बटणे:** ओळीवर View आणि Send Reminder.
- **नियम:**
  - हप्त्यांचे टप्पे प्रोजेक्टच्या "Define CLP" मधून येतात (अनुमान).
  - टप्प्यांच्या नावांत "SLAB" आणि "2nd Floor" दोन्ही प्रकार दिसतात, म्हणजे टप्प्यांची नावे प्रोजेक्टनुसार वेगळी ठेवता येतात (अनुमान).
  - स्मरण कोणत्या माध्यमातून जाते, हे नोंदीत नाही.
- **संबंधित पाने:** Send CLP Reminder, Add New Project (Define CLP), Booking Settings (व्याज), Ledger Payments.

#### 5.8.3 Send CLP Reminder

- **मार्ग:** `/sales-analytics/send-clp-reminder`
- **शीर्षक:** "CLP Payments Reminder"
- **उद्देश:** एका प्रोजेक्टमधील, ठरावीक तारखेपर्यंत हप्ते देय असलेल्या सर्व ग्राहकांना एकत्र स्मरण पाठवणे.

| Field (स्क्रीनवर) | अर्थ | प्रकार |
|---|---|---|
| Project* | प्रोजेक्ट | निवड, आवश्यक |
| Due Date* | या तारखेपर्यंत देय हप्ते | तारीख, आवश्यक |

- **फिल्टर्स:** वरील दोन फील्ड्सच.
- **क्रिया / बटणे:** "Send Reminder" (दाबले नाही).
- **नियम:** स्मरणाचा मजकूर कदाचित Settings मधील "Communication Templates" मधून येतो (अनुमान).
- **संबंधित पाने:** CLP Payments, Settings (Communication Templates, Notifications Settings).

#### 5.8.4 Ledger Payments

- **मार्ग:** `/financial-management/ledger-payments`
- **उद्देश:** सर्व जमा पैशांची खातेवही.

**वरचा भाग:** एकूण रकमांच्या बेरजेचे बिल्ले (summary pills).

**मुख्य टेबल**

| कॉलम (स्क्रीनवर) | अर्थ | उदाहरण |
|---|---|---|
| S.No. | अनुक्रमांक | |
| Payment For | कशासाठी पैसे | "Property payment" |
| Project | प्रोजेक्ट | |
| Payment Mode | भरण्याची पद्धत | Online, Cash |
| Amount | रक्कम | |
| Received On | पैसे मिळाल्याची तारीख | |

**"Summary" टेबल**

| कॉलम (स्क्रीनवर) | अर्थ |
|---|---|
| Name | खात्याचे / नोंदीचे नाव |
| Debit | नावे |
| Credit | जमा |

- **फिल्टर्स:** प्रोजेक्ट निवड, Advanced filter, पद्धतीच्या चिप्स (Online, Cash).
- **क्रिया / बटणे:** नोंद नाही.
- **नियम:** "Payment For" मधील इतर मूल्ये नोंदवलेली नाहीत.
- **संबंधित पाने:** Verify Payment, CLP Payments, Bank-wise Collection.

#### 5.8.5 Bank-wise Collection

- **मार्ग:** `/financial-management/bank-collections`
- **उद्देश:** कोणत्या बँक खात्यात किती पैसे जमा झाले, ते पाहणे.

| कॉलम (स्क्रीनवर) | अर्थ |
|---|---|
| S.No. | अनुक्रमांक |
| Bank Name | बँकेचे नाव |
| Account No. | खाते क्रमांक |
| No. of Payments | किती पेमेंट्स |
| Booking Collection | बुकिंगची जमा रक्कम |
| Rent Collection | भाड्याची जमा रक्कम |
| Total Collected | एकूण जमा |

- **फिल्टर्स:** प्रोजेक्ट निवड, Advanced filter, प्रत्येक बँक खात्याची चिप आणि "Cash / Unassigned" चिप.
- **क्रिया / बटणे:** नोंद नाही.
- **नियम:** बँक खाते न जोडलेले किंवा रोख पैसे "Cash / Unassigned" मध्ये दिसतात.
- **संबंधित पाने:** Ledger Payments, Add Bank / Manage Bank (उघडले नाही), Manage Rent.

#### 5.8.6 Refund Booking Payments

- **मार्ग:** `/sales-analytics/refund-booking`
- **उद्देश:** रद्द झालेल्या बुकिंगचा ग्राहकांना दिलेला परतावा.

| कॉलम (स्क्रीनवर) | अर्थ | नोंद |
|---|---|---|
| S.No. | अनुक्रमांक | |
| Customer Name | ग्राहकाचे नाव | |
| Contact Number | फोन | |
| Payment Mode | परताव्याची पद्धत | |
| Payment Status | स्थिती | "Paid" |

- **फिल्टर्स:** शोध (customer name / contact / amount), प्रोजेक्ट निवड, Advanced filter.
- **क्रिया / बटणे:** नोंद नाही.
- **नियम:** बुकिंग रद्द करण्याची क्रिया कोणत्या पानावर होते, हे नोंदीत नाही.
- **संबंधित पाने:** Dashboard (Total Refunded Amount, Total Booking Cancelled), Manage Sales (Refund to Customer), Lead Reports (Refunded).

#### 5.8.7 Broker Payment

- **मार्ग:** `/financial-management/broker-payment`
- **शीर्षक:** "Broker Payments"
- **उद्देश:** ब्रोकरमार्फत झालेल्या बुकिंगवर ब्रोकरचे कमिशन.

| कॉलम (स्क्रीनवर) | अर्थ |
|---|---|
| S.No. | अनुक्रमांक |
| Broker Name | ब्रोकरचे नाव |
| Broker Commission | कमिशन |
| Lead Name | लीड / ग्राहक |
| Contact Number | फोन |
| Property Type | प्रॉपर्टीचा प्रकार |
| Block / Area Name | ब्लॉक / भाग |
| Booking Date | बुकिंगची तारीख |
| Action | क्रिया (पर्याय नोंदवलेले नाहीत) |

- **फिल्टर्स:** शोध (amount / reference no / generated ref), प्रोजेक्ट निवड, Advanced filter.
- **क्रिया / बटणे:** "Open calculator", Action कॉलम.
- **नियम:**
  - कमिशनची प्रत्येक नोंद एका लीड / बुकिंगशी जोडलेली आहे.
  - कमिशन कसे मोजले जाते (टक्केवारी, ठरावीक रक्कम), हे नोंदीत नाही.
  - शोधात "generated ref" आहे, म्हणजे पेमेंटला सिस्टमने बनवलेला संदर्भ क्रमांक मिळतो (अनुमान).
- **संबंधित पाने:** Broker List, Lead Reports (Broker reports), Manage Sales (Broker Performance).

#### 5.8.8 Credit/Debit Notes

- **मार्ग:** `/financial-management/credit-debit-notes`
- **उद्देश:** साहित्य खरेदीच्या बाजूच्या क्रेडिट आणि डेबिट नोट्स (पुरवठादारासोबतचे वजा-अधिक).

| कॉलम (स्क्रीनवर) | अर्थ |
|---|---|
| Note No. | नोटचा क्रमांक |
| Purchase Order Count | किती PO शी जोडलेली |
| GRN Count | किती GRN शी जोडलेली |
| Note Type | प्रकार (Credit / Debit असावा, अनुमान) |
| Note Date | तारीख |
| Project | प्रोजेक्ट |
| Supplier | पुरवठादार |
| Total Materials | एकूण साहित्याच्या वस्तू |
| Store | स्टोअर |
| Total Amount | एकूण रक्कम |
| Created By | कोणी तयार केली |
| Action | क्रिया (पर्याय नोंदवलेले नाहीत) |

- **फिल्टर्स:** नोंद नाही.
- **क्रिया / बटणे:** Action कॉलम.
- **नियम:** एक नोट अनेक PO आणि GRN शी जोडलेली असू शकते (कॉलम्सवरून अनुमान).
- **संबंधित पाने:** MQR, Purchase Orders, Manage GRN, Purchase Payments (उघडले नाही).

#### 5.8.9 Expense Register

- **मार्ग:** `/financial-management/expense-register`
- **उद्देश:** कंपनीच्या खर्चांची नोंदवही.

| कॉलम (स्क्रीनवर) | अर्थ |
|---|---|
| Payee Name | कोणाला पैसे दिले |
| Total Amount | एकूण रक्कम |
| Total Payable Amount | एकूण देय रक्कम |
| Total Items | किती बाबी |
| Payment Mode | भरण्याची पद्धत |
| Action | क्रिया (पर्याय नोंदवलेले नाहीत) |

- **फिल्टर्स:** शोध (payment for / remarks).
- **क्रिया / बटणे:** नोंद नाही.
- **नियम:** यादी रिकामी होती. त्यामुळे नोंदी कशा दिसतात, हे पाहिले नाही.
- **संबंधित पाने:** Add Expense, Manage Payee, Expense Types, Expense Sub Types (सगळी उघडली नाहीत).

### 5.9 Marketing & Campaigning

#### 5.9.1 Contact

- **मार्ग:** `/marketing-campaigning/contact`
- **शीर्षक:** "Address Book"
- **उद्देश:** मार्केटिंगसाठी संपर्कांचे पुस्तक.

| कॉलम (स्क्रीनवर) | अर्थ |
|---|---|
| Name | नाव |
| Email | ईमेल |
| Phone No. | फोन |
| Address | पत्ता |
| Action | क्रिया (पर्याय नोंदवलेले नाहीत) |

- **फिल्टर्स:** टॅग / गट ड्रॉपडाउन ("All"), शोध (name / email / phone / address), Advanced filter.
- **क्रिया / बटणे:** नोंद नाही.
- **नियम:** टॅग / गट Contact Tag पानावर तयार होत असावेत (अनुमान; Contact Tag उघडले नाही).
- **संबंधित पाने:** Contact Tag, Bulk Whatsapp, Bulk SMS, Bulk Email.

#### 5.9.2 Bulk Whatsapp

- **मार्ग:** `/marketing-campaigning/bulk-whatsapp`
- **उद्देश:** WhatsApp वर अनेक लोकांना एकाच वेळी संदेश पाठवण्याच्या मोहिमा.

**"Campaign List" टेबल**

| कॉलम (स्क्रीनवर) | अर्थ |
|---|---|
| Name | मोहिमेचे नाव |
| Audience | कोणाला पाठवायचे (प्रेक्षक) |
| Billing Amount | मोहिमेचा खर्च |
| Schedule Time | पाठवण्याची ठरलेली वेळ |
| Status | मोहिमेची स्थिती |
| Action | क्रिया (पर्याय नोंदवलेले नाहीत) |

- **फिल्टर्स:** "All" ड्रॉपडाउन.
- **क्रिया / बटणे:** काळे "+" (नवीन मोहीम). दाबले नाही.
- **नियम:**
  - यादी रिकामी होती.
  - मोहिमा ठरलेल्या वेळी पाठवता येतात ("Schedule Time").
  - खर्च "Balance" पाकिटातून जात असावा (अनुमान).
  - नोंदींनुसार Bulk SMS आणि Bulk Email ची रचना अशीच आहे. पण ती पाने उघडली नाहीत (फक्त मेनूवरून माहिती, उघडले नाही).
- **संबंधित पाने:** Contact, Balance, Whatsapp Message, Settings (Campaign, Marketing Templates), Sales Command Center ("Run Campaign").

#### 5.9.3 Connect Accounts

- **मार्ग:** `/marketing-campaigning/connect-accounts`
- **उद्देश:** सोशल मीडिया, WhatsApp आणि Meta Ads खाती HomeLead ला जोडणे.

**खात्यांची कार्ड्स**

| कार्ड (स्क्रीनवर) | बटण |
|---|---|
| Facebook | "Connect Now" / "Connect More" |
| Twitter | "Connect Now" / "Connect More" |
| LinkedIn | "Connect Now" / "Connect More" |
| WhatsApp | "Connect Now" / "Connect More" |
| Meta Ads | "Connect Now" / "Connect More" |

कोणते बटण कोणत्या कार्डवर होते, हे नोंदवलेले नाही. कोणतेही बटण दाबले नाही.

**"Meta Ads Details"**

| माहिती | अर्थ |
|---|---|
| जोडलेले बिझनेस खाते | कोणते Meta बिझनेस खाते जोडले आहे |
| काम करण्याची स्थिती | जोडणी चालू आहे का |
| "Valid till" | जोडणी कोणत्या तारखेपर्यंत वैध |

- **फिल्टर्स:** नोंद नाही.
- **क्रिया / बटणे:** Connect Now, Connect More (दाबले नाहीत).
- **नियम:**
  - याच जोडणीमुळे Meta च्या लीड फॉर्म्समधून लीड्स थेट Leads मध्ये येतात.
  - जोडणीला मुदत ("Valid till") असते.
  - बाजूच्या मेनूत Instagram चे पान आहे, पण येथील कार्ड्समध्ये Instagram नोंदवलेले नाही.
- **संबंधित पाने:** Manage Leads (स्रोत Meta Ads), View Lead (Other Requirements), Facebook / Instagram / LinkedIn / Twitter पाने (उघडली नाहीत).

### 5.10 Documentation

#### 5.10.1 Generate Documents

- **मार्ग:** `/documentation/generate`
- **उद्देश:** साच्यांमधून एका ग्राहकासाठी दस्त तयार करणे.

**निवड आणि माहितीपट्टी**

| Field (स्क्रीनवर) | अर्थ |
|---|---|
| Project Name | प्रोजेक्ट |
| Customer Name | ग्राहक |
| माहितीपट्टी | Name, Mobile Number, Property Purchase, Details, Sale Price, Token Amount |

**साच्यांचे टेबल**

| कॉलम (स्क्रीनवर) | अर्थ |
|---|---|
| Template Name | साच्याचे नाव |
| Document Type | दस्ताचा प्रकार |
| Created On | तयार केल्याची तारीख |
| Updated On | बदलाची तारीख |
| Action | क्रिया (पर्याय नोंदवलेले नाहीत) |

- **फिल्टर्स:** Project Name, Customer Name.
- **क्रिया / बटणे:** Action कॉलम; पर्याय नोंदवलेले नाहीत.
- **नियम:**
  - दस्त प्रत्येक ग्राहकासाठी साच्यावरून तयार होतात.
  - पाहिलेल्या मूळ प्रोजेक्टमध्ये एकही साचा नव्हता.
  - ग्राहक निवडला नाही.
  - दस्त पाठवण्याचे माध्यम Booking Settings मधील "Document Sharing Channel" ने ठरत असावे (अनुमान).
- **संबंधित पाने:** Customers, Miscellaneous Documents (उघडले नाही), Settings (Documentation & Priorities, Booking Settings).

### 5.11 Tasks

#### 5.11.1 Tasks (All Task)

- **मार्ग:** `/tasks`
- **शीर्षक:** "Manage Tasks"
- **उद्देश:** कर्मचाऱ्यांची टास्क ठरवणे आणि त्यांचा पाठपुरावा.

**Statistics: "By Priority"** कार्ड्स: Critical, High, Medium, Low.

| कॉलम (स्क्रीनवर) | अर्थ |
|---|---|
| S.No. | अनुक्रमांक |
| Task No. | टास्क क्रमांक |
| Name | टास्कचे नाव |
| Priority | प्राधान्य (Critical / High / Medium / Low) |
| Date | तारीख |
| Due Date | पूर्ण करण्याची शेवटची तारीख |
| Author Name | टास्क देणारा |
| Assigned To | ज्याला दिले |
| Status | स्थिती (मूल्ये नोंदवलेली नाहीत) |
| Action | क्रिया (पर्याय नोंदवलेले नाहीत) |

- **फिल्टर्स:** नोंद नाही.
- **क्रिया / बटणे:** काळे "+" (नवीन टास्क).
- **नियम:**
  - यादी रिकामी होती.
  - "My Task" मध्ये युजरची स्वतःची टास्क दिसतात.
- **संबंधित पाने:** My Task, Settings (Documentation & Priorities), Manage Users.

### 5.12 Settings & Configuration

#### 5.12.1 Settings & Configuration (मुख्य पान)

- **मार्ग:** `/settings-configuration`
- **उद्देश:** संपूर्ण प्रणालीची सेटिंग्ज आणि मास्टर याद्या एका ठिकाणी.
- **मांडणी:** कार्ड्सची ग्रिड. प्रत्येक कार्डवर आयकॉन, नाव आणि एका ओळीचे वर्णन.

| कार्ड (स्क्रीनवर) | नोंदीतील वर्णन | उघडले? |
|---|---|---|
| General | प्लॅटफॉर्मची सामान्य सेटिंग्ज | नाही |
| Security | 2FA, OTP | नाही |
| Attendance | शिफ्टच्या वेळा | नाही |
| Export Settings | निर्यातीची सेटिंग्ज | नाही |
| Leads | लीड्सची खास फीचर्स | नाही |
| Campaign | मोहिमांची सेटिंग्ज | नाही |
| Booking Settings | बुकिंगचे नियम | होय (5.12.2) |
| Documentation & Priorities | कागदपत्रे आणि प्राधान्ये | नाही |
| Inventory settings | साठा, MQR, PO | नाही |
| Marketing Templates | मोहिमांचे साचे | नाही |
| Communication Templates | थेट संदेशांचे साचे | नाही |
| Lead Types | लीडचे प्रकार | नाही |
| Inventory Tags | इन्व्हेंटरीचे टॅग्ज | नाही |
| PLC (Preferential Location Charges) master | चांगल्या जागेच्या जादा दरांची मास्टर यादी | नाही |
| Plot Categories | प्लॉटच्या श्रेणी | नाही |
| Extra Charges master | जादा खर्चांची मास्टर यादी | होय (5.12.3) |
| Transcription | कॉलचे लिखित रूपांतर | नाही |
| IVR Recording | IVR कॉल्सचे रेकॉर्डिंग | नाही |
| Notifications Settings | सूचनांची सेटिंग्ज | नाही |
| Audit Logs | युजर्सच्या क्रियांची नोंद | नाही |
| Microsite Settings | मायक्रोसाइटची सेटिंग्ज | नाही |

- **फिल्टर्स:** नोंद नाही.
- **क्रिया / बटणे:** प्रत्येक कार्ड उघडणे.
- **नियम:** एकूण 21 कार्ड्स. फक्त दोन उघडली.
- **संबंधित पाने:** विभाग 8.

#### 5.12.2 Booking Settings

- **मार्ग:** `/settings-configuration/booking-settings`
- **उद्देश:** बुकिंग, कोटेशन आणि उशिरावरच्या व्याजाचे नियम.
- **मांडणी:** प्रत्येक ओळीत नाव, मदतीचा मजकूर आणि नियंत्रण. काहीही बदलले नाही.

| Setting (स्क्रीनवर) | अर्थ | प्रकार |
|---|---|---|
| Temporary Property Booking Period (days) | युनिटचे तात्पुरते बुकिंग किती दिवस टिकेल | दिवसांची संख्या |
| Temporary Rent Booking Period (days) | भाड्यासाठीचे तात्पुरते बुकिंग किती दिवस टिकेल | दिवसांची संख्या |
| Quotation Validity Period (days) | कोटेशन किती दिवस वैध | दिवसांची संख्या |
| Direct Booking Allowed | थेट बुकिंग करता येते का (कोटेशनशिवाय, नावावरून अनुमान) | टॉगल |
| Can Book Unapproved Quote | ग्राहकाने मान्य न केलेल्या कोटेशनवर बुकिंग करता येते का | टॉगल |
| Document Sharing Channel | दस्त कोणत्या माध्यमातून पाठवायचे | अनेक पर्याय निवडता येतात, उदा. Email |
| Interest Frequency | उशिरावरचे व्याज किती वेळाने मोजायचे | निवड; पर्याय नोंदवलेले नाहीत |
| Compound Interest Enabled | चक्रवाढ व्याज लावायचे का | टॉगल |

- **फिल्टर्स:** लागू नाही.
- **क्रिया / बटणे:** Cancel, Save (दाबले नाही).
- **नियम:**
  - तात्पुरते बुकिंग म्हणजे युनिट ठरावीक दिवसांसाठी राखून ठेवणे. ते रूपांतरित झाले नाही तर N दिवसांनंतर संपते.
  - व्याजाचा दर कुठे ठरतो, हे नोंदीत नाही.
- **संबंधित पाने:** Quotations, Compare Quotation, Manage Leads ("Book"), CLP Payments, Generate Documents.

#### 5.12.3 Extra Charges master

- **मार्ग:** `/master/extra-charges-list`
- **उद्देश:** युनिटच्या किंमतीवर लागणाऱ्या जादा खर्चांची मास्टर यादी.

| कॉलम (स्क्रीनवर) | अर्थ |
|---|---|
| Name | जादा खर्चाचे नाव |
| Amount | रक्कम |
| Tax Percentage | कराची टक्केवारी |
| Created On | तयार केल्याची तारीख |
| Updated On | बदलाची तारीख |
| Status | सक्रिय / निष्क्रिय |
| Action | क्रिया (पर्याय नोंदवलेले नाहीत) |

- **फिल्टर्स:** नोंद नाही.
- **क्रिया / बटणे:** टेबलच्या वर थेट "Add New" फॉर्म, Cancel / Save.
- **नियम:** यादी रिकामी होती. जादा खर्च बुकिंगला कसा जोडला जातो, हे नोंदीत नाही.
- **संबंधित पाने:** Settings & Configuration, Booking Settings.

### 5.13 User Management

#### 5.13.1 Manage Users

- **मार्ग:** `/users/manage-users`
- **उद्देश:** HomeLead वापरणाऱ्या युजर्सची यादी. खात्यात 15 युजर्स आहेत.

| कॉलम (स्क्रीनवर) | अर्थ |
|---|---|
| Full Name | पूर्ण नाव |
| Contact Number | फोन |
| Email | ईमेल |
| Status | सक्रिय / निष्क्रिय |
| Action | क्रिया (पर्याय नोंदवलेले नाहीत) |

- **फिल्टर्स:** All, शोध (name / contact / email), Advanced filter.
- **क्रिया / बटणे:** Action कॉलम. परवानग्यांच्या यादीनुसार युजर जोडणे, बदलणे, पासवर्ड बदलणे, परवानग्या बदलणे, हटवणे, आयात आणि CSV / PDF निर्यात या क्रिया अस्तित्वात आहेत.
- **नियम:** युजर कोणत्या टीम, विभाग आणि पदाशी जोडलेला आहे, हे या यादीत नोंदवलेले नाही.
- **संबंधित पाने:** Permissions, Manage Teams, Manage Department, Manage Designations, Manage Targets, Attendance.

#### 5.13.2 Permissions

- **मार्ग:** `/users/manage-users/permissions` (मेनूतील नाव "Manage Permissions")
- **शीर्षक:** "Access Right & Permissions"
- **उद्देश:** युजरला कोणत्या विभागात काय करता येईल, हे बारकाईने ठरवणे.

**निवड**

| Field (स्क्रीनवर) | अर्थ | प्रकार / पर्याय |
|---|---|---|
| Access Type | परवानगी कोणासाठी | निवड: Individual ... (इतर पर्याय नोंदवलेले नाहीत) |
| Individuals* | कोणते युजर्स | युजर निवड, आवश्यक |

**परवानग्यांची रचना**

- वर "Grant Full Access" हा सगळ्या परवानग्या देणारा मुख्य चेकबॉक्स.
- परवानगी शोधण्याचा बॉक्स.
- प्रत्येक विभागाचा गट. गटात "Full Access" आणि बारीक चेकबॉक्स.

| गट (स्क्रीनवर) | नोंदवलेल्या परवानग्या |
|---|---|
| Dashboard Info Count | एकच परवानगी (Dashboard वरील आकड्यांसाठी, अनुमान) |
| Departments | List, Add, View, Update, Delete Group |
| Users | List, Add, View, Update, Update User Permission, Update User Password, Delete, Import Users, Export CSV, Export PDF |
| Teams | (तपशील नोंदवलेला नाही) |
| User Targets | (तपशील नोंदवलेला नाही) |
| Attendance | List, My Attendance, Export PDF / CSV |
| Lands | (तपशील नोंदवलेला नाही) |
| Projects | "Update Project CLP Phases", Export PDF / CSV आणि इतर |
| Contractors | (तपशील नोंदवलेला नाही) |
| Contractor Contracts | (तपशील नोंदवलेला नाही) |
| Contract Payments | (तपशील नोंदवलेला नाही) |
| इतर सर्व विभाग | याच पद्धतीने, प्रत्येक विभागासाठी |

- **फिल्टर्स:** परवानगी शोध.
- **क्रिया / बटणे:** Grant Full Access, प्रत्येक गटाचे Full Access, Cancel, Preview.
- **नियम:** "Preview" नंतर सेव्ह कसे होते, हे पाहिले नाही. सविस्तर रचना विभाग 8 मध्ये.
- **संबंधित पाने:** Manage Users, Manage Teams, Manage Department.

#### 5.13.3 Manage Targets

- **मार्ग:** `/users/manage-targets`
- **उद्देश:** प्रत्येक युजरचे विक्री किंवा लीड्सचे लक्ष्य आणि साध्य.

| कॉलम (स्क्रीनवर) | अर्थ |
|---|---|
| S.No. | अनुक्रमांक |
| User | युजर |
| Action | क्रिया (पर्याय नोंदवलेले नाहीत) |

- **फिल्टर्स:** शोध "sale or lead targets / achievements".
- **क्रिया / बटणे:** Action कॉलम.
- **नियम:** लक्ष्य प्रत्येक युजरसाठी असते. ते Sales Command Center मधील "Monthly Target" मध्ये दिसते. लक्ष्याचा कालावधी आणि रक्कम कशी भरतात, हे नोंदीत नाही.
- **संबंधित पाने:** Sales Command Center, Manage Users.

#### 5.13.4 Attendance

- **मार्ग:** `/users/attendance`
- **शीर्षक:** "Employee Attendance"
- **उद्देश:** कर्मचाऱ्यांची हजेरी.

| कॉलम (स्क्रीनवर) | अर्थ |
|---|---|
| S.No. | अनुक्रमांक |
| Name | कर्मचारी |
| Date | तारीख |
| In Time | आत आल्याची वेळ |
| Late In | उशिरा आले |
| Late Out | उशिरा गेले |
| Total Hours | एकूण तास |
| Action | क्रिया (पर्याय नोंदवलेले नाहीत) |

- **फिल्टर्स:** User निवड, Month टॉगल, तारीख श्रेणी, Clear.
- **क्रिया / बटणे:** Clear. परवानग्यांनुसार PDF / CSV निर्यात.
- **नियम:** शिफ्टच्या वेळा Settings > Attendance मध्ये ठरतात. हजेरी कशी नोंदवली जाते (ॲप, बायोमेट्रिक इ.), हे नोंदीत नाही. परवानग्यांमध्ये "My Attendance" आहे.
- **संबंधित पाने:** Manage Users, Settings (Attendance), Permissions.

### 5.14 Rent Management

#### 5.14.1 Manage Rent

- **मार्ग:** `/rent/manage-rent`
- **उद्देश:** युनिट्स भाड्याने देणे.

| Field (स्क्रीनवर) | अर्थ | प्रकार / पर्याय |
|---|---|---|
| Project | प्रोजेक्ट | निवड |
| Residential / Commercial | प्रकार | टॉगल |

- **फिल्टर्स:** वरील दोन.
- **क्रिया / बटणे:** नोंद नाही.
- **नियम:** प्रोजेक्ट निवडल्यावर भाड्यासाठी युनिट्सचा ग्रिड दिसतो, असे नोंदीत आहे. ग्रिडचे तपशील नोंदवलेले नाहीत.
- **संबंधित पाने:** Tenant Listing, Rent Collection (उघडली नाहीत), Booking Settings (Temporary Rent Booking Period), Bank-wise Collection (Rent Collection), Dashboard (भाड्याचे आकडे).

### 5.15 Contractors Management

#### 5.15.1 Manage Contract

- **मार्ग:** `/contract/manage-contract`
- **उद्देश:** कंत्राटदारांसोबतच्या कंत्राटांची यादी, रक्कम आणि बाकी.

| कॉलम (स्क्रीनवर) | अर्थ |
|---|---|
| S.No. | अनुक्रमांक |
| Name | कंत्राटदार / कंत्राट |
| Phone No. | फोन |
| Email | ईमेल |
| Project Name | प्रोजेक्ट |
| Reg./License No. | नोंदणी / परवाना क्रमांक |
| Amount | कंत्राटाची रक्कम |
| Balance | बाकी रक्कम |
| Generated Reference No. | सिस्टमने दिलेला संदर्भ क्रमांक |
| Action | क्रिया (पर्याय नोंदवलेले नाहीत) |

- **फिल्टर्स:** प्रोजेक्ट निवड, कंत्राटदार निवड, शोध.
- **क्रिया / बटणे:** Action कॉलम.
- **नियम:** "Balance" वरून कंत्राटाचे पैसे टप्प्याटप्प्याने दिले जातात असे दिसते (अनुमान).
- **संबंधित पाने:** Add Contractor, Manage Contractor, Add Contract, Contract Timeline, Make Contract Payments, Manage Contract Payments (सगळी उघडली नाहीत).

### 5.16 बांधकाम साहित्याची खरेदी

#### 5.16.1 MQR

- **मार्ग:** `/mqr-details`
- **शीर्षक:** "Material Quotation Request Management"
- **उद्देश:** स्टोअरसाठी लागणाऱ्या साहित्याचे दर पुरवठादारांकडून मागवणे.

| कॉलम (स्क्रीनवर) | अर्थ |
|---|---|
| S.No. | अनुक्रमांक |
| MQR No. | MQR क्रमांक |
| Issue Date | विनंती दिल्याची तारीख |
| Due Date | उत्तराची शेवटची तारीख |
| Store | कोणत्या स्टोअरसाठी |
| Quotation Count | किती पुरवठादारांची कोटेशन्स आली |
| Status | स्थिती (मूल्ये नोंदवलेली नाहीत) |
| Action | क्रिया (पर्याय नोंदवलेले नाहीत) |

- **फिल्टर्स:** नोंद नाही.
- **क्रिया / बटणे:** Action कॉलम.
- **नियम:**
  - पुढची साखळी MQR → PO → PO मंजुरी → GRN → स्टोअर अशी आहे (नोंदीतील अनुमान; विभाग 6.12).
  - MQR चा अर्थ: पानाच्या शीर्षकात "Material Quotation Request", पण मेनूच्या नोंदीत "material requirement" असे लिहिले आहे.
- **संबंधित पाने:** Add MQR, MQR Timeline, Purchase Orders, Manage GRN, Store पाने (उघडली नाहीत), Credit/Debit Notes, Settings (Inventory settings).

### 5.17 Help & Support

#### 5.17.1 Manage Tickets

- **मार्ग:** `/help-support/manage-tickets`
- **उद्देश:** "Manage and track all support tickets", म्हणजे मदतीच्या तिकिटांची नोंद आणि पाठपुरावा.

| कॉलम (स्क्रीनवर) | अर्थ | उदाहरण |
|---|---|---|
| S.No. | अनुक्रमांक | |
| Ticket No | तिकीट क्रमांक | |
| title | तिकिटाचे शीर्षक | |
| Priority | प्राधान्य | Low |
| Ticket Status | स्थिती | Pending |
| Category | श्रेणी | |
| Author | तिकीट काढणारा | |
| Assign To | ज्याच्याकडे दिले | |
| Action | क्रिया | पर्याय नोंदवलेले नाहीत |

- **फिल्टर्स:** शोध, स्थिती निवड, Advanced filter.
- **क्रिया / बटणे:** "Raise a ticket" (दाबले नाही).
- **नियम:** तिकीट कंपनीच्या आतल्या कामासाठी आहे की HomeLead च्या सपोर्ट टीमसाठी, हे नोंदीत नाही.
- **संबंधित पाने:** Manage Users (Assign To).

---

## 6. कामाचे प्रवाह

हे प्रवाह पानांची रचना, बटणे आणि सेटिंग्ज यांवरून जोडले आहेत. कोणताही प्रवाह सुरुवातीपासून शेवटपर्यंत प्रत्यक्ष चालवून पाहिला नाही, कारण अभ्यास फक्त पाहण्याचा होता. जी पायरी स्क्रीनवर थेट दिसली नाही, तिच्यापुढे "(अनुमान)" लिहिले आहे.

### 6.1 लीड येणे ते वाटप

1. **लीड येतो.** मार्ग:
   - प्रॉपर्टी पोर्टल्समधून आपोआप: 99 Acres, Magic Bricks, Housing.com, Proptiger, Square Yard, OLX.
   - Meta Ads च्या लीड फॉर्म्समधून आपोआप (Connect Accounts मधील जोडणी). फॉर्मचे नाव आणि प्रश्न-उत्तरे "Other Requirements" मध्ये येतात.
   - Website, Land Microsite, Project Microsite, Property Microsite मधून.
   - IVR मधून (फोन कॉल).
   - Broker मार्फत किंवा Direct.
   - हाताने: Add New Lead फॉर्म.
   - फाइलमधून: Manage Leads वरचे आयात बटण.
2. **डुप्लिकेट तपासणी.** संभाव्य डुप्लिकेटवर लाल "D" बिल्ला दिसतो. Search Duplicate पानावर टीम आणि "Includes visited property" नुसार शोध.
3. **वाटप.**
   - Add New Lead मध्ये "Assign To".
   - Manage Leads मध्ये ओळीवर "Re Assign", किंवा अनेक ओळी निवडून "Bulk Assign".
   - View Lead मध्ये "Assign To" जवळ "Re Assign".
   - Cold Leads मध्ये "Re Assign" आणि "Bulk Assign".
4. **जबाबदारी.** प्रत्येक लीडला Primary User आणि Secondary User असतो.
5. **इतिहास.** History मध्ये "Lead Assigned to <युजर>" आणि "Primary Assigned - <युजर>" अशा नोंदी वेळेसह राहतात.
6. **टॅग.** Hot, Warm, Cold इत्यादी टॅग्ज लावता येतात.

आपोआप वाटपाचा (आळीपाळीने किंवा नियमानुसार) कोणताही नियम नोंदींमध्ये दिसला नाही. Settings मधील "Leads" कार्डमध्ये असा नियम असू शकतो, पण ते उघडले नाही.

### 6.2 पाठपुरावा आणि साइट व्हिजिट

1. विक्री कर्मचारी Sales Command Center उघडतो. "Smart Lead List" मध्ये त्याचे लीड्स दिसतात.
2. "Call" बटणाने किंवा फोन नंबरच्या लिंकवरून फोन करतो.
3. "Follow-ups" बटणाने पुढचा पाठपुरावा ठरवतो (फॉर्म नोंदवलेला नाही).
4. लीडची माहिती पाठवतो: "Send Micro Site Link", "Send Project Website", "Send Location".
5. संवादाची नोंद होते: View Lead मधील "Most Recent Communication" (Communication Type, Meeting Date and Time, Site Visit Status, Follow Up / Next Meeting).
6. "Add Note" ने नोंद लिहितो.
7. साइट व्हिजिट ठरते. ती Sales Command Center मधील "Site Visits" कार्डमध्ये Upcoming म्हणून दिसते.
8. व्हिजिटनंतर "Add Visited Property" ने पाहिलेली प्रॉपर्टी नोंदवतो. ती "Lead Visited Property" टेबलमध्ये दिसते.
9. वेळ चुकली तर पाठपुरावा किंवा व्हिजिट "Missed" टॅबमध्ये दिसते.
10. हे सगळे "My Performance (KPI)" मध्ये मोजले जाते: Calls, Meetings, Site Visit Scheduled, Site Visited, Follow Ups.
11. Manage Leads मध्ये "Schedule Date" आणि "Follow up date" ने फिल्टर करता येते.

### 6.3 कोटेशन

1. लीडच्या ओळीवरील "..." मेनूमधून "Create Quotation" (फॉर्म उघडला नाही).
2. कोटेशनला "PBQ No." मिळतो.
3. कोटेशनमध्ये Sale Price, Booking Amount, Booking Date, Booking Amount Due Date, Payment Term, Contributor असते.
4. कोटेशन "Quotation Valid Date" पर्यंत वैध असते. हे दिवस Booking Settings मधील "Quotation Validity Period (days)" ने ठरतात.
5. ग्राहक कोटेशन मान्य करतो की नाही, हे "Is Approved By Client" (Yes / No) मध्ये नोंदवले जाते.
6. Compare Quotation पानावर अनेक कोटेशन्सची तुलना होते.
7. पाइपलाइनमध्ये लीड "Quotation sent" आणि पुढे "Negotiation" / "Converted" टप्प्यात जातो (टप्प्यांचा क्रम Sales Pipeline वरून).
8. बुकिंगकडे: "Can Book Unapproved Quote" बंद असेल तर मान्य न झालेल्या कोटेशनवर बुकिंग होत नसावे (अनुमान). "Direct Booking Allowed" चालू असेल तर कोटेशनशिवाय बुकिंग करता येत असावे (अनुमान).

### 6.4 तात्पुरते बुकिंग आणि त्याची मुदत

1. लीडच्या ओळीवरील "Book" बटणाने बुकिंग सुरू होते (बुकिंगचा फॉर्म उघडला नाही).
2. युनिट "Temporary Booked" स्थितीत जाते, म्हणजे ठरावीक दिवसांसाठी राखून ठेवले जाते.
3. दिवसांची संख्या Booking Settings मधील "Temporary Property Booking Period (days)" ने ठरते.
4. भाड्यासाठी वेगळी मुदत: "Temporary Rent Booking Period (days)". युनिटची स्थिती "Temporary Rent". आधीच भाड्याने असलेल्या युनिटवर तात्पुरते बुकिंग झाले तर "On Rent Temporary Booked".
5. मुदतीत रूपांतर झाले तर युनिट "Booked" आणि पुढे "Sold" होते.
6. रूपांतर झाले नाही तर तात्पुरते बुकिंग मुदतीनंतर संपते (नोंदीतील संकल्पना). त्यानंतर युनिट आपोआप "Available" होते का, हे तपासले नाही.
7. Lead Reports मध्ये हे "Temporary converted" या कॉलममध्ये मोजले जाते.

### 6.5 बुकिंगचे पैसे आणि दुहेरी तपासणी (मेकर-चेकर)

1. विक्री टीम बुकिंगचे पैसे (टोकन / बुकिंग रक्कम) नोंदवते. हे कोणत्या पानावर होते, हे नोंदीत नाही.
2. प्रत्येक पेमेंटला संदर्भ क्रमांक मिळतो: "#PROPAY/<PROJECT>/<YEAR>/<N>".
3. पेमेंट Verify Payment ("Flat Booking Payment") पानावर दिसते. तेथे खरेदीचा प्रकार "WITHOUT LOAN" किंवा "LOAN" दिसतो.
4. अकाउंट्स पैसे तपासते आणि हिरव्या "Confirm Payment" बटणाने मान्य करते.
5. मान्य झाल्यावरच पैसे हिशोबात धरले जातात (नोंदीतील संकल्पना).
6. जमा पैसे Ledger Payments आणि Bank-wise Collection मध्ये दिसतात (अनुमान: मान्य झालेले पैसेच).

### 6.6 पेमेंटच्या अटी: ग्राहक आणि बँक

1. Payment Terms पानावर Project आणि Customer निवडतात.
2. ग्राहकाची माहितीपट्टी दिसते: Sale Price, Token Amount, PAN Number, Aadhar Card इत्यादी.
3. एकूण किंमतीपैकी ग्राहकाचा स्वतःचा हिस्सा आणि बँकेचे कर्ज यांची विभागणी ठरवतात.
4. बँकेचे मंजुरीपत्र अपलोड करतात.
5. कोटेशनमधील "Payment Term" (उदा. Loan) आणि "Contributor" (उदा. Bank) याच विभागणीशी संबंधित आहेत (अनुमान).
6. Manage Loan मध्ये "Self Funding Amount" हा ग्राहकाचा हिस्सा दिसतो.

पायऱ्या 3 ते 4 प्रत्यक्ष पाहिल्या नाहीत, कारण ग्राहक निवडला नाही.

### 6.7 CLP हप्ते आणि स्मरणे

1. प्रोजेक्ट तयार करताना दुसऱ्या टप्प्यात "Define CLP" ने बांधकामाच्या टप्प्यांनुसार हप्ता योजना ठरते (हा टप्पा पाहिला नाही).
2. CLP टप्पे नंतर बदलण्यासाठी "Update Project CLP Phases" ही परवानगी लागते.
3. बुकिंगनंतर प्रत्येक ग्राहकाचे हप्ते CLP Payments पानावर स्वतंत्र ओळी म्हणून दिसतात: BOOKING AMOUNT, PLINTH, 1ST SLAB, 2ND SLAB ...
4. प्रत्येक हप्ता "Due" किंवा "Paid" असतो. भरण्याची पद्धत Online किंवा Cheque.
5. **एका ग्राहकाला स्मरण:** ओळीच्या मेनूतून "Send Reminder".
6. **एकत्र स्मरण:** Send CLP Reminder पानावर Project आणि Due Date निवडून "Send Reminder". त्या तारखेपर्यंत हप्ते देय असलेल्या सर्वांना स्मरण जाते.
7. **उशिरावर व्याज:** Booking Settings मधील "Interest Frequency" (किती वेळाने मोजायचे) आणि "Compound Interest Enabled" (चक्रवाढ). व्याजाचा दर कुठे ठरतो, हे नोंदीत नाही.
8. स्मरण कोणत्या माध्यमातून जाते (WhatsApp / SMS / Email), हे नोंदीत नाही.

### 6.8 कर्ज

1. ग्राहकाचे कर्ज Manage Loan पानावर नोंदवले जाते: Lead, Project, Loan Account No, Applicants.
2. रकमांचे टप्पे: Requested Amount (मागितलेली), Sanctioned Amount (मंजूर), Disbursed Amount (वाटप झालेली).
3. ग्राहकाचा स्वतःचा हिस्सा: Self Funding Amount.
4. स्थिती "Loan Status" मध्ये, उदा. "Sanctioned".
5. मंजुरीपत्र Payment Terms पानावर अपलोड होते.
6. विक्रीच्या यादीत (Manage Sales) "Finance Status" दिसते.
7. प्रोजेक्टला कर्ज देणाऱ्या बँका "Financer Banks Details" मध्ये असतात.

कर्जाची नोंद कशी जोडतात आणि स्थिती कशी बदलते, हे नोंदीत नाही.

### 6.9 परतावा

1. बुकिंग रद्द होते (कोणत्या पानावर, हे नोंदीत नाही).
2. रद्द बुकिंग्ज Dashboard मध्ये "Total Booking Cancelled" आणि Manage Sales मध्ये "Booking Cancelled" मध्ये मोजली जातात.
3. ग्राहकाला परत दिलेले पैसे Refund Booking Payments पानावर दिसतात: Customer Name, Contact Number, Payment Mode, Payment Status ("Paid").
4. एकूण परतावा Dashboard मध्ये "Total Refunded Amount" आणि Manage Sales मध्ये "Refund to Customer".
5. Lead Reports मध्ये असा लीड "Refunded" कॉलममध्ये मोजला जातो.

### 6.10 ब्रोकरचे कमिशन

1. ब्रोकरची नोंद Broker List मध्ये असते, परवाना क्रमांक आणि त्याच्या मुदतीसह.
2. ब्रोकरमार्फत आलेल्या लीडचा स्रोत "Broker" असतो.
3. ब्रोकरच्या लीड्सचा निकाल Lead Reports मधील "Broker reports" आणि Manage Sales मधील "Broker Performance" मध्ये दिसतो.
4. बुकिंग झाल्यावर Broker Payment पानावर कमिशनची ओळ दिसते: Broker Name, Broker Commission, Lead Name, Booking Date इत्यादी.
5. कमिशन मोजण्यासाठी पानावर "Open calculator" आहे.
6. पेमेंटचा संदर्भ क्रमांक ("reference no" / "generated ref") शोधता येतो.

कमिशनचा दर कुठे ठरतो आणि कमिशनवर कर कसा लागतो, हे नोंदीत नाही.

### 6.11 मार्केटिंग मोहिमा

1. संपर्क Contact ("Address Book") मध्ये ठेवले जातात आणि टॅग / गटात विभागले जातात (Contact Tag).
2. Bulk Whatsapp पानावर "+" ने नवीन मोहीम तयार होते (फॉर्म उघडला नाही).
3. मोहिमेत Name, Audience, Schedule Time असते. यादीत Billing Amount आणि Status दिसतात.
4. संदेशांचा खर्च "Balance" या प्रीपेड पाकिटातून जात असावा (अनुमान).
5. मोहिमांचे साचे Settings मधील "Marketing Templates" मध्ये असतात.
6. Bulk SMS आणि Bulk Email याच पद्धतीने असावेत (नोंदीनुसार; फक्त मेनूवरून माहिती, उघडले नाही).
7. Sales Command Center मध्ये "Run Campaign" ड्रॉपडाउन आहे, म्हणजे लीड यादीवरूनच मोहीम सुरू करता येत असावी (अनुमान).
8. Facebook, Instagram, LinkedIn, Twitter ही मेनूतील पाने सोशल पोस्टिंगसाठी असावीत (अनुमान; उघडली नाहीत).

### 6.12 साहित्य खरेदीची साखळी: MQR ते स्टोअर

ही साखळी मेनूतील पानांच्या नावांवरून आणि MQR / Credit/Debit Notes या दोन पानांवरून जोडली आहे. MQR सोडून बाकी पाने उघडली नाहीत.

1. **साहित्य आणि पुरवठादार:** Add/Manage Material, Add/Manage Supplier मध्ये मास्टर याद्या.
2. **MQR:** स्टोअरसाठी लागणाऱ्या साहित्याचे दर पुरवठादारांकडून मागवले जातात. MQR मध्ये Issue Date, Due Date, Store, Quotation Count, Status.
3. **MQR Timeline:** MQR चा वेळेनुसार प्रवास.
4. **Purchase Order (PO):** निवडलेल्या पुरवठादाराला खरेदी ऑर्डर.
5. **PO मंजुरी:** "Manage / Approve Purchase Order".
6. **GRN:** माल मिळाल्याची नोंद ("Manage GRN").
7. **स्टोअर:** माल "Store Materials" मध्ये येतो आणि "Store Material Ledger" मध्ये नोंद होते.
8. **स्टोअरमधील हालचाल:**
   - MSIR: साहित्य देणे (issue).
   - MSRR: साहित्य परत घेणे (return).
   - SMTR: एका स्टोअरमधून दुसऱ्या स्टोअरमध्ये हलवणे (transfer).
9. **हिशोब:** पुरवठादाराला पैसे "Purchase Payments" मध्ये. वजा-अधिक "Credit/Debit Notes" मध्ये (PO आणि GRN शी जोडलेले).
10. **सेटिंग्ज:** "Inventory settings" कार्डमध्ये stock, MQR, PO.

### 6.13 भाडे

1. Manage Rent मध्ये प्रोजेक्ट आणि Residential / Commercial निवडल्यावर भाड्यासाठी युनिट्सचा ग्रिड दिसतो.
2. भाड्याचे तात्पुरते बुकिंग "Temporary Rent Booking Period (days)" इतके दिवस टिकते.
3. भाडेकरू "Tenant Listing" मध्ये आणि भाडे वसुली "Rent Collection" मध्ये (दोन्ही उघडली नाहीत).
4. भाड्याची जमा रक्कम Bank-wise Collection मध्ये "Rent Collection" कॉलममध्ये दिसते.
5. Dashboard आणि Manage Sales मध्ये भाड्याचे आकडे: Total Rent Revenue, Total Rent Amount Required, Total Rented Units, Rent Amount, Rent Amount Pending, Rented Units.

---

## 7. एकत्रीकरणे (Integrations)

कोणतीही जोडणी चालू किंवा बंद करून पाहिली नाही. जोडणी तांत्रिकदृष्ट्या कशी होते (API किंवा इतर पद्धत), हे नोंदींमध्ये नाही.

| एकत्रीकरण | HomeLead मध्ये कुठे | नोंदवलेली माहिती | तपासले नाही |
|---|---|---|---|
| प्रॉपर्टी पोर्टल्स: 99 Acres, Magic Bricks, Housing.com, Proptiger, Square Yard, OLX | Manage Leads ("By Source Type" कार्ड्स) | प्रत्येक पोर्टलचे कार्ड, लोगो आणि लीड्सची संख्या. लीड्स आपोआप येतात. | पोर्टल कुठे जोडले जाते (सेटिंगचे पान) |
| Meta Ads | Connect Accounts; Manage Leads (स्रोत); View Lead (Other Requirements) | "Meta Ads Details": जोडलेले बिझनेस खाते, काम करण्याची स्थिती, "Valid till". लीड फॉर्मचे नाव आणि प्रश्न-उत्तरे लीडमध्ये येतात. | "Connect Now" / "Connect More" |
| सोशल खाती: Facebook, Twitter, LinkedIn | Connect Accounts (कार्ड्स); मेनूत स्वतंत्र पाने (Facebook, Instagram, LinkedIn, Twitter) | जोडण्याची कार्ड्स | मेनूतील पाने (उघडली नाहीत); Instagram चे कार्ड नोंदवलेले नाही |
| WhatsApp | Connect Accounts (कार्ड); Bulk Whatsapp; Whatsapp Message; Add New Lead (WhatsApp Number) | मोहिमांची यादी: Name, Audience, Billing Amount, Schedule Time, Status | Whatsapp Message पान; संदेश प्रत्यक्ष पाठवणे |
| SMS | Bulk SMS | फक्त मेनूवरून माहिती, उघडले नाही | सगळे |
| Email | Bulk Email; Booking Settings ("Document Sharing Channel", उदा. Email) | दस्त पाठवण्याचे माध्यम म्हणून Email | Bulk Email पान (उघडले नाही) |
| संदेशांचे पाकीट | Balance | प्रीपेड पाकीट (नोंदीनुसार) | पान उघडले नाही |
| संदेशांचे साचे | Settings: Marketing Templates, Communication Templates | कार्ड्सची नावे आणि वर्णन | उप-पाने |
| IVR | Manage Leads (स्रोत IVR); Cold Leads (Agent No, Virtual No); Settings (IVR Recording) | IVR मधून लीड्स; टेलिकॉलिंगचा साठा | IVR सेवा कोणती, कशी जोडतात |
| फोन (क्लिक करून फोन) | Manage Leads (+91 लिंक, "Call"); View Lead ("Call" स्प्लिट बटण); Sales Command Center ("Call") | क्लिक करून फोन | कॉल कोणत्या सेवेतून जातो |
| कॉलचे लिखित रूपांतर | Settings: Transcription | कार्डचे नाव ("call transcription") | उप-पान |
| मायक्रोसाइट्स | Manage Leads (स्रोत: Land / Project / Property Microsite; "Send Micro Site Link"); View Lead; Manage Properties ("Micro Site", "Share Microsite"); Settings (Microsite Settings) | प्रत्येक युनिटची शेअर करता येणारी मायक्रोसाइट; जमीन आणि प्रोजेक्टच्या मायक्रोसाइटवरूनही लीड्स येतात | मायक्रोसाइट कशी दिसते |
| वेबसाइट | Manage Leads (स्रोत Website; "Send Project Website"); Add New Project (Website) | वेबसाइटवरून लीड्स | वेबसाइट कशी जोडतात |
| नकाशे | Add New Project (Google Maps Link, "Fetch", Latitude, Longitude); Add New Lead (Latitude, Longitude); Map View; "Send Location" | Google Maps लिंकवरून ठिकाण मिळवणे; नकाशावर प्रोजेक्ट्स आणि जमिनी | नकाशाची सेवा कोणती (Map View साठी) |
| CAD / PDF लेआउट | Interactive Map | DXF, DWG किंवा PDF टाकून साइटचा क्लिक करता येणारा नकाशा | फाइल अपलोड, नकाशा |
| 360 अंश दृश्य | Add New Project, Add New Property ("360 Degree View Link") | लिंकचे फील्ड | दृश्य कसे उघडते |
| सुरक्षा (2FA, OTP) | Settings: Security | कार्डचे वर्णन | उप-पान |

---

## 8. सेटिंग्ज आणि परवानग्या

### 8.1 सेटिंग्जची कार्ड्स विषयानुसार

Settings & Configuration पानावर 21 कार्ड्स आहेत (पूर्ण यादी विभाग 5.12.1 मध्ये). विषयानुसार गट असे:

| विषय | कार्ड्स (स्क्रीनवर) | उघडले? |
|---|---|---|
| सामान्य | General, Export Settings, Notifications Settings | नाही |
| सुरक्षा आणि नोंद | Security (2FA, OTP), Audit Logs (युजर्सच्या क्रियांची नोंद) | नाही |
| कर्मचारी | Attendance (शिफ्टच्या वेळा) | नाही |
| लीड्स | Leads, Lead Types | नाही |
| बुकिंग | Booking Settings | होय |
| किंमत आणि इन्व्हेंटरी | PLC (Preferential Location Charges) master, Extra Charges master, Plot Categories, Inventory Tags | Extra Charges master: होय; बाकी नाही |
| खरेदी आणि साठा | Inventory settings (stock, MQR, PO) | नाही |
| कागदपत्रे | Documentation & Priorities | नाही |
| मार्केटिंग आणि संदेश | Campaign, Marketing Templates, Communication Templates | नाही |
| फोन | Transcription, IVR Recording | नाही |
| मायक्रोसाइट | Microsite Settings | नाही |

### 8.2 Booking Settings (थोडक्यात)

सविस्तर टेबल विभाग 5.12.2 मध्ये आहे.

- तात्पुरते बुकिंग: युनिटसाठी आणि भाड्यासाठी वेगवेगळे दिवस.
- कोटेशनची वैधता: दिवस.
- थेट बुकिंगची परवानगी: टॉगल.
- मान्य न झालेल्या कोटेशनवर बुकिंग: टॉगल.
- दस्त पाठवण्याचे माध्यम: अनेक पर्याय (उदा. Email).
- उशिरावरचे व्याज: किती वेळाने मोजायचे, आणि चक्रवाढ हवे का.

### 8.3 मास्टर याद्या (सगळीकडच्या)

| मास्टर यादी | कुठे | स्थिती |
|---|---|---|
| Lead Tags | Lead Management | उघडले |
| Lead Types | Settings | उघडले नाही |
| Inventory Tags | Settings | उघडले नाही |
| PLC (Preferential Location Charges) | Settings | उघडले नाही |
| Plot Categories | Settings | उघडले नाही |
| Extra Charges | Settings (`/master/extra-charges-list`) | उघडले |
| Expense Types, Expense Sub Types | General Expenses | उघडले नाही |
| Payee | Financial Management (Manage Payee) | उघडले नाही |
| Bank | Bank (Add Bank, Manage Bank) | उघडले नाही |
| Contact Tag | Marketing & Campaigning | उघडले नाही |
| Department | User Management (`/users/group-department`) | उघडले नाही |
| Designation | User Management (`/master/designation-list`) | उघडले नाही |
| Teams | User Management | उघडले नाही |
| Material, Supplier, Store | खरेदी आणि स्टोअर | उघडले नाही |

### 8.4 परवानग्यांची रचना

**कोणाला परवानगी द्यायची**

1. "Access Type" निवडणे. नोंदवलेला पर्याय "Individual". इतर पर्याय (उदा. टीम, विभाग, पद) नोंदवलेले नाहीत.
2. "Individuals*" मधून युजर्स निवडणे (आवश्यक).
3. "Cancel" किंवा "Preview".

**काय परवानगी द्यायची**

1. "Grant Full Access": एका चेकबॉक्सने सगळ्या परवानग्या.
2. परवानगी शोधण्याचा बॉक्स.
3. प्रत्येक विभागाचा स्वतंत्र गट. प्रत्येक गटात "Full Access" आणि बारीक चेकबॉक्स.

**बारीक परवानग्यांचे प्रकार (नोंदवलेल्या उदाहरणांवरून)**

| क्रिया (स्क्रीनवर) | अर्थ |
|---|---|
| List | यादी पाहणे |
| Add | नवीन नोंद जोडणे |
| View | एक नोंद उघडून पाहणे |
| Update | बदलणे |
| Delete | हटवणे |
| Import (उदा. Import Users) | फाइलमधून आयात |
| Export CSV, Export PDF | CSV / PDF निर्यात |
| खास क्रिया | उदा. Update User Permission, Update User Password, Update Project CLP Phases, My Attendance, Dashboard Info Count |

**नोंदवलेले गट:** Dashboard Info Count, Departments, Users, Teams, User Targets, Attendance, Lands, Projects, Contractors, Contractor Contracts, Contract Payments, आणि "प्रत्येक विभागासाठी असेच".

**माहिती दिसण्याची व्याप्ती**

- Manage Leads आणि Sales Command Center मध्ये दृश्याचा ड्रॉपडाउन आहे: All Leads / Team's Leads इत्यादी. म्हणजे युजरला सगळे लीड्स, टीमचे लीड्स किंवा स्वतःचे लीड्स दिसतात (अनुमान).
- Tasks मध्ये "My Task" आणि Attendance मध्ये "My Attendance" आहे.
- ही व्याप्ती परवानगीने ठरते का, हे नोंदीत नाही.

**सुरक्षा आणि नोंद**

- Settings मधील "Security" कार्डमध्ये 2FA आणि OTP.
- "Audit Logs" कार्डमध्ये युजर्सच्या क्रियांची नोंद.
- दोन्ही उप-पाने उघडली नाहीत.

---

## 9. अहवाल आणि विश्लेषण

### 9.1 KPI कार्ड्स

| पान | KPI कार्ड्स (स्क्रीनवर) |
|---|---|
| Dashboard | Total Sale Revenue, Total Sale Amount Required, Total Sold Units, Total Booked Units, Total Refunded Amount, Total Booking Cancelled, Total Rent Revenue, Total Rent Amount Required, Total Rented Units |
| Manage Sales ("Sales Analytics") | Sale Revenue, Sale Amount Pending, Rent Amount, Rent Amount Pending, Property Sold, Bookings, Booking Cancelled, Rented Units, Refund to Customer |
| Inventory, Manage Properties | Properties Booked, Properties Available, Properties On Rent |
| Sales Command Center ("My Performance (KPI)") | Calls, Meetings, Site Visit Scheduled, Site Visited, Follow Ups, Revenue |
| Sales Command Center | Monthly Target |

### 9.2 Statistics कार्ड्स

| पान | गट | कार्ड्स |
|---|---|---|
| Manage Leads | By Source Type | Direct, Broker, 99 Acres, Magic Bricks, Housing.com, Proptiger, Square Yard, IVR, Land Microsite, Project Microsite, Property Microsite, Meta Ads, Website, OLX |
| Manage Projects | By Project Type | Residential, Commercial, "Commercial, Residential" |
| Tasks | By Priority | Critical, High, Medium, Low |

### 9.3 चार्ट्स

| पान | चार्ट (स्क्रीनवर) | प्रकार / नियंत्रण |
|---|---|---|
| Dashboard | Inventory Analytics | गोल (डोनट), 7 स्थिती, "See All" |
| Dashboard | Total Leads | रेषा / क्षेत्र, "Weekly" |
| Dashboard | Total Bookings | चार्ट, "Weekly" |
| Dashboard | Leads Source | स्रोतानुसार, "See All Leads" |
| Lead Reports | Lead analysis | गोल (डोनट), तारीख श्रेणी |
| Sales Command Center | Sales Trends (₹ Lakhs) | कल |
| Sales Command Center | Sales Pipeline | 6 टप्पे: Lead in, Follow up, Negotiation, Quotation sent, Converted, Closed lost |
| Manage Sales | Sales Performance | "Week / Months", तारीख श्रेणी |

### 9.4 अहवालांची टेबल्स

| पान | अहवाल (स्क्रीनवर) | कॉलम्स |
|---|---|---|
| Lead Reports | User reports | Name, Total Leads, On going, Total site visits, Temporary converted, Converted, Dropped, Refunded |
| Lead Reports | Broker reports | वरीलप्रमाणेच, प्रत्येक ब्रोकरसाठी |
| Manage Sales | Property Sales | S.No., Lead No., Name, Flat/Shop No., Booking Amount, Sale Price, Finance Status, Action |
| Manage Sales | Sales Team Performance | Agent Name, Revenue, Total Assigned Leads, Converted Leads |
| Manage Sales | Broker Performance | नोंदवलेले नाहीत |
| Dashboard | Properties Listed | नोंदवलेले नाहीत (page size 10) |
| Ledger Payments | Summary | Name, Debit, Credit; वर एकूण रकमांचे बिल्ले |
| Bank-wise Collection | बँकनिहाय जमा | Bank Name, Account No., No. of Payments, Booking Collection, Rent Collection, Total Collected |
| Attendance | Employee Attendance | Name, Date, In Time, Late In, Late Out, Total Hours |

### 9.5 अहवालांची सामान्य नियंत्रणे

- तारीख श्रेणी (Lead Reports, Manage Sales, Attendance).
- प्रोजेक्ट निवड (Dashboard, Manage Sales आणि बहुतेक Financial पाने).
- स्रोत फिल्टर (Lead Reports).
- Week / Months, Weekly टॉगल.
- रिफ्रेश आणि कॉलम सेटिंग्ज (गिअर).
- निर्यात: Manage Leads आणि Manage Properties वरचे निर्यात बटण; परवानग्यांमध्ये Export CSV / Export PDF; Settings मध्ये "Export Settings".

### 9.6 वेळेनुसार नोंदी (उघडल्या नाहीत)

- MQR Timeline, Contract Timeline, Store Material Ledger, Audit Logs. फक्त नावे माहिती आहेत.

---

## 10. मर्यादा आणि लक्षात आलेल्या गोष्टी

### 10.1 मर्यादा

1. **सर्व्हरची मर्यादा:** पाने पटापट उघडल्यावर "Failed - Too many requests, please try again later." हा संदेश येतो.
2. **प्लॅनची मर्यादा:** 20 प्रोजेक्ट्स ("Remaining Project Limit: 15 / 20").
3. **आवृत्ती:** मेनूत "v0.0.1" असे लिहिलेले आहे.
4. **पावतीचे तपशील कमी:** पैशांच्या नोंदींमध्ये फक्त रक्कम, पद्धत (Online / Cheque / Cash), तारीख आणि संदर्भ क्रमांक दिसले. पावतीचे स्वतंत्र पान नोंदींमध्ये नाही.
5. **चेकची स्थिती:** चेक वटला / बाउन्स झाला अशी स्थिती दिसली नाही. फक्त "Confirm Payment" ने मान्यता.
6. **व्याज:** फक्त "Interest Frequency" आणि "Compound Interest Enabled" ही सेटिंग्ज दिसली. व्याजाचा दर, माफी किंवा व्याजाचा अहवाल दिसला नाही.
7. **कायदेशीर टप्पे:** करारनामा, नोंदणी, ताबा अशा तारखांची पाने नोंदींमध्ये नाहीत.
8. **सह-अर्जदार:** Manage Loan मध्ये "Applicants" कॉलम आहे. बुकिंगमध्ये सह-ग्राहक किंवा पुनर्विक्रीची नोंद दिसली नाही.
9. **मोबाईल:** मोबाईलवर पाने कशी दिसतात, हे कच्च्या नोंदींमध्ये तपासलेले नाही. आधीच्या अहवालात "काही प्रमाणात" असे म्हटले आहे, पण त्याचा आधार नोंदींमध्ये नाही.
10. **रिकाम्या याद्या:** Expense Register, Bulk Whatsapp ची Campaign List, Tasks, Extra Charges आणि मूळ प्रोजेक्टचे दस्तांचे साचे रिकामे होते. त्यामुळे भरलेल्या नोंदी कशा दिसतात, हे पाहिले नाही.

### 10.2 नावांमधील फरक: मेनू आणि पानाचे शीर्षक

| मेनूतील नाव | पानाचे शीर्षक |
|---|---|
| Manage Sales | Sales Analytics |
| Payment Terms | Define Payment Terms: Customer & Bank |
| Quotations | Manage Quotation(s) |
| Manage Loan | Loan Management |
| Add New Project | Project Master |
| Interactive Map | Site Layout |
| Inventory | Inventory Analytics |
| Add New Property | Property/Unit Master |
| Reports (Lead Management) | User reports / Lead analysis / Broker reports |
| Manage Broker | Broker List |
| Verify Payment | Flat Booking Payment |
| CLP Payments | CLP Booking Payments |
| Send CLP Reminder | CLP Payments Reminder |
| Broker Payment | Broker Payments |
| Contact | Address Book |
| All Task | Manage Tasks |
| Manage Permissions | Access Right & Permissions |
| Attendance | Employee Attendance |
| Manage MQR | Material Quotation Request Management |

- "CLP Payments" चा मार्ग `/sales-analytics/flat-booking` आहे, तर "Verify Payment" चे शीर्षक "Flat Booking Payment" आहे. "flat booking" हे शब्द दोन वेगळ्या पानांत आहेत.

### 10.3 नोंदींमधील विसंगती आणि अस्पष्ट गोष्टी

1. **MQR चा अर्थ:** मेनूच्या नोंदीत "material requirement", पण पानाच्या शीर्षकात "Material Quotation Request".
2. **दोन वेगळ्या टप्प्यांच्या याद्या:** Sales Pipeline मध्ये Lead in, Follow up, Negotiation, Quotation sent, Converted, Closed lost. Lead Reports मध्ये On going, Site visit, Temporary converted, Converted, Dropped, Refunded. दोन्हींचे नाते नोंदीत नाही.
3. **स्रोतांच्या याद्या:** Add New Lead च्या Source Type मध्ये Broker, Direct, Reference, Online ... असे पर्याय. Manage Leads च्या स्रोत कार्ड्समध्ये Reference आणि Online नाहीत, पण पोर्टल्स आणि मायक्रोसाइट्स आहेत. पोर्टलचे नाव "Sub Source Type" मध्ये जाते का, हे नोंदीत नाही.
4. **वाटपाचे कॉलम्स:** Cold Leads मध्ये "Assign To" आणि "Assigned To" हे दोन्ही कॉलम्स. View Lead मध्ये "Assign To", "Assignee" आणि "Primary User". त्यांतील फरक स्पष्ट नाही.
5. **Instagram:** मेनूत Instagram चे पान आहे, पण Connect Accounts च्या कार्ड्समध्ये Instagram नोंदवलेले नाही.
6. **सुविधांची संख्या:** "सुमारे 37" असे लिहिले आहे, पण नावे 30 नोंदवली आहेत.
7. **Bulk SMS / Bulk Email:** नोंदींमध्ये "Bulk Whatsapp सारखीच रचना" असे लिहिले आहे, पण ही पाने उघडली नाहीत, असेही लिहिले आहे.
8. **आपोआप वाटप:** आधीच्या अहवालात लीड "आपोआप किंवा हाताने" दिला जातो असे आहे. कच्च्या नोंदींमध्ये फक्त हाताने वाटप (Assign To, Re Assign, Bulk Assign) दिसते.
9. **टॅग्जची यादी:** आधीच्या अहवालात 7 टॅग्ज आहेत. कच्च्या नोंदींमध्ये 9 आहेत (Converting आणि Highlighted जास्त). या दस्तऐवजात 9 घेतले आहेत.
10. **आकडे:** युनिट्स (500 पेक्षा जास्त) आणि लीड्स (600 पेक्षा जास्त) हे आकडे फक्त आधीच्या अहवालात आहेत.
11. **My Task:** हे पान स्वतंत्रपणे उघडले की नाही, हे नोंदीत स्पष्ट नाही.

### 10.4 इतर निरीक्षणे

- **पैसे मान्य करण्याची दुहेरी तपासणी:** नोंदवणारा आणि मान्य करणारा वेगळे.
- **प्रत्येक युनिटची मायक्रोसाइट:** शेअर करता येणारी लिंक.
- **गरजेनुसार जुळणारी युनिट्स:** लीडच्या पानावरच आपोआप.
- **लीडचे वय:** दिवसांत, History कार्डवर.
- **एका क्लिकने पाठवणे:** मायक्रोसाइट, प्रोजेक्टची वेबसाइट आणि लोकेशन.
- **बारकाईच्या परवानग्या:** प्रत्येक विभागासाठी List / Add / View / Update / Delete / Import / Export.
- **हिशोबाचे स्वरूप:** हिशोबाची बहुतेक पाने प्रोजेक्टनुसार फिल्टर होतात.

---

## 11. या अभ्यासात न पाहिलेले भाग

### 11.1 न उघडलेली पाने (फक्त मेनूवरून माहिती, उघडले नाही)

| मॉड्यूल | पाने |
|---|---|
| User Management | Manage Department, Manage Designations, Manage Teams |
| Land Management | Add New Land |
| Broker Management | Add Broker |
| Contractors Management | Add Contractor, Manage Contractor, Add Contract, Contract Timeline |
| Rent Management | Tenant Listing, Rent Collection |
| General Expenses | Expense Types, Expense Sub Types |
| Financial Management | Manage Payee, Add Expense, Subscription Payments, Upgrade Plan, Make Contract Payments, Manage Contract Payments, Purchase Payments |
| Marketing & Campaigning | Contact Tag, Bulk SMS, Bulk Email, Whatsapp Message, Balance, Facebook, Instagram, LinkedIn, Twitter |
| Documentation | Miscellaneous Documents |
| Tasks | My Task (स्वतंत्रपणे उघडल्याची नोंद नाही) |
| Settings & Configuration | Booking Settings आणि Extra Charges सोडून बाकी 19 कार्ड्सची उप-पाने |
| Bank | Add Bank, Manage Bank |
| खरेदी आणि स्टोअर | Add/Manage Material, Add/Manage Supplier, Add MQR, Purchase Orders, Manage / Approve Purchase Order, Manage GRN, MQR Timeline, Add/Manage Store, Store Materials, Store Material Ledger, MSIR, MSRR, SMTR |

### 11.2 न दाबलेली बटणे आणि न बदललेली सेटिंग्ज

- Save आणि Save & Next (Add New Lead, Add New Project, Add New Property, Booking Settings, Extra Charges).
- Confirm Payment (Verify Payment).
- Send Reminder (CLP Payments आणि Send CLP Reminder).
- Connect Now / Connect More (Connect Accounts).
- Raise a ticket (Manage Tickets).
- Preview (Permissions).
- Status टॉगल्स (Manage Projects, Manage Properties).
- "+" बटणे (नवीन मोहीम, नवीन टास्क, नवीन प्रोजेक्ट, नवीन युनिट).
- Book, Re Assign, Bulk Assign, Bulk Delete, Delete Lead, Delete Property.
- Send Micro Site Link, Send Project Website, Send Location, Call.

### 11.3 निवड केल्यावरच दिसणारे, न पाहिलेले भाग

- Payment Terms: ग्राहक निवडल्यावर दिसणारी ग्राहक आणि बँकेची विभागणी आणि मंजुरीपत्राचे अपलोड.
- Generate Documents: ग्राहक निवडल्यावर दस्त तयार करण्याची क्रिया.
- Add New Project चा दुसरा टप्पा "Define CLP".
- Interactive Map: प्रोजेक्ट निवडल्यावर किंवा फाइल टाकल्यावर दिसणारा नकाशा.
- Manage Rent: प्रोजेक्ट निवडल्यावर दिसणाऱ्या युनिट्सच्या ग्रिडचे तपशील.
- Search Duplicate: शोधाचे निकाल.
- Compare Quotation: तुलनेचे निकाल.

### 11.4 न पाहिलेले फॉर्म आणि मेनू

- Create Quotation, Book, Add Note, Add Visited Property, Follow-ups यांचे फॉर्म.
- Edit Lead, View Property, Edit Property आणि इतर ओळींच्या मेनूमधील पाने.
- "Advanced filter" चे आतील पर्याय (सगळ्या पानांवर).
- "Run Campaign", "By Lead Type", "By Source Type" ड्रॉपडाउन्समधील पर्याय.
- बहुतेक पानांवरील "Action" कॉलमचे पर्याय (Manage Leads आणि Manage Properties सोडून).

### 11.5 वरच्या पट्ट्यातील आणि इतर भाग

- सगळीकडचा शोध ("Ctrl /"), सूचनांची घंटा, भाषा बदल, युजरचा मेनू आणि ॲक्टिव्हिटीचे आयकॉन: आतून उघडून पाहिले नाहीत.
- उजवीकडे खालचे चॅट / मदतीचे बटण उघडले नाही.
- मेनू बदलण्याचे पेन्सिल आयकॉन वापरले नाही.
- मायक्रोसाइट प्रत्यक्ष उघडून पाहिली नाही.
- ग्राहक, ब्रोकर किंवा कंत्राटदारासाठी स्वतंत्र लॉगिन / पोर्टल आहे का, हे पाहिले नाही.
