<script setup>
import SocialRegister from "./SocialRegister/SocialRegister.vue";
import BackgroundAnimation from "./BackgroundAnimation/BackgroundAnimation.vue";
</script>

<template>
  <BackgroundAnimation/>
  <div class="getting_start">
    <div class="reg_header">
      <p class="reg_title">
      Начни играть прямо сейчас!
      </p>
      <p class="reg_desc">
      Для того чтобы играть на нашем проекте, Вам необходимо <code>зарегистрироваться</code>
      </p>
    </div>
    <div class="register_types">
      <SocialRegister/>
    </div>
    <div class="other_ways">
      <a class="has_acc" href="">
        У меня уже есть аккаунт
      </a>
    </div>
  </div>
</template>

<style src="src/components/Home/GettingStart/GettingStart.scss">

</style>