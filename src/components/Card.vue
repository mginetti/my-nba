<template>
  <div class="card">
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
<script>
export default {
  name: 'Card',
  props: {
    match: {
      type: Object,
      required: true,
    }
  },
  data: () => ({

  }),
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
}
</script>
<style lang="scss">
</style>
