<template>
  <div>
    <ul class="nav-bar">
      <li v-for="(link, index) in links" :key="`navbar-${index}`">
        <span class="separator"> | </span>
        {{ link.text }}
        <span class="separator"> | </span>
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
  padding: 0.4em 0;
  text-transform: uppercase;
  position: relative;
  border: 1px solid #222940;

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

.separator {
  color: #222940;
}
</style>
