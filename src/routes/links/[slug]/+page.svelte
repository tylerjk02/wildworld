<script lang="ts">
  export let data;
  const { slug } = data;
</script>

<main class="main">
  <div class="trace-back">
    <a href="/">Back</a>
  </div>

  <h1>{slug}</h1>

  {#await data.streamed.itemSummary}
    ...
  {:then summary}
    <div class="summary">
      <p>{@html summary.extract_html}</p>
    </div>
  {/await}
  <hr />
  {#await data.streamed.itemDetails}
    ...
  {:then details}
    {#if details}
      <h3>More Info</h3>
      <div class="info">
        {@html details.parse.text['*']}
      </div>

      <div class="links">
        {#each details.parse.links as link}
          {#if !link['*'].includes('Wikipedia') && !link['*'].includes('Portal') && !link['*'].includes('Template') && !link['*'].includes('Category')}
            <a
              target="_blank"
              href="https://en.wikipedia.org/wiki/{link['*']}"
              class="link"
            >
              {link["*"]}
            </a>
          {/if}
        {/each}
      </div>
    {/if}
  {/await}
</main>

<style>
  .links {
    display: grid;
  }
  .link {
    padding: 3px;
    border: 1px solid #111;
  }
</style>