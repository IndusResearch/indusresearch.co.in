<script lang="ts">
  import { meetingMailto } from "$lib/content/site";
  import {resolve} from "$app/paths"
  let { title } = $props<{ title: string }>();
</script>

<section class="section">
  <div class="container wrapper fade-up">
    <p class="eyebrow">{title}</p>
    <h1>Shipping quietly. Saving aggressively.</h1>
    <p class="lede">
      We are building this surface with the same discipline we use for client
      workloads: measurable performance gains, lower inference waste, and high
      reliability. <span class="bold">Public launch is next.</span> Until then, reach
      out directly and we will support your use case one-on-one.
    </p>
    <div class="cta-row">
      <a class="btn primary" href={resolve("/people")}>Meet the founders</a>
      <a class="btn secondary" href={meetingMailto}>Book a consultation</a>
    </div>
  </div>
</section>

<style>
  .wrapper {
    max-width: 760px;
    padding: 1.6rem;
    border: 1px solid var(--line);
    background: linear-gradient(140deg, var(--surface), var(--surface-soft));
    border-radius: 1rem;
  }
  .bold {
    font-weight: bold;
  }

  h1 {
    font-size: clamp(1.6rem, 3vw, 2.4rem);
    margin: 0.4rem 0 1rem;
  }

  .cta-row {
    display: flex;
    gap: 0.8rem;
    margin-top: 1.2rem;
    flex-wrap: wrap;
  }
</style>
