<template>
  <TheNavigationVue/>
  <router-view></router-view>
</template>


<script>
  import TheNavigationVue from "./components/TheNavigation.vue";
  export default {
    components: {
      TheNavigationVue
    }
  }
</script>



<style>

</style>
