<template>
  <div id="app">
    <nav>
      <div class="menu">
        <svg
          v-if="!isActive"
          @click="toggle"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="basketball-ball"
          class="svg-inline--fa fa-basketball-ball fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 512"
        >
          <path
            fill="#FFFFFF"
            d="M212.3 10.3c-43.8 6.3-86.2 24.1-122.2 53.8l77.4 77.4c27.8-35.8 43.3-81.2 44.8-131.2zM248 222L405.9 64.1c-42.4-35-93.6-53.5-145.5-56.1-1.2 63.9-21.5 122.3-58.7 167.7L248 222zM56.1 98.1c-29.7 36-47.5 78.4-53.8 122.2 50-1.5 95.5-17 131.2-44.8L56.1 98.1zm272.2 204.2c45.3-37.1 103.7-57.4 167.7-58.7-2.6-51.9-21.1-103.1-56.1-145.5L282 256l46.3 46.3zM248 290L90.1 447.9c42.4 34.9 93.6 53.5 145.5 56.1 1.3-64 21.6-122.4 58.7-167.7L248 290zm191.9 123.9c29.7-36 47.5-78.4 53.8-122.2-50.1 1.6-95.5 17.1-131.2 44.8l77.4 77.4zM167.7 209.7C122.3 246.9 63.9 267.3 0 268.4c2.6 51.9 21.1 103.1 56.1 145.5L214 256l-46.3-46.3zm116 292c43.8-6.3 86.2-24.1 122.2-53.8l-77.4-77.4c-27.7 35.7-43.2 81.2-44.8 131.2z"
          ></path>
        </svg>
        <div :class="{'menu__tab-active': isActive}" class="menu__tab">
          <div class="menu__tab--header">
            <button @click="toggle" class="close">X</button>
          </div>
          <div class="menu__tab--body">
            <ul>
              <li @click="changeRoute('home')" :class="{active: this.$route.name == 'home'}">Home</li>
              <li @click="changeRoute('history')" :class="{active: this.$route.name == 'history'}">History</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        isActive: false
      }
    },
    methods: {
      toggle() {
        this.isActive = !this.isActive
      },
      changeRoute(route) {
        if(this.$route.name != route) {
          this.$router.push({name: route})
        }
        this.toggle()
      }
    }
  }
</script>

<style lang="scss">
nav {
  position: fixed;
  background-color: transparent;
  width: 100%;
  z-index: 10;
  .menu {
    position: relative;
    svg {
      position: absolute;
      top: 0.8rem;
      right: 0.8rem;
      max-height: 2rem;
      max-width: 2rem;
      path {
        font-size: 2rem;
      }
    }
    &__tab {
        position: absolute;
        z-index: 9;
        width: 100%;
        background-color: white;
        height: 100vh;
        transition: all 0.7s;
        clip-path: circle(0px at 100% 0%);
        &--header {
          padding: 0.2rem 0.8rem;
          text-align: right;
          .close {
            background-color: transparent;
            border: none;
            font-size: 2rem;
            padding: 0;
            margin: 0;
            color: blue;
            font-weight: 600;
            &:focus, &:active {
              border: none;
              outline: none;
            }
          }
        }
        &--body {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          ul {
            text-decoration: none;
            list-style: none;
            text-align: center;
            li {
              text-align: center;
              padding: 0.5rem;
              color: blue;
              font-size: 1.4rem;
              &.active:before {
                content: url('./assets/ball.svg');
                height: 0.9rem;
                width: 0.9rem;
                position: absolute;
                left: -0.9rem;
              }
              &.active:after {
                content: url('./assets/ball.svg');
                height: 0.9rem;
                width: 0.9rem;
                position: absolute;
                right: -0.9rem;
              }
            }
          }
        }
    }
    &__tab-active {
      transition: all 0.7s;
      clip-path: circle(200% at 100% 0%);
    }
  }
}
</style>
