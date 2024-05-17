<script setup>

import InfoPlates from "./InfoPlates/InfoPlates.vue";
import InfoSpan from "./InfoSpan/InfoSpan.vue";
</script>

<template>
  <InfoSpan/>
  <div class="server_info">
    <div class="server">
      <div class="modpack_name">
        <img class="gloomy_title" src="../../../../assets/Home/ModpacksStatus/Pictures/GloomyRise_Title.png">
      </div>
      <InfoPlates/>
    </div>
  </div>
</template>

<style src="../../ModpacksStatus/ModpackInfo/ModpackInfo.scss">

</style>