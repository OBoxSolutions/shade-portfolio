<template>
  <div class="content">
    <div class="press-start-container">
      <base-button class="w-full py-1 base-button button--red">
        Press start
      </base-button>
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
      <base-button class="w-full base-button-small" flat>
        Press start
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

  .base-button-small {
    padding-top: 20px !important;
    padding-bottom: 20px !important;
  }
}

@media screen and (min-width: 900px) {
  .base-button-small-wrapper {
    display: none;
  }
}

.base-button {
  display: none;
  padding-top: 16px !important;
  padding-bottom: 10px !important;
  border-radius: 10px;
}

@media screen and (min-width: 900px) {
  .base-button {
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
