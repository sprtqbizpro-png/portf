# Benjamin Rodriguez — Portfolio

A responsive Next.js portfolio featuring 24 project contributions and eight technical skill groups.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Import the repository at https://vercel.com/new.
3. Keep the detected Next.js defaults and deploy.

## Customize

- `app/page.tsx`: hero copy, about copy, contact link, featured project list, navigation.
- `app/data.ts`: project descriptions, contributions, links, skill categories.
- `app/globals.css`: colors, typography, layout, motion and responsive styles.
- `app/layout.tsx`: browser title and SEO description.

**Before publishing:** Replace `hello@example.com` with your real email in `app/page.tsx`. Add verified professional social links if desired. The project artwork is original abstract typography, not third-party logos or screenshots. The provided project contributions are represented as supplied by the portfolio owner.

## Experience timeline

The Experience section contains four positions (September 2018–present), newest first. Edit the `experience` array in `app/page.tsx` to update dates, descriptions, or tags. No employer names were provided, so none were invented.

## Project website screenshots
Project cards request live screenshots of each product's **public homepage** using the third-party Thum.io screenshot service (`image.thum.io`). This is not an authenticated application dashboard capture. Screenshot availability, loading speed, and appearance depend on the external service and destination site's restrictions. The cards include an automatic fallback if an image fails to load. For stable, accurate previews, replace remote screenshot URLs with screenshots you own in `public/projects/` and update the `ProjectPreview` component in `app/page.tsx`.

Contact email: benjamin.rodriguez@loomneexa.com. The contact button opens the visitor's email client; no server-side email form is configured.

## Project preview visibility

The gallery attempts public screenshots using thum.io. A project card is hidden if its screenshot image reports a load error in the visitor's browser. This does not prove that the destination website is offline; some sites block screenshots or the preview provider may be temporarily unavailable. Preview results have not been independently verified. Browser image `onLoad` is not a guarantee the image is a correct screenshot (the provider could return a placeholder). For strict editorial control, replace external screenshots with reviewed static images under `public/projects/` and curate the list manually.

GitHub: https://github.com/benjaminrodriguez0225
Email: benjamin.rodriguez@loomneexa.com
