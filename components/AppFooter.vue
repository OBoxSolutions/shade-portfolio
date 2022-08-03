<template>
  <footer class="footer">
    <div class="section-change-marker"></div>
    <div class="footer-content mx-auto">
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
      <div class="img-content">
        <div class="img-wrapper mx-auto py-4">
          <img src="/logo.svg" alt="" />
        </div>
      </div>
      <div class="footer-left-side"></div>
      <div class="footer-right-side"></div>
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
$border-size: 2px;

.footer {
  position: relative;
  overflow-x: hidden;
}

.section-change-marker {
  background-color: #15aaaa;
  width: 100%;
  height: 200px;
  position: relative;
  top: 0;
  left: 0;
  z-index: 10;
}

.footer-content {
  width: 1600px;
  position: relative;
  border: $border-size solid #222940;
  transform-style: preserve-3d;
  perspective: 200px;
  z-index: 20;
}

.img-content {
  position: relative;
  background-color: #ffac06;
  z-index: 30;

  .img-wrapper {
    width: 44%;
  }
}

.nav-bar-wrapper {
  position: relative;
  transform-style: preserve-3d;
  perspective: 200px;

  .nav-bar-left-side,
  .nav-bar-right-side {
    border: $border-size solid #222940;
    background-color: #5a55f8;
    position: absolute;
    height: calc(100% - ($border-size));
    width: 100%;
    top: -($border-size);
    transform: rotateY(300deg) translateX(50%);
  }

  .nav-bar-left-side {
    left: calc(-50% - ($border-size * 2));
  }
  .nav-bar-right-side {
    right: calc(-50% - ($border-size * 2));
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
  border-bottom: $border-size solid #222940;
  width: calc(100% - 0.4em);

  .nav-bar__link {
    padding: 0.8em 0;
    display: flex;
    justify-content: center;
    flex-grow: 1;
    border: solid #222940;
    border-width: 0 $border-size;

    &:first-child {
      border: solid #222940;
      border-width: 0 $border-size 0 ($border-size * 2);
    }
    &:last-of-type {
      border: solid #222940;
      border-width: 0 ($border-size * 2) 0 $border-size;
    }
  }
}
</style>
