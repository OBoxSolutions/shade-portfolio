<template>
  <div class="content">
    <div class="press-start-container">
      <button class="both-side-button button--red">
        PRESS START
      </button>
    </div>
    <div class="divider"></div>
    <div class="hire-team-container">
      <div class="hire-team-subcontainer">
        <p>Hire a team today!</p>
      </div>
    </div>
    <div class="cube-wrapper">
      <simple-cube
        top
        class="cube"
        front-side-background-color="#ffac06"
        other-sides-background-color="#15AAAA"
      >
        <p>
          We are a website design company, WebDo. The sole purpose of our
          existence is to create something you like. Truth be told, we just love
          making websites!
        </p>
      </simple-cube>
    </div>

    <div class="base-button-small-wrapper">
      <base-button only-bottom class="small-button button--red">
        <h1>Press Start</h1>
      </base-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionHeroFoot',
}
</script>

<style scoped lang="scss">
$background-color: #d6932f;
$border-style: 1px solid #877432;

.content {
  display: flex;
  width: 100%;
  align-items: flex-end;
  position: relative;
}

.press-start-container {
  background-color: $background-color;
  height: 380px;
  width: 35%;
  border: $border-style;
  padding: 40px;
  border-radius: 0 10px 0 0;
  font-weight: 400;
  font-size: 80px;
}

@media screen and (min-width: 900px) {
  .press-start-container {
    width: 45%;
    height: 500px;
  }
}

.base-button-small-wrapper {
  position: absolute;
  top: 700px;
  width: calc(100% - 60px);
  padding: 5px 30px;
  font-size: 50px;

  .small-button{
    padding: 0 !important;

    transform-style: preserve-3d;
    perspective: 100px;
    perspective-origin: bottom;

    h1{
      font-size: 3.75rem;
      font-weight: 400;
      margin: 1rem auto;
      color: #ffffff;
    }
    &:active {
      transform: translateY(10px);
    }
  }
}

@media screen and (min-width: 900px) {
  .base-button-small-wrapper {
    display: none;
  }
}

.both-side-button {
  display: none;
  padding-top: 16px !important;
  padding-bottom: 10px !important;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.15s;

  &::before{
    content: '';
    height: 100px;
    min-width: calc(100% + 10%);
    position: absolute;
    clip-path: polygon(0 0, 91% 0, 93.9% 12%, 4% 12%);
    background: #D43737;
    left: 0;

    transform: translate3d(0, 12.1rem, -1em);
    transition: transform 0.15s, min-width 0.15s;

  }
  &::after{
    content: '';
    width: 100px;
    min-height: calc(100% + 5%);
    position: absolute;
    clip-path: polygon(0 0, 20% 12%, 21% 100%, 0 100%);
    background: #D43737;
    top: 0;
    right: -100px;
    transition: all 0.15s;
  }
  &:active {
    background: #D43737;
    transform: translate3d(.2em, 0.3em, -.2em);
  }
  &:active::before {
    min-width: 100%;
    transform: translate3d(0, 0, -1em);
  }
  &:active::after {
    min-height: 90%;
    transform: translate3d(-50px, 0em, -20em);
  }

}

@media screen and (min-width: 900px) {
  .both-side-button {
    display: block;
  }
}

.divider {
  background-color: $background-color;
  height: 360px;
  width: 25%;
  border-top: $border-style;
}

.hire-team-container {
  height: 410px;
  background-color: $background-color;
  width: 30%;
  border: $border-style;
  padding: 0px 30px;
  border-radius: 10px 0 0 0;
  font-size: 40px;
}

@media screen and (min-width: 900px) {
  .hire-team-subcontainer {
    height: 450px;
  }
}

.hire-team-subcontainer {
  display: none;
  background-color: #ffb341;
  height: 100%;
  margin-top: 30px;
  border-radius: 10px;
  padding: 5px 0 0px 20px;
}

@media screen and (min-width: 900px) {
  .hire-team-subcontainer {
    display: block;
  }
}

.cube-wrapper {
  position: absolute;
  width: calc(100% - 4px);
  left: 0;
  top: 160px;

  .cube {
    height: 360px;
    border: 2px solid black;

    p {
      text-align: center;
      font-family: 'Press Start 2P', 'Lucida Sans', 'Lucida Sans Regular',
        'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif !important;
      border-bottom: 2px solid black;
    }
  }
}

@media screen and (min-width: 900px) {
  .cube-wrapper {
    display: none;
  }
}
</style>
