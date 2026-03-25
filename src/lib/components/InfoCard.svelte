<script lang="ts">
	let { title, stat, description, delay = '' } = $props<{
		title: string;
		stat: string;
		description: string;
		delay?: string;
	}>();
</script>

<article class={`card fade-up ${delay}`}>
	<div class="top-line"></div>
	<p class="stat">{stat}</p>
	<h3>{title}</h3>
	<p>{description}</p>
</article>

<style>
	.card {
		padding: 1.2rem;
		border: 1px solid var(--line);
		background: linear-gradient(160deg, var(--surface-soft), var(--surface));
		border-radius: 0.9rem;
	}

	.top-line {
		height: 2px;
		background: linear-gradient(90deg, transparent, var(--accent), transparent);
		margin-bottom: 1rem;
		animation: pulse 2.1s infinite;
	}

	.stat {
		font-size: 1.6rem;
		font-weight: 700;
		margin: 0;
		color: var(--accent-soft);
	}

	h3 {
		margin: 0.5rem 0;
		font-size: 1rem;
	}

	p {
		margin: 0;
		color: var(--muted);
		font-size: 0.92rem;
	}

	@keyframes pulse {
		0%,
		100% {
			opacity: 0.4;
		}

		50% {
			opacity: 1;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.top-line {
			animation: none;
		}
	}
</style>
