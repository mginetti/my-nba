<template>
  <div class="home">
    <div class="title">
      <span>NEXT MATCH</span>
    </div>
    <div class="container">
      <template v-for="match in matches">
        <div :key="match.id" class="card">
          <div class="team">
            <div class="logo">{{ match.home_team.abbreviation }}</div>
            <div class="name">{{ match.home_team.full_name }}</div>
          </div>
          <div class="info">
            <span>VS</span>
            <span class="hour">19:00</span>
          </div>
          <div class="team">
            <div class="logo">{{ match.visitor_team.abbreviation }}</div>
            <div class="name">
              {{ match.visitor_team.full_name }}
            </div>
          </div>
        </div>
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
  }
};
</script>

<style lang="scss">
.home {
  background: blue;
  min-height: 100vh;
  position: relative;
  .title {
    width: 100%;
    text-align: center;
    padding: 1.2rem;
    span {
      color: white;
      font-weight: bold;
      font-size: 1.8rem;
    }
  }
  .container {
    position: relative;
    padding: 2.4rem 1.9rem;
    .card {
      box-shadow: 0px 5px 5px 2px rgba(224, 224, 224, 0.25);
      background: white;
      border-radius: 10px;
      padding: 1.5rem;
      display: flex;
      flex-direction: row;
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
      }
    }
  }
}
</style>