<script lang="ts">
	import NavBar from '$lib/components/NavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Indus Research | Self-improving LLMs</title>
	<meta
		name="description"
		content="Indus Research builds self-improving LLMs that match frontier model performance at a fraction of the cost."
	/>
</svelte:head>

<div class="app-shell">
	<NavBar />
	<main>
		{@render children()}
	</main>
	<Footer />
</div>

<style>
	:global(:root) {
		--bg: #1a1a1a;
		--surface: #242424;
		--surface-soft: #2e2e2e;
		--text: #ffffeb;
		--muted: #b8b8a8;
		--line: #3a3a3a;
		--accent: #4AD4FF;
		--accent-soft: #85e2ff;
		--max-width: 1120px;
	}

	:global(*) {
		box-sizing: border-box;
	}

	:global(html),
	:global(body) {
		margin: 0;
		padding: 0;
		background: radial-gradient(circle at 0% -20%, var(--surface) 0%, var(--bg) 45%), var(--bg);
		color: var(--text);
		font-family: 'JetBrains Mono', monospace;
		min-height: 100%;
	}

	:global(body) {
		line-height: 1.55;
		letter-spacing: 0.01em;
	}

	:global(a) {
		color: inherit;
		text-decoration: none;
	}

	:global(.container) {
		max-width: var(--max-width);
		margin: 0 auto;
		padding: 0 1.2rem;
	}

	:global(.section) {
		padding: 5rem 0;
	}

	:global(.eyebrow) {
		font-size: 0.78rem;
		text-transform: uppercase;
		letter-spacing: 0.14em;
		color: var(--accent);
	}

	:global(.headline) {
		font-size: clamp(1.8rem, 3.5vw, 3.8rem);
		line-height: 1.15;
		margin: 0.8rem 0;
		max-width: 25ch;
	}

	:global(.lede) {
		color: var(--muted);
		max-width: 70ch;
		font-size: clamp(1rem, 1.2vw, 1.1rem);
	}

	:global(.chip) {
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		padding: 0.4rem 0.75rem;
		border-radius: 999px;
		border: 1px solid var(--line);
		background: rgba(255, 255, 255, 0.02);
		font-size: 0.78rem;
	}

	:global(.btn) {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.8rem 1.1rem;
		border-radius: 999px;
		font-weight: 600;
		border: 1px solid transparent;
		transition: transform 180ms ease, background 180ms ease, border-color 180ms ease;
	}

	:global(.btn.primary) {
		background: var(--accent);
		color: #101010;
	}

	:global(.btn.secondary) {
		border-color: var(--line);
		background: transparent;
		color: var(--text);
	}

	:global(.btn:hover) {
		transform: translateY(-1px);
	}

	:global(.grid) {
		display: grid;
		gap: 1rem;
	}

	:global(.fade-up) {
		opacity: 0;
		transform: translateY(10px);
		animation: fade-up 640ms ease forwards;
	}

	:global(.fade-up.delay-1) {
		animation-delay: 120ms;
	}

	:global(.fade-up.delay-2) {
		animation-delay: 220ms;
	}

	@keyframes fade-up {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		:global(.fade-up) {
			opacity: 1;
			transform: none;
			animation: none;
		}

		:global(.btn) {
			transition: none;
		}
	}

	.app-shell {
		min-height: 100dvh;
		display: grid;
		grid-template-rows: auto 1fr auto;
	}

	main {
		padding-top: 0.5rem;
	}
</style>
