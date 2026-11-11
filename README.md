# tarunjoseph_portfolio

Source for my personal site: https://tarunbjoseph.github.io/tarunjoseph_portfolio/

Built with [Astro](https://astro.build) and Tailwind CSS, deployed to GitHub Pages by the workflow in `.github/workflows/deploy.yml`.

## Editing

All the text lives in `src/data/site.ts`. Projects, experience, education and certifications are plain lists there, so updating the site rarely needs a change to any component.

- Project screenshots: `public/assets/shots/`
- Resume and CV PDFs: `public/assets/resumes/`

## Running locally

```bash
npm install
npm run dev      # http://localhost:4321/tarunjoseph_portfolio/
npm run build    # static output in dist/
```
