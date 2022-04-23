<script lang="ts">
  import { gdprConsent, GdprConsent, gdprConsentVisible } from '$lib/stores';
</script>

{#if $gdprConsent == GdprConsent.not_opted}
  <div class="cookie-consent-wrapper" class:hidden={!$gdprConsentVisible}>
    <div class="cookie-consent">
      <span class="cookie-text"
        >By using this site, you accept the use of necessary Cookies (if any).</span
      >
      <span>
        <div class="button-wrapper">
          <button class="primary" on:click={() => gdprConsent.set(GdprConsent.necessary)}
            >Okay</button
          >
          <a
            href="https://ec.europa.eu/info/cookies_en"
            target="_blank"
            class="button secondary"
            on:click={() => ($gdprConsentVisible = !$gdprConsentVisible)}
            >Learn more about cookies</a
          >
        </div>
      </span>
    </div>
  </div>
  <div class="cookie-toggle" on:click={() => ($gdprConsentVisible = !$gdprConsentVisible)}>🍪</div>
{/if}

<style lang="scss">
  .cookie-consent-wrapper {
    position: fixed;
    bottom: 0;
    right: 0;
    transition: 0.5s;
    overflow: hidden;
    // width: 25em;
    width: 25em;

    &.hidden {
      opacity: 0;
      width: 0em;
    }
  }

  .cookie-consent {
    background: var(--gray-4);
    border-radius: 0.5rem;
    margin: 0.5em;
    padding: 0.5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: calc(25em - 2em);

    .cookie-text {
      flex-grow: 1;
    }

    .button-wrapper {
      display: grid;
      grid-template-columns: auto auto 1fr;
      margin-top: 0.5em;
      grid-gap: 0.5em;
    }
    button {
      &.primary {
        background: rgba(127, 159, 255, 0.5);
        color: black;
      }
    }
    .button {
      &.secondary {
        background: var(--gray-7);
      }
    }
  }

  .cookie-toggle {
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 0.5rem;
    padding: 0.5em;
    border-radius: 0.5rem;
    cursor: pointer;
    user-select: none;
    background: var(--gray-4);
  }
</style>
