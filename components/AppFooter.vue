<template>
  <footer class="footer">
    <div class="section-change-marker"></div>
    <div class="content mx-auto">
      <div class="nav-bar-wrapper">
        <ul class="nav-bar my-0 mx-auto">
          <li
            v-for="(link, index) in links"
            :key="`navbar-${index}`"
            class="nav-bar__link"
          >
            {{ link.text }}
          </li>
        </ul>
        <div class="nav-bar-left-side"></div>
        <div class="nav-bar-right-side"></div>
      </div>
      <div class="footer-content">
        <div class="img-wrapper mx-auto py-4">
          <img src="/logo.svg" alt="" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      links: [
        { text: 'About us', url: '' },
        { text: 'Portfolio', url: '' },
        { text: 'Contacts', url: '' },
        { text: 'Get started', url: '' },
        { text: "We're hiring", url: '' },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.footer {
  position: relative;
  overflow-x: hidden;
}

.content {
  width: 1200px;
  position: relative;
  border: 2px solid #222940;

  &::before,
  &::after {
    content: '';
    border: 2px solid #222940;
    background-color: #ffac06;
    position: absolute;
    width: 200px;
    top: -2px;
    height: 100%;
    z-index: -1;
  }

  &::before {
    border-right: 0;
    left: -204px;
  }

  &::after {
    border-left: 0;
    right: -104px;
  }
}

.section-change-marker {
  background-color: #15aaaa;
  width: 100%;
  height: 200px;
  position: relative;
  top: 0;
  left: 0;
  z-index: 5;
}

.footer-content {
  position: relative;
  background-color: #ffac06;
  z-index: 30;

  .img-wrapper {
    width: 44%;
  }
}

.nav-bar-wrapper {
  position: relative;
}

.nav-bar {
  display: flex;
  list-style: none;
  background-color: #5a55f8;
  color: white;
  width: fit-content;
  padding: 0.4em 0.2em;
  text-transform: uppercase;
  position: relative;
  border-bottom: 2px solid #222940;
  width: calc(100% - 0.4em);

  .nav-bar__link {
    padding: 0.8em 0;
    display: flex;
    justify-content: center;
    flex-grow: 1;
    border: solid #222940;
    border-width: 0 2px;

    &:first-child {
      border: solid #222940;
      border-width: 0 2px 0 4px;
    }
    &:last-of-type {
      border: solid #222940;
      border-width: 0 4px 0 2px;
    }
  }
}
</style>
