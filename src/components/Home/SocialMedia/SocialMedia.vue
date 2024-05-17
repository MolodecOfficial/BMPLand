<script setup>

import DiscordMedia from "./DiscordMedia/DiscordMedia.vue";
import TelegramMedia from "./TelegramMedia/TelegramMedia.vue";
import VKMedia from "./VKMedia/VKMedia.vue";
import YouTubeMedia from "./YouTubeMedia/YouTubeMedia.vue";
</script>

<template>
  <div class="social_media">
    <div class="social_header">
      <article class="social_text">
        Присоединяйся к нам вне сервера!
      </article>
    </div>
    <div class="social_plates">
      <DiscordMedia/>
      <VKMedia/>
      <TelegramMedia/>
      <YouTubeMedia/>
    </div>
  </div>
</template>

<style src="src/components/Home/SocialMedia/SocialMedia.scss">

</style>