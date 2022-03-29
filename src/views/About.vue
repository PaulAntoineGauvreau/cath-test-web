<template>
    <section>
        <h1>About</h1>
            <transition name="fade">
                <div v-if="showP"> Hey toié!</div>
            </transition>
            <div>
                 <button @click="showP = !showP">Yo</button>
            </div>
    </section>
</template>

<script>

import {ref} from 'vue'

export default {
    setup(){
        const showP = ref(false)
        return {showP}
    }

    
}


</script>

<style scoped>

section {
    max-width: 600px;
    margin: auto;
}


/* .fade-enter-from{
    opacity: 0;
    transform: translateY(-300px);
} */
/* .fade-enter-to{
    opacity: 1;
} */
.fade-enter-active {
    /* transition: all .5s ease-in; */
    animation: wobble 0.5s ease;
}
/* .fade-leave-form{
    opacity: 1;
} */
.fade-leave-to{
    opacity: 0;
}
.fade-leave-active{
    transition: all .5s ease-out;
    transform: translateY(-300px);
}

@keyframes wobble {
    0% { transform: translateY(-300px); opacity : 0}
    50% { transform: translateY(0px); opacity : 1}
    60% {transform: translateX(8px) }
    70% {transform: translateX(-8px) }
    80% {transform: translateX(4px) }
    90% {transform: translateX(-4px) }
    100% {transform: translateX(0px) }
}

</style>