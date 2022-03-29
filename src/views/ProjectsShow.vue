<template>
    <section v-if="project">

        <div class="banner-project">
             <img :src="`/images/${project.image}`" :alt="project.name">
             <div class="triangle"></div>
             <h1>{{project.name}}</h1>
        </div>

    </section>
</template>

<script>
import sourceData from '@/data.json'
export default {
        components:{

            },
        props: {
            id: {type: Number, required: true}
        },
        computed: {
            project(){
                return sourceData.projects.find(
                    (project) => project.id === this.id
                );
            } 
        },
    }
</script>

<style scoped>

.banner-project {
    position: relative;
}

img {
    width: 100%;
    
}

h1{
    text-transform: uppercase;
    color: var(--white);
    position: absolute;
    top: 40px;
    left: 40px;
    padding: 20px;
    border-radius: 4px;
}

.triangle {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    border-top: 50vw solid rgba(0, 0, 0, 0.5);;
    border-right: 50vw solid transparent;
}
</style>