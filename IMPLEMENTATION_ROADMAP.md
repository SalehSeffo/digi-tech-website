# Degi-Tech Website Implementation Roadmap
**Last Updated:** May 3, 2026 (v1.1 — gaps patched)  
**Status:** In Progress (Feature Branch: `degi-tech-first-draft-with-three-services`)

---

## 📋 Executive Summary

The Degi-Tech website requires a strategic pivot from offering three services (Restaurant Management, Marketing, Website) to focusing **exclusively on restaurant management via Gastly**. This roadmap addresses content consolidation, SEO optimization, UI/UX refinement, and comprehensive testing.

---

## 🎯 Phase 1: Content & Strategic Changes (CRITICAL)

### 1.1 Service Consolidation
**Objective:** Remove all references to Marketing and Website services; establish Gastly as sole product

#### Tasks:
- [ ] **Remove Marketing service pages:**
  - Delete `/restaurant-marketing` route from `App.tsx`
  - Remove `RestaurantMarketingPage.tsx` component
  - Delete any marketing-specific UI components

- [ ] **Remove Website service pages:**
  - Delete `/restaurant-website` route from `App.tsx`
  - Remove `RestaurantWebsitePage.tsx` component
  - Delete any website-specific UI components

- [ ] **Update Navigation:**
  - Remove "Marketing" from Header/navigation menus
  - Remove "Website" from Header/navigation menus
  - Keep only "Restaurant Management" (Gastly) visible
  - Update Footer links accordingly

- [ ] **Update Hero Section:**
  - Rewrite copy to focus exclusively on Gastly
  - Remove any mention of three services
  - Emphasize: "The complete restaurant management system"

#### Expected Files to Modify:
- `src/app/App.tsx` (routes)
- `src/app/components/Header.tsx`
- `src/app/components/Footer.tsx`
- `src/app/components/Hero.tsx`
- `src/app/pages/` (route files)

---

### 1.2 Button & CTA Updates
**Objective:** Replace generic CTAs with action-focused alternatives

#### Changes:
| Current Button | New Button | Action |
|---|---|---|
| "Demo ansehen" | "Beraten Lassen" | Route to `/contact` |
| "Kostenlos testen" | Map to `/contact` form | Ensure link works (currently broken) |
| Generic CTAs | "Gastly Demo Buchen" | Book consultation |

#### Implementation:
- [ ] Find all instances of "Demo ansehen" button and replace
- [ ] Map "Kostenlos testen" to `/contact` (currently unmapped)
- [ ] Test all button links in live environment
- [ ] Ensure consistent styling and placement

#### Expected Files:
- `src/app/components/Hero.tsx`
- `src/app/components/FeatureCard.tsx`
- `src/app/pages/HomePage.tsx`
- Any other page with CTAs

---

### 1.3 Features Section Overhaul
**Objective:** Correct feature list (remove non-existent features)

#### Remove These Features:
- ❌ "Inventarverwaltung" (not offered)
- ❌ "Mobile App für iOS & Android" (not ready)
- ❌ "Integration mit Zahlungssysteme" (not implemented)

#### Add These Features:
- ✅ "Daily Reports" (Tagesberichte über Bestseller, Umsatz, etc.)
- ✅ "Real-time Kitchen Display" (Echtzeit-Küchenansicht)
- ✅ "Staff Management & Time Tracking" (Personalplanung & Zeiterfassung)
- ✅ "Staff Performance Monitoring" (Leistungsüberwachung der Mitarbeiter)

#### Implementation:
- [ ] Update `FeatureCard.tsx` component
- [ ] Modify feature list data structure
- [ ] Update descriptions to match Gastly capabilities
- [ ] Verify all features match pricing plans

#### Expected Files:
- `src/app/components/FeatureCard.tsx`
- `src/app/pages/HomePage.tsx`
- Feature data files (if separated)

---

## 💰 Phase 2: Pricing & Plan Updates

### 2.1 Three-Tier Pricing Structure
**Objective:** Update pricing page with accurate, clear plans

#### Plan 1: BASIC (49€/month)
```
Target: Small cafes, quick-service restaurants
Includes:
  - Order & Table System
  - 1-2 Tablets
  - Basic Support
  - Multi-language Support
  - Menu/Table/Price Updates: 1x/month
Setup Fee: 900€ (one-time, includes tablet, receipt printer, hardware, training)
Trial Period: 3 weeks (NOT 14 days as currently stated)
```

#### Plan 2: STANDARD (95€/month) ⭐ BESTSELLER
```
Target: Typical restaurants, medium operations (~70% customer base)
Includes:
  - Everything in Basic
  - Multiple Tablets (3-5)
  - Real-time Kitchen Display System
  - Fast Support (response within 3 hours)
  - Menu/Table/Price Updates: 2x/month
Setup Fee: 900€ (same as Basic)
Trial Period: 3 weeks
Note: This is the primary revenue driver - emphasis needed
```

#### Plan 3: PREMIUM (130€/month)
```
Target: Large restaurants, chains, complex operations
Includes:
  - Everything in Standard
  - Unlimited Tablets
  - Priority Support
  - Custom Modifications
  - Tagesbericht (Chef-Zugang: Umsatz, Bestseller, Tagesübersicht) ← NOT "Telegram"
  - Menu/Table/Price Updates: Unlimited
Setup Fee: 900€ (same as others)
Trial Period: 3 weeks
```
> ⚠️ The original changesplan listed "Telegram" as a Premium feature — this must be removed everywhere.
> The feature is a daily report dashboard accessible via username/password. Never mention Telegram.

#### FAQ Updates:
- [ ] Update trial period from 14 days to **3 weeks**
- [ ] Remove incorrect statement: "Additional users cost 5-10€"
- [ ] Add FAQ about Setup Fee (900€ one-time)
- [ ] **Rewrite pricing model explanation** — current "Sie zahlen für was sie nutzen" is too vague and misleading:
  - Problem: customers with 10 tables expect to pay only for those tables (per-table billing), not a fixed tier
  - New framing: *"Wählen Sie das Paket, das zu Ihrem Betrieb passt. Basis für kleine Cafés, Standard für typische Restaurants, Premium für große Betriebe und Ketten."*
  - Make clear plans are **fixed monthly tiers** based on operation size — not per-table or per-user billing
  - Add a short clarification sentence: *"Die Pakete sind nach Betriebsgröße gestaffelt, nicht nach Tischanzahl."*

#### Implementation:
- [ ] Update `PricingPage.tsx` component
- [ ] Modify pricing data structure
- [ ] Update FAQ section with accurate information
- [ ] **Remove "Telegram" from Premium plan feature list** — replace with "Tagesbericht (Chef-Zugang: Umsatz, Bestseller, Tagesübersicht)"
- [ ] **Search entire codebase** for "Telegram" (case-insensitive) and replace every instance with "Tagesbericht"

---

## 🎨 Phase 3: Visual Design & UX

### 3.0 "Warum Gastly" Section Rewrite
**Objective:** Fix two specific problems in the "Warum Gastly" section

#### Problem 1 — Telegram reference
- Remove any mention of "Telegram" in this section
- Replace with: "Tagesberichte über Umsatz, Bestseller und den täglichen Überblick — direkt für den Chef"

#### Problem 2 — Pricing explanation confusion
- The current "Transparente Preise" point is misleading (implies per-usage billing)
- Rewrite to: *"Klare Pakete, faire Preise — wählen Sie das Modell, das zu Ihrer Betriebsgröße passt."*
- Remove any language that implies customers pay per table or per user

#### Rewrite Checklist:
- [ ] Open the "Warum Gastly" section component and locate the two affected points
- [ ] Replace Telegram bullet with Tagesbericht description
- [ ] Rewrite the pricing bullet to reflect fixed tiers (not pay-per-use)
- [ ] Ensure the rest of the section benefits are benefit-focused (pain points solved)

#### Expected Files:
- `src/app/pages/HomePage.tsx` or whichever component renders "Warum Gastly"

---

### 3.1 Color Palette Update
**Objective:** Modernize design with new color scheme using the confirmed design system

#### Color Palette & Usage Rules:
| Role | Hex | Website Usage |
|---|---|---|
| Primärfarbe | `#03045E` | Buttons, Links, Highlights |
| Sekundärfarbe | `#0077B6` | Navigation, Hover-Effekte |
| Akzentfarbe | `#00B4D8` | Call-to-Actions, wichtige Hinweise |
| Hintergrundfarbe | `#90E0EF` | Flächen, Sections |
| Unterstützende Farbe | `#CAF0F8` | Dezente Hintergründe, Trennlinien |

#### Concrete Application:
- **"Beraten Lassen" / Primary buttons** → `#03045E` background
- **Header / Navigation bar** → `#0077B6`
- **"Kostenlos testen" CTA / Accent elements** → `#00B4D8`
- **Section backgrounds (alternating)** → `#90E0EF`
- **Card borders, dividers, subtle backgrounds** → `#CAF0F8`

#### Implementation:
- [ ] Update `src/styles/theme.css` with new palette and CSS variables
- [ ] Update Tailwind config with custom color names matching the roles above
- [ ] Replace hard-coded colors in all components using the role mapping above
- [ ] Ensure hover states use the next darker shade (e.g. Sekundär on hover of Primär button)
- [ ] Test on all pages for visual consistency

#### Expected Changes:
- Navigation/Header: `#0077B6`
- Primary buttons: `#03045E`
- CTA highlights: `#00B4D8`
- Section fills: `#90E0EF`
- Borders/dividers: `#CAF0F8`

---

### 3.2 Favicon & Browser Tab
**Objective:** Fix logo in browser tab

#### Current Issue:
- Browser tab shows wrong logo (not Degi-Tech logo)

#### Solution:
- [ ] Replace `public/favicon.ico` with correct Degi-Tech logo
- [ ] Ensure logo is:
  - 32x32 pixels minimum
  - ICO or PNG format
  - Clear/readable at small size
- [ ] Update `index.html` favicon reference if necessary
- [ ] Test in multiple browsers

#### Implementation Steps:
1. Create favicon from Degi-Tech logo
2. Place in `public/` directory
3. Verify browser picks up new favicon (may need cache clear)

---

### 3.3 Copywriting & Sales Optimization
**Objective:** Improve messaging, clarity, and conversion focus

#### Areas to Enhance:
- [ ] **Hero Section:** Clearer value proposition (only Gastly focus)
- [ ] **Feature Descriptions:** More benefit-focused, less feature-focused
- [ ] **CTA Copy:** Stronger action words ("Beraten Lassen", "Demo Buchen")
- [ ] **Testimonials:** Ensure they only reference restaurant management
- [ ] **FAQ:** Clearer, more concise language
- [ ] **Pricing:** Better explanation of value per tier

#### Copywriting Guidelines:
- Focus on **pain points solved:** Order confusion, kitchen delays, staff coordination
- Emphasize **ROI:** Time savings, reduced errors, revenue increase
- Use **specific numbers:** "Real-time reports", "3-hour response time"
- **Never use "Telegram"** — always say "Tagesbericht" or "Tagesberichte"
- **Never imply per-table or per-user billing** — always frame as fixed tier by operation size

---

## 🔍 Phase 4: SEO & Indexing

### 4.1 Google Indexing Configuration
**Objective:** Ensure site is indexable and discoverable

#### Current Deployment:
- Host: STRATO
- Domain: https://degi-tech.com/

#### Required Actions:
- [ ] **DNS Configuration (if needed):**
  - Verify A record points to STRATO server IP
  - Check CNAME records if subdomains are used
  - Confirm DNS propagation (can take 24-48 hours)

- [ ] **Search Console Setup:**
  - Add property to Google Search Console
  - Submit sitemap.xml
  - Request indexing for main pages

- [ ] **Sitemap Generation:**
  - [ ] Generate `sitemap.xml` for Vite build
  - [ ] Include all important routes:
    - `/` (home)
    - `/pricing`
    - `/contact`
    - `/restaurant-management` (Gastly only)
  - [ ] Place in `public/` directory

- [ ] **Robots.txt:**
  - [ ] Create `public/robots.txt`
  - [ ] Allow crawlers to index all pages except `/contact` (optional)

- [ ] **Meta Tags:**
  - [ ] Add SEO-friendly title tags
  - [ ] Add meta descriptions (155-160 chars)
  - [ ] Add Open Graph tags for social sharing
  - [ ] Implement in each page component or via helmet

#### Implementation:
See existing: `DEVTOOLS-SEO-GUIDE.md` and `SEO_IMPLEMENTATION_PLAN.md`

---

## ✅ Phase 5: Testing & QA

### 5.1 Functional Testing Checklist
**Objective:** Verify all interactive elements work correctly

#### Navigation Testing:
- [ ] All header links navigate correctly
- [ ] No 404 errors on internal links
- [ ] Mobile menu opens/closes properly
- [ ] Footer links work and open in new tabs if external

#### Button & CTA Testing:
- [ ] "Beraten Lassen" button → `/contact` page
- [ ] "Kostenlos testen" button → `/contact` form (verify mapping)
- [ ] "Demo Buchen" buttons → correct page/contact form
- [ ] All buttons have proper hover states
- [ ] No console errors on click

#### Form Testing:
- [ ] Contact form fields accept input
- [ ] Form validation works (required fields)
- [ ] Form submission succeeds/shows confirmation
- [ ] Email notifications (if configured) are sent

#### Feature Cards & Sections:
- [ ] All text renders correctly (no overflow)
- [ ] Images load without 404 errors
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] No visual glitches or layout shifts

#### Pricing Page:
- [ ] All three plans display correctly
- [ ] Pricing numbers are accurate (49€, 95€, 130€)
- [ ] Setup fee (900€) is clearly shown
- [ ] Trial period (3 weeks) is stated correctly
- [ ] FAQ accordion opens/closes properly

#### Browser Testing:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

---

### 5.2 Content Accuracy Testing
**Objective:** Verify all removed content is gone, new content is correct

#### Removal Verification:
- [ ] No "Marketing" links or pages remain
- [ ] No "Website" links or pages remain
- [ ] No marketing-specific features in feature list
- [ ] No outdated feature descriptions

#### Accuracy Verification:
- [ ] All feature descriptions match Gastly capabilities
- [ ] Pricing aligns with pricing plans (Phase 2)
- [ ] Setup fee mentioned consistently (900€)
- [ ] Trial period stated as 3 weeks everywhere
- [ ] Contact page is properly mapped from all CTAs

#### SEO Verification:
- [ ] Meta titles are unique and descriptive
- [ ] Meta descriptions exist on main pages
- [ ] No duplicate content detected
- [ ] Internal links use proper URL structure

---

## 📊 Phase 6: Deployment & Go-Live

### 6.1 Pre-Deployment Checklist
- [ ] All Phase 1-5 items completed
- [ ] No console errors in production build
- [ ] No broken links (run link checker)
- [ ] Performance is acceptable (check Lighthouse)
- [ ] Mobile responsiveness confirmed
- [ ] SEO tags validated

### 6.2 Deployment Steps
1. [ ] Merge feature branch `degi-tech-first-draft-with-three-services` to `main`
2. [ ] Run `npm run build` to generate production build
3. [ ] Deploy to STRATO (exact process depends on STRATO setup)
4. [ ] Verify deployment successful (check site is live)
5. [ ] Clear browser cache and test key pages
6. [ ] Monitor for errors (check browser console, server logs)

### 6.3 Post-Deployment
- [ ] Submit sitemap to Google Search Console
- [ ] Request index for updated pages
- [ ] Monitor Google Analytics for traffic
- [ ] Check SEO rankings after 2-4 weeks
- [ ] Collect user feedback and iterate

---

## 🗂️ File Structure Reference

### Files to Delete:
```
src/app/pages/RestaurantMarketingPage.tsx
src/app/pages/RestaurantWebsitePage.tsx
```

### Files to Modify:
```
src/app/App.tsx                          (remove routes)
src/app/components/Header.tsx            (remove nav items)
src/app/components/Footer.tsx            (update links)
src/app/components/Hero.tsx              (update copy/buttons)
src/app/components/FeatureCard.tsx       (update features)
src/app/pages/HomePage.tsx               (update content)
src/app/pages/PricingPage.tsx            (update plans/FAQ)
src/styles/theme.css                     (update colors)
public/favicon.ico                       (replace logo)
public/sitemap.xml                       (create/update)
public/robots.txt                        (create)
index.html                               (verify favicon ref)
```

### Reference Documents:
```
DEVTOOLS-SEO-GUIDE.md
SEO_IMPLEMENTATION_PLAN.md
```

---

## 📈 Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Page Load Time | < 3 seconds | Lighthouse |
| Mobile Score | > 90 | Lighthouse |
| Form Conversion | Track | Google Analytics |
| Organic Traffic | Baseline + 30% | GA after 4 weeks |
| Bounce Rate | < 40% | GA |
| Broken Links | 0 | Link checker tool |
| SEO Score | > 85 | Lighthouse SEO |

---

## 🚀 Priority Ranking

### 🔴 CRITICAL (Do First):
1. Remove Marketing & Website pages/routes
2. Update button mappings and CTAs
3. Correct feature list (remove false claims)
4. Update pricing to 49€/95€/130€ with correct details
5. Fix browser tab logo
6. **NEW:** Build Contact Form backend + integrate with degitech.kontakt@gmail.com

### 🟠 HIGH (Do Second):
7. Update color palette to new scheme
8. Improve copywriting for clarity
9. Update FAQ with correct information
10. Set up SEO fundamentals (sitemap, meta tags)
11. **NEW:** Remove all displayed email addresses from public pages

### 🟡 MEDIUM (Do Third):
12. Comprehensive functional testing
13. Mobile responsiveness refinement
14. Browser compatibility testing
15. Performance optimization

### 🟢 LOW (Polish):
16. Analytics setup
17. Post-launch monitoring
18. User feedback collection

---

## 📧 Phase 7: Contact Form & Email Integration (NEW)

### 7.1 Contact Form Backend Setup
**Objective:** Build backend logic for contact form with secure email delivery

#### Requirements:
- [ ] **Backend Email Routing:**
  - All contact form submissions → `degitech.kontakt@gmail.com`
  - No email addresses displayed publicly (spam prevention)
  - HTTPS encryption for form submissions
  - Rate limiting to prevent spam abuse

- [ ] **Form Data Capture:**
  - Required fields: Name, Email, Phone, Message, Company (optional)
  - Validate email format before submission
  - Sanitize all inputs (prevent XSS, SQL injection)
  - Store submission in database with timestamp

- [ ] **Email Confirmation:**
  - Send auto-reply to customer from system
  - Indicate: "We received your inquiry" message
  - Provide expected response time (within 3 hours for Standard+)
  - Support team notified immediately via degitech.kontakt@gmail.com

#### Implementation Options:
**Option A: Firebase (Recommended)**
- Use Firebase Functions for email delivery
- Firebase Firestore for submission storage
- Automatically triggers on form submit
- Cost: ~$0.04 per 100k invocations (minimal)

**Option B: Third-party Service (Easier)**
- Formspree, EmailJS, or Netlify Forms
- No backend code needed
- Limited customization
- Cost: Free-$99/month depending on volume

**Option C: Custom Node.js Backend**
- Full control over logic
- Requires more development time
- Needs deployment infrastructure

#### Recommended Approach:
Using **Firebase Functions + Firestore** (already referenced in `firebase.json`):
1. Create Cloud Function: `onContactFormSubmit()`
2. Trigger: Firestore write to `contact-submissions/{docId}`
3. Function logic:
   - Validate form data
   - Send email to degitech.kontakt@gmail.com (Nodemailer + Gmail)
   - Send auto-reply to customer
   - Log submission in Firestore

#### Files to Create/Modify:
- [ ] `src/services/contactService.ts` (form submission logic)
- [ ] `firebase/functions/contact.js` (backend email function)
- [ ] `src/app/pages/ContactPage.tsx` (form UI + validation)
- [ ] Environment config: `.env.local` (Gmail API credentials)

---

### 7.2 Contact Information Integration
**Objective:** Update all contact info on website with verified details

#### Current Contact Details:
```
Business Address:
  Musterstraße 123
  10115 Berlin
  Deutschland

Email:
  degitech.kontakt@gmail.com

Support Response Time:
  Standard Plan: Within 3 hours
  Premium Plan: Priority (within 1 hour)
  Basic Plan: Next business day
```

#### Removal Requirements:
- [ ] **Remove all other email addresses from public pages:**
  - Search entire codebase for `@` symbols
  - Remove any alternative contact emails
  - Keep ONLY: degitech.kontakt@gmail.com

- [ ] **Remove business hours/availability statements:**
  - Delete any "Mon-Fri 9AM-5PM" messaging
  - Remove "closed on weekends" text
  - Replace with: "We respond within 3 hours (Standard+) or next business day (Basic)"

- [ ] **Update Footer & Contact Pages:**
  - Add business address: "Musterstraße 123, 10115 Berlin, Deutschland"
  - Add email contact link (not display as text to prevent scraping)
  - Link format: `<a href="mailto:degitech.kontakt@gmail.com">Contact us</a>`
  - Add embedded Google Maps (optional): Berlin office location

#### Files to Update:
- `src/app/components/Footer.tsx` (add address)
- `src/app/pages/ContactPage.tsx` (verify only degitech.kontakt@gmail.com shown)
- `src/app/components/Header.tsx` (remove any contact info)
- `src/app/components/Differentiators.tsx` (check for emails)

#### Search for Email Cleanup:
```bash
# Find all email addresses in codebase
grep -r "@" src/ --include="*.tsx" --include="*.ts" | grep -v "degitech.kontakt@gmail.com"
```

---

### 7.3 Database Schema for Contact Submissions
**Objective:** Store contact form submissions for CRM & follow-up

#### Firestore Collection: `contact-submissions`
```json
{
  "docId": "auto-generated",
  "timestamp": "2026-05-03T10:30:00Z",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+49 30 12345678",
  "company": "Restaurant XYZ",
  "message": "Interested in Standard Plan",
  "plan_interest": "standard|basic|premium",
  "status": "new|in-progress|contacted|converted",
  "notes": "Follow-up scheduled for May 5",
  "submitted_from_page": "home|pricing|restaurant-management",
  "ip_address": "anonymized-hash",
  "read": false,
  "created_by": "system",
  "updated_at": "2026-05-03T10:35:00Z"
}
```

#### Implementation:
- [ ] Create Firestore collection rules (allow write from client, read by authenticated admins)
- [ ] Add admin dashboard for viewing submissions (future feature)
- [ ] Set up automatic deletion of old records (>90 days, optional)
- [ ] Create backup export functionality (quarterly exports to CSV)

#### Security:
- [ ] Enable CORS for form submissions
- [ ] Implement CSRF tokens to prevent spam
- [ ] Rate limit: Max 5 submissions per IP per hour
- [ ] Validate honeypot field (hidden field for bots)

---

### 7.4 Contact Form Validation & UX
**Objective:** Provide clear feedback and prevent errors

#### Client-Side Validation:
- [ ] Name field: Min 2 chars, no special characters
- [ ] Email field: Valid email format (regex or library)
- [ ] Phone field: Valid format (+49 prefix for Germany)
- [ ] Message field: Min 10 chars, max 1000 chars
- [ ] Real-time feedback: Show validation status
- [ ] Submit button: Disabled until form is valid

#### Error Handling:
- [ ] Network error: "Couldn't send. Please try again or email us directly."
- [ ] Validation error: "Please check the highlighted fields"
- [ ] Success message: "Thank you! We'll contact you within 3 hours."

#### Post-Submission:
- [ ] Show confirmation page or modal
- [ ] Redirect to Thank You page after 3 seconds
- [ ] Display confirmation email sent message
- [ ] Provide `degitech.kontakt@gmail.com` as fallback contact

#### Files to Modify:
- `src/app/pages/ContactPage.tsx` (add validation + UX)
- `src/app/components/ui/` (form components if needed)

---

### 7.5 Email Templates
**Objective:** Professional, branded email communications

#### Template 1: Auto-Reply to Customer
```
Subject: Wir haben Ihre Anfrage erhalten — Degi-Tech

Hallo [Name],

vielen Dank für Ihre Anfrage zur Gastly Restaurant-Management-Lösung!

Wir haben Ihre Nachricht erhalten und werden uns innerhalb von 
3 Stunden bei Ihnen melden.

Ihre eingegangene Anfrage:
  - Plan-Interesse: [plan_interest]
  - Nachricht: [message]
  - Kontakt: [email]

Falls Sie schneller eine Antwort benötigen, können Sie uns 
direkt kontaktieren: degitech.kontakt@gmail.com

Beste Grüße,
Das Degi-Tech Team
```

#### Template 2: Internal Alert for Support Team
```
Subject: ⚡ Neue Kontaktanfrage — [Name] ([plan_interest])

Neue Anfrage eingegangen:
  - Name: [name]
  - Email: [email]
  - Telefon: [phone]
  - Unternehmen: [company]
  - Interessierter Plan: [plan_interest]
  - Nachricht: [message]
  - Eingereicht von: [submitted_from_page]
  - Zeit: [timestamp]

Status: NEW (not yet contacted)
Aktion: Kontaktiere [email] oder [phone]
```

#### Implementation:
- [ ] Create HTML email templates
- [ ] Add company branding (logo, colors)
- [ ] Responsive design for mobile clients
- [ ] Test email rendering in major clients (Gmail, Outlook, Apple Mail)

---

## 📅 Updated Timeline

- **Phase 1 (Content):** 2-3 days
- **Phase 2 (Pricing):** 1 day
- **Phase 3 (Design):** 1-2 days
- **Phase 4 (SEO):** 1 day
- **Phase 5 (Testing):** 2-3 days
- **Phase 6 (Deployment):** 1 day
- **Phase 7 (Contact Form):** 2-3 days (NEW)

**Total Estimate:** 10-13 business days

---

## 👥 Implementation Notes

- **Git Workflow:** All work on `degi-tech-first-draft-with-three-services` branch
- **Code Style:** Follow existing project conventions (TypeScript, Tailwind, React hooks)
- **Testing:** Test each phase before moving to next
- **Communication:** Document changes in commit messages and git history
- **Rollback Plan:** If issues found post-deployment, revert to previous main branch commit
- **Email Security:** Never store passwords in code; use Firebase Cloud Function with authorized Gmail API access
- **Contact Form:** Use client-side validation + server-side validation for security

---

## 📞 Resolved Questions & Clarifications

| Question | Status | Answer |
|----------|--------|--------|
| Telegram Reference | ✅ Resolved | Never mention Telegram — always use "Tagesbericht" (Daily Reports) |
| DNS / STRATO Indexing | ✅ Resolved | DNS typically correct on STRATO. Focus on: Google Search Console + sitemap.xml + indexing request |
| Contact Form Email | ✅ Resolved | Use Firebase Functions + degitech.kontakt@gmail.com; no other emails displayed publicly |
| Setup Fee Flexibility | ❓ Pending | How flexible is 900€? Negotiable per customer? |
| Payment Integration | ❓ Pending | Timeline for payment system integration? |
| Additional Users Cost | ❓ Pending | Actual cost for additional users beyond included tablets? |
| Analytics Tools | ❓ Pending | Google Analytics? Custom dashboard? Which tools? |
| Support Response SLA | ❓ Pending | How to track/enforce 3-hour response time? |

---

## 📝 Version History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | May 3, 2026 | Initial | Roadmap created from `changesplan_may2026.md` |
| 1.1 | May 3, 2026 | Update 1 | Patched gaps: Telegram→Tagesbericht, DNS clarification, color rules |
| 1.2 | May 3, 2026 | Update 2 | **NEW Phase 7:** Contact Form Backend + Email Integration + Database Schema | 