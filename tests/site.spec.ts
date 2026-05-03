import { test, expect, Page } from '@playwright/test';

// ─── helpers ──────────────────────────────────────────────────────────────────

async function acceptCookies(page: Page) {
  const banner = page.locator('text=Alle akzeptieren').or(page.locator('text=Accept All'));
  if (await banner.isVisible({ timeout: 3000 }).catch(() => false)) {
    await banner.first().click();
  }
}

async function clearCookieConsent(page: Page) {
  await page.context().clearCookies();
}

const BANNED_STRINGS = [
  'Telegram',
  'Inventarverwaltung',
  'Inventory Management',
  'Mobile App für iOS',
  'Mobile app for iOS',
  'Integration mit Zahlungssystemen',
  'Payment system integration',
  'Personalplanung',
  'Staff planning and time',
  '14 Tage',
  '14 days free',
  '5-10€',
  'App Store',
  'Google Play',
  'Geschäftszeiten',
  'Business Hours',
  'Musterstraße',
  'degitech.kontakt@gmail.com',
  'E8762C',
];

const ORANGE = '#e8762c';

// ─── COLORS ───────────────────────────────────────────────────────────────────

test.describe('Colors — no orange anywhere', () => {
  const pages = ['/', '/pricing', '/contact', '/restaurant-management'];

  for (const route of pages) {
    test(`${route} — no orange buttons`, async ({ page }) => {
      await page.goto(route);
      await acceptCookies(page);
      const orange = page.locator(`[style*="${ORANGE}"], [class*="E8762C"], [class*="d46620"]`);
      await expect(orange).toHaveCount(0);
    });
  }
});

// ─── BANNED CONTENT ───────────────────────────────────────────────────────────

test.describe('Banned content — must not appear anywhere', () => {
  const routes = ['/', '/pricing', '/contact', '/restaurant-management'];

  for (const route of routes) {
    for (const banned of BANNED_STRINGS) {
      test(`${route} — no "${banned}"`, async ({ page }) => {
        await page.goto(route);
        await acceptCookies(page);
        const content = await page.locator('body').innerText();
        expect(content).not.toContain(banned);
      });
    }
  }
});

// ─── NAVIGATION ───────────────────────────────────────────────────────────────

test.describe('Navigation', () => {
  test('Logo navigates to homepage', async ({ page }) => {
    await page.goto('/pricing');
    await acceptCookies(page);
    await page.locator('a[href="/"]').first().click();
    await expect(page).toHaveURL('/');
  });

  test('Header "Restaurantmanagement" link works', async ({ page }) => {
    await page.goto('/');
    await acceptCookies(page);
    await page.locator('a[href="/restaurant-management"]').first().click();
    await expect(page).toHaveURL('/restaurant-management');
  });

  test('Header "Preise" link works', async ({ page }) => {
    await page.goto('/');
    await acceptCookies(page);
    await page.locator('a[href="/pricing"]').first().click();
    await expect(page).toHaveURL('/pricing');
  });

  test('No dead links to /restaurant-marketing or /restaurant-website', async ({ page }) => {
    await page.goto('/');
    await acceptCookies(page);
    const deadLinks = page.locator('a[href="/restaurant-marketing"], a[href="/restaurant-website"]');
    await expect(deadLinks).toHaveCount(0);
  });

  test('Footer legal links work — Impressum', async ({ page }) => {
    await page.goto('/');
    await acceptCookies(page);
    await page.locator('a[href="/impressum"]').click();
    await expect(page).toHaveURL('/impressum');
    await expect(page.locator('h1')).toContainText('Impressum');
  });

  test('Footer legal links work — Datenschutz', async ({ page }) => {
    await page.goto('/');
    await acceptCookies(page);
    await page.locator('a[href="/datenschutz"]').click();
    await expect(page).toHaveURL('/datenschutz');
    await expect(page.locator('h1')).toContainText('Datenschutz');
  });

  test('Footer legal links work — AGB', async ({ page }) => {
    await page.goto('/');
    await acceptCookies(page);
    await page.locator('a[href="/agb"]').click();
    await expect(page).toHaveURL('/agb');
    await expect(page.locator('h1')).toContainText('AGB');
  });
});

// ─── CTA BUTTONS ──────────────────────────────────────────────────────────────

test.describe('CTA buttons route to /contact', () => {
  test('Homepage hero "Kostenlos testen" → /contact', async ({ page }) => {
    await page.goto('/');
    await acceptCookies(page);
    await page.locator('a[href="/contact"]').first().click();
    await expect(page).toHaveURL('/contact');
  });

  test('Pricing page card buttons → /contact', async ({ page }) => {
    await page.goto('/pricing');
    await acceptCookies(page);
    const ctaLinks = page.locator('a[href="/contact"]');
    await expect(ctaLinks).not.toHaveCount(0);
    await ctaLinks.first().click();
    await expect(page).toHaveURL('/contact');
  });

  test('RestaurantManagement page CTA → /contact', async ({ page }) => {
    await page.goto('/restaurant-management');
    await acceptCookies(page);
    await page.locator('a[href="/contact"]').first().click();
    await expect(page).toHaveURL('/contact');
  });

  test('Footer "Beraten Lassen" → /contact', async ({ page }) => {
    await page.goto('/');
    await acceptCookies(page);
    const footerCta = page.locator('footer a[href="/contact"]').first();
    await footerCta.scrollIntoViewIfNeeded();
    await expect(footerCta).toBeVisible();
  });

  test('No unrouted plain <button> CTAs with "Beraten" text', async ({ page }) => {
    const routes = ['/', '/pricing', '/contact', '/restaurant-management'];
    for (const route of routes) {
      await page.goto(route);
      await acceptCookies(page);
      const unrouted = page.locator('button').filter({ hasText: /Beraten Lassen|Get Consultation/i });
      await expect(unrouted).toHaveCount(0, { message: `Found unrouted CTA button on ${route}` });
    }
  });
});

// ─── COOKIE BANNER ────────────────────────────────────────────────────────────

test.describe('Cookie banner', () => {
  test('Banner appears on first visit', async ({ page }) => {
    await clearCookieConsent(page);
    await page.goto('/');
    await expect(page.locator('text=Wir verwenden Cookies').or(page.locator('text=We use Cookies'))).toBeVisible({ timeout: 5000 });
  });

  test('Banner has no X close button', async ({ page }) => {
    await clearCookieConsent(page);
    await page.goto('/');
    // There should be no aria-label="Close" or similar dismiss button
    const closeBtn = page.locator('button[aria-label="Close"]');
    await expect(closeBtn).toHaveCount(0);
  });

  test('Overlay click does NOT dismiss banner', async ({ page }) => {
    await clearCookieConsent(page);
    await page.goto('/');
    await page.locator('.fixed.inset-0').first().click({ force: true });
    await expect(page.locator('text=Wir verwenden Cookies').or(page.locator('text=We use Cookies'))).toBeVisible();
  });

  test('"Alle akzeptieren" dismisses banner', async ({ page }) => {
    await clearCookieConsent(page);
    await page.goto('/');
    await page.locator('text=Alle akzeptieren').click();
    await expect(page.locator('text=Wir verwenden Cookies')).not.toBeVisible({ timeout: 3000 });
  });

  test('Banner does not reappear after accepting', async ({ page }) => {
    await clearCookieConsent(page);
    await page.goto('/');
    await page.locator('text=Alle akzeptieren').click();
    await page.reload();
    const banner = page.locator('text=Wir verwenden Cookies');
    await expect(banner).not.toBeVisible({ timeout: 3000 });
  });

  test('"Einstellungen" opens detail view with toggles', async ({ page }) => {
    await clearCookieConsent(page);
    await page.goto('/');
    await page.locator('text=Einstellungen').click();
    await expect(page.locator('text=Analyse-Cookies').or(page.locator('text=Analytics Cookies'))).toBeVisible();
  });
});

// ─── CONTACT FORM ─────────────────────────────────────────────────────────────

test.describe('Contact form', () => {
  test('Form fields are present', async ({ page }) => {
    await page.goto('/contact');
    await acceptCookies(page);
    await expect(page.locator('input[type="text"]')).toBeVisible();
    await expect(page.locator('input[type="email"]')).toBeVisible();
    await expect(page.locator('textarea')).toBeVisible();
  });

  test('Form validates required fields — cannot submit empty', async ({ page }) => {
    await page.goto('/contact');
    await acceptCookies(page);
    await page.locator('button[type="submit"]').click();
    // Should still be on contact page (not submitted)
    await expect(page).toHaveURL('/contact');
  });

  test('Form submits and shows success state', async ({ page }) => {
    await page.goto('/contact');
    await acceptCookies(page);
    await page.locator('input[type="text"]').fill('Test Restaurant');
    await page.locator('input[type="email"]').fill('test@example.com');
    await page.locator('textarea').fill('Ich habe Fragen zu Gastly.');
    await page.locator('button[type="submit"]').click();
    await expect(page.locator('text=Anfrage gesendet').or(page.locator('text=Request Sent'))).toBeVisible({ timeout: 5000 });
  });

  test('No email address visible on contact page', async ({ page }) => {
    await page.goto('/contact');
    await acceptCookies(page);
    const content = await page.locator('body').innerText();
    expect(content).not.toContain('@');
  });

  test('No address or phone visible on contact page', async ({ page }) => {
    await page.goto('/contact');
    await acceptCookies(page);
    const content = await page.locator('body').innerText();
    expect(content).not.toContain('Musterstraße');
    expect(content).not.toContain('1234 5678');
  });
});

// ─── PRICING PAGE ─────────────────────────────────────────────────────────────

test.describe('Pricing page content', () => {
  test('Shows correct prices 49 / 95 / 130', async ({ page }) => {
    await page.goto('/pricing');
    await acceptCookies(page);
    const body = await page.locator('body').innerText();
    expect(body).toContain('49');
    expect(body).toContain('95');
    expect(body).toContain('130');
  });

  test('Shows 3 Wochen trial (not 14 Tage)', async ({ page }) => {
    await page.goto('/pricing');
    await acceptCookies(page);
    const body = await page.locator('body').innerText();
    expect(body).toContain('3 Wochen');
    expect(body).not.toContain('14 Tage');
  });

  test('Shows setup fee 900€', async ({ page }) => {
    await page.goto('/pricing');
    await acceptCookies(page);
    await expect(page.locator('text=900€').first()).toBeVisible();
  });

  test('BESTSELLER badge present on Standard plan', async ({ page }) => {
    await page.goto('/pricing');
    await acceptCookies(page);
    const body = await page.locator('body').innerText();
    expect(body).toContain('BESTSELLER');
  });

  test('FAQ accordion opens on click', async ({ page }) => {
    await page.goto('/pricing');
    await acceptCookies(page);
    const firstFaq = page.locator('details').first();
    await firstFaq.click();
    await expect(firstFaq).toHaveAttribute('open');
  });
});

// ─── FOOTER ───────────────────────────────────────────────────────────────────

test.describe('Footer', () => {
  test('Shows "Made with ❤️ in Bavaria"', async ({ page }) => {
    await page.goto('/');
    await acceptCookies(page);
    await expect(page.locator('text=Bavaria')).toBeVisible();
  });

  test('No App Store or Google Play buttons', async ({ page }) => {
    await page.goto('/');
    await acceptCookies(page);
    const body = await page.locator('body').innerText();
    expect(body).not.toContain('App Store');
    expect(body).not.toContain('Google Play');
  });

  test('No address or phone in footer', async ({ page }) => {
    await page.goto('/');
    await acceptCookies(page);
    const footer = await page.locator('footer').innerText();
    expect(footer).not.toContain('Musterstraße');
    expect(footer).not.toContain('1234 5678');
    expect(footer).not.toContain('@');
  });
});

// ─── LEGAL PAGES ──────────────────────────────────────────────────────────────

test.describe('Legal pages load correctly', () => {
  test('/impressum loads', async ({ page }) => {
    await page.goto('/impressum');
    await acceptCookies(page);
    await expect(page.locator('h1')).toContainText('Impressum');
  });

  test('/datenschutz loads', async ({ page }) => {
    await page.goto('/datenschutz');
    await acceptCookies(page);
    await expect(page.locator('h1')).toContainText('Datenschutz');
  });

  test('/agb loads', async ({ page }) => {
    await page.goto('/agb');
    await acceptCookies(page);
    await expect(page.locator('h1')).toContainText('AGB');
  });
});

// ─── GASTLY BRANDING ──────────────────────────────────────────────────────────

test.describe('Gastly branding visible', () => {
  const routes = ['/', '/restaurant-management', '/pricing'];
  for (const route of routes) {
    test(`${route} mentions Gastly`, async ({ page }) => {
      await page.goto(route);
      await acceptCookies(page);
      const body = await page.locator('body').innerText();
      expect(body).toContain('Gastly');
    });
  }
});
