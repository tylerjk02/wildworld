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
      <a href="https://en.wikipedia.org/wiki/{slug}">Source</a>
    </div>
  {/await}


  <hr />
  {#await data.streamed.itemDetails}
    ...
  {:then details}
    {#if details}
    <a href="#images">Jump to Images</a>
      <h3>More...</h3>
      <div id="links" class="links">
        {#each details.parse.links as link}
          {#if !link["*"].includes("Wikipedia") && !link["*"].includes("Portal") && !link["*"].includes("Template") && !link["*"].includes("Category")}
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

  
  <hr />
  {#await data.streamed.itemPhotos}
    ...
  {:then photos} 
  <a href="#links">Jump to Links</a>
    <h3>Related Images</h3>
    <div id="images" class="images">
      {#each photos.items as photo}
        {#if photo.hasOwnProperty("srcset")}
          <div class="image">
            <img src={photo.srcset[0].src} alt={photo.title} />
            <p>{photo.title}</p>
          </div>
          <!-- <img src="{photo.}" alt=""> -->
        {/if}
      {/each}
    </div>
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
  .images {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  .image {
    border: 1px solid #111;
    width: fit-content;
  }
  .image img {
    width: 100%;
  }
</style>
