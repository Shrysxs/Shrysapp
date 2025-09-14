This is Shrysapp — a premium personal portfolio skeleton built with [Next.js](https://nextjs.org) App Router, TypeScript, and Tailwind CSS.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Key paths (App Router with `src/` directory):

- Global layout: `src/app/layout.tsx`
- Global styles: `src/app/globals.css`
- Homepage: `src/app/page.tsx` (route: `/`)
- About: `src/app/about/page.tsx` (route: `/about`)
- Projects: `src/app/projects/page.tsx` (route: `/projects`)
- Blog index: `src/app/blog/page.tsx` (route: `/blog`)

Components:

- Navbar: `src/components/Navbar.tsx`
- Footer: `src/components/Footer.tsx`

Tailwind CSS is enabled via PostCSS plugin. You can add utilities/styles in `src/app/globals.css`.

## Notes for future Blog (MDX)

- Structure is prepared for MDX-based posts. Consider using `@next/mdx` or `next-mdx-remote` later.
- Suggested content location: `src/content/blog` or a nested route segment under `src/app/blog/`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
