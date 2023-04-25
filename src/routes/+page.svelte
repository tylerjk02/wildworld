<script lang="ts">
  export let data;
</script>

<main class="main">
  Big directory of rabbit holes to dive into<br>
  <a href="#bottom">Go to bottom</a>
  {#await data.streamed.listPage}
    Loading
  {:then listLinks}
    <h2 id="top">Jump Into...</h2>
    <div class="links">
      {#each listLinks as link}
        <a href="./links/{link['*']}" class="link">
          <p class="inner-source">{link['*']}</p>
          <div>
            
            <a class="wiki-source" target="_blank" href="https://en.wikipedia.org/wiki/{link['*']}"
              >Source</a
            >
          </div>
        </a>
        {/each}
        <div id="bottom"></div>
        <a href="#top">Go to Top</a>
    </div>
  {/await}

</main>

<style>
  .links {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  .link {
    transition: background-color 0.1s ease-in-out;
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    border: 1px solid #222;
    padding: 3px;
  }
  .link:nth-child(even) {
      background-color: #e3e3e3;
    }
  
  .link:hover {
    background-color: #979797;
  }

  .inner-source {
    text-decoration: none;
    color: #111;

  }

  @media screen and (max-width: 728px) {
    .link {
      flex-direction: column;
      gap: 5px;
    }
  }
</style>
