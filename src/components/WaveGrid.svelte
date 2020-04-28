<script>
  import City from "../images/city.svg";
  import Mountains from "../images/mountains.svg";
</script>

<style>
  div.container {
    width: 100%;
    height: 80vh;
    top: 0;
    left: 0;
    position: absolute;
    z-index: -1;
    overflow: hidden;
    perspective: 10rem;
  }

  div.sky {
    z-index: -5;
    position: fixed;
    top: 0;
    left: 0;

    height: 60%;
    width: 100%;

    background-image: linear-gradient(var(--bg-primary), var(--bg-secondary));
    background-repeat: no-repeat;
    background-size: cover;
  }

  div.detail {
    position: absolute;
    bottom: 37%;
    left: 50%;
    transform: translateX(-50%);
    width: 105%;
    max-width: 60rem;
  }

  img.city-background {
    position: absolute;
    width: 100%;
    min-width: 40rem;
    bottom: 0;
  }

  img.mountains {
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  img.mountains.left {
    left: -80%;
  }

  img.mountains.right {
    right: -80%;
  }

  div.grid {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 40%;
    width: 100vw;
    background-color: var(--bg-primary);
    background-image: linear-gradient(
        to top,
        var(--bg-primary) 5%,
        rgba(0, 0, 0, 0) 50%
      ),
      linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0.05rem,
        var(--color-secondary-dark) 0%,
        var(--color-secondary-dark) 0.1rem,
        rgba(0, 0, 0, 0) 0.05rem
      ),
      linear-gradient(
        90deg,
        rgba(0, 0, 0, 0) 0.05rem,
        var(--color-secondary-dark) 0%,
        var(--color-secondary-dark) 0.1rem,
        rgba(0, 0, 0, 0) 0.05rem
      );

    background-repeat: no-repeat, repeat, repeat;
    background-size: 100% 100%, 1rem 0.5rem, 1rem 0.5rem;

    transform-origin: bottom;
    transform: rotateX(45deg) scaleX(4);

    opacity: 1;
    box-shadow: 0 0rem 5rem var(--color-secondary-light);

    animation: grid-shift 6s linear infinite;
  }

  @keyframes grid-shift {
    0% {
      background-position: 0 0, 0 0;
    }
    100% {
      background-position: 0 0, 0 16rem;
    }
  }

  div.breaker {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1rem;
    background-color: var(--bg-primary);
  }
</style>

<div class="container">
  <div class="sky" />
  <div class="detail">
    <img class="city-background" src={City} alt="Background city scape" />
    <img class="mountains left" src={Mountains} alt="Background mountain" />
    <img class="mountains right" src={Mountains} alt="Background mountain" />
  </div>
  <div class="grid" />
  <div class="breaker" />
</div>
