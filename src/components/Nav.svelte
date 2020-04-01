<script>
  export let segment;
</script>

<style>
  nav {
    background-color: var(--bg-primary);
    font-weight: 300;
    top: 0;
    bottom: auto;
    left: 0;
    right: 0;
    width: 100%;
    height: 5rem;
    position: fixed;
    transition: var(--transition-speed);
    z-index: 10;
  }

  ul {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  ul > div.spacer {
    width: 8rem;
  }

  li {
    display: block;
    margin: 0 1rem;
  }

  li.portal {
    margin-left: auto;
    position: absolute;
    bottom: -2rem;
    top: auto;
    border: 0.1rem solid var(--color-primary-main);
    width: 5rem;
    height: 5rem;
    transform: rotate(45deg);
    background-color: var(--bg-primary);
  }

  li.portal > a {
    transform: rotate(-45deg);
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
    min-width: 5rem;

    transition: var(--transition-speed);
    border: none;

    border-top: 0.2rem solid transparent;
  }

  a:hover,
  a:focus {
    border-color: var(--color-secondary-dark);
    outline: none;
  }

  a span {
    padding: 0.5rem;
  }

  @media only screen and (max-width: 960px) {
    nav {
      bottom: 0;
      top: auto;
    }

    li {
      margin: 0;
    }

    li.portal {
      top: -2rem;
      bottom: auto;
    }

    a {
      border: none;
      border-bottom: 0.2rem solid transparent;
    }
  }
</style>

<nav>
  <ul>
    <!-- Main link at top for good tab indexing -->
    <li class="portal">
      <a
        rel="prefetch"
        aria-current={segment === undefined ? 'page' : undefined}
        href=".">
        <span>home</span>
      </a>
    </li>

    <!-- Secondary links for page navigation -->
    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'projects' ? 'page' : undefined}
        href="projects">
        <span>projects</span>
      </a>
    </li>
    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'blog' ? 'page' : undefined}
        href="blog">
        <span>blog</span>
      </a>
    </li>

    <div class="spacer" />

    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'contact' ? 'page' : undefined}
        href="contact">
        <span>contact</span>
      </a>
    </li>
    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'dnd' ? 'page' : undefined}
        href="dnd">
        <span>dnd</span>
      </a>
    </li>
  </ul>
</nav>
