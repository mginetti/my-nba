<template>
  <div class="about">
    <div class="container">
      <div class="title">
        <span>History</span>
      </div>
    </div>
  </div>
</template>7
<script>
  export default {
    name: "About",
  }
</script>
<style lang="scss">
.about {
  background: blue;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  &:before {
    content: url("../assets/ball.svg");
    position: absolute;
    height: 100vh;
    width: 100vh;
  }
}
</style>
