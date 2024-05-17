<script setup>
function openLink() {
  window.open('https://www.youtube.com/watch?v=MqsrmhNmN3k')
}

</script>

<template>
  <div class="description_action">
    <button id="click_me" @click="openLink">
      Начни прямо сейчас
    </button>
    <div class="online">
      <div class="online_mark"></div>
      <p>Один из разработчиков сейчас на сервере</p>
    </div>
  </div>
</template>

<style src="../../Description/Action/Action.scss">

</style>