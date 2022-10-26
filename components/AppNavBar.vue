<template>
  <div class="nav">
    <div class="logo-container">
      <div class="logo"></div>
      <div class="clip">
        <div class="top"></div>
        <div class="bottom"></div>
      </div>
    </div>
    <ul class="nav-bar">
      <li
        v-for="(link, index) in links"
        :key="`navbar-${index}`"
        class="nav-bar__link"
      >
        <NuxtLink :to="link.url"> {{ link.text }} </NuxtLink>
      </li>
      <div class="location-line">
        <div class="cursor" :style="'transform:' + position"></div>
      </div>
    </ul>
    <div class="menu" @click="toggleMenu = !toggleMenu"></div>
    <div class="bottom-clip"></div>

    <!-- mobile menu  -->
    <div :class="toggleMenu ? 'mobile-menu' : 'hidden'">
      <button @click="toggleMenu = false" class="close-btn">x</button>

      <li
        v-for="(link, index) in links"
        :key="`navbar-${index}`"
        class="nav-bar__link"
      >
        <NuxtLink :to="link.url"> {{ link.text }} </NuxtLink>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppNavbar',
  data() {
    return {
      links: [
        { text: 'About us', url: '/' },
        { text: 'Portfolio', url: '/portfolio' },
        { text: 'Contacts', url: '/contact' },
        { text: 'Get started', url: '/get-started' },
        { text: "We're hiring", url: '/hiring' },
      ],
      position: '',
      toggleMenu: false,
    }
  },
  watch: {
    $route() {
      this.updatePosition()
    },
  },
  beforeMount() {
    this.updatePosition()
  },
  methods: {
    updatePosition() {
      if (typeof window !== 'undefined') {
        const page = window.location.pathname.replaceAll('/', '') || 'home'
        const positions = {
          home: 'translateX(calc(100%/6))',
          portfolio: 'translateX(calc(100%*1.5))',
          contact: 'translateX(calc(100%*2.8))',
          'get-started': 'translateX(calc(100%*4.2))',
          hiring: 'translateX(calc(100%*5.7))',
        }
        this.position = positions[page]
      }
    },
  },
}
</script>

<style scoped lang="scss">
.hidden {
  display: none;
}
.mobile-menu {
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  height: fit-content;
  width: 100%;
  padding-top: 30px;
  padding-bottom: 50px;
  background-color: #f34021;
  color: #222940;
  gap: 40px;
  border-bottom: 10px solid #81200f;

  .close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
  }

  .nav-bar__link {
    display: flex;
    flex-direction: column;
  }
}

.nav {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  background-color: #5a55f8;
  width: 100%;
  justify-content: space-between;
  .logo-container {
    height: 4rem;
    width: 10rem;
    display: flex;
    align-items: center;
    perspective: 16px;
    perspective-origin: right;
    transform-style: preserve-3d;
    position: relative;
    z-index: 30;

    .logo {
      width: 100%;
      height: 100%;
      background-image: url('/logo.svg');
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: center;
      position: absolute;
      margin-left: 0.5rem;
    }
    .clip {
      width: 10%;
      height: 95%;
      transform: rotateY(59deg) translateX(10px);
      position: absolute;
      right: 0;
      display: none;
      .top {
        background-color: #352fcf;
        height: 85%;
        border: 1px solid black;
        border-width: 1px 0 0 0;
        padding: 0 20px;
      }
      .bottom {
        background-color: #d08b00;
        height: 15%;
        padding: 0 20px;
      }
    }
  }
  .nav-bar {
    display: none;
    list-style: none;
    background-color: #5a55f8;
    color: white;
    width: 100%;
    margin-right: 10px;
    padding: 0.4em 0.2em;
    text-transform: uppercase;
    position: relative;
    z-index: 20;
    border: 1px solid #222940;
    border-width: 1px 1px 1px 0;
    font-size: 0.7rem;
    .nav-bar__link {
      display: flex;
      justify-content: center;
      flex-grow: 1;
      border: solid #222940;
      border-width: 0 2px;
      padding: 0 2rem;
      cursor: pointer;
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
      border-left-width: 0;
      border-top: 0px;
      .cursor {
        background-color: #f34021;
        padding: 0.1rem 0;
        width: calc(100% / 7);
        margin-top: 2px;
        transition: transform 2s;
        display: none;
      }
    }
  }

  .menu {
    background-image: url('/menu.png');
    height: 2rem;
    width: 2rem;
    margin: 0.2rem;
    cursor: pointer;
  }
  .bottom-clip {
    background-image: url('/nav-bar/bottom-clip.png');
    width: 100%;
    height: 0.7rem;
    position: absolute;
    background-size: cover;
    bottom: 0;
    margin-bottom: -0.6rem;
  }
}

/*Breakpoints start here*/
@media (min-width: 1200px) {
  .nav {
    margin: 10px;
    background-color: transparent;
    width: calc(100% - 10px);
    justify-content: initial;
    .logo-container {
      height: 5rem;
      width: 14rem;
      .logo {
        width: 90%;
        background-color: #15aaaa;
        border: 1px solid black;
        background-size: 70%;
      }
      .clip {
        display: block;
      }
    }
    .nav-bar {
      display: flex;
    }

    .menu {
      display: none;
    }
    .bottom-clip {
      display: none;
    }
  }
  .cursor {
    display: block !important;
  }
}
</style>
