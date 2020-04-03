<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import Me from "../images/me_main.jpeg";

  let mounted = false;
  onMount(async () => {
    mounted = true;
  });
</script>

<style>
  div.opener {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    width: 100%;
  }

  img {
    display: block;
    width: 100%;
  }
</style>

<svelte:head>
  <title>Home</title>
</svelte:head>

<div class="opener" in:fade={{ delay: 0, duration: 1000 }}>
  <img src={Me} alt="Photo of me" />
  <div>
    <h1>Ben Chidlow</h1>
    <h2>Future developer</h2>
  </div>
</div>

<div in:fade={{ delay: 500, duration: 1000 }}>
  <p>
    Slow-carb live-edge portland, kitsch photo booth chia raw denim edison bulb
    trust fund succulents normcore dreamcatcher man braid kinfolk. Sriracha art
    party church-key unicorn. Blog migas poutine air plant. Hella cold-pressed
    chillwave flannel. Plaid aesthetic coloring book gentrify whatever VHS fam
    listicle literally vice tilde.
  </p>
  <p>
    Gentrify man braid cornhole literally flexitarian edison bulb church-key
    gochujang art party. Biodiesel raclette before they sold out woke. Vaporware
    ramps locavore, XOXO fanny pack hot chicken etsy. Hammock brunch poke fixie.
  </p>
  <p>
    Messenger bag typewriter pinterest, taxidermy flannel kale chips franzen.
    Tacos vape hexagon drinking vinegar four loko godard master cleanse twee
    enamel pin ramps humblebrag lo-fi. Messenger bag sriracha raw denim,
    williamsburg selfies copper mug poke brooklyn vice tacos skateboard
    snackwave beard. Deep v synth kombucha la croix, blue bottle narwhal kinfolk
    sriracha unicorn asymmetrical celiac. Pop-up blog kinfolk flexitarian. Trust
    fund hammock retro, 90's before they sold out green juice street art deep v
    art party shoreditch.
  </p>
  <p>
    Banjo brooklyn tilde freegan tousled snackwave coloring book. Try-hard DIY
    wolf subway tile lumbersexual 8-bit tattooed vinyl kale chips dreamcatcher
    cliche raclette four dollar toast. Blog af iPhone, glossier seitan everyday
    carry unicorn. Lo-fi banh mi microdosing pitchfork synth pickled
    williamsburg af woke subway tile. Shabby chic taxidermy gochujang food
    truck. Deep v actually vape man bun kinfolk.
  </p>
  <p>Dummy text? More like dummy thicc text, amirite?</p>
</div>
