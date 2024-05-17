<script setup>

import SocialIcons from "./SocialIcons/SocialIcons.vue";
import Logo from "./Logo/Logo.vue";
import NavButtons from "./NavButtons/NavButtons.vue";
import RegisterButtons from "./RegisterButtons/RegisterButtons.vue";
import {ref} from "vue";
import PlayerAccount from "./PlayerAccount/PlayerAccount.vue";

const notRegistered = ref(true)

const updateNotRegistered = (value) => {
  notRegistered.value = value;
};

</script>

<template>
  <div class="nav">
    <Logo/>
    <SocialIcons/>
    <NavButtons/>
    <div class="reg_test">
      <PlayerAccount v-if="!notRegistered" :showRegisterButtons="updateNotRegistered(false)" />
      <RegisterButtons v-else :notRegistered="notRegistered" @updateNotRegistered="updateNotRegistered(false)"/>
    </div>
  </div>
</template>

<style src="../../Header/Navbar/Navbar.scss">

</style>