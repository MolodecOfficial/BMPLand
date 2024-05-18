<script setup>

import GettingStart from "./GettingStart/GettingStart.vue";
import AboutOnline from "./AboutOnline/AboutOnline.vue";
import Description from "./Description/Description.vue";
import ModpacksStatus from "./ModpacksStatus/ModpacksStatus.vue";
import DownloadLauncher from "./DownloadLauncher/DownloadLauncher.vue";
import SocialMedia from "./SocialMedia/SocialMedia.vue";
import Footer from "./Footer/Footer.vue";
import Header from "./Header/Header.vue";
</script>

<template>
  <div class="home">
    <Header/>
    <Description/>
    <AboutOnline/>
    <ModpacksStatus/>
    <GettingStart/>
    <DownloadLauncher/>
    <SocialMedia/>
    <Footer/>
  </div>

</template>

<style scoped>
@media only screen and (min-width: 120px) and (max-width: 600px) {
  .home {
    width: 100vw;
    overflow-x: hidden;
  }
}
@media only screen and (min-width: 601px) and (max-width: 1024px) {
  .home {
    width: 100vw;
    overflow-x: hidden;
  }
}

</style>