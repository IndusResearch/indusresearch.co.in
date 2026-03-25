<script lang="ts">
  import InfoCard from "$lib/components/InfoCard.svelte";
  import { communityLinks, meetingMailto } from "$lib/content/site";
  import { resolve } from "$app/paths";
</script>

<section class="section hero">
  <div class="container hero-grid">
    <div>
      <p class="eyebrow fade-up">Indus Research</p>
      <h1 class="headline fade-up delay-1">
        Optimizing performance per dollar.
      </h1>
      <p class="lede fade-up delay-2">
        Your team focuses on product velocity. We focus on call efficiency,
        inference spend, and system reliability so every model decision returns
        more value.
      </p>
      <div class="hero-cta fade-up delay-2">
        <a class="btn primary" href={meetingMailto}>Discuss your stack</a>
        <a class="btn secondary" href={resolve("/#about")}>How we work</a>
      </div>
    </div>
    <div class="hero-art fade-up delay-2" aria-hidden="true">
      <div class="ring ring-1"></div>
      <div class="ring ring-2"></div>
      <div class="ring ring-3"></div>
      <div class="pulse-node">IR</div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container split">
    <div>
      <p class="eyebrow">Research Engine</p>
      <h2>We trim waste where it hides.</h2>
      <p class="lede">
        We benchmark models, prompts, retrieval paths, and call patterns
        continuously. The result is not a tip sheet. It is a repeatable
        operating system for AI cost and performance decisions.
      </p>
    </div>
    <div class="chip-wrap">
      <span class="chip">Inference routing</span>
      <span class="chip">Prompt compression</span>
      <span class="chip">Call-path governance</span>
      <span class="chip">Latency budgets</span>
      <span class="chip">Quality cost tracking</span>
    </div>
  </div>
</section>

<section class="section" id="about">
  <div class="container about-wrap fade-up">
    <p class="eyebrow">About</p>
    <h1>Built for disciplined AI economics.</h1>
    <p class="lede">
      Indus Research exists to help AI companies run high-performing systems
      without uncontrolled spend. Our core ideology is simple: performance and
      cost should improve together, not trade off blindly.
    </p>
    <p class="lede">
      We operate as a research-first partner. We track fast-moving model
      standards, run practical benchmarks, and convert findings into
      production-safe optimization moves.
    </p>
  </div>
</section>

<section class="section">
  <div class="container">
    <p class="eyebrow">Features</p>
    <div class="grid metrics">
      <InfoCard
        title="Call Optimization"
        stat="24/7"
        description="Every request path is profiled and tuned for quality-per-cost performance."
      />
      <InfoCard
        title="Inference Efficiency"
        stat="Model-fit"
        description="Right model, right context, right price - selected by measurable constraints."
        delay="delay-1"
      />
      <InfoCard
        title="Operational Clarity"
        stat="1 view"
        description="Teams get one clear map of spend, latency, and quality tradeoffs."
        delay="delay-2"
      />
    </div>
  </div>
</section>

<section class="section aim-block">
  <div class="container">
    <p class="eyebrow">Our Aim</p>
    <h2>Set a global bar for AI efficiency.</h2>
    <p class="lede">
      Instead of "used by companies," our focus is simpler and bolder: help the
      entire AI world optimize performance per dollar, responsibly and at scale.
    </p>
  </div>
</section>

<section class="section">
  <div class="container community">
    <div>
      <p class="eyebrow">Community</p>
      <h2>Join discussions while we build.</h2>
      <p class="lede">
        Share your stack and constraints. We share what is working in the field.
      </p>
    </div>
    <div class="links">
      {#each communityLinks as item}
        <a
          class="btn secondary"
          href={item.href}
          target="_blank"
          rel="noreferrer">{item.label}</a
        >
      {/each}
      <a class="btn primary" href={meetingMailto}>Contact us</a>
    </div>
  </div>
</section>

<style>
  .hero {
    padding-top: 4.5rem;
  }

  .hero-grid {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 1.8rem;
    align-items: center;
  }

  .hero-cta {
    display: flex;
    gap: 0.8rem;
    margin-top: 1.4rem;
    flex-wrap: wrap;
  }

  .hero-art {
    position: relative;
    aspect-ratio: 1 / 1;
    max-width: 410px;
    justify-self: center;
    display: grid;
    place-items: center;
  }

  .ring {
    position: absolute;
    border: 1px solid var(--line);
    border-radius: 50%;
    animation: spin 16s linear infinite;
  }

  .ring-1 {
    width: 68%;
    height: 68%;
  }

  .ring-2 {
    width: 88%;
    height: 88%;
    animation-direction: reverse;
  }

  .ring-3 {
    width: 100%;
    height: 100%;
    opacity: 0.45;
  }

  .pulse-node {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 1rem;
    background: var(--accent);
    color: #111;
    font-weight: 800;
    letter-spacing: 0.08em;
    display: grid;
    place-items: center;
    box-shadow: 0 0 0 0 rgba(214, 255, 63, 0.45);
    animation: breathe 2.1s ease-in-out infinite;
  }

  .split {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.2rem;
    align-items: center;
  }

  h2 {
    font-size: clamp(1.5rem, 2.6vw, 2.2rem);
    line-height: 1.2;
    margin: 0.5rem 0 0.8rem;
  }

  .chip-wrap {
    display: flex;
    gap: 0.7rem;
    flex-wrap: wrap;
  }

  .metrics {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .aim-block {
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
    background: linear-gradient(
      160deg,
      rgba(255, 255, 255, 0.01),
      rgba(255, 255, 255, 0.02)
    );
  }

  .community {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 1.2rem;
    align-items: center;
  }

  .links {
    display: flex;
    gap: 0.65rem;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  @keyframes breathe {
    0%,
    100% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(214, 255, 63, 0.35);
    }

    50% {
      transform: scale(1.03);
      box-shadow: 0 0 0 16px rgba(214, 255, 63, 0);
    }
  }

  @media (max-width: 920px) {
    .hero-grid,
    .split,
    .community {
      grid-template-columns: 1fr;
    }

    .links {
      justify-content: flex-start;
    }

    .metrics {
      grid-template-columns: 1fr;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .ring,
    .pulse-node {
      animation: none;
    }
  }
</style>
