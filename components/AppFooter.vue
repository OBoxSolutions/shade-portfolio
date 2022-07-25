<template>
  <footer class="footer">
    <div class="section-change-marker"></div>
    <ul class="nav-bar my-0 mx-auto">
      <li
        v-for="(link, index) in links"
        :key="`navbar-${index}`"
        class="nav-bar__link"
      >
        {{ link.text }}
      </li>
      <div class="location-line"></div>
    </ul>
    <div class="footer-content">
      <div class="img-wrapper mx-auto py-4">
        <img src="/logo.svg" alt="" />
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
  z-index: 10;

  .img-wrapper {
    width: 30%;
  }
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
  border: 2px solid #222940;
  width: 1200px;

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
