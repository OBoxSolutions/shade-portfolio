<template>
  <footer class="footer">
    <div class="section-change-marker" :style="'background-color:'+color " > </div>
    <div class="footer-content">
      <div class="nav-bar-wrapper">
        <ul class="nav-bar my-0 mx-auto">
          <li
            v-for="(link, index) in links"
            :key="`navbar-${index}`"
            class="nav-bar__link"
          >
            <span v-if="index === 4" class="__new-tag">New</span>
            <NuxtLink :to="link.url"> {{ link.text }} </NuxtLink>
          </li>
        </ul>
        <div class="nav-bar-left-side"></div>
        <div class="nav-bar-right-side"></div>
      </div>
      <div class="img-content">
        <div class="img-wrapper mx-auto py-4">
          <img src="/logo.svg" alt="" />
        </div>
        <ul class="mobile-nav">
          <li
            v-for="(link, index) in links"
            :key="`navbar-${index}`"
            class="nav-bar__link"
            :style="`${link.id === page ? 'background-color:red;' : ''}`"
          >
            <span v-if="index === 4" :style="`${page == 'hiring' ? outline : ''}`" class="__new-tag">New</span>
            <NuxtLink :to="link.url"> {{ link.text }} </NuxtLink>
          </li>
        </ul>

        <div class="bottom-clip" onclick="javascript:window.scrollTo(0, 0)">
          Back to the top?
        </div>
        <div class="cursor-container">
          <div class="cursor" :style="'transform:' + position"></div>
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
        { text: 'About us', url: '/', id: 'home' },
        { text: 'Portfolio', url: '/portfolio', id: 'portfolio' },
        { text: 'Contacts', url: '/contact', id: 'contact' },
        { text: 'Get started', url: '/get-started', id: 'get-started' },
        { text: "We're hiring", url: '/hiring', id: 'hiring' },
      ],
      page: '',
      position: '',
      color:'',
      outline:'text-shadow: 2px 0 rgb(0, 0, 0), -2px 0 rgb(0, 0, 0), 0 2px rgb(0, 0, 0), 0 -2px rgb(0, 0, 0),1px 1px rgb(0, 0, 0), -1px -1px rgb(0, 0, 0), 1px -1px rgb(0, 0, 0), -1px 1px rgb(0, 0, 0);'
    }
  },
  watch: {
    $route() {
      this.updatePosition()
      this.updatePage()
    },
  },
  beforeMount() {
    this.updatePosition()
    this.updatePage()
  },
  methods: {
    updatePosition() {
      if (typeof window !== 'undefined') {
        const page = window.location.pathname.replaceAll('/', '') || 'home';
        const colors = {
          home: '#15AAAA',
          portfolio:'#15AAAA',
          contact: '#8C6B4C',
          'get-started':'#09FFF0; height:30px',
          hiring:'#49EA76'
        }
        const positions = {
          home: 'translateX(-25%)',
          portfolio: 'translateX(calc(100% * 1.2))',
          contact: 'translateX(calc(100% * 2.7))',
          'get-started': 'translateX(calc(100% * 4.2))',
          hiring: 'translateX(calc(100% * 6))',
        }
        this.position = positions[page]
        this.color = colors[page]
      }
    },
    updatePage() {
      this.page =
        typeof window !== 'undefined'
          ? window.location.pathname.replaceAll('/', '') || 'home'
          : 'home'
    },
  },
}
</script>

<style scoped lang="scss">
$border-size: 2px;
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
  width: 100%;
  height: 100px;
  position: relative;
  top: 0;
  left: 0;
  z-index: 2;
  border-bottom: $border-size solid black;
}

.footer-content {
  width: 100%;
  position: relative;
  border: 2px solid #222940;
  transform-style: preserve-3d;
  perspective: 200px;
  z-index: 20;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-content: center;
  align-items: center;
  font-size: 0.8rem;
  border-top: 0;
  background-color: #e39e15;
}

.img-content {
  position: relative;
  background-color: #ffac06;
  z-index: 30;
  width: 78.2%;
  border: 2px solid black;
  border-width: 0 2px 0 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .img-wrapper {
    display: none;
    width: 44%;
    img {
      position: relative;
      z-index: 1;
    }
  }
}

.nav-bar-wrapper {
  position: relative;
  transform-style: preserve-3d;
  perspective: 200px;
  perspective-origin: center -100%;
  width: calc(100% + 4px);
  display: flex;
  justify-content: center;
  background-color: #5a55f8;
  border-bottom: 2px solid black;
  height: 3rem;

  .nav-bar-left-side,
  .nav-bar-right-side {
    border: $border-size solid #222940;
    background-color: #5a55f8;
    position: absolute;
    height: 100%;
    width: 100%;
    top: -($border-size);
    border-bottom: 0;
  }

  .nav-bar-left-side {
    left: calc(-39% - 1px);
    transform: rotateY(139deg) translateX(-50%);
    border-right: 2px solid black;
  }
  .nav-bar-right-side {
    right: calc(-39% - 1px);
    transform: rotateY(219deg) translateX(50%);
    border-left: 1px solid black;
  }
}

.nav-bar {
  display: none;
  list-style: none;
  background-color: #5a55f8;
  color: white;
  width: fit-content;
  padding: 0.4em 0.2em;
  text-transform: uppercase;
  position: relative;
  border-bottom: $border-size solid #222940;
  border-bottom: 0;
  width: 75%;

  .nav-bar__link {
    padding: 0.8em 0;
    display: flex;
    justify-content: center;
    flex-grow: 1;
    border: solid #222940;
    border-width: 0 $border-size;
    padding: 0.5rem 1rem;
    .__new-tag{
      font-size: 0.5rem;
      color: red;
      margin-right: 0.3rem;
      text-transform: capitalize;
    }
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

.mobile-nav {
  list-style: none;
  padding: 0;
  width: 100%;
  li {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 1rem 0;
    color: white;
    margin: 0.5rem 0;
    text-transform: uppercase;
  }
  .__new-tag{
    font-size: 0.5rem;
    color: red;
    margin-right: 0.3rem;
    text-transform: capitalize;
  }
}
.bottom-clip {
  background-image: url('/footer/bottom-clip.png');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3rem;
  cursor: pointer;
  position: relative;
  z-index: 1;
}

.cursor-container {
  height: 100%;
  width: calc(100% / 1.18);
  position: absolute;
  top: 0;
  display: none;
  .cursor {
    height: 100%;
    top: 0;
    background-color: #f34021;
    width: calc(100% / 7);
    position: absolute;
    transition: transform 2s;
    display: none;
  }
}

/* Breakpoints start here */

@media (min-width: 1200px) {
  .nav-bar {
    display: flex;
  }
  .nav-bar-wrapper {
    height: fit-content;
  }
  .nav-bar-left-side {
    border-right: 1px solid black !important;
  }
  .section-change-marker {
    height: 202px;
  }
  .img-wrapper {
    display: block !important;
  }
  .mobile-nav {
    display: none;
  }
  .cursor-container {
    display: block;
    .cursor {
      display: block;
    }
  }
}
</style>
