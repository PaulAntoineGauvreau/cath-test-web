<template>
    <div>
        <header>
            <nav>
                <router-link class="cath" to="/" >Catherine Langelier</router-link>
                <button class="allWork" @click="showMenu = !showMenu">Portfolio</button>
            </nav>
        </header>
        <transition name="menu">
                <div class="menuSide" v-if="showMenu">
                    
                    <router-link
                        v-for="project in projects"
                        :key="project.id"
                        :to="{ name:'project.show',params:{id: project.id, slug:project.slug}}"
                    >
                    {{project.name}}</router-link>
                    <router-link i to="/about" >About</router-link>
                </div>
        </transition>
    </div>
</template>

<script>
    import {ref} from 'vue'
    import sourceData from '@/data.json'
    export default {
        data(){
            return {
                projects: sourceData.projects
            }
        },
        setup(){
            const showMenu = ref(false)
            return {showMenu}
        }
    }
</script>

<style scoped>
    header {
        width: 100%;
        position: fixed;
        top: 0;
        z-index: 2;
        background: var(--white);
        padding: 20px;
        /* border: solid var(--text-blue) 3px; */
    }
    nav {
        width: 100%;
        max-width: 900px;
        margin: auto;
        display: flex;
        justify-content: space-between;
    }

    div>a {
        /* margin-left: 15px; */
        margin-bottom: 10px;
        padding: 20px;
        width: 100%;
        border: 2px solid var(--text-blue);
        /* background: rgba(255,255,255,0.8); */
    }

     div>a:hover {
        background: var(--text-blue);
        color: var(--white);
        width: 100%;
        padding: 20px;
        border: 2px solid var(--text-blue);
    }

    .allWork {
        background: var(--white);
        border: 2px var(--text-blue) solid;
        padding: 5px 20px;
        color: var(--text-blue);
    }

    .allWork:hover{
        background: var(--text-blue);
        color: var(--white);
        cursor: pointer;
    }
    .allWork:active{
        background: var(--white);
        color: var(--text-blue);
    }

.menu-enter-from{
    transform: translate(390px);
    opacity: 0;
} 
.menu-enter-active {
    transition: all .5s ease-in; 
}

.menu-leave-active{
    transition: all .5s ease-out;
    transform: translate(390px);
    opacity: 0;
}

.menuSide {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 90vh;
    position: fixed;
    z-index: 2;
    background: rgba(255,255,255,0.8);
    max-width: 500px;
    width: 100%;
    padding: 40px;
    left:0;
    top: 75px;
}

.cath {
    align-self: flex-end;
}

</style>