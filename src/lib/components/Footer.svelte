<script lang="ts">
	import { communityLinks, meetingMailto, navLinks } from '$lib/content/site';
</script>

<footer class="footer section">
	<div class="container footer-grid">
		<div>
			<p class="eyebrow">Indus Research</p>
			<p class="foot-line">Optimizing performance per dollar for the AI world.</p>
			<a class="btn secondary" href={meetingMailto}>Contact us</a>
		</div>

		<div>
			<h3>Navigate</h3>
			<ul>
				{#each navLinks as item}
					<li><a href={item.href}>{item.label}</a></li>
				{/each}
			</ul>
		</div>

		<div>
			<h3>Community</h3>
			<ul>
				{#each communityLinks as item}
					<li><a href={item.href} target="_blank" rel="noreferrer">{item.label}</a></li>
				{/each}
			</ul>
		</div>

		<div>
			<h3>Address</h3>
			<p>Indus Research</p>
			<p>Hall 5, IIT Kanpur</p>
			<p>Kanpur, India</p>
			<p>Remote-first operations</p>
		</div>
	</div>

	<div class="container foot-end">
		<p>Built for teams that care about quality, speed, and cost discipline.</p>
	</div>
</footer>

<style>
	.footer {
		border-top: 1px solid var(--line);
		padding-top: 4rem;
		padding-bottom: 2rem;
	}

	.footer-grid {
		display: grid;
		grid-template-columns: 1.2fr 0.8fr 0.8fr 0.8fr;
		gap: 1.4rem;
	}

	h3 {
		font-size: 0.82rem;
		text-transform: uppercase;
		letter-spacing: 0.11em;
		margin-bottom: 0.8rem;
		color: var(--accent-soft);
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 0.5rem;
	}

	li,
	p,
	a {
		font-size: 0.92rem;
		color: var(--muted);
		margin: 0;
	}

	.foot-line {
		max-width: 30ch;
		margin-bottom: 1rem;
	}

	.foot-end {
		padding-top: 1.4rem;
		margin-top: 1.4rem;
		border-top: 1px solid var(--line);
	}

	.foot-end p {
		font-size: 0.84rem;
	}

	@media (max-width: 900px) {
		.footer-grid {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (max-width: 620px) {
		.footer-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
