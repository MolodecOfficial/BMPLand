<script setup>

import Home from "./components/Home/Home.vue";
import About from "./components/About/About.vue";

function changeTitle(icon) {
  document.querySelector('link[rel="icon"]').setAttribute('href', icon)
}

window.onblur = () => {
  changeTitle('./logo_off.svg')
}
window.onfocus = () => {
  changeTitle('./logo_on.svg')
}

</script>

<template>
  <RouterView/>
</template>

<style scoped>

</style>
