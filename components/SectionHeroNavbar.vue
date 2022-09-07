<template>
  <div>
    <ul class="nav-bar">
      <li
        v-for="(link, index) in links"
        :key="`navbar-${index}`"
        class="nav-bar__link"
      >
        {{ link.text }}
      </li>
      <div class="location-line"></div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SectionHeroNavbar',
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
.nav-bar {
  display: flex;
  list-style: none;
  background-color: #5a55f8;
  color: white;
  width: fit-content;
  padding: 0.4em 0.2em;
  text-transform: uppercase;
  position: relative;
  border: 1px solid #222940;
  width: 1200px;
  .nav-bar__link {
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
  .location-line {
    position: absolute;
    padding: 0;
    margin: 0;
    height: 10px;
    bottom: -10px;
    left: -1px;
    background-color: #ffac06;
    width: 100%;
    border: 1px solid #222940;
    border-top: 0px;
  }
}
</style>