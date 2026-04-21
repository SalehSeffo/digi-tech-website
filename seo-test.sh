#!/bin/bash

# SEO Testing Script for DER SALON Erlangen
# Usage: bash seo-test.sh

set -e  # Exit on error

echo "🔍 SEO TESTING SCRIPT"
echo "===================="
echo ""

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

ERRORS=0
WARNINGS=0

# Helper functions
pass() {
  echo -e "${GREEN}✅ PASS${NC}: $1"
}

fail() {
  echo -e "${RED}❌ FAIL${NC}: $1"
  ERRORS=$((ERRORS + 1))
}

warn() {
  echo -e "${YELLOW}⚠️  WARN${NC}: $1"
  WARNINGS=$((WARNINGS + 1))
}

# Test 1: Check if dist folder exists
echo "TEST 1: Build Output"
echo "-------------------"
if [ -d "dist" ]; then
  pass "dist/ folder exists"
else
  fail "dist/ folder not found - run 'npm run build' first"
  exit 1
fi

if [ -f "dist/index.html" ]; then
  pass "dist/index.html exists"
else
  fail "dist/index.html not found"
fi

# Test 2: Check robots.txt and sitemap
echo ""
echo "TEST 2: Search Engine Files"
echo "----------------------------"
if [ -f "dist/robots.txt" ]; then
  pass "robots.txt exists in dist/"
  if grep -q "Sitemap: https://dersalonerlangen.de/sitemap.xml" "dist/robots.txt"; then
    pass "Sitemap URL correctly configured in robots.txt"
  else
    fail "Sitemap URL not found in robots.txt"
  fi
else
  fail "robots.txt not found in dist/"
fi

if [ -f "dist/sitemap.xml" ]; then
  pass "sitemap.xml exists in dist/"
  if grep -q "<loc>https://dersalonerlangen.de/</loc>" "dist/sitemap.xml"; then
    pass "sitemap.xml contains homepage URL"
  else
    fail "sitemap.xml homepage URL not found"
  fi
else
  fail "sitemap.xml not found in dist/"
fi

# Test 3: Check HTML structure
echo ""
echo "TEST 3: HTML Meta Tags"
echo "----------------------"

# Check language tag
if grep -q 'lang="de"' "dist/index.html"; then
  pass "Language tag set to German (de)"
else
  fail "Language tag not set to 'de'"
fi

# Check meta charset
if grep -q 'charset="UTF-8"' "dist/index.html"; then
  pass "Charset UTF-8 declared"
else
  fail "Charset not properly declared"
fi

# Check viewport
if grep -q 'viewport' "dist/index.html"; then
  pass "Viewport meta tag present"
else
  fail "Viewport meta tag missing"
fi

# Check base description
if grep -q 'meta name="description"' "dist/index.html"; then
  pass "Base meta description present"
else
  fail "Base meta description missing"
fi

# Check robots meta
if grep -q 'meta name="robots"' "dist/index.html"; then
  pass "Robots meta tag present"
else
  fail "Robots meta tag missing"
fi

# Check canonical link
if grep -q 'rel="canonical"' "dist/index.html"; then
  pass "Canonical link present"
else
  warn "Canonical link not found in base HTML (should be added per-page)"
fi

# Test 4: Check page titles and keywords
echo ""
echo "TEST 4: SEO Keywords in seo.ts"
echo "-------------------------------"

SEO_FILE="src/app/lib/seo.ts"

if [ ! -f "$SEO_FILE" ]; then
  fail "seo.ts file not found at $SEO_FILE"
  exit 1
fi

# Check German keywords
if grep -q "Frisör in Erlangen" "$SEO_FILE"; then
  pass "Primary German keyword 'Frisör in Erlangen' found"
else
  fail "Primary German keyword missing"
fi

if grep -q "Damenfriseur" "$SEO_FILE"; then
  pass "German keyword 'Damenfriseur' found"
else
  fail "German keyword 'Damenfriseur' missing"
fi

if grep -q "Herrenfriseur" "$SEO_FILE"; then
  pass "German keyword 'Herrenfriseur' found"
else
  fail "German keyword 'Herrenfriseur' missing"
fi

# Check English keywords
if grep -q "Hair Salon in Erlangen" "$SEO_FILE"; then
  pass "English metadata section found"
else
  warn "English metadata (pageMetadataEN) not found - multilingual support may be incomplete"
fi

# Check Arabic keywords
if grep -q "صالون حلاقة في إرلانغن" "$SEO_FILE"; then
  pass "Arabic metadata section found"
else
  warn "Arabic metadata (pageMetadataAR) not found - multilingual support may be incomplete"
fi

# Test 5: Check contact information
echo ""
echo "TEST 5: Business Information"
echo "----------------------------"

if grep -q "Nürnberger str. 59" "$SEO_FILE"; then
  pass "Address found in seo.ts"
else
  fail "Address not found in seo.ts"
fi

if grep -q "9131 9741847" "$SEO_FILE"; then
  pass "Phone number found in seo.ts"
else
  fail "Phone number not found in seo.ts"
fi

if grep -q "09:00" "$SEO_FILE"; then
  pass "Business hours found"
else
  fail "Business hours not found"
fi

if grep -q "18:30" "$SEO_FILE" && grep -q "18:00" "$SEO_FILE"; then
  pass "Correct closing times (18:30 Mon-Fri, 18:00 Sat)"
else
  fail "Incorrect closing times"
fi

# Test 6: Check social media links
echo ""
echo "TEST 6: Social Media Integration"
echo "--------------------------------"

if grep -q "instagram.com/der_salonerlangen" "$SEO_FILE"; then
  pass "Instagram link configured"
else
  fail "Instagram link missing"
fi

if grep -q "facebook.com/der_salonerlangen" "$SEO_FILE"; then
  pass "Facebook link configured"
else
  fail "Facebook link missing"
fi

if grep -q "tiktok.com/@dersalonerlangen" "$SEO_FILE"; then
  pass "TikTok link configured"
else
  fail "TikTok link missing"
fi

# Test 7: Check page-specific metadata
echo ""
echo "TEST 7: Per-Page Metadata"
echo "-------------------------"

PAGES=("home" "services" "gallery" "about" "contact" "booking")
missing_pages=0

for page in "${PAGES[@]}"; do
  if grep -q "${page}:" "$SEO_FILE"; then
    pass "Metadata for '$page' page found"
  else
    fail "Metadata for '$page' page missing"
    missing_pages=$((missing_pages + 1))
  fi
done

# Test 8: Check for Helmet imports
echo ""
echo "TEST 8: React Helmet Implementation"
echo "-----------------------------------"

HELMET_FILES=$(grep -r "import.*Helmet.*from.*react-helmet-async" src/app/components/pages/ 2>/dev/null | wc -l || echo "0")

if [ "$HELMET_FILES" -gt 0 ]; then
  pass "Helmet imported in $HELMET_FILES page(s)"
  if [ "$HELMET_FILES" -ge 8 ]; then
    pass "All major page components have Helmet"
  else
    warn "Only $HELMET_FILES pages have Helmet (expected 8+)"
  fi
else
  fail "No Helmet imports found in page components"
fi

# Test 9: Schema markup
echo ""
echo "TEST 9: Schema Markup (JSON-LD)"
echo "-------------------------------"

if grep -q '"@type": "LocalBusiness"' "$SEO_FILE"; then
  pass "LocalBusiness schema markup found"
else
  fail "LocalBusiness schema missing"
fi

if grep -q '"@type": "Organization"' "$SEO_FILE"; then
  pass "Organization schema markup found"
else
  fail "Organization schema missing"
fi

if grep -q '"@type": "Service"' "$SEO_FILE"; then
  pass "Service schema markup found"
else
  warn "Service schema not found (optional)"
fi

# Test 10: File sizes
echo ""
echo "TEST 10: Build Optimization"
echo "----------------------------"

if [ -f "dist/assets/index-CQSQ_wkA.js" ] || [ -f "dist/assets/index-"*.js ]; then
  JS_SIZE=$(du -sh dist/assets/*.js 2>/dev/null | awk '{print $1}' || echo "unknown")
  echo "JavaScript bundle size: $JS_SIZE"
  pass "JavaScript bundles created"
else
  warn "JavaScript bundles not found"
fi

if [ -f "dist/assets/index-"*.css ]; then
  CSS_SIZE=$(du -sh dist/assets/*.css 2>/dev/null | awk '{print $1}' || echo "unknown")
  echo "CSS bundle size: $CSS_SIZE"
  pass "CSS bundles created"
else
  warn "CSS bundles not found"
fi

# Summary
echo ""
echo "===================="
echo "TEST SUMMARY"
echo "===================="
echo -e "Total Errors: ${RED}$ERRORS${NC}"
echo -e "Total Warnings: ${YELLOW}$WARNINGS${NC}"

if [ $ERRORS -eq 0 ]; then
  echo ""
  echo -e "${GREEN}✅ ALL TESTS PASSED!${NC}"
  echo ""
  echo "Next steps:"
  echo "1. Run: npm run preview"
  echo "2. Open: http://localhost:4173"
  echo "3. Inspect pages in DevTools"
  echo "4. Deploy with: bash deploy.sh"
  exit 0
else
  echo ""
  echo -e "${RED}❌ SOME TESTS FAILED!${NC}"
  echo "Please fix the errors above before deploying."
  exit 1
fi
