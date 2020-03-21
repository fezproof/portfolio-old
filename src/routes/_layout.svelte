<script>
  import Nav from "../components/Nav.svelte";
  import SlotTransition from "../components/SlotTransition.svelte";

  export let segment;
</script>

<style>
  main {
    position: relative;
    max-width: 56em;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<Nav {segment} />

<main>
  <SlotTransition bind:changer={segment}>
    <slot />
  </SlotTransition>
</main>
