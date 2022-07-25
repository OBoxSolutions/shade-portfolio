<template>
  <footer class="footer">
    <div class="section-change-marker"></div>
    <ul class="nav-bar mt-0">
      <li
        v-for="(link, index) in links"
        :key="`navbar-${index}`"
        class="nav-bar__link"
      >
        {{ link.text }}
      </li>
      <div class="location-line"></div>
    </ul>
    <div class="img-w">
      <img src="/logo.svg" alt="" />
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

.section-change-marker {
  background-color: #15aaaa;
  width: 100%;
  height: 200px;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
