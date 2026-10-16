# Global Digital Marketing Pro — Firebase setup guide (বাংলা)

## এই package-এ
- Professional portfolio homepage এবং Fiverr-এর Hire Me button
- Client registration/login, email verification link, password recovery
- Client dashboard ও private project updates
- Admin panel: public website text/services edit, orders/payment records, private client updates, review approval/rejection
- Firestore security rules

## Firebase setup
1. Firebase Console: https://console.firebase.google.com/ খুলুন।
2. Project `globaldigitalmarketingpr-bbfa7`-এর Overview-তে গিয়ে নিশ্চিত করুন এটি আপনার project।
3. Authentication → Sign-in method → Email/Password enable করুন।
4. Authentication → Settings → Authorized domains-এ ব্যবহার করা domain যোগ করুন: `globaldigitalmarketingpro.com`, `www.globaldigitalmarketingpro.com`, `sornikr-dotcom.github.io` (যে domain-এ site চলবে সেগুলো)।
5. Firestore Database তৈরি করুন, Production mode নির্বাচন করুন।
6. `js/firebase-config.js`-এ আপনার দেওয়া web configuration বসানো আছে। এটি public web configuration; এখানে service-account key বা admin password নেই।

## Admin UID সেট করা বাধ্যতামূলক
1. Site deploy করার পর `register.html` দিয়ে নিজের admin account তৈরি করুন।
2. Email verification link খুলে verify করুন।
3. Firebase Console → Authentication → Users → আপনার account → UID কপি করুন।
4. `firestore.rules`-এ `REPLACE_WITH_YOUR_ADMIN_AUTH_UID` বদলে আপনার exact UID বসান।
5. Firebase Console → Firestore Database → Rules-এ সম্পূর্ণ `firestore.rules` content paste করে Publish করুন।
6. `admin.html` খুলে sign in করুন। Admin panel নিজে security নয়; rules-ই access enforce করে।

## GitHub Pages
1. সব ফাইল/folder (`css`, `js`, HTML, `firestore.rules`, `firebase.json`) GitHub repository-তে commit করুন।
2. Repository → Settings → Pages → Deploy from a branch → `main` → `/(root)` → Save।
3. Custom domain থাকলে GitHub Pages settings ও DNS configuration যাচাই করুন।
4. `file://` দিয়ে HTML খুলে test করবেন না; GitHub Pages URL ব্যবহার করুন।

## Orders, payments ও project history
Admin Panel → Orders & payments-এ বাস্তব order amount এবং আসলে পাওয়া payment amount আলাদাভাবে যোগ করুন। এই package স্বয়ংক্রিয়ভাবে Fiverr থেকে orders/payment import করে না। আপনার দেওয়া পুরোনো project details homepage Portfolio-তে project value হিসেবে আছে:
- Liam — Website Development — $600
- Noya — Complete Website Package — $750
- James — Complete Website Setup — $1,000
- William — Website Fix & Updates — $100
- Michael — Facebook Content to Website — approx. $800

এগুলো Portfolio case studies; Admin dashboard-এর order/payment totals-এ স্বয়ংক্রিয়ভাবে যোগ করা হয়নি। Admin Panel-এ record যোগ করার আগে actual paid amount যাচাই করুন। Public portfolio-তে project value দেখানো আছে, যা paid amount বা verified revenue দাবি করে না।

## Reviews
- Public review form থেকে submitted review `pending` status পায়।
- Admin Panel থেকে Approve করলে public site-এ দেখা যায়; Reject করলে hidden থাকে।
- কোনো fake customer testimonial seed করা হয়নি। বাস্তব feedback-ই approve করে প্রকাশ করুন।

## Spark plan
- GitHub Pages static hosting বিনামূল্যে।
- Firebase Auth/Firestore no-cost quotas ও feature requirements সময়ের সঙ্গে বদলাতে পারে: https://firebase.google.com/docs/projects/billing/firebase-pricing-plans
- এই package-এ Cloud Functions, external email API, paid storage upload বা custom OTP নেই। Verification Firebase email link।
- Firestore rules publish না করে production data ব্যবহার করবেন না। Rules পরিবর্তনের পর client account দিয়ে cross-user access test করুন।
- Firebase config public; security rules, Authentication settings ও API restrictions ঠিক রাখা জরুরি।

## Security checklist
- [ ] Firebase Email/Password enabled
- [ ] Authorized domains configured
- [ ] Firestore Production database created
- [ ] Own admin UID substituted into rules and rules published
- [ ] Unverified users cannot read private user data
- [ ] Client A cannot read Client B updates
- [ ] Non-admin cannot edit website content, orders or review status
- [ ] Public review submission can only create `pending` reviews
- [ ] No service-account key/password in GitHub
- [ ] Firebase Console usage/billing reviewed

## Limitations
- No direct Fiverr API integration or automatic payment verification.
- No online payment processing, image upload, invoicing, multi-admin roles or automated review verification.
- Public project values are manually supplied by site owner and should be described accurately.

## নতুন ডিজাইন ও প্রোফাইল ছবি
- হোমপেজে নেভি/পার্পল ব্যাকগ্রাউন্ড, নিয়ন পিঙ্ক-সায়ান অ্যাকসেন্ট এবং গোল প্রোফাইল প্লেসহোল্ডার যোগ করা হয়েছে।
- নিজের ছবি বদলাতে `assets/profile-placeholder.svg` ফাইলটি নিজের ছবি দিয়ে প্রতিস্থাপন করুন এবং `index.html`-এ ছবির `src`-এর নাম/extension মিলিয়ে দিন।
