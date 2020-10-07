<template>
  <div class="home">
    <div class="container">
      <div class="title">
        <span>NEXT MATCHES</span>
      </div>
      <template v-for="match in matches">
        <div :key="match.id" class="card">
          <div class="team">
            <div class="logo">{{ match.home_team.abbreviation }}</div>
            <div class="name">{{ match.home_team.full_name }}</div>
          </div>
          <div class="info">
            <span class="day">{{ getDay(match) }}</span>
            <span>VS</span>
            <span class="hour">{{ getHour(match) }}</span>
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
  },
  methods: {
    getHour({ date, status }) {
      let toReturn = this.getDate(date, status)
        .toLocaleTimeString()
        .split(":");
      return `${toReturn[0]}:${toReturn[1]}`;
    },
    getDay({ date, status }) {
      const toReturn = this.getDate(date, status).toLocaleDateString();
      return toReturn;
    },
    getDate(date, status) {
      let day = date.split("T")[0];
      let hour = status.split(" ")[0];
      let h = hour.split(":")[0];
      let m = hour.split(":")[1];
      if (status.includes("PM")) {
        h = parseInt(h) + 12;
      }
      return new Date(`${day}T${h}:${m}:00.000-04:00`);
    }
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
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 2.4rem 3rem;
    overflow-y: scroll;
    .title {
      width: 100%;
      text-align: center;
      padding: 1.2rem;
      margin-bottom: 2.5rem;

      span {
        color: white;
        font-weight: bold;
        font-size: 1.8rem;
      }
    }

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

    &::-webkit-scrollbar {
      width: 0em;
    }

    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }

    &::-webkit-scrollbar-thumb {
      background-color: darkgrey;
      outline: 1px solid slategrey;
    }
  }
}
</style>