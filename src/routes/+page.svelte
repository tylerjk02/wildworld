<script lang="ts">
  export let data;
</script>

<main class="main">
  Big directory of rabbit holes to dive into
  {#await data.streamed.listPage}
    Loading
  {:then listLinks}
    <div class="links">
      {#each listLinks as link}
        <div class="link">
          <a target="_blank" href="https://en.wikipedia.org/wiki/{link['*']}"
            >{link["*"]}</a
          >
        </div>
      {/each}
    </div>
  {/await}
</main>

<style>
  .links {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  .link {
    border: 1px solid #222;
    padding: 3px;
  }
  .link:nth-child(even) {
    background-color: #e3e3e3;
  }
</style>
