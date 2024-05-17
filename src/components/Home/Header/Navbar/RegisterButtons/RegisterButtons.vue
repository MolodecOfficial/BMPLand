<script setup>
const props = defineProps( {
  notRegistered: Boolean,
})

const emit = defineEmits(['updateNotRegistered']);

function regBtn() {
  emit('updateNotRegistered', !props.notRegistered);
}

</script>

<template>
  <div class="nav_register">
    <button class="register_btn" @click.prevent="regBtn" >
      Войти
    </button>
  </div>
  <div class="nav_download">
    <button class="download_btn">
      Начать играть!
    </button>
  </div>
</template>

<style src="../../../Header/Navbar/RegisterButtons/RegisterButtons.scss">

</style>