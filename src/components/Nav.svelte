<script>
  export let segment;
</script>

<style>
  nav {
    background-color: var(--bg-primary);
    font-weight: 300;
    top: 0;
    height: 100vh;
    width: 5rem;
    position: fixed;
    transition: var(--transition-speed);
    z-index: 10;
  }

  nav:hover {
    width: 15rem;
    background-color: var(--bg-secondary);
  }

  ul {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
  }

  li {
    display: block;
  }

  .last {
    margin-top: auto;
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
    border-right: 0.2rem solid transparent;
    border-radius: -0.2rem;
  }

  a:hover {
    border-color: var(--color-secondary-dark);
  }

  a span {
    padding: 0.5rem;
  }

  @media only screen and (max-width: 600px) {
    nav {
      bottom: 0;
      top: auto;
      left: 0;
      right: 0;
      height: 5rem;
      width: 100%;
    }

    ul {
      flex-direction: row;
    }
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
    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'skills' ? 'page' : undefined}
        href="skills">
        <span>skills</span>
      </a>
    </li>

    <li class="last">
      <a aria-current={segment === 'portal' ? 'page' : undefined} href="portal">
        <span>portal</span>
      </a>
    </li>
  </ul>
</nav>
