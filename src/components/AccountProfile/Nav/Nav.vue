<script setup>

import SocialIcons from "../../Home/Header/Navbar/SocialIcons/SocialIcons.vue";
import NavButtons from "../../Home/Header/Navbar/NavButtons/NavButtons.vue";
import Logo from "../../Home/Header/Navbar/Logo/Logo.vue";
import PlayerAccount from "../../Home/Header/Navbar/PlayerAccount/PlayerAccount.vue";
</script>

<template>
  <div class="container">
    <div class="nav-bar">
      <Logo/>
      <SocialIcons/>
      <NavButtons/>
      <div class="reg_test">
        <PlayerAccount/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>