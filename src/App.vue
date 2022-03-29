<template>
  <TheNavigationVue/>
  <router-view class="contenue"></router-view>
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
.contenue{
  margin-top:75px
}

</style>
