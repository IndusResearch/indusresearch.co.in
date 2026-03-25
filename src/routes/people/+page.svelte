<script lang="ts">
  import FounderCard from "$lib/components/FounderCard.svelte";
  import { meetingMailto } from "$lib/content/site";

  const founders = [
    {
      name: "Pranav Krishna",
      post: "IIT Kanpur Undergrad Student",
      note: "Vision to build a better future with a new optimization focused AI world.",
      linkedin: "https://www.linkedin.com/in/jjbigdub/",
    },
    {
      name: "Nitin Maheshwar",
      post: "IIT Kanpur Undergrad Student",
      note: "Thrives to bring all the cash book to net positive.",
      linkedin: "https://www.linkedin.com/in/nitin-maheshwari-1aa805291/",
    },
    {
      name: "Manas Jain Kuniya",
      post: "IIT Kanpur Undergrad Student",
      note: "Aims to build foundational infra for the new AI world.",
      linkedin: "www.linkedin.com/in/manas-jain-kuniya",
    },
  ];
</script>

<section class="section">
  <div class="container">
    <p class="eyebrow fade-up">People</p>
    <h1 class="headline fade-up delay-1">Founders aligned on one promise.</h1>
    <p class="lede fade-up delay-2">
      We help teams ship faster AI products while continuously reducing
      avoidable spend.
    </p>
  </div>
</section>

<section class="section cards">
  <div class="container grid three-col">
    {#each founders as founder}
      <FounderCard {founder} />
    {/each}
  </div>
</section>

<section class="section">
  <div class="container cta fade-up">
    <p>Want to discuss your current model cost and performance profile?</p>
    <a class="btn primary" href={meetingMailto}>Contact us for a meeting</a>
  </div>
</section>

<style>
  .cards {
    padding-top: 0;
  }

  .three-col {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .cta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 1rem 1.2rem;
    border: 1px solid var(--line);
    border-radius: 0.9rem;
    background: var(--surface);
  }

  .cta p {
    margin: 0;
    color: var(--muted);
  }

  @media (max-width: 920px) {
    .three-col {
      grid-template-columns: 1fr;
    }

    .cta {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>
