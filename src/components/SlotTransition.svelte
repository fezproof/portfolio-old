<script>
  import { fly } from "svelte/transition";

  export let changer = undefined;
  export let duration = 200;
  export let transition = fly;

  let swap = false;

  const change = () => {
    swap = !swap;
  };

  $: change(changer);
</script>

{#if swap}
  <div
    in:transition={{ duration, delay: duration, y: -100 }}
    out:transition={{ duration, y: 100 }}>
    <slot />
  </div>
{:else}
  <div
    in:transition={{ duration, delay: duration, y: -100 }}
    out:transition={{ duration, y: 100 }}>
    <slot />
  </div>
{/if}
