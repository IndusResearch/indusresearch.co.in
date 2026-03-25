<script lang="ts">
  import LogoMark from "$lib/components/LogoMark.svelte";
  import { navLinks } from "$lib/content/site";
</script>

<header class="nav-shell">
  <div class="container nav-row">
    <LogoMark />

    <nav class="link-group desktop-only" aria-label="Primary links">
      {#each navLinks as item}
        <a href={item.href}>{item.label}</a>
      {/each}
    </nav>
  </div>

  <div class="container mobile-only">
    <nav class="mobile-nav" aria-label="Primary links mobile">
      {#each [...navLinks] as item}
        <a href={item.href}>{item.label}</a>
      {/each}
    </nav>
  </div>
</header>

<style>
  .nav-shell {
    position: sticky;
    top: 0;
    z-index: 30;
    backdrop-filter: blur(8px);
    background: color-mix(in srgb, var(--bg), transparent 20%);
    border-bottom: 1px solid var(--line);
  }

  .nav-row {
    display: flex;
    align-items: center;
    height: 4rem;
    flex-direction: row;
    justify-content: space-between;
  }

  .link-group {
    display: flex;
    gap: 0.95rem;
  }

  .link-group:first-child {
    justify-content: flex-start;
  }

  .link-group:last-child {
    justify-content: flex-end;
  }

  a {
    font-size: 0.88rem;
    color: var(--muted);
    transition: color 180ms ease;
  }

  a:hover {
    color: var(--text);
  }

  .mobile-only {
    display: none;
  }

  .mobile-nav {
    display: flex;
    gap: 0.65rem;
    overflow-x: auto;
    padding: 0 0 0.9rem;
    scrollbar-width: thin;
  }

  .mobile-nav a {
    padding: 0.35rem 0.7rem;
    border: 1px solid var(--line);
    border-radius: 999px;
    white-space: nowrap;
  }

  @media (max-width: 860px) {
    .desktop-only {
      display: none;
    }

    .nav-row {
      grid-template-columns: 1fr;
      height: 3.5rem;
    }

    .mobile-only {
      display: block;
    }
  }
</style>
