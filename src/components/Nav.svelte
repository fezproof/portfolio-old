<script>
  export let segment;
</script>

<style>
  nav {
    background-color: var(--bg-secondary);
    font-weight: 300;
    display: flex;
    top: 0;
    height: 100vh;
    width: 5rem;
    position: fixed;
    transition: var(--transition-speed);
    z-index: 10;
  }

  nav:hover {
    width: 15rem;
  }

  ul {
    margin: 0;
    padding: 0;
    width: 100%;
  }

  li {
    display: block;
  }

  [aria-current] {
    border-color: var(--color-secondary-light);
  }

  a {
    text-decoration: none;
    display: block;
    width: 100%;
    height: 5rem;
    text-align: center;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;

    transition: var(--transition-speed);
    border: 0.2rem solid transparent;
    border-radius: 0.3rem;
  }

  a:hover {
    border-color: var(--color-secondary-main);
  }

  a span {
    padding: 0.5rem;
  }
</style>

<nav>
  <ul>
    <li>
      <a
        rel="prefetch"
        aria-current={segment === undefined ? 'page' : undefined}
        href=".">
        <span>home</span>
      </a>
    </li>
    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'about' ? 'page' : undefined}
        href="about">
        <span>about</span>
      </a>
    </li>
  </ul>
</nav>
