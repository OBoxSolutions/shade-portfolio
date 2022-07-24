<template>
  <div>
    <ul class="nav-bar">
      <li v-for="(link, index) in links" :key="`navbar-${index}`">
        <span class="separator"> | </span>
        {{ link.text }}
        <span class="separator"> | </span>
      </li>
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

<style scoped>
.nav-bar {
  display: flex;
  list-style: none;
  background-color: #5a55f8;
  color: white;
  width: fit-content;
  padding: 0.2em 0;
  text-transform: uppercase;
}

.separator {
  color: #222940;
}
</style>
