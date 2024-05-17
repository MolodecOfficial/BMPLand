<script setup>

</script>

<template>
  <div class="profile_plate">
    <div class="profile">
      <div class="profile_icon">
        <img class="profile_icon_img" src="../../../../../assets/Home/Header/Navbar/PlayerAccount/avatar.jpg"/>
      </div>
      <div class="profile_info">
        <div class="profile_name">
          <RouterLink class="name" to="/AccountProfile">
          <a class="name">Molodec_Official</a>
          </RouterLink>
        </div>
      </div>
    </div>
    <div class="options">
      <RouterLink class="name" to="/">
      <a class="quit_btn" href="">
        Выйти
      </a>
      </RouterLink>
    </div>
  </div>
</template>

<style src="src/components/Home/Header/Navbar/PlayerAccount/PlayerAccount.scss">

</style>