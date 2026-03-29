<script lang="ts">
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import InfoCard from "$lib/components/InfoCard.svelte";
  import { communityLinks, meetingMailto } from "$lib/content/site";
  import { resolve } from "$app/paths";

  const words = ["Conversational AI", "Voice AI"];
  let currentIndex = $state(0);

  onMount(() => {
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % words.length;
    }, 3000);
    return () => clearInterval(interval);
  });
</script>

<section class="section hero">
  <div class="container hero-grid">
    <div>
      <p class="eyebrow fade-up">Indus Research</p>
      <h1 class="headline fade-up delay-1">
        Self-improving LLMs for
        <span class="word-rotator">
          {#key currentIndex}
            <span
              class="animated-word"
              in:fly={{ y: 20, duration: 400, delay: 400 }}
              out:fly={{ y: -20, duration: 400 }}
            >
              {words[currentIndex]}
            </span>
          {/key}
        </span>
        <br />
        at a fraction of the cost.
      </h1>
      <p class="lede fade-up delay-2">
        We help companies leverage their data to build proprietary LLMs that match frontier model performance. Maximizing performance per dollar reliably.
      </p>
      <div class="hero-cta fade-up delay-2">
        <a class="btn primary" href="https://forms.gle/yRwzvwwgtzKBvEWu6" target="_blank" rel="noreferrer">Discuss your stack</a>
        <a class="btn secondary" href={resolve("/#about")}>How we work</a>
      </div>
    </div>
  </div>
</section>

<section class="section" id="about">
  <div class="container split">
    <div>
      <p class="eyebrow">The Problem</p>
      <h2>Over-provisioned frontier models.</h2>
      <p class="lede">
        Most conversational AI companies rely on large frontier models for tasks like customer support and voice agents. These models are general purpose and significantly over-provisioned for specific workflows, leading to high inference costs, latency, and inconsistent behavior.
      </p>
    </div>
    <div class="chip-wrap">
      <span class="chip">High Inference Costs</span>
      <span class="chip">Excess Latency</span>
      <span class="chip">Inconsistent Output</span>
      <span class="chip">Bloated Context</span>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <p class="eyebrow">The Solution</p>
    <h2>From raw data to production-grade LLMs.</h2>
    <div class="grid metrics" style="margin-top: 2rem;">
      <InfoCard
        title="Synthetic Data"
        stat="01"
        description="We use your existing data to generate high-quality synthetic datasets that cover domain-specific edge cases, failure paths, and hard-to-represent user behavior."
      />
      <InfoCard
        title="Domain Model Training"
        stat="02"
        description="We train proprietary LLMs for your workflow boundaries, so model behavior aligns with your terminology, policies, and task-specific quality requirements."
        delay="delay-1"
      />
      <InfoCard
        title="Evaluation and Continuous Learning"
        stat="03"
        description="We run structured evaluations on real and synthetic interactions, track failure patterns, and continuously feed improvements back into training making your models smarter over time."
        delay="delay-2"
      />
      <InfoCard
        title="Inference"
        stat="04"
        description="We deploy and operate inference for your custom models with observability, version control, and rollout safeguards so your team can scale with confidence."
      />
    </div>
  </div>
</section>

<section class="section">
  <div class="container community">
    <div>
      <p class="eyebrow">Community</p>
      <h2>Join discussions while we build.</h2>
      <p class="lede">
        Share your stack and constraints. We share what we're on.
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
      <a class="btn primary" href="https://forms.gle/yRwzvwwgtzKBvEWu6" target="_blank" rel="noreferrer">Contact us</a>
    </div>
  </div>
</section>

<style>
  .hero {
    padding-top: 4.5rem;
  }

  .hero-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.8rem;
    align-items: center;
  }

  .hero-cta {
    display: flex;
    gap: 0.8rem;
    margin-top: 1.4rem;
    flex-wrap: wrap;
  }

  .word-rotator {
    display: inline-grid;
    text-align: left;
  }

  .animated-word {
    grid-area: 1 / 1;
    color: var(--text);
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
    grid-template-columns: repeat(2, minmax(0, 1fr));
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

  @media (max-width: 920px) {
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
</style>
