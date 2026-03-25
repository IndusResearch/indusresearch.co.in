# sv

Basic information to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

```sh
# create a new project
npx sv create my-app
```

To recreate this project with the same configuration:

```sh
# recreate this project
npx sv@0.13.0 create --template minimal --types ts --install npm .
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Add New Page

1. Create folder and route file:
- `src/routes/<slug>/+page.svelte`

2. Add minimal starter content:
```svelte
<section class="section">
	<div class="container">
		<p class="eyebrow">New Page</p>
		<h1 class="headline">Your heading</h1>
		<p class="lede">Your short message.</p>
	</div>
</section>
```

3. Add to navigation:
- Update `navLinks` in `src/lib/content/site.ts`

4. Test quickly:
- Run `npm run dev -- --open`
- Visit `/<slug>`


# Quick Commands

## Daily use
- `npm install` - install dependencies
- `npm run dev -- --open` - run local dev server
- `npm run build` - production build
- `npm run preview` - preview production build
- `npm run check` - type and Svelte checks

# Development Rules

## License safety
- Use only free commercial-safe assets (SVG preferred)
- Save source link and license note when adding a new external asset

## Performance limits
- Keep hero visual payload under ~120KB total
- Avoid heavy JS animation libraries unless needed
- Prefer CSS/SVG motion first

## Motion and accessibility
- Respect `prefers-reduced-motion`
- Keep continuous animations subtle
- Do not rely on motion alone to convey core meaning

## Contact and links
- Keep `mailto` message template updated in `src/lib/content/site.ts`
- Replace placeholder community links when accounts are finalized

## Edit Map

### Change navigation links
- Edit `src/lib/content/site.ts`
- `navLinks` controls top nav and footer nav

### Change logo text/mark
- Edit `src/lib/components/LogoMark.svelte`

### Change brand colors and spacing
- Edit `src/routes/+layout.svelte`
- Root tokens are in `:global(:root)`


