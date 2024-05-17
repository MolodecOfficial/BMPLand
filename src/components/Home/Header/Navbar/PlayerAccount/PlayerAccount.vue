<script setup>

const props = defineProps({
  regBtn: Function,
});

const emit = defineEmits(['updateNotRegistered']);

const showRegisterButtons = () => {
  emit('updateNotRegistered', true);
};
</script>

<template>
  <div class="profile_plate">
    <div class="profile">
      <div class="profile_icon">
        <img class="profile_icon_img" src="../../../../../assets/Home/Header/Navbar/PlayerAccount/avatar.jpg"/>
      </div>
      <div class="profile_info">
        <div class="profile_name">
          <a class="name" href="">Molodec_Official</a>
        </div>
      </div>
    </div>
    <div class="options">
      <a class="quit_btn" href="" @click="showRegisterButtons">
        Выйти
      </a>
    </div>
  </div>
</template>

<style src="src/components/Home/Header/Navbar/PlayerAccount/PlayerAccount.scss">

</style>