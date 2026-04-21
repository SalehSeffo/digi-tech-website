# Browser DevTools SEO Inspection Guide

## Overview
This guide walks you through manually verifying SEO implementation using Chrome DevTools and browser features.

---

## Part 1: Preparing Your Environment

### Step 1.1: Start the Preview Server
```bash
cd /Users/saleh/Desktop/Code/dersalonerlangen\ new
npm run preview
```

Expected output:
```
  ➜  Local:   http://localhost:4173/
  ➜  press h to show help
```

### Step 1.2: Open Chrome DevTools
1. Open the site in Chrome: `http://localhost:4173`
2. Press `F12` or `Cmd+Option+I` (Mac) to open DevTools
3. You'll see the Inspector tab at the bottom

---

## Part 2: Meta Tags Inspection

### Step 2.1: View Page Source
**Goal:** Check that all meta tags are present in the HTML

**Steps:**
1. Right-click on the page → **View Page Source** (or Cmd+U on Mac)
2. Look for these critical tags in the `<head>` section:

**What to look for:**

✅ **Language Tag:**
```html
<html lang="de">
```
- Should show `lang="de"` (German), NOT `lang="en"`

✅ **Character Encoding:**
```html
<meta charset="UTF-8" />
```
- Must be UTF-8 for proper character rendering

✅ **Viewport (Mobile):**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```
- Enables proper mobile rendering

✅ **Base Title:**
```html
<title>Frisör in Erlangen | Damenfriseur & Herrenfriseur | DER SALON</title>
```
- Should contain German keywords
- Under 60 characters for best display

✅ **Base Description:**
```html
<meta name="description" content="Friseursalon in Erlangen mit Spezialisierung auf Damenfrisuren, Herrenschnitte & Balayage. Premium Dienstleistungen mit Master-Stylisten. Jetzt Termin buchen." />
```
- 150-160 characters
- Includes relevant keywords: Friseursalon, Balayage, Termin
- Clear call-to-action

✅ **Robots Meta Tag:**
```html
<meta name="robots" content="index, follow" />
```
- Tells search engines to index this page and follow links

✅ **Canonical Link:**
```html
<link rel="canonical" href="https://dersalonerlangen.de" />
```
- Points to the preferred URL (prevents duplicate content issues)

✅ **Keywords:**
```html
<meta name="keywords" content="Frisör Erlangen, Damenfriseur, Herrenfriseur, Balayage, Haarschnitt, Friseursalon" />
```
- Includes primary and secondary keywords

### Step 2.2: Check Open Graph Tags (Social Sharing)
**Goal:** Verify that social sharing preview will look good

**In Page Source, search for `og:` tags:**

✅ **Open Graph Title:**
```html
<meta property="og:title" content="Frisör in Erlangen | Damenfriseur & Herrenfriseur | DER SALON" />
```

✅ **Open Graph Description:**
```html
<meta property="og:description" content="Friseursalon in Erlangen mit Spezialisierung auf Damenfrisuren..." />
```

✅ **Open Graph Image:**
```html
<meta property="og:image" content="https://dersalonerlangen.de/og-image.jpg" />
```

✅ **Open Graph URL:**
```html
<meta property="og:url" content="https://dersalonerlangen.de/" />
```

✅ **Open Graph Type:**
```html
<meta property="og:type" content="website" />
```

### Step 2.3: Check Twitter Card Tags
**Goal:** Verify Twitter/X sharing preview

**In Page Source, search for `twitter:` tags:**

✅ **Twitter Card Type:**
```html
<meta name="twitter:card" content="summary_large_image" />
```

✅ **Twitter Title & Description:**
```html
<meta name="twitter:title" content="Frisör in Erlangen | Damenfriseur & Herrenfriseur | DER SALON" />
<meta name="twitter:description" content="Friseursalon in Erlangen mit Spezialisierung auf Damenfrisuren..." />
```

---

## Part 3: Page-Specific Meta Tags

### Step 3.1: Verify Different Pages Have Different Meta Tags

**Navigate to each page and check that meta tags change:**

1. **Homepage** (`/`)
   - Cmd+U to view source
   - Title should contain: "Frisör in Erlangen"
   - Description should mention: "Damenfrisuren", "Herrenschnitte", "Balayage"

2. **Services Page** (`/services`)
   - Title should contain: "Dienstleistungen"
   - Description should mention specific services
   - Keywords should include service-specific terms

3. **Gallery Page** (`/gallery`)
   - Title should contain: "Galerie" or "Portfolio"
   - Description should mention: "Vorher-Nachher", "Hairstyles"

4. **About Page** (`/about`)
   - Title should contain: "Über uns"
   - Description should mention: "Team", "Erfahrung", "Master-Stylisten"

5. **Contact Page** (`/contact`)
   - Title should contain: "Kontakt"
   - Description should mention: "Adresse", "Telefon", "Öffnungszeiten"

6. **Booking Page** (`/book`)
   - Title should contain: "Termin" or "Buchen"
   - Description should mention: "Online Buchung", "Reservierung"

**Expected Result:** Each page should have a unique title and description optimized for its content.

---

## Part 4: Schema Markup Inspection

### Step 4.1: Use Structured Data Testing Tool

**Via Console:**

1. Open Chrome DevTools (F12)
2. Click on **Console** tab
3. Paste this code to find schema markup:

```javascript
const scripts = document.querySelectorAll('script[type="application/ld+json"]');
console.log("Found", scripts.length, "schema markup(s)");
scripts.forEach((script, i) => {
  try {
    const data = JSON.parse(script.textContent);
    console.log(`Schema ${i + 1}:`, data);
  } catch(e) {
    console.error(`Schema ${i + 1} parse error:`, e);
  }
});
```

**Expected Output:**
```
Found 1 schema markup(s)
Schema 1: {
  @context: "https://schema.org",
  @type: "LocalBusiness",
  name: "DER SALON Erlangen",
  address: {
    @type: "PostalAddress",
    streetAddress: "Nürnberger str. 59",
    postalCode: "91052",
    addressLocality: "Erlangen",
    addressCountry: "DE"
  },
  telephone: "+49 9131 9741847",
  url: "https://dersalonerlangen.de"
}
```

### Step 4.2: Validate Schema with Google's Tool

1. Go to: https://search.google.com/structured-data/testing-tool
2. Enter your site URL: `https://localhost:4173` (or use preview)
3. Click **Run Test**
4. Look for:
   - ✅ No errors about schema
   - ✅ Recognized "LocalBusiness" type
   - ✅ All required properties present (name, address, telephone)

---

## Part 5: Lighthouse SEO Audit

### Step 5.1: Run Lighthouse Audit

1. In Chrome DevTools, click on **Lighthouse** tab
2. Select **SEO** category (uncheck others)
3. Click **Analyze page load**
4. Wait for results (2-3 minutes)

### Step 5.2: Expected Lighthouse Results

**Score:** Should be 90+ out of 100

**Checkpoints:**
- ✅ Page has a meta description
- ✅ Page has a title element
- ✅ Document doesn't use plugins (Flash, etc.)
- ✅ Tap targets are appropriately sized
- ✅ Viewport is configured
- ✅ Links have descriptive text
- ✅ HTML is valid

**If you see any warnings:**
- Look in the "Recommendations" section
- Most common: meta description too short or too long
- Fix-all recommendations usually resolve the issue

---

## Part 6: Network & Performance

### Step 6.1: Check robots.txt Delivery

1. Click **Network** tab in DevTools
2. Reload page (Cmd+R)
3. In the filter bar, search for: `robots.txt`
4. Should see a 200 response (success)
5. Click on it and view the Response tab

**Expected Content:**
```
User-agent: *
Allow: /
Disallow: /admin/
Sitemap: https://dersalonerlangen.de/sitemap.xml
```

### Step 6.2: Check sitemap.xml Delivery

1. In Network tab, search for: `sitemap.xml`
2. Should see a 200 response
3. Click on it and view the Response tab

**Expected to see:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://dersalonerlangen.de/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- more URLs... -->
</urlset>
```

---

## Part 7: Testing Social Media Previews

### Step 7.1: Facebook Share Preview

1. Go to: https://developers.facebook.com/tools/debug/
2. Enter your site URL: `https://dersalonerlangen.de` (after deploying)
3. Click **Debug**
4. View the "Open Graph section" → **Preview**

**Expected:**
- Title shows: "Frisör in Erlangen | Damenfriseur & Herrenfriseur | DER SALON"
- Description shows your meta description
- Image appears (if og:image is set)

### Step 7.2: Twitter/X Share Preview

1. Go to: https://cards-dev.twitter.com/validator
2. Enter your site URL
3. Click **Load**
4. Check the preview on the right

**Expected:**
- Large image preview (summary_large_image card type)
- Title and description are visible
- No errors about missing tags

### Step 7.3: LinkedIn Preview

1. Open your browser console on your site
2. Paste:
```javascript
fetch('https://www.linkedin.com/voyager/api/commonRecipeDefs(webPage)')
  .then(r => r.json())
  .then(console.log)
```

Or manually:
1. Go to https://www.linkedin.com/feed/
2. Click "Share an article"
3. Paste your URL
4. Preview should show title, description, and image

---

## Part 8: Mobile SEO Check

### Step 8.1: Test Mobile Responsiveness

1. In DevTools, click the **Device Toolbar** icon (Cmd+Shift+M on Mac)
2. Select "iPhone 12 Pro" or your device
3. Reload the page
4. Verify:
   - Text is readable without zooming
   - Tap targets (buttons) are at least 48x48 pixels
   - No horizontal scrolling needed
   - Layout adapts properly

### Step 8.2: Check Mobile Meta Tags

1. Right-click on mobile view → **View Page Source**
2. Verify these mobile-specific tags:

✅ **Viewport Meta Tag:**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

✅ **Apple Status Bar:**
```html
<meta name="apple-mobile-web-app-capable" content="yes" />
```

---

## Part 9: Final Verification Checklist

Use this checklist to verify everything before deploying:

### Meta Tags
- [ ] Language set to `de` (German)
- [ ] Meta description 150-160 characters
- [ ] Title 50-60 characters with keywords
- [ ] Keywords meta tag includes primary terms
- [ ] Robots meta allows indexing: `index, follow`
- [ ] Canonical link points to homepage

### Per-Page
- [ ] Homepage has LocalBusiness schema
- [ ] Each page has unique title and description
- [ ] Services page highlights "Balayage", "Haarschnitt"
- [ ] Contact page includes address and phone
- [ ] All pages have canonical links

### Social Sharing
- [ ] Open Graph tags present (og:title, og:description, og:image, og:url)
- [ ] Twitter Card tags present (twitter:card, twitter:title, twitter:description)
- [ ] Facebook preview shows correct title and description
- [ ] Twitter/X preview shows correct image

### Search Engine Files
- [ ] robots.txt exists and accessible (HTTP 200)
- [ ] sitemap.xml exists and accessible (HTTP 200)
- [ ] Sitemap contains all 9 pages
- [ ] robots.txt references sitemap location

### Performance
- [ ] Lighthouse SEO score is 90+
- [ ] No console errors related to meta tags
- [ ] Mobile viewport is configured
- [ ] Tap targets are properly sized (48x48px min)

### Schema Markup
- [ ] LocalBusiness schema present and valid
- [ ] Organization schema present and valid
- [ ] No schema validation errors in Google's tool
- [ ] Phone number, address, and social links are correct

---

## Part 10: Post-Deployment Verification

After deploying with `bash deploy.sh`:

### Step 10.1: Check Live Site

1. Go to https://dersalonerlangen.de
2. Open DevTools (F12)
3. Run the schema markup console code again
4. All checks should pass on the live site

### Step 10.2: Register with Google Search Console

1. Go to: https://search.google.com/search-console
2. Add your property: https://dersalonerlangen.de
3. Verify ownership (via DNS, HTML file, or Google Analytics)
4. Submit sitemap: https://dersalonerlangen.de/sitemap.xml
5. Wait 5-7 days for Google to crawl and index

### Step 10.3: Monitor Search Console

1. Check **Coverage** report for any indexing errors
2. Check **Enhancements** → **Rich Results** for schema validation
3. Monitor **Performance** tab to see keyword rankings over time

---

## Troubleshooting Common Issues

### Issue: Meta description not showing in Google
**Solutions:**
- Ensure descriptor is 150-160 characters
- Use natural language, not keyword stuffing
- Avoid special characters: & < > "
- Make sure it's unique per page

### Issue: Schema markup shows errors
**Solutions:**
- Validate at https://validator.schema.org
- Check for proper JSON-LD syntax (commas, quotes, etc.)
- Ensure required fields are present
- Check phone number format: +49 XXXX XXXXXX

### Issue: Image not appearing in social preview
**Solutions:**
- Check og:image URL is publicly accessible
- Image should be at least 1200x630 pixels
- Format should be: JPG, PNG, or GIF
- Try clearing Facebook cache: https://developers.facebook.com/tools/debug/

### Issue: Lighthouse SEO score below 90
**Solutions:**
- Check all required meta tags are present
- Ensure mobile viewport is configured
- Verify tap targets are 48x48px or larger
- Check for console errors (F12 → Console)
- Rerun test; may improve after page caches refresh

---

## Part 11: Reusable SEO Implementation Template

This section documents the methodology used to audit and improve the DER SALON Erlangen website, which can be replicated for any React SPA project.

### Overview: 4-Phase Implementation Approach

The SEO implementation consists of 4 distinct phases, each with specific objectives and measurable outcomes. Total effort: **~10 hours** spread over several days.

**Phase Timeline:**
- **Phase 0 (Discovery)**: 1-2 hours → Audit all files affecting SEO
- **Phase 1 (Critical Fixes)**: 2-3 hours → Alt text, heading hierarchy, basic metadata
- **Phase 2 (Important Enhancements)**: 2-3 hours → Schema markup, hreflang tags, multilingual support
- **Phase 3 (Polish & Deployment)**: 1-2 hours → Security headers, deployment, verification
- **Post-Deployment**: 1-2 hours → Search Console setup, monitoring, ranking tracking

---

### Phase 0: SEO Audit & Discovery (1-2 hours)

**Objective:** Identify all SEO gaps before making changes

**Process:**
1. Scan codebase with Explore subagent or manual grep for:
   - `<img>` tags without `alt` attributes
   - Missing meta tags (description, keywords, canonical)
   - Broken heading hierarchy (h1 → h3 skipping h2)
   - Missing JSON-LD schema markup
   - Incomplete hreflang tags for multilingual sites
   - Missing robots.txt or sitemap.xml

2. Review key files:
   - `src/app/lib/seo.ts` → Metadata definitions
   - `vite.config.ts` → Build configuration
   - `public/.htaccess` or `firebase.json` → Server headers
   - `public/robots.txt` → Search engine directives
   - `public/sitemap.xml` → Page inventory
   - All page components in `src/app/components/pages/`

3. Document findings:
   - List all pages missing unique meta descriptions
   - Count images without alt text
   - Note missing schema types
   - Identify broken links

**Files to Check:**
```
src/app/lib/seo.ts              ← Centralized SEO utility
src/app/components/pages/*.tsx  ← Page components with Helmet
public/robots.txt               ← Search engine directives
public/sitemap.xml              ← Page inventory
public/.htaccess (Apache) OR
firebase.json (Firebase)        ← Server configuration
package.json                    ← Dependencies (react-helmet-async, etc.)
```

**Deliverable:** SEO audit report with prioritized gaps

---

### Phase 1: Critical Fixes - Alt Text & Metadata (2-3 hours)

**Objective:** Fix the most visible SEO issues that directly impact accessibility and search results

#### 1.1 Alt Text Implementation

**All images need descriptive alt text.**

Refactor image arrays from simple strings to objects:

```typescript
// BEFORE (❌ Wrong)
const galleryItems = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg"
];

// AFTER (✅ Correct)
const galleryItems = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Professional women's haircut transformation - before and after"
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Elegant balayage highlights at DER SALON Erlangen"
  }
];
```

**Alt Text Best Practices:**
- Specific to the image content, not generic ("image" or "photo")
- Include context: service name, result, or transformation
- 100-125 characters max
- Natural language, not keyword stuffing
- Example: `"Professional women's haircut transformation at DER SALON Erlangen"`

**Files to Update (Priority Order):**
1. Gallery page → Hero carousel images
2. Gallery page → Portfolio grid images
3. Home page → Service highlight images
4. Layout component → Logo alts (header + footer)
5. About page → Team photos
6. Services page → Service category images

#### 1.2 Meta Tags & Titles Verification

Review `src/app/lib/seo.ts` and ensure:
- Every page has unique `<title>` (50-60 characters)
- Every page has unique `<meta name="description">` (150-160 characters)
- All pages include language-specific metadata (de/en/ar if multilingual)
- Canonical URLs are set correctly

**Files to Check:**
- `src/app/lib/seo.ts` → Metadata definitions for each language
- Each page component → Helmet configuration with page-specific title/description

#### 1.3 Heading Hierarchy

Verify no heading jumps (h1 → h3 skipping h2):
```javascript
// In DevTools Console
const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
let lastLevel = 0;
headings.forEach(h => {
  const level = parseInt(h.tagName[1]);
  if (level > lastLevel + 1) console.warn(`Jump from h${lastLevel} to h${level}`);
  lastLevel = level;
});
```

**Expected:** No console warnings about heading jumps

**Deliverable:**
- ✅ All images have descriptive alt text
- ✅ All meta descriptions unique and optimized
- ✅ Heading hierarchy verified
- ✅ Ready to deploy Phase 1

---

### Phase 2: Important Enhancements - Schema & Hreflang (2-3 hours)

**Objective:** Add structured data and multilingual support for search engines

#### 2.1 JSON-LD Schema Markup

Add `<script type="application/ld+json">` to each page component via Helmet:

```typescript
// In page component
<Helmet>
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "DER SALON Erlangen",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Nürnberger str. 59",
        postalCode: "91052",
        addressLocality: "Erlangen",
        addressCountry: "DE"
      },
      telephone: "+49 9131 9741847"
    })}
  </script>
</Helmet>
```

**Schema Types by Page:**
- **Home Page:** `LocalBusiness` + `Organization` + `Breadcrumb`
- **Services Page:** `BreadcrumbList`
- **Gallery Page:** `CollectionPage` + `BreadcrumbList`
- **About Page:** `Organization` + `BreadcrumbList`
- **Contact Page:** `LocalBusiness` + `BreadcrumbList`

**Testing:**
```bash
# In browser console on each page
const scripts = document.querySelectorAll('script[type="application/ld+json"]');
scripts.forEach((s, i) => console.log(`Schema ${i}:`, JSON.parse(s.textContent)));
```

#### 2.2 Hreflang Tags for Multilingual Support

Add hreflang links to every language-accessible page:

```typescript
// In seo.ts
export function getHreflangLinks(currentPath: string) {
  const languages = ['de', 'en', 'ar'];
  const baseUrl = 'https://dersalonerlangen.de';
  
  return languages.map(lang => ({
    rel: 'alternate',
    hrefLang: lang,
    href: `${baseUrl}${lang === 'de' ? '' : '/' + lang}${currentPath}`
  }));
}

// In every page component
<Helmet>
  {getHreflangLinks(currentPath).map((link, i) => (
    <link key={i} rel={link.rel} hrefLang={link.hrefLang} href={link.href} />
  ))}
</Helmet>
```

**Expected Output (home page example):**
```html
<link rel="alternate" hrefLang="de" href="https://dersalonerlangen.de/" />
<link rel="alternate" hrefLang="en" href="https://dersalonerlangen.de/en/" />
<link rel="alternate" hrefLang="ar" href="https://dersalonerlangen.de/ar/" />
<link rel="alternate" hrefLang="x-default" href="https://dersalonerlangen.de/" />
```

**Files to Update:**
- `src/app/lib/seo.ts` → Add `getHreflangLinks()` function
- All page components → Add hreflang in Helmet

**Deliverable:**
- ✅ JSON-LD schema on all main pages
- ✅ Hreflang tags on all pages
- ✅ Schema validation passes Google's tool
- ✅ Ready for Phase 3

---

### Phase 3: Polish & Deployment (1-2 hours)

#### 3.1 Security & Cache Headers

Add to `.htaccess` (Apache) or `firebase.json` (Firebase):

**Apache (.htaccess):**
```apache
<IfModule mod_headers.c>
  # Security Headers
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
  Header set Permissions-Policy "geolocation=(), microphone=(), camera=()"
  
  # Cache Headers
  <FilesMatch "\.(js|css|woff|woff2)$">
    Header set Cache-Control "max-age=31536000, public"
  </FilesMatch>
  <FilesMatch "\.(jpg|jpeg|png|gif|svg)$">
    Header set Cache-Control "max-age=31536000, public"
  </FilesMatch>
  <FilesMatch "\.html$">
    Header set Cache-Control "public, max-age=3600, must-revalidate"
  </FilesMatch>
</IfModule>
```

**⚠️ CRITICAL:** Identify your hosting platform FIRST:
- Apache/STRATO/cPanel → Use `.htaccess`
- Firebase Hosting → Use `firebase.json`
- Vercel → Use `vercel.json`
- Netlify → Use `netlify.toml`

#### 3.2 Deployment Script

Update `deploy.sh` to include cleanup:

```bash
#!/bin/bash
set -e

echo "🔧 Cleaning old builds..."
rm -rf dist/  # ← Add this line

echo "🏗️ Building site..."
npm run build

echo "📦 Verifying artifacts..."
ls -la dist/

echo "🚀 Deploying to STRATO..."
# SFTP upload commands...
```

#### 3.3 Deploy & Verify

```bash
# Deploy
bash deploy.sh

# Verify headers are live (wait 2-3 minutes)
curl -i https://yourdomain.com/ | grep -i "cache-control\|x-content-type"
```

**Expected Output:**
```
cache-control: public, max-age=3600, must-revalidate
x-content-type-options: nosniff
```

**Deliverable:**
- ✅ Security headers deployed
- ✅ Cache headers verified live
- ✅ All pages accessible (HTTP 200)
- ✅ No console errors

---

### Phase 4: Post-Deployment (1-2 hours/ongoing)

#### 4.1 Google Search Console Setup

```bash
# 1. Go to https://search.google.com/search-console
# 2. Add property: https://yourdomain.com
# 3. Verify ownership (DNS, HTML file, or Google Analytics)
# 4. Submit sitemap: https://yourdomain.com/sitemap.xml
# 5. Wait 5-7 days for crawl
```

#### 4.2 Lighthouse Verification

```bash
# Run on live site
# Open DevTools (F12) → Lighthouse → SEO
# Target score: 95+
```

#### 4.3 Rich Results Testing

```bash
# Go to https://search.google.com/test/rich-results
# Test each page URL
# Verify LocalBusiness and Breadcrumb schemas
```

#### 4.4 Monitoring

```bash
# Check every 7 days
# Google Search Console → Coverage (indexing status)
# Google Search Console → Performance (keyword rankings)
# Expected: 24-72 hours for first snippet updates
# Expected: 30-60 days for ranking improvements
```

---

### Common Pitfalls & Solutions

| Problem | Cause | Solution |
|---------|-------|----------|
| `curl` doesn't show meta tags | React SPA renders client-side | Use browser DevTools, not curl. Schema/hreflang are client-side via Helmet |
| Headers not live after deploy | Server still serving old .htaccess | Clear CloudFlare cache, wait 5 min, or ask hosting support |
| Alt text not appearing | Not using `<img>` tag (CSS background) | Refactor images to HTML img elements |
| Hreflang shows 404 errors | Language routes don't exist | Verify all lang paths exist in router (de/, en/, ar/) |
| Schema shows validation errors | Missing required fields | Check JSON syntax, add `name`, `address`, `telephone` fields |
| Google doesn't crawl new pages | Not in sitemap or robots.txt | Update `public/sitemap.xml` and ensure `public/robots.txt` allows pages |

---

### Template Checklist (Copy for Future Projects)

Use this checklist when applying this methodology to a new project:

**Phase 0: Discovery**
- [ ] Scan for images without alt text
- [ ] List pages missing meta descriptions
- [ ] Check heading hierarchy
- [ ] Note missing schema markup
- [ ] Verify hreflang coverage

**Phase 1: Critical Fixes**
- [ ] Add alt text to all images (gallery, hero, logos)
- [ ] Verify unique meta title & description per page
- [ ] Fix heading jumps (h1 → h2 → h3)
- [ ] Deploy Phase 1

**Phase 2: Enhancements**
- [ ] Add JSON-LD schema (LocalBusiness, Organization, Breadcrumb)
- [ ] Implement hreflang tags for multilingual pages
- [ ] Test schema validation (Google's tool)
- [ ] Deploy Phase 2

**Phase 3: Polish**
- [ ] Add security headers to `.htaccess` (or platform equivalent)
- [ ] Verify cache headers in place
- [ ] Update `deploy.sh` with dist/ cleanup
- [ ] Deploy Phase 3 & verify live with curl

**Phase 4: Post-Deployment**
- [ ] Setup Google Search Console
- [ ] Submit sitemap
- [ ] Run Lighthouse audit
- [ ] Test Rich Results schema validation
- [ ] Monitor Search Console weekly

---

## Next Steps

1. ✅ Run all these manual checks against `localhost:4173`
2. ✅ Verify all checkboxes in Part 9 are checked
3. ✅ Deploy with `bash deploy.sh`
4. ✅ Rerun all checks on live site after 2-3 hours
5. ✅ Submit to Google Search Console
6. ✅ Monitor Search Console for crawl results

**Expected Results:**
- Within 7 days: Google crawls and indexes all pages
- Within 30 days: Keywords begin appearing in search results
- Within 60 days: SEO score improves from 7% to 35-50%
