# Seomyn website-fix test site (disposable)

A minimal Next.js App Router site for one supervised Seomyn website-fix test. Juniper Lane Bakery is fictional;
there is no real customer information here.

- Repair target: the homepage, `app/page.tsx`. Its `export const metadata` has a title and no description, and the
  root layout sets no description, so the published page has no meta description.
- Publishing: `.github/workflows/pages.yml` builds a static export and publishes it to GitHub Pages after every
  merge to `main`. `.github/workflows/ci.yml` builds each pull request.
- Delete this repository after the test.
