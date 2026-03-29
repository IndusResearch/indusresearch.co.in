<script>
  import { resolve } from "$app/paths";
</script>

<a class="logo" href={resolve("/")} aria-label="Indus Research home">
  <img src={resolve("/favicon/logo.svg")} alt="IR Logo" class="logo-mark" />
  <span class="logo-text">Indus Research</span>
</a>

<style>
  .logo {
    display: inline-flex;
    align-items: center;
    gap: 0.65rem;
    font-weight: 600;
  }

  .logo-mark {
    width: 2rem;
    height: 2rem;
    object-fit: contain;
  }

  .logo-text {
    font-size: 0.95rem;
    letter-spacing: 0.03em;
  }
</style>
