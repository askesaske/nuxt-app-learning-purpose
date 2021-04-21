<template>
  <div>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSidenav :show="displaySidenav" @close="displaySidenav = false" />
    <Nuxt />
  </div>
</template>

<script>
import TheHeader from "@/components/Navigation/TheHeader";
import TheSidenav from "@/components/Navigation/TheSidenav";

export default {
  // middleware: 'log',
  components: {
    TheSidenav,
    TheHeader
  },
  data() {
    return {
      displaySidenav: false
    };
  }
}
</script>

<style>
html {
  font-family: 'OpenSans', sans-serif;
}

body {
  margin: 0;
}
</style>
