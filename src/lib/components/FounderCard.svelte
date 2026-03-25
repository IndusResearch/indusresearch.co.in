<script lang="ts">
  let { founder } = $props<{
    founder: { name: string; post: string; note: string; linkedin: string };
  }>();
</script>

<article class="card fade-up">
  <div class="head">
    <h3>{founder.name}</h3>

    {#if founder.linkedin}
      <a
        class="linkedin"
        href={founder.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${founder.name}'s LinkedIn profile in a new tab`}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.25 2.25 0 1 0 5.25 7.5 2.25 2.25 0 0 0 5.25 3ZM20.44 13.26c0-3.46-1.84-5.07-4.3-5.07-1.98 0-2.86 1.09-3.35 1.86V8.5H9.4V20h3.38v-6.06c0-1.6.3-3.16 2.28-3.16 1.95 0 1.98 1.82 1.98 3.26V20h3.4v-6.74Z"
          />
        </svg>
      </a>
    {/if}
  </div>

  <p>{founder.post}</p>
  <p>{founder.note}</p>
</article>

<style>
  .card {
    padding: 1.2rem;
    border-radius: 0.8rem;
    border: 1px solid var(--line);
    background: linear-gradient(
      150deg,
      rgba(255, 255, 255, 0.01),
      rgba(255, 255, 255, 0.03)
    );
  }

  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    margin-bottom: 0.5rem;
  }

  h3 {
    margin: 0;
    font-size: 1rem;
  }

  p {
    margin: 0;
    color: var(--muted);
    font-size: 0.92rem;
  }

  .linkedin {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.9rem;
    height: 1.9rem;
    border-radius: 999px;
    border: 1px solid var(--line);
    color: #000;
    background: #fff;
    transition: transform 0.15s ease, opacity 0.15s ease;
  }

  .linkedin:hover {
    transform: translateY(-1px);
    opacity: 0.9;
  }

  .linkedin svg {
    width: 1rem;
    height: 1rem;
    fill: currentColor;
  }
</style>
