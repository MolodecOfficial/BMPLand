<script setup>

import SocialIcons from "../Home/Header/Navbar/SocialIcons/SocialIcons.vue";
import NavButtons from "../Home/Header/Navbar/NavButtons/NavButtons.vue";
import Logo from "../Home/Header/Navbar/Logo/Logo.vue";
import PlayerAccount from "../Home/Header/Navbar/PlayerAccount/PlayerAccount.vue";
import Nav from "./Nav/Nav.vue";
import Profile from "./Profile/Profile.vue";

function goBack() {
  window.open("/")
}
</script>

<template>
  <Nav/>
  <Profile/>
</template>

<style src="src/components/AccountProfile/AccountProfile.scss">

</style>