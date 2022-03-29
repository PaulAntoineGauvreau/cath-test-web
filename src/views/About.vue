<template>
    <section>
        <h1>About</h1>
            <transition name="fade">
                <div v-if="showP" class="hey"> Hey toié!</div>
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
    margin-top: 80px;
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

button {
    background: var(--white);
    border: 1px black solid;
    padding: 5px 20px;
    margin: auto;
    display: block;
    margin-top: 20px;
    cursor: pointer;
}

h1{
    text-align: center;
}

.hey{
    background: hotpink;
    color: var(--white);
    padding: 10px;
    text-align: center;
    margin-top: 20px;
    border-radius: 4px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

button:hover {
    background: lightgray;
}
</style>