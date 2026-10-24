# Beans Online: फीचर्सचे सविस्तर दस्तऐवज

बिल्डरसाठी विक्री आणि वसुली (sales and collections) सांभाळणारे सॉफ्टवेअर

| बाब | माहिती |
|---|---|
| सॉफ्टवेअर | Beans Online (पानाचे शीर्षक "Sales Online") |
| अभ्यासाची तारीख | 24 ऑक्टोबर 2026 |
| पद्धत | युजरच्या लॉगिनने फक्त पाहणे (browse-only). कोणताही फॉर्म सबमिट केला नाही, काहीही बदलले नाही. |
| पाहिलेला प्रोजेक्ट | DDSR HERITAGE CHS (13 पैकी एक) |
| स्रोत | `notes-raw.md` (इंग्रजी रचना नोंदी) आणि `CRM-abhyas-ahaval.md` (आधीचा मराठी अहवाल). यापलीकडची कोणतीही माहिती यात नाही. |
| गोपनीयता | कोणत्याही व्यक्तीचे नाव, फोन, ईमेल, PAN, आधार, बँक खाते क्रमांक किंवा ग्राहकाशी जोडलेली रक्कम यात नाही. फक्त रचना, फील्ड्स, नियम आणि संख्या आहेत. |

**हे दस्तऐवज कसे वाचावे**

- सॉफ्टवेअरमधील पानांची नावे, मेनू, बटणे आणि फील्ड्स स्क्रीनवर जशी दिसतात तशी इंग्रजीत ठेवली आहेत. त्यांचा अर्थ मराठीत दिला आहे.
- पानांचे पत्ते `book1r.html` अशा स्वरूपात दिले आहेत. सगळी पाने `/ddsr4/` या भागाखाली आहेत. काही ठिकाणी नोंदींमध्ये `.html` लिहिलेले नाही, तिथे फक्त पानाचे नाव (उदा. `rep1`) दिले आहे.
- **"हे पाहिले नाही"** म्हणजे ती गोष्ट या अभ्यासात उघडली किंवा दिसली नाही.
- **"(अंदाज)"** म्हणजे ती गोष्ट नोंदींमध्ये स्पष्ट लिहिलेली नाही. स्तंभांच्या किंवा फील्ड्सच्या नावावरून काढलेला अर्थ आहे.
- `<Building>`, `<client>`, `<today>` असे कोनकंसातील शब्द म्हणजे स्क्रीनवर तिथे खरी माहिती दिसते. ती इथे नोंदवलेली नाही.

---

## अनुक्रमणिका

1. ओळख
2. मेनूची रचना
3. मुख्य घटक (Data entities) आणि त्यांचे नाते
4. मॉड्यूलनिहाय फीचर्स
5. कामाचे प्रवाह (Workflows)
6. पैशांचा हिशोब
7. अहवाल
8. पत्रे आणि संदेश
9. मास्टर याद्या आणि सेटिंग्ज
10. मर्यादा आणि कमतरता
11. या अभ्यासात न पाहिलेले भाग

---

## 1. ओळख

### 1.1 सॉफ्टवेअर काय आहे

- **नाव:** "Beans Online". ब्राउझरमधील पानाचे शीर्षक "Sales Online" असे आहे.
- **काम:** बिल्डरच्या विक्रीचा आणि पैशांच्या वसुलीचा हिशोब. यात फ्लॅट्सची यादी, ग्राहक, बुकिंग, स्लॅबनुसार हप्ते, पावत्या, परतफेड, जादा खर्च, थकबाकी, व्याज, GST, TDS, बँक कर्ज, कायदेशीर टप्प्यांच्या तारखा, रद्दीकरण, ब्रोकरचे कमिशन, पत्रे आणि अहवाल आहेत.
- **केंद्र:** बुकिंग. बहुतेक पानांवर आधी एक बुकिंग निवडावे लागते. त्यानंतर त्या बुकिंगचे पैसे, तारखा किंवा माहिती भरली जाते.
- **व्याप्ती:** काम ग्राहकाच्या नोंदीपासून आणि बुकिंगपासून सुरू होते. ते ताबा, सोसायटीकडे हस्तांतरण आणि पुनर्विक्रीपर्यंत चालते.
- **काय नाही:** बुकिंगच्या आधीचा भाग, म्हणजे चौकशी, लीड किंवा साइट व्हिजिट, या अभ्यासात कुठेही दिसला नाही. त्यामुळे हे "लीड CRM" नसून "बुकिंग आणि वसुली" सॉफ्टवेअर आहे.

### 1.2 कोण वापरतो

- बिल्डरच्या कार्यालयातील, लॉगिन असलेले युजर्स. हेडरमध्ये लॉगिन केलेल्या युजरचे नाव दिसते.
- सिस्टिममध्ये एकापेक्षा जास्त युजर्स आहेत. याचे पुरावे:
  - Receipts Entry मधील पावत्यांच्या इतिहासात "User" स्तंभ आहे. प्रत्येक पावती कोणी नोंदवली ते दिसते.
  - New Flats पानावर "List of Flats entered by `<user>`" अशी युजरनुसार यादी आहे.
  - Follow Details अहवालात पाठपुरावा करणाऱ्या 9 व्यक्तींमधून निवड करता येते.
- पानांच्या कामावरून दिसणारे वापरकर्ते (अंदाज):
  - विक्री: Quotation, Booking Entry, उपलब्ध फ्लॅट्सचे अहवाल.
  - खाते: पावत्या, परतफेड, ब्रोकर पेमेंट, कर, चेकची स्थिती.
  - वसुली: थकबाकी, पाठपुरावा, व्याज, मागणी पत्रे.
  - कागदपत्रे आणि कायदेशीर काम: करार, नोंदणी, NOC, CIDCO, बँक कर्ज.
- युजरच्या भूमिका किंवा परवानग्या ठरवण्याचे पान दिसले नाही.
- ग्राहक, ब्रोकर किंवा सोसायटी स्वतः लॉगिन करून काही पाहतात असे काहीही दिसले नाही.

### 1.3 अनेक कंपन्या आणि अनेक प्रोजेक्ट्स

- एका बिल्डर ग्रुपच्या दोन LLP कंपन्या आणि त्यांचे 13 सोसायटी प्रोजेक्ट्स एकाच सिस्टिममध्ये आहेत.
- कंपनीची माहिती (Company Info, `pro2.html`) आणि प्रोजेक्टची माहिती (Project Info, `pro1.html`) वेगवेगळी साठवली जाते.
- दोन्ही LLP मिळून कंपनीची 4 बँक खाती आहेत. पावती, परतफेड आणि ब्रोकर पेमेंटमध्ये पैसे कोणत्या खात्यात आले किंवा कोणत्या खात्यातून गेले ते निवडले जाते. खाते क्रमांक नोंदवलेले नाहीत.
- कोणता प्रोजेक्ट कोणत्या LLP चा आहे, ही जोडणी कुठे केली जाते ते पाहिले नाही.
- बहुतेक पाने फक्त निवडलेल्या प्रोजेक्टसाठी चालतात. पण पुढच्या गोष्टी सगळ्या प्रोजेक्ट्ससाठी एकत्र दिसतात:
  - मुख्य पानावरील "No Flat Allocation" सूचना.
  - Sales Report Global, Receipt Report Global आणि Dues Report Global हे अहवाल.
  - Broker Dues अहवालाचे शीर्षक "Global Broker Dues" असे आहे.

### 1.4 प्रोजेक्ट बदलणे (Project switcher)

1. पानाच्या वरच्या भागातील ड्रॉपडाउनमधून प्रोजेक्ट निवडा.
2. "Set" बटण दाबा. (तांत्रिक: फॉर्मचे नाव `sform`, फील्ड `op1`, आणि फॉर्म `nmain.html` ला पाठवला जातो.)
3. त्यानंतर उघडणारी सगळी पाने त्याच प्रोजेक्टसाठी चालतात. ही निवड संपूर्ण सिस्टिमसाठी लागू असते.

अभ्यासात "Set" दाबले नाही. म्हणजे दुसऱ्या प्रोजेक्टवर स्विच केले नाही.

### 1.5 हेडर

प्रत्येक पानाच्या वर पुढील माहिती दिसते:

- लॉगिन केलेल्या युजरचे नाव
- सॉफ्टवेअरचे नाव आणि चालू प्रोजेक्टचे नाव
- आजची तारीख आणि वार

### 1.6 तंत्रज्ञान

- जुन्या पद्धतीची, सर्व्हरवर तयार होणारी HTML पाने. ब्राउझर पाने "quirks mode" मध्ये दाखवतो, म्हणजे पाने आधुनिक HTML मानकांनुसार बनलेली नाहीत.
- कोणतेही JavaScript framework नाही. पानांमध्ये फक्त छोट्या inline scripts आहेत. उदाहरण: Booking Entry मधील एकूण किंमतीचे गणित.
- प्रत्येक काम एक साधा HTML फॉर्म आहे, जो POST ने सर्व्हरला पाठवला जातो.
- अपवाद: Available Flats GridView (`scus2.html`) हे पान नव्या रचनेचे आहे. त्यात निळा हेडर आणि गोलसर कडांचा फिल्टर पट्टा आहे.

**पानांच्या नावांची पद्धत** (नोंदींमधील पत्त्यांवरून दिसणारी):

| पद्धत | उदाहरणे | अर्थ |
|---|---|---|
| साधे नाव | `flat1.html`, `cus1.html`, `book1.html`, `rpay.html` | नोंद करण्याचे पान |
| शेवटी `x` | `flat1x`, `park1x`, `cus1x`, `cus2x`, `cus3x`, `flat1rx`, `book1x`, `rpayx`, `rpaydx` | फॉर्म जिथे पाठवला जातो ते पान |
| शेवटी `e` | `flat1e`, `cus1e`, `cus2e`, `cus3e`, `rpaye`, `book1ce` | आधीची नोंद बदलण्याचे (edit) पान |
| `t...` आणि `rep...` | `tcus1`, `tbook6`, `trpay7`, `rep1`, `rep3` | अहवाल |
| `blat...` | `blat1`, `blat2`, `blat5`, `blat5a`, `blat5c`, `blat8` | मास्टर याद्या |

**URL मधील parameters** (कोणती नोंद उघडायची ते सांगणारे):

| Parameter | कुठे दिसला | अर्थ |
|---|---|---|
| `knoxu` | `book1r.html?knoxu=`, `flat1r.html?knoxu=` | बुकिंगचा किंवा फ्लॅटचा id |
| `knox1` | `book1.html?knox1=` | आधीच निवडलेल्या ग्राहकाचा id |
| `knox2` | `flat1e.html?knox2=` | बदलायच्या फ्लॅटचा id |
| `knox` | `menu1.html?knox=N`, `rpaye.html?knox=` | अहवाल मेनूचा क्रमांक, किंवा पावतीचा id |
| `knox5` | `rep1?knox5=`, `rep3?knox5=` | फ्लॅटचा id (List of Flats मधून फ्लॅटनुसार अहवाल) |
| `ksg1` | `rep3.html?ksg1=` | बुकिंगचा id (Booking Info मधून Flat and Dues) |
| `kro1` | `blet3r.html?...&kro1=` | पावतीचा id (पावती पत्र) |
| `knox2`, `knox1` | `blet3r.html?knox2=&knox1=` | बुकिंगनुसार पत्रे. नोंदींमध्ये मूल्ये रिकामी आहेत, त्यामुळे नेमका अर्थ नोंदवलेला नाही. |
| `krno` | `mrep1.html?krno=` | बुकिंगचा id (Recovery Sheet) |
| `kno` | `blan2` मधील पत्र साचे, `?kno=` | बुकिंगचा id |
| `ktn1` | `cus2.html?ktn1=123`, `cus2e.html?ktn1=`, `cus2x` मधील लपवलेले फील्ड | पार्टीचा प्रकार (ब्रोकर किंवा कर्मचारी). edit पानात याच नावाने id जातो. |

### 1.7 अभ्यासाची पद्धत आणि तारीख

- **तारीख:** 24 ऑक्टोबर 2026.
- **पद्धत:** युजरच्या लॉगिनने फक्त पाहणे (browse-only). पाने उघडून वाचली. कोणताही फॉर्म सबमिट केला नाही. कोणतीही नोंद जोडली, बदलली किंवा काढली नाही.
- **परिणाम:** Refresh, Search, Show Quotation किंवा Set दाबल्यावरच दिसणारी माहिती पाहिली नाही, कारण ही बटणे फॉर्म पाठवतात.
- Change Password आणि Log Out मुद्दाम उघडले नाहीत. बदल करण्याची (edit) पाने, SMS पान, Recovery Sheet आणि Word पत्रांचे डाउनलोड पाहिले नाहीत.
- फक्त "DDSR HERITAGE CHS" हा एक प्रोजेक्ट पाहिला.
- नोंदींमध्ये फक्त रचना आहे. ग्राहकांची माहिती आणि रकमा नोंदवल्या नाहीत.

### 1.8 पाहिलेल्या प्रोजेक्टमधील आकडे

| गोष्ट | संख्या | कुठे दिसली |
|---|---|---|
| प्रोजेक्ट्स (सगळ्या कंपन्या मिळून) | 13 | Sales Report Global (13 प्रोजेक्ट्स + एकूण = 14 ओळी) |
| LLP कंपन्या | 2 | सामान्य माहिती |
| कंपनीची बँक खाती | 4 | Receipts Entry |
| फ्लॅट्स / युनिट्स | 245 | New Flats आणि Flat Info मधील यादी (List of Flats अहवालात 246 ओळी) |
| बुकिंगसाठी उपलब्ध फ्लॅट्स | 5 | Booking Entry |
| ग्राहक | 466 | New Clients, Booking Entry, Client List |
| चालू बुकिंग | 241 | Booking Info, Receipts Entry |
| रद्द धरून एकूण बुकिंग | 295 | Extra Expenses (म्हणजे सुमारे 54 रद्द; अंदाज: 295 − 241) |
| ब्रोकर (विक्रीचे स्रोत धरून) | 13 | New Broker |
| कर्मचारी (Executive) | 1 | New Executive |
| जमीनमालक | 0 | Land Owner |
| ब्रोकर असलेली बुकिंग | 1 | Broker Payments |
| थकबाकी असलेली बुकिंग | 185 | Due Bookings only |
| पाठपुराव्याच्या यादीतील बुकिंग | 26 | Payment Follow |
| पाठपुरावा करणाऱ्या व्यक्ती | 9 | Follow Details |
| Detailed Balance मधील ओळी | 242 | Detailed Balance |
| सोसायटीसाठीच्या यादीतील फ्लॅट्स | 240 | Flats for Soc List, Soc Comn Rep |
| इमारत x प्रकार ओळी | 34 | Project Sales |
| स्लॅब योजनेतील टप्पे (पाहिलेले उदाहरण) | 24 | Slab Setting |
| जादा खर्चाचे प्रकार | 1 | Extra Expenses |
| Client List मधील Category फिल्टरचे पर्याय | 57 | Client List |
| पत्रांचे साचे | 16 | Letter Formats |
| मुख्य मेनूतील पर्याय | 25 | मुख्य पान |
| अहवाल (Info Menus) | 30 | Info Menus |

---

## 2. मेनूची रचना

### 2.1 मुख्य पान (`nmain.html`)

मुख्य पानाच्या वर मेनू आहे. पर्याय स्तंभांमध्ये गटवार मांडलेले आहेत. खालील गटांची नावे अभ्यासाच्या नोंदींमधील आहेत.

| गट | मेनू (स्क्रीनवर) | पान | काम |
|---|---|---|---|
| Inventory (फ्लॅट्स) | New Flats | `flat1.html` | नवीन फ्लॅट / युनिट जोडणे |
| | New Parking | `park1.html` | इमारत आणि प्रकारानुसार पार्किंगची संख्या |
| | Info Menus | `menu1.html` | अहवालांचा मेनू |
| Parties (लोक) | New Clients | `cus1.html` | नवीन ग्राहक |
| | New Broker | `cus2.html` | नवीन ब्रोकर / विक्रीचा स्रोत |
| | New Executive | `cus2.html?ktn1=123` | नवीन कर्मचारी (Executive) |
| | Land Owner | `cus3.html` | जमीनमालक |
| | Flat Info | `flat1r.html` | एका फ्लॅटची संपूर्ण माहिती |
| Booking (बुकिंग) | Booking Entry | `book1.html` | नवीन बुकिंग |
| | Receipts Entry | `rpay.html` | पावती |
| | Booking Info | `book1r.html` | एका बुकिंगची संपूर्ण माहिती |
| | Extra Expenses | `rpayd.html` | बुकिंगवर जादा खर्च |
| Money out / changes (बाहेर जाणारे पैसे आणि बदल) | Cancellation | `book1c.html` | बुकिंग रद्द करणे |
| | Repayment | `rpayc.html` | ग्राहकाला परतफेड |
| | Broker Payments | `rpayb.html` | ब्रोकरला कमिशन देणे |
| | Quotation | `flat2r.html` | कोटेशन |
| Search (शोध) | Chq Search | `chisa.html` | चेक नंबरने पावती शोधणे |
| | Due Bookings only | `rep3a.html` | थकबाकी असलेली बुकिंग |
| Payment slabs (स्लॅब) | Define Slabs New | `slab1a.html` | स्लॅब योजना तयार करणे |
| | Slab Setting | `slab2.html` | फ्लॅट्सना स्लॅब योजना लावणे |
| | Slab Details | `slab3.html` | बुकिंगनुसार व्याजाचे नियम आणि गणित |
| Account (खाते) | Change Password | `bedi1.html` | पासवर्ड बदलणे (पाहिले नाही) |
| | Settings | `set1.html` | सॉफ्टवेअर सेटिंग्ज आणि मास्टर्स |
| | Log Out | `out.html` | बाहेर पडणे (पाहिले नाही) |

### 2.2 मुख्य पानावरील सूचना पट्टी

- मेनूच्या खाली सूचनांची यादी दिसते: "No Flat Allocation `<project>` : Booking No--N Customer--`<name>`".
- ही यादी **सगळ्या प्रोजेक्ट्सची** आहे, फक्त चालू प्रोजेक्टची नाही.
- प्रत्येक ओळ त्या बुकिंगच्या Booking Info पानाशी जोडलेली आहे: `book1r.html?knoxu=<bookingId>`.
- अर्थ: फ्लॅट न देता बुकिंग अस्तित्वात असू शकते. Booking Info मध्ये "Modify Flat Allocation" ने फ्लॅट दिला की ही सूचना सुटते.
- मुख्य पानावर याशिवाय दुसरे काही (डॅशबोर्ड, आकडे, आजची कामे) दिसले नाही.

### 2.3 Info Menus: अहवालांचा मेनू (`menu1.html?knox=N`)

- Info Menus उघडले की वरचा मुख्य मेनू जाऊन त्याजागी अहवालांचा मेनू येतो.
- परत जाण्यासाठी "Main Menus" आणि बाहेर पडण्यासाठी "Log_Out" हे दुवे असतात.
- एकूण 30 अहवाल, दोन गटांत:

**गट 1: Lists (याद्या), 9 अहवाल**

| क्र. | अहवाल (स्क्रीनवर) | पान |
|---|---|---|
| 1 | Client List | `tcus1` |
| 2 | Broker List | `tcus4` |
| 3 | Booking List | `tbook1` |
| 4 | List of Flats | `tcus2` |
| 5 | Available Flats ListView | `scus1` |
| 6 | Available Flats GridView | `scus2` |
| 7 | Flats for Soc List | `tbook7a` |
| 8 | Parking List | `tcus3` |
| 9 | Cancellation List | `tbook1c` |

**गट 2: Finance and reports (पैसे आणि अहवाल), 21 अहवाल**

| क्र. | अहवाल (स्क्रीनवर) | पान |
|---|---|---|
| 10 | Reg & Loan 2 | `tbook4a` |
| 11 | Sales Report Global | `tbook6` |
| 12 | Receipt Report Global | `tbook6b` |
| 13 | Dues Report Global | `rep4b` |
| 14 | Soc Comn Rep | `tbook7` |
| 15 | Mega Dues | `rep3c` |
| 16 | Project Sales | `rep6` |
| 17 | Detailed Balance | `rep1` |
| 18 | Broker Balance | `trpay2a` |
| 19 | Sales Consolidation | `rep2` |
| 20 | Payment Follow | `trcus1` |
| 21 | Follow Details | `trpay2b` |
| 22 | Bank APF nos | `tbook8` |
| 23 | Broker Dues | `tbook2b` |
| 24 | Flat and Dues | `rep3` |
| 25 | Rec Management | `trpays1` |
| 26 | Dues Report Lite | `rep3b` |
| 27 | Taxes | `tbook3` |
| 28 | Letter History | `trpay7` |
| 29 | Extra Exp Rep | `tbook9` |
| 30 | Letter Formats | `blan2` |

प्रत्येक अहवालाचे फिल्टर्स आणि स्तंभ विभाग 7 मध्ये आहेत.

### 2.4 Settings मधील दुवे (`set1.html`)

Settings पानावरून पुढील मास्टर पाने उघडतात: Add Type (`blat2`), Add Facing (`blat8`), New Building (`blat1`), Category in Payment Followup (`blat5c`), Project Info (`pro1`), Company Info (`pro2`). मुख्य पानावर परत जाण्यासाठी Goto Main. तपशील विभाग 4.23 ते 4.26 आणि विभाग 9 मध्ये आहे.

### 2.5 मेनूबाहेरची पाने (संपूर्ण यादी)

मेनूत नसलेली, पण दुव्यांनी किंवा फॉर्मने उघडणारी पाने:

| पान | काम | कुठून | स्थिती |
|---|---|---|---|
| `flat1x.html` | New Flats चा फॉर्म इथे जातो | New Flats | सबमिट केले नाही |
| `flat1e.html?knox2=` | फ्लॅटची माहिती बदलणे | New Flats मधील Edit | पाहिले नाही |
| `park1x` | पार्किंगचा फॉर्म इथे जातो | New Parking | सबमिट केले नाही |
| `cus1x` | ग्राहकाचा फॉर्म इथे जातो | New Clients | सबमिट केले नाही |
| `cus1e` | ग्राहकाची माहिती बदलणे | New Clients मधील Goto Edit, Booking Info मधील Edit Client Infos | पाहिले नाही |
| `cus2x` | ब्रोकर / कर्मचारी फॉर्म इथे जातो | New Broker, New Executive | सबमिट केले नाही |
| `cus2e.html?ktn1=` | ब्रोकर / कर्मचारी बदलणे | New Broker | पाहिले नाही |
| `cus3x`, `cus3e` | जमीनमालक जोडणे आणि बदलणे | Land Owner | पाहिले नाही |
| `flat1rx` | फ्लॅटच्या खुणा (Flat Markings) इथे जातात | Flat Info | सबमिट केले नाही |
| `book1x` | बुकिंगचा फॉर्म इथे जातो | Booking Entry | सबमिट केले नाही |
| `rpayx` | पावतीचा फॉर्म इथे जातो | Receipts Entry | सबमिट केले नाही |
| `rpaye.html?knox=` | पावती बदलणे | पावत्यांच्या इतिहासातील Action | पाहिले नाही |
| `rpaydx` | जादा खर्चाचा फॉर्म इथे जातो | Extra Expenses | सबमिट केले नाही |
| `book1ce` | रद्दीकरण बदलणे | Cancellation | पाहिले नाही |
| `blet3r.html?knox2=&knox1=(&kro1=)` | बुकिंगची किंवा पावतीची पत्रे | Booking Info, Receipts Entry, Slab Details | पत्रांचा मजकूर पाहिला नाही |
| `rep3.html?ksg1=` | एका बुकिंगचा Flat and Dues अहवाल | Booking Info | |
| `rep1?knox5=`, `rep3?knox5=` | एका फ्लॅटचा Detailed Balance आणि Flat and Dues | List of Flats | |
| `mrep1.html?krno=` | Recovery Sheet (छापण्याजोगे वसुली पत्रक) | Payment Follow | नवीन विंडोत उघडते. ब्राउझरने थांबवले, पाहिले नाही. |
| `sms2.html` | SMS पाठवणे | Slab Details मधील GST बॉक्स | पाहिले नाही |
| `fsat2` | Add Bank APF nos | Bank APF nos | मजकूर नोंदवलेला नाही |
| `blat5`, `blat5a` | Calling Message आणि Answering Message मास्टर | Payment Follow | विभाग 4.22 |
| `blan2.html?kno=` | Word पत्र साचे | Letter Formats | डाउनलोड केले नाही |

---

## 3. मुख्य घटक (Data entities) आणि त्यांचे नाते

### 3.1 घटकांची यादी आणि फील्ड्स

प्रत्येक घटकाचे स्क्रीनवरचे फील्ड्स खाली दिले आहेत. प्रत्येक फील्डचा अर्थ विभाग 4 मध्ये त्या पानाच्या तक्त्यात आहे.

| # | घटक | फील्ड्स (स्क्रीनवरची नावे) | नोंदीचे पान |
|---|---|---|---|
| 1 | कंपनी (LLP) | Address1-3, Service Tax No, PAN, GST No, Authorized Signatory | Company Info (`pro2`) |
| 2 | प्रोजेक्ट / सोसायटी | प्रोजेक्टचे नाव, Address1-3, Phone and Email, Site Address, Authorized Signatory Title + Name, Bank Account Details, IFSC, MICR, SWIFT, Service Tax No, Extra Charges - company name, RERA No; दुसरा बँक भाग: Account Number, Account Holder, Bank, Branch, IFSC. GridView मध्ये प्रोजेक्टचा फोटो आणि प्लॉट / सेक्टरचा पत्ता. | Project Info (`pro1`) |
| 3 | कंपनीचे बँक खाते | खाते (4 खाती). पावती, परतफेड आणि ब्रोकर पेमेंटमध्ये "Account" म्हणून निवड. | खाती तयार करण्याचे पान पाहिले नाही |
| 4 | इमारत | Building name (उदा. A, B). प्रत्येक प्रोजेक्टच्या वेगळ्या इमारती. | New Building (`blat1`) |
| 5 | फ्लॅटचा प्रकार | Type (1 RK ते 4BHK+T, OFFICE, SHOP, REFUSE AREA) | Add Type (`blat2`) |
| 6 | दिशा (Facing) | Club, Garden, Podium, Road | Add Facing (`blat8`) |
| 7 | मजला | Floor (51 पर्याय, Ground पासून) | मास्टर पान पाहिले नाही |
| 8 | फ्लॅट / युनिट | Building, Type, Facing, Floor, Flat No, Maintenance Area, Carpet Area, Balcony Area, Terrace Area, Booking Status, नोंदवणारा युजर | New Flats (`flat1`) |
| 9 | फ्लॅटच्या खुणा | For Lease, For Resale, Hold this flat, Particulars | Flat Info (`flat1r`) |
| 10 | पार्किंग उपलब्धता | Building, Type (Adjustable / Open / Stilt), Availability (संख्या) | New Parking (`park1`) |
| 11 | ग्राहक | Name, Company, Designation, Address1-3, City, Phone (Office, Residence), Mobile x2, Email x2, PAN no, Aadhaar, DOB, Date of Marriage, Do not Call, Only Email, Particulars, Communication Address (Address1-3, City), Name Plate Information | New Clients (`cus1`) |
| 12 | सह-ग्राहक | 2nd, 3rd, 4th joint client. प्रत्येकी सुमारे 6 फील्ड्स (नाव, PAN, फोन, मोबाईल, ईमेल इ.) | Booking Info (`book1r`) |
| 13 | पार्टी: ब्रोकर | Name, Company, Org Type, Address1-3, City, Office Phone, Mobile x2, Email, PAN, RERA No, Area of Operation, प्रकार (`ktn1`) | New Broker (`cus2`) |
| 14 | पार्टी: कर्मचारी (Executive) | ब्रोकरसारखेच, फक्त Org Type नाही | New Executive (`cus2?ktn1=123`) |
| 15 | जमीनमालक | Name, Address1-3, City, Phone, Mobile, Email | Land Owner (`cus3`) |
| 16 | किंमतीचा प्रकार (pricing Type) | Type1 ते Type7, उदा. "A-Founder Member", "A-New Member", "B-Founder Member", "B-New Member" | मास्टर पान पाहिले नाही |
| 17 | स्लॅब योजना | Building + pricing Type साठी: Slab No, Slab Name, Percent | Define Slabs New (`slab1a`) |
| 18 | स्लॅब वेळापत्रक (फ्लॅट / बुकिंगचे) | Sno, Slab Date, Slab, Percent, Agree Slab Amount, Extra Slab Amount; Special Start Date, Schedule Amount | Slab Setting (`slab2`) |
| 19 | बुकिंग | बुकिंग कोड (`<Building>-<FlatNo>`), ग्राहक, फ्लॅट, File No, Date, Consideration, Scheme, Broker, brokerage, Parking Infos, Reference, Bare Flat, Executive Name, Particulars, टोकन रक्कम, स्थिती (Booked), खुणा (Bare Flat only, Mark for Legal Proceeds, Needs Verification), Market Value, Construction Amount, Stamp Duty Amount, Registration Amount, Financing, General Particulars | Booking Entry (`book1`), Booking Info (`book1r`) |
| 20 | बुकिंगच्या तारखा | Booking Date, Due Amount Date, Booking Intimation Date, NOC Request Date, Allot Date, Agreement Date, Stamp Date, Reg No + Reg Date, NOC Date, CIDCO Transfer Date, CIDCO Mortgage NOC Date, Possession Date, Possession Reg Date, Mortgage Release Date, Maintenance Date | Booking Info |
| 21 | कर्ज | Bank Name (+ branch), Bank Person (name, phone, mobile, email), Loan Amount, Loan Tenure, Loan Sanction Date, Booking Accepted Date, Doc Submission Date, Loan Disbursement Date | Booking Info |
| 22 | पार्किंग वाटप | प्रत्येक पार्किंग प्रकारासाठी संख्या, आणि उरलेली Balance | Booking Info |
| 23 | मालकी साखळी (पुनर्विक्री) | First Client, 2nd / 3rd / 4th Resale Client; प्रत्येकासाठी Name, Reg No, Reg Date, Maint Date | Flat Info आणि Booking Info |
| 24 | व्याज सेटिंग्ज | Interest Rate per Annum, Interest Waived, Manual VAT, Discount Rate % | Slab Details (`slab3`) |
| 25 | पावती | Rec_No, Date, Account, Consideration, Extra Charges, Interest, TDS, GST, Total, Mode, Chq_No, Chq_Date, Bank (+ branch), Particulars, एक चेकबॉक्स, Dishonoured, User, स्थिती (Realized / Unrealized / Dishonoured) | Receipts Entry (`rpay`) |
| 26 | परतफेड | Pay_No, Date, Consideration, Extra Charges, Interest, TDS, GST, Mode, Chq No, Chq Date, Account, Particulars | Repayment (`rpayc`) |
| 27 | जादा खर्च | बुकिंग, Date, Expense Head, Amount, Particulars; खाते गट Builder A/c किंवा Society A/c (Extra Exp Rep वरून) | Extra Expenses (`rpayd`) |
| 28 | जादा खर्चाचा प्रकार (Expense Head) | सध्या एकच: "Other Charges - CIDCO Plot Mortgage" | मास्टर पान पाहिले नाही |
| 29 | ब्रोकर पेमेंट | बुकिंग, Pay_No, Date, Amount, Mode, Chq No, Chq Date, Account, Particulars | Broker Payments (`rpayb`) |
| 30 | रद्दीकरण | बुकिंग, Cancellation Request Date, Cancellation Accept Date, Bank NOC Received Date, Cancellation Deed Date, Cancellation Date, Cancellation Charge, Compensation, Particulars, एक रकमेचा बॉक्स | Cancellation (`book1c`) |
| 31 | पाठपुरावा (फोनची नोंद) | बुकिंग, Why you called?, What they told?, Particulars, Next follow-up date, पाठपुरावा करणारी व्यक्ती | Payment Follow (`trcus1`) |
| 32 | फोनचे कारण (Calling Message) | payment followup, loan documents, customer feedback | `blat5` |
| 33 | ग्राहकाचे उत्तर (Answering Message) | कारणानुसार उत्तरांची यादी (सध्या रिकामी) | `blat5a` |
| 34 | पाठपुराव्यासाठी ग्राहकाची श्रेणी (Client Category) | मुक्त श्रेणी (सध्या रिकामी) | `blat5c` |
| 35 | पत्र साचा | 16 Word (.docx) साचे | Letter Formats (`blan2`) |
| 36 | पत्रांचा इतिहास | बुकिंग, Letter Date, Letter Name, Particulars | Letter History (`trpay7`) |
| 37 | बँक APF | प्रोजेक्टला गृहकर्जासाठी मान्यता दिलेल्या बँकांचे APF क्रमांक | Bank APF nos (`tbook8`, `fsat2`) |
| 38 | अहवालाचा कालावधी | From Date, To Date | Settings (`set1`) |
| 39 | युजर | नाव (हेडरमध्ये), पावतीवरील User, फ्लॅट नोंदवणारा युजर, पासवर्ड | Change Password (`bedi1`, पाहिले नाही) |

### 3.2 घटकांचे नाते

```text
बिल्डर ग्रुप
 └─ कंपनी (2 LLP)  ──  कंपनीची बँक खाती (4)
     └─ प्रोजेक्ट / सोसायटी (एकूण 13)
         ├─ इमारत (A, B ...)
         │   ├─ फ्लॅट / युनिट
         │   │   ├─ प्रकार, दिशा, मजला (मास्टर याद्यांमधून)
         │   │   ├─ खुणा: For Lease / For Resale / Hold
         │   │   ├─ जमीनमालक (Nobody किंवा एक)
         │   │   └─ मालकी साखळी: First Client + 3 Resale Clients
         │   ├─ पार्किंग उपलब्धता (प्रकारानुसार संख्या)
         │   └─ स्लॅब योजना (इमारत + किंमतीचा प्रकार)
         ├─ बँक APF क्रमांक
         └─ बुकिंग
             ├─ मुख्य ग्राहक (1) + सह-ग्राहक (0 ते 3)
             ├─ फ्लॅट (0 किंवा 1; नंतर देता येतो)
             ├─ ब्रोकर / विक्रीचा स्रोत (0 किंवा 1) + कमिशन
             ├─ कर्मचारी (Executive)
             ├─ स्लॅब वेळापत्रक + व्याज सेटिंग्ज
             ├─ कायदेशीर तारखा, कर्ज, पार्किंग वाटप, खुणा
             ├─ पावत्या (अनेक), परतफेडी (अनेक)
             ├─ जादा खर्च (अनेक), ब्रोकर पेमेंट (अनेक)
             ├─ रद्दीकरण (0 किंवा 1)
             └─ पाठपुरावे (अनेक), पत्रे आणि पत्रांचा इतिहास (अनेक)
```

**नात्यांचे नियम:**

1. एका बिल्डर ग्रुपच्या दोन LLP आहेत. त्यांचे मिळून 13 प्रोजेक्ट्स आहेत.
2. एका प्रोजेक्टमध्ये अनेक इमारती आहेत. एका इमारतीत अनेक फ्लॅट्स आहेत. इमारतींची यादी प्रत्येक प्रोजेक्टची वेगळी आहे.
3. एक बुकिंग म्हणजे एक मुख्य ग्राहक आणि एक फ्लॅट. बुकिंग कोड `<Building>-<FlatNo>` असा असतो (उदा. A-108).
4. बुकिंगला फ्लॅट नंतरही देता येतो. तोपर्यंत ते बुकिंग मुख्य पानावर "No Flat Allocation" यादीत दिसते.
5. एका बुकिंगमध्ये जास्तीत जास्त 3 सह-ग्राहक (2nd, 3rd, 4th joint client) असतात.
6. एका बुकिंगला एक ब्रोकर आणि एक कर्मचारी निवडता येतो. ब्रोकर आणि कर्मचारी एकाच "पार्टी" यादीत आहेत. फक्त प्रकार वेगळा (`ktn1`).
7. "HEAD OFFICE" आणि "SOCIETY" सारखे विक्रीचे स्रोतही ब्रोकरच्या यादीत आहेत. म्हणजे "ब्रोकर" हे फील्ड विक्रीचा मार्ग (channel) म्हणूनही वापरले जाते.
8. एका बुकिंगवर अनेक पावत्या, परतफेडी, जादा खर्च, ब्रोकर पेमेंट, पाठपुरावे आणि पत्रे असू शकतात.
9. स्लॅब योजना इमारत आणि किंमतीचा प्रकार यांच्या जोडीसाठी बनते. ती Slab Setting मध्ये फ्लॅट्स निवडून लावली जाते. ती Slab Details आणि Payment Follow मध्ये बुकिंगनुसार दिसते.
10. एका फ्लॅटचे मालक बदलत जातात: पहिला ग्राहक (First Client) आणि पुढचे जास्तीत जास्त 3 पुनर्विक्री ग्राहक. ही साखळी Flat Info आणि Booking Info दोन्हीकडे दिसते.
11. एका फ्लॅटला एक जमीनमालक जोडता येतो (किंवा "Nobody").
12. रद्द झालेले बुकिंग सिस्टिममधून जात नाही. ते Cancellation List मध्ये दिसते, आणि पैशांच्या पानांवर (उदा. Extra Expenses) निवडता येते.
13. पावती, परतफेड आणि ब्रोकर पेमेंट प्रत्येक वेळी कंपनीच्या एका बँक खात्याशी जोडले जातात.
14. पाठपुराव्यासाठी ग्राहकाला एक श्रेणी (Client Category) देता येते.

**स्पष्ट नसलेली नाती:**

- ग्राहक, ब्रोकर आणि कर्मचारी यांच्या याद्या प्रत्येक प्रोजेक्टच्या वेगळ्या आहेत की सगळ्या प्रोजेक्ट्ससाठी एकच, हे नोंदींमध्ये स्पष्ट नाही. नोंदींमध्ये "466 clients in all" असे लिहिले आहे.
- कंपनीची बँक खाती आणि प्रोजेक्ट्स यांची जोडणी कशी आहे ते पाहिले नाही.
- कोटेशन सिस्टिममध्ये साठवले जाते का, ते पाहिले नाही.

---

## 4. मॉड्यूलनिहाय फीचर्स

प्रत्येक पानासाठी एकच रचना: उद्देश, फील्ड्स, क्रिया / बटणे, नियम आणि गणित, संबंधित अहवाल आणि दुवे, आणि जे पाहिले नाही ते.

| क्र. | पान | पत्ता |
|---|---|---|
| 4.1 | New Flats | `flat1.html` |
| 4.2 | New Parking | `park1.html` |
| 4.3 | Flat Info | `flat1r.html` |
| 4.4 | New Clients | `cus1.html` |
| 4.5 | New Broker | `cus2.html` |
| 4.6 | New Executive | `cus2.html?ktn1=123` |
| 4.7 | Land Owner | `cus3.html` |
| 4.8 | Booking Entry | `book1.html` |
| 4.9 | Booking Info | `book1r.html` |
| 4.10 | Receipts Entry | `rpay.html` |
| 4.11 | Extra Expenses | `rpayd.html` |
| 4.12 | Cancellation | `book1c.html` |
| 4.13 | Repayment | `rpayc.html` |
| 4.14 | Broker Payments | `rpayb.html` |
| 4.15 | Quotation | `flat2r.html` |
| 4.16 | Chq Search | `chisa.html` |
| 4.17 | Due Bookings only | `rep3a.html` |
| 4.18 | Define Slabs New | `slab1a.html` |
| 4.19 | Slab Setting | `slab2.html` |
| 4.20 | Slab Details | `slab3.html` |
| 4.21 | Payment Follow | `trcus1` |
| 4.22 | Payment Follow चे मास्टर्स आणि जोडलेली पाने | `blat5`, `blat5a`, `blat5c`, `trpay2b`, `mrep1` |
| 4.23 | Settings | `set1.html` |
| 4.24 | Project Info | `pro1` |
| 4.25 | Company Info | `pro2` |
| 4.26 | इतर मास्टर्स आणि खाते पाने | `blat1`, `blat2`, `blat8`, `tbook8` / `fsat2`, `bedi1`, `out` |

---

### 4.1 New Flats (`flat1.html`)

**उद्देश:** प्रोजेक्टमधील प्रत्येक युनिट (फ्लॅट, ऑफिस, दुकान) क्षेत्रफळासह नोंदवणे. हीच फ्लॅट्सची मुख्य यादी (inventory) आहे.

**फील्ड्स** (फॉर्म `flat1x.html` ला जातो):

| Field (स्क्रीनवर) | अर्थ | प्रकार / पर्याय |
|---|---|---|
| Building | इमारत | निवड यादी. प्रत्येक प्रोजेक्टची वेगळी (इथे A, B). |
| Type | युनिटचा प्रकार | निवड यादी: 1 RK, 1 RK + Terrace, 1 BHK, 1 BHK + Terrace, 2 BHK, 2 BHK + Terrace, 3 BHK, 4BHK+T, OFFICE, SHOP, REFUSE AREA |
| Facing | युनिट कोणत्या बाजूला उघडते | निवड यादी: Club, Garden, Podium, Road |
| Floor | मजला | निवड यादी, 51 पर्याय, Ground पासून सुरू |
| Flat No | फ्लॅट क्रमांक | मजकूर |
| Maintenance Area | मेंटेनन्सचे क्षेत्रफळ | संख्या, चौरस फूट (sq.ft). आवश्यक फील्ड. |
| Carpet Area | कार्पेट क्षेत्रफळ | संख्या, चौरस मीटर (sq.m) |
| Balcony Area | बाल्कनीचे क्षेत्रफळ | संख्या, sq.m |
| Terrace Area | टेरेसचे क्षेत्रफळ | संख्या, sq.m |

**उजवीकडील भाग:** आधी नोंदवलेल्या फ्लॅट्सची यादी (245 फ्लॅट्स) आणि Refresh बटण. यादीतून एक फ्लॅट निवडता येतो.

**खालचा तक्ता: "List of Flats entered by `<user>`"** (या युजरने नोंदवलेले फ्लॅट्स)

| स्तंभ | अर्थ |
|---|---|
| Sno | अनुक्रमांक |
| Flat_No | फ्लॅट क्रमांक. यावर क्लिक केल्यास Flat Info उघडते (`flat1r.html?knoxu=id`). |
| Type | प्रकार |
| Building | इमारत |
| Floor | मजला |
| Facing | दिशा |
| Maint_area | मेंटेनन्सचे क्षेत्रफळ |
| Carpet area | कार्पेट क्षेत्रफळ, sq.ft आणि sq.m दोन्ही |
| Balcony | बाल्कनी |
| Terrace area | टेरेस |
| Edit | फ्लॅटची माहिती बदलणे (`flat1e.html?knox2=id`) |

**क्रिया / बटणे:**
- **Add Flat:** नवीन फ्लॅट जोडतो.
- **Refresh:** उजवीकडील यादी पुन्हा आणतो.
- **Edit:** तक्त्यातील ओळीवरून फ्लॅट बदलण्याचे पान.

**नियम आणि गणित:**
- Maintenance Area भरणे आवश्यक आहे.
- Carpet Area चौरस मीटरमध्ये भरले जाते. यादीत ते चौरस फुटांतही आपोआप दिसते.
- इमारतींची यादी प्रोजेक्टनुसार बदलते.
- प्रकारांमध्ये फक्त घरे नाहीत. OFFICE, SHOP आणि REFUSE AREA हे प्रकारही आहेत.

**संबंधित अहवाल आणि दुवे:** Flat Info, List of Flats (`tcus2`), Available Flats ListView (`scus1`), Available Flats GridView (`scus2`), Project Sales (`rep6`), Sales Consolidation (`rep2`).

**पाहिले नाही:** फ्लॅट बदलण्याचे पान (`flat1e`). Project Sales अहवालात "Salable Area" स्तंभ आहे, पण New Flats मध्ये असे फील्ड दिसले नाही. ते कुठून येते ते पाहिले नाही.

---

### 4.2 New Parking (`park1.html`)

**उद्देश:** प्रत्येक इमारत आणि पार्किंगच्या प्रकारासाठी किती पार्किंग उपलब्ध आहेत ते नोंदवणे.

**फील्ड्स** (फॉर्म `park1x` ला जातो):

| Field (स्क्रीनवर) | अर्थ | प्रकार / पर्याय |
|---|---|---|
| Building | इमारत | निवड यादी |
| Type | पार्किंगचा प्रकार | निवड यादी: Adjustable, Open, Stilt |
| Availability | उपलब्ध पार्किंगची संख्या | संख्या |

**क्रिया / बटणे:** **Save Parking Availability:** उपलब्ध संख्या साठवतो.

**नियम आणि गणित:**
- पार्किंग वैयक्तिक क्रमांकाने (उदा. P-12) ठेवले जात नाही. फक्त "इमारत + प्रकार" नुसार संख्या ठेवली जाते.
- बुकिंगला पार्किंग देताना प्रकारानुसार संख्या दिली जाते. Booking Info मध्ये उरलेली संख्या (Balance) दिसते.

**संबंधित अहवाल आणि दुवे:** Booking Info मधील पार्किंग वाटप, Parking List (`tcus3`), Detailed Balance मधील "Park" आणि "Parking Infos" स्तंभ.

---

### 4.3 Flat Info (`flat1r.html`, `flat1r.html?knoxu=flatId`)

**उद्देश:** एका फ्लॅटची संपूर्ण स्थिती एका पानावर: तपशील, बुकिंगची स्थिती, खुणा, जमीनमालक आणि मालकांचा इतिहास.

**फ्लॅट निवडणे:** शोधण्याचा बॉक्स आणि फ्लॅट्सची यादी (245). यादीत प्रत्येक फ्लॅट "--`<flatNo>`-`<booked client>`" असा दिसतो, म्हणजे फ्लॅट क्रमांक आणि बुक केलेल्या ग्राहकाचे नाव.

**वरचे कार्ड (फक्त पाहण्यासाठी):**

| Field (स्क्रीनवर) | अर्थ |
|---|---|
| Flat | फ्लॅट क्रमांक |
| Building | इमारत |
| Type | प्रकार |
| Floor | मजला |
| Booking Status | बुकिंगची स्थिती, उदा. Available (उपलब्ध) किंवा Booked (बुक झालेला) |
| Flat Markings | फ्लॅटवर लावलेल्या खुणा |

**Flat Markings फॉर्म** (`flat1rx` ला जातो):

| Field (स्क्रीनवर) | अर्थ | प्रकार / पर्याय |
|---|---|---|
| For Lease | फ्लॅट भाड्याने द्यायचा आहे | खूण |
| For Resale | फ्लॅट पुनर्विक्रीसाठी आहे | खूण |
| Hold this flat | फ्लॅट राखून ठेवा. होल्ड केलेला फ्लॅट विक्रीसाठी मिळत नाही. | खूण |
| Particulars | शेरा | मजकूर |

**Land Owner भाग:**

| Field (स्क्रीनवर) | अर्थ | प्रकार / पर्याय |
|---|---|---|
| Land Owner | हा फ्लॅट कोणत्या जमीनमालकाचा आहे | निवड यादी; सुरुवातीला "Nobody" |

**"Resale Clients and Reg Infos" भाग (मालकी साखळी):**

| ओळ | Name | Reg No | Reg Date | Maint Date |
|---|---|---|---|---|
| First Client | पहिल्या ग्राहकाचे नाव | दस्त नोंदणी क्रमांक | नोंदणीची तारीख | मेंटेनन्स सुरू झाल्याची तारीख |
| 2nd Resale Client | दुसरा मालक | " | " | " |
| 3rd Resale Client | तिसरा मालक | " | " | " |
| 4th Resale Client | चौथा मालक | " | " | " |

**क्रिया / बटणे:**
- **Fix Markings:** खुणा साठवतो.
- **Fix Landowner:** जमीनमालक जोडतो.

**नियम आणि गणित:**
- "Hold this flat" लावलेला फ्लॅट विक्रीसाठी अडवला जातो.
- एका फ्लॅटला जास्तीत जास्त 4 मालक नोंदवता येतात (पहिला + 3 पुनर्विक्री).
- हीच मालकी साखळी Booking Info मध्येही दिसते.

**संबंधित अहवाल आणि दुवे:** New Flats मधील Flat_No दुवा, List of Flats (Lease / Resale / Hold / Land Owner फिल्टर्स आणि Markings स्तंभ), Flats for Soc List (Reg Date, Reg No, Maint Date), Land Owner मास्टर.

---

### 4.4 New Clients (`cus1.html`)

**उद्देश:** ग्राहकाची संपूर्ण माहिती आणि KYC (PAN, आधार) नोंदवणे. इथूनच त्या ग्राहकाचे बुकिंग सुरू करता येते.

**मुख्य फॉर्म** (`cus1x` ला जातो):

| Field (स्क्रीनवर) | अर्थ | प्रकार / पर्याय |
|---|---|---|
| Name | ग्राहकाचे नाव | मजकूर |
| Company | ग्राहक जिथे काम करतो ती कंपनी | मजकूर |
| Designation | पद | मजकूर |
| Address1, Address2, Address3 | पत्ता (तीन ओळी) | मजकूर |
| City | शहर | मजकूर |
| Phone (Office) | ऑफिसचा फोन | मजकूर |
| Phone (Residence) | घरचा फोन | मजकूर |
| Mobile (2 फील्ड्स) | दोन मोबाईल क्रमांक | मजकूर |
| Email (2 फील्ड्स) | दोन ईमेल | मजकूर |
| PAN no | PAN क्रमांक | मजकूर |
| Aadhaar | आधार क्रमांक | मजकूर |
| DOB | जन्मतारीख | दिवस / महिना / वर्ष हे तीन ड्रॉपडाउन, आणि "known" चेकबॉक्स (तारीख माहीत आहे) |
| Date of Marriage | लग्नाची तारीख | DOB सारखेच: तीन ड्रॉपडाउन + "known" चेकबॉक्स |
| DND: Do not Call | ग्राहकाला फोन करू नका | चेकबॉक्स |
| DND: Only Email | फक्त ईमेलने संपर्क करा | चेकबॉक्स |
| Particulars | शेरा, नोंदी | मोठा मजकूर बॉक्स (textarea) |

**दुसरा फॉर्म (प्रत्येक ग्राहकासाठी):**

| Field (स्क्रीनवर) | अर्थ | प्रकार / पर्याय |
|---|---|---|
| Communication Address: Address1-3, City | पत्रव्यवहाराचा पत्ता, मुख्य पत्त्यापेक्षा वेगळा | मजकूर |
| Name Plate Information | दरवाज्यावरच्या नावाच्या पाटीवर लिहायचा मजकूर | मजकूर |

**उजवीकडील भाग:**
- ग्राहकांची यादी (एकूण 466) आणि Refresh.
- **Goto Edit:** निवडलेल्या ग्राहकाची माहिती बदलण्याचे पान (`cus1e`).
- **"Booking for `<client>`"** दुवा: त्या ग्राहकासाठी थेट बुकिंग सुरू होते (`book1.html?knox1=clientId`).

**क्रिया / बटणे:** **Add Client**, Refresh, Goto Edit, "Booking for `<client>`".

**नियम आणि गणित:**
- जन्मतारीख आणि लग्नाची तारीख माहीत नसेल तर "known" चेकबॉक्स रिकामा ठेवता येतो.
- "Do not Call" आणि "Only Email" या ग्राहकाच्या संपर्काच्या पसंती आहेत.
- जन्मतारीख आणि लग्नाची तारीख यांवरून वाढदिवस आणि लग्नाच्या वाढदिवसाच्या शुभेच्छा देण्याचा हेतू दिसतो. पण शुभेच्छा पाठवण्याचे पान दिसले नाही.

**संबंधित अहवाल आणि दुवे:** Booking Entry, Booking Info मधील ग्राहकाचा भाग आणि "Edit Client Infos", Client List (`tcus1`, त्यात "Only Email Client" फिल्टर), Soc Comn Rep (Pan No, Mob No, Email).

**पाहिले नाही:** ग्राहक बदलण्याचे पान (`cus1e`).

---

### 4.5 New Broker (`cus2.html`)

**उद्देश:** ब्रोकर आणि विक्रीचे इतर स्रोत नोंदवणे.

**फील्ड्स** (फॉर्म `cus2x` ला जातो; त्यात `ktn1` हे लपवलेले फील्ड पार्टीचा प्रकार सांगते):

| Field (स्क्रीनवर) | अर्थ | प्रकार / पर्याय |
|---|---|---|
| Name | ब्रोकरचे नाव | मजकूर |
| Company | ब्रोकरची कंपनी / फर्म | मजकूर |
| Org Type | संस्थेचा प्रकार | निवड यादी: Individual, Proprietor, Partnership, Limited company |
| Address1, Address2, Address3 | पत्ता | मजकूर |
| City | शहर | मजकूर |
| Office Phone | ऑफिसचा फोन | मजकूर |
| Mobile (2 फील्ड्स) | दोन मोबाईल | मजकूर |
| Email | ईमेल | मजकूर |
| PAN | PAN क्रमांक | मजकूर |
| RERA No | ब्रोकरचा RERA नोंदणी क्रमांक | मजकूर |
| Area of Operation | ब्रोकर कोणत्या भागात काम करतो | मजकूर |

**क्रिया / बटणे:**
- **Add Broker:** नवीन ब्रोकर जोडतो.
- ब्रोकर्सची यादी (13) आणि त्यातून निवड.
- Edit: `cus2e.html?ktn1=id`.

**नियम आणि गणित:**
- ब्रोकरच्या यादीत खऱ्या ब्रोकर्सबरोबर "HEAD OFFICE" आणि "SOCIETY" सारख्या नोंदीही आहेत. म्हणजे "ब्रोकर" हे फील्ड विक्री कुठून आली (sale source / channel) हे सांगण्यासाठीही वापरले जाते.
- ब्रोकर आणि कर्मचारी एकाच पार्टी यादीत आहेत. फक्त प्रकार वेगळा.
- कमिशन (brokerage) बुकिंगनुसार ठेवले जाते, ब्रोकरच्या नोंदीत नाही.

**संबंधित अहवाल आणि दुवे:** Booking Entry मधील Broker, Booking Info मधील brokerage फील्ड्स, Broker Payments, Broker List (`tcus4`), Broker Balance (`trpay2a`), Broker Dues (`tbook2b`), List of Flats मधील Broker स्तंभ, Payment Follow मधील Broker.

**पाहिले नाही:** ब्रोकर बदलण्याचे पान (`cus2e`).

---

### 4.6 New Executive (`cus2.html?ktn1=123`)

**उद्देश:** विक्री करणारे कर्मचारी (Executive) नोंदवणे.

**फील्ड्स:** New Broker सारखेच, फक्त **Org Type नाही**: Name, Company, Address1-3, City, Office Phone, Mobile x2, Email, PAN, RERA No, Area of Operation. पानावरचा तक्ताही ब्रोकरसारखाच आहे.

**क्रिया / बटणे:** **Add Executive**.

**नियम आणि गणित:**
- सध्या फक्त 1 कर्मचारी नोंदवलेला आहे.
- हे पान आणि New Broker एकच पान (`cus2.html`) आहे. `ktn1=123` हा प्रकार दिल्यावर ते कर्मचाऱ्याचे पान होते.

**संबंधित अहवाल आणि दुवे:** Booking Entry मधील "Executive Name" (यादीत "FOUNDER MEMBER" हा पर्यायही आहे), Booking Info मधील Executive.

**पाहिले नाही:** कर्मचाऱ्यानुसार विक्रीचा वेगळा अहवाल अहवालांच्या यादीत दिसला नाही.

---

### 4.7 Land Owner (`cus3.html`)

**उद्देश:** जमीनमालक नोंदवणे. ज्या प्रोजेक्टमध्ये मूळ मालकांना (उदा. पुनर्विकासात) फ्लॅट दिले जातात, तिथे हे उपयोगी आहे.

**फील्ड्स** (फॉर्म `cus3x` ला जातो):

| Field (स्क्रीनवर) | अर्थ | प्रकार / पर्याय |
|---|---|---|
| Name | जमीनमालकाचे नाव | मजकूर |
| Address1, Address2, Address3 | पत्ता | मजकूर |
| City | शहर | मजकूर |
| Phone | फोन | मजकूर |
| Mobile | मोबाईल | मजकूर |
| Email | ईमेल | मजकूर |

**क्रिया / बटणे:** जोडण्याचे बटण (नाव नोंदवलेले नाही). Edit: `cus3e`.

**नियम आणि गणित:** या प्रोजेक्टमध्ये 0 जमीनमालक आहेत.

**संबंधित अहवाल आणि दुवे:** Flat Info मधील "Fix Landowner", List of Flats मधील "Land Owner flats" फिल्टर, जमीनमालकाची निवड, आणि "Land Owner" स्तंभ.

---

### 4.8 Booking Entry (`book1.html`, शीर्षक "Booking Request Entry")

**उद्देश:** नवीन बुकिंग नोंदवणे. ग्राहक आणि उपलब्ध फ्लॅट जोडून कराराची किंमत, ब्रोकर, कर्मचारी आणि टोकन रक्कम भरणे.

**पायरी 1: ग्राहक आणि फ्लॅट निवडणे**

| भाग | काय दिसते |
|---|---|
| डावीकडे: ग्राहक | शोधण्याचा बॉक्स आणि ग्राहकांची यादी (466) |
| उजवीकडे: फ्लॅट | शोधण्याचा बॉक्स आणि फक्त **उपलब्ध (AVAILABLE)** फ्लॅट्सची यादी (इथे 5) |
| बुकिंग कोड | `<Building>-<FlatNo>`, उदा. A-108 |
| आधीच निवडलेला ग्राहक | New Clients मधून "Booking for `<client>`" ने आल्यास `book1.html?knox1=clientId` ने ग्राहक आधीच निवडलेला असतो |

**पायरी 2: बुकिंगचा फॉर्म** (`book1x` ला जातो):

| Field (स्क्रीनवर) | अर्थ | प्रकार / पर्याय |
|---|---|---|
| File No | बुकिंगच्या फाइलचा क्रमांक | मजकूर |
| Date | बुकिंगची तारीख | तारीख, आवश्यक |
| Consideration | कराराची किंमत (Consideration, agreement value) | रक्कम, आवश्यक |
| Scheme | योजना | निवड यादी (पर्याय नोंदवलेले नाहीत) |
| Broker | ब्रोकर / विक्रीचा स्रोत | निवड यादी |
| brokerage रक्कम | ब्रोकरचे कमिशन | रक्कम. ब्रोकर निवडल्यावरच हा बॉक्स दिसतो. |
| Parking Infos | पार्किंगबद्दल माहिती | मजकूर |
| Reference | संदर्भ | मजकूर |
| Bare Flat | "This flat needs no modification": फ्लॅटमध्ये कोणतेही बदल नकोत | खूण |
| Executive Name | विक्री करणारा कर्मचारी | निवड यादी; यादीत "FOUNDER MEMBER" हा पर्यायही आहे |
| Particulars | शेरा | मजकूर |
| टोकन रक्कम | बुकिंगच्या वेळी मिळालेली रक्कम | रक्कम |
| Move to Receipts | टोकन रक्कम थेट पावती म्हणून नोंदवा | चेकबॉक्स |

**क्रिया / बटणे:** **Booking:** बुकिंग तयार करतो.

**नियम आणि गणित:**
- फक्त उपलब्ध फ्लॅट्स निवडता येतात. होल्ड केलेला फ्लॅट विक्रीसाठी अडवला जातो.
- बुकिंग कोड इमारत आणि फ्लॅट क्रमांकावरून बनतो.
- "Move to Receipts" निवडल्यास टोकन रक्कम वेगळी Receipts Entry न करता पावती म्हणून नोंदवली जाते.
- पानाच्या JavaScript मध्ये एकूण किंमतीचे जुने सूत्र आहे:

```text
एकूण = Consideration
       + इतर खर्च (स्टॅम्प ड्युटी + नोंदणी फी + जास्तीत जास्त 4 इतर खर्च)
       + कर (Consideration च्या ठरलेल्या टक्केवारीने)

जुन्या कोडमधील कर: सर्व्हिस टॅक्स 2.6% आणि VAT 1%
```

- आज GST वेगळा ठेवला जातो (Booking Info पहा). वरचे सूत्र जुन्या करांच्या काळातले आहे.
- सूत्रातील "इतर खर्च" भरण्याचे फील्ड्स स्क्रीनवर कुठे दिसतात ते नोंदवलेले नाही. सूत्र फक्त पानाच्या कोडमध्ये आढळले.

**संबंधित अहवाल आणि दुवे:** New Clients ("Booking for `<client>`"), Booking Info, Receipts Entry, Booking List (`tbook1`), मुख्य पानावरील "No Flat Allocation" सूचना.

**पाहिले नाही:** "Booking" बटण दाबल्यानंतर काय होते. Scheme चे पर्याय.

---

### 4.9 Booking Info (`book1r.html`, `book1r.html?knoxu=bookingId`)

**उद्देश:** एका बुकिंगची संपूर्ण माहिती एकाच पानावर. हे सिस्टिमचे सगळ्यात महत्त्वाचे पान आहे. सह-ग्राहक, किंमत, कायदेशीर तारखा, कर्ज, फ्लॅट आणि पार्किंग वाटप, आणि खुणा इथेच भरल्या जातात.

**बुकिंग निवडणे:** डावीकडे शोधण्याचा बॉक्स आणि बुकिंगची यादी (241). प्रत्येक ओळ "`<code>`-`<client>`" अशी दिसते.

#### 4.9.1 सारांश बॉक्स

| ओळ | एकूण | वजा | अधिक | = |
|---|---|---|---|---|
| Flat Cost | फ्लॅटची एकूण किंमत | Received (मिळालेली) | Repaid (परत दिलेली) | Balance (बाकी) |
| GST | एकूण GST | Received | Repaid | Balance |

- बुकिंगची स्थिती, उदा. Booked.
- GST चा हिशोब फ्लॅटच्या किंमतीपासून पूर्णपणे वेगळा ठेवला जातो.

#### 4.9.2 Info (मूळ माहिती)

| Field (स्क्रीनवर) | अर्थ |
|---|---|
| File No | फाइल क्रमांक |
| Client | मुख्य ग्राहक. सोबत "Edit Client Infos" दुवा (`cus1e`). |
| Consideration | कराराची किंमत, वजा मिळालेली रक्कम, = बाकी |
| Booking Date | बुकिंगची तारीख |
| Scheme | योजना |
| PAN | ग्राहकाचा PAN |

#### 4.9.3 Markings (बुकिंगवरच्या खुणा)

| Field (स्क्रीनवर) | अर्थ | प्रकार |
|---|---|---|
| Bare Flat only | फक्त बेअर फ्लॅट, कोणतेही बदल नकोत | खूण |
| Mark for Legal Proceeds | या बुकिंगवर कायदेशीर कारवाई करायची आहे | खूण |
| Needs Verification | या बुकिंगची तपासणी हवी | खूण |

बटण: **Fix Markings**.

#### 4.9.4 ग्राहकाचा भाग आणि सह-ग्राहक

- **ग्राहकाचा भाग:** नाव, पत्ता, फोन. ही माहिती ग्राहक मास्टरमधून येते.
- **सह-ग्राहक:** 2nd, 3rd आणि 4th joint client. प्रत्येकासाठी सुमारे 6 फील्ड्स:

| Field (स्क्रीनवर, प्रत्येक सह-ग्राहकासाठी) | अर्थ |
|---|---|
| Name | सह-ग्राहकाचे नाव |
| PAN | PAN क्रमांक |
| Phone | फोन |
| Mobile | मोबाईल |
| Email | ईमेल |
| (आणखी एक-दोन फील्ड्स) | नोंदींमध्ये "etc." असे आहे; नेमकी नावे नोंदवलेली नाहीत |

बटण: **Fix Client and Pan Infos**.

#### 4.9.5 व्यवहाराची माहिती (Deal values)

| Field (स्क्रीनवर) | अर्थ | प्रकार / पर्याय |
|---|---|---|
| File No | फाइल क्रमांक | मजकूर |
| Consideration | कराराची किंमत | रक्कम |
| Broker | ब्रोकर / विक्रीचा स्रोत | निवड यादी |
| brokerage: amount | ब्रोकरचे कमिशन | रक्कम |
| brokerage: आणखी 3 फील्ड्स | नोंदींनुसार बहुधा टक्केवारी, वजावट (deduction) आणि GST. नावे निश्चित नाहीत. | रक्कम / टक्केवारी |
| Market Value | बाजारमूल्य | रक्कम |
| Construction Amount | बांधकामाची रक्कम | रक्कम |
| Stamp Duty Amount | स्टॅम्प ड्युटीची रक्कम | रक्कम |
| Registration Amount | नोंदणी फीची रक्कम | रक्कम |
| Parking Info | पार्किंगबद्दल माहिती | मजकूर |
| Reference | संदर्भ | मजकूर |
| Executive | कर्मचारी | निवड यादी |
| Financing | पैसे कसे भरणार | Loan (बँक कर्ज) किंवा Self (स्वतःचे पैसे) |
| General Particulars | सामान्य शेरा | मजकूर |

बटण: **Modify Particulars**.

#### 4.9.6 बुकिंगच्या टप्प्यांच्या तारखा (Lifecycle dates)

प्रत्येक तारखेसाठी दिवस / महिना / वर्ष असे तीन ड्रॉपडाउन आणि "is set" चेकबॉक्स (ही तारीख भरली आहे) असतो. स्क्रीनवरचा क्रम:

| क्र. | Field (स्क्रीनवर) | अर्थ |
|---|---|---|
| 1 | Booking Date | बुकिंगची तारीख |
| 2 | Due Amount Date | रक्कम देय झाल्याची तारीख (नेमका अर्थ नोंदवलेला नाही) |
| 3 | Booking Intimation Date | बुकिंगची सूचना दिल्याची तारीख |
| 4 | NOC Request Date | NOC मागितल्याची तारीख |
| 5 | Allot Date | फ्लॅट वाटपाची (allotment) तारीख |
| 6 | Agreement Date | करारनाम्याची तारीख |
| 7 | Stamp Date | स्टॅम्प ड्युटी भरल्याची तारीख |
| 8 | Reg No + Reg Date | दस्त नोंदणीचा क्रमांक आणि नोंदणीची तारीख |
| 9 | NOC Date | NOC मिळाल्याची तारीख |
| 10 | CIDCO Transfer Date | CIDCO कडे हस्तांतरण झाल्याची तारीख |
| 11 | CIDCO Mortgage NOC Date | गहाणासाठी CIDCO ची NOC मिळाल्याची तारीख |
| 12 | Possession Date | ताबा दिल्याची तारीख |
| 13 | Possession Reg Date | ताब्याची नोंदणी झाल्याची तारीख |
| 14 | Mortgage Release Date | गहाणमुक्तीची तारीख |
| 15 | Maintenance Date | मेंटेनन्स सुरू झाल्याची तारीख |

बटण: **Save Modifications**.

CIDCO ही नवी मुंबईतील भाडेपट्ट्याची (leasehold) जमीन देणारी प्राधिकरण संस्था आहे. CIDCO हस्तांतरण आणि CIDCO गहाण NOC हे टप्पे या भागापुरते (region-specific) आहेत.

#### 4.9.7 कर्ज (Loan)

| Field (स्क्रीनवर) | अर्थ | बटण |
|---|---|---|
| Bank Name (+ branch) | कर्ज देणारी बँक आणि शाखा | Modify Loan Info |
| Bank Person: name, phone, mobile, email | बँकेतील संपर्क अधिकारी | Modify Loan Info |
| Loan Amount | कर्जाची रक्कम | Modify Loan Info |
| Loan Tenure | कर्जाची मुदत | Modify Loan Info |
| Loan Sanction Date | कर्ज मंजूर झाल्याची तारीख | स्वतःचे Fix बटण |
| Booking Accepted Date | बँकेने बुकिंग स्वीकारल्याची तारीख (अंदाज) | स्वतःचे Fix बटण |
| Doc Submission Date | कागदपत्रे बँकेत जमा केल्याची तारीख | स्वतःचे Fix बटण |
| Loan Disbursement Date | कर्जाची रक्कम दिल्याची (वाटप) तारीख | स्वतःचे Fix बटण |

#### 4.9.8 फ्लॅट वाटप (Flat allocation)

| Field (स्क्रीनवर) | अर्थ | प्रकार / पर्याय |
|---|---|---|
| Select Flat | या बुकिंगला कोणता फ्लॅट | निवड यादी: "No Flat" किंवा फ्लॅट कोड |

बटण: **Modify Flat Allocation**. मुख्य पानावरील "No Flat Allocation" सूचना याच पानावरून सोडवल्या जातात.

#### 4.9.9 पार्किंग वाटप (Parking allocation)

| Field (स्क्रीनवर) | अर्थ |
|---|---|
| प्रत्येक पार्किंग प्रकार (Adjustable / Open / Stilt ...) | या बुकिंगला त्या प्रकारचे किती पार्किंग दिले ती संख्या |
| Balance | त्या प्रकारचे अजून किती पार्किंग उरले |

बटण: **Modify Parking Information**.

#### 4.9.10 मालकी साखळी (Resale chain)

First Client ते 4th Resale Client, प्रत्येकासाठी Name, Reg No, Reg Date, Maint Date. Flat Info मधल्या भागासारखाच (विभाग 4.3).

#### 4.9.11 नियम आणि गणित

```text
Flat Cost Balance = Flat Cost (एकूण) − Received + Repaid
GST Balance       = GST (एकूण) − Received + Repaid
Consideration Balance = Consideration − Received
```

- प्रत्येक भाग वेगळ्या बटणाने साठवला जातो: Fix Markings, Fix Client and Pan Infos, Modify Particulars, Save Modifications, Modify Loan Info, कर्जाच्या प्रत्येक तारखेचे Fix, Modify Flat Allocation, Modify Parking Information.
- तारीख फक्त "is set" चेकबॉक्स लावल्यावर भरलेली मानली जाते (अंदाज: चेकबॉक्सच्या नावावरून).

#### 4.9.12 संबंधित अहवाल आणि दुवे

- ग्राहकाची माहिती बदलणे: `cus1e` ("Edit Client Infos").
- या बुकिंगचा Flat and Dues अहवाल: `rep3.html?ksg1=id`.
- या बुकिंगची पत्रे: `blet3r.html?knox2=&knox1=`.
- फ्लॅटची माहिती: Flat Info.
- या पानावरच्या तारखा पुढील अहवालांत दिसतात: Detailed Balance, Flat and Dues, Reg & Loan 2, Flats for Soc List, Soc Comn Rep, Payment Follow.

---

### 4.10 Receipts Entry (`rpay.html`)

**उद्देश:** बुकिंगवर आलेल्या पैशांची पावती नोंदवणे. रक्कम भागांमध्ये (कराराची किंमत, जादा खर्च, व्याज, TDS, GST) विभागली जाते.

**पायऱ्या स्क्रीनवर:**
1. बुकिंग निवडा (शोध + 241 बुकिंगची यादी).
2. त्या बुकिंगचे Flat Cost आणि GST सारांश बॉक्स दिसतात (एकूण, मिळालेली, परत दिलेली, बाकी).
3. पैसे कंपनीच्या कोणत्या बँक खात्यात आले ते **Account** मध्ये निवडा (दोन्ही LLP ची मिळून 4 खाती). Refresh.
4. पावतीचा फॉर्म भरा आणि Submit करा.

**पावतीचा फॉर्म** (`rpayx` ला जातो):

| Field (स्क्रीनवर) | अर्थ | प्रकार / पर्याय |
|---|---|---|
| Account | पैसे कंपनीच्या कोणत्या खात्यात आले | निवड यादी (4 खाती) |
| Rec_No | पावती क्रमांक | मजकूर |
| Date | पावतीची तारीख | तारीख |
| Consideration | कराराच्या किंमतीपोटी आलेली रक्कम | रक्कम |
| Extra Charges | जादा खर्चापोटी आलेली रक्कम | रक्कम |
| Interest | व्याजापोटी आलेली रक्कम | रक्कम |
| TDS | TDS चा भाग | रक्कम |
| GST | GST पोटी आलेली रक्कम | रक्कम |
| Total | एकूण | आपोआप बेरीज |
| Mode | पैसे कसे आले | निवड यादी: Cheque, D.D, Cash, RTGS, Challan, NEFT, IMPS, UPI, Transfer |
| Chq_No | चेक क्रमांक | मजकूर |
| Chq_Date | चेकची तारीख | तारीख |
| Bank (+ branch) | ग्राहकाची बँक आणि शाखा | मजकूर |
| Particulars | शेरा | मजकूर |
| एक चेकबॉक्स | काम नोंदवलेले नाही | चेकबॉक्स |

**कोडमध्ये लपवलेले जुने भाग** (स्क्रीनवर दिसत नाहीत): service tax, VAT, maintenance, society maintenance, maintenance deposit, society deposit.

**पावत्यांचा इतिहास (तक्ता):**

| स्तंभ | अर्थ |
|---|---|
| Sno | अनुक्रमांक |
| Date | पावतीची तारीख |
| Rec_Num | पावती क्रमांक |
| Details | तपशील (पद्धत, चेक इ.) (अंदाज) |
| Amount | रक्कम |
| Dishonoured | चेक बाउन्स झाला का |
| User | ही पावती कोणत्या युजरने नोंदवली |
| Action | पावती बदलणे (`rpaye.html?knox=id`) आणि पावतीचे पत्र / छपाई (`blet3r.html?...&kro1=receiptId`) |

**उद्देशानुसार सारांश (तक्ता):**

| Purpose (उद्देश) | Received | Repaid | Net Received |
|---|---|---|---|
| Agreement Value (कराराची किंमत) | मिळालेली | परत दिलेली | निव्वळ मिळालेली |
| TDS | | | |
| Extra Charges | | | |
| Interest | | | |
| Total | | | |

**क्रिया / बटणे:** Refresh (खाते निवडीनंतर), **Submit**, Action मधील Edit आणि पावती पत्र.

**नियम आणि गणित:**

```text
Total = Consideration + Extra Charges + Interest + TDS + GST
Net Received = Received − Repaid   (स्तंभांच्या नावावरून)
```

- TDS हा पावतीचाच एक भाग म्हणून नोंदवला जातो.
- चेक बाउन्स (Dishonoured) झाल्याची नोंद ठेवली जाते.
- प्रत्येक पावतीवर ती नोंदवणाऱ्या युजरचे नाव राहते.
- प्रत्येक पावतीचे पत्र छापता येते.

**संबंधित अहवाल आणि दुवे:** Booking Entry मधील "Move to Receipts", Rec Management (`trpays1`), Chq Search (`chisa`), Receipt Report Global (`tbook6b`), Detailed Balance, Flat and Dues, Taxes, Payment Follow मधील खातेवही (Ledger).

**पाहिले नाही:** पावती बदलण्याचे पान (`rpaye`). चेकची स्थिती (Realized / Unrealized / Dishonoured) नेमकी कुठे बदलली जाते. पावती पत्राचा मजकूर.

---

### 4.11 Extra Expenses (`rpayd.html`)

**उद्देश:** बुकिंगवर कराराच्या किंमतीबाहेरचा जादा खर्च (extra charges) लावणे.

**बुकिंग निवडणे:** यादीत 295 बुकिंग आहेत. त्यात रद्द झालेली बुकिंगही आहेत.

**फील्ड्स** (फॉर्म `rpaydx` ला जातो):

| Field (स्क्रीनवर) | अर्थ | प्रकार / पर्याय |
|---|---|---|
| Date | जादा खर्च लावल्याची तारीख | तारीख |
| Expense Head | जादा खर्चाचा प्रकार | मास्टर यादीतून निवड. सध्या एकच पर्याय: "Other Charges - CIDCO Plot Mortgage" |
| Amount | रक्कम | रक्कम |
| Particulars | शेरा | मजकूर |

**क्रिया / बटणे:** **Submit**.

**नियम आणि गणित:**
- जादा खर्च कराराच्या किंमतीत मिसळत नाही. तो वेगळा भाग म्हणून ठेवला जातो.
- काही जादा खर्च बिल्डरच्या खात्यात आणि काही सोसायटीच्या खात्यात जातो (Extra Exp Rep पहा).
- Project Info मध्ये "Extra Charges - company name" हे फील्ड आहे. म्हणजे जादा खर्च वेगळी कंपनी गोळा करू शकते.

**संबंधित अहवाल आणि दुवे:** Receipts Entry मधील "Extra Charges" भाग, Slab Setting मधील "Extra Slab Amount", Payment Follow मधील "Extra Charges" आणि "Extra Slab Due", Detailed Balance मधील "Extra", Extra Exp Rep (`tbook9`).

**पाहिले नाही:** Expense Head ची मास्टर यादी कुठे भरतात ते पान. एखादा खर्च बिल्डर खात्याचा की सोसायटी खात्याचा, हे कुठे ठरते ते.

---

### 4.12 Cancellation (`book1c.html`)

**उद्देश:** बुकिंग टप्प्याटप्प्याने रद्द करणे आणि रद्दीकरणाचे शुल्क व भरपाई नोंदवणे.

**बुकिंग निवडणे:** शोध + बुकिंगची यादी. निवडल्यावर फ्लॅट दिसतो.

**टप्प्यांच्या तारखा** (प्रत्येकाचे स्वतःचे Fix बटण):

| क्र. | Field (स्क्रीनवर) | अर्थ |
|---|---|---|
| 1 | Cancellation Request Date | ग्राहकाने रद्द करण्याची विनंती केल्याची तारीख |
| 2 | Cancellation Accept Date | विनंती स्वीकारल्याची तारीख |
| 3 | Bank NOC Received Date | बँकेची NOC मिळाल्याची तारीख (कर्ज असल्यास; अंदाज) |
| 4 | Cancellation Deed Date | रद्दीकरणाचा दस्त झाल्याची तारीख |

**अंतिम रद्दीकरण:**

| Field (स्क्रीनवर) | अर्थ | प्रकार |
|---|---|---|
| Cancellation Date | रद्द झाल्याची तारीख | तारीख |
| Cancellation Charge | रद्द करण्याचे शुल्क | रक्कम |
| Compensation | भरपाई | रक्कम |
| Particulars | शेरा | मजकूर |
| रकमेचा आणखी एक बॉक्स | काम नोंदवलेले नाही | रक्कम |

**क्रिया / बटणे:** प्रत्येक टप्प्याचे **Fix**, आणि अंतिम **Submit**. बदलण्याचे पान: `book1ce`.

**नियम आणि गणित:**
- रद्द केलेले बुकिंग सिस्टिममधून काढले जात नाही.
- ते Cancellation List मध्ये दिसते, आणि पैशांच्या पानांवर निवडता येते (एकूण 295, त्यापैकी 241 चालू).
- ग्राहकाला पैसे परत Repayment मधून दिले जातात.
- Rec Management मध्ये "Cancelled Flats" हा उद्देश (Purpose) फिल्टर आहे.
- परत द्यायची निव्वळ रक्कम कशी मोजली जाते (उदा. मिळालेली − शुल्क + भरपाई) याचे सूत्र नोंदींमध्ये नाही.

**संबंधित अहवाल आणि दुवे:** Repayment, Cancellation List (`tbook1c`), Rec Management, Extra Expenses (रद्द बुकिंगही यादीत).

**पाहिले नाही:** `book1ce`. रद्द केल्यानंतर फ्लॅट आपोआप पुन्हा उपलब्ध होतो का, ते.

---

### 4.13 Repayment (`rpayc.html`)

**उद्देश:** ग्राहकाला परत दिलेल्या पैशांची नोंद. हे Receipts Entry चे उलटे पान आहे.

**फील्ड्स:**

| Field (स्क्रीनवर) | अर्थ | प्रकार / पर्याय |
|---|---|---|
| Pay_No | परतफेडीचा क्रमांक | मजकूर |
| Date | तारीख | तारीख |
| Consideration | कराराच्या किंमतीपैकी परत दिलेली रक्कम | रक्कम |
| Extra Charges | जादा खर्चापैकी परत | रक्कम |
| Interest | व्याजापैकी परत | रक्कम |
| TDS | TDS चा भाग | रक्कम |
| GST | GST पैकी परत | रक्कम |
| Mode | पैसे कसे दिले | Receipts सारख्याच पद्धती |
| Chq No | चेक क्रमांक | मजकूर |
| Chq Date | चेकची तारीख | तारीख |
| Account | कंपनीच्या कोणत्या खात्यातून पैसे गेले | निवड यादी |
| Particulars | शेरा | मजकूर |

**सारांश:** Receipts सारखाच "Purpose / Received / Repaid / Net Received" तक्ता.

**नियम आणि गणित:** परत दिलेली रक्कम बाकीत पुन्हा मिळवली जाते: `Balance = Total − Received + Repaid`.

**संबंधित अहवाल आणि दुवे:** Cancellation, Booking Info आणि Receipts Entry मधील सारांश बॉक्स (Repaid), Flat and Dues मधील "Repay", Dues Report Lite मधील "Repay".

---

### 4.14 Broker Payments (`rpayb.html`)

**उद्देश:** ब्रोकरला बुकिंगनुसार दिलेले कमिशन नोंदवणे.

**बुकिंग निवडणे:** फक्त ब्रोकर असलेली बुकिंग दिसतात (इथे 1).

**फील्ड्स:**

| Field (स्क्रीनवर) | अर्थ | प्रकार / पर्याय |
|---|---|---|
| Pay_No | पेमेंट क्रमांक | मजकूर |
| Date | तारीख | तारीख |
| Amount | दिलेली रक्कम | रक्कम |
| Mode | पैसे कसे दिले | निवड यादी |
| Chq No | चेक क्रमांक | मजकूर |
| Chq Date | चेकची तारीख | तारीख |
| Account | कंपनीच्या कोणत्या खात्यातून | निवड यादी |
| Particulars | शेरा | मजकूर |

**नियम आणि गणित:**

```text
Final (अंतिम कमिशन) = Brokerage − TDS + GST
Balance (ब्रोकरची बाकी) = Final − Paid
```

- कमिशन बुकिंगनुसार ठेवले जाते.
- पेमेंटच्या फॉर्ममध्ये फक्त एकच Amount आहे. TDS आणि GST पेमेंटच्या वेळी वेगळे भरले जातात का, ते दिसले नाही.

**संबंधित अहवाल आणि दुवे:** Booking Entry आणि Booking Info मधील brokerage, Broker Balance (`trpay2a`), Broker Dues (`tbook2b`).

---

### 4.15 Quotation (`flat2r.html`)

**उद्देश:** उपलब्ध फ्लॅटसाठी संभाव्य ग्राहकाला किंमतीचे कोटेशन काढणे.

**फील्ड्स:**

| Field (स्क्रीनवर) | अर्थ | प्रकार / पर्याय |
|---|---|---|
| Flat | उपलब्ध फ्लॅट | निवड यादी |
| Type | किंमतीचा प्रकार (pricing Type) | निवड यादी: Type1 ते Type7. उदा. "A-Founder Member", "A-New Member", "B-Founder Member", "B-New Member" |
| Client name | संभाव्य ग्राहकाचे नाव | मुक्त मजकूर. ग्राहक मास्टरमध्ये असण्याची गरज नाही. |
| Amount | रक्कम | रक्कम |
| एक चेकबॉक्स | काम नोंदवलेले नाही | चेकबॉक्स |

**क्रिया / बटणे:** **Show Quotation**.

**नियम आणि गणित:**
- किंमतीच्या योजना इमारतीनुसार आणि सदस्याच्या प्रकारानुसार वेगळ्या आहेत. "Founder Member" म्हणजे जुन्या सोसायटीचे मूळ सदस्य, आणि "New Member" म्हणजे नवीन खरेदीदार.
- ग्राहकाचे नाव मुक्त मजकूर आहे. त्यामुळे संभाव्य ग्राहकाची आधी नोंद करावी लागत नाही.

**संबंधित अहवाल आणि दुवे:** Define Slabs आणि Slab Setting (तेच pricing Type), Mega Dues (pricing Type फिल्टर), Available Flats ListView / GridView.

**पाहिले नाही:** "Show Quotation" दाबल्यावर दिसणारे कोटेशन. कोटेशन साठवले जाते का, ते. Type1 ते Type7 पैकी बाकी तीन प्रकारांची नावे.

---

### 4.16 Chq Search (`chisa.html`)

**उद्देश:** चेक क्रमांक आणि तारखेवरून पावती शोधणे.

**फील्ड्स:**

| Field (स्क्रीनवर) | अर्थ | प्रकार |
|---|---|---|
| चेक क्रमांक | शोधायचा चेक | मजकूर / अलीकडच्या चेक्सची यादी |
| तारीख | चेकची तारीख | तारीख |

**पाहिले नाही:** शोधाचा निकाल. फॉर्म सबमिट केला नाही.

---

### 4.17 Due Bookings only (`rep3a.html`, शीर्षक "Due Bookings Report as on `<today>`")

**उद्देश:** आजच्या दिवशी ज्या बुकिंगवर थकबाकी आहे ती बुकिंग दाखवणे.

**स्तंभ:**

| स्तंभ | अर्थ |
|---|---|
| Sno | अनुक्रमांक |
| Client | ग्राहक |
| Mobile | मोबाईल |
| Flat No | फ्लॅट क्रमांक |
| Type | प्रकार |
| FlatCost | फ्लॅटची किंमत |
| Slab Amt | आतापर्यंत मागणी झालेल्या स्लॅबची रक्कम |
| Rec | मिळालेली रक्कम |
| Due Bal | थकबाकी |

**नियम आणि गणित:**

```text
Due Bal = आतापर्यंत पोहोचलेल्या (तारीख पडलेल्या) स्लॅबची रक्कम − मिळालेली रक्कम
```

- या प्रोजेक्टमध्ये 185 ओळी आहेत.

**संबंधित अहवाल आणि दुवे:** Flat and Dues, Dues Report Lite, Mega Dues, Dues Report Global, Payment Follow.

---

### 4.18 Define Slabs New (`slab1a.html`)

**उद्देश:** बांधकामाशी जोडलेली हप्त्यांची योजना (स्लॅब योजना) तयार करणे.

**फील्ड्स:**

| Field (स्क्रीनवर) | अर्थ | प्रकार / पर्याय |
|---|---|---|
| Building | इमारत | निवड यादी |
| Type | किंमतीचा प्रकार (pricing Type) | निवड यादी |
| Slab No | स्लॅबचा क्रमांक | संख्या |
| Slab Name | स्लॅबचे नाव (उदा. Plinth, Brick Work) | मजकूर |
| Percent | कराराच्या किंमतीची किती टक्केवारी | संख्या (%) |

**क्रिया / बटणे:** **Add Slab**. निवडलेल्या Building + Type ची स्लॅब यादी पानावर दिसते.

**नियम आणि गणित:**
- प्रत्येक "इमारत + किंमतीचा प्रकार" साठी वेगळी योजना.
- पाहिलेल्या योजनेत टक्केवारींची बेरीज 100 होते. बेरीज 100 नसेल तर सिस्टिम थांबवते का, ते पाहिले नाही.
- पाहिलेले उदाहरण विभाग 6.11 मध्ये आहे.

**संबंधित अहवाल आणि दुवे:** Slab Setting, Slab Details, Payment Follow मधील स्लॅब वेळापत्रक, Flat and Dues मधील "SlabName", Dues Report Lite मधील "Slab %".

---

### 4.19 Slab Setting (`slab2.html`)

**उद्देश:** तयार केलेली स्लॅब योजना फ्लॅट्सना लावणे, आणि प्रत्येक टप्प्याची मागणीची तारीख (Slab Date) भरणे.

**फील्ड्स:**

| Field (स्क्रीनवर) | अर्थ | प्रकार / पर्याय |
|---|---|---|
| Building | इमारत | निवड यादी |
| Type | किंमतीचा प्रकार | निवड यादी |
| फ्लॅट्स | कोणत्या फ्लॅट्सना योजना लावायची | अनेक निवडी, "select all" सह |
| Allow Special Start Date change only | फक्त खास सुरुवातीची तारीख बदला | चेकबॉक्स (ऐच्छिक) |
| Special Start Date | खास सुरुवातीची तारीख | तारीख |
| Schedule Amount | वेळापत्रकाची रक्कम | रक्कम |

**क्रिया / बटणे:** **Set Slab as per `<Type>`:** निवडलेल्या फ्लॅट्सना त्या प्रकाराची योजना लावतो.

**फ्लॅटचे वेळापत्रक (तक्ता):**

| स्तंभ | अर्थ |
|---|---|
| Sno | अनुक्रमांक |
| Slab Date | हा टप्पा मागितल्याची (demand) तारीख |
| Slab | स्लॅबचे नाव |
| Percent | टक्केवारी |
| Agree Slab Amount | कराराच्या किंमतीपैकी या स्लॅबची रक्कम |
| Extra Slab Amount | जादा खर्चापैकी या स्लॅबची रक्कम |
| Edit | ही ओळ बदलणे |

- **Bulk Edit:** अनेक ओळी एकत्र बदलणे.
- **Totals ओळ:** वेळापत्रकाची बेरीज कराराच्या किंमतीशी जुळते का ते दाखवते (बाकी).

**नियम आणि गणित:**

```text
Agree Slab Amount = Percent × कराराची किंमत (Consideration) / 100
Totals ची बाकी   = कराराची किंमत − सगळ्या Agree Slab Amount ची बेरीज
```

- Slab Date भरली की तो स्लॅब देय होतो, आणि थकबाकीच्या अहवालांत येतो.
- एकाच वेळी अनेक फ्लॅट्सना योजना लावता येते. एकाच वेळी अनेक ओळी बदलता येतात.

**संबंधित अहवाल आणि दुवे:** Define Slabs, Slab Details, Payment Follow, Due Bookings only, Flat and Dues, Taxes (स्लॅबनुसार GST).

**पाहिले नाही:** "Set Slab" दाबल्यावर काय होते. Schedule Amount आणि Special Start Date नेमके कसे वापरले जातात.

---

### 4.20 Slab Details (`slab3.html`)

**उद्देश:** एका बुकिंगसाठी व्याजाचे नियम ठरवणे, आणि उशिराच्या पैशांवरचे व्याज पाहणे.

**व्याज सेटिंग्ज:**

| Field (स्क्रीनवर) | अर्थ | प्रकार |
|---|---|---|
| Interest Rate per Annum | वार्षिक व्याजदर | टक्केवारी |
| Interest Waived | माफ केलेले व्याज | प्रकार नोंदवलेला नाही |
| Manual VAT | हाताने भरायचा VAT (जुना कर) | प्रकार नोंदवलेला नाही |
| Discount Rate % | सवलतीची टक्केवारी | टक्केवारी |

बटण: **Fix Interest Settings**.

**व्याजाचे गणित (Interest Calculation तक्ता):**

| स्तंभ | अर्थ |
|---|---|
| Sno | अनुक्रमांक |
| Date | तारीख (स्लॅबची किंवा पावतीची) (अंदाज) |
| Particulars | तपशील |
| Amount | देय रक्कम |
| Received | मिळालेली रक्कम |
| Balance | बाकी |
| Days | उशिराचे दिवस |
| Interest | त्या ओळीवरचे व्याज |
| Particulars | (दुसऱ्यांदा) शेरा |

**इतर:**
- एक GST बॉक्स `sms2.html` ला फॉर्म पाठवतो. म्हणजे सिस्टिम SMS ने GST किंवा मागणीची माहिती पाठवू शकते.
- दुवे: ग्राहकाची माहिती बदलणे, या बुकिंगची पत्रे.

**नियम आणि गणित:**
- प्रत्येक स्लॅबवरच्या थकबाकीवर उशिराच्या दिवसांनुसार व्याज लागते.
- नेमके सूत्र (उदा. वर्ष 365 दिवसांचे धरतात का, माफी आणि सवलत कशी वजा होते) नोंदींमध्ये नाही.

**संबंधित अहवाल आणि दुवे:** Flat and Dues (Interest, Waived, Int_Rec, Int_Bal), Receipts Entry मधील "Interest" भाग, Rec Management मधील "Interest" उद्देश.

**पाहिले नाही:** SMS पान (`sms2`).

---

### 4.21 Payment Follow (`trcus1`, शीर्षक "Payment Follow-Ups")

**उद्देश:** थकबाकी असलेल्या ग्राहकांचा फोनवर पाठपुरावा. हे सिस्टिममधील मुख्य CRM पान आहे. फोनची नोंद आणि त्या ग्राहकाचा संपूर्ण हिशोब एकाच पानावर दिसतो.

**बुकिंग निवडणे:**
- Building निवडा, शोधा, आणि पाठपुराव्याच्या यादीतून बुकिंग निवडा (इथे 26; बहुधा थकबाकी असलेली).
- "select all" चेकबॉक्स आहे.

**फोनची नोंद (Call log):**

| Field (स्क्रीनवर) | अर्थ | प्रकार / पर्याय |
|---|---|---|
| Why you called? | फोन का केला | निवड यादी: payment followup, loan documents, customer feedback. मास्टर "Calling Message" (`blat5`). |
| What they told? | ग्राहकाने काय सांगितले | निवड यादी. मास्टर "Answering Message" (`blat5a`). यादी निवडलेल्या कारणानुसार बदलते. सध्या रिकामी. |
| Particulars | शेरा | मजकूर |
| Next follow-up date | पुढचा फोन कधी | तारीख |

बटण: **Save**.

**ग्राहकाची श्रेणी:**

| Field (स्क्रीनवर) | अर्थ | प्रकार |
|---|---|---|
| Client Category | पाठपुराव्यासाठी ग्राहकाची श्रेणी | निवड यादी, मास्टर `blat5c` (सध्या रिकामी) |

बटण: **Fix Category**.

**त्याच पानावर दिसणारी माहिती (Context):** Name, Address, Phone, Flat, NOC Date, Stamp Duty, Registration Date, Broker, Mortgage Bank and Branch (कर्ज देणारी बँक आणि शाखा), Category, status.

**पैशांचा सारांश** (प्रत्येक ओळीसाठी रक्कम / मिळालेली / बाकी):

| ओळ | अर्थ |
|---|---|
| Flat Cost | फ्लॅटची किंमत |
| Extra Charges | जादा खर्च |
| Main Slab Due | कराराच्या किंमतीचे देय स्लॅब |
| Extra Slab Due | जादा खर्चाचे देय स्लॅब |
| GST | GST |
| Total | एकूण |

**स्लॅब वेळापत्रक:**

| स्तंभ | अर्थ |
|---|---|
| Slab_date | स्लॅबची मागणीची तारीख |
| Slab | स्लॅबचे नाव |
| Slab_Amt | कराराच्या किंमतीपैकी स्लॅबची रक्कम |
| Extra_Amt | जादा खर्चापैकी स्लॅबची रक्कम |

खऱ्या स्लॅबची नावे जी दिसली: BOOKING AMOUNT, Plinth, मजल्यांनुसार स्लॅबचे अनेक टप्पे, Brick Work, Plaster work, Tiles work, Plumbing work, Electric Work, Painting Work, ON POSSESSION.

**खातेवही (Ledger):**

| स्तंभ | अर्थ |
|---|---|
| Date | तारीख |
| Particulars | तपशील |
| Rec Num | पावती क्रमांक |
| Debit | नावे (मागणी) |
| Credit | जमा (मिळालेले पैसे) |
| Balance | बाकी |

**क्रिया / बटणे:** Save, Fix Category, आणि "Recovery Sheet" दुवा (`mrep1.html?krno=bookingId`). Recovery Sheet नवीन विंडोत छापण्याजोगे पत्रक उघडते.

**नियम आणि गणित:**

```text
प्रत्येक ओळीची बाकी = रक्कम − मिळालेली
Ledger Balance     = मागील Balance + Debit − Credit   (अंदाज: स्तंभांवरून)
```

**संबंधित अहवाल आणि दुवे:** Follow Details, Due Bookings only, Flat and Dues, Letter History, Recovery Sheet.

**पाहिले नाही:** Recovery Sheet (नवीन विंडो ब्राउझरने थांबवली). Save केल्यानंतरचा इतिहास कुठे दिसतो ते (Follow Details मधील तक्ता Refresh शिवाय दिसला नाही).

---

### 4.22 Payment Follow चे मास्टर्स आणि जोडलेली पाने

#### 4.22.1 Calling Message (`blat5`)
- **उद्देश:** "Why you called?" ची कारणे.
- **सध्याचे पर्याय:** payment followup, loan documents, customer feedback.

#### 4.22.2 Answering Message (`blat5a`)
- **उद्देश:** "What they told?" ची उत्तरे. उत्तरे फोनच्या कारणानुसार वेगवेगळी असतात.
- **सध्याची स्थिती:** रिकामी.

#### 4.22.3 Client Category (`blat5c`, Settings मधील "Category in Payment Followup")
- **उद्देश:** पाठपुराव्यासाठी ग्राहकांच्या मुक्त श्रेणी.
- **सध्याची स्थिती:** रिकामी.

#### 4.22.4 Follow Details (`trpay2b`, शीर्षक "Payment Follow Details")
- **उद्देश:** केलेल्या पाठपुराव्यांचा इतिहास.
- **फिल्टर्स:** शोध, व्यक्ती निवडा (9 व्यक्ती), From / To तारीख.
- **पाहिले नाही:** तक्ता (Refresh केले नाही).

#### 4.22.5 Recovery Sheet (`mrep1.html?krno=bookingId`)
- **उद्देश:** एका बुकिंगचे छापण्याजोगे वसुली पत्रक.
- **पाहिले नाही:** नवीन विंडो उघडते, ती ब्राउझरने थांबवली.

---

### 4.23 Settings (`set1.html`, शीर्षक "Software Settings")

**उद्देश:** अहवालांचा सामायिक कालावधी ठरवणे, आणि मास्टर पानांचे दुवे.

**फील्ड्स:**

| Field (स्क्रीनवर) | अर्थ | प्रकार |
|---|---|---|
| From Date | अहवालांच्या कालावधीची सुरुवात | तारीख |
| To Date | अहवालांच्या कालावधीचा शेवट | तारीख |

बटण: **Save**. हा कालावधी अहवालांसाठी सगळीकडे वापरला जातो.

**मास्टर दुवे:**

| दुवा (स्क्रीनवर) | पान | काम |
|---|---|---|
| Add Type | `blat2` | फ्लॅटचे प्रकार |
| Add Facing | `blat8` | दिशा |
| New Building | `blat1` | इमारत |
| Category in Payment Followup | `blat5c` | पाठपुराव्यासाठी ग्राहकाची श्रेणी ("Client Category") |
| Project Info | `pro1` | प्रोजेक्टची माहिती |
| Company Info | `pro2` | कंपनीची माहिती |
| Goto Main | | मुख्य पानावर परत |

---

### 4.24 Project Info (`pro1`)

**उद्देश:** प्रोजेक्टची माहिती. ही माहिती पत्रांवर, मागणी पत्रांवर आणि पावत्यांवर छापली जाते.

| Field (स्क्रीनवर) | अर्थ |
|---|---|
| Address1, Address2, Address3 | प्रोजेक्टचा / कार्यालयाचा पत्ता |
| Phone and Email | फोन आणि ईमेल |
| Site Address | साइटचा पत्ता |
| Authorized Signatory Title | अधिकृत सही करणाऱ्याचे पद |
| Authorized Signatory Name | अधिकृत सही करणाऱ्याचे नाव |
| Bank Account Details | पैसे भरण्यासाठीचे बँक खाते |
| IFSC | बँक शाखेचा IFSC कोड |
| MICR | MICR कोड |
| SWIFT | SWIFT कोड (परदेशातून पैसे भरण्यासाठी) |
| Service Tax No | सर्व्हिस टॅक्स क्रमांक (जुना कर) |
| Extra Charges - company name | जादा खर्च गोळा करणाऱ्या कंपनीचे नाव (ही वेगळी कंपनी असू शकते) |
| RERA No | प्रोजेक्टचा RERA नोंदणी क्रमांक |
| दुसरा बँक भाग: Account Number | दुसऱ्या बँक खात्याचा क्रमांक |
| Account Holder | खातेधारकाचे नाव |
| Bank | बँक |
| Branch | शाखा |
| IFSC | IFSC कोड |

**पाहिले नाही:** हे पान सबमिट केले नाही. दुसरे बँक खाते नेमके कशासाठी (उदा. जादा खर्चासाठी) ते नोंदींमध्ये नाही.

---

### 4.25 Company Info (`pro2`)

**उद्देश:** कंपनीची (LLP ची) माहिती.

| Field (स्क्रीनवर) | अर्थ |
|---|---|
| Address1, Address2, Address3 | कंपनीचा पत्ता |
| Service Tax No | सर्व्हिस टॅक्स क्रमांक (जुना कर) |
| PAN | कंपनीचा PAN |
| GST No | कंपनीचा GST क्रमांक |
| Authorized Signatory | अधिकृत सही करणारा |

---

### 4.26 इतर मास्टर्स आणि खाते पाने

| पान (स्क्रीनवर) | पत्ता | फील्ड्स / काम | स्थिती |
|---|---|---|---|
| New Building | `blat1` | Building name, इमारतींची यादी, Goto Edit | सध्या A, B |
| Add Type | `blat2` | फ्लॅटचे प्रकार | 11 प्रकार (विभाग 4.1) |
| Add Facing | `blat8` | दिशा | Club, Garden, Podium, Road |
| Bank APF nos | `tbook8` | बँकांच्या APF (Approved Project Finance) क्रमांकांची शोधण्याजोगी यादी. म्हणजे प्रोजेक्टला गृहकर्जासाठी आधीच मान्यता दिलेल्या बँका. | क्रमांक नोंदवलेले नाहीत |
| Add Bank APF nos | `fsat2` | नवीन APF क्रमांक जोडणे | पानाचा मजकूर नोंदवलेला नाही |
| Change Password | `bedi1` | पासवर्ड बदलणे | मुद्दाम उघडले नाही |
| Log Out | `out` | बाहेर पडणे | मुद्दाम उघडले नाही |

---

## 5. कामाचे प्रवाह (Workflows)

या विभागातील पायऱ्यांचा क्रम पानांच्या रचनेवरून सुचवलेला आहे. सिस्टिम हा क्रम सक्तीने लावते का (उदा. आधीची पायरी झाल्याशिवाय पुढची होत नाही), हे पाहिले नाही.

### 5.1 प्रोजेक्टची तयारी (Project setup)

1. **Company Info** (`pro2`): कंपनीचा पत्ता, PAN, GST No, Service Tax No आणि अधिकृत सही करणारा.
2. **प्रोजेक्ट निवडा:** वरच्या ड्रॉपडाउनमधून प्रोजेक्ट निवडून "Set".
3. **Project Info** (`pro1`): पत्ता, साइटचा पत्ता, सही करणारा, बँक खात्यांचे तपशील (IFSC, MICR, SWIFT), RERA No, आणि जादा खर्च गोळा करणाऱ्या कंपनीचे नाव.
4. **New Building** (`blat1`): इमारती (A, B ...).
5. **Add Type** (`blat2`) आणि **Add Facing** (`blat8`): फ्लॅटचे प्रकार आणि दिशा.
6. **New Flats** (`flat1`): प्रत्येक युनिट, क्षेत्रफळांसह.
7. **New Parking** (`park1`): इमारत आणि प्रकारानुसार पार्किंगची संख्या.
8. **किंमतीचे प्रकार** (Type1 ते Type7, उदा. Founder Member / New Member): हे भरण्याचे पान पाहिले नाही.
9. **Define Slabs New** (`slab1a`): प्रत्येक इमारत + किंमतीचा प्रकार साठी स्लॅब योजना.
10. **Slab Setting** (`slab2`): योजना फ्लॅट्सना लावणे.
11. **Bank APF nos** (`tbook8`, `fsat2`): प्रोजेक्टला मान्यता दिलेल्या बँकांचे APF क्रमांक.
12. **New Broker, New Executive, Land Owner:** ब्रोकर (आणि HEAD OFFICE, SOCIETY सारखे स्रोत), कर्मचारी आणि जमीनमालक. जमीनमालकाचे फ्लॅट्स Flat Info मध्ये "Fix Landowner" ने जोडणे.
13. **Flat Info:** गरज असल्यास फ्लॅट्सवर Hold, For Lease किंवा For Resale खुणा.
14. **पाठपुराव्याचे मास्टर्स:** Calling Message (`blat5`), Answering Message (`blat5a`), Client Category (`blat5c`). जादा खर्चाचे प्रकार (Expense Head; पान पाहिले नाही).
15. **Settings** (`set1`): अहवालांचा From / To कालावधी.

### 5.2 कोटेशन

1. उपलब्ध फ्लॅट्स पाहण्यासाठी Available Flats ListView (`scus1`) किंवा GridView (`scus2`) वापरा.
2. **Quotation** (`flat2r`) उघडा.
3. उपलब्ध फ्लॅट निवडा.
4. किंमतीचा प्रकार (Type) निवडा, उदा. "A-New Member".
5. संभाव्य ग्राहकाचे नाव मुक्त मजकुरात लिहा. ग्राहक मास्टरमध्ये नोंद लागत नाही.
6. Amount भरा, गरज असल्यास चेकबॉक्स लावा.
7. "Show Quotation" दाबा.

कोटेशनचे स्वरूप आणि ते साठवले जाते का, हे पाहिले नाही.

### 5.3 बुकिंग

1. **ग्राहकाची नोंद:** New Clients (`cus1`) मध्ये नाव, पत्ता, फोन, ईमेल, PAN, आधार, जन्मतारीख, लग्नाची तारीख, संपर्काच्या पसंती ("Do not Call", "Only Email") भरून "Add Client".
2. त्याच पानावर पत्रव्यवहाराचा पत्ता आणि नावाच्या पाटीचा मजकूर (Name Plate Information) भरा.
3. "Booking for `<client>`" दुवा दाबा, किंवा थेट **Booking Entry** (`book1`) उघडा.
4. डावीकडून ग्राहक आणि उजवीकडून उपलब्ध फ्लॅट निवडा. बुकिंग कोड (उदा. A-108) तयार होतो.
5. File No, Date, Consideration, Scheme, Broker (आणि brokerage), Parking Infos, Reference, Bare Flat, Executive Name आणि Particulars भरा.
6. टोकन रक्कम भरा. ती थेट पावतीत नोंदवायची असेल तर "Move to Receipts" लावा.
7. "Booking" दाबा.
8. **Booking Info** (`book1r`) मध्ये बाकी माहिती भरा:
   - सह-ग्राहक (2nd, 3rd, 4th) आणि त्यांचे PAN: "Fix Client and Pan Infos".
   - Market Value, Construction Amount, Stamp Duty Amount, Registration Amount, Financing (Loan / Self): "Modify Particulars".
   - गरज असल्यास खुणा (Bare Flat only, Mark for Legal Proceeds, Needs Verification): "Fix Markings".
   - Booking Intimation Date सारख्या तारखा: "Save Modifications".
9. पार्किंग वाटप आणि स्लॅब वेळापत्रक (पुढच्या प्रवाहांत).

### 5.4 फ्लॅट वाटप (Flat allocation)

1. मुख्य पानावर "No Flat Allocation" सूचना दिसते. ही सगळ्या प्रोजेक्ट्सची यादी आहे.
2. सूचनेवर क्लिक केल्यावर त्या बुकिंगचे Booking Info उघडते.
3. "Select Flat" मध्ये फ्लॅट कोड निवडा ("No Flat" ऐवजी).
4. "Modify Flat Allocation" दाबा. सूचना सुटते.
5. Allot Date (वाटपाची तारीख) भरा आणि "Save Modifications".
6. **पार्किंग:** प्रत्येक प्रकारासाठी (Adjustable / Open / Stilt) किती पार्किंग द्यायचे ती संख्या भरा. उरलेली Balance तपासा. "Modify Parking Information".

फ्लॅटशिवाय बुकिंग मुळात कसे तयार होते (Booking Entry मध्ये फ्लॅट निवडणे लागते), हे नोंदींमधून स्पष्ट होत नाही.

### 5.5 स्लॅब वेळापत्रक (Payment schedule)

1. **Define Slabs New:** इमारत आणि किंमतीचा प्रकार निवडा. प्रत्येक स्लॅबचा क्रमांक, नाव आणि टक्केवारी भरून "Add Slab". सगळ्या टक्केवारींची बेरीज 100.
2. **Slab Setting:** इमारत आणि प्रकार निवडा. फ्लॅट्स निवडा ("select all" ने सगळे). गरज असल्यास Special Start Date आणि Schedule Amount भरा. "Set Slab as per `<Type>`".
3. फ्लॅटचे वेळापत्रक तपासा: प्रत्येक स्लॅबची Agree Slab Amount आणि Extra Slab Amount. Totals ओळीतील बाकी कराराच्या किंमतीशी जुळते का ते पाहा.
4. बांधकामाचा टप्पा पूर्ण झाला की त्या स्लॅबची **Slab Date** (मागणीची तारीख) भरा. एका ओळीसाठी Edit, अनेक फ्लॅट्स / ओळींसाठी Bulk Edit.
5. Slab Date पडलेला स्लॅब देय होतो. तो Due Bookings only, Flat and Dues, Payment Follow आणि थकबाकीच्या इतर अहवालांत दिसतो.
6. त्या स्लॅबवरचा GST सुद्धा देय होतो (Taxes अहवाल).
7. उशिरा भरल्यास व्याज Slab Details मध्ये मोजले जाते (विभाग 6.8).

### 5.6 मागणी आणि पावती (Demand and receipt)

1. थकबाकी पाहा: Due Bookings only, Flat and Dues, Mega Dues किंवा Dues Report Lite.
2. **मागणी पत्र:** Letter Formats (`blan2`) मधून त्या बुकिंगसाठी Demand Letter (6 पैकी एक प्रकार) काढा. पत्रे बुकिंगमधूनही उघडतात (`blet3r`).
3. गरज असल्यास Slab Details मधील GST बॉक्सने SMS पाठवा (`sms2`; पाहिले नाही).
4. हाताने पाठवलेले पत्र Letter History (`trpay7`) मध्ये नोंदवा: Letter Date, Letter Name, Particulars, Add.
5. ग्राहकाने पैसे भरले की **Receipts Entry** (`rpay`) उघडा:
   1. बुकिंग निवडा.
   2. पैसे आलेले कंपनीचे खाते (Account) निवडा.
   3. Rec_No आणि Date भरा.
   4. रक्कम भागांमध्ये भरा: Consideration, Extra Charges, Interest, TDS, GST. Total आपोआप येते.
   5. Mode निवडा. चेक असल्यास Chq_No, Chq_Date आणि ग्राहकाची Bank (+ branch).
   6. Particulars भरून Submit.
6. पावतीच्या इतिहासातील Action मधून पावतीचे पत्र छापा (`blet3r...&kro1=`).
7. Booking Info आणि Receipts Entry मधील Flat Cost आणि GST सारांश बॉक्स बदलतात.

### 5.7 चेकची स्थिती (Cheque status)

1. चेकने आलेली पावती Mode = Cheque, Chq_No, Chq_Date आणि बँकेसह नोंदवली जाते.
2. चेकची स्थिती तीनपैकी एक असते: Unrealized (अजून वटला नाही), Realized (वटला), Dishonoured (बाउन्स).
3. **Rec Management** (`trpays1`) मध्ये स्थितीनुसार पावत्या पाहा. Receipt_Date किंवा Cheque_Date नुसार, खाते, पद्धत, उद्देश, आणि चेक / पावती क्रमांकाने फिल्टर करा.
4. सारांशात प्रत्येक पद्धतीसाठी Realized, Unrealized, Dishonoured आणि Total दिसते.
5. पावत्यांच्या इतिहासात "Dishonoured" स्तंभ दिसतो.
6. एखादा चेक शोधायचा असल्यास **Chq Search** (`chisa`).

चेकची स्थिती नेमकी कोणत्या पानावर बदलली जाते, हे पाहिले नाही.

### 5.8 पाठपुरावा (Follow-up)

1. **Payment Follow** (`trcus1`) उघडा. इमारत निवडा आणि यादीतून बुकिंग निवडा.
2. त्याच पानावर ग्राहकाची माहिती, NOC आणि नोंदणीच्या तारखा, कर्जाची बँक, पैशांचा सारांश, स्लॅब वेळापत्रक आणि खातेवही पाहा.
3. ग्राहकाला फोन करा.
4. नोंद करा: Why you called? (उदा. payment followup), What they told?, Particulars, Next follow-up date. "Save".
5. गरज असल्यास ग्राहकाची श्रेणी (Client Category) ठरवून "Fix Category".
6. छापण्यासाठी Recovery Sheet (`mrep1`) उघडा.
7. केलेल्या पाठपुराव्यांचा इतिहास **Follow Details** (`trpay2b`) मध्ये व्यक्ती आणि तारखांनुसार पाहा.
8. पैसे उशिरा आल्यास व्याज Slab Details मध्ये लागते. व्याज माफ करायचे असल्यास Interest Waived.
9. कायदेशीर कारवाई करायची असल्यास Booking Info मध्ये "Mark for Legal Proceeds".

ग्राहक मास्टरमधील "Do not Call" / "Only Email" पसंती Payment Follow पानावर दिसतात का किंवा फोन अडवतात का, हे नोंदवलेले नाही.

### 5.9 कायदेशीर टप्पे आणि सगळ्या तारखा

सगळ्या तारखा Booking Info मध्ये भरल्या जातात (दिवस / महिना / वर्ष + "is set"), आणि "Save Modifications" ने साठवल्या जातात. कर्जाच्या तारखांना स्वतःचे Fix बटण आहे.

| क्र. | टप्पा | Field (स्क्रीनवर) | कुठे भरतात | कोणत्या अहवालांत दिसते |
|---|---|---|---|---|
| 1 | बुकिंग | Booking Date | Booking Entry (Date), Booking Info | Detailed Balance (Booking Date), Flat and Dues (Booked) |
| 2 | रक्कम देय | Due Amount Date | Booking Info | नोंदवलेले नाही |
| 3 | बुकिंगची सूचना | Booking Intimation Date | Booking Info | नोंदवलेले नाही |
| 4 | NOC साठी अर्ज | NOC Request Date | Booking Info | नोंदवलेले नाही |
| 5 | वाटप | Allot Date | Booking Info | नोंदवलेले नाही |
| 6 | करारनामा | Agreement Date | Booking Info | Detailed Balance (Agree_Date), Flat and Dues (Agree Date) |
| 7 | अपेक्षित करार | Exp Agree Date | भरण्याचे ठिकाण पाहिले नाही | Flat and Dues |
| 8 | स्टॅम्प ड्युटी | Stamp Date | Booking Info | Payment Follow (Stamp Duty) |
| 9 | दस्त नोंदणी | Reg No + Reg Date | Booking Info | Detailed Balance (Reg_Date, Reg No), List of Flats (Reg_Date), Flats for Soc List, Soc Comn Rep, Payment Follow (Registration Date), Reg & Loan 2 ("Unregistered only") |
| 10 | NOC मिळाली | NOC Date | Booking Info | Detailed Balance (NOC Date), Payment Follow (NOC Date) |
| 11 | CIDCO हस्तांतरण | CIDCO Transfer Date | Booking Info | नोंदवलेले नाही |
| 12 | CIDCO गहाण NOC | CIDCO Mortgage NOC Date | Booking Info | नोंदवलेले नाही |
| 13 | ताबा | Possession Date | Booking Info | Detailed Balance (Pos_Date) |
| 14 | ताब्याची नोंदणी | Possession Reg Date | Booking Info | नोंदवलेले नाही |
| 15 | गहाणमुक्ती | Mortgage Release Date | Booking Info | Detailed Balance (Mort_Rel Date) |
| 16 | मेंटेनन्स सुरू | Maintenance Date | Booking Info | Detailed Balance (Maint_Date), Flats for Soc List (Maint Date), Soc Comn Rep |
| 17 | कर्ज मंजुरी | Loan Sanction Date | Booking Info (कर्ज भाग) | Reg & Loan 2 (अंदाज) |
| 18 | बँकेकडून बुकिंग स्वीकार | Booking Accepted Date | Booking Info (कर्ज भाग) | नोंदवलेले नाही |
| 19 | बँकेत कागदपत्रे | Doc Submission Date | Booking Info (कर्ज भाग) | नोंदवलेले नाही |
| 20 | कर्ज वाटप | Loan Disbursement Date | Booking Info (कर्ज भाग) | नोंदवलेले नाही |
| 21 | पुनर्विक्री नोंदणी | Reg No, Reg Date, Maint Date (प्रत्येक मालकासाठी) | Flat Info, Booking Info | नोंदवलेले नाही |
| 22 | रद्द करण्याची विनंती ते दस्त | Cancellation Request / Accept / Bank NOC Received / Cancellation Deed / Cancellation Date | Cancellation | Cancellation List (From / To) |

**पायऱ्या:**
1. Booking Info उघडा आणि बुकिंग निवडा.
2. ज्या टप्प्याची तारीख आली ती दिवस / महिना / वर्ष ड्रॉपडाउनमध्ये निवडा.
3. "is set" चेकबॉक्स लावा.
4. "Save Modifications" दाबा.
5. नोंदणी झाल्यावर Reg No सुद्धा भरा.

### 5.10 बँक कर्ज (Loan)

1. प्रोजेक्टला मान्यता दिलेल्या बँका Bank APF nos मध्ये पाहा.
2. Booking Info मध्ये Financing = Loan.
3. कर्जाचा भाग भरा: Bank Name (+ branch), Bank Person (नाव, फोन, मोबाईल, ईमेल), Loan Amount, Loan Tenure. "Modify Loan Info".
4. बँकेसाठी NOC पत्र Letter Formats मधून काढा. बँकनिहाय साचे: Union Bank, ICICI, Canara, Axis, SBI, HDFC.
5. कर्जाच्या तारखा, प्रत्येक आपल्या Fix बटणाने: Loan Sanction Date, Booking Accepted Date, Doc Submission Date, Loan Disbursement Date.
6. CIDCO गहाण NOC लागल्यास CIDCO Mortgage NOC Date.
7. कागदपत्रांसाठी फोन केल्यास Payment Follow मध्ये कारण "loan documents" निवडा. त्या पानावर "Mortgage Bank and Branch" दिसते.
8. अहवाल: Reg & Loan 2, Detailed Balance (Bank, Loan Amt, NOC Date, Mort_Rel Date), Flat and Dues (Financing).
9. कर्ज फिटल्यावर Mortgage Release Date.

### 5.11 ताबा (Possession)

1. शेवटचा स्लॅब "ON POSSESSION" ची Slab Date भरा. ती रक्कम देय होते.
2. Possession Date भरा.
3. ताब्याची नोंदणी झाल्यावर Possession Reg Date.
4. मेंटेनन्स सुरू झाल्यावर Maintenance Date.
5. नावाच्या पाटीचा मजकूर ग्राहक मास्टरमधील "Name Plate Information" मध्ये असतो.
6. अहवाल: Detailed Balance (Pos_Date, Maint_Date).

ताबा देण्यापूर्वी पूर्ण पैसे आले आहेत का, हे सिस्टिम तपासते का, ते पाहिले नाही.

### 5.12 सोसायटीकडे हस्तांतरण (Society handover)

1. **Flats for Soc List** (`tbook7a`, "Flats list to Society"): सोसायटीला द्यायची फ्लॅट आणि सदस्यांची यादी (Flat No, Client, Reg Date, Reg No, Maint Date).
2. **Soc Comn Rep** (`tbook7`, "Society Communication Rep"): सोसायटीसाठी सदस्यांची संपर्क यादी (PAN, मोबाईल, ईमेलसह).
3. **पत्र:** Customer Details_Society साचा.
4. **पैसे:** Extra Exp Rep मधील Society A/c (Total, Rec, Balance). सोसायटीच्या वतीने गोळा केलेले जादा खर्च.
5. पावतीच्या कोडमध्ये society maintenance आणि society deposit हे जुने भाग लपवलेले आहेत.

### 5.13 पुनर्विक्री (Resale)

1. फ्लॅट पुन्हा विकायचा असल्यास Flat Info मध्ये "For Resale" खूण लावा ("Fix Markings").
2. List of Flats मध्ये "Resale" फिल्टरने असे फ्लॅट्स पाहा.
3. विक्री झाल्यावर "Resale Clients and Reg Infos" मध्ये पुढच्या मालकाचे Name, Reg No, Reg Date, Maint Date भरा (2nd, 3rd, 4th Resale Client).
4. एका फ्लॅटला जास्तीत जास्त 4 मालक (पहिला + 3).

पुनर्विक्रीचे शुल्क किंवा हस्तांतरणाचे पैसे कसे नोंदवले जातात, ते पाहिले नाही.

### 5.14 रद्दीकरण आणि परतफेड (Cancellation and refund)

1. **Cancellation** (`book1c`) उघडा आणि बुकिंग निवडा. फ्लॅट दिसतो.
2. Cancellation Request Date भरा, Fix.
3. Cancellation Accept Date भरा, Fix.
4. बँकेची NOC मिळाल्यावर Bank NOC Received Date, Fix (कर्ज असलेल्या बुकिंगसाठी; अंदाज).
5. Cancellation Deed Date भरा, Fix.
6. अंतिम भाग भरा: Cancellation Date, Cancellation Charge, Compensation, Particulars, रक्कम. Submit.
7. **Repayment** (`rpayc`) मध्ये ग्राहकाला परत दिलेले पैसे नोंदवा: Pay_No, Date, पाच भाग, Mode, Chq No / Date, कंपनीचे खाते, Particulars.
8. सारांशातील Received, Repaid आणि Net Received तपासा.
9. रद्द बुकिंग Cancellation List मध्ये दिसते. Rec Management मध्ये "Cancelled Flats" उद्देशाने पैसे पाहता येतात.

### 5.15 ब्रोकरचे कमिशन

1. Booking Entry मध्ये Broker निवडा. कमिशनचा बॉक्स दिसतो, त्यात रक्कम भरा.
2. Booking Info मध्ये brokerage चे बाकी फील्ड्स भरा (टक्केवारी, वजावट, GST असावेत), "Modify Particulars".
3. ब्रोकरला पैसे देताना **Broker Payments** (`rpayb`): बुकिंग, Pay_No, Date, Amount, Mode, चेक, कंपनीचे खाते, Particulars.
4. Broker Balance (`trpay2a`) मध्ये एका ब्रोकरचा हिशोब, आणि Broker Dues (`tbook2b`) मध्ये सगळ्या ब्रोकर्सची बाकी पाहा.

### 5.16 जादा खर्च

1. **Extra Expenses** (`rpayd`) मध्ये बुकिंग निवडा.
2. Date, Expense Head (सध्या "Other Charges - CIDCO Plot Mortgage"), Amount आणि Particulars भरून Submit.
3. स्लॅब वेळापत्रकात जादा खर्चाचा भाग "Extra Slab Amount" म्हणून दिसतो.
4. ग्राहकाने भरल्यावर पावतीत "Extra Charges" भाग.
5. Extra Exp Rep मध्ये बिल्डर खाते आणि सोसायटी खाते वेगवेगळे दिसतात.

---

## 6. पैशांचा हिशोब

### 6.1 रकमेचे भाग (Charge heads)

| भाग (स्क्रीनवर) | अर्थ | कुठे लावला जातो | पावतीत वेगळा भाग? | कुठे दिसतो |
|---|---|---|---|---|
| Flat / Consideration / Agreement Value | कराराची किंमत | Booking Entry, Booking Info | होय (Consideration) | Flat Cost बॉक्स, Detailed Balance (Flat), Flat and Dues (FlatCost), Due Bookings only |
| Extra / Extra Charges | जादा खर्च | Extra Expenses; स्लॅबमधील Extra Slab Amount | होय (Extra Charges) | Detailed Balance (Extra), Payment Follow, Extra Exp Rep |
| Amn | सुविधा (amenities) शुल्क | नोंद करण्याचे पान दिसले नाही | नाही | Detailed Balance |
| Park | पार्किंग शुल्क | नोंद करण्याचे पान दिसले नाही | नाही | Detailed Balance |
| Adv | आगाऊ (advance) रक्कम | नोंद करण्याचे पान दिसले नाही | नाही | Detailed Balance |
| GST | GST | स्लॅबनुसार देय | होय (GST) | GST बॉक्स, Taxes, Flat and Dues, Payment Follow |
| Interest | उशिराच्या पैशांवरचे व्याज | Slab Details | होय (Interest) | Flat and Dues, Rec Management |
| TDS | खरेदीदाराने कापलेला कर (अंदाज) | पावतीत | होय (TDS) | पावतीचा सारांश, Rec Management |

**हिशोबाच्या बाहेरच्या, फक्त माहितीसाठी रकमा** (Booking Info): Market Value, Construction Amount, Stamp Duty Amount, Registration Amount. Detailed Balance मध्ये Cr_Area, Area, Rate आणि Mkt_Value हे स्तंभही आहेत.

**बाहेर जाणाऱ्या रकमा:** परतफेड (Repayment), ब्रोकरचे कमिशन (Broker Payments), रद्दीकरणाचे शुल्क आणि भरपाई (Cancellation Charge, Compensation).

**जुन्या करांचे अवशेष:** सर्व्हिस टॅक्स (2.6%) आणि VAT (1%) Booking Entry च्या कोडमध्ये; Slab Details मध्ये Manual VAT; पावतीच्या कोडमध्ये service tax, VAT, maintenance, society maintenance, maintenance deposit, society deposit; Project Info आणि Company Info मध्ये Service Tax No.

### 6.2 बुकिंगच्या वेळची एकूण किंमत (जुने सूत्र)

Booking Entry च्या JavaScript मध्ये:

```text
एकूण = Consideration
       + स्टॅम्प ड्युटी + नोंदणी फी + जास्तीत जास्त 4 इतर खर्च
       + सर्व्हिस टॅक्स (Consideration × 2.6%)
       + VAT (Consideration × 1%)
```

आज GST वेगळ्या खात्यात ठेवला जातो. त्यामुळे हे सूत्र जुन्या काळातले आहे.

### 6.3 पावतीचे भाग (Receipt split)

एका पावतीची रक्कम पाच भागांत विभागली जाते:

| भाग (स्क्रीनवर) | अर्थ |
|---|---|
| Consideration | कराराच्या किंमतीपोटी |
| Extra Charges | जादा खर्चापोटी |
| Interest | व्याजापोटी |
| TDS | TDS |
| GST | GST पोटी |
| Total | पाचांची बेरीज (आपोआप) |

परतफेडही (Repayment) याच पाच भागांत होते. पावतीच्या सारांशात उद्देशानुसार (Agreement Value, TDS, Extra Charges, Interest, Total) Received, Repaid आणि Net Received दिसते. GST चा हिशोब वेगळ्या GST बॉक्समध्ये दिसतो.

### 6.4 पैसे भरण्याच्या पद्धती (Mode)

| Mode (स्क्रीनवर) | अर्थ |
|---|---|
| Cheque | चेक |
| D.D | डिमांड ड्राफ्ट |
| Cash | रोख |
| RTGS | RTGS बँक ट्रान्सफर |
| Challan | चलनाने बँकेत भरणा |
| NEFT | NEFT बँक ट्रान्सफर |
| IMPS | IMPS त्वरित ट्रान्सफर |
| UPI | UPI |
| Transfer | ट्रान्सफर |

चेकसाठी Chq_No, Chq_Date, ग्राहकाची Bank (+ branch), आणि स्थिती (Unrealized / Realized / Dishonoured) ठेवली जाते.

### 6.5 कंपनीची बँक खाती

- दोन्ही LLP मिळून 4 खाती.
- पावती: पैसे कोणत्या खात्यात आले.
- परतफेड आणि ब्रोकर पेमेंट: पैसे कोणत्या खात्यातून गेले.
- Rec Management मध्ये खात्यानुसार फिल्टर.
- Project Info मध्ये ग्राहकांनी पैसे भरायच्या खात्याचे तपशील (दोन बँक भाग). हे पत्रांवर छापले जातात.

### 6.6 GST

- GST चा हिशोब फ्लॅटच्या किंमतीपासून वेगळा: `GST Balance = GST − Received + Repaid`.
- GST स्लॅबनुसार मागितला जातो. Taxes अहवालात प्रत्येक स्लॅबची रक्कम, GST, GST_Rec, GST_Bal आणि GST_Per (टक्केवारी) दिसते.
- पावतीत GST हा वेगळा भाग आहे.
- Flat and Dues मध्ये GST, GST_Rec, GST_Bal स्तंभ. Payment Follow मध्ये GST ची ओळ.
- Extra Exp Rep मध्ये बिल्डर खात्यात GST स्तंभ आहे, सोसायटी खात्यात नाही.
- ब्रोकरच्या कमिशनवर GST मिळवला जातो.
- कंपनीचा GST No Company Info मध्ये आहे.
- Slab Details मधील GST बॉक्स SMS पान (`sms2`) ला जातो.
- GST ची टक्केवारी कुठे ठरवतात, ते पाहिले नाही.

### 6.7 TDS

- **ग्राहकाकडून:** पावतीत आणि परतफेडीत TDS हा वेगळा भाग आहे. पावतीच्या सारांशात TDS ची वेगळी ओळ आहे. Rec Management मध्ये "TDS" उद्देश फिल्टर आहे.
- **ब्रोकरला:** कमिशनमधून TDS वजा होतो: `Final = Brokerage − TDS + GST`.

### 6.8 व्याज (Interest)

- प्रत्येक बुकिंगसाठी Slab Details मध्ये: Interest Rate per Annum (वार्षिक दर), Interest Waived (माफी), Discount Rate % (सवलत), Manual VAT.
- प्रत्येक स्लॅबच्या थकबाकीवर उशिराच्या दिवसांनुसार व्याज. तक्त्यात Amount, Received, Balance, Days आणि Interest.
- व्याजापोटी आलेले पैसे पावतीत "Interest" भागात जातात.
- Flat and Dues मध्ये Interest, Waived, Int_Rec, Int_Bal स्तंभ आहेत. स्तंभांवरून (अंदाज): `Int_Bal = Interest − Waived − Int_Rec`.
- व्याजाचे नेमके सूत्र (दिवसांचा आधार, चक्रवाढ की साधे) नोंदींमध्ये नाही.

### 6.9 बिल्डर खाते आणि सोसायटी खाते

- Extra Exp Rep मध्ये प्रत्येक बुकिंगचे दोन गट:
  - **Builder A/c:** GST, Total, Rec, Balance.
  - **Society A/c:** Total, Rec, Balance (GST नाही).
- अर्थ: काही जादा खर्च बिल्डर स्वतःसाठी गोळा करतो, आणि काही सोसायटीच्या वतीने.
- Project Info मध्ये "Extra Charges - company name" आहे. म्हणजे जादा खर्च वेगळ्या कंपनीच्या नावाने गोळा होऊ शकतो.
- एखादा खर्च कोणत्या खात्यात जातो हे कुठे ठरते, ते पाहिले नाही.

### 6.10 सगळी सूत्रे एकत्र

```text
1.  बाकी (कोणताही भाग)     = एकूण − मिळालेली + परत दिलेली
2.  Flat Cost Balance        = Flat Cost − Received + Repaid
3.  GST Balance              = GST − Received + Repaid
4.  Net Received             = Received − Repaid                     (स्तंभांच्या नावावरून)
5.  पावतीचे Total            = Consideration + Extra Charges + Interest + TDS + GST
6.  स्लॅबची रक्कम           = Percent × कराराची किंमत / 100
7.  वेळापत्रकाची बाकी        = कराराची किंमत − सगळ्या स्लॅब रकमांची बेरीज
8.  थकबाकी (Due)             = तारीख पडलेल्या स्लॅबची बेरीज − मिळालेली रक्कम
9.  ब्रोकरचे Final           = Brokerage − TDS + GST
10. ब्रोकरची Balance         = Final − Paid
11. पार्किंगची Balance       = Availability − दिलेली संख्या           (अंदाज)
12. Balance unit / Area      = No of Unit − Sold unit / Total Area − Sold Area   (Project Sales)
13. Int_Bal                  = Interest − Waived − Int_Rec           (अंदाज)
14. जुने एकूण (Booking Entry) = Consideration + स्टॅम्प + नोंदणी + 4 इतर खर्च + 2.6% सर्व्हिस टॅक्स + 1% VAT
```

### 6.11 स्लॅब योजनेचे उदाहरण (पाहिलेली योजना, 24 स्लॅब)

| स्लॅब क्र. | Percent | एकत्रित टक्केवारी |
|---|---|---|
| 1 | 0 | 0 |
| 2 | 15 | 15 |
| 3 | 4.11 | 19.11 |
| 4 | 4.1 | 23.21 |
| 5 ते 17 (13 स्लॅब) | प्रत्येकी 3.33 (एकूण 43.29) | 66.50 |
| 18 | 6.5 | 73.00 |
| 19 | 8 | 81.00 |
| 20 | 5 | 86.00 |
| 21 | 4 | 90.00 |
| 22 | 4 | 94.00 |
| 23 | 4 | 98.00 |
| 24 | 2 | 100.00 |

- दिसलेली स्लॅबची नावे: BOOKING AMOUNT, Plinth, मजल्यांनुसार स्लॅबचे टप्पे, Brick Work, Plaster work, Tiles work, Plumbing work, Electric Work, Painting Work, ON POSSESSION.
- कोणत्या नावाला कोणती टक्केवारी, ही जोडणी नोंदवलेली नाही.
- उदाहरण (काल्पनिक): कराराची किंमत 100 मानली, तर स्लॅब 2 ची रक्कम 15, आणि स्लॅब 5 ची 3.33.

---

## 7. अहवाल

### 7.1 सगळे 30 अहवाल (Info Menus)

"नोंदवलेले नाहीत" म्हणजे त्या अहवालाचे फिल्टर्स नोंदींमध्ये लिहिलेले नाहीत. "पाहिले नाही" म्हणजे तक्ता Refresh / Search केल्यावरच दिसतो, आणि ते बटण दाबले नाही.

| क्र. | अहवाल (स्क्रीनवर) | पान | फिल्टर्स / पर्याय | स्तंभ (Columns) | उद्देश |
|---|---|---|---|---|---|
| 1 | Client List | `tcus1` | Category (57 पर्याय), Filter Category, To Print, Only Email Client | Sno, Client ID, Client, Address, Phone, Email, Flat No | सगळ्या ग्राहकांची यादी (466 ओळी). फक्त ईमेल पसंतीचे ग्राहक वेगळे काढता येतात. |
| 2 | Broker List | `tcus4` | नोंदवलेले नाहीत | Sno, Client (ब्रोकर), Address, Phone, Pan, Area | ब्रोकर्सची यादी, कामाच्या क्षेत्रासह |
| 3 | Booking List | `tbook1` | शोध, ग्राहक फिल्टर, From / To तारीख, To Print | पाहिले नाही (Refresh नंतर तक्ता) | तारखांनुसार बुकिंगची यादी |
| 4 | List of Flats | `tcus2` | Available only / Booked only / Both (radio), Type, Lease / Resale / Hold / Land Owner flats चेकबॉक्स (+ जमीनमालक निवड), Building | Sno, Building, Flat_No, Type, Floor, Maint_area, Carpet area, Balcony, Terrace area, Client, Status, Reg_Date, Broker, Land Owner, Markings | सगळ्या फ्लॅट्सची स्थिती (246 ओळी). प्रत्येक फ्लॅटवरून Detailed Balance (`rep1?knox5=`) आणि Flat and Dues (`rep3?knox5=`) उघडतात. |
| 5 | Available Flats ListView | `scus1` | Building, Floor (52 पर्याय), Type (14 पर्याय), Search | पाहिले नाही | उपलब्ध फ्लॅट्स यादी स्वरूपात |
| 6 | Available Flats GridView | `scus2` | Building, Floor, Type, Search (गोलसर फिल्टर पट्टा) | डावीकडे प्रोजेक्टचे कार्ड (फोटो, नाव, प्लॉट / सेक्टरचा पत्ता); उजवीकडे फ्लॅट्सची ग्रिड (Search नंतर; पाहिले नाही) | विक्रीच्या वेळी इमारतीतील उपलब्धता चित्र स्वरूपात दाखवणे. नव्या रचनेचे पान. |
| 7 | Flats for Soc List | `tbook7a` ("Flats list to Society") | नोंदवलेले नाहीत | Sno, Flat No, Client, Reg Date, Reg No, Maint Date | सोसायटीला द्यायची फ्लॅट आणि सदस्यांची यादी (240 ओळी) |
| 8 | Parking List | `tcus3` | Available only / Allotted only (radio), Building | पाहिले नाही | उपलब्ध आणि दिलेली पार्किंग |
| 9 | Cancellation List | `tbook1c` | From / To तारीख | पाहिले नाही | रद्द झालेली बुकिंग |
| 10 | Reg & Loan 2 | `tbook4a` ("Registration and Loan Info 2") | Unregistered only, To Print | पाहिले नाही | नोंदणी आणि कर्जाची स्थिती. नोंदणी न झालेली बुकिंग वेगळी काढता येतात. |
| 11 | Sales Report Global | `tbook6` | From / To | शीर्षक "Global Sales Report from .. to ..": Sno, Project, Total, आणि प्रत्येक महिन्याचा एक स्तंभ | सगळ्या प्रोजेक्ट्सची महिन्यानुसार विक्री (14 ओळी: 13 प्रोजेक्ट्स + एकूण) |
| 12 | Receipt Report Global | `tbook6b` | From / To (Sales Report Global सारखेच) | Sno, Project, Total, प्रत्येक महिन्याचा स्तंभ | सगळ्या प्रोजेक्ट्सची महिन्यानुसार जमा रक्कम |
| 13 | Dues Report Global | `rep4b` ("Global Consolidated Dues") | नोंदवलेले नाहीत | Sno, Project, Total Agreement Value, Slab Due, Received, Due Balance, Total Balance | सगळ्या प्रोजेक्ट्सची एकत्रित थकबाकी |
| 14 | Soc Comn Rep | `tbook7` ("Society Communication Rep") | नोंदवलेले नाहीत | Sno, Flat No, Client, Reg Date, Reg No, Maint Date, Pan No, Mob No, Email | सोसायटीसाठी सदस्यांची संपर्क यादी (240 ओळी) |
| 15 | Mega Dues | `rep3c` ("Due Report Mega") | To Print, Building, pricing Type | पाहिले नाही (Refresh नंतर) | इमारत आणि किंमतीच्या प्रकारानुसार सविस्तर थकबाकी |
| 16 | Project Sales | `rep6` | नोंदवलेले नाहीत | Sno, Building, Type, Carpet Area, Salable Area, No of Unit, Sold unit, Balance unit, Total Area, Sold Area, Balance Area, Sold Amount | इमारत x प्रकारानुसार एकूण, विकलेले आणि उरलेले युनिट्स व क्षेत्रफळ (34 ओळी) |
| 17 | Detailed Balance | `rep1` ("Detailed Consolidated Balance Report as on `<date>`") | फ्लॅटनुसार `?knox5=` | विभाग 7.3.1 पहा | प्रत्येक बुकिंगचा सगळ्या भागांसह संपूर्ण हिशोब (242 ओळी) |
| 18 | Broker Balance | `trpay2a` | ब्रोकर निवड, From / To | पाहिले नाही | एका ब्रोकरचा कमिशन आणि पेमेंटचा हिशोब |
| 19 | Sales Consolidation | `rep2` ("Sales & Availability Report") | नोंदवलेले नाहीत | Sno, Building, Total Area, Sold, Balance, Total Flats, Sold, Balance | इमारतीनुसार क्षेत्रफळ आणि फ्लॅट्सची विक्री व उपलब्धता |
| 20 | Payment Follow | `trcus1` ("Payment Follow-Ups") | Building, शोध, बुकिंग निवड, select all | विभाग 4.21 पहा | पाठपुरावा करण्याचे पान |
| 21 | Follow Details | `trpay2b` ("Payment Follow Details") | शोध, व्यक्ती (9), From / To | पाहिले नाही | केलेल्या पाठपुराव्यांचा इतिहास |
| 22 | Bank APF nos | `tbook8` | शोध | बँकांच्या APF क्रमांकांची यादी; "Add Bank APF nos" (`fsat2`) | गृहकर्जासाठी प्रोजेक्टला मान्यता दिलेल्या बँका |
| 23 | Broker Dues | `tbook2b` ("Global Broker Dues") | नोंदवलेले नाहीत | Sno, Broker, Brokerage, TDS, GST, Final, Paid, Balance | सगळ्या ब्रोकर्सची बाकी. Final = Brokerage − TDS + GST. |
| 24 | Flat and Dues | `rep3` ("Flat & Dues Report as on `<date>`") | With Slab, To Print; बुकिंगनुसार `?ksg1=`, फ्लॅटनुसार `?knox5=` | विभाग 7.3.2 पहा | प्रत्येक बुकिंगची थकबाकी, GST, व्याज, योजना आणि कर्ज की स्वतःचे पैसे |
| 25 | Rec Management | `trpays1` ("Receipt Management") | विभाग 7.3.3 पहा | सारांश: Mode x (Realized, Unrealized, Dishonoured, Total); Purpose x Amount | चेकची स्थिती आणि पावत्यांचे व्यवस्थापन |
| 26 | Dues Report Lite | `rep3b` | नोंदवलेले नाहीत | Sno, Client, Mobile, Flat No, Type, FlatCost, Slab %, Slab Amt, Rec, Repay, Due Balance, Flat_Bal, Slab_Name | थकबाकीचा छोटा अहवाल |
| 27 | Taxes | `tbook3` ("Statutory Taxes") | नोंदवलेले नाहीत | Sno, Date, Type, Flat No, Client, Agree_Amt, Slab Amount, GST, GST_Rec, GST_Bal, GST_Per | स्लॅबनुसार मागितलेला GST आणि त्याची वसुली |
| 28 | Letter History | `trpay7` | बुकिंग निवड, From / To; हाताने नोंद: Letter Date, Letter Name, Particulars, Add | पाहिले नाही | पाठवलेल्या पत्रांचा इतिहास |
| 29 | Extra Exp Rep | `tbook9` | नोंदवलेले नाहीत | Builder A/c: GST, Total, Rec, Balance; Society A/c: Total, Rec, Balance | प्रत्येक बुकिंगचा जादा खर्च, बिल्डर आणि सोसायटी खात्यांत वेगळा |
| 30 | Letter Formats | `blan2` | बुकिंगनुसार `?kno=` | 16 Word साच्यांची यादी (विभाग 8.1) | पत्रांचे साचे |

**मुख्य मेनूतील अहवालासारखे पान:** Due Bookings only (`rep3a`). स्तंभ विभाग 4.17 मध्ये आहेत. हे Info Menus च्या 30 मध्ये मोजलेले नाही.

**छापण्याजोगे पत्रक:** Recovery Sheet (`mrep1`), Payment Follow मधून. पाहिले नाही.

### 7.2 अहवालांचे सामान्य नियम

- बऱ्याच अहवालांचा तक्ता "Refresh" (फॉर्म सबमिट) दाबल्यावरच दिसतो. असे अहवाल या अभ्यासात फक्त फिल्टर्सपुरते पाहिले.
- Settings मधील From Date / To Date हा कालावधी अहवालांसाठी सामायिक आहे.
- अनेक अहवालांत "To Print" पर्याय आहे. त्यामुळे छापण्यायोग्य स्वरूप मिळते (अंदाज: पर्यायाच्या नावावरून).
- "Global" अहवाल (Sales, Receipt, Dues) सगळ्या प्रोजेक्ट्सचे एकत्र आकडे देतात. बाकीचे अहवाल चालू प्रोजेक्टचे.
- काही अहवाल एका फ्लॅट किंवा बुकिंगसाठी थेट उघडतात: `rep1?knox5=`, `rep3?knox5=`, `rep3.html?ksg1=`.
- Excel किंवा PDF मध्ये निर्यात (export) करण्याची सोय दिसली नाही.

### 7.3 मोठ्या अहवालांचे स्तंभ सविस्तर

#### 7.3.1 Detailed Balance (`rep1`)

प्रत्येक बुकिंगसाठी एक ओळ (242 ओळी). स्तंभ गटवार:

| गट | स्तंभ (स्क्रीनवर) | अर्थ |
|---|---|---|
| ग्राहक | Client, Address, Phone, Email | ग्राहकाची माहिती |
| फ्लॅट आणि तारखा | Flat_No, Type, Booking Date, Reg_Date, Agree_Date, Pos_Date, Maint_Date | फ्लॅट, प्रकार, बुकिंग, नोंदणी, करार, ताबा आणि मेंटेनन्सच्या तारखा |
| क्षेत्रफळ आणि दर | Cr_Area, Area, Rate, Mkt_Value | कार्पेट क्षेत्रफळ, क्षेत्रफळ, दर, बाजारमूल्य |
| Flat | Amount / Rec / Bal | कराराची किंमत: एकूण / मिळालेली / बाकी |
| Extra | Amount / Rec / Bal | जादा खर्च |
| Amn | Amount / Rec / Bal | सुविधा (amenities) |
| Park | Amount / Rec / Bal | पार्किंग |
| Adv | Amount / Rec / Bal | आगाऊ (advance) |
| Total | Amount / Rec / Bal | एकूण |
| कर्ज आणि कायदेशीर | Bank, Loan Amt, NOC Date, Reg No, Mort_Rel Date | कर्जाची बँक, कर्जाची रक्कम, NOC ची तारीख, नोंदणी क्रमांक, गहाणमुक्तीची तारीख |
| इतर | Pan nos, Parking Infos | PAN क्रमांक, पार्किंगची माहिती |

या अहवालावरून प्रत्येक बुकिंगचे पूर्ण भाग कळतात: Flat (करार), Extra, Amenities, Parking, Advance. GST यात नाही; तो स्वतंत्रपणे ठेवला जातो.

#### 7.3.2 Flat and Dues (`rep3`)

पर्याय: With Slab, To Print.

| स्तंभ (स्क्रीनवर) | अर्थ |
|---|---|
| Sno | अनुक्रमांक |
| Com | शेरा (comments) |
| Client | ग्राहक |
| Mobile | मोबाईल |
| Flat No | फ्लॅट क्रमांक |
| Type | प्रकार |
| Booked | बुकिंगची तारीख (अंदाज) |
| Agree Date | कराराची तारीख |
| Exp Agree Date | अपेक्षित कराराची तारीख |
| Area | क्षेत्रफळ |
| FlatCost | फ्लॅटची किंमत |
| Slab Amt | आतापर्यंत मागितलेल्या स्लॅबची रक्कम |
| Rec | मिळालेली |
| Repay | परत दिलेली |
| Due Balance | थकबाकी |
| Flat_Bal | फ्लॅटच्या एकूण किंमतीपैकी बाकी |
| SlabName | चालू स्लॅबचे नाव |
| GST | देय GST |
| GST_Rec | मिळालेला GST |
| GST_Bal | बाकी GST |
| Interest | व्याज |
| Waived | माफ केलेले व्याज |
| Int_Rec | मिळालेले व्याज |
| Int_Bal | बाकी व्याज |
| Scheme | योजना |
| Financing | Loan किंवा Self |

स्तंभांवरून (अंदाज): `Due Balance = Slab Amt − Rec + Repay`, `Flat_Bal = FlatCost − Rec + Repay`, `GST_Bal = GST − GST_Rec`.

#### 7.3.3 Rec Management (`trpays1`, "Receipt Management")

| फिल्टर (स्क्रीनवर) | अर्थ | पर्याय |
|---|---|---|
| बुकिंग | कोणती बुकिंग | अनेक निवडी |
| Search by | कोणत्या तारखेने शोधायचे | Receipt_Date किंवा Cheque_Date |
| From / To | कालावधी | तारखा |
| Account | कंपनीचे खाते | 4 खाती |
| Mode | पद्धत | सगळ्या 9 पद्धती |
| Status | चेकची स्थिती | Unrealized only, Realized only, Dishonoured only |
| Purpose | उद्देश | Agreement, TDS, Interest, Cancelled Flats |
| Chq or Rec No | चेक किंवा पावती क्रमांक | मजकूर |

सारांश:
- प्रत्येक Mode साठी: Realized, Unrealized, Dishonoured, Total.
- प्रत्येक Purpose साठी: Amount.

#### 7.3.4 Project Sales, Sales Consolidation आणि Dues Report Global

| अहवाल | स्तंभ | अर्थ |
|---|---|---|
| Project Sales | No of Unit / Sold unit / Balance unit | एकूण / विकलेले / उरलेले युनिट्स |
| | Total Area / Sold Area / Balance Area | एकूण / विकलेले / उरलेले क्षेत्रफळ |
| | Carpet Area, Salable Area | कार्पेट आणि विक्रीयोग्य क्षेत्रफळ |
| | Sold Amount | विक्रीची एकूण रक्कम |
| Sales Consolidation | Total Area, Sold, Balance | इमारतीचे क्षेत्रफळ: एकूण, विकलेले, उरलेले |
| | Total Flats, Sold, Balance | इमारतीचे फ्लॅट्स: एकूण, विकलेले, उरलेले |
| Dues Report Global | Total Agreement Value | प्रोजेक्टमधील सगळ्या करारांची एकूण किंमत |
| | Slab Due | आतापर्यंत मागितलेली रक्कम |
| | Received | मिळालेली |
| | Due Balance | आताची थकबाकी (अंदाज: Slab Due − Received) |
| | Total Balance | करारापैकी एकूण बाकी (अंदाज: Total Agreement Value − Received) |

---

## 8. पत्रे आणि संदेश

### 8.1 पत्रांचे साचे (Letter Formats, `blan2.html`)

- साचे Word (.docx) फाइल्स आहेत. प्रत्येक बुकिंगसाठी त्यात माहिती आपोआप भरली जाते (mail-merge), `?kno=bookingId`.
- नोंदींनुसार एकूण 16 साचे आहेत. नावे:

| क्र. | साचा (स्क्रीनवर) | अर्थ |
|---|---|---|
| 1 ते 6 | Demand Letter (6 आवृत्त्या) | स्लॅबनुसार पैसे मागणारे पत्र. सहा आवृत्त्यांमधील फरक पाहिला नाही. |
| 7 | Customer Details_Builder | बिल्डरसाठी ग्राहकाचा तपशील |
| 8 | Customer Details_Society | सोसायटीसाठी ग्राहकाचा तपशील |
| 9 | NOC letter: Union Bank | कर्जासाठी बँकेला NOC पत्र |
| 10 | NOC letter: ICICI | " |
| 11 | NOC letter: Canara | " |
| 12 | NOC letter: Axis | " |
| 13 | NOC letter: SBI | " |
| 14 | NOC letter: HDFC | " |
| 15 | Testing | चाचणीचा साचा |

- नावांनुसार मोजल्यास 15 होतात. 16 वा साचा कोणता, हे नोंदींमध्ये नाही.
- कोणतेही .docx डाउनलोड केले नाही. त्यामुळे पत्रांचा मजकूर पाहिला नाही.

### 8.2 बुकिंग आणि पावतीनुसार पत्रे (`blet3r.html`)

- **बुकिंगनुसार:** `blet3r.html?knox2=&knox1=`. Booking Info आणि Slab Details मधून उघडते. मागणी पत्र, NOC अशी पत्रे.
- **पावतीनुसार:** `blet3r.html?...&kro1=receiptId`. Receipts Entry च्या इतिहासातील Action मधून. पावतीचे पत्र / छपाई.
- पत्रांवर Project Info मधील माहिती (पत्ता, सही करणारा, बँक खाते, RERA No) छापली जाते. कंपनीची माहिती Company Info मधून.

### 8.3 पत्रांचा इतिहास (Letter History, `trpay7`)

- बुकिंग आणि From / To निवडून इतिहास पाहता येतो (तक्ता पाहिला नाही).
- पाठवलेले पत्र हाताने नोंदवता येते:

| Field (स्क्रीनवर) | अर्थ | प्रकार |
|---|---|---|
| Letter Date | पत्र पाठवल्याची तारीख | तारीख |
| Letter Name | पत्राचे नाव / प्रकार | मजकूर |
| Particulars | शेरा | मजकूर |

बटण: **Add**.

- सिस्टिमने काढलेले पत्र आपोआप इतिहासात जाते का, हे पाहिले नाही.

### 8.4 SMS

- Slab Details मधील GST बॉक्स `sms2.html` ला फॉर्म पाठवतो. त्यामुळे GST किंवा मागणीची माहिती SMS ने पाठवण्याची सोय आहे.
- SMS पान उघडले नाही. संदेशाचा मजकूर, कोणाला जातो, आणि इतर ठिकाणी SMS आहे का, हे पाहिले नाही.

### 8.5 इतर छापण्याजोगी कागदपत्रे

- **Recovery Sheet** (`mrep1.html?krno=`): Payment Follow मधून एका बुकिंगचे वसुली पत्रक. पाहिले नाही.
- **Quotation:** "Show Quotation" नंतरचे कोटेशन. पाहिले नाही.
- अहवालांमधील "To Print" पर्याय.

### 8.6 ग्राहकाशी संपर्काच्या पसंती

- ग्राहक मास्टरमध्ये "Do not Call" आणि "Only Email" खुणा आहेत.
- Client List मध्ये "Only Email Client" फिल्टर आहे.
- सिस्टिममधून ईमेल किंवा WhatsApp पाठवण्याची सोय दिसली नाही.

---

## 9. मास्टर याद्या आणि सेटिंग्ज

### 9.1 मास्टर याद्या

| मास्टर | पान | मजकूर / पर्याय | कुठे वापरले | सध्याची स्थिती |
|---|---|---|---|---|
| इमारत (Building) | New Building, `blat1` | Building name; यादी; Goto Edit | New Flats, New Parking, Slab, अहवाल | A, B |
| फ्लॅटचा प्रकार (Type) | Add Type, `blat2` | 1 RK, 1 RK + Terrace, 1 BHK, 1 BHK + Terrace, 2 BHK, 2 BHK + Terrace, 3 BHK, 4BHK+T, OFFICE, SHOP, REFUSE AREA | New Flats, List of Flats, Available Flats | 11 प्रकार (ListView फिल्टरमध्ये 14 पर्याय) |
| दिशा (Facing) | Add Facing, `blat8` | Club, Garden, Podium, Road | New Flats | 4 |
| मजला (Floor) | पान पाहिले नाही | Ground पासून | New Flats, Available Flats | 51 पर्याय (ListView मध्ये 52) |
| किंमतीचा प्रकार (pricing Type) | पान पाहिले नाही | Type1 ते Type7, उदा. A-Founder Member, A-New Member, B-Founder Member, B-New Member | Quotation, Define Slabs, Slab Setting, Mega Dues | 7 |
| स्लॅब योजना | Define Slabs New, `slab1a` | Slab No, Slab Name, Percent | Slab Setting, Payment Follow | पाहिलेल्या योजनेत 24 स्लॅब |
| पार्किंगचा प्रकार | पान पाहिले नाही | Adjustable, Open, Stilt | New Parking, Booking Info | 3 |
| फोनचे कारण (Calling Message) | `blat5` | payment followup, loan documents, customer feedback | Payment Follow | 3 |
| ग्राहकाचे उत्तर (Answering Message) | `blat5a` | कारणानुसार उत्तरे | Payment Follow | रिकामी |
| ग्राहकाची श्रेणी (Client Category) | `blat5c` | मुक्त श्रेणी | Payment Follow | रिकामी |
| जादा खर्चाचा प्रकार (Expense Head) | पान पाहिले नाही | Other Charges - CIDCO Plot Mortgage | Extra Expenses | 1 |
| योजना (Scheme) | पान पाहिले नाही | पर्याय नोंदवलेले नाहीत | Booking Entry, Booking Info, Flat and Dues | नोंदवलेले नाही |
| कंपनीची बँक खाती | पान पाहिले नाही | खाती (क्रमांक नोंदवलेले नाहीत) | Receipts, Repayment, Broker Payments, Rec Management | 4 |
| बँक APF | Bank APF nos, `tbook8`; Add, `fsat2` | APF क्रमांक | संदर्भासाठी | नोंदवलेले नाही |
| ब्रोकर | New Broker, `cus2` | विभाग 4.5 | बुकिंग, ब्रोकर अहवाल | 13 (HEAD OFFICE, SOCIETY सह) |
| कर्मचारी | New Executive, `cus2?ktn1=123` | विभाग 4.6 | बुकिंग | 1 |
| जमीनमालक | Land Owner, `cus3` | विभाग 4.7 | Flat Info, List of Flats | 0 |
| संस्थेचा प्रकार (Org Type) | ठरलेली यादी | Individual, Proprietor, Partnership, Limited company | New Broker | 4 |
| पैसे भरण्याची पद्धत (Mode) | ठरलेली यादी | Cheque, D.D, Cash, RTGS, Challan, NEFT, IMPS, UPI, Transfer | Receipts, Repayment, Broker Payments, Rec Management | 9 |
| पत्र साचे | Letter Formats, `blan2` | 16 Word साचे | पत्रे | 16 |

### 9.2 सेटिंग्ज

| सेटिंग | पान | काम |
|---|---|---|
| अहवालांचा कालावधी (From Date, To Date) | Settings, `set1` | सगळ्या अहवालांसाठी सामायिक तारखा. "Save". |
| चालू प्रोजेक्ट | हेडरमधील ड्रॉपडाउन + Set (`sform`, `op1`) | सगळ्या पानांसाठी प्रोजेक्ट निवड |
| प्रोजेक्टची माहिती | Project Info, `pro1` | पत्रे, मागण्या आणि पावत्यांवर छापली जाणारी माहिती |
| कंपनीची माहिती | Company Info, `pro2` | पत्ता, PAN, GST No, Service Tax No, सही करणारा |
| बुकिंगनुसार व्याजाचे नियम | Slab Details, `slab3` | Interest Rate per Annum, Interest Waived, Manual VAT, Discount Rate % |
| पासवर्ड | Change Password, `bedi1` | पाहिले नाही |

युजर्स जोडणे, भूमिका, परवानग्या, SMS सेवा, ईमेल सेवा किंवा कराच्या दरांची सेटिंग्ज दिसली नाहीत.

---

## 10. मर्यादा आणि कमतरता

हे मुद्दे फक्त पाहण्याच्या अभ्यासावरून आहेत. "दिसले नाही" म्हणजे ती सोय अजिबात नाही असे खात्रीने म्हणता येत नाही.

### 10.1 व्याप्ती

- **बुकिंगच्या आधीचे काहीच दिसले नाही.** चौकशी, लीड, साइट व्हिजिट किंवा विक्रीच्या पायऱ्यांची नोंद नाही. काम थेट ग्राहक आणि बुकिंगपासून सुरू होते.
- **कोटेशन ग्राहकाशी जोडलेले नाही.** संभाव्य ग्राहकाचे नाव मुक्त मजकूर आहे. कोटेशन साठवले जाते का ते दिसले नाही.
- **डॅशबोर्ड नाही.** मुख्य पानावर फक्त "No Flat Allocation" सूचना आहेत. आजचे फोन, थकबाकी किंवा विक्री एका नजरेत दिसत नाही.
- **ग्राहकासाठी पोर्टल किंवा ॲप दिसले नाही.**
- **कागदपत्रे जोडण्याची सोय दिसली नाही.** करार, KYC किंवा बँकेची पत्रे अपलोड करता येत नाहीत.

### 10.2 वापर

- **जुने आणि अवघड पान.** प्रत्येक तारखेसाठी तीन ड्रॉपडाउन आणि "is set" चेकबॉक्स.
- **प्रत्येक छोट्या बदलासाठी वेगळे बटण.** Booking Info मध्येच Fix Markings, Fix Client and Pan Infos, Modify Particulars, Save Modifications, Modify Loan Info, कर्जाच्या प्रत्येक तारखेचे Fix, Modify Flat Allocation, Modify Parking Information.
- **मोबाईलवर वापरण्यासाठी बनवलेले नाही.** quirks mode मधील जुनी HTML पाने.
- **बहुतेक अहवाल Refresh दाबल्यावरच भरतात.**
- **Excel / PDF निर्यात दिसली नाही.**

### 10.3 माहितीची रचना

- **ठरलेल्या मर्यादा:** जास्तीत जास्त 3 सह-ग्राहक (एकूण 4 नावे), आणि एका फ्लॅटला जास्तीत जास्त 4 मालक.
- **पार्किंग फक्त संख्येने.** वैयक्तिक पार्किंग क्रमांक नाहीत, त्यामुळे कोणत्या ग्राहकाला कोणती जागा ते कळत नाही.
- **ब्रोकर आणि विक्रीचा स्रोत एकाच यादीत.** "HEAD OFFICE" आणि "SOCIETY" ब्रोकर म्हणून नोंदवलेले आहेत. ब्रोकर आणि कर्मचारीही एकाच पार्टी यादीत.
- **"Type" हा शब्द दोन अर्थांनी.** फ्लॅटचा प्रकार (1 BHK) आणि किंमतीचा प्रकार (Type1 ते Type7).
- **काही मास्टर्स रिकामे किंवा अपूर्ण.** Answering Message आणि Client Category रिकामे. Expense Head मध्ये एकच प्रकार.
- **काही भाग कुठून भरतात ते स्पष्ट नाही.** Amenities, Parking आणि Advance हे भाग Detailed Balance मध्ये आहेत, पण त्यांची नोंद किंवा पावतीत वेगळा भाग दिसला नाही.

### 10.4 हिशोब

- **जुन्या करांचे अवशेष.** सर्व्हिस टॅक्स 2.6%, VAT 1%, Manual VAT, Service Tax No, आणि पावतीच्या कोडमधील लपवलेले भाग.
- **GST चा दर कुठे ठरतो ते दिसले नाही.**
- **व्याजाचे सूत्र स्क्रीनवर स्पष्ट नाही.**
- **चेकची स्थिती हाताने.** बँक स्टेटमेंटशी आपोआप जुळणी दिसली नाही. स्थिती कुठे बदलतात तेही दिसले नाही.
- **ऑनलाइन पेमेंट लिंक दिसली नाही.**

### 10.5 संवाद

- **पत्रे Word फाइल्स म्हणून.** ती डाउनलोड करून हाताने पाठवावी लागतात (अंदाज).
- **पत्रांचा इतिहास हाताने नोंदवावा लागतो** (Letter History मध्ये "Add").
- **फक्त SMS ची सोय दिसली** (Slab Details मधून). WhatsApp, ईमेल किंवा आपोआप स्मरण दिसले नाही.
- जन्मतारीख आणि लग्नाची तारीख साठवली जाते, पण शुभेच्छा पाठवण्याची सोय दिसली नाही.

### 10.6 नियंत्रण

- **बदलांचा इतिहास दिसला नाही.** फक्त पावतीवर ती नोंदवणाऱ्या युजरचे नाव आणि फ्लॅट्सची "entered by" यादी.
- **भूमिका आणि परवानग्यांची रचना दिसली नाही.**
- **फ्लॅटशिवाय बुकिंग शक्य.** त्यासाठी फक्त मुख्य पानावर सूचना दिसते.

---

## 11. या अभ्यासात न पाहिलेले भाग

### 11.1 उघडली नाहीत अशी पाने

| पान | कारण |
|---|---|
| Change Password (`bedi1`), Log Out (`out`) | मुद्दाम उघडले नाही |
| बदल करण्याची पाने: `cus1e`, `cus2e`, `cus3e`, `flat1e`, `rpaye`, `book1ce` | browse-only नियम |
| SMS पान (`sms2`) | फॉर्म सबमिट होतो |
| Recovery Sheet (`mrep1`) | नवीन विंडो ब्राउझरने थांबवली |
| Word पत्रे (`blan2.html?kno=`) | .docx डाउनलोड केले नाहीत |
| पत्रांचे पान (`blet3r`) मधील मजकूर | नोंदवलेला नाही |
| Add Bank APF nos (`fsat2`) | मजकूर नोंदवलेला नाही |
| बाकी 12 प्रोजेक्ट्स | फक्त DDSR HERITAGE CHS पाहिला; प्रोजेक्ट स्विच केला नाही |

### 11.2 फॉर्म सबमिट केल्यावरच दिसणारी माहिती

- Booking List, Available Flats ListView, Available Flats GridView ची ग्रिड, Parking List, Cancellation List, Reg & Loan 2, Mega Dues, Broker Balance, Follow Details, Letter History यांचे तक्ते.
- Chq Search चा निकाल.
- Quotation चे कोटेशन ("Show Quotation").
- Slab Setting मध्ये "Set Slab as per `<Type>`" चा परिणाम.
- कोणत्याही Add / Fix / Modify / Save / Submit बटणानंतरचे वर्तन, आणि त्या वेळच्या तपासण्या (validation).

### 11.3 मास्टर पाने जी दिसली नाहीत

- मजला (Floor), किंमतीचा प्रकार (pricing Type), पार्किंगचा प्रकार, जादा खर्चाचा प्रकार (Expense Head), योजना (Scheme) आणि कंपनीची बँक खाती भरण्याची पाने.
- युजर्स, भूमिका आणि परवानग्यांची पाने.

### 11.4 अर्थ किंवा पर्याय नोंदवलेले नाहीत

- Scheme चे पर्याय.
- Type1 ते Type7 पैकी चार उदाहरणांशिवाय बाकी तीन प्रकारांची नावे.
- Booking Info मधील brokerage चे "आणखी 3 फील्ड्स" (नोंदींत "likely %, deduction, GST" असा अंदाज).
- प्रत्येक सह-ग्राहकाचे नेमके 6 फील्ड्स (नोंदींत "etc.").
- Due Amount Date चा नेमका अर्थ.
- Receipts Entry मधील चेकबॉक्स, Quotation मधील चेकबॉक्स, आणि Cancellation मधील जादा रकमेचा बॉक्स यांचे काम.
- Interest Waived आणि Manual VAT हे रक्कम आहेत की खूण.
- Discount Rate %, Schedule Amount आणि Special Start Date नेमके कसे वापरले जातात.
- व्याजाचे नेमके सूत्र.
- Demand Letter च्या 6 आवृत्त्यांमधील फरक.
- `blet3r` मधील `knox1` आणि `knox2` ची मूल्ये.
- Land Owner फॉर्मच्या बटणाचे नाव.
- Payment Follow यादीत 26 बुकिंगच का (नोंदींत "likely those with dues").

### 11.5 नोंदींमधील विसंगती आणि अस्पष्टता

| # | मुद्दा | नोंदींमध्ये काय आहे |
|---|---|---|
| 1 | फ्लॅट्सची संख्या | New Flats आणि Flat Info मध्ये 245, पण List of Flats मध्ये 246 ओळी. |
| 2 | बुकिंगची संख्या | चालू बुकिंग 241, पण Detailed Balance मध्ये 242 ओळी. |
| 3 | पत्र साच्यांची संख्या | "16 templates" असे लिहिले आहे, पण नावानुसार 15 मोजता येतात (6 Demand + 2 Customer Details + 6 NOC + Testing). |
| 4 | Client List ची Category | फिल्टरमध्ये 57 पर्याय, पण Client Category मास्टर (`blat5c`) रिकामा आहे. ही Category वेगळी आहे का, ते स्पष्ट नाही. |
| 5 | Answering Message | मास्टर रिकामा, पण "What they told?" ची यादी कारणानुसार बदलते असे लिहिले आहे. |
| 6 | फ्लॅटशिवाय बुकिंग | Booking Entry मध्ये उपलब्ध फ्लॅट निवडावा लागतो, तरी "No Flat Allocation" सूचना असलेली बुकिंग आहेत. ती कशी तयार होतात ते स्पष्ट नाही. |
| 7 | Type चे पर्याय | New Flats मध्ये 11 प्रकार, ListView फिल्टरमध्ये 14. मजले 51 विरुद्ध 52. |
| 8 | "Type" चे दोन अर्थ | फ्लॅटचा प्रकार आणि किंमतीचा प्रकार. Slab Setting आणि Project Sales मधील "Type" कोणता, हे नोंदींमध्ये पूर्ण स्पष्ट नाही. |
| 9 | कर्मचारी | फक्त 1 कर्मचारी नोंदवलेला, आणि Executive Name च्या यादीत "FOUNDER MEMBER" आहे. ती एकमेव नोंद हीच आहे का, ते स्पष्ट नाही. |
| 10 | `ktn1` | New Executive मध्ये प्रकार (`ktn1=123`), पण `cus2e.html?ktn1=id` मध्ये id. एकाच नावाचे दोन उपयोग. |
| 11 | रकमेचे भाग | Detailed Balance मध्ये Amenities, Parking, Advance आहेत, पण पावतीत किंवा Extra Expenses मध्ये ते वेगळे दिसत नाहीत. |
| 12 | Rec Management चे Purpose | पर्याय Agreement, TDS, Interest, Cancelled Flats. पावतीतील Extra Charges आणि GST हे उद्देश यादीत नाहीत. |
| 13 | Salable Area | Project Sales मध्ये आहे, पण New Flats मध्ये हे फील्ड नाही. |
| 14 | Exp Agree Date | Flat and Dues मध्ये आहे, पण Booking Info च्या तारखांमध्ये नाही. |
| 15 | रद्द बुकिंगची संख्या | 295 − 241 = 54 असा अंदाज. रद्द बुकिंगची नेमकी संख्या नोंदवलेली नाही. |

---

*दस्तऐवज समाप्त.*
