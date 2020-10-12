<template>
  <div class="home">
    <div class="container">
      <div class="title">
        <span>NEXT MATCHES</span>
      </div>
      <template v-for="match in matches">
        <card :match="match" :key="match.id" />
      </template>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  created() {
    this.$store.dispatch("fetchMatch");
  },
  computed: {
    matches() {
      return this.$store.getters.getMatches;
    }
  },
  methods: {
  },
  components: {
    Card: () => import('@/components/Card')
  }
};
</script>

<style lang="scss">
.home {
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
  .container {

    .card {
      box-shadow: 0px 5px 5px 2px rgba(224, 224, 224, 0.25);
      background: white;
      border-radius: 10px;
      padding: 1.5rem 0.2rem;
      display: flex;
      flex-direction: row;
      margin-bottom: 2.5rem;
      &:last-child {
        margin-bottom: 0;
      }
      .team {
        width: 43%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .logo {
          height: 3.5rem;
          width: 3.5rem;
          border-radius: 50%;
          background: gainsboro;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .name {
          padding: 0.7rem 1rem;
          font-size: 1rem;
          text-align: center;
          width: calc(100% - 0.5rem);
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
      }
      .info {
        justify-content: center;
        align-items: center;
        width: 14%;
        display: flex;
        flex-direction: column;
        span {
          font-size: 1.8rem;
        }
        .hour {
          font-size: 1rem;
        }
        .day {
          font-size: 0.8rem;
        }
      }
    }


  }
}
</style>
