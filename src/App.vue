<template>
  <TheNavigationVue/>
      <router-view v-slot="{Component}">
        <transition name="page">
          <component :is="Component" :key="$route.path"></component>
        </transition>
      </router-view>
</template>


<script>
  import TheNavigationVue from "./components/TheNavigation.vue";
  
  export default {
    components: {
      TheNavigationVue,
    }
  }
</script>



<style>

  .page-enter-from,
  .page-leave-to{
    opacity: 0;
  }

  .page-enter-to{
    opacity: 1;
  } 

 .page-enter-active {
    transition: opacity 1s ease-in;
  }
  .page-leave-active {
    transition: opacity 0.3s ease-out;
  }



  

</style>
